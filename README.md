# React Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ⚡️ Fast development with Vite
- 🎨 Beautiful UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🚀 Ready for deployment on Netlify

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Deployment on Netlify

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Login:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

## Project Structure

```
react_portfolio/
├── public/          # Static assets
├── src/
│   ├── App.jsx     # Main application component
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── netlify.toml    # Netlify configuration
├── vite.config.js  # Vite configuration
└── package.json    # Dependencies
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## License

MIT
