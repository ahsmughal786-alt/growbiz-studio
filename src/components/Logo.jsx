import { site } from "../data/site.js";

// Replace with <img src="/logo.svg" alt="Growbiz Studio" className="h-9" /> once the real logo is ready
export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-brand-600 text-white shadow-sm shadow-brand-600/30">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 17l5-5 4 4 7-8" /><path d="M15 8h5v5" />
        </svg>
      </span>
      <span className={`text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        {site.name.split(" ")[0]}<span className={light ? "text-brand-300" : "text-brand-600"}> {site.name.split(" ").slice(1).join(" ")}</span>
      </span>
    </span>
  );
}
