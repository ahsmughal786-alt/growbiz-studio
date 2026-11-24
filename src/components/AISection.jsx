import { ArrowRight, Bot, User } from "lucide-react";
import { aiSection } from "../data/site.js";
import { SectionHeader } from "./ui.jsx";
import Icon from "./Icon.jsx";

export default function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 size-[500px] rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[400px] rounded-full bg-brand-400/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeader center={false} dark eyebrow="AI agents & automation" title={aiSection.title} text={aiSection.text} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aiSection.useCases.map((u) => (
              <div key={u.title} className="reveal rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/[0.08]">
                <Icon name={u.icon} className="size-6 text-brand-300" />
                <h3 className="mt-4 font-bold text-white">{u.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-100/70">{u.text}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="reveal mt-10 inline-flex items-center gap-2 rounded-full bg-brand-400 px-7 py-3.5 font-semibold text-brand-950 transition hover:-translate-y-0.5 hover:bg-brand-300">
            Discuss an AI project <ArrowRight className="size-5" />
          </a>
        </div>

        {/* Chat mock */}
        <div className="reveal mx-auto w-full max-w-md" aria-hidden="true">
          <div className="rounded-3xl border border-white/10 bg-white p-5 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <span className="animate-pulse-ring grid size-10 place-items-center rounded-full bg-brand-600 text-white"><Bot className="size-5" /></span>
              <div><p className="font-bold text-ink">Store Assistant</p><p className="text-xs text-brand-600">Online · replies instantly</p></div>
            </div>
            <div className="space-y-3 py-5 text-sm">
              <Msg me>Do you have this in size 9? Need it by Friday.</Msg>
              <Msg>Yes, size 9 is in stock. Order today and it arrives Thursday. Shall I reserve one for you?</Msg>
              <Msg me>Yes please, ship it.</Msg>
              <Msg>Done! Order #2481 is confirmed. Tracking is on its way to your email.</Msg>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 text-sm text-slate-400">Type a message…</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Msg({ me, children }) {
  return (
    <div className={`flex items-end gap-2 ${me ? "justify-end" : ""}`}>
      {!me && <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700"><Bot className="size-3.5" /></span>}
      <p className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${me ? "rounded-br-sm bg-brand-600 text-white" : "rounded-bl-sm bg-slate-100 text-slate-700"}`}>{children}</p>
      {me && <span className="grid size-6 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-500"><User className="size-3.5" /></span>}
    </div>
  );
}
