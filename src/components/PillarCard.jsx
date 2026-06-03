import React, { useState } from "react";
import { Link } from "react-router-dom";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useProgress } from "../hooks/useProgress.js";

export default function PillarCard({ p, i }) {
  const { t } = useLang();
  const { lessons } = useProgress();
  const [h, setH] = useState(false);
  const done = lessons.has(p.slug);

  return (
    <Link
      to={`/learn/${p.slug}`}
      className="reveal in"
      style={{ ...S.card, ...(h ? S.cardH : {}), transitionDelay: `${i * 40}ms` }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onFocus={() => setH(true)}
      onBlur={() => setH(false)}
    >
      <div style={S.cardK}>
        <span>{p.k}</span>
        {done && <span style={S.cardDone}>✓ {t("DONE", "पूर्ण")}</span>}
      </div>
      <div style={S.cardTag}>{p.tag}</div>
      <h3 style={S.cardT}>{t(p.t, p.hi)}</h3>
      <p style={S.cardD}>{p.d}</p>
      <div style={S.cardArrow}>{t("Open lesson →", "पाठ खोलें →")}</div>
    </Link>
  );
}
