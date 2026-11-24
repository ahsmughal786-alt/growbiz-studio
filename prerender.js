// Runs after `vite build`: renders the page to static HTML (for Google & fast first load),
// injects SEO tags from src/data/site.js, writes sitemap.xml + robots.txt, and warns about TODOs.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const ssrDir = path.resolve("dist-ssr");
const { render, site, faqs, projects, studio, store } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const url = site.url.replace(/\/$/, "");
const img = site.seo.ogImage.startsWith("http") ? site.seo.ogImage : url + site.seo.ogImage;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url,
    image: img,
    description: site.seo.description,
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    email: site.contact.email,
    address: { "@type": "PostalAddress", addressLocality: "Jersey City", addressRegion: "NJ", addressCountry: "US" },
    areaServed: "US",
    sameAs: Object.values(site.social).filter(Boolean),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

const headFor = ({ title, description, path: pagePath, ld, noindex }) => `
    <title>${esc(title)}</title>${noindex ? '\n    <meta name="robots" content="noindex, follow" />' : ""}
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${url}${pagePath}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${url}${pagePath}" />
    <meta property="og:image" content="${img}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${img}" />
    <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;

const studioLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: studio.name,
    url: `${url}/studio/`,
    description: studio.seo.description,
    email: site.contact.email,
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    address: { "@type": "PostalAddress", addressLocality: "Jersey City", addressRegion: "NJ", addressCountry: "US" },
    areaServed: ["New Jersey", "New York", "Connecticut"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: studio.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

const pages = [
  { file: "index.html", page: "home", path: "/", title: site.seo.title, description: site.seo.description, ld: jsonLd },
  { file: "studio/index.html", page: "studio", path: "/studio/", title: studio.seo.title, description: studio.seo.description, ld: studioLd },
  // Under construction: hidden from Google until it opens (remove noindex + add to sitemap then)
  { file: "store/index.html", page: "store", path: "/store/", title: store.seo.title, description: store.seo.description, ld: [], noindex: true },
];
for (const p of pages) {
  const file = path.join(dist, p.file);
  const html = fs.readFileSync(file, "utf8").replace("<!--app-head-->", headFor(p)).replace("<!--app-html-->", render(p.page));
  fs.writeFileSync(file, html);
}

fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter((p) => !p.noindex).map((p) => `  <url><loc>${url}${p.path}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>`).join("\n")}\n</urlset>\n`
);
fs.rmSync(ssrDir, { recursive: true, force: true });

// ---- Pre-launch checklist ----
const warn = [];
if (!site.contact.phone) warn.push("No phone number yet (site.js → contact.phone). \"Call to Discuss\" scrolls to the form until added");
warn.push("Studio page (/studio/) still has DRAFT content (src/data/studio.js)");
const noLink = projects.filter((p) => !p.link).map((p) => p.short);
if (noLink.length) warn.push(`No link yet for: ${noLink.join(", ")} (projects → link). Button stays hidden until added`);
if (!process.env.VITE_WEB3FORMS_KEY && !fs.existsSync(".env")) warn.push("No VITE_WEB3FORMS_KEY in .env — contact form will fall back to opening the email app");
if (!fs.existsSync(path.join(dist, site.seo.ogImage.replace(/^\//, "")))) warn.push(`Social preview image ${site.seo.ogImage} missing from /public`);

console.log("\n✓ Pre-rendered /, /studio/, /store/, sitemap.xml, robots.txt");
if (warn.length) {
  console.log("\n⚠ Before going live:");
  warn.forEach((w) => console.log("  • " + w));
  console.log("");
} else console.log("✓ No launch TODOs left\n");
