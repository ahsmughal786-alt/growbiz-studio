import { ArrowLeft, Bell, Camera, Construction, ShoppingBag } from "lucide-react";
import Logo from "../components/Logo.jsx";
import EmailMenu from "../components/EmailMenu.jsx";
import { useBase, homeHref, studioHref } from "../components/base.js";
import { site } from "../data/site.js";
import { store } from "../data/store.js";

export default function StorePage() {
  const base = useBase();
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-[420px] rounded-full bg-amber-100/60 blur-3xl" aria-hidden="true" />

      <header className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href={homeHref(base)} aria-label={`${site.name} home`}><Logo /></a>
        <a href={homeHref(base)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-700">
          <ArrowLeft className="size-4" /> Back to main site
        </a>
      </header>

      <main className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <span className="mx-auto grid size-20 place-items-center rounded-3xl bg-white text-brand-600 shadow-xl shadow-brand-900/10 ring-1 ring-brand-100">
            <ShoppingBag className="size-9" strokeWidth={1.75} />
          </span>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-800 ring-1 ring-amber-200">
            <Construction className="size-4" /> {store.badge}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            {store.title[0]} <span className="block text-brand-700">{store.title[1]}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{store.text}</p>

          <div className="mx-auto mt-10 max-w-sm" role="progressbar" aria-label="Store is being built" aria-valuetext="In progress">
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="animate-building h-full w-1/3 rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Building something good</p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <EmailMenu subject={store.notifySubject} menuPosition="bottom-center" wrapperClassName="relative inline-flex justify-center"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700">
              <Bell className="size-4" /> Notify me when it opens
            </EmailMenu>
            <a href={studioHref(base)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700">
              <Camera className="size-4" /> Visit the Photography Studio
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">Questions in the meantime? Email <strong className="text-ink">{site.contact.email}</strong></p>
        </div>
      </main>

      <footer className="relative border-t border-slate-100 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </div>
  );
}
