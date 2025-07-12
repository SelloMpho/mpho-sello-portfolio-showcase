# Portfolio Project Structure Guide

## 📁 Complete Folder Structure

```
portfolio-template/
├── 📂 public/
│   ├── 🖼️ favicon.ico
│   ├── 📄 robots.txt
│   ├── 📱 manifest.json
│   └── 🖼️ og-image.png
│
├── 📂 src/
│   ├── 📂 assets/
│   │   ├── 📂 images/
│   │   │   ├── 🖼️ hero-bg.jpg
│   │   │   ├── 🖼️ profile.jpg
│   │   │   ├── 📂 projects/
│   │   │   │   ├── 🖼️ project-1.jpg
│   │   │   │   ├── 🖼️ project-2.jpg
│   │   │   │   └── 🖼️ project-3.jpg
│   │   │   └── 📂 icons/
│   │   │       ├── 🖼️ tech-react.svg
│   │   │       ├── 🖼️ tech-typescript.svg
│   │   │       └── 🖼️ tech-tailwind.svg
│   │   └── 📂 fonts/ (optional)
│   │       ├── 📄 inter.woff2
│   │       └── 📄 poppins.woff2
│   │
│   ├── 📂 components/
│   │   ├── 📂 ui/                    # Reusable UI components
│   │   │   ├── 🧩 Button.tsx
│   │   │   ├── 🧩 Card.tsx
│   │   │   ├── 🧩 Badge.tsx
│   │   │   ├── 🧩 Input.tsx
│   │   │   ├── 🧩 Textarea.tsx
│   │   │   ├── 🧩 Modal.tsx
│   │   │   ├── 🧩 Tooltip.tsx
│   │   │   ├── 🧩 Accordion.tsx
│   │   │   ├── 🧩 Tabs.tsx
│   │   │   └── 🧩 Separator.tsx
│   │   │
│   │   ├── 📂 layout/                # Layout components
│   │   │   ├── 🧩 Header.tsx
│   │   │   ├── 🧩 Footer.tsx
│   │   │   ├── 🧩 Navigation.tsx
│   │   │   ├── 🧩 MobileMenu.tsx
│   │   │   ├── 🧩 Sidebar.tsx
│   │   │   └── 🧩 Layout.tsx
│   │   │
│   │   ├── 📂 sections/              # Page sections
│   │   │   ├── 🧩 Hero.tsx
│   │   │   ├── 🧩 About.tsx
│   │   │   ├── 🧩 Skills.tsx
│   │   │   ├── 🧩 Projects.tsx
│   │   │   ├── 🧩 Experience.tsx
│   │   │   ├── 🧩 Education.tsx
│   │   │   ├── 🧩 Testimonials.tsx
│   │   │   ├── 🧩 Blog.tsx
│   │   │   └── 🧩 Contact.tsx
│   │   │
│   │   ├── 📂 forms/                 # Form components
│   │   │   ├── 🧩 ContactForm.tsx
│   │   │   ├── 🧩 NewsletterForm.tsx
│   │   │   └── 🧩 CommentForm.tsx
│   │   │
│   │   └── 📂 animations/            # Animation components
│   │       ├── 🧩 FadeIn.tsx
│   │       ├── 🧩 SlideIn.tsx
│   │       ├── 🧩 ParallaxScroll.tsx
│   │       └── 🧩 ScrollReveal.tsx
│   │
│   ├── 📂 hooks/                     # Custom React hooks
│   │   ├── 🔗 useLocalStorage.ts
│   │   ├── 🔗 useMediaQuery.ts
│   │   ├── 🔗 useScrollPosition.ts
│   │   ├── 🔗 useIntersectionObserver.ts
│   │   ├── 🔗 useTheme.ts
│   │   ├── 🔗 useDebounce.ts
│   │   └── 🔗 useApi.ts
│   │
│   ├── 📂 lib/                       # Utility functions
│   │   ├── 🛠️ utils.ts               # General utilities
│   │   ├── 🛠️ cn.ts                 # Class name utility
│   │   ├── 🛠️ api.ts                # API helpers
│   │   ├── 🛠️ constants.ts          # App constants
│   │   ├── 🛠️ config.ts             # App configuration
│   │   ├── 🛠️ validations.ts        # Form validations
│   │   └── 🛠️ animations.ts         # Animation configs
│   │
│   ├── 📂 pages/                     # Page components
│   │   ├── 📄 Index.tsx              # Home page
│   │   ├── 📄 About.tsx              # About page
│   │   ├── 📄 Projects.tsx           # Projects page
│   │   ├── 📄 Blog.tsx               # Blog page
│   │   ├── 📄 Contact.tsx            # Contact page
│   │   └── 📄 NotFound.tsx           # 404 page
│   │
│   ├── 📂 data/                      # Static data
│   │   ├── 📊 projects.ts            # Projects data
│   │   ├── 📊 skills.ts              # Skills data
│   │   ├── 📊 experience.ts          # Work experience
│   │   ├── 📊 education.ts           # Education data
│   │   ├── 📊 testimonials.ts        # Testimonials
│   │   └── 📊 social.ts              # Social media links
│   │
│   ├── 📂 types/                     # TypeScript definitions
│   │   ├── 📝 index.ts               # Main type exports
│   │   ├── 📝 project.ts             # Project types
│   │   ├── 📝 skill.ts               # Skill types
│   │   ├── 📝 experience.ts          # Experience types
│   │   ├── 📝 api.ts                 # API response types
│   │   └── 📝 common.ts              # Common types
│   │
│   ├── 📂 styles/                    # Styling files
│   │   ├── 🎨 globals.css            # Global styles
│   │   ├── 🎨 components.css         # Component styles
│   │   └── 🎨 animations.css         # Animation styles
│   │
│   ├── 📂 context/                   # React contexts
│   │   ├── 🔄 ThemeContext.tsx       # Theme provider
│   │   ├── 🔄 AuthContext.tsx        # Auth provider
│   │   └── 🔄 AppContext.tsx         # App state provider
│   │
│   ├── 🚀 main.tsx                   # App entry point
│   ├── 🗺️ App.tsx                    # Main app component
│   └── 📱 vite-env.d.ts              # Vite type definitions
│
├── 📂 docs/                          # Documentation
│   ├── 📖 CONTRIBUTING.md
│   ├── 📖 DEPLOYMENT.md
│   ├── 📖 CUSTOMIZATION.md
│   └── 📖 API.md
│
├── 📂 .vscode/                       # VS Code settings
│   ├── ⚙️ settings.json
│   ├── ⚙️ extensions.json
│   └── ⚙️ launch.json
│
├── 📄 .env.example                   # Environment variables template
├── 📄 .env.local                     # Local environment variables
├── 📄 .gitignore                     # Git ignore rules
├── 📄 .eslintrc.json                 # ESLint configuration
├── 📄 .prettierrc                    # Prettier configuration
├── 📄 index.html                     # HTML template
├── 📄 package.json                   # Dependencies and scripts
├── 📄 tailwind.config.ts             # Tailwind configuration
├── 📄 tsconfig.json                  # TypeScript configuration
├── 📄 tsconfig.node.json             # Node TypeScript config
├── 📄 vite.config.ts                 # Vite configuration
├── 📄 postcss.config.js              # PostCSS configuration
├── 📄 LICENSE                        # License file
└── 📄 README.md                      # Project documentation
```

## 📋 File Descriptions

### Core Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, and project metadata |
| `tsconfig.json` | TypeScript compiler configuration |
| `vite.config.ts` | Vite build tool configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `eslint.config.js` | Code linting rules |
| `.prettierrc` | Code formatting rules |

### Environment Files

| File | Purpose |
|------|---------|
| `.env.example` | Template for environment variables |
| `.env.local` | Local development environment variables |
| `.env.production` | Production environment variables |

### Source Structure

| Directory | Purpose |
|-----------|---------|
| `src/components/ui/` | Reusable UI components (buttons, cards, etc.) |
| `src/components/layout/` | Layout components (header, footer, navigation) |
| `src/components/sections/` | Page sections (hero, about, projects) |
| `src/hooks/` | Custom React hooks for reusable logic |
| `src/lib/` | Utility functions and configurations |
| `src/pages/` | Page components for routing |
| `src/data/` | Static data and content |
| `src/types/` | TypeScript type definitions |
| `src/styles/` | CSS and styling files |

### Asset Organization

| Directory | Content |
|-----------|---------|
| `src/assets/images/` | Photos, illustrations, backgrounds |
| `src/assets/icons/` | SVG icons and logos |
| `src/assets/fonts/` | Custom font files |
| `public/` | Static assets served directly |

## 🚀 Quick Start Commands

```bash
# Create project structure
mkdir -p src/{components/{ui,layout,sections,forms,animations},hooks,lib,pages,data,types,styles,context,assets/{images,icons,fonts}}

# Create public directories  
mkdir -p public

# Create documentation
mkdir -p docs

# Create VS Code settings
mkdir -p .vscode

# Initialize git repository
git init

# Create initial files
touch src/main.tsx src/App.tsx src/vite-env.d.ts
touch .env.example .gitignore README.md
```

## 📝 Template Usage

1. **Copy this structure** to your new project
2. **Customize configurations** based on your needs
3. **Add your content** to data files
4. **Replace placeholder images** with your assets
5. **Update personal information** throughout the project
6. **Deploy** to your preferred hosting platform

This structure provides a solid foundation for a professional portfolio website with room for growth and customization!