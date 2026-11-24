import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarCheck, Check, ChevronDown, ChevronLeft, ChevronRight, Expand, Loader2, MapPin, Send, CheckCircle2, Tag, X } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import EmailButton from "../components/EmailButton.jsx";
import CallButton from "../components/CallButton.jsx";
import Icon from "../components/Icon.jsx";
import { useReveal } from "../components/ui.jsx";
import { useBase, homeHref } from "../components/base.js";
import { studio as s, studioNav } from "../data/studio.js";
import { site } from "../data/site.js";

const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

function Eyebrow({ children, light }) {
  return (
    <p className={`flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-brand-300" : "text-brand-700"}`}>
      <span className={`size-2 rounded-full ${light ? "bg-brand-300" : "bg-brand-600"}`} />{children}
    </p>
  );
}

export default function StudioPage() {
  useReveal();
  const base = useBase();
  const [pkg, setPkg] = useState("");
  const [sessionType, setSessionType] = useState("");
  const links = [...studioNav, { label: "← Main site", href: homeHref(base) }];
  return (
    <>
      <Navbar links={links} cta={{ label: "Request a Session", href: "#book" }} logoHref={homeHref(base)} badge="Photo & Video" />
      <main>
        <Hero base={base} />
        <Sessions />
        <Portfolio base={base} onBook={setSessionType} />
        <Packages onSelect={setPkg} />
        <HowItWorks />
        <Booking pkg={pkg} setPkg={setPkg} sessionType={sessionType} setSessionType={setSessionType} />
        <StudioFAQ />
      </main>
      <Footer />
      <EmailButton />
    </>
  );
}

function Hero({ base }) {
  const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5";
  return (
    <section id="top" className="relative overflow-hidden bg-[#eef1ea] pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <a href={homeHref(base)} className="reveal inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-brand-700"><ArrowLeft className="size-4" /> Growbiz Studio</a>
          <div className="reveal mt-6"><Eyebrow>{s.hero.eyebrow}</Eyebrow></div>
          <h1 className="reveal mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {s.hero.title.map((l, i) => <span key={i} className={`block ${i === 1 ? "text-brand-700" : ""}`}>{l}</span>)}
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{s.hero.text}</p>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#book" className={`${btn} bg-ink text-white hover:bg-brand-800`}><CalendarCheck className="size-4" /> Request Your Session</a>
            <CallButton fallbackHref="#book" className={`${btn} border border-slate-300 bg-white text-ink hover:border-brand-400 hover:text-brand-700`} />
          </div>
          <p className="reveal mt-8 flex items-center gap-2 text-sm text-slate-600"><MapPin className="size-4 text-brand-600" /><strong className="text-ink">{s.serviceArea}</strong></p>
        </div>

        <div className="reveal grid grid-cols-2 gap-4">
          {s.hero.images.slice(0, 3).map((img, i) => (
            <div key={img.image} className={`overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 ${i === 0 ? "row-span-2" : ""}`}>
              <img src={base + img.image} alt={img.alt} className={`size-full object-cover ${i === 0 ? "min-h-[22rem]" : "aspect-[4/3]"}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sessions() {
  return (
    <section id="sessions" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <Eyebrow>Sessions</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">What we photograph & film</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {s.sessions.map((x) => (
            <article key={x.title} className="reveal group flex flex-col rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><Icon name={x.icon} className="size-6" /></span>
              <h3 className="mt-6 text-xl font-bold text-ink">{x.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{x.text}</p>
              <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                {x.includes.map((i) => <li key={i} className="flex items-start gap-2 text-sm text-slate-700"><Check className="mt-0.5 size-4 shrink-0 text-brand-600" strokeWidth={2.5} />{i}</li>)}
              </ul>
              <a href="#book" className="mt-auto pt-6 text-sm font-semibold text-brand-700 hover:underline">Request this session →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ base, onBook }) {
  const [viewer, setViewer] = useState(null); // { cat, index }
  return (
    <section id="portfolio" className="bg-[#eef1ea] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Portfolio</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Selected moments</h2>
            <p className="mt-3 max-w-xl text-slate-600">Selected photography from our studio portfolio. Tap any photo to view it full screen.</p>
          </div>
          <nav aria-label="Portfolio categories" className="flex flex-wrap gap-2">
            {s.portfolio.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-black/5 transition hover:bg-brand-600 hover:text-white">
                <Icon name={c.icon} className="size-4" />{c.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 space-y-16">
          {s.portfolio.map((c) => {
            const [feat, ...rest] = c.images;
            const open = (index) => setViewer({ cat: c, index });
            return (
              <div key={c.id} id={c.id}>
                <div className="reveal flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{c.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{c.subtitle}</p>
                  </div>
                  <button type="button" onClick={() => open(0)} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-brand-600 bg-white px-3.5 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white">
                    View All <span className="hidden sm:inline">({c.images.length})</span> <ArrowRight className="size-4" />
                  </button>
                </div>

                <div className="reveal mt-5 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                  <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-[1.1fr_1fr] md:items-start">
                    <button type="button" onClick={() => open(0)} className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100" aria-label={`Open ${c.title} photo: ${feat.alt}`}>
                      <img src={base + feat.src} alt={feat.alt} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                      <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow transition group-hover:opacity-100"><Expand className="size-4" /></span>
                    </button>
                    <div className="md:py-2">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100"><Icon name={c.icon} className="size-5" /></span>
                        <h4 className="text-xl font-bold text-ink">{c.headline}</h4>
                      </div>
                      <p className="mt-4 leading-relaxed text-slate-600">{c.text}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        <a href="#book" onClick={() => onBook(c.bookingType)} className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"><CalendarCheck className="size-4" /> Booking</a>
                        <a href="#packages" className="inline-flex items-center gap-1.5 rounded-lg border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"><Tag className="size-4" /> Pricing</a>
                      </div>
                    </div>
                  </div>
                  {rest.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 border-t border-slate-100 p-4 sm:gap-4 sm:p-6 md:grid-cols-4">
                      {rest.slice(0, 4).map((img, i) => (
                        <button key={img.src} type="button" onClick={() => open(i + 1)} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100" aria-label={`Open ${c.title} photo: ${img.alt}`}>
                          <img src={base + img.src} alt={img.alt} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                          {i === 3 && c.images.length > 5 && (
                            <span className="absolute inset-0 grid place-items-center bg-black/45 text-lg font-bold text-white">+{c.images.length - 5} more</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {viewer && <Lightbox base={base} viewer={viewer} setViewer={setViewer} />}
    </section>
  );
}

function Lightbox({ base, viewer, setViewer }) {
  const { cat, index } = viewer;
  const n = cat.images.length;
  const go = (d) => setViewer({ cat, index: (index + d + n) % n });
  const close = () => setViewer(null);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  });
  const img = cat.images[index];
  const nav = "absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25";
  return (
    <div role="dialog" aria-modal="true" aria-label={`${cat.title} gallery`} className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm" onClick={close}>
      <div className="flex items-center justify-between px-5 py-4 text-white" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm font-semibold"><span className="text-brand-300">{cat.title}</span> · {index + 1} / {n}</p>
        <button type="button" onClick={close} aria-label="Close" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/25"><X className="size-5" /></button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-20">
        <img src={base + img.src} alt={img.alt} onClick={(e) => e.stopPropagation()} className="h-full w-full object-contain drop-shadow-2xl" />
        {n > 1 && <>
          <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1); }} className={`${nav} left-3 sm:left-6`}><ChevronLeft className="size-6" /></button>
          <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1); }} className={`${nav} right-3 sm:right-6`}><ChevronRight className="size-6" /></button>
        </>}
      </div>
      <div className="flex justify-center gap-2 overflow-x-auto px-4 pb-5" onClick={(e) => e.stopPropagation()}>
        {cat.images.map((im, i) => (
          <button key={im.src} type="button" onClick={() => setViewer({ cat, index: i })} aria-label={`Photo ${i + 1}`}
            className={`h-14 w-14 shrink-0 overflow-hidden rounded-md ring-2 transition ${i === index ? "ring-brand-400" : "opacity-50 ring-transparent hover:opacity-100"}`}>
            <img src={base + im.src} alt="" className="size-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Packages({ onSelect }) {
  const choose = (p) => {
    onSelect(`${p.name} (${p.price})`);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#book");
  };
  return (
    <section id="packages" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="flex justify-center"><Eyebrow>Packages</Eyebrow></div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{s.packagesIntro.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{s.packagesIntro.text}</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {s.packages.map((p, i) => (
            <article key={p.name} style={{ transitionDelay: `${i * 90}ms` }}
              className={`reveal relative flex flex-col rounded-3xl bg-white p-8 transition duration-300 hover:-translate-y-1 ${p.featured ? "border-2 border-brand-600 shadow-2xl shadow-brand-900/15 lg:py-11" : "border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-900/5"}`}>
              <span className={`self-start rounded-full px-3 py-1 text-xs font-bold ${p.featured ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"}`}>{p.tier}</span>
              <h3 className="mt-5 text-2xl font-bold text-ink">{p.name}</h3>
              <p className="mt-3 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold tracking-tight text-brand-700">{p.price}</span>
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">{p.text}</p>
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-slate-700">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700"><Check className="size-3" strokeWidth={3} /></span>{f}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => choose(p)}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition ${p.featured ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700" : "border border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white"}`}>
                <CalendarCheck className="size-4" /> Request Booking
              </button>
            </article>
          ))}
        </div>
        <p className="reveal mt-10 text-center text-sm text-slate-500">Need something different, like a wedding, a larger event or business content? <a href="#book" className="font-semibold text-brand-700 hover:underline">Request a custom quote</a>.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl"><Eyebrow light>How booking works</Eyebrow><h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">From request to final images</h2></div>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {s.steps.map((st, i) => (
            <li key={st.title} className="reveal">
              <span className="text-5xl font-extrabold text-brand-400/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold">{st.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/70">{st.text}</p>
            </li>
          ))}
        </ol>
        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {s.deliverables.map((d) => (
            <div key={d.title} className="flex items-center gap-3 bg-brand-950 p-5">
              <Icon name={d.icon} className="size-5 text-brand-300" /><span className="text-sm font-semibold">{d.title}</span>
            </div>
          ))}
        </div>
        <p className="reveal mt-10 flex items-start gap-2 text-sm leading-relaxed text-brand-100/70">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" /><span><strong className="text-white">{s.serviceArea}</strong> {s.serviceNote}</span>
        </p>
      </div>
    </section>
  );
}

function Booking({ pkg, setPkg, sessionType, setSessionType }) {
  const [status, setStatus] = useState("idle");
  const input = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100";

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return;
    const subject = `Session request — ${data.session_type}`;
    if (!FORM_KEY) {
      const body = Object.entries(data).filter(([k, v]) => v && k !== "botcheck").map(([k, v]) => `${k.replace(/_/g, " ")}: ${v}`).join("\n");
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: FORM_KEY, subject, from_name: "Growbiz Studio — Booking" }),
      });
      if (!(await res.json()).success) throw new Error();
      setStatus("sent"); form.reset(); setPkg(""); setSessionType("");
    } catch { setStatus("error"); }
  }

  return (
    <section id="book" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <Eyebrow>Request your session</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Tell us about your day</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">Share the session type, date, location and coverage you need. We'll reply to confirm availability and pricing. Nothing is booked until we've talked.</p>
          <ul className="mt-8 space-y-3 text-sm text-slate-700">
            {["Reply within 1 business day", "Availability & pricing confirmed before booking", "NJ · NY · CT, with travel on request"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check className="size-4 text-brand-600" strokeWidth={2.5} />{t}</li>
            ))}
          </ul>
          <CallButton fallbackHref="#book" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700" />
        </div>

        <div className="reveal rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          {status === "sent" ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto size-14 text-brand-600" />
              <h3 className="mt-5 text-2xl font-bold text-ink">Request received!</h3>
              <p className="mt-2 text-slate-600">We'll be in touch within one business day to confirm availability.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 font-semibold text-brand-700 hover:underline">Send another request</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <F label="Session type" full>
                <select required name="session_type" className={input} value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
                  <option value="" disabled>Choose a session…</option>
                  {s.sessionTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </F>
              <F label="Package" full>
                <select name="package" className={input} value={pkg} onChange={(e) => setPkg(e.target.value)}>
                  <option value="">Not sure yet / custom quote</option>
                  {s.packages.map((p) => <option key={p.name} value={`${p.name} (${p.price})`}>{p.name} · {p.price}</option>)}
                </select>
              </F>
              <F label="Preferred date"><input required name="date" type="date" className={input} /></F>
              <F label="Coverage needed">
                <select name="coverage" className={input} defaultValue="Not sure yet">{s.coverageOptions.map((t) => <option key={t}>{t}</option>)}</select>
              </F>
              <F label="Location / venue" full><input required name="location" className={input} placeholder="City, venue or address" /></F>
              <F label="Your name"><input required name="name" autoComplete="name" className={input} placeholder="Full name" /></F>
              <F label="Phone (optional)"><input name="phone" type="tel" autoComplete="tel" className={input} placeholder="(201) 555-0123" /></F>
              <F label="Email" full><input required name="email" type="email" autoComplete="email" className={input} placeholder="you@email.com" /></F>
              <F label="Anything else?" full><textarea name="details" rows={4} className={input} placeholder="Number of guests, must-have shots, video or Reels, style you like…" /></F>
              <div className="sm:col-span-2">
                <button disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-7 py-4 font-semibold text-white transition hover:bg-brand-800 disabled:opacity-70 sm:w-auto">
                  {status === "sending" ? <><Loader2 className="size-5 animate-spin" /> Sending…</> : <>Request Your Session <Send className="size-4" /></>}
                </button>
                {status === "error" && <p className="mt-3 text-sm font-medium text-red-600">Something went wrong. Please try again or email {site.contact.email}.</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function F({ label, full, children }) {
  return <label className={`block ${full ? "sm:col-span-2" : ""}`}><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>{children}</label>;
}

function StudioFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="studio-faq" className="bg-[#eef1ea] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center"><h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Studio FAQ</h2></div>
        <div className="mt-10 space-y-3">
          {s.faqs.map((f, i) => (
            <div key={f.q} className={`reveal rounded-2xl border bg-white ${open === i ? "border-brand-300" : "border-slate-200"}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-ink">
                {f.q}<ChevronDown className={`size-5 shrink-0 text-brand-600 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="px-6 pb-6 leading-relaxed text-slate-600">{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
