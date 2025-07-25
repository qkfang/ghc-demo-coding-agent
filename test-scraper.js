const BuildSessionsScraper = require('./scrape-build-sessions');

// Test the scraper with sample data
class TestBuildSessionsScraper extends BuildSessionsScraper {
    constructor() {
        super();
        console.log('Running in test mode with sample data...');
    }

    async scrapeAllSessions() {
        console.log('Generating sample Microsoft Build sessions data...');
        
        // Sample data that would typically be scraped from the website
        this.sessions = [
            {
                title: "Building AI-powered applications with Azure OpenAI Service",
                link: "https://build.microsoft.com/en-US/sessions/12345",
                description: "Learn how to integrate Azure OpenAI Service into your applications to build intelligent, conversational experiences. This session covers best practices, security considerations, and real-world examples.",
                speakers: "John Smith, Sarah Johnson"
            },
            {
                title: "Modern web development with .NET 9 and Blazor",
                link: "https://build.microsoft.com/en-US/sessions/23456",
                description: "Discover the latest features in .NET 9 and how Blazor enables full-stack web development with C#. See live demos of interactive web UIs and server-side rendering.",
                speakers: "Mike Wilson"
            },
            {
                title: "Scaling applications with Azure Container Apps",
                link: "https://build.microsoft.com/en-US/sessions/34567",
                description: "Deep dive into Azure Container Apps and learn how to build and deploy microservices at scale. Topics include auto-scaling, networking, and observability.",
                speakers: "Emily Chen, David Rodriguez"
            },
            {
                title: "GitHub Copilot for productivity and code quality",
                link: "https://build.microsoft.com/en-US/sessions/45678",
                description: "Explore how GitHub Copilot can accelerate your development workflow. Learn tips and tricks for getting the most out of AI-assisted coding.",
                speakers: "Alex Turner"
            },
            {
                title: "Microsoft Graph and the future of workplace collaboration",
                link: "https://build.microsoft.com/en-US/sessions/56789",
                description: "Understand how Microsoft Graph enables rich integrations across Microsoft 365. Build applications that connect people, content, and insights.",
                speakers: "Lisa Park, James Miller"
            }
        ];

        console.log(`Sample sessions created: ${this.sessions.length}`);
        this.generateExcel();
    }
}

// Run the test scraper
async function main() {
    const scraper = new TestBuildSessionsScraper();
    await scraper.scrapeAllSessions();
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = TestBuildSessionsScraper;