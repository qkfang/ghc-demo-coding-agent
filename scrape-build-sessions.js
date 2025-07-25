const axios = require('axios');
const cheerio = require('cheerio');
const XLSX = require('xlsx');
const fs = require('fs');

class BuildSessionsScraper {
    constructor() {
        this.baseUrl = 'https://build.microsoft.com/en-US/sessions';
        this.sessions = [];
        this.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        };
    }

    async scrapeAllSessions() {
        console.log('Starting to scrape Microsoft Build sessions...');
        
        try {
            let page = 1;
            let hasNextPage = true;
            let consecutiveEmptyPages = 0;
            const maxEmptyPages = 3; // Stop after 3 consecutive empty pages

            while (hasNextPage && consecutiveEmptyPages < maxEmptyPages) {
                console.log(`Scraping page ${page}...`);
                const pageUrl = page === 1 ? this.baseUrl : `${this.baseUrl}?page=${page}`;
                
                const sessionData = await this.scrapePage(pageUrl);
                
                if (sessionData.sessions.length === 0) {
                    consecutiveEmptyPages++;
                    console.log(`No sessions found on page ${page} (${consecutiveEmptyPages}/${maxEmptyPages} empty pages)`);
                    
                    if (consecutiveEmptyPages >= maxEmptyPages) {
                        console.log('Maximum consecutive empty pages reached. Stopping pagination.');
                        hasNextPage = false;
                    }
                } else {
                    consecutiveEmptyPages = 0; // Reset counter
                    this.sessions.push(...sessionData.sessions);
                    console.log(`Found ${sessionData.sessions.length} sessions on page ${page}`);
                    hasNextPage = sessionData.hasNextPage;
                }
                
                page++;
                
                // Add delay to be respectful to the server
                if (hasNextPage) {
                    await this.delay(2000);
                }
            }

            console.log(`Total sessions scraped: ${this.sessions.length}`);
            
            if (this.sessions.length > 0) {
                this.generateExcel();
            } else {
                console.log('No sessions found. This might be due to:');
                console.log('1. Network connectivity issues');
                console.log('2. Website structure changes');
                console.log('3. Access restrictions');
                console.log('\nTry running the demo with: npm run demo');
            }
            
        } catch (error) {
            console.error('Error scraping sessions:', error.message);
            console.log('\nIf you\'re having connectivity issues, try the demo with: npm run demo');
        }
    }

    async scrapePage(url) {
        try {
            const response = await axios.get(url, { headers: this.headers });
            const $ = cheerio.load(response.data);
            
            const sessions = [];
            const sessionElements = $('.session-card, .session-item, [data-session], .grid-item').filter((i, el) => {
                const text = $(el).text().toLowerCase();
                return text.includes('session') || text.includes('speaker') || text.includes('description');
            });

            // Alternative selectors to try if the above doesn't work
            const alternativeSelectors = [
                '.card', '.item', '.session', '.content-card',
                '[href*="session"]', '[href*="speaker"]'
            ];

            let elementsFound = sessionElements.length;
            
            if (elementsFound === 0) {
                for (const selector of alternativeSelectors) {
                    const elements = $(selector);
                    if (elements.length > 0) {
                        console.log(`Found ${elements.length} elements with selector: ${selector}`);
                        elementsFound = elements.length;
                        break;
                    }
                }
            }

            // Extract session information
            sessionElements.each((index, element) => {
                const $element = $(element);
                
                const title = this.extractTitle($element, $);
                const link = this.extractLink($element, $);
                const description = this.extractDescription($element, $);
                const speakers = this.extractSpeakers($element, $);

                if (title || link) {
                    sessions.push({
                        title: title || 'N/A',
                        link: link || 'N/A',
                        description: description || 'N/A',
                        speakers: speakers || 'N/A'
                    });
                }
            });

            // Check for next page
            const hasNextPage = this.checkForNextPage($);

            return {
                sessions,
                hasNextPage
            };

        } catch (error) {
            console.error(`Error scraping page ${url}:`, error.message);
            return { sessions: [], hasNextPage: false };
        }
    }

    extractTitle($element, $) {
        const titleSelectors = [
            'h1', 'h2', 'h3', 'h4', '.title', '.session-title', 
            '.card-title', '.name', '.session-name', '[data-title]'
        ];
        
        for (const selector of titleSelectors) {
            const title = $element.find(selector).first().text().trim();
            if (title) return title;
        }
        
        // Fallback: look for the first meaningful text content
        const text = $element.text().trim();
        if (text) {
            const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
            return lines[0] || null;
        }
        
        return null;
    }

    extractLink($element, $) {
        const link = $element.find('a').first().attr('href') || $element.attr('href');
        if (link) {
            return link.startsWith('http') ? link : `https://build.microsoft.com${link}`;
        }
        return null;
    }

    extractDescription($element, $) {
        const descriptionSelectors = [
            '.description', '.summary', '.abstract', '.content', 
            '.session-description', '.card-text', 'p'
        ];
        
        for (const selector of descriptionSelectors) {
            const desc = $element.find(selector).first().text().trim();
            if (desc && desc.length > 20) return desc;
        }
        
        return null;
    }

    extractSpeakers($element, $) {
        const speakerSelectors = [
            '.speaker', '.speakers', '.author', '.presenter', 
            '.speaker-name', '.presenter-name', '[data-speaker]'
        ];
        
        const speakers = [];
        
        for (const selector of speakerSelectors) {
            $element.find(selector).each((i, el) => {
                const speaker = $(el).text().trim();
                if (speaker && !speakers.includes(speaker)) {
                    speakers.push(speaker);
                }
            });
        }
        
        return speakers.length > 0 ? speakers.join(', ') : null;
    }

    checkForNextPage($) {
        const nextPageSelectors = [
            '.next', '.pagination .next', '[aria-label*="next"]',
            '.pager .next', '.pagination a[href*="page"]'
        ];
        
        for (const selector of nextPageSelectors) {
            if ($(selector).length > 0) {
                return true;
            }
        }
        
        return false;
    }

    generateExcel() {
        if (this.sessions.length === 0) {
            console.log('No sessions found to export.');
            return;
        }

        console.log('Generating Excel file...');
        
        // Prepare data for Excel
        const worksheetData = [
            ['Session Title', 'Session Link', 'Session Description', 'Session Speakers']
        ];
        
        this.sessions.forEach(session => {
            worksheetData.push([
                session.title,
                session.link,
                session.description,
                session.speakers
            ]);
        });

        // Create workbook and worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
        
        // Auto-size columns
        const colWidths = [
            { wch: 50 }, // Title
            { wch: 80 }, // Link
            { wch: 100 }, // Description
            { wch: 30 }  // Speakers
        ];
        worksheet['!cols'] = colWidths;

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Build Sessions');

        // Write file
        const filename = `microsoft-build-sessions-${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(workbook, filename);
        
        console.log(`Excel file generated: ${filename}`);
        console.log(`Total sessions exported: ${this.sessions.length}`);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Run the scraper
async function main() {
    const scraper = new BuildSessionsScraper();
    await scraper.scrapeAllSessions();
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = BuildSessionsScraper;