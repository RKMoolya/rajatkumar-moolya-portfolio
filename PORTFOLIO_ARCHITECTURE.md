# 🏗️ Portfolio Architecture & Design System

Complete documentation of Rajatkumar Moolya's portfolio structure, components, and design specifications.

---

## 📋 Table of Contents

1. [Design System](#design-system)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Component Library](#component-library)
5. [Page Sections](#page-sections)
6. [Animations](#animations)
7. [Icons](#icons)
8. [Layout System](#layout-system)

---

## 🎨 Design System

### Design Philosophy
- **Modern Professional**: Balances creativity with professionalism
- **Glassmorphism**: Frosted glass effects throughout
- **Gradient-First**: 3-color gradient system creates visual interest
- **Animation-Rich**: Subtle animations on scroll and hover
- **Icon-Based**: SVG icons instead of emojis

### Visual Hierarchy
```
1. Hero (Largest, most prominent)
2. Section Headings (Bold, gradient text)
3. Content Cards (Glass effect, gradient borders)
4. Body Text (Comfortable reading size)
5. Labels & Captions (Small, uppercase, tracked)
```

---

## 🌈 Color Palette

### Primary Color System

#### **Purple (Primary Brand)**
```css
primary-50:  #faf5ff  /* Lightest tint */
primary-100: #f3e8ff
primary-200: #e9d5ff
primary-300: #d8b4fe
primary-400: #c084fc  /* Main usage */
primary-500: #a855f7  /* Brand color */
primary-600: #9333ea
primary-700: #7e22ce
primary-800: #6b21a8
primary-900: #581c87  /* Darkest shade */
```

**Usage:**
- Main headings
- Section labels
- Primary icons
- Gradient start points
- Hover states

#### **Blue (Accent)**
```css
accent-50:  #eff6ff
accent-100: #dbeafe
accent-200: #bfdbfe
accent-300: #93c5fd
accent-400: #60a5fa   /* Main usage */
accent-500: #3b82f6   /* Brand color */
accent-600: #2563eb
accent-700: #1d4ed8
accent-800: #1e40af
accent-900: #1e3a8a
```

**Usage:**
- Secondary elements
- Link colors
- Supporting graphics
- Gradient middle points
- Icons

#### **Pink/Magenta (CTA)**
```css
cta-50:  #fdf4ff
cta-100: #fae8ff
cta-200: #f5d0fe
cta-300: #f0abfc
cta-400: #e879f9    /* Main usage */
cta-500: #d946ef    /* CTA color */
cta-600: #c026d3
cta-700: #a21caf
cta-800: #86198f
cta-900: #701a75
```

**Usage:**
- Call-to-action buttons
- Important highlights
- Success indicators
- Gradient end points
- Special badges

### Background Colors

```css
slate-950: #020617   /* Primary background */
slate-900: #0f172a   /* Secondary background */
slate-800: #1e293b   /* Tertiary background */
slate-700: #334155   /* Card backgrounds */
```

### Text Colors

```css
slate-100: #f1f5f9   /* Primary text (body) */
slate-200: #e2e8f0   /* Headings */
slate-300: #cbd5e1   /* Secondary text */
slate-400: #94a3b8   /* Muted text */
slate-500: #64748b   /* Placeholder text */
```

### Opacity System

```
/5   = 5% opacity   (Very subtle)
/10  = 10% opacity  (Subtle)
/20  = 20% opacity  (Light)
/30  = 30% opacity  (Medium-light)
/50  = 50% opacity  (Medium)
/80  = 80% opacity  (Strong)
/95  = 95% opacity  (Almost solid)
```

---

## 🔤 Typography

### Font Families

#### **Outfit** (Primary Text)
```css
font-family: 'Outfit', system-ui, -apple-system, sans-serif;
```
**Usage:** Body text, navigation, buttons, most UI elements

**Weights Available:**
- 300 (Light) - Subtle text
- 400 (Regular) - Body text
- 500 (Medium) - Emphasized text
- 600 (Semibold) - Subheadings
- 700 (Bold) - Headings
- 800 (Extrabold) - Hero text

#### **Space Grotesk** (Display Font)
```css
font-family: 'Space Grotesk', system-ui, sans-serif;
```
**Usage:** Hero headings, section titles, logo, special emphasis

**Weights Available:**
- 400 (Regular)
- 500 (Medium)
- 600 (Semibold)
- 700 (Bold)

### Typography Scale

```css
/* Display - Hero only */
text-7xl: 4.5rem (72px)   /* Large desktop */
text-6xl: 3.75rem (60px)  /* Desktop */
text-5xl: 3rem (48px)     /* Tablet */
text-4xl: 2.25rem (36px)  /* Mobile hero */

/* Headings */
text-3xl: 1.875rem (30px) /* Section headings */
text-2xl: 1.5rem (24px)   /* Card titles */
text-xl: 1.25rem (20px)   /* Subheadings */
text-lg: 1.125rem (18px)  /* Large body */

/* Body */
text-base: 1rem (16px)    /* Standard body */
text-sm: 0.875rem (14px)  /* Small text */
text-xs: 0.75rem (12px)   /* Captions, labels */
```

### Font Styling

```css
/* Font weights */
font-light: 300
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
font-extrabold: 800

/* Letter spacing */
tracking-tight: -0.025em   /* Headlines */
tracking-normal: 0em       /* Body */
tracking-wide: 0.025em     /* Buttons */
tracking-wider: 0.05em     /* Labels */
tracking-widest: 0.1em     /* All caps labels */

/* Line height */
leading-tight: 1.25        /* Headlines */
leading-snug: 1.375        /* Subheadings */
leading-normal: 1.5        /* Body */
leading-relaxed: 1.625     /* Long-form content */
```

---

## 🧩 Component Library

### 1. **Navbar**

**File:** `src/components/Navbar.tsx`

**Structure:**
```
┌─────────────────────────────────────────┐
│ Logo + Sparkle    Navigation    CTA Btn │
└─────────────────────────────────────────┘
```

**Features:**
- Glassmorphism background when scrolled
- Gradient overlay (purple → blue → pink)
- Animated underlines on link hover
- Sparkle icon rotating next to logo
- Mobile: Hamburger with X/Menu icon animation
- Smooth scroll to sections

**Colors:**
- Background: `from-primary-600/20 via-accent-600/20 to-cta-600/20`
- Backdrop: `backdrop-blur-2xl`
- Border: `border-white/10`
- Text: `slate-300` hover to `white`
- CTA: Pink gradient button

**Animations:**
- Entry: Slide down from top (600ms)
- Links: Scale 1.05 on hover
- Underline: Scale-x from 0 to 1
- Logo: Scale 1.05 on hover
- Sparkle: Rotate + scale pulse
- Mobile menu: Height expand/collapse

---

### 2. **Button**

**File:** `src/components/Button.tsx`

**Variants:**

#### **Primary (CTA)**
```css
Background: linear-gradient(135deg, #c026d3, #d946ef)
Shadow: 0 10px 30px -10px rgba(217, 70, 239, 0.5)
Hover: translateY(-2px) + increased shadow
```

**Features:**
- Shimmer effect on hover (sweeping light)
- Icon slide animation (arrow moves right)
- Gradient overlay on hover
- Scale 1.05 on hover

#### **Secondary**
```css
Background: Transparent
Border: 2px solid rgba(168, 85, 247, 0.5)
Hover: Border brightens, background fills slightly
```

#### **Outline**
```css
Background: glass-card (white/5)
Border: border-white/20
Hover: border-white/40, bg-white/10
```

**Sizes:**
- Small: `px-6 py-2.5 text-sm`
- Medium: `px-8 py-3.5 text-base`
- Large: `px-10 py-4 text-lg`

---

### 3. **Hero Section**

**File:** `src/sections/Hero.tsx`

**Layout:**
```
┌─────────────────────────────────────────┐
│  Text Content          Visual Card      │
│  - Badge                - Colored dots  │
│  - Heading              - Progress bar  │
│  - Description          - Name/title    │
│  - Buttons              - Tech checks   │
│  - Tech tags            - Particles     │
└─────────────────────────────────────────┘
```

**Background Elements:**
1. **Mesh Gradient** - Radial gradients at top corners
2. **Grid Pattern** - Faint grid lines with fade mask
3. **Animated Particles** - Floating colored dots

**Badge Component:**
```
┌──────────────────────────┐
│ ✨ FRONTEND DEVELOPER    │
└──────────────────────────┘
```
- Glassmorphic pill
- Shimmer effect overlay
- Sparkle icon

**Heading:**
```
Building modern
web experiences 👋
with React
      ‾‾‾‾‾ (animated underline)
```
- Font: Space Grotesk, 4xl-7xl responsive
- "web experiences" - Gradient text animated
- Wave emoji - Animated wiggle
- "React" - Purple gradient + animated underline

**CTA Buttons:**
- Primary: "View My Work" with arrow icon
- Secondary: "Let's Connect" outline style

**Tech Badges:**
- Glass cards with tech names
- Hover: Scale + lift effect
- Layout: Flex wrap

**Visual Card:**
```
┌──────────────────────────┐
│ ● ● ●            🔥      │
│ ▓▓▓▓▓▓▓▓▓▓▓▓░░░         │
│                          │
│ RAJATKUMAR ✨            │
│ Frontend Developer       │
│                          │
│ 💻 React.js         ✓   │
│ ⚡ TypeScript        ✓   │
│ 🎨 Tailwind CSS     ✓   │
│ 🔌 REST APIs        ✓   │
└──────────────────────────┘
```

**Card Features:**
- 3D float animation (y-axis + rotation)
- Gradient glow shadow
- Animated progress bar with shimmer
- Icon + checkmark for each skill
- Floating particles around card
- Orbiting elements (slow rotation)

**Scroll Indicator:**
- Animated mouse icon
- "Scroll" label
- Dot moving up/down inside

**Animations:**
1. Content slides up + fades in (sequential)
2. Visual card: Scale + rotate in
3. Progress bar: Width grows
4. Skills: Stagger reveal from left
5. Checkmarks: Scale in with spring
6. Particles: Continuous float
7. Orbiting dots: 360° rotation (20s)

---

### 4. **Section Heading**

**File:** `src/components/SectionHeading.tsx`

**Structure:**
```
LABEL (uppercase, tracked)
Title Text Here
Optional description text
```

**Styling:**
- Label: `text-accent text-sm font-medium tracking-widest uppercase`
- Title: `text-3xl-5xl font-bold font-display`
- Description: `text-slate-400 text-lg max-w-2xl`

**Animation:**
- Fade up on scroll into view
- Stagger: Label → Title → Description

---

### 5. **Service Card**

**File:** `src/components/ServiceCard.tsx`

**Structure:**
```
┌────────────────────────┐
│  📦                    │
│                        │
│  Service Title         │
│  Service description   │
│  text here...          │
└────────────────────────┘
```

**Features:**
- Glass card background
- Icon in gradient circle
- Hover: Lift (translateY -5px)
- Border changes from white/10 to accent/50
- Icon scales 1.1 on hover

**Icons Used:**
- Frontend Dev: `<Code2 />`
- Responsive UI: `<Smartphone />`
- API Integration: `<Database />`
- UI Implementation: `<Palette />`

---

### 6. **Project Card**

**File:** `src/components/ProjectCard.tsx`

**Structure:**
```
┌────────────────────────┐
│                        │
│   Project Image or     │
│   Placeholder          │
│                        │
├────────────────────────┤
│ CATEGORY               │
│ Project Name           │
│ Company                │
│ Description...         │
│ [Tech] [Tags]          │
│ View Project →         │
└────────────────────────┘
```

**Features:**
- Glass card with gradient border
- Image placeholder with gradient background
- Hover: Scale 1.02 + lift + glow shadow
- Category badge at top
- Tech tags (limit 4, +N more)
- Arrow icon slides right on hover
- Click opens modal

**Colors:**
- Card: `glass-card`
- Category: `text-accent`
- Overlay on hover: `bg-accent/10`

---

### 7. **Project Modal**

**File:** `src/components/ProjectModal.tsx`

**Structure:**
```
┌──────────────────────────────────┐
│ [X]                              │
│                                  │
│ CATEGORY                         │
│ Project Name                     │
│ Company • Timeline               │
│ [Tech] [Tags]                    │
│                                  │
│ ## Overview                      │
│ Text...                          │
│                                  │
│ ## The Challenge                 │
│ Text...                          │
│                                  │
│ ## The Approach                  │
│ Text...                          │
│                                  │
│ ## My Contribution              │
│ ✓ Point 1                        │
│ ✓ Point 2                        │
│                                  │
│ ## Key Features                  │
│ • Feature 1                      │
│ • Feature 2                      │
│                                  │
│ [View Live Project →]            │
└──────────────────────────────────┘
```

**Features:**
- Full-screen overlay with blur
- Glass card in center
- Scrollable content
- Close button (X icon)
- Sections with clear hierarchy
- Checkmarks for contributions
- Link to live project (if available)

**Animations:**
- Overlay: Fade in
- Modal: Scale + fade in
- Close: Scale + fade out

---

### 8. **Timeline Item**

**File:** `src/components/TimelineItem.tsx`

**Structure:**
```
│
├─●  Job Title
│    Company
│    Location
│    [Date Range]
│    
│    ✓ Responsibility 1
│    ✓ Responsibility 2
│    ✓ Responsibility 3
│
```

**Features:**
- Vertical line connecting items
- Dot indicator (hoverable)
- Glass card for content
- Checkmarks for responsibilities/achievements
- Hover: Border color changes
- Dot scales on hover

**Colors:**
- Line: `border-slate-700`
- Dot: `bg-primary-500` + gradient border
- Hover line: `border-accent-500`

---

### 9. **AI Chat Assistant**

**File:** `src/components/AIAssistant.tsx`

**Structure:**

**Button:**
```
┌──────┐
│  💬  │  (Floating bottom-right)
└──────┘
```

**Chat Window:**
```
┌─────────────────────────────┐
│ 🤖 Ask Rajat AI            │
│    Portfolio Assistant      │
├─────────────────────────────┤
│                             │
│  Bot message               │
│              User message  │
│  Bot message               │
│                             │
├─────────────────────────────┤
│ Quick questions:            │
│ [What technologies...]      │
│ [Tell me about...]          │
├─────────────────────────────┤
│ [Type message...] [Send]    │
└─────────────────────────────┘
```

**Features:**
- Floating button with gradient background
- Icon rotates: `MessageCircle` ↔ `X`
- Window slides up from button
- Messages alternate left/right
- Bot messages: `bg-slate-800`
- User messages: `bg-gradient-to-r primary-accent`
- Quick question buttons
- Send button with `Send` icon

**Animations:**
- Button: Scale + rotate on click
- Window: Scale + fade + slide up
- Messages: Fade + slide from bottom
- Typing indicator (optional)

**Icon Replacement:**
- Old: 🤖 emoji
- New: `<Bot />` or `<MessageCircle />` from Lucide

---

### 10. **Footer**

**File:** `src/components/Footer.tsx`

**Structure:**
```
┌─────────────────────────────────┐
│     RAJATKUMAR MOOLYA           │
│     Frontend Developer          │
│  React · TypeScript · Tailwind  │
│                                 │
│    [LinkedIn] [Email]           │
│                                 │
│  © 2026 Rajatkumar Moolya      │
└─────────────────────────────────┘
```

**Features:**
- Gradient name text
- Social icons from Lucide
- Minimal, centered layout
- Glass effect on icon containers
- Hover: Icons scale + lift

---

## 🎭 Icons System

### Lucide React Icons Used

```javascript
// Navigation
Menu, X, Sparkles

// Hero & Features  
Code2, Zap, Palette, Smartphone, Database

// Actions
ArrowRight, Send, ExternalLink

// Chat
Bot, MessageCircle

// Social
Linkedin, Mail, Phone, Github

// Status
Check, CheckCircle

// Misc
ChevronDown, ChevronUp
```

### Icon Styling

```css
/* Standard size */
w-5 h-5 (20px)

/* Small */
w-4 h-4 (16px)

/* Large */
w-6 h-6 (24px)

/* XL (features) */
w-8 h-8 (32px)
```

### Icon Colors

```css
/* Primary actions */
text-primary-400

/* Secondary */
text-accent-400

/* CTA */
text-cta-400

/* Muted */
text-slate-400

/* On dark */
text-white

/* Success */
text-green-400
```

---

## ✨ Animations

### Custom Keyframes

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes slideUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  0% { transform: translateY(-30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes scaleIn {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Framer Motion Animations

**Common Patterns:**

```javascript
// Fade up on scroll
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Scale on hover
whileHover={{ scale: 1.05, y: -2 }}
whileTap={{ scale: 0.98 }}

// Stagger children
variants={{
  container: {
    animate: { transition: { staggerChildren: 0.1 } }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
}}

// Float continuously
animate={{ y: [0, -15, 0] }}
transition={{ 
  duration: 6, 
  repeat: Infinity, 
  ease: 'easeInOut' 
}}

// Rotate continuously
animate={{ rotate: 360 }}
transition={{ 
  duration: 20, 
  repeat: Infinity, 
  ease: 'linear' 
}}
```

### Animation Timing

```javascript
// Fast interactions
duration: 0.2-0.3s (buttons, hovers)

// Normal reveals
duration: 0.5-0.6s (cards, content)

// Slow emphasis
duration: 0.8-1s (hero, major elements)

// Continuous
duration: 2-8s (ambient animations)

// Delays
stagger: 0.05-0.15s between items
entrance: 0.1-0.5s before animation starts
```

---

## 📐 Layout System

### Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem (16px);
}

/* Responsive padding */
sm: px-6 (24px)
lg: px-8 (32px)
```

### Section Spacing

```css
/* Vertical */
py-20 (80px mobile)
md:py-32 (128px desktop)

/* Between elements */
space-y-4 (16px tight)
space-y-6 (24px normal)
space-y-8 (32px loose)
space-y-12 (48px sections)
```

### Grid Layouts

```css
/* Projects */
grid lg:grid-cols-2 gap-8 md:gap-10

/* Services */
grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8

/* Skills */
flex flex-wrap gap-3

/* Two-column content */
grid md:grid-cols-2 gap-8
```

### Responsive Breakpoints

```css
sm: 640px   (Tablet portrait)
md: 768px   (Tablet landscape)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
2xl: 1536px (Extra large)
```

---

## 🎨 Special Effects

### Glassmorphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.glass-nav {
  background: linear-gradient(
    to right,
    rgba(168, 85, 247, 0.2),
    rgba(59, 130, 246, 0.2),
    rgba(217, 70, 239, 0.2)
  );
  backdrop-filter: blur(32px);
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(
    to right,
    #c084fc,
    #60a5fa,
    #e879f9
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradient 8s ease infinite;
}
```

### Glow Shadows

```css
.glow-purple {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
}

.glow-blue {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

.glow-pink {
  box-shadow: 0 0 30px rgba(217, 70, 239, 0.4);
}
```

### Shimmer Effect

```css
.shimmer-effect {
  position: relative;
  overflow: hidden;
}

.shimmer-effect::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: shimmer 2s infinite;
}
```

---

## 📱 Responsive Design

### Mobile First Approach

```css
/* Base (mobile) */
text-4xl px-4 py-2

/* Tablet */
md:text-5xl md:px-6 md:py-3

/* Desktop */
lg:text-6xl lg:px-8 lg:py-4
```

### Component Adaptations

**Navbar:**
- Mobile: Hamburger menu, stacked links
- Desktop: Horizontal navigation

**Hero:**
- Mobile: Single column, smaller text
- Desktop: Two columns, larger text

**Cards:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Typography:**
- Mobile: Smaller scale (4xl max)
- Desktop: Larger scale (7xl)

---

## 📦 Data Structure

### Projects

```typescript
interface Project {
  id: string;
  name: string;
  category: string;
  company?: string;
  timeline?: string;
  description: string;
  technologies: string[];
  contributions: string[];
  url?: string;
  featured: boolean;
  image?: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  keyFeatures?: string[];
}
```

### Experience

```typescript
interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}
```

### Skills

```typescript
interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | ...;
}
```

---

## 🎯 Brand Guidelines

### Do's ✅
- Use gradient text for emphasis
- Apply glass effect to cards
- Animate on scroll
- Use Lucide icons
- Maintain 3-color system
- Keep animations subtle
- Use proper contrast ratios

### Don'ts ❌
- Don't overuse animations
- Don't mix emoji and icons
- Don't use pure black
- Don't overcrowd with colors
- Don't ignore accessibility
- Don't break glassmorphism
- Don't use Comic Sans 😄

---

**Status:** Complete design system documentation  
**Version:** 1.0  
**Last Updated:** September 7, 2026
