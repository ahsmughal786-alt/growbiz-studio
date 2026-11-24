import { industries } from "../data/site.js";
import { SectionHeader } from "./ui.jsx";
import Icon from "./Icon.jsx";

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Industries" title="Built for businesses like yours" text="We adapt our tools and process to the way your industry works." />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((ind, i) => (
            <div key={ind.title} className="reveal group flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-7 text-center transition hover:border-brand-300 hover:bg-brand-50/50" style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <span className="grid size-14 place-items-center rounded-2xl bg-slate-50 text-brand-600 ring-1 ring-slate-100 transition group-hover:scale-110 group-hover:bg-white">
                <Icon name={ind.icon} className="size-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-sm font-bold text-ink sm:text-base">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
