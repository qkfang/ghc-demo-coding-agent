# LEGO Robotics Team Website

A modern, responsive website for our LEGO Robotics Team built with React and Vite.

## Features

- **Three Pages**: Home, About, and Robotics pages showcasing team information
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Fast Performance**: Built with Vite for optimal loading and development experience

## Pages

### Home
Welcome page introducing the team with mission, vision, and key information.

### About
Detailed information about the team's story, values, team structure, and how to join.

### Robotics
Showcases current projects, robot technologies, achievements, and the design process.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd lego-robotics-website
```

2. Install dependencies:
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

Create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Project Structure

```
lego-robotics-website/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Robotics.jsx
│   │   └── Page.css
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Project dependencies
```

## Customization

To customize the website content:

1. **Update pages**: Edit the files in `src/pages/`
2. **Modify styles**: Edit the CSS files for colors, fonts, and layout
3. **Add new pages**: Create new components and add routes in `App.jsx`

## License

This project is created for educational purposes as part of our LEGO Robotics Team activities.
