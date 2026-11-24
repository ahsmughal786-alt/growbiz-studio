import { ArrowUpRight } from "lucide-react";
import { projects, showWorkSection, workSection } from "../data/site.js";

const themes = {
  blue: { tile: "bg-[#dbe5ec]", ink: "text-[#2b4b66]" },
  sand: { tile: "bg-[#e8ddd2]", ink: "text-[#6b4630]" },
  green: { tile: "bg-[#dce7df]", ink: "text-[#1d4a38]" },
  lavender: { tile: "bg-[#e1e1ec]", ink: "text-[#3e4170]" },
  peach: { tile: "bg-[#efe2d2]", ink: "text-[#6e4220]" },
  sage: { tile: "bg-[#dde8d3]", ink: "text-[#2f5530]" },
};

export default function Work() {
  if (!showWorkSection || projects.length === 0) return null;
  return (
    <section id="work" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
              <span className="size-2 rounded-full bg-brand-600" />{workSection.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              {workSection.title.map((l, i) => <span key={i} className={`block ${i === 1 ? "text-brand-700" : ""}`}>{l}</span>)}
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-slate-600">{workSection.text}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const t = themes[p.theme] || themes.green;
            return (
              <article key={p.title} className="reveal group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/10" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <div className={`relative flex h-48 flex-col justify-between overflow-hidden p-6 ${t.tile}`}>
                  <p className={`text-[11px] font-bold uppercase tracking-[0.16em] opacity-80 ${t.ink}`}>{p.category}</p>
                  <h3 className={`max-w-[85%] text-3xl font-extrabold uppercase leading-[1.02] tracking-tight transition duration-500 group-hover:translate-x-1 ${t.ink}`}>{p.short}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 ${t.ink}`}>Web / Design / Digital</p>
                  <span className={`pointer-events-none absolute -bottom-10 -right-6 text-[9rem] font-extrabold leading-none opacity-[0.07] ${t.ink}`} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{p.category}</p>
                  <h4 className="mt-2 text-xl font-bold text-ink">{p.title}</h4>
                  <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
                  <div className="mt-auto pt-6">
                    {p.note && <p className="text-xs font-medium text-slate-400">{p.note}</p>}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1.5 border-b-2 border-ink pb-1 text-sm font-bold text-ink transition hover:border-brand-600 hover:text-brand-700">
                        {p.linkLabel || "View project"} <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="reveal mt-10 max-w-3xl text-sm leading-relaxed text-slate-500">{workSection.footnote}</p>
      </div>
    </section>
  );
}
