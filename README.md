# Fateh Ali Bukhari - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience.

## Features

- 🎨 Modern, clean UI with smooth animations
- 📱 Fully responsive design
- 🚀 Built with React and Vite
- 💅 Styled with Tailwind CSS
- 🎯 Smooth scrolling navigation
- 📹 Video placeholders for projects (ready for your videos)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Adding Project Videos

To add videos to your projects:

1. Place your video files in the `public/videos/` directory
2. Update the `Projects.jsx` component to include video elements:

```jsx
<video className="w-full h-full object-cover" controls>
  <source src="/videos/study-planner.mp4" type="video/mp4" />
</video>
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Icons

## License

This project is open source and available under the MIT License.

