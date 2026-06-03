import React from "react";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import { useProgress } from "../hooks/useProgress.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Pledge() {
  const { t } = useLang();
  const { pledged, setPledged } = useProgress();
  useDocumentMeta({
    title: t("The Pledge", "संकल्प"),
    description: t(
      "Question before you believe. Verify before you forward. Take the SOCH pledge.",
      "विश्वास से पहले सवाल। आगे भेजने से पहले जाँच। SOCH संकल्प लें।"
    ),
  });
  return (
    <section style={S.section}>
      <SectionHead n="IV" k={t("The Pledge", "संकल्प")} s={t("Patriotism, expressed as action", "देशभक्ति, कर्म के रूप में")} />
      <div style={S.pledgeBox}>
        <p style={S.pledgeText}>
          {t(
            "I will question before I believe. I will verify before I forward. I will see a fellow Indian before I see their caste or faith. I will love my country enough to help it grow.",
            "मैं विश्वास करने से पहले सवाल करूँगा। आगे भेजने से पहले जाँचूँगा। जाति या धर्म से पहले एक भारतीय देखूँगा। मैं अपने देश से इतना प्यार करूँगा कि उसे बेहतर बनाऊँ।"
          )}
        </p>
        <button
          style={{ ...S.pledgeBtn, ...(pledged ? S.pledgeOn : {}) }}
          onClick={() => setPledged((p) => !p)}
          aria-pressed={pledged}
        >
          {pledged ? t("✓ I have taken the pledge", "✓ मैंने संकल्प लिया") : t("Take the pledge", "संकल्प लें")}
        </button>
        {pledged && <p style={S.pledgeNote}>{t("That's how one student begins. 🇮🇳", "एक छात्र की शुरुआत ऐसे होती है। 🇮🇳")}</p>}
      </div>
    </section>
  );
}
