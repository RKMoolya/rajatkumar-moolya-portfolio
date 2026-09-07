# Rajatkumar Moolya - Portfolio

A premium personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Technologies

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Netlify

## 📋 Features

- ✨ Modern, responsive design optimized for all devices (320px to 1920px+)
- 🎨 Premium dark-themed UI with accent colors
- 💫 Smooth animations and transitions
- 📱 Mobile-first responsive layout
- ♿ Accessible with keyboard navigation and ARIA labels
- 🎯 SEO optimized with meta tags
- 🤖 AI Portfolio Assistant for interactive Q&A
- 📊 Featured projects with detailed case studies
- 🎓 Experience, education, and certifications sections
- 📬 Contact section with multiple communication channels

## 🛠️ Installation

1. Clone the repository or navigate to the project directory:
```bash
cd rajat-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment to Netlify

### Method 1: Drag and Drop
1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to the drop zone

### Method 2: Git Integration
1. Push your code to GitHub/GitLab
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Method 3: Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

## 📝 Customization

### Update Personal Information

Edit the data files in `src/data/`:

- **Projects:** `src/data/projects.ts`
- **Experience:** `src/data/experience.ts`
- **Education:** `src/data/education.ts`
- **Skills:** `src/data/skills.ts`
- **Certifications:** `src/data/certifications.ts`
- **Services:** `src/data/services.ts`

### Update Contact Information

Replace placeholder contact details in:
- `src/sections/Contact.tsx`
- `src/components/Footer.tsx`

Search for `[ADD EMAIL]`, `[ADD LINKEDIN]`, and `[ADD PHONE]` and replace with actual information.

### Update Project URLs

In `src/data/projects.ts`, replace `[ADD PROJECT URL]` with actual project links.

### Add Project Screenshots

Place project images in `src/assets/` and update the `image` property in `src/data/projects.ts`.

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  'dark-bg': '#08090D',
  'dark-secondary': '#0E1016',
  'dark-card': '#12141B',
  'dark-border': '#242733',
  'text-primary': '#F5F5F5',
  'text-secondary': '#9A9FAA',
  'accent': {
    DEFAULT: '#6366F1',
    light: '#818CF8',
    dark: '#4F46E5',
  },
}
```

## 📁 Project Structure

```
rajat-portfolio/
├── public/
│   └── _redirects          # Netlify redirects
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── TimelineItem.tsx
│   │   └── AIAssistant.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Introduction.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/              # Portfolio content data
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── skills.ts
│   │   ├── certifications.ts
│   │   └── services.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── netlify.toml           # Netlify configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Components

### Navigation
- Floating navigation bar with smooth scroll
- Mobile responsive hamburger menu
- Active section highlighting

### Hero Section
- Animated browser visualization
- Technology badges
- Call-to-action buttons

### Projects
- Featured project cards
- Detailed case study modals
- Technology tags

### AI Assistant
- Interactive Q&A chatbot
- Predefined quick questions
- Smooth animations

### Contact
- Multiple contact methods
- Social media links
- Clean, accessible design

## 🔧 Environment Variables

No environment variables are required for basic functionality. If you add external APIs later (e.g., for the AI assistant), create a `.env` file:

```
VITE_API_KEY=your_api_key_here
```

**Important:** Never commit API keys to version control. Use Netlify environment variables for production.

## 📊 Performance

- Optimized for fast loading with Vite
- Lazy loading for images
- Minimal dependencies
- Tree-shaking enabled
- CSS purging with Tailwind

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Focus indicators
- ARIA labels
- Color contrast compliance
- Reduced motion support

## 📱 Responsive Breakpoints

Tested and optimized for:
- Mobile: 320px, 375px, 425px
- Tablet: 768px
- Desktop: 1024px, 1280px, 1440px, 1920px

## 🐛 Troubleshooting

### Build Errors

If you encounter TypeScript errors:
```bash
npm run build -- --mode development
```

### Dependency Issues

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

Check the Netlify build logs for specific errors. Common issues:
- Missing dependencies in `package.json`
- Incorrect build command
- Wrong publish directory

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Rajatkumar Moolya**
- Frontend Developer
- Location: Pune, Maharashtra, India

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
