import { ArrowRight, Check, Mail, Bot, TrendingUp, Rocket, Sparkles } from "lucide-react";
import { site, heroPoints } from "../data/site.js";
import EmailMenu from "./EmailMenu.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pt-28 pb-24 sm:pt-36 sm:pb-36">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
            <Sparkles className="size-4" /> Software house & digital agency · Jersey City, NJ
          </p>
          <h1 className="reveal mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Software, design & AI that <span className="text-brand-600">grow your business.</span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Web and mobile apps, custom software, e-commerce, branding, marketing and AI automation. One team takes it from idea to launch and beyond.
          </p>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700">
              Get a free quote <ArrowRight className="size-5" />
            </a>
            <EmailMenu className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 w-full">
              <Mail className="size-5 text-brand-600" /> Email us
            </EmailMenu>
          </div>
          <ul className="reveal mt-9 flex flex-wrap gap-x-6 gap-y-2">
            {heroPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="grid size-5 place-items-center rounded-full bg-brand-100 text-brand-700"><Check className="size-3.5" strokeWidth={3} /></span>{p}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-brand-900/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Client growth</p>
                <p className="mt-1 text-3xl font-extrabold text-ink">On track</p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700"><TrendingUp className="size-4" /> Up</span>
            </div>
            <svg viewBox="0 0 320 120" className="mt-5 w-full">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#229b62" stopOpacity=".28" /><stop offset="1" stopColor="#229b62" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 100 C40 95 60 80 90 82 S140 60 170 58 S220 40 250 30 S300 14 320 8 V120 H0Z" fill="url(#g)" />
              <path d="M0 100 C40 95 60 80 90 82 S140 60 170 58 S220 40 250 30 S300 14 320 8" fill="none" stroke="#157d4d" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["Web App", "Mobile", "Marketing"].map((l, i) => (
                <div key={l} className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{l}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-200"><div className="h-1.5 rounded-full bg-brand-500" style={{ width: `${[82, 68, 74][i]}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-float absolute -left-10 -bottom-28 hidden w-60 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-brand-600 text-white"><Bot className="size-4" /></span>
              <p className="text-sm font-semibold">AI Assistant</p>
              <span className="ml-auto size-2 rounded-full bg-brand-500" />
            </div>
            <p className="mt-3 rounded-xl rounded-tl-sm bg-brand-50 px-3 py-2 text-sm text-slate-700">Order confirmed. Delivery in 2–3 days.</p>
          </div>

          <div className="animate-float absolute right-8 -top-14 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl [animation-delay:1.5s] sm:flex">
            <span className="grid size-9 place-items-center rounded-xl bg-brand-100 text-brand-700"><Rocket className="size-5" /></span>
            <div><p className="text-xs text-slate-500">Deployment</p><p className="text-sm font-bold">v2.0 is live</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
