import React from "react";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { PILLARS } from "../data/pillars.js";
import { useProgress } from "../hooks/useProgress.js";

export default function ProgressStrip() {
  const { t } = useLang();
  const { lessons } = useProgress();
  const total = PILLARS.length;
  const done = lessons.list.filter((id) => PILLARS.some((p) => p.slug === id)).length;
  const pct = Math.round((done / total) * 100);

  return (
    <div style={S.progressStrip}>
      <div style={S.progressInner}>
        <span style={S.progressLabel}>{t("Your progress", "आपकी प्रगति")}</span>
        <div style={S.progressBarWrap} role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={total}
          aria-label={t("Lessons completed", "पूर्ण पाठ")}>
          <div style={{ ...S.progressBarFill, width: `${pct}%` }} />
        </div>
        <span style={S.progressCount}>{done} / {total} {t("lessons", "पाठ")}</span>
      </div>
    </div>
  );
}
