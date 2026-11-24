import { Check, ArrowRight } from "lucide-react";
import { engagementModels, commitments } from "../data/site.js";
import { SectionHeader } from "./ui.jsx";
import Icon from "./Icon.jsx";

export default function WhyUs() {
  return (
    <section id="engagement" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="How to work with us" title="Flexible engagement models" text="Start with one project or bring us on as your long-term tech partner." />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((m) => (
            <div key={m.title} className={`reveal relative flex flex-col rounded-3xl p-8 ${m.featured ? "bg-brand-950 text-white shadow-2xl shadow-brand-900/30 lg:-my-4 lg:py-12" : "border border-slate-200 bg-white"}`}>
              {m.featured && <span className="absolute right-6 top-6 rounded-full bg-brand-400 px-3 py-1 text-xs font-bold text-brand-950">Most flexible</span>}
              <span className={`grid size-12 place-items-center rounded-xl ${m.featured ? "bg-white/10 text-brand-300" : "bg-brand-50 text-brand-600"}`}><Icon name={m.icon} className="size-6" /></span>
              <h3 className={`mt-6 text-xl font-bold ${m.featured ? "text-white" : "text-ink"}`}>{m.title}</h3>
              <p className={`mt-2 leading-relaxed ${m.featured ? "text-brand-100/75" : "text-slate-600"}`}>{m.text}</p>
              <ul className="mt-6 space-y-3">
                {m.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-medium">
                    <span className={`grid size-5 place-items-center rounded-full ${m.featured ? "bg-brand-400 text-brand-950" : "bg-brand-100 text-brand-700"}`}><Check className="size-3" strokeWidth={3} /></span>
                    <span className={m.featured ? "text-white" : "text-slate-700"}>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${m.featured ? "bg-brand-400 text-brand-950 hover:bg-brand-300" : "border border-slate-200 text-ink hover:border-brand-400 hover:text-brand-700"}`}>
                Get a quote <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <div key={c.title} className="flex items-start gap-4 bg-white p-6">
              <Icon name={c.icon} className="mt-0.5 size-6 shrink-0 text-brand-600" />
              <div><h3 className="font-bold text-ink">{c.title}</h3><p className="mt-1 text-sm text-slate-600">{c.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
