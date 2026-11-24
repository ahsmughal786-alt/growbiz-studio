import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/site.js";
import { SectionHeader } from "./ui.jsx";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`reveal rounded-2xl border bg-white transition ${isOpen ? "border-brand-300 shadow-lg shadow-brand-900/5" : "border-slate-200"}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-ink">{f.q}</span>
                  <ChevronDown className={`size-5 shrink-0 text-brand-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="px-6 pb-6 leading-relaxed text-slate-600">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
