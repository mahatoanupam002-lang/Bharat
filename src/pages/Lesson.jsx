import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import { useProgress } from "../hooks/useProgress.js";
import { PILLARS, pillarBySlug } from "../data/pillars.js";
import { lessonBySlug } from "../data/lessons.js";

export default function Lesson() {
  const { slug } = useParams();
  const { t } = useLang();
  const { lessons } = useProgress();
  const pillar = pillarBySlug(slug);
  const lesson = lessonBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useDocumentMeta({
    title: pillar ? t(pillar.t, pillar.hi) : undefined,
    description: pillar ? pillar.d : undefined,
  });

  if (!pillar || !lesson) return <Navigate to="/learn" replace />;

  const idx = PILLARS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PILLARS[idx - 1] : null;
  const next = idx < PILLARS.length - 1 ? PILLARS[idx + 1] : null;
  const done = lessons.has(slug);

  return (
    <article style={S.lessonWrap}>
      <Link to="/learn" style={S.back}>← {t("All lessons", "सभी पाठ")}</Link>

      <div style={S.lessonK}>{pillar.k}</div>
      <div style={S.lessonTag}>{pillar.tag}</div>
      <h1 style={S.lessonTitle}>{t(pillar.t, pillar.hi)}</h1>
      <div style={S.lessonHi}>{t(pillar.hi, pillar.t)}</div>

      <p style={S.lessonIntro}>{t(lesson.intro.en, lesson.intro.hi)}</p>

      {lesson.sections.map((sec, i) => (
        <section key={i} style={S.lessonSec}>
          <h2 style={S.lessonH}>{t(sec.h.en, sec.h.hi)}</h2>
          {sec.body.map((p, j) => (
            <p key={j} style={S.lessonP}>{t(p.en, p.hi)}</p>
          ))}
        </section>
      ))}

      <div style={S.callout}>
        <div style={S.calloutLabel}>{t("Key idea", "मुख्य विचार")}</div>
        <div style={S.calloutText}>{t(lesson.callout.en, lesson.callout.hi)}</div>
      </div>

      <div style={S.doBox}>
        <div style={S.doLabel}>{t("Try this", "यह करें")}</div>
        <div style={S.calloutText}>{t(lesson.doThis.en, lesson.doThis.hi)}</div>
      </div>

      <button
        style={{ ...S.markBtn, ...(done ? S.markDone : {}) }}
        onClick={() => lessons.toggle(slug)}
        aria-pressed={done}
      >
        {done ? `✓ ${t("Completed", "पूर्ण हुआ")}` : t("Mark as complete", "पूर्ण के रूप में चिह्नित करें")}
      </button>

      <nav style={S.lessonNav} aria-label={t("Lesson navigation", "पाठ नेविगेशन")}>
        <span>
          {prev && (
            <Link to={`/learn/${prev.slug}`} style={S.lessonNavLink}>
              <span style={S.lessonNavMuted}>← {t("Previous", "पिछला")}</span>
              {t(prev.t, prev.hi)}
            </Link>
          )}
        </span>
        <span style={{ textAlign: "right" }}>
          {next ? (
            <Link to={`/learn/${next.slug}`} style={S.lessonNavLink}>
              <span style={S.lessonNavMuted}>{t("Next", "अगला")} →</span>
              {t(next.t, next.hi)}
            </Link>
          ) : (
            <Link to="/quiz" style={S.lessonNavLink}>
              <span style={S.lessonNavMuted}>{t("Finish", "समाप्त")} →</span>
              {t("Test yourself", "स्वयं को परखें")}
            </Link>
          )}
        </span>
      </nav>
    </article>
  );
}
