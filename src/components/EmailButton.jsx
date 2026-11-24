import { Mail } from "lucide-react";
import { site } from "../data/site.js";
import EmailMenu from "./EmailMenu.jsx";

export default function EmailButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      <EmailMenu menuPosition="top-right" ariaLabel={`Email us at ${site.contact.email}`} title={site.contact.email}
        className="group relative flex h-14 items-center gap-2 rounded-full bg-brand-600 px-4 text-white shadow-xl shadow-brand-900/25 transition hover:bg-brand-700">
        <span className="animate-pulse-ring absolute inset-0 rounded-full" aria-hidden="true" />
        <Mail className="size-6 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">Email us</span>
      </EmailMenu>
    </div>
  );
}
