# Setup Verification Checklist

Use this checklist to verify your portfolio is working correctly.

## ✅ Quick Verification Steps

### 1. Check Dependencies Installed
```bash
npm list tailwindcss framer-motion react react-dom
```

**Expected output should show:**
- tailwindcss@3.4.1
- framer-motion@13.x
- react@19.x
- react-dom@19.x

---

### 2. Verify Build Works
```bash
npm run build
```

**Expected:**
- ✅ No TypeScript errors
- ✅ Build completes in 5-10 seconds
- ✅ Creates `dist/` folder with:
  - `index.html`
  - `assets/index-[hash].css` (~23 KB)
  - `assets/index-[hash].js` (~368 KB)

---

### 3. Start Development Server
```bash
npm run dev
```

**Expected:**
- ✅ Server starts on http://localhost:5173 or 5174
- ✅ No errors in terminal
- ✅ "ready in XXXms" message appears

---

### 4. Visual Verification

Open http://localhost:5174 in your browser and check:

#### Navigation
- [ ] Top navigation bar is visible
- [ ] "RAJATKUMAR" logo on the left
- [ ] Navigation links on the right (Home, Work, About, etc.)
- [ ] "Let's Talk" button is styled correctly (blue/indigo color)
- [ ] Mobile menu icon appears on small screens

#### Hero Section
- [ ] Dark background (#08090D)
- [ ] Large heading: "Building modern web experiences with React"
- [ ] "FRONTEND DEVELOPER" label in accent color (blue)
- [ ] Two buttons: "View My Work" and "Let's Connect"
- [ ] Technology badges visible (React.js, TypeScript, etc.)
- [ ] Animated card on the right side (desktop)
- [ ] Scroll indicator at bottom

#### Colors Check
- [ ] Background is very dark (almost black)
- [ ] Text is light/white
- [ ] Accent color is indigo/blue (#6366F1)
- [ ] Cards have slightly lighter background
- [ ] Borders are subtle gray

#### Hover Effects
- [ ] Buttons change on hover
- [ ] Cards lift slightly on hover
- [ ] Navigation links highlight on hover

#### Scrolling
- [ ] Smooth scroll when clicking navigation links
- [ ] Navbar changes slightly when scrolling down
- [ ] Scroll indicator animates

---

### 5. Browser Console Check

Open Browser DevTools (F12) → Console tab

**Expected:**
- ✅ No red errors
- ✅ No warnings about CSS
- ✅ No "Cannot find module" errors

**Acceptable warnings:**
- DevTools warnings (can be ignored)
- React DevTools suggestions (informational)

---

### 6. Responsive Design Check

Test at different screen sizes:

#### Desktop (1440px+)
- [ ] Two-column layout in hero
- [ ] Navigation horizontal
- [ ] Project cards in grid (2 columns)
- [ ] All content centered and readable

#### Tablet (768px)
- [ ] Single column hero
- [ ] Navigation still horizontal
- [ ] Project cards stack or side-by-side
- [ ] Content adapts to width

#### Mobile (375px)
- [ ] Everything stacks vertically
- [ ] Hamburger menu appears
- [ ] Buttons are full width or centered
- [ ] No horizontal scroll
- [ ] Text is readable

**Quick test in Chrome:**
1. Press F12
2. Click device icon (mobile view)
3. Select "Responsive" or specific device
4. Test different sizes

---

### 7. Features Verification

#### Click Test
- [ ] Clicking "View My Work" scrolls to projects
- [ ] Clicking "Let's Connect" scrolls to contact
- [ ] Navigation links scroll to correct sections
- [ ] Project cards open modal when clicked
- [ ] Modal close button works
- [ ] AI chat button opens chat window

#### Animation Test
- [ ] Hero elements fade in on load
- [ ] Sections reveal when scrolling
- [ ] Hover animations work smoothly
- [ ] Page transitions are smooth

#### AI Assistant
- [ ] Chat button visible (bottom right)
- [ ] Clicking opens chat window
- [ ] Can type messages
- [ ] Quick questions appear
- [ ] Bot responds to questions
- [ ] Close button works

---

### 8. Network Performance Check

In Browser DevTools → Network tab:

**Initial page load should be:**
- [ ] HTML: < 5 KB
- [ ] CSS: ~23 KB (~5 KB gzipped)
- [ ] JS: ~368 KB (~113 KB gzipped)
- [ ] Total: ~130 KB gzipped
- [ ] Load time: < 3 seconds (on fast connection)

---

### 9. Lighthouse Audit (Optional)

In Chrome DevTools → Lighthouse:

1. Click "Analyze page load"
2. Check scores

**Target scores:**
- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

---

## 🚨 Common Issues & Solutions

### Issue: Styles Not Applied (White Background)
**Symptoms:** White background, unstyled text, no colors

**Solution:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
npm run dev
```

---

### Issue: Build Fails
**Symptoms:** TypeScript errors, build errors

**Solution:**
```bash
# Check TypeScript config
cat tsconfig.json  # Should have "jsx": "react-jsx"

# Reinstall dependencies
npm install

# Try building again
npm run build
```

---

### Issue: Dev Server Won't Start
**Symptoms:** Port in use, server crashes

**Solution:**
```bash
# Kill process on port 5173/5174
# Windows:
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F

# Try different port
npm run dev -- --port 3000
```

---

### Issue: Tailwind Classes Not Working
**Symptoms:** Classes in HTML but no styling

**Solution:**
1. Check `tailwind.config.js` exists
2. Check `content` path in config includes `src/**/*.{js,ts,jsx,tsx}`
3. Restart dev server
4. Hard refresh browser (Ctrl+Shift+R)

---

### Issue: Images/Fonts Not Loading
**Symptoms:** Broken images, wrong font

**Solution:**
- Check file paths are correct
- Verify files are in `public/` or `src/assets/`
- Check import statements
- Clear browser cache

---

## ✅ Final Checklist Before Deployment

Before deploying to Netlify, ensure:

- [ ] `npm run build` completes without errors
- [ ] All placeholder `[ADD ...]` text replaced
- [ ] Contact email, LinkedIn, phone updated
- [ ] Project URLs added (if available)
- [ ] No console errors in production build
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile device
- [ ] Lighthouse scores acceptable
- [ ] All links work correctly
- [ ] AI Assistant responds correctly

---

## 🎉 Everything Working?

If all checks pass:
1. ✅ **Your portfolio is ready!**
2. 📝 Update contact information (see QUICK_START.md)
3. 🚀 Deploy to Netlify (see NEXT_STEPS.md)
4. 🌐 Share your portfolio with the world!

---

## 📞 Still Having Issues?

1. Check `CSS_FIX_SUMMARY.md` for recent fixes
2. Review `README.md` for installation steps
3. Check browser console for specific errors
4. Try clearing all caches and rebuilding

---

**Last Updated:** September 7, 2026
