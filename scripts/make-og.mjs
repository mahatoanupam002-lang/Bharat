// Generates the social share image (public/og.png) from an SVG.
// Run via `npm run og`. Requires sharp (devDependency).
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og.png");

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="22%" cy="32%" r="70%">
      <stop offset="0%" stop-color="#1a140c"/>
      <stop offset="100%" stop-color="#0a0907"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- tricolor accent -->
  <rect x="80" y="120" width="54" height="8" rx="4" fill="#FF9933"/>
  <rect x="142" y="120" width="54" height="8" rx="4" fill="#f3ead9"/>
  <rect x="204" y="120" width="54" height="8" rx="4" fill="#138808"/>

  <!-- brand -->
  <text x="80" y="210" font-family="Noto Sans Devanagari" font-weight="700" font-size="64" fill="#FF9933">सोच</text>
  <text x="240" y="210" font-family="Fraunces" font-weight="900" font-size="52" letter-spacing="6" fill="#f3ead9">SOCH</text>

  <!-- headline -->
  <text x="80" y="330" font-family="Fraunces" font-weight="900" font-size="92" fill="#f3ead9">Make one student</text>
  <text x="80" y="430" font-family="Fraunces" font-weight="400" font-style="italic" font-size="92" fill="#FF9933">think.</text>

  <!-- subline -->
  <text x="80" y="510" font-family="Spline Sans" font-weight="400" font-size="30" fill="#9a8f7d">Patriotism built on reason, not noise.</text>
  <text x="80" y="552" font-family="Spline Sans" font-weight="400" font-size="30" fill="#9a8f7d">Grounded in the Constitution of India — not opinion.</text>

  <!-- footer -->
  <text x="80" y="600" font-family="Fraunces" font-weight="400" font-style="italic" font-size="26" fill="#FF9933">सत्यमेव जयते · Truth Alone Triumphs</text>
</svg>`;

mkdirSync(resolve(__dirname, "../public"), { recursive: true });
// keep the source SVG too, useful for editing later
writeFileSync(resolve(__dirname, "../public/og.svg"), svg);

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
