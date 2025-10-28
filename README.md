# Sheikh Tasmia | Portfolio

This is a modern, responsive personal portfolio website for "Sheikh Tasmia". It includes 4 pages:
- Home (index.html)
- About (about.html)
- Portfolio (portfolio.html)
- Contact (contact.html)

Features:
- Sticky header with smooth scrolling
- Full-screen hero with CTAs
- About page with profile, startups, and team sections
- Portfolio with categorized cards and modal viewer
- Contact page with social links and booking form (EmailJS or Formspree)
- Responsive across mobile and desktop
- Google Fonts (Poppins & Montserrat)
- Inline SVG social icons and favicon
- CSS variables for brand colors and easy customization

How to use:
1. Open the files locally (index.html) or host on any static hosting (GitHub Pages, Netlify, Vercel).
2. Replace placeholder images in `/assets/` with your real photos and thumbnails.
3. Update social links in the HTML (look for `<!-- UPDATE: ... -->` comments).
4. Email form (Contact page) uses EmailJS:
   - Sign up at https://www.emailjs.com/
   - Create a Service and Template
   - Replace `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_USER_ID` in `js/main.js`
   - Or switch to Formspree by replacing the form `action` in `contact.html`.
5. Customize colors in `css/style.css` (CSS variables at the top).

License: Free to use and adapt.
