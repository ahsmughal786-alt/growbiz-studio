<div align="center">

<img src="public/favicon.svg" alt="Growbiz Studio logo" width="72" />

# Growbiz Studio

**Build. Design. Grow. Automate.**

Official website of Growbiz Studio, a software house and digital agency based in Jersey City, NJ.

[![Live Site](https://img.shields.io/badge/Live%20Site-growbizstudio.com-15803d?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.growbizstudio.com)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-Pre--rendered-15803d)

<br />

<a href="https://www.growbizstudio.com">
  <img src="public/og-image.png" alt="Growbiz Studio website preview" width="800" />
</a>

</div>

---

## Overview

Growbiz Studio offers web and mobile apps, custom software, e-commerce, UI/UX and branding, digital marketing and SEO, and AI agents that automate business workflows. This repository holds the source code of the company's marketing website.

The site is built with **React 19**, **Vite 6** and **Tailwind CSS 4**. At build time it is **pre-rendered to static HTML**, so pages load fast and search engines can index all of the content.

🔗 **Live:** [www.growbizstudio.com](https://www.growbizstudio.com)

## Features

- ⚡ **Static pre-rendering:** every page ships as ready-made HTML, then React takes over in the browser
- 🔍 **SEO built in:** meta tags, Open Graph, canonical URLs, JSON-LD (`ProfessionalService`, `FAQPage`), plus an auto-generated `sitemap.xml` and `robots.txt`
- 🧩 **Content-driven:** all text, services, team, FAQs and pricing live in plain data files, so no component code needs editing
- 📸 **Photography & Video Studio page** with portfolio, packages and a booking form
- ✉️ **Working contact form** through [Web3Forms](https://web3forms.com), which falls back to the visitor's email app
- 📱 **Fully responsive,** with smooth animations and accessible markup
- 🎨 **One place for brand colours:** change them in a single `@theme` block

## Pages

| Route | Description |
|---|---|
| `/` | Main agency site: services, AI solutions, photography, work, team, process, FAQ, contact |
| `/studio/` | Photography & Video Studio: sessions, portfolio, packages, booking |
| `/store/` | Store (coming soon; set to `noindex` until launch) |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 6 (multi-page) |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Rendering | Vite SSR build + custom pre-render script |
| Forms | Web3Forms |

## Getting Started

**Requirements:** Node.js 18 or newer, and npm.

```bash
# 1. Clone the repository
git clone https://github.com/ahsmughal786-alt/growbiz-studio.git
cd growbiz-studio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env    # then add your Web3Forms key

# 4. Start the dev server
npm run dev             # → http://localhost:5173
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Production build to `dist/`: pre-rendered HTML, sitemap and robots.txt |
| `npm run preview` | Preview the production build locally |

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_KEY` | Access key from [web3forms.com](https://web3forms.com) for the contact form |

## Project Structure

```
growbiz-studio/
├── public/                 # Static assets: favicon, OG image, photography
├── src/
│   ├── components/         # One component per page section
│   ├── data/
│   │   ├── site.js         # Main site content and settings
│   │   ├── studio.js       # Studio page content
│   │   └── store.js        # Store page content
│   ├── studio/             # Studio page
│   ├── store/              # Store page
│   ├── App.jsx             # Section order for the main page
│   ├── main.jsx            # Client entry
│   ├── entry-server.jsx    # SSR entry used for pre-rendering
│   └── index.css           # Tailwind theme, brand colours, animations
├── studio/index.html       # Studio page HTML entry
├── store/index.html        # Store page HTML entry
├── index.html              # Main HTML entry
├── prerender.js            # Static rendering, SEO tags, sitemap and robots.txt
└── vite.config.js
```

## Editing Content

| What to change | File |
|---|---|
| Text, services, projects, team, FAQs, contact details | `src/data/site.js` |
| Studio sessions, portfolio, packages, booking options | `src/data/studio.js` |
| Store page text | `src/data/store.js` |
| Brand colours | `src/index.css` → `@theme` (`--color-brand-*`) |
| Logo | `src/components/Logo.jsx` |
| Images | `public/photography/` and `public/photography/portfolio/` |
| Social preview image | `public/og-image.png` (1200×630) |

For images, use JPGs about 1600–2000 px wide and under roughly 400 KB each.

## Deployment

**Vercel / Netlify**
1. Import this repository.
2. Build command: `npm run build`. Output directory: `dist`.
3. Add `VITE_WEB3FORMS_KEY` under Environment Variables.
4. Connect your custom domain.

**Shared hosting (cPanel / Hostinger)**
1. Run `npm run build`.
2. Upload everything inside `dist/` to `public_html`.

## Contact

**Growbiz Studio**, Jersey City, New Jersey, USA
🌐 [www.growbizstudio.com](https://www.growbizstudio.com) · ✉️ [growbizusa@gmail.com](mailto:growbizusa@gmail.com)

---

<div align="center">

© Growbiz Studio. All rights reserved.

</div>
