# SOCH · सोच

> "If I can make one student with a rational mentality, full of curiosity and
> patriotism, who thinks above caste, religion and society — that is the best
> I can serve my nation."

An educational platform grounded in the **Constitution of India** — not
opinion. Constructive patriotism, scientific temper and inclusion, built for
students. Fully bilingual (English / हिंदी), with progress that persists.

## What's inside

- **Six lessons** (`/learn`) — clear thinking, spotting fakes, the Constitution,
  unity in diversity, civic action, and the stories of rational patriots. Each
  is a full bilingual lesson with a key idea and a "try this" action, and you
  can mark it complete.
- **Spot the Fake quiz** (`/quiz`) — a topic-tagged question bank on
  misinformation, logic, scientific temper and the Constitution. Your best
  score is saved.
- **All eleven Fundamental Duties** (`/duties`) — Article 51A in full.
- **The Pledge** (`/pledge`) — patriotism expressed as action.

Built on Article 51A of the Constitution of India. Independent, secular,
non-partisan. We critique claims and ideas — never communities or faiths.

## Features

- **Bilingual** — instant EN / हिं toggle, remembered across visits, with
  `<html lang>` kept in sync.
- **Progress that persists** — completed lessons, quiz best score and the
  pledge are saved to `localStorage`.
- **SEO** — per-route titles and meta, Open Graph / Twitter tags, JSON-LD,
  `robots.txt` and `sitemap.xml`.
- **Accessible** — skip link, focus-visible rings, ARIA states, semantic
  landmarks, and full `prefers-reduced-motion` support.
- **Responsive** — mobile menu and fluid type.

## Tech

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [React Router 6](https://reactrouter.com/) for client-side routing

## Project structure

```
src/
  main.jsx              # providers: Router + LangProvider
  App.jsx               # layout + routes
  theme.js              # design tokens + shared styles
  context/LangContext   # bilingual state (persisted)
  hooks/                # useLocalStorage, useProgress, useScrollReveal, useDocumentMeta
  data/                 # pillars, duties, quiz bank, lesson content
  components/           # Nav, Foot, Marquee, PillarCard, ProgressStrip, …
  pages/                # Home, Learn, Lesson, Quiz, Duties, Pledge, NotFound
public/                 # robots.txt, sitemap.xml, _redirects
```

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Deploy targets are pre-wired: `vercel.json` (Vercel) and `public/_redirects`
(Netlify) route all paths to the SPA so deep links survive a refresh. Update
the domain in `index.html`, `robots.txt` and `sitemap.xml` before going live.

सत्यमेव जयते · Truth Alone Triumphs
