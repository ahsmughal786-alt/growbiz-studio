# Growbiz Studio — Website

Static website built with **React 19 + Vite 6 + Tailwind CSS 4**, pre-rendered to plain HTML at build time (fast + SEO-friendly).

**Pages**
- `/` — main agency site (services, AI, photography, work, team, process, FAQ, contact)
- `/studio/` — Photography & Video Studio (sessions, portfolio, packages, booking form, FAQ)
- `/store/` — Store, currently **under construction** (hidden from Google with `noindex`; edit text in `src/data/store.js`). When the store is ready, replace this page and remove `noindex: true` in `prerender.js`.

Links marked `newTab: true` in the menus (Store) and the Photography section buttons open in a new browser tab.

## Run it

```bash
npm install
npm run dev        # local dev server → http://localhost:5173
npm run build      # production build → /dist (pre-rendered + sitemap + robots.txt)
npm run preview    # preview the production build
```

When you run `npm run build`, it ends with a **"Before going live"** list of anything still left to fill in.

## Edit content

- **Main site:** `src/data/site.js` — text, services, projects, team, photography section, FAQs, contact details.
- **Studio page:** `src/data/studio.js` — sessions, portfolio categories & photos, packages/prices, booking options, FAQs.
- **Photos:** `public/photography/` (homepage) and `public/photography/portfolio/` (studio). Replace a file with the same name, or add new files and list them in `studio.js`. Use originals around 1600–2000px wide, JPG, under ~400 KB each.
Anything marked `TODO` must be replaced before launch:

| What | Where in `site.js` |
|---|---|
| Domain (for SEO/sitemap) | `site.url` |
| Email, address, phone & hours (optional) | `site.contact` |
| Booking link (Calendly/Cal.com) | `site.bookingUrl` (empty = hidden) |
| Social links | `site.social` (empty = hidden) |
| Portfolio | `projects` → add real ones, set `placeholder: false`, add images to `public/work/` |
| Testimonials | `testimonials` (empty = section hidden) |
| Phone for "Call to Discuss" | `site.contact.phone` |
| Project links (View Website buttons) | `projects` → `link` |
| Team photos | `team` → `photo`, files in `public/team/` |

**Logo:** replace the placeholder mark in `src/components/Logo.jsx` with `<img src="/logo.svg" …>` and put the file in `/public`.
**Social preview image:** `public/og-image.png` (1200×630).

## Contact form

1. Go to https://web3forms.com, enter the email that should receive enquiries, and copy the access key.
2. Copy `.env.example` to `.env` and paste the key: `VITE_WEB3FORMS_KEY=xxxx`.
3. On Vercel/Netlify, add the same variable under **Environment Variables**.

Without a key, the form falls back to opening the visitor's email app.

## Deploy (Vercel, free)

1. Push this folder to a GitHub repo.
2. On vercel.com, click **Add New → Project**, import the repo, and keep the defaults (Framework: Vite, Output: `dist`).
3. Add `VITE_WEB3FORMS_KEY` under Environment Variables, then deploy.
4. Under **Settings → Domains**, add the domain and update the DNS records at the registrar. SSL is set up automatically.

Netlify also works: build command `npm run build`, publish directory `dist`.

**Shared hosting (Hostinger / cPanel):** run `npm run build`, then upload everything inside `dist/` (including the `studio/`, `store/` and `photography/` folders) to `public_html`.

## After launch

- Submit `https://yourdomain.com/sitemap.xml` in **Google Search Console** (it lists both pages).
- Add **Google Analytics 4**: paste the gtag snippet into `index.html` `<head>`.
- Create or verify the **Google Business Profile** and link it to the site.

## Structure

```
src/
  data/site.js          ← main site content
  data/studio.js        ← studio page content
  studio/StudioPage.jsx ← studio page
  components/           ← one file per section
  App.jsx               ← section order
  index.css             ← brand colours (@theme) + animations
  entry-server.jsx      ← used for pre-rendering
prerender.js            ← injects SEO tags, writes sitemap/robots, prints launch TODOs
public/                 ← favicon, og-image, images
```

Brand colours are in `src/index.css` under `@theme` (`--color-brand-*`). Change them there and the whole site updates.
