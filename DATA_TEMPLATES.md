# Data Templates & Type Definitions

## 📊 Type Definitions

### Main Types

```typescript
// src/types/index.ts
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  features: string[]
  github?: string
  demo?: string
  category: string
  status: 'completed' | 'in-progress' | 'planned'
  startDate: string
  endDate?: string
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
  experience: string // e.g., "2+ years"
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  responsibilities: string[]
  technologies: string[]
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  current: boolean
  gpa?: string
  description?: string
  achievements: string[]
  location: string
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar?: string
  rating: number
  date: string
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon: string
  username: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  availability: string
  timezone: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image?: string
  tags: string[]
  publishDate: string
  readTime: string
  featured: boolean
}
```

## 📋 Projects Data

```typescript
// src/data/projects.ts
import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
    longDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.',
    image: '/src/assets/images/projects/ecommerce.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe',
      'Tailwind CSS',
      'JWT'
    ],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and wishlist',
      'Secure payment processing',
      'Order management system',
      'Admin dashboard',
      'Responsive design',
      'Email notifications'
    ],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-demo.com',
    category: 'Full-Stack Development',
    status: 'completed',
    startDate: '2023-01-15',
    endDate: '2023-04-20'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'A powerful task management application that helps teams collaborate effectively with real-time updates, file sharing, and project tracking.',
    image: '/src/assets/images/projects/task-manager.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Socket.io',
      'Node.js',
      'PostgreSQL',
      'Redux Toolkit',
      'Material-UI'
    ],
    features: [
      'Real-time collaboration',
      'Project and task organization',
      'File attachments',
      'Team management',
      'Progress tracking',
      'Notifications',
      'Time tracking',
      'Mobile responsive'
    ],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://taskmanager-demo.com',
    category: 'Web Application',
    status: 'completed',
    startDate: '2023-05-01',
    endDate: '2023-07-15'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Framer Motion.',
    longDescription: 'A beautiful and performant portfolio website showcasing projects, skills, and experience with smooth animations and modern design.',
    image: '/src/assets/images/projects/portfolio.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Vite',
      'Vercel'
    ],
    features: [
      'Responsive design',
      'Smooth animations',
      'Dark/light mode',
      'SEO optimized',
      'Contact form',
      'Project showcase',
      'Blog integration',
      'Performance optimized'
    ],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.com',
    category: 'Frontend Development',
    status: 'completed',
    startDate: '2023-08-01',
    endDate: '2023-09-15'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'A comprehensive weather dashboard with forecasts and interactive maps.',
    image: '/src/assets/images/projects/weather.jpg',
    technologies: [
      'React',
      'JavaScript',
      'Chart.js',
      'OpenWeather API',
      'Mapbox',
      'CSS3'
    ],
    features: [
      'Current weather conditions',
      '7-day forecast',
      'Interactive weather maps',
      'Location search',
      'Weather charts',
      'Severe weather alerts',
      'Geolocation support',
      'Offline capabilities'
    ],
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-dashboard-demo.com',
    category: 'Frontend Development',
    status: 'in-progress',
    startDate: '2023-10-01'
  }
]

export const projectCategories = [
  'All',
  'Full-Stack Development',
  'Frontend Development',
  'Backend Development',
  'Mobile Development',
  'Web Application',
  'API Development'
]
```

## 🛠️ Skills Data

```typescript
// src/data/skills.ts
import { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 'expert',
    icon: '/src/assets/icons/react.svg',
    experience: '4+ years'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    icon: '/src/assets/icons/typescript.svg',
    experience: '3+ years'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    level: 'expert',
    icon: '/src/assets/icons/javascript.svg',
    experience: '5+ years'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    icon: '/src/assets/icons/nextjs.svg',
    experience: '2+ years'
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'expert',
    icon: '/src/assets/icons/tailwind.svg',
    experience: '3+ years'
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    level: 'expert',
    icon: '/src/assets/icons/html5.svg',
    experience: '6+ years'
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    level: 'expert',
    icon: '/src/assets/icons/css3.svg',
    experience: '6+ years'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    icon: '/src/assets/icons/nodejs.svg',
    experience: '3+ years'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 'advanced',
    icon: '/src/assets/icons/express.svg',
    experience: '3+ years'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 'intermediate',
    icon: '/src/assets/icons/python.svg',
    experience: '2+ years'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    level: 'intermediate',
    icon: '/src/assets/icons/graphql.svg',
    experience: '1+ year'
  },

  // Database
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 'advanced',
    icon: '/src/assets/icons/mongodb.svg',
    experience: '3+ years'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'intermediate',
    icon: '/src/assets/icons/postgresql.svg',
    experience: '2+ years'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 'intermediate',
    icon: '/src/assets/icons/redis.svg',
    experience: '1+ year'
  },

  // DevOps
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 'intermediate',
    icon: '/src/assets/icons/docker.svg',
    experience: '2+ years'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    level: 'intermediate',
    icon: '/src/assets/icons/aws.svg',
    experience: '2+ years'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'devops',
    level: 'advanced',
    icon: '/src/assets/icons/vercel.svg',
    experience: '3+ years'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'devops',
    level: 'expert',
    icon: '/src/assets/icons/git.svg',
    experience: '5+ years'
  },

  // Design
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    level: 'advanced',
    icon: '/src/assets/icons/figma.svg',
    experience: '3+ years'
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'design',
    level: 'intermediate',
    icon: '/src/assets/icons/adobe-xd.svg',
    experience: '2+ years'
  }
]

export const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'database', name: 'Database', icon: '🗄️' },
  { id: 'devops', name: 'DevOps', icon: '🚀' },
  { id: 'design', name: 'Design', icon: '🎯' },
  { id: 'other', name: 'Other', icon: '📚' }
]
```

## 💼 Experience Data

```typescript
// src/data/experience.ts
import { Experience } from '@/types'

export const experience: Experience[] = [
  {
    id: 'senior-frontend-dev',
    company: 'Tech Innovation Inc.',
    position: 'Senior Frontend Developer',
    startDate: '2022-03-01',
    current: true,
    description: 'Leading frontend development for enterprise web applications, mentoring junior developers, and implementing modern development practices.',
    responsibilities: [
      'Lead development of React-based web applications',
      'Collaborate with UX/UI designers to implement responsive designs',
      'Mentor junior developers and conduct code reviews',
      'Optimize application performance and user experience',
      'Implement automated testing and CI/CD pipelines',
      'Work with product managers to define technical requirements'
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'GraphQL',
      'Jest',
      'Cypress'
    ],
    location: 'San Francisco, CA',
    type: 'full-time'
  },
  {
    id: 'fullstack-dev',
    company: 'Digital Solutions LLC',
    position: 'Full-Stack Developer',
    startDate: '2020-06-15',
    endDate: '2022-02-28',
    current: false,
    description: 'Developed and maintained full-stack web applications using modern technologies and agile development practices.',
    responsibilities: [
      'Built responsive web applications using React and Node.js',
      'Designed and implemented RESTful APIs',
      'Managed database design and optimization',
      'Collaborated with cross-functional teams',
      'Participated in agile development processes',
      'Deployed applications to cloud platforms'
    ],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'AWS',
      'Docker'
    ],
    location: 'Remote',
    type: 'full-time'
  },
  {
    id: 'frontend-dev-intern',
    company: 'StartupXYZ',
    position: 'Frontend Developer Intern',
    startDate: '2020-01-15',
    endDate: '2020-05-30',
    current: false,
    description: 'Gained hands-on experience in frontend development, contributing to real projects and learning industry best practices.',
    responsibilities: [
      'Assisted in building user interfaces with React',
      'Wrote clean, maintainable CSS and JavaScript code',
      'Participated in daily stand-ups and sprint planning',
      'Fixed bugs and implemented small features',
      'Learned version control and collaborative development'
    ],
    technologies: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Git'
    ],
    location: 'New York, NY',
    type: 'internship'
  }
]
```

## 🎓 Education Data

```typescript
// src/data/education.ts
import { Education } from '@/types'

export const education: Education[] = [
  {
    id: 'computer-science-degree',
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2016-09-01',
    endDate: '2020-05-15',
    current: false,
    gpa: '3.8/4.0',
    description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.',
    achievements: [
      'Graduated Magna Cum Laude',
      'Dean\'s List for 6 semesters',
      'President of Computer Science Student Association',
      'Winner of Annual Hackathon 2019',
      'Completed Senior Capstone Project on Machine Learning'
    ],
    location: 'California, USA'
  },
  {
    id: 'web-dev-bootcamp',
    institution: 'Code Academy Bootcamp',
    degree: 'Certificate',
    field: 'Full-Stack Web Development',
    startDate: '2019-06-01',
    endDate: '2019-12-15',
    current: false,
    description: 'Intensive bootcamp focused on modern web development technologies and industry practices.',
    achievements: [
      'Completed 800+ hours of coding',
      'Built 15+ projects including 3 full-stack applications',
      'Collaborated on team projects using Agile methodology',
      'Graduated with honors',
      'Received job placement assistance'
    ],
    location: 'Online'
  }
]
```

## 💬 Testimonials Data

```typescript
// src/data/testimonials.ts
import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    position: 'Product Manager',
    company: 'Tech Innovation Inc.',
    content: 'Working with [Your Name] has been an absolute pleasure. Their technical skills are exceptional, and they consistently deliver high-quality code on time. They have a great eye for detail and always go the extra mile.',
    avatar: '/src/assets/images/testimonials/sarah.jpg',
    rating: 5,
    date: '2023-08-15'
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    position: 'CTO',
    company: 'Digital Solutions LLC',
    content: '[Your Name] is one of the most talented developers I\'ve worked with. They have a deep understanding of both frontend and backend technologies and can tackle complex problems with ease.',
    avatar: '/src/assets/images/testimonials/michael.jpg',
    rating: 5,
    date: '2023-07-22'
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    position: 'UX Designer',
    company: 'Creative Agency',
    content: 'I love collaborating with [Your Name]! They understand design principles and can implement pixel-perfect interfaces while suggesting improvements that enhance user experience.',
    avatar: '/src/assets/images/testimonials/emily.jpg',
    rating: 5,
    date: '2023-09-05'
  }
]
```

## 🔗 Social Links Data

```typescript
// src/data/social.ts
import { SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
    username: 'yourusername'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
    username: 'yourusername'
  },
  {
    id: 'twitter',
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
    username: '@yourusername'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: 'Instagram',
    username: '@yourusername'
  },
  {
    id: 'dribbble',
    platform: 'Dribbble',
    url: 'https://dribbble.com/yourusername',
    icon: 'Dribbble',
    username: 'yourusername'
  }
]
```

## 📞 Contact Information

```typescript
// src/data/contact.ts
import { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  availability: 'Available for new opportunities',
  timezone: 'PST (UTC-8)'
}
```

This data structure provides a comprehensive foundation for a portfolio website with type safety and easy customization!