// After `vite build`, emit a static HTML file per route with the correct
// <title>, description, canonical and Open Graph tags baked in. This gives
// search engines and link-preview bots real metadata without full SSR.
// The SPA still hydrates and takes over on load.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";
import { PILLARS } from "../src/data/pillars.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, "../dist");
const SITE = "SOCH · सोच";
const ORIGIN = "https://soch.example";
const BASE_DESC =
  "Patriotism built on reason, grounded in the Constitution of India. Scientific temper, media literacy and constitutional duties for every student.";

const routes = [
  { path: "/", title: null, desc: BASE_DESC },
  { path: "/learn", title: "Learn", desc: "Six lessons in clear thinking, media literacy, the Constitution, unity, civic action and the stories of rational patriots." },
  { path: "/quiz", title: "Quiz", desc: "Train the rational reflex: a quiz on misinformation, logic, scientific temper and the Constitution of India." },
  { path: "/duties", title: "Fundamental Duties", desc: "All eleven Fundamental Duties of an Indian citizen under Article 51A of the Constitution." },
  { path: "/pledge", title: "The Pledge", desc: "Question before you believe. Verify before you forward. Take the SOCH pledge." },
  ...PILLARS.map((p) => ({ path: `/learn/${p.slug}`, title: p.t, desc: p.d })),
];

const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function render(route) {
  const fullTitle = route.title ? `${route.title} — ${SITE}` : `${SITE} — Make one student think`;
  const url = ORIGIN + (route.path === "/" ? "/" : route.path);
  const desc = esc(route.desc);
  const ti = esc(fullTitle);

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${ti}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${ti}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${ti}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`);
}

let count = 0;
for (const route of routes) {
  const html = render(route);
  if (route.path === "/") {
    writeFileSync(join(dist, "index.html"), html);
  } else {
    const dir = join(dist, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }
  count++;
}
console.log(`Prerendered ${count} routes.`);
