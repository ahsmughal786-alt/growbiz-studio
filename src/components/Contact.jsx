import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CalendarDays, Send, Loader2, CheckCircle2 } from "lucide-react";
import { site, services } from "../data/site.js";
import { SectionHeader, mailLink, gmailLink } from "./ui.jsx";
import { Copy, Check, ExternalLink } from "lucide-react";

// Free form backend: get a key at https://web3forms.com and put it in .env as VITE_WEB3FORMS_KEY
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(site.contact.email); }
    catch {
      const t = document.createElement("textarea"); t.value = site.contact.email; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); } catch {} t.remove();
    }
    setCopied(true); setTimeout(() => setCopied(false), 1500);
  }
  const c = site.contact;

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd);
    data.services = fd.getAll("services").join(", ") || "Not sure yet";
    delete data.service;
    if (data.botcheck) return;

    if (!FORM_KEY) {
      // Fallback until the form key is added: open the user's email app
      const body = `Name: ${data.name}\nCompany: ${data.company || "-"}\nPhone: ${data.phone || "-"}\nEmail: ${data.email}\nServices: ${data.services}\nBudget: ${data.budget || "-"}\nTimeline: ${data.timeline || "-"}\n\n${data.message}`;
      window.location.href = `mailto:${c.email}?subject=${encodeURIComponent("New enquiry: " + data.services)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: FORM_KEY, subject: `New enquiry — ${data.services}`, from_name: site.name }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const items = [
    c.phone && { icon: Phone, label: "Call us", value: c.phone, href: `tel:${c.phone.replace(/[^\d+]/g, "")}` },
    { icon: MapPin, label: "Studio", value: c.address, href: c.mapUrl || null, ext: true },
    c.hours && { icon: Clock, label: "Hours", value: c.hours },
  ].filter(Boolean);

  const input = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100";

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <SectionHeader center={false} eyebrow="Contact" title="Let's talk about your project" text="Tell us what you need. We reply within one working day with next steps and a free quote." />
          <div className="reveal mt-10 rounded-2xl border border-brand-100 bg-brand-50/50 p-4">
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600 ring-1 ring-brand-100"><Mail className="size-5" /></span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-slate-400">Email</span>
                <a href={mailLink(c)} className="block truncate font-semibold text-ink hover:text-brand-700">{c.email}</a>
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a href={gmailLink(c)} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">
                <ExternalLink className="size-4" /> Open in Gmail
              </a>
              <button type="button" onClick={copyEmail} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-ink transition hover:border-brand-300 hover:text-brand-700">
                {copied ? <><Check className="size-4 text-brand-600" /> Copied!</> : <><Copy className="size-4" /> Copy email</>}
              </button>
            </div>
          </div>
          <ul className="reveal mt-4 space-y-3">
            {items.map(({ icon: I, label, value, href, ext }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><I className="size-5" /></span>
                  <span><span className="block text-xs font-medium uppercase tracking-wide text-slate-400">{label}</span><span className="font-semibold text-ink">{value}</span></span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} {...(ext ? { target: "_blank", rel: "noopener" } : {})} className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-slate-50">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="reveal mt-10 rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-ink">What happens next?</h3>
            <ol className="mt-4 space-y-4">
              {["We review your message and reply within 1 business day.", "A free 30-minute call to understand your goals.", "You get a clear proposal with scope, timeline and a fixed quote."].map((t, i) => (
                <li key={t} className="flex gap-3 text-sm text-slate-600">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">{i + 1}</span>{t}
                </li>
              ))}
            </ol>
          </div>
          {site.bookingUrl && (
            <a href={site.bookingUrl} target="_blank" rel="noopener" className="reveal mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white">
              <CalendarDays className="size-5" /> Book a free call
            </a>
          )}
        </div>

        <div className="reveal rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="size-14 text-brand-600" />
              <h3 className="mt-5 text-2xl font-bold text-ink">Message sent!</h3>
              <p className="mt-2 max-w-sm text-slate-600">Thanks for reaching out. We'll get back to you within one working day.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 font-semibold text-brand-700 hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <Field label="Your name"><input required name="name" autoComplete="name" className={input} placeholder="Full name" /></Field>
              <Field label="Phone (optional)"><input name="phone" type="tel" autoComplete="tel" className={input} placeholder="(201) 555-0123" /></Field>
              <Field label="Email"><input required name="email" type="email" autoComplete="email" className={input} placeholder="you@company.com" /></Field>
              <Field label="Company (optional)"><input name="company" autoComplete="organization" className={input} placeholder="Company name" /></Field>
              <fieldset className="sm:col-span-2">
                <legend className="mb-2 block text-sm font-semibold text-slate-700">What do you need? <span className="font-normal text-slate-400">Select all that apply</span></legend>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <label key={s.title} className="cursor-pointer">
                      <input type="checkbox" name="services" value={s.title} className="peer sr-only" />
                      <span className="inline-block rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 transition peer-checked:border-brand-600 peer-checked:bg-brand-600 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-brand-100 hover:border-brand-300">{s.title}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <Field label="Budget (optional)">
                <select name="budget" className={input} defaultValue="">
                  <option value="">Prefer not to say</option>
                  <option>Under $2,500</option>
                  <option>$2,500 – $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000+</option>
                </select>
              </Field>
              <Field label="Timeline (optional)">
                <select name="timeline" className={input} defaultValue="">
                  <option value="">Flexible</option>
                  <option>ASAP</option>
                  <option>Within 1 month</option>
                  <option>1 – 3 months</option>
                  <option>Just exploring</option>
                </select>
              </Field>
              <Field label="Project details" full><textarea required name="message" rows={5} className={input} placeholder="Tell us about your business and what you'd like to achieve…" /></Field>
              <div className="sm:col-span-2">
                <button disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 disabled:opacity-70 sm:w-auto">
                  {status === "sending" ? <><Loader2 className="size-5 animate-spin" /> Sending…</> : <>Send message <Send className="size-4" /></>}
                </button>
                {status === "error" && <p className="mt-3 text-sm font-medium text-red-600">Something went wrong. Please try again or email us at {c.email}.</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, full, children }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  );
}
