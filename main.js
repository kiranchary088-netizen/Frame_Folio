/**
 * FrameFolio · ClickClash Contest
 * Entry point
 * -------------------------------------------------
 * Pure HTML + CSS + JavaScript (ES modules)
 * No backend required – everything lives in localStorage.
 *
 * Architecture (for evaluators):
 *   config.js  → constants & settings
 *   helpers.js → pure utilities
 *   art.js     → procedural SVG + color palette (innovation)
 *   store.js   → DataStore class (data layer)
 *   auth.js    → authentication (hashed password)
 *   voting.js  → voting rules (one vote per category)
 *   ui.js      → all rendering & DOM
 *   main.js    → bootstrap
 */

import { THEME_KEY } from "./config.js";
import { jget, jset } from "./helpers.js";
import { store } from "./store.js";
import { render } from "./ui.js";

// Theme
document.documentElement.dataset.theme = jget(THEME_KEY, "dark");
document.getElementById("theme").onclick = () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  jset(THEME_KEY, t);
};

// Safety: if the stored member was deleted, clear session
if (store.session && store.session.memberId && !store.getMember(store.session.memberId)) {
  store.clearSession();
}

// First paint
render();
