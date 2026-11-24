import { ArrowRight, Mail } from "lucide-react";
import { site } from "../data/site.js";
import EmailMenu from "./EmailMenu.jsx";

export default function CTA() {
  return (
    <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="reveal relative mx-auto max-w-7xl rounded-3xl bg-brand-600 px-8 py-14 text-center sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden="true"><div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-400/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-brand-900/40 blur-3xl" aria-hidden="true" /></div>
        <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Ready to grow your business online?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-brand-50/90">Get a free consultation and a clear quote — no obligation.</p>
        <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 transition hover:-translate-y-0.5">Get a free quote <ArrowRight className="size-5" /></a>
          <EmailMenu menuPosition="bottom-center" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10 w-full"><Mail className="size-5" /> {site.contact.email}</EmailMenu>
        </div>
      </div>
    </section>
  );
}
