import React from "react";
import { Link } from "react-router-dom";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import Marquee from "../components/Marquee.jsx";
import SectionHead from "../components/SectionHead.jsx";
import PillarCard from "../components/PillarCard.jsx";
import ProgressStrip from "../components/ProgressStrip.jsx";
import { PILLARS } from "../data/pillars.js";
import { FEATURED_DUTIES } from "../data/duties.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

function Hero() {
  const { t } = useLang();
  return (
    <header style={S.hero}>
      <div className="reveal" style={S.eyebrow}>{t("AN EDUCATIONAL PLATFORM", "एक शैक्षिक मंच")}</div>
      <h1 className="reveal d1" style={S.h1}>
        {t("Make one student", "एक छात्र बनाओ")}<br />
        <span style={S.h1Amber}>{t("think.", "जो सोचे।")}</span>
      </h1>
      <p className="reveal d2" style={S.heroQuote}>
        {t(
          "“If I can make one student with a rational mentality, full of curiosity and patriotism, who thinks above caste, religion and society — that is the best I can serve my nation.”",
          "“अगर मैं एक छात्र को तर्कशील सोच, जिज्ञासा और देशभक्ति से भर सकूँ — जो जाति, धर्म और समाज से ऊपर सोचे — तो यही मेरी सबसे बड़ी देशसेवा है।”"
        )}
      </p>
      <p className="reveal d3" style={S.heroSub}>
        {t(
          "Patriotism built on reason, not noise. Grounded in the Constitution of India — not opinion.",
          "तर्क पर आधारित देशभक्ति, शोर पर नहीं। भारत के संविधान पर आधारित — किसी की राय पर नहीं।"
        )}
      </p>
      <div className="reveal d4" style={S.ctaRow}>
        <Link to="/learn" style={S.cta}>{t("Start learning →", "सीखना शुरू करें →")}</Link>
        <Link to="/quiz" style={S.ctaGhost}>{t("Take the quiz", "प्रश्नोत्तरी दें")}</Link>
      </div>
      <div className="reveal d4" style={S.flag} aria-hidden="true">
        <span style={{ ...S.flagBar, background: "#FF9933" }} />
        <span style={{ ...S.flagBar, background: "#fff" }} />
        <span style={{ ...S.flagBar, background: "#138808" }} />
      </div>
    </header>
  );
}

function DutiesPreview() {
  const { t } = useLang();
  return (
    <section style={{ ...S.section, background: "#0d0b08" }}>
      <SectionHead n="II" k={t("Your Fundamental Duties", "आपके मौलिक कर्तव्य")} s={t("Article 51A · Constitution of India", "अनुच्छेद 51A · भारत का संविधान")} />
      <p style={S.dutyIntro}>
        {t(
          "Rights are talked about loudly. Duties, rarely. The Constitution lists eleven for every citizen. Here are five that turn patriotism into action.",
          "अधिकारों की बात ज़ोर से होती है, कर्तव्यों की कम। संविधान हर नागरिक के लिए ग्यारह कर्तव्य बताता है। यहाँ पाँच हैं जो देशभक्ति को कर्म बनाते हैं।"
        )}
      </p>
      <div style={S.dutyList}>
        {FEATURED_DUTIES.map((d, i) => <DutyRow key={d.id} d={d} i={i} />)}
      </div>
      <Link to="/duties" style={{ ...S.navLink, ...S.navLinkOn, display: "inline-block", marginTop: 24 }}>
        {t("See all eleven duties →", "सभी ग्यारह कर्तव्य देखें →")}
      </Link>
    </section>
  );
}

function DutyRow({ d, i }) {
  const { t } = useLang();
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal" style={{ ...S.dutyRow, transitionDelay: `${i * 60}ms` }}>
      <span style={S.dutyId}>51A({d.id})</span>
      <span style={S.dutyText}>{t(d.en, d.hi)}</span>
    </div>
  );
}

function QuizPreview() {
  const { t } = useLang();
  return (
    <section style={S.section}>
      <SectionHead n="III" k={t("Spot the Fake", "सच पहचानो")} s={t("Train the rational reflex", "तर्कशील सोच का अभ्यास")} />
      <div style={S.quizBox}>
        <p style={{ ...S.lessonP, marginBottom: 22 }}>
          {t(
            "A short, friendly quiz on misinformation, logic and the Constitution. Your best score is saved so you can beat it.",
            "भ्रामक सूचना, तर्क और संविधान पर एक छोटी, सहज प्रश्नोत्तरी। आपका सर्वश्रेष्ठ स्कोर सहेजा जाता है ताकि आप उसे बेहतर कर सकें।"
          )}
        </p>
        <Link to="/quiz" style={S.cta}>{t("Start the quiz →", "प्रश्नोत्तरी शुरू करें →")}</Link>
      </div>
    </section>
  );
}

function PledgePreview() {
  const { t } = useLang();
  return (
    <section style={{ ...S.section, background: "#0d0b08" }}>
      <SectionHead n="IV" k={t("The Pledge", "संकल्प")} s={t("Patriotism, expressed as action", "देशभक्ति, कर्म के रूप में")} />
      <div style={S.pledgeBox}>
        <p style={S.pledgeText}>
          {t(
            "I will question before I believe. I will verify before I forward. I will see a fellow Indian before I see their caste or faith. I will love my country enough to help it grow.",
            "मैं विश्वास करने से पहले सवाल करूँगा। आगे भेजने से पहले जाँचूँगा। जाति या धर्म से पहले एक भारतीय देखूँगा। मैं अपने देश से इतना प्यार करूँगा कि उसे बेहतर बनाऊँ।"
          )}
        </p>
        <Link to="/pledge" style={S.cta}>{t("Take the pledge →", "संकल्प लें →")}</Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  useDocumentMeta({});
  return (
    <>
      <Hero />
      <Marquee />
      <section id="pillars" style={S.section}>
        <SectionHead n="I" k={t("The Six Pillars", "छह स्तंभ")} s={t("What you'll learn", "आप क्या सीखेंगे")} />
        <div style={S.pillarGrid}>
          {PILLARS.map((p, i) => <PillarCard key={p.k} p={p} i={i} />)}
        </div>
      </section>
      <ProgressStrip />
      <DutiesPreview />
      <QuizPreview />
      <PledgePreview />
    </>
  );
}
