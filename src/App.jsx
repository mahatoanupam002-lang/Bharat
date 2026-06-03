import React from "react";
import { Routes, Route } from "react-router-dom";
import { S } from "./theme.js";
import Style from "./components/Style.jsx";
import Grain from "./components/Grain.jsx";
import Nav from "./components/Nav.jsx";
import Foot from "./components/Foot.jsx";
import { useLang } from "./context/LangContext.jsx";
import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import Lesson from "./pages/Lesson.jsx";
import Quiz from "./pages/Quiz.jsx";
import Duties from "./pages/Duties.jsx";
import Pledge from "./pages/Pledge.jsx";
import NotFound from "./pages/NotFound.jsx";

// ── SOCH · सोच ─────────────────────────────────────────────
// "If I can make one student with a rational mentality, full of
//  curiosity and patriotism, who thinks above caste, religion and
//  society — that's the best I can serve my nation."
// An educational platform grounded in the Constitution of India,
// not opinion. Constructive patriotism. Scientific temper. Inclusion.
// ───────────────────────────────────────────────────────────

function SkipLink() {
  const { t } = useLang();
  const [f, setF] = React.useState(false);
  return (
    <a
      href="#main"
      style={{ ...S.skip, ...(f ? S.skipFocus : {}) }}
      onFocus={() => setF(true)}
      onBlur={() => setF(false)}
    >
      {t("Skip to content", "सामग्री पर जाएँ")}
    </a>
  );
}

export default function App() {
  return (
    <div style={S.root}>
      <Style />
      <Grain />
      <SkipLink />
      <Nav />
      <main id="main" style={S.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:slug" element={<Lesson />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/duties" element={<Duties />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Foot />
    </div>
  );
}
