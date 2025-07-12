# React + TypeScript + Tailwind CSS Portfolio Template

A modern, professional portfolio template built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **React 18** with TypeScript for type safety
- 🎨 **Tailwind CSS** with custom design system
- 🎭 **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design
- 🌙 **Dark/Light Mode** support
- 🔍 **SEO Optimized** with proper meta tags
- 📊 **Performance Optimized** with code splitting
- 🧩 **Component-Based** architecture
- 🔧 **ESLint & Prettier** for code quality
- 📦 **Modern Build Tools** (Vite)

## 📁 Project Structure

```
portfolio-template/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   └── sections/     # Page sections
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   └── main.tsx          # Application entry point
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## 🛠️ Installation

1. **Clone the template:**
   ```bash
   git clone <repository-url> my-portfolio
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 📝 Configuration

### Environment Variables

Create a `.env.local` file with your configuration:

```env
# Site Information
VITE_SITE_TITLE="Your Name - Portfolio"
VITE_SITE_DESCRIPTION="Full-Stack Developer & Designer"
VITE_SITE_URL="https://yourportfolio.com"

# Contact Information
VITE_EMAIL="your.email@example.com"
VITE_PHONE="+1234567890"
VITE_LOCATION="Your City, Country"

# Social Media Links
VITE_GITHUB_URL="https://github.com/yourusername"
VITE_LINKEDIN_URL="https://linkedin.com/in/yourusername"
VITE_TWITTER_URL="https://twitter.com/yourusername"

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"
```

### Customizing Content

1. **Update personal information** in `src/lib/config.ts`
2. **Replace images** in `src/assets/images/`
3. **Modify sections** in `src/components/sections/`
4. **Update projects** in `src/data/projects.ts`
5. **Customize colors** in `tailwind.config.ts`

## 🎨 Design System

### Colors

The template uses a semantic color system defined in `src/styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more colors */
}
```

### Typography

Font configuration in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Poppins', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Animations

Custom animations defined in `tailwind.config.ts`:

```typescript
keyframes: {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-in-left': {
    '0%': { opacity: '0', transform: 'translateX(-100px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
}
```

## 📦 Components Structure

### UI Components (`src/components/ui/`)

Reusable UI components following atomic design principles:

- `Button.tsx` - Button variations
- `Card.tsx` - Card layouts
- `Modal.tsx` - Modal dialogs
- `Input.tsx` - Form inputs
- `Badge.tsx` - Status badges

### Layout Components (`src/components/layout/`)

Layout and navigation components:

- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer
- `Navigation.tsx` - Main navigation menu
- `MobileMenu.tsx` - Mobile navigation

### Section Components (`src/components/sections/`)

Page section components:

- `Hero.tsx` - Hero/banner section
- `About.tsx` - About section
- `Projects.tsx` - Projects showcase
- `Skills.tsx` - Skills and technologies
- `Contact.tsx` - Contact form and information

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run dev:host     # Start with network access

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking

# Testing (if configured)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📱 Responsive Design

The template follows mobile-first design principles:

```typescript
// Tailwind breakpoints
sm: '640px',   // Small devices
md: '768px',   // Medium devices
lg: '1024px',  // Large devices
xl: '1280px',  // Extra large devices
2xl: '1536px', // 2X Extra large devices
```

## 🧩 Adding New Sections

1. **Create component:**
   ```typescript
   // src/components/sections/NewSection.tsx
   export const NewSection = () => {
     return (
       <section id="new-section" className="py-20">
         {/* Section content */}
       </section>
     );
   };
   ```

2. **Add to main page:**
   ```typescript
   // src/pages/Index.tsx
   import { NewSection } from '@/components/sections/NewSection';
   
   export const Index = () => (
     <div>
       {/* Other sections */}
       <NewSection />
     </div>
   );
   ```

3. **Update navigation:**
   ```typescript
   // src/lib/config.ts
   export const navigationItems = [
     // ... existing items
     { href: '#new-section', label: 'New Section' },
   ];
   ```

## 🎯 Performance Optimization

- **Code Splitting:** Components are lazy-loaded where appropriate
- **Image Optimization:** Use WebP format with fallbacks
- **Bundle Analysis:** Run `npm run build -- --analyze`
- **Lighthouse Scores:** Aim for 90+ in all categories

## 🔒 Security

- No sensitive data in client-side code
- Environment variables properly configured
- Dependencies regularly updated
- Security headers configured

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide React](https://lucide.dev/) - Icons

## 📞 Support

If you have any questions or need help customizing the template:

- 📧 Email: support@example.com
- 💬 GitHub Issues: [Create an issue](https://github.com/username/repo/issues)
- 📖 Documentation: [View docs](https://docs.example.com)

---

**Happy Coding!** 🚀
