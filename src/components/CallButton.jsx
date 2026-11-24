import { Phone } from "lucide-react";
import { site } from "../data/site.js";
import { newTabProps } from "./base.js";

// "Call to Discuss": dials site.contact.phone. Until a number is added it opens fallbackHref instead.
// newTab: open the fallback page in a new tab (a phone number always opens the dialer).
export default function CallButton({ className = "", fallbackHref = "#contact", newTab = false, children = "Call to Discuss" }) {
  const phone = site.contact.phone;
  const href = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : fallbackHref;
  const extra = !phone && newTab ? newTabProps : {};
  return (
    <a href={href} {...extra} className={className} title={phone || "Contact us to arrange a call"}>
      <Phone className="size-4" /> {children}
    </a>
  );
}
