export const projects = [
  {
    id: 'study-planner',
    title: 'Study Planner',
    tagline: 'AI-Powered Academic Planning',
    technologies: ['React', 'Flask', 'Supabase', 'GPT-4o', 'PostgreSQL'],
    date: 'Jul 2025',
    shortDescription:
      'AI-powered system that parses course outlines to auto-generate 50+ deadlines and study schedules. Features dual AI engine support (OpenAI GPT-4o, Google Gemini) with OCR for PDF, Word, and text inputs.',
    fullDescription:
      'AI-powered system that parses course outlines to auto-generate 50+ deadlines and study schedules. Features dual AI engine support (OpenAI GPT-4o, Google Gemini) with OCR for PDF, Word, and text inputs. Full-stack platform with real-time sync, dashboards, calendar views, and grade-tracking tools.',
    highlights: [
      'Dual AI engine support with OCR capabilities',
      'Real-time sync with Row Level Security',
      'Interactive dashboards and calendar views',
      'Task management and admin analytics',
      'Secure authentication and responsive UI',
    ],
    featured: true,
  },
  {
    id: 'subway-screen',
    title: 'Subway Screen',
    tagline: 'Real-Time Transit Display System',
    technologies: ['Java', 'APIs', 'GUI', 'MySQL', 'Javadoc'],
    date: 'Jul 2024',
    shortDescription:
      'Subway display showing 100+ real-time train updates, stations, and transfers. Built with MySQL database to manage 50+ rotating ads with different formats and schedules.',
    fullDescription:
      'Subway display showing 100+ real-time train updates, stations, and transfers. Built with MySQL database to manage 50+ rotating ads with different formats and schedules. Integrated weather and news APIs, filtering 200+ results for relevant displays. Added a train tracker with automated announcements to cut query time by 30%. Applied OOP with UML modeling, inheritance, and robust error handling.',
    highlights: [
      'Real-time train tracking system',
      'MySQL database for ad management',
      'Weather and news API integration',
      'Automated announcements reducing query time by 30%',
      'OOP design with UML modeling',
    ],
    featured: false,
  },
  {
    id: 'movie-theatre',
    title: 'Movie Theatre',
    tagline: 'Full-Stack Ticket Booking System',
    technologies: ['C++', 'Java', 'React', 'Spring Boot', 'MySQL', 'Git'],
    date: 'Dec 2024',
    shortDescription:
      'Ticket booking system with seat selection, secure payments, and email tickets. Implemented user roles with tailored benefits for registered users.',
    fullDescription:
      'Ticket booking system with seat selection, secure payments, and email tickets. Implemented user roles with tailored benefits for registered users. Database manages 1,000+ profiles, payments, and ticketing transactions. Created an interactive UI for movie searches, theatre selection, and showtime viewing. Used Git to manage 50+ commits across the project lifecycle.',
    highlights: [
      'Interactive seat selection UI',
      'Secure payment processing',
      'Email ticket delivery',
      'User role management system',
      'Database handling 1,000+ profiles',
    ],
    featured: true,
  },
  {
    id: 'bar-dodging-game',
    title: 'Bar-Dodging Game',
    tagline: 'Arduino Arcade Game',
    technologies: ['C', 'Arduino', 'Control Stick', 'Prusa-Slicer'],
    date: 'May 2021',
    shortDescription:
      'Arcade-style joystick game on Arduino with adaptive difficulty scaling. Features scrolling bar obstacles with random gaps that shrink and speed up as scores increase.',
    fullDescription:
      'Arcade-style joystick game on Arduino with adaptive difficulty scaling. Features scrolling bar obstacles with random gaps that shrink and speed up as scores increase. Includes collectible stars, high-score system, and rules/options menu. Designed difficulty curves to maintain engagement over 200+ test rounds. Optimized collision detection, input handling, and scoring logic for smooth gameplay.',
    highlights: [
      'Arduino-based hardware implementation',
      'Adaptive difficulty system',
      'High-score tracking',
      'Optimized collision detection',
      'Collectible stars and power-ups',
    ],
    featured: false,
  },
]

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id)
}

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured)
}

