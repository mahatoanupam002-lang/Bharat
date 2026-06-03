import React from "react";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import SectionHead from "../components/SectionHead.jsx";
import PillarCard from "../components/PillarCard.jsx";
import ProgressStrip from "../components/ProgressStrip.jsx";
import { PILLARS } from "../data/pillars.js";

export default function Learn() {
  const { t } = useLang();
  useDocumentMeta({
    title: t("Learn", "सीखें"),
    description: t(
      "Six lessons in clear thinking, media literacy, the Constitution, unity, civic action and the stories of rational patriots.",
      "स्पष्ट सोच, मीडिया साक्षरता, संविधान, एकता, नागरिक कर्म और तर्कशील देशभक्तों की कहानियों पर छह पाठ।"
    ),
  });
  return (
    <>
      <section style={S.section}>
        <SectionHead n="I" k={t("The Six Pillars", "छह स्तंभ")} s={t("Choose where to begin", "कहाँ से शुरू करें चुनें")} />
        <div style={S.pillarGrid}>
          {PILLARS.map((p, i) => <PillarCard key={p.k} p={p} i={i} />)}
        </div>
      </section>
      <ProgressStrip />
      <div style={{ height: 48 }} />
    </>
  );
}
