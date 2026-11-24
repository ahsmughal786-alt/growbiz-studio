import { techStack } from "../data/site.js";

export default function TechMarquee() {
  const row = [...techStack, ...techStack];
  return (
    <section aria-label="Technologies we work with" className="border-y border-slate-100 bg-white py-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Technologies & platforms we work with</p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <li key={i} aria-hidden={i >= techStack.length} className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-600">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
