import React from "react";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import SectionHead from "../components/SectionHead.jsx";
import { DUTIES } from "../data/duties.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

function DutyRow({ d, i }) {
  const { t } = useLang();
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal" style={{ ...S.dutyRow, transitionDelay: `${i * 40}ms` }}>
      <span style={S.dutyId}>51A({d.id})</span>
      <span style={S.dutyText}>{t(d.en, d.hi)}</span>
    </div>
  );
}

export default function Duties() {
  const { t } = useLang();
  useDocumentMeta({
    title: t("Fundamental Duties", "मौलिक कर्तव्य"),
    description: t(
      "All eleven Fundamental Duties of an Indian citizen under Article 51A of the Constitution.",
      "भारत के संविधान के अनुच्छेद 51A के तहत भारतीय नागरिक के सभी ग्यारह मौलिक कर्तव्य।"
    ),
  });
  return (
    <section style={S.section}>
      <SectionHead n="II" k={t("Your Fundamental Duties", "आपके मौलिक कर्तव्य")} s={t("Article 51A · Constitution of India", "अनुच्छेद 51A · भारत का संविधान")} />
      <p style={S.dutyIntro}>
        {t(
          "Rights are talked about loudly. Duties, rarely. The Constitution lists eleven Fundamental Duties for every citizen — the quiet other half of being free.",
          "अधिकारों की बात ज़ोर से होती है, कर्तव्यों की कम। संविधान हर नागरिक के लिए ग्यारह मौलिक कर्तव्य गिनाता है — स्वतंत्र होने का शांत दूसरा पहलू।"
        )}
      </p>
      <div style={S.dutyList}>
        {DUTIES.map((d, i) => <DutyRow key={d.id} d={d} i={i} />)}
      </div>
    </section>
  );
}
