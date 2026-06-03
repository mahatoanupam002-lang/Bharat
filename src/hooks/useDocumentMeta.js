import { useEffect } from "react";

const SITE = "SOCH · सोच";
const BASE_DESC =
  "Patriotism built on reason, grounded in the Constitution of India. Scientific temper, media literacy and constitutional duties for every student.";

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key] = selector.match(/\[(?:name|property)="(.+)"\]/) || [];
    if (selector.includes("property=")) el.setAttribute("property", key);
    else el.setAttribute("name", key);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

// Set the document <title> and key meta/OG tags per route.
// Note: full crawler support for OG needs SSR/prerender; this keeps the
// in-page metadata correct and is read by many link-preview bots.
export function useDocumentMeta({ title, description } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE}` : `${SITE} — Make one student think`;
    const desc = description || BASE_DESC;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", desc);
  }, [title, description]);
}
