import React, { useState, useEffect, useRef } from "react";

// ── SOCH · सोच ─────────────────────────────────────────────
// "If I can make one student with a rational mentality, full of
//  curiosity and patriotism, who thinks above caste, religion and
//  society — that's the best I can serve my nation."
// An educational platform grounded in the Constitution of India,
// not opinion. Constructive patriotism. Scientific temper. Inclusion.
// ───────────────────────────────────────────────────────────

const DUTIES = [
  { id: "e", en: "Promote harmony and brotherhood beyond religion, language and region", hi: "धर्म, भाषा और क्षेत्र से ऊपर उठकर भाईचारा" },
  { id: "h", en: "Develop scientific temper, humanism and the spirit of inquiry", hi: "वैज्ञानिक दृष्टिकोण और जिज्ञासा का विकास" },
  { id: "c", en: "Uphold the sovereignty, unity and integrity of India", hi: "भारत की एकता और अखंडता की रक्षा" },
  { id: "g", en: "Protect and improve the natural environment", hi: "पर्यावरण की रक्षा और सुधार" },
  { id: "j", en: "Strive towards excellence in every sphere of activity", hi: "हर क्षेत्र में उत्कृष्टता की ओर प्रयास" },
];

const PILLARS = [
  { k: "01", t: "Think Clearly", hi: "स्पष्ट सोचो", d: "The scientific method, logical fallacies, and India's own heritage of reasoning — from the Nyāya school to the argumentative tradition.", tag: "Article 51A(h)" },
  { k: "02", t: "Spot the Fake", hi: "सच पहचानो", d: "Lateral reading, reverse image search, and the habit of verifying before you forward. India shares more than it checks.", tag: "Media literacy" },
  { k: "03", t: "Know Your Constitution", hi: "संविधान जानो", d: "Your rights and your eleven duties. How a law is made. What constitutional morality actually means.", tag: "Part IV-A" },
  { k: "04", t: "Unity in Diversity", hi: "विविधता में एकता", d: "Composite culture as strength, not weakness. The freedom struggle belonged to every community.", tag: "Article 51A(e)" },
  { k: "05", t: "Civic Action", hi: "नागरिक कर्म", d: "Patriotism you can do. Local problems, RTI basics, environmental duty, and projects that change your street.", tag: "National service" },
  { k: "06", t: "Rational Patriots", hi: "तर्कशील देशभक्त", d: "Ambedkar, Bhagat Singh, Raman, Kalam, Savitribai Phule — Indians who united reason, courage and service.", tag: "Stories" },
];

const QUIZ = [
  {
    q: "A message says: 'Scientists confirm this fruit cures cancer. Forward to 10 people!' What does a rational patriot do first?",
    opts: ["Forward it — sharing health info helps people", "Check who 'scientists' are and search the claim elsewhere", "Delete it and ignore", "Believe it because it sounds caring"],
    correct: 1,
    why: "This is lateral reading: leave the message and ask what the rest of the web says. 'Scientists confirm' with no name and a 'forward to 10' push are classic manipulation signals.",
  },
  {
    q: "Which is constructive patriotism, not blind patriotism?",
    opts: ["My country is always right", "Anyone who criticises India is anti-national", "I love my country enough to want it to live up to its ideals", "We must never question the government"],
    correct: 2,
    why: "Constructive patriotism (Schatz & Staub, 1999) supports questioning and reform that improves the nation. Blind patriotism demands uncritical loyalty.",
  },
  {
    q: "Article 51A(h) makes which a fundamental DUTY of every Indian citizen?",
    opts: ["To win at sports", "To develop scientific temper and the spirit of inquiry", "To memorise the Constitution", "To distrust all religion"],
    correct: 1,
    why: "India is the only country to make developing scientific temper a constitutional duty. It means seeking evidence and changing your mind when facts change — not rejecting anyone's faith.",
  },
];

export default function App() {
  const [lang, setLang] = useState("en");
  const [pledge, setPledge] = useState(false);
  const t = (en, hi) => (lang === "en" ? en : hi);

  return (
    <div style={S.root}>
      <Style />
      <Grain />
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} lang={lang} />
      <Marquee />
      <Pillars t={t} />
      <Duties t={t} />
      <Quiz t={t} />
      <Pledge t={t} pledge={pledge} setPledge={setPledge} />
      <Foot t={t} />
    </div>
  );
}

function Nav({ lang, setLang, t }) {
  return (
    <nav style={S.nav}>
      <div style={S.brand}>
        <span style={S.brandMark}>सोच</span>
        <span style={S.brandWord}>SOCH</span>
      </div>
      <div style={S.langWrap}>
        <button onClick={() => setLang("en")} style={{ ...S.lang, ...(lang === "en" ? S.langOn : {}) }}>EN</button>
        <button onClick={() => setLang("hi")} style={{ ...S.lang, ...(lang === "hi" ? S.langOn : {}) }}>हिं</button>
      </div>
    </nav>
  );
}

function Hero({ t, lang }) {
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
      <a href="#pillars" className="reveal d4" style={S.cta}>{t("Begin →", "शुरू करें →")}</a>
      <div className="reveal d4" style={S.flag}>
        <span style={{ ...S.flagBar, background: "#FF9933" }} />
        <span style={{ ...S.flagBar, background: "#fff" }} />
        <span style={{ ...S.flagBar, background: "#138808" }} />
      </div>
    </header>
  );
}

function Marquee() {
  const words = ["जिज्ञासा", "CURIOSITY", "तर्क", "REASON", "संविधान", "DUTY", "एकता", "INQUIRY", "सेवा", "SERVICE"];
  return (
    <div style={S.marquee}>
      <div style={S.marqueeTrack}>
        {[...words, ...words].map((w, i) => (
          <span key={i} style={S.marqueeWord}>{w}<span style={S.dot}>·</span></span>
        ))}
      </div>
    </div>
  );
}

function Pillars({ t }) {
  return (
    <section id="pillars" style={S.section}>
      <SectionHead n="I" k={t("The Six Pillars", "छह स्तंभ")} s={t("What you'll learn", "आप क्या सीखेंगे")} />
      <div style={S.pillarGrid}>
        {PILLARS.map((p, i) => <PillarCard key={p.k} p={p} t={t} i={i} />)}
      </div>
    </section>
  );
}

function PillarCard({ p, t, i }) {
  const [h, setH] = useState(false);
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal" style={{ ...S.card, ...(h ? S.cardH : {}), transitionDelay: `${i * 40}ms` }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={S.cardK}>{p.k}</div>
      <div style={S.cardTag}>{p.tag}</div>
      <h3 style={S.cardT}>{t(p.t, p.hi)}</h3>
      <p style={S.cardD}>{p.d}</p>
    </div>
  );
}

function Duties({ t }) {
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
        {DUTIES.map((d, i) => (
          <DutyRow key={d.id} d={d} i={i} t={t} />
        ))}
      </div>
    </section>
  );
}

function DutyRow({ d, i, t }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal" style={{ ...S.dutyRow, transitionDelay: `${i * 60}ms` }}>
      <span style={S.dutyId}>51A({d.id})</span>
      <span style={S.dutyText}>{t(d.en, d.hi)}</span>
    </div>
  );
}

function Quiz({ t }) {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = QUIZ[i];

  const choose = (idx) => {
    if (pick !== null) return;
    setPick(idx);
    if (idx === q.correct) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= QUIZ.length) { setDone(true); return; }
    setI(i + 1); setPick(null);
  };
  const reset = () => { setI(0); setPick(null); setScore(0); setDone(false); };

  return (
    <section style={S.section}>
      <SectionHead n="III" k={t("Spot the Fake", "सच पहचानो")} s={t("Train the rational reflex", "तर्कशील सोच का अभ्यास")} />
      <div style={S.quizBox}>
        {!done ? (
          <>
            <div style={S.quizProg}>{t("Question", "प्रश्न")} {i + 1} / {QUIZ.length}</div>
            <h3 style={S.quizQ}>{q.q}</h3>
            <div style={S.quizOpts}>
              {q.opts.map((o, idx) => {
                let st = { ...S.opt };
                if (pick !== null) {
                  if (idx === q.correct) st = { ...st, ...S.optRight };
                  else if (idx === pick) st = { ...st, ...S.optWrong };
                  else st = { ...st, opacity: 0.45 };
                }
                return <button key={idx} style={st} onClick={() => choose(idx)}>{o}</button>;
              })}
            </div>
            {pick !== null && (
              <div style={S.why}>
                <strong style={{ color: pick === q.correct ? "#7bb86f" : "#e08a5a" }}>
                  {pick === q.correct ? t("Right.", "सही।") : t("Not quite.", "बिलकुल नहीं।")}
                </strong>{" "}{q.why}
                <button style={S.next} onClick={next}>{i + 1 >= QUIZ.length ? t("See result →", "परिणाम देखें →") : t("Next →", "अगला →")}</button>
              </div>
            )}
          </>
        ) : (
          <div style={S.result}>
            <div style={S.resultBig}>{score} / {QUIZ.length}</div>
            <p style={S.resultMsg}>
              {score === QUIZ.length
                ? t("A rational mind in action. Now go make one more student think.", "तर्कशील दिमाग। अब एक और छात्र को सोचना सिखाओ।")
                : t("Every question you missed is a habit worth building. Try again.", "हर गलती एक आदत सुधारने का मौका है। फिर कोशिश करो।")}
            </p>
            <button style={S.next} onClick={reset}>{t("Try again ↺", "फिर से ↺")}</button>
          </div>
        )}
      </div>
    </section>
  );
}

function Pledge({ t, pledge, setPledge }) {
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
        <button style={{ ...S.pledgeBtn, ...(pledge ? S.pledgeOn : {}) }} onClick={() => setPledge(!pledge)}>
          {pledge ? t("✓ I have taken the pledge", "✓ मैंने संकल्प लिया") : t("Take the pledge", "संकल्प लें")}
        </button>
        {pledge && <p style={S.pledgeNote}>{t("That's how one student begins. 🇮🇳", "एक छात्र की शुरुआत ऐसे होती है। 🇮🇳")}</p>}
      </div>
    </section>
  );
}

function SectionHead({ n, k, s }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal" style={S.secHead}>
      <span style={S.secNum}>{n}</span>
      <div>
        <h2 style={S.secK}>{k}</h2>
        <div style={S.secS}>{s}</div>
      </div>
    </div>
  );
}

function Foot({ t }) {
  return (
    <footer style={S.foot}>
      <div style={S.brand}>
        <span style={S.brandMark}>सोच</span>
        <span style={S.brandWord}>SOCH</span>
      </div>
      <p style={S.footText}>
        {t(
          "Built on Article 51A of the Constitution of India. Independent, secular, non-partisan. We critique claims and ideas — never communities or faiths.",
          "भारत के संविधान के अनुच्छेद 51A पर आधारित। स्वतंत्र, धर्मनिरपेक्ष, गैर-राजनीतिक। हम दावों पर सवाल करते हैं — किसी समुदाय या धर्म पर नहीं।"
        )}
      </p>
      <p style={S.footFine}>सत्यमेव जयते · Truth Alone Triumphs</p>
    </footer>
  );
}

// ── scroll reveal hook ──
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Grain() {
  return <div style={S.grain} />;
}

function Style() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,900&family=Spline+Sans:wght@400;500;600&family=Tiro+Devanagari+Hindi&display=swap');
      * { margin:0; padding:0; box-sizing:border-box; }
      html { scroll-behavior:smooth; }
      ::selection { background:#FF9933; color:#0a0907; }
      .reveal { opacity:0; transform:translateY(28px); transition:opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1); }
      .reveal.in, header .reveal { opacity:1; transform:none; }
      header .reveal { animation:rise .9s cubic-bezier(.2,.7,.2,1) backwards; }
      header .d1{animation-delay:.1s}.d2{animation-delay:.25s}.d3{animation-delay:.4s}.d4{animation-delay:.55s}
      @keyframes rise { from{opacity:0;transform:translateY(34px)} to{opacity:1;transform:none} }
      @keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    `}</style>
  );
}

// ── styles ──
const ink = "#0a0907", cream = "#f3ead9", amber = "#FF9933", muted = "#9a8f7d";
const serif = "'Fraunces', Georgia, serif", sans = "'Spline Sans', system-ui, sans-serif", deva = "'Tiro Devanagari Hindi', serif";

const S = {
  root: { background: ink, color: cream, fontFamily: sans, overflowX: "hidden", position: "relative", minHeight: "100vh" },
  grain: { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.05, mixBlendMode: "overlay",
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" },
  nav: { position: "sticky", top: 0, zIndex: 20, display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 22px", background: "rgba(10,9,7,.72)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(243,234,217,.07)" },
  brand: { display: "flex", alignItems: "baseline", gap: 8 },
  brandMark: { fontFamily: deva, fontSize: 22, color: amber },
  brandWord: { fontFamily: serif, fontWeight: 900, fontSize: 17, letterSpacing: 2, color: cream },
  langWrap: { display: "flex", gap: 4, background: "rgba(243,234,217,.06)", borderRadius: 99, padding: 3 },
  lang: { border: "none", background: "transparent", color: muted, fontFamily: sans, fontWeight: 600, fontSize: 13, padding: "5px 12px", borderRadius: 99, cursor: "pointer" },
  langOn: { background: amber, color: ink },

  hero: { position: "relative", zIndex: 2, padding: "60px 22px 40px", maxWidth: 760, margin: "0 auto" },
  eyebrow: { fontSize: 11, letterSpacing: 4, color: amber, fontWeight: 600, marginBottom: 22 },
  h1: { fontFamily: serif, fontWeight: 900, fontSize: "clamp(46px,13vw,86px)", lineHeight: 0.95, letterSpacing: -1.5 },
  h1Amber: { color: amber, fontStyle: "italic", fontWeight: 400 },
  heroQuote: { fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(18px,5vw,24px)", lineHeight: 1.5, margin: "30px 0 0", color: "#e6dcc7" },
  heroSub: { fontSize: 15, lineHeight: 1.6, color: muted, marginTop: 20, maxWidth: 480 },
  cta: { display: "inline-block", marginTop: 34, background: amber, color: ink, fontWeight: 600, fontSize: 16, padding: "14px 30px", borderRadius: 99, textDecoration: "none" },
  flag: { display: "flex", gap: 4, marginTop: 40 },
  flagBar: { height: 4, width: 40, borderRadius: 4 },

  marquee: { borderTop: "1px solid rgba(243,234,217,.08)", borderBottom: "1px solid rgba(243,234,217,.08)", overflow: "hidden", padding: "16px 0", background: "#0d0b08", position: "relative", zIndex: 2 },
  marqueeTrack: { display: "flex", width: "max-content", animation: "scroll 28s linear infinite" },
  marqueeWord: { fontFamily: serif, fontStyle: "italic", fontSize: 24, color: "rgba(243,234,217,.4)", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center" },
  dot: { color: amber, margin: "0 22px", fontStyle: "normal" },

  section: { position: "relative", zIndex: 2, padding: "64px 22px", maxWidth: 820, margin: "0 auto" },
  secHead: { display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 36 },
  secNum: { fontFamily: serif, fontSize: 13, color: amber, fontWeight: 600, paddingTop: 6, borderTop: `2px solid ${amber}` },
  secK: { fontFamily: serif, fontWeight: 900, fontSize: "clamp(28px,7vw,40px)", lineHeight: 1.05, letterSpacing: -0.5 },
  secS: { fontSize: 12, letterSpacing: 2, color: muted, marginTop: 8, textTransform: "uppercase", fontWeight: 500 },

  pillarGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 },
  card: { background: "rgba(243,234,217,.035)", border: "1px solid rgba(243,234,217,.09)", borderRadius: 16, padding: "26px 22px", transition: "all .4s cubic-bezier(.2,.7,.2,1)", cursor: "default" },
  cardH: { background: "rgba(255,153,51,.07)", borderColor: "rgba(255,153,51,.4)", transform: "translateY(-4px)" },
  cardK: { fontFamily: serif, fontSize: 13, color: amber, fontWeight: 600 },
  cardTag: { fontSize: 10, letterSpacing: 1.5, color: muted, textTransform: "uppercase", marginTop: 4 },
  cardT: { fontFamily: serif, fontWeight: 600, fontSize: 23, marginTop: 14, lineHeight: 1.1 },
  cardD: { fontSize: 14, lineHeight: 1.6, color: muted, marginTop: 10 },

  dutyIntro: { fontSize: 15, lineHeight: 1.65, color: "#cfc4b0", marginBottom: 28, maxWidth: 560 },
  dutyList: { display: "flex", flexDirection: "column", gap: 0 },
  dutyRow: { display: "flex", gap: 16, alignItems: "baseline", padding: "18px 0", borderBottom: "1px solid rgba(243,234,217,.08)" },
  dutyId: { fontFamily: serif, fontSize: 13, color: amber, fontWeight: 600, flexShrink: 0, width: 56 },
  dutyText: { fontSize: "clamp(16px,4vw,19px)", lineHeight: 1.4, fontFamily: serif, fontWeight: 400 },

  quizBox: { background: "rgba(243,234,217,.035)", border: "1px solid rgba(243,234,217,.1)", borderRadius: 18, padding: "26px 22px" },
  quizProg: { fontSize: 11, letterSpacing: 2, color: amber, fontWeight: 600, textTransform: "uppercase" },
  quizQ: { fontFamily: serif, fontWeight: 600, fontSize: "clamp(19px,5vw,24px)", lineHeight: 1.3, margin: "14px 0 22px" },
  quizOpts: { display: "flex", flexDirection: "column", gap: 10 },
  opt: { textAlign: "left", background: "rgba(243,234,217,.04)", border: "1px solid rgba(243,234,217,.12)", color: cream, fontFamily: sans, fontSize: 15, lineHeight: 1.4, padding: "15px 17px", borderRadius: 12, cursor: "pointer", transition: "all .2s" },
  optRight: { background: "rgba(123,184,111,.16)", borderColor: "#7bb86f" },
  optWrong: { background: "rgba(224,138,90,.16)", borderColor: "#e08a5a" },
  why: { marginTop: 20, fontSize: 14.5, lineHeight: 1.65, color: "#cfc4b0", borderTop: "1px solid rgba(243,234,217,.1)", paddingTop: 18 },
  next: { display: "block", marginTop: 18, background: amber, color: ink, border: "none", fontFamily: sans, fontWeight: 600, fontSize: 15, padding: "12px 26px", borderRadius: 99, cursor: "pointer" },
  result: { textAlign: "center", padding: "16px 0" },
  resultBig: { fontFamily: serif, fontWeight: 900, fontSize: 64, color: amber, fontStyle: "italic" },
  resultMsg: { fontSize: 16, lineHeight: 1.6, color: "#cfc4b0", maxWidth: 380, margin: "10px auto 0" },

  pledgeBox: { textAlign: "center" },
  pledgeText: { fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(20px,5.5vw,28px)", lineHeight: 1.5, maxWidth: 600, margin: "0 auto 32px", color: "#ece2cd" },
  pledgeBtn: { background: "transparent", border: `1.5px solid ${amber}`, color: amber, fontFamily: sans, fontWeight: 600, fontSize: 16, padding: "15px 34px", borderRadius: 99, cursor: "pointer", transition: "all .3s" },
  pledgeOn: { background: amber, color: ink },
  pledgeNote: { marginTop: 18, fontSize: 15, color: cream, fontFamily: serif, fontStyle: "italic" },

  foot: { position: "relative", zIndex: 2, padding: "50px 22px 60px", maxWidth: 720, margin: "0 auto", textAlign: "center", borderTop: "1px solid rgba(243,234,217,.08)" },
  footText: { fontSize: 13, lineHeight: 1.7, color: muted, marginTop: 20, maxWidth: 520, marginLeft: "auto", marginRight: "auto" },
  footFine: { fontFamily: serif, fontStyle: "italic", fontSize: 15, color: amber, marginTop: 22 },
};
