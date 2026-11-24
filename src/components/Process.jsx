import { process } from "../data/site.js";
import { SectionHeader } from "./ui.jsx";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="How we work" title="A simple, transparent process" text="You always know what's happening, what it costs and when it'll be ready." />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-100 via-brand-300 to-brand-100 md:block" aria-hidden="true" />
          {process.map((s, i) => (
            <li key={s.title} className="reveal relative" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="relative grid size-14 place-items-center rounded-2xl border-4 border-white bg-brand-600 text-lg font-extrabold text-white shadow-lg shadow-brand-600/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
