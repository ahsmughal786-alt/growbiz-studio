import { site, services, nav } from "../data/site.js";
import Logo from "./Logo.jsx";
import EmailMenu from "./EmailMenu.jsx";
import { useBase, homeHref, studioHref, storeHref, newTabProps } from "./base.js";

export default function Footer() {
  const c = site.contact;
  const base = useBase();
  const h = (hash) => (base ? homeHref(base, hash) : hash);
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="bg-ink text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs leading-relaxed">{site.tagline} A Jersey City software house and digital agency for web, mobile, e-commerce, marketing and AI.</p>
          {socials.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener" className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm capitalize transition hover:border-brand-400 hover:text-white">{name}</a>
              ))}
            </div>
          )}
        </div>
        <FooterCol title="Services">{services.slice(0, 7).map((s) => <li key={s.title}><a href={h("#services")} className="hover:text-white">{s.title}</a></li>)}<li><a href={h("#services")} className="font-semibold text-brand-300 hover:text-white">All {services.length} services →</a></li></FooterCol>
        <FooterCol title="Company">{nav.filter((n) => n.href).map((n) => <li key={n.href}><a href={h(n.href)} className="hover:text-white">{n.label}</a></li>)}<li><a href={studioHref(base)} className="hover:text-white">Photography Studio</a></li><li><a href={storeHref(base)} {...newTabProps} className="hover:text-white">Store <span className="ml-1 rounded-full bg-amber-400/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-amber-300">Soon</span></a></li><li><a href={h("#contact")} className="hover:text-white">Contact</a></li></FooterCol>
        <FooterCol title="Get in touch">
          <li><EmailMenu menuPosition="top-left" className="text-left hover:text-white">{c.email}</EmailMenu></li>
          {c.phone && <li><a href={`tel:${c.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">{c.phone}</a></li>}
          <li>{c.address}</li>
          {c.hours && <li>{c.hours}</li>}
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm sm:px-8">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}
