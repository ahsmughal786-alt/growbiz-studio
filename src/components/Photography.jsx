import { ArrowUpRight, CalendarCheck, MapPin } from "lucide-react";
import { photography as p } from "../data/site.js";
import { useBase, studioHref, newTabProps } from "./base.js";
import CallButton from "./CallButton.jsx";

export default function Photography() {
  const base = useBase();
  const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5";
  return (
    <section id="photography" className="bg-[#eef1ea] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              <span className="size-2 rounded-full bg-brand-600" />{p.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {p.title.map((l, i) => <span key={i} className={`block ${i === 1 ? "text-brand-700" : ""}`}>{l}</span>)}
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            {p.intro.map((t) => <p key={t}>{t}</p>)}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {p.gallery.map((g, i) => (
            <figure key={g.image} className="reveal group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={base + g.image} alt={g.alt} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="p-5">
                <p className="font-bold text-ink">{g.title}</p>
                <p className="mt-1 text-sm text-slate-500">{g.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-3">
          {p.services.map((s) => (
            <div key={s.title} className="reveal">
              <h3 className="text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={studioHref(base, "#book")} {...newTabProps} className={`${btn} bg-ink text-white hover:bg-brand-800`}>
            <CalendarCheck className="size-4" /> Request Your Session
          </a>
          <a href={studioHref(base)} {...newTabProps} className={`${btn} border border-slate-300 bg-white text-ink hover:border-brand-400 hover:text-brand-700`}>
            Explore the Studio <ArrowUpRight className="size-4" />
          </a>
          <CallButton newTab fallbackHref={studioHref(base, "#book")} className={`${btn} border border-slate-300 bg-white text-ink hover:border-brand-400 hover:text-brand-700`} />
        </div>

        <p className="reveal mt-10 flex items-start gap-2 border-t border-black/10 pt-6 text-sm leading-relaxed text-slate-600">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand-600" />
          <span><strong className="text-ink">{p.serviceArea}</strong> {p.serviceNote}</span>
        </p>
      </div>
    </section>
  );
}
