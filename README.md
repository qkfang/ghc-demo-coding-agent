# Microsoft Build Sessions Scraper

A Node.js application that extracts session information from Microsoft Build website and exports it to Excel format.

## Features

- Scrapes all session data from https://build.microsoft.com/en-US/sessions
- Handles pagination automatically
- Extracts session title, link, description, and speakers
- Exports data to Excel (.xlsx) format
- Respectful scraping with delays between requests

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Usage

Run the scraper:
```bash
npm start
# or
npm run scrape
# or
node scrape-build-sessions.js
```

For a demonstration with sample data (useful for testing):
```bash
npm run demo
# or
npm test
# or
node test-scraper.js
```

The scraper will:
1. Visit the Microsoft Build sessions page
2. Extract session information from each page
3. Continue to next pages until all sessions are collected
4. Generate an Excel file with all session data

The output file will be named `microsoft-build-sessions-YYYY-MM-DD.xlsx`

## Demo Mode

If you can't access the Microsoft Build website or want to test the Excel generation functionality, use the demo mode which creates sample session data and generates an Excel file to demonstrate the output format.

## Output Format

The Excel file contains the following columns:
- **Session Title**: The name/title of the session
- **Session Link**: Direct URL to the session page
- **Session Description**: Summary or abstract of the session
- **Session Speakers**: List of speakers for the session

## Dependencies

- `axios`: HTTP client for making requests
- `cheerio`: Server-side jQuery for HTML parsing
- `xlsx`: Excel file generation

## Error Handling

The scraper includes error handling for:
- Network failures
- Missing elements on pages
- Pagination detection
- Empty responses