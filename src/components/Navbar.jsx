import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "../data/site.js";
import Logo from "./Logo.jsx";
import { useBase, resolveHref, newTabProps } from "./base.js";
import { ArrowUpRight } from "lucide-react";

// links: [{ label, href }] — "#id" for same-page sections, anything else is a normal link.
export default function Navbar({ links = nav, cta = { label: "Get a free quote", href: "#contact" }, logoHref = "#top", badge }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const base = useBase();
  const items = links.map((n) => ({ ...n, href: resolveHref(base, n) }));

  useEffect(() => {
    const ids = links.filter((n) => n.href && n.href.startsWith("#")).map((n) => n.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  const isActive = (href) => href.startsWith("#") && active === href.slice(1);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-slate-200/70 bg-white/90 backdrop-blur-lg" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8" aria-label="Main">
        <a href={logoHref} className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} home`}>
          <Logo />
          {badge && <span className="hidden rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-100 sm:inline">{badge}</span>}
        </a>
        <ul className="hidden items-center gap-0.5 xl:flex">
          {items.map((n) => (
            <li key={n.label}>
              <a href={n.href} {...(n.newTab ? newTabProps : {})} className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-700 xl:px-3.5 ${isActive(n.href) ? "bg-brand-50 text-brand-700" : "text-slate-600"}`}>
                {n.label}
                {n.badge && <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-amber-700">{n.badge}</span>}
                {n.newTab && <ArrowUpRight className="size-3.5 opacity-60" aria-label="(opens in a new tab)" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={cta.href} className="hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700 sm:inline-flex">
            {cta.label} <ArrowRight className="size-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-ink xl:hidden" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>
      <div className="absolute bottom-0 left-0 h-0.5 bg-brand-500 transition-[width] duration-150" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-2 xl:hidden">
          {items.map((n) => (
            <a key={n.label} href={n.href} {...(n.newTab ? newTabProps : {})} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50">
              {n.label}
              {n.badge && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-700">{n.badge}</span>}
              {n.newTab && <ArrowUpRight className="ml-auto size-4 opacity-50" aria-label="(opens in a new tab)" />}
            </a>
          ))}
          <a href={cta.href} onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white">
            {cta.label} <ArrowRight className="size-4" />
          </a>
        </div>
      )}
    </header>
  );
}
