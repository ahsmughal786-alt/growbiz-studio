import { useEffect, useRef, useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { site } from "../data/site.js";
import { mailLink, gmailLink } from "./ui.jsx";

// Email button with a small menu: Gmail (web), default email app, copy address.
// Works even when the visitor has no email app set up.
export default function EmailMenu({ children, className = "", wrapperClassName = "relative inline-flex", menuPosition = "bottom-left", ariaLabel, title, subject }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const c = subject ? { ...site.contact, emailSubject: subject } : site.contact;

  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", esc); };
  }, [open]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(c.email);
    } catch {
      const t = document.createElement("textarea");
      t.value = c.email; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); } catch {}
      t.remove();
    }
    setCopied(true);
    setTimeout(() => { setCopied(false); setOpen(false); }, 1400);
  }

  const pos = {
    "bottom-left": "left-0 top-full mt-2",
    "bottom-center": "left-1/2 top-full mt-2 -translate-x-1/2",
    "top-right": "right-0 bottom-full mb-3",
    "top-left": "left-0 bottom-full mb-2",
  }[menuPosition];

  const item = "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700";

  return (
    <div ref={ref} className={wrapperClassName}>
      <button type="button" onClick={() => setOpen(!open)} aria-haspopup="menu" aria-expanded={open} aria-label={ariaLabel} title={title} className={className}>
        {children}
      </button>
      {open && (
        <div role="menu" className={`absolute z-[60] w-64 rounded-2xl border border-slate-200 bg-white p-2 text-ink shadow-2xl shadow-brand-950/15 ${pos}`}>
          <p className="truncate px-3 pb-2 pt-1.5 text-xs font-semibold text-slate-400">{c.email}</p>
          <a role="menuitem" href={gmailLink(c)} target="_blank" rel="noopener" onClick={() => setOpen(false)} className={item}>
            <ExternalLink className="size-4 text-brand-600" /> Open in Gmail
          </a>
          <a role="menuitem" href={mailLink(c)} onClick={() => setOpen(false)} className={item}>
            <Mail className="size-4 text-brand-600" /> Open email app
          </a>
          <button role="menuitem" type="button" onClick={copy} className={item}>
            {copied ? <Check className="size-4 text-brand-600" /> : <Copy className="size-4 text-brand-600" />}
            {copied ? "Copied!" : "Copy email address"}
          </button>
        </div>
      )}
    </div>
  );
}
