# Portfolio Customization Guide

This guide will help you customize the portfolio with your actual information.

## 🔧 Quick Start Customization

### Step 1: Update Contact Information

Replace all placeholder contact details throughout the portfolio:

**Search for these placeholders and replace them:**
- `[ADD EMAIL]` - Your email address
- `[ADD LINKEDIN]` - Your LinkedIn profile URL
- `[ADD PHONE]` - Your phone number
- `[ADD GITHUB]` - Your GitHub profile URL (optional)

**Files to update:**
1. `src/sections/Contact.tsx`
2. `src/components/Footer.tsx`
3. `src/components/AIAssistant.tsx` (update predefined answers)

### Step 2: Update Project URLs

**File:** `src/data/projects.ts`

For each project, replace `[ADD PROJECT URL]` with the actual project URL:

```typescript
url: 'https://your-actual-project-url.com',
```

If a project doesn't have a live URL, you can either:
- Remove the url property entirely
- Keep it as is (the modal will hide the "View Live Project" button for placeholders)

### Step 3: Add Project Screenshots

1. Place project screenshots in `src/assets/` directory
2. Update the `image` property in `src/data/projects.ts`:

```typescript
image: '/path-to-your-image.png',
```

Currently, projects use elegant placeholders. Adding real screenshots will enhance the visual appeal.

### Step 4: Update Personal Information

**File:** `src/data/experience.ts`
- Verify all work experience details are accurate
- Add any additional positions if needed

**File:** `src/data/education.ts`
- Confirm education details
- Update scores if needed

**File:** `src/data/certifications.ts`
- Add dates if available
- Add any new certifications

**File:** `src/data/skills.ts`
- Add or remove technologies as needed
- Keep the list current with your actual skillset

### Step 5: Customize AI Assistant Responses

**File:** `src/components/AIAssistant.tsx`

Update the `predefinedAnswers` object with your actual information:

```typescript
const predefinedAnswers: Record<string, string> = {
  contact: 'You can reach Rajatkumar via email at YOUR-EMAIL@example.com...',
  // Update other answers as needed
};
```

## 📝 Adding New Content

### Add a New Project

**File:** `src/data/projects.ts`

```typescript
{
  id: 'unique-project-id',
  name: 'Project Name',
  category: 'Project Category',
  company: 'Company Name (optional)',
  timeline: 'Start Date – End Date (optional)',
  description: 'Brief description of the project',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  contributions: [
    'What you specifically did',
    'Key achievement or implementation',
  ],
  url: 'https://project-url.com',
  featured: true, // Set to true to display on homepage
  overview: 'Detailed project overview',
  challenge: 'What challenge did the project solve',
  approach: 'How you approached the solution',
  keyFeatures: [
    'Feature 1',
    'Feature 2',
  ],
}
```

### Add Work Experience

**File:** `src/data/experience.ts`

```typescript
{
  id: 'unique-id',
  title: 'Job Title',
  company: 'Company Name',
  location: 'City, State/Country',
  startDate: 'Month Year',
  endDate: 'Month Year',
  responsibilities: [
    'Responsibility 1',
    'Responsibility 2',
  ],
}
```

### Add Skills

**File:** `src/data/skills.ts`

```typescript
{ name: 'Skill Name', category: 'Frontend' }, // or 'Backend', 'Tools', etc.
```

### Add Certifications

**File:** `src/data/certifications.ts`

```typescript
{
  id: 'unique-id',
  name: 'Certification Name',
  issuer: 'Issuing Organization',
  date: 'Month Year (optional)',
}
```

## 🎨 Design Customization

### Change Color Scheme

**File:** `tailwind.config.js`

Update the color values in the `extend` section:

```javascript
colors: {
  'dark-bg': '#08090D',           // Main background
  'dark-secondary': '#0E1016',    // Secondary background
  'dark-card': '#12141B',         // Card backgrounds
  'dark-border': '#242733',       // Border color
  'text-primary': '#F5F5F5',      // Primary text
  'text-secondary': '#9A9FAA',    // Secondary text
  'accent': {
    DEFAULT: '#6366F1',           // Accent color (main brand)
    light: '#818CF8',             // Lighter accent
    dark: '#4F46E5',              // Darker accent
  },
}
```

### Change Font

**File:** `tailwind.config.js`

1. Update the Google Fonts import URL in `src/index.css`
2. Update the font family in the config:

```javascript
fontFamily: {
  'sans': ['YourFont', 'system-ui', '-apple-system', 'sans-serif'],
}
```

### Modify Animations

All animations use Framer Motion and are defined in individual component files. To adjust:

- **Duration:** Change the `duration` value in `transition` props
- **Delay:** Adjust the `delay` value
- **Easing:** Modify the `ease` property

Example in any section component:
```typescript
transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
```

## 🌐 SEO Optimization

### Update Meta Tags

**File:** `index.html`

Update these meta tags:
- Title
- Description
- Open Graph tags
- Twitter card tags

### Add Favicon

1. Generate a favicon using a tool like [favicon.io](https://favicon.io/)
2. Place `favicon.svg` (or `favicon.ico`) in the `public/` directory
3. The `index.html` already references `/favicon.svg`

### Add Sitemap (Optional)

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-09-07</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 📱 Social Media Cards

To enable rich previews when sharing your portfolio:

1. Create an Open Graph image (1200x630px recommended)
2. Place it in `public/` directory as `og-image.jpg`
3. Add to `index.html`:

```html
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
<meta property="twitter:image" content="https://yourdomain.com/og-image.jpg" />
```

## 🔍 Analytics (Optional)

### Add Google Analytics

1. Create a Google Analytics account
2. Add the tracking code to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ⚡ Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before adding them
   - Keep file sizes under 200KB for hero images

2. **Lazy Loading:**
   - Images are already lazy-loaded via Framer Motion's `whileInView`
   - No additional configuration needed

3. **Code Splitting:**
   - Vite automatically handles code splitting
   - Each section is already modular

## 🧪 Testing Checklist

Before deploying, test:

- [ ] All navigation links work and smooth scroll correctly
- [ ] Mobile menu opens and closes properly
- [ ] All project modals open and close correctly
- [ ] Contact form email links work
- [ ] Social media links are correct
- [ ] AI Assistant responds correctly to questions
- [ ] Responsive design on mobile (375px), tablet (768px), desktop (1440px)
- [ ] All animations play smoothly
- [ ] No console errors in browser developer tools
- [ ] Build completes without errors (`npm run build`)
- [ ] Production preview works (`npm run preview`)

## 🚀 Deployment

See `README.md` for detailed deployment instructions to Netlify.

## 💡 Tips

1. **Keep It Updated:** Regularly update your projects and skills as you learn new technologies
2. **Performance:** Run Lighthouse audits regularly to maintain good scores
3. **Accessibility:** Test with screen readers and keyboard navigation
4. **Content:** Use action verbs in descriptions ("Built", "Implemented", "Designed")
5. **Authenticity:** Only include real projects and verified information

## 🆘 Common Issues

### Issue: Styles not applying
**Solution:** Clear browser cache and rebuild the project

### Issue: Animations not working
**Solution:** Check that Framer Motion is installed: `npm list framer-motion`

### Issue: Build fails
**Solution:** Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Issue: TypeScript errors
**Solution:** Check `tsconfig.json` has `"jsx": "react-jsx"` enabled

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify all placeholder data has been replaced
3. Ensure all imports are correct
4. Review the README.md for installation steps

---

**Remember:** This portfolio is designed to be a living document. Keep it updated with your latest work and achievements!
