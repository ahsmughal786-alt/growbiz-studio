import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import StudioPage from "./studio/StudioPage.jsx";
import StorePage from "./store/StorePage.jsx";
import { BaseContext } from "./components/base.js";
export { site, faqs, projects, testimonials, photography } from "./data/site.js";
export { studio } from "./data/studio.js";
export { store } from "./data/store.js";

export function render(page = "home") {
  return renderToString(
    <StrictMode>
      <BaseContext.Provider value={page === "home" ? "" : "../"}>
        {page === "studio" ? <StudioPage /> : page === "store" ? <StorePage /> : <App />}
      </BaseContext.Provider>
    </StrictMode>
  );
}
