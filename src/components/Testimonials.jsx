import { testimonials } from "../data/site.js";
import { SectionHeader } from "./ui.jsx";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Client words" title="What our clients say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="reveal rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <blockquote className="leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-bold text-ink">{t.name}</p><p className="text-sm text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
