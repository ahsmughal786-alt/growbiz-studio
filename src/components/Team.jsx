import { team, teamSection } from "../data/site.js";

const tints = [
  "from-brand-100 to-brand-50 text-brand-700",
  "from-slate-200 to-slate-50 text-slate-700",
  "from-brand-200 to-brand-50 text-brand-800",
  "from-emerald-100 to-white text-emerald-800",
];
const initials = (n) => { const w = n.replace(/\./g, "").trim().split(/\s+/); return ((w[0]?.[0] || "") + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase(); };

export default function Team() {
  if (!team.length) return null;
  return (
    <section id="team" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
              <span className="size-2 rounded-full bg-brand-600" />{teamSection.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              {teamSection.title.map((line, i) => <span key={i} className={`block ${i === 1 ? "text-brand-700" : ""}`}>{line}</span>)}
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-slate-600">{teamSection.text}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <article key={m.name} className="reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-100 bg-white">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <div className={`grid size-full place-items-center bg-gradient-to-br ${tints[i % tints.length]}`}>
                    <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
                    <span className="relative grid size-16 place-items-center rounded-full bg-white/80 text-xl sm:size-24 sm:text-3xl font-extrabold tracking-tight shadow-sm ring-1 ring-white transition duration-500 group-hover:scale-110">
                      {initials(m.name)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-base font-bold text-ink sm:mt-5 sm:text-xl">{m.name}</h3>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">{m.role}</p>
              {m.tag && <span className="mt-3 inline-block rounded-full bg-white px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs font-semibold text-brand-700 ring-1 ring-brand-100">{m.tag}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
