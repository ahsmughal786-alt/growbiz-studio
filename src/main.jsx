import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StudioPage from "./studio/StudioPage.jsx";
import StorePage from "./store/StorePage.jsx";
import { BaseContext } from "./components/base.js";
import { site } from "./data/site.js";
import { studio } from "./data/studio.js";
import { store } from "./data/store.js";

const root = document.getElementById("root");
const page = root.dataset.page || "home";
const app = (
  <StrictMode>
    <BaseContext.Provider value={page === "home" ? "" : "../"}>
      {page === "studio" ? <StudioPage /> : page === "store" ? <StorePage /> : <App />}
    </BaseContext.Provider>
  </StrictMode>
);

if (root.firstElementChild) {
  hydrateRoot(root, app); // pre-rendered build
} else {
  document.title = page === "studio" ? studio.seo.title : page === "store" ? store.seo.title : site.seo.title; // dev mode
  createRoot(root).render(app);
}
