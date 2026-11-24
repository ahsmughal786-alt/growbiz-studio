import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { services, pillars } from "../data/site.js";
import { SectionHeader } from "./ui.jsx";
import Icon from "./Icon.jsx";

export default function Services() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? services : services.filter((s) => s.pillar === active);
  const tabs = [{ id: "all", label: "All services" }, ...pillars];
  const count = (id) => (id === "all" ? services.length : services.filter((s) => s.pillar === id).length);

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="What we do" title="End-to-end digital services under one roof"
          text={`${services.length} services across ${pillars.length} areas, from your first idea to a product that grows.`} />

        <div className="reveal mt-10 flex flex-wrap justify-center gap-2" role="tablist">
          {tabs.map((t) => (
            <button key={t.id} role="tab" aria-selected={active === t.id} onClick={() => setActive(t.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${active === t.id ? "bg-ink text-white" : "bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-700"}`}>
              {t.label}
              <span className={`rounded-full px-1.5 text-xs ${active === t.id ? "bg-white/15" : "bg-white text-slate-400"}`}>{count(t.id)}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {list.map((s) => (
            <article key={s.title}
              className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5 sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]">
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-300 transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{pillars.find((p) => p.id === s.pillar)?.label}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {s.items.map((i) => <li key={i} className="rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-100">{i}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <p className="reveal mt-12 text-center text-slate-600">
          Not sure what you need?{" "}
          <a href="#contact" className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">Get a free consultation <ArrowRight className="size-4" /></a>
        </p>
      </div>
    </section>
  );
}
