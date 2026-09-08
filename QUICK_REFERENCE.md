# 🚀 Quick Reference Cheat Sheet

Fast lookup for colors, fonts, spacing, and common patterns.

---

## 🎨 Colors (Quick Copy)

```css
/* Primary (Purple) */
#a855f7     /* Main */
#c084fc     /* Light */
#9333ea     /* Dark */

/* Accent (Blue) */
#3b82f6     /* Main */
#60a5fa     /* Light */
#2563eb     /* Dark */

/* CTA (Pink/Magenta) */
#d946ef     /* Main */
#e879f9     /* Light */
#c026d3     /* Dark */

/* Backgrounds */
#020617     /* slate-950 - darkest */
#0f172a     /* slate-900 */
#1e293b     /* slate-800 */

/* Text */
#f1f5f9     /* slate-100 - body */
#cbd5e1     /* slate-300 - secondary */
#64748b     /* slate-500 - muted */
```

---

## 🔤 Fonts

```css
/* Primary Font */
font-family: 'Outfit', system-ui, sans-serif;

/* Display Font */
font-family: 'Space Grotesk', system-ui, sans-serif;

/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
```

---

## 📏 Typography Scale

```
Hero:     text-7xl (72px) → text-4xl (36px) mobile
Heading:  text-3xl (30px) → text-2xl (24px) mobile
Body:     text-base (16px)
Small:    text-sm (14px)
Caption:  text-xs (12px)
```

---

## 🎯 Common Classes

### Glass Effect
```css
.glass-card
/* bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl */

.glass-nav
/* bg-gradient-to-r from-primary-600/20 via-accent-600/20 to-cta-600/20 backdrop-blur-2xl */
```

### Gradient Text
```css
.gradient-text
/* bg-gradient-to-r from-primary-400 via-accent-400 to-cta-400 */
/* bg-clip-text text-transparent */
/* animate-gradient (8s loop) */

.text-gradient-purple   /* purple gradient */
.text-gradient-blue     /* blue gradient */
.text-gradient-pink     /* pink gradient */
```

### Buttons
```css
.btn-primary
/* gradient bg (#c026d3 → #d946ef) */
/* shimmer on hover */

.btn-secondary
/* border + glass effect */
```

### Shadows
```css
.glow-purple   /* 0 0 30px rgba(168,85,247,0.4) */
.glow-blue     /* 0 0 30px rgba(59,130,246,0.4) */
.glow-pink     /* 0 0 30px rgba(217,70,239,0.4) */
```

---

## 🎬 Animations

### Framer Motion Patterns

```javascript
// Fade up on scroll
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// Hover scale
whileHover={{ scale: 1.05, y: -2 }}
whileTap={{ scale: 0.98 }}

// Float (continuous)
animate={{ y: [0, -15, 0] }}
transition={{ 
  duration: 6, 
  repeat: Infinity, 
  ease: 'easeInOut' 
}}

// Stagger children
variants={{
  container: {
    animate: { 
      transition: { staggerChildren: 0.1 } 
    }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
}}
```

### CSS Animations
```css
animate-float        /* 6s float */
animate-gradient     /* 8s gradient shift */
animate-shimmer      /* 2s shimmer sweep */
animate-pulse-slow   /* 3s slow pulse */
```

---

## 📦 Spacing

```
Gap between cards:    gap-6 (24px) → gap-8 (32px) desktop
Section padding:      py-20 (80px) → py-32 (128px) desktop
Container padding:    px-4 (16px) → px-6 (24px) → px-8 (32px)
Element spacing:      space-y-4 (16px) tight
                      space-y-6 (24px) normal
                      space-y-12 (48px) sections
```

---

## 🎭 Icons (Lucide React)

### Common Icons Used
```javascript
import {
  // Navigation
  Menu, X, Sparkles,
  
  // Features
  Code2, Zap, Palette, Smartphone, Database,
  
  // Actions
  ArrowRight, Send, ExternalLink,
  
  // Chat
  Bot, MessageCircle,
  
  // Social
  Linkedin, Mail, Phone, Github,
  
  // Status
  Check, CheckCircle, Award, BadgeCheck
} from 'lucide-react';

// Usage
<Code2 className="w-5 h-5 text-primary-400" />
```

---

## 🏗️ Layout Patterns

### Container
```jsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* content */}
</div>
```

### Section
```jsx
<section className="py-20 md:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading title="..." />
    {/* content */}
  </div>
</section>
```

### Two-Column
```jsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>{/* Left */}</div>
  <div>{/* Right */}</div>
</div>
```

### Card Grid
```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  {items.map(item => <Card key={item.id} />)}
</div>
```

---

## 🎨 Gradient Combinations

### Text Gradients
```css
/* Triple gradient (main brand) */
from-primary-400 via-accent-400 to-cta-400

/* Purple emphasis */
from-primary-400 to-primary-600

/* Blue emphasis */
from-accent-400 to-accent-600

/* Pink emphasis */
from-cta-400 to-cta-600
```

### Background Gradients
```css
/* Page background */
bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950

/* Button gradient */
bg-gradient-to-r from-cta-600 to-cta-500

/* Border gradient */
border-image: linear-gradient(135deg, #a855f7, #3b82f6, #d946ef)
```

---

## 📱 Breakpoints

```
sm:  640px   /* Tablet portrait */
md:  768px   /* Tablet landscape */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

---

## 🎯 Component Props

### Button
```typescript
<Button 
  variant="primary" | "secondary" | "outline"
  size="sm" | "md" | "lg"
  icon={true}
  href="#section"
>
  Text
</Button>
```

### SectionHeading
```typescript
<SectionHeading
  label="OPTIONAL LABEL"
  title="Main Title"
  description="Optional description"
  align="center" | "left"
/>
```

---

## 🔍 Finding Components

```
Navbar:         src/components/Navbar.tsx
Button:         src/components/Button.tsx
SectionHeading: src/components/SectionHeading.tsx
ServiceCard:    src/components/ServiceCard.tsx
ProjectCard:    src/components/ProjectCard.tsx
ProjectModal:   src/components/ProjectModal.tsx
TimelineItem:   src/components/TimelineItem.tsx
AIAssistant:    src/components/AIAssistant.tsx
Footer:         src/components/Footer.tsx

Hero:           src/sections/Hero.tsx
Introduction:   src/sections/Introduction.tsx
Services:       src/sections/Services.tsx
Projects:       src/sections/Projects.tsx
Process:        src/sections/Process.tsx
Skills:         src/sections/Skills.tsx
Experience:     src/sections/Experience.tsx
Education:      src/sections/Education.tsx
Certifications: src/sections/Certifications.tsx
About:          src/sections/About.tsx
Contact:        src/sections/Contact.tsx
```

---

## 📝 Data Files

```
Projects:       src/data/projects.ts
Experience:     src/data/experience.ts
Education:      src/data/education.ts
Skills:         src/data/skills.ts
Certifications: src/data/certifications.ts
Services:       src/data/services.ts
```

---

## 🎨 Design Tokens

### Radius
```
rounded-lg:  8px   /* Small */
rounded-xl:  12px  /* Medium */
rounded-2xl: 16px  /* Large */
rounded-full: 9999px /* Circle */
```

### Shadows
```
shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1)
shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1)
shadow-2xl: 0 25px 50px -12px rgba(0,0,0,0.25)
```

### Blur
```
backdrop-blur-sm:  4px
backdrop-blur:     8px
backdrop-blur-lg:  16px
backdrop-blur-xl:  24px
backdrop-blur-2xl: 32px
```

---

## ⚡ Performance Tips

```javascript
// Lazy load images
<img loading="lazy" />

// Use memo for heavy components
const MemoCard = React.memo(Card);

// Viewport once for scroll animations
viewport={{ once: true }}

// Debounce scroll handlers
useEffect(() => {
  const handleScroll = debounce(() => {...}, 100);
}, []);
```

---

## 🐛 Debugging

### Check Build
```bash
npm run build
```

### Start Dev Server
```bash
npm run dev
# Opens on http://localhost:5174
```

### Check Dependencies
```bash
npm list lucide-react framer-motion tailwindcss
```

### Clear Cache
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## 📚 Documentation Files

```
README.md                    - Main documentation
QUICK_START.md              - Update contact info
CUSTOMIZATION_GUIDE.md      - How to customize
PROJECT_SUMMARY.md          - Project overview
PORTFOLIO_ARCHITECTURE.md   - Complete design system
PAGE_STRUCTURE.md           - Visual layout guide
QUICK_REFERENCE.md          - This file
MODERN_DESIGN_UPDATE.md     - What changed
NEXT_STEPS.md               - Deployment guide
```

---

## 🎯 Common Tasks

### Add New Project
Edit `src/data/projects.ts`

### Change Colors
Edit `tailwind.config.js` → theme.extend.colors

### Update Contact Info
Search for `[ADD EMAIL]`, `[ADD LINKEDIN]`, `[ADD PHONE]`

### Add New Section
1. Create file in `src/sections/`
2. Import in `src/App.tsx`
3. Add to JSX

### Modify Animation
Check component file → find `animate={}` props

---

**Quick Tip:** Use Ctrl+F (or Cmd+F) in your editor to quickly find colors, classes, or components!

---

**Last Updated:** September 7, 2026
