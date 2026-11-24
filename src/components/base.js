import { createContext, useContext } from "react";

// Relative path from the current page to the site root: "" on the homepage, "../" on /studio/.
// Keeps links and images working on any host and in sub-folders.
export const BaseContext = createContext("");
export const useBase = () => useContext(BaseContext);

// Set VITE_INDEX_FILE=index.html only for hosts that don't serve folder URLs (e.g. the Claude preview).
const INDEX_FILE = import.meta.env.VITE_INDEX_FILE || "";
export const homeHref = (base, hash = "") => `${base || "./"}${INDEX_FILE}${hash}`;
export const studioHref = (base, hash = "") => `${base}studio/${INDEX_FILE}${hash}`;
export const storeHref = (base, hash = "") => `${base}store/${INDEX_FILE}${hash}`;
const pageHrefs = { home: homeHref, studio: studioHref, store: storeHref };
// Resolve a nav item: { href } for same-page anchors, or { page: "store" } for another page.
export const resolveHref = (base, item) => (item.page ? pageHrefs[item.page](base, item.hash || "") : item.href);
export const newTabProps = { target: "_blank", rel: "noopener" };
