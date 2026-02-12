# LEGO Robotics Team Website

A modern, responsive React website for a LEGO Robotics team, built with Vite and React Router.

## Features

- **Three Pages:**
  - **Home**: Team introduction, highlights, and call-to-action
  - **About**: Mission statement, values, team information, and achievements
  - **Robotics**: Featured robotics projects and technologies used

- **Modern Tech Stack:**
  - React 19
  - React Router DOM for navigation
  - Vite for fast development and building
  - Custom CSS styling with responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Navigate to the robotics-website directory:
   ```bash
   cd robotics-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

### Building for Production

Build the website:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
robotics-website/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Robotics.jsx
│   │   └── Robotics.css
│   ├── App.jsx            # Main app component with routing
│   ├── App.css
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## Screenshots

See the PR for screenshots of all three pages.

