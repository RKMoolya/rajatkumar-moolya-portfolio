# Quick Start: Update Your Contact Information

Before deploying your portfolio, replace all placeholder contact information.

## 📋 Checklist: Find and Replace

Use your code editor's "Find in Files" feature to search for these placeholders:

### 1. Email Address
**Search for:** `[ADD EMAIL]`

**Files to update:**
- `src/sections/Contact.tsx` (3 occurrences)
- `src/components/Footer.tsx` (2 occurrences)
- `src/components/AIAssistant.tsx` (1 occurrence)

**Replace with:** Your actual email address (e.g., `rajatkumar@example.com`)

---

### 2. LinkedIn Profile
**Search for:** `[ADD LINKEDIN]`

**Files to update:**
- `src/sections/Contact.tsx` (1 occurrence)
- `src/components/Footer.tsx` (1 occurrence)

**Replace with:** Your LinkedIn profile URL (e.g., `https://linkedin.com/in/yourprofile`)

---

### 3. Phone Number
**Search for:** `[ADD PHONE]`

**Files to update:**
- `src/sections/Contact.tsx` (2 occurrences)

**Replace with:** Your phone number (e.g., `+91 98765 43210`)

---

### 4. Project URLs
**Search for:** `[ADD PROJECT URL]`

**Files to update:**
- `src/data/projects.ts` (2 occurrences for MeBot.AI and CogneraLabs.AI)

**Replace with:** 
- Actual project URLs if available
- Or remove the `url` property if no live URL exists

---

## 🔧 Quick Commands

### Using VS Code:
1. Press `Ctrl+Shift+F` (Windows/Linux) or `Cmd+Shift+F` (Mac)
2. Search for `[ADD EMAIL]`
3. Replace with your email
4. Repeat for other placeholders

### Using Command Line:
```bash
# On Linux/Mac:
cd rajat-portfolio
grep -r "\[ADD EMAIL\]" src/

# On Windows PowerShell:
cd rajat-portfolio
Select-String -Path "src\**\*" -Pattern "\[ADD EMAIL\]"
```

---

## ✅ Verification

After updating, verify by:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Run the dev server:**
   ```bash
   npm run dev
   ```

3. **Check the contact section:**
   - Open http://localhost:5174
   - Scroll to the Contact section
   - Click on email, LinkedIn, and phone links
   - Verify they work correctly

4. **Test the AI Assistant:**
   - Click the AI chat button (bottom right)
   - Ask "How can I contact him?"
   - Verify the response contains your actual email

---

## 🎯 Priority Order

**Must update before deployment:**
1. ✅ Email address
2. ✅ LinkedIn URL
3. ✅ Phone number (if you want it public)

**Update when available:**
4. Project URLs
5. GitHub profile (if you have one)
6. Project screenshots

---

## 🚀 Ready to Deploy?

Once you've updated all contact information:

1. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Deploy to Netlify:**
   - See `README.md` for deployment instructions
   - Option 1: Drag `dist` folder to Netlify Drop
   - Option 2: Connect GitHub repository
   - Option 3: Use Netlify CLI

---

## 💡 Pro Tips

- **Don't skip placeholders:** Leaving `[ADD EMAIL]` looks unprofessional
- **Test all links:** Click every link to ensure they work
- **Use professional email:** Avoid nicknames or outdated addresses
- **Keep phone optional:** Only add if you're comfortable with public visibility
- **Update AI responses:** The chatbot should reflect your real contact info

---

## ⚠️ Important Notes

1. **Never commit sensitive data:** If you add API keys later, use environment variables
2. **Double-check spelling:** Typos in email/LinkedIn URLs will break contact functionality
3. **Use full URLs:** LinkedIn should be `https://linkedin.com/in/username`, not just `username`
4. **Test on mobile:** Contact links behave differently on mobile devices

---

## 📞 Still Have Placeholders?

Search your entire project for square brackets to find any missed placeholders:

```bash
# Search for any remaining placeholders
grep -r "\[ADD" src/
```

Every `[ADD ...]` placeholder should be replaced before going live!

---

**Next Steps:** Once contact info is updated, see `CUSTOMIZATION_GUIDE.md` for additional customizations.
