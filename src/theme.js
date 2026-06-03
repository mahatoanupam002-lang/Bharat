// ── design tokens ──
export const ink = "#0a0907";
export const panel = "#0d0b08";
export const cream = "#f3ead9";
export const amber = "#FF9933";
export const green = "#138808";
export const muted = "#9a8f7d";

export const serif = "'Fraunces', Georgia, serif";
export const sans = "'Spline Sans', system-ui, sans-serif";
export const deva = "'Tiro Devanagari Hindi', serif";

// ── shared styles ──
export const S = {
  root: { background: ink, color: cream, fontFamily: sans, overflowX: "hidden", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" },
  main: { flex: 1 },
  grain: { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.05, mixBlendMode: "overlay",
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" },

  // skip link (a11y)
  skip: { position: "absolute", left: -9999, top: 8, zIndex: 50, background: amber, color: ink, padding: "10px 16px", borderRadius: 8, fontWeight: 600, textDecoration: "none" },
  skipFocus: { left: 8 },

  nav: { position: "sticky", top: 0, zIndex: 20, display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 22px", background: "rgba(10,9,7,.72)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(243,234,217,.07)" },
  brand: { display: "flex", alignItems: "baseline", gap: 8, textDecoration: "none" },
  brandMark: { fontFamily: deva, fontSize: 22, color: amber },
  brandWord: { fontFamily: serif, fontWeight: 900, fontSize: 17, letterSpacing: 2, color: cream },
  navRight: { display: "flex", alignItems: "center", gap: 14 },
  navLinks: { display: "flex", gap: 18, alignItems: "center" },
  navLink: { color: muted, textDecoration: "none", fontSize: 14, fontWeight: 500, padding: "4px 0" },
  navLinkOn: { color: cream, borderBottom: `2px solid ${amber}` },
  langWrap: { display: "flex", gap: 4, background: "rgba(243,234,217,.06)", borderRadius: 99, padding: 3 },
  lang: { border: "none", background: "transparent", color: muted, fontFamily: sans, fontWeight: 600, fontSize: 13, padding: "5px 12px", borderRadius: 99, cursor: "pointer" },
  langOn: { background: amber, color: ink },
  menuBtn: { display: "none", border: "1px solid rgba(243,234,217,.15)", background: "transparent", color: cream, borderRadius: 10, padding: "6px 10px", cursor: "pointer", fontSize: 18, lineHeight: 1 },
  mobileMenu: { display: "flex", flexDirection: "column", gap: 4, padding: "8px 22px 16px", background: panel, borderBottom: "1px solid rgba(243,234,217,.07)", position: "sticky", top: 65, zIndex: 19 },
  mobileLink: { color: cream, textDecoration: "none", fontSize: 16, padding: "12px 0", borderBottom: "1px solid rgba(243,234,217,.06)" },

  hero: { position: "relative", zIndex: 2, padding: "60px 22px 40px", maxWidth: 760, margin: "0 auto" },
  eyebrow: { fontSize: 11, letterSpacing: 4, color: amber, fontWeight: 600, marginBottom: 22 },
  h1: { fontFamily: serif, fontWeight: 900, fontSize: "clamp(46px,13vw,86px)", lineHeight: 0.95, letterSpacing: -1.5 },
  h1Amber: { color: amber, fontStyle: "italic", fontWeight: 400 },
  heroQuote: { fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(18px,5vw,24px)", lineHeight: 1.5, margin: "30px 0 0", color: "#e6dcc7" },
  heroSub: { fontSize: 15, lineHeight: 1.6, color: muted, marginTop: 20, maxWidth: 480 },
  ctaRow: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 34 },
  cta: { display: "inline-block", background: amber, color: ink, fontWeight: 600, fontSize: 16, padding: "14px 30px", borderRadius: 99, textDecoration: "none", border: "none", cursor: "pointer", fontFamily: sans },
  ctaGhost: { display: "inline-block", background: "transparent", color: cream, fontWeight: 600, fontSize: 16, padding: "14px 30px", borderRadius: 99, textDecoration: "none", border: "1px solid rgba(243,234,217,.2)", cursor: "pointer", fontFamily: sans },
  flag: { display: "flex", gap: 4, marginTop: 40 },
  flagBar: { height: 4, width: 40, borderRadius: 4 },

  marquee: { borderTop: "1px solid rgba(243,234,217,.08)", borderBottom: "1px solid rgba(243,234,217,.08)", overflow: "hidden", padding: "16px 0", background: panel, position: "relative", zIndex: 2 },
  marqueeTrack: { display: "flex", width: "max-content", animation: "scroll 28s linear infinite" },
  marqueeWord: { fontFamily: serif, fontStyle: "italic", fontSize: 24, color: "rgba(243,234,217,.4)", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center" },
  dot: { color: amber, margin: "0 22px", fontStyle: "normal" },

  section: { position: "relative", zIndex: 2, padding: "64px 22px", maxWidth: 820, margin: "0 auto" },
  secHead: { display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 36 },
  secNum: { fontFamily: serif, fontSize: 13, color: amber, fontWeight: 600, paddingTop: 6, borderTop: `2px solid ${amber}` },
  secK: { fontFamily: serif, fontWeight: 900, fontSize: "clamp(28px,7vw,40px)", lineHeight: 1.05, letterSpacing: -0.5 },
  secS: { fontSize: 12, letterSpacing: 2, color: muted, marginTop: 8, textTransform: "uppercase", fontWeight: 500 },

  pillarGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 },
  card: { display: "block", textAlign: "left", width: "100%", textDecoration: "none", color: cream, background: "rgba(243,234,217,.035)", border: "1px solid rgba(243,234,217,.09)", borderRadius: 16, padding: "26px 22px", transition: "all .4s cubic-bezier(.2,.7,.2,1)", cursor: "pointer" },
  cardH: { background: "rgba(255,153,51,.07)", borderColor: "rgba(255,153,51,.4)", transform: "translateY(-4px)" },
  cardK: { fontFamily: serif, fontSize: 13, color: amber, fontWeight: 600, display: "flex", justifyContent: "space-between", alignItems: "center" },
  cardDone: { fontSize: 11, color: green, fontWeight: 600, letterSpacing: 1 },
  cardTag: { fontSize: 10, letterSpacing: 1.5, color: muted, textTransform: "uppercase", marginTop: 4 },
  cardT: { fontFamily: serif, fontWeight: 600, fontSize: 23, marginTop: 14, lineHeight: 1.1 },
  cardD: { fontSize: 14, lineHeight: 1.6, color: muted, marginTop: 10 },
  cardArrow: { marginTop: 16, fontSize: 13, color: amber, fontWeight: 600 },

  dutyIntro: { fontSize: 15, lineHeight: 1.65, color: "#cfc4b0", marginBottom: 28, maxWidth: 560 },
  dutyList: { display: "flex", flexDirection: "column", gap: 0 },
  dutyRow: { display: "flex", gap: 16, alignItems: "baseline", padding: "18px 0", borderBottom: "1px solid rgba(243,234,217,.08)" },
  dutyId: { fontFamily: serif, fontSize: 13, color: amber, fontWeight: 600, flexShrink: 0, width: 56 },
  dutyText: { fontSize: "clamp(16px,4vw,19px)", lineHeight: 1.4, fontFamily: serif, fontWeight: 400 },

  quizBox: { background: "rgba(243,234,217,.035)", border: "1px solid rgba(243,234,217,.1)", borderRadius: 18, padding: "26px 22px" },
  quizProg: { fontSize: 11, letterSpacing: 2, color: amber, fontWeight: 600, textTransform: "uppercase", display: "flex", justifyContent: "space-between" },
  quizTopic: { color: muted },
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
  resultBest: { fontSize: 13, color: muted, marginTop: 14 },

  pledgeBox: { textAlign: "center" },
  pledgeText: { fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(20px,5.5vw,28px)", lineHeight: 1.5, maxWidth: 600, margin: "0 auto 32px", color: "#ece2cd" },
  pledgeBtn: { background: "transparent", border: `1.5px solid ${amber}`, color: amber, fontFamily: sans, fontWeight: 600, fontSize: 16, padding: "15px 34px", borderRadius: 99, cursor: "pointer", transition: "all .3s" },
  pledgeOn: { background: amber, color: ink },
  pledgeNote: { marginTop: 18, fontSize: 15, color: cream, fontFamily: serif, fontStyle: "italic" },

  // lesson page
  lessonWrap: { position: "relative", zIndex: 2, padding: "40px 22px 64px", maxWidth: 720, margin: "0 auto" },
  back: { display: "inline-block", color: muted, textDecoration: "none", fontSize: 14, marginBottom: 28 },
  lessonK: { fontFamily: serif, fontSize: 13, color: amber, fontWeight: 600 },
  lessonTag: { fontSize: 10, letterSpacing: 1.5, color: muted, textTransform: "uppercase", marginTop: 6 },
  lessonTitle: { fontFamily: serif, fontWeight: 900, fontSize: "clamp(34px,9vw,56px)", lineHeight: 1, letterSpacing: -1, marginTop: 12 },
  lessonHi: { fontFamily: deva, fontSize: "clamp(18px,5vw,24px)", color: amber, marginTop: 12, fontWeight: 400 },
  lessonIntro: { fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(18px,4.5vw,22px)", lineHeight: 1.55, color: "#e6dcc7", margin: "26px 0 8px" },
  lessonSec: { marginTop: 36 },
  lessonH: { fontFamily: serif, fontWeight: 600, fontSize: "clamp(20px,5vw,26px)", lineHeight: 1.2, marginBottom: 12 },
  lessonP: { fontSize: 16, lineHeight: 1.75, color: "#d8cdb8", marginBottom: 14 },
  callout: { background: "rgba(255,153,51,.07)", border: "1px solid rgba(255,153,51,.3)", borderRadius: 14, padding: "20px 22px", margin: "32px 0" },
  calloutLabel: { fontSize: 11, letterSpacing: 2, color: amber, fontWeight: 600, textTransform: "uppercase", marginBottom: 8 },
  calloutText: { fontSize: 16, lineHeight: 1.6, color: cream, fontFamily: serif },
  doBox: { background: "rgba(123,184,111,.08)", border: "1px solid rgba(123,184,111,.3)", borderRadius: 14, padding: "20px 22px", margin: "32px 0" },
  doLabel: { fontSize: 11, letterSpacing: 2, color: "#8fcf80", fontWeight: 600, textTransform: "uppercase", marginBottom: 8 },
  lessonNav: { display: "flex", justifyContent: "space-between", gap: 12, marginTop: 48, borderTop: "1px solid rgba(243,234,217,.1)", paddingTop: 24, flexWrap: "wrap" },
  lessonNavLink: { color: cream, textDecoration: "none", fontSize: 15, fontWeight: 500 },
  lessonNavMuted: { color: muted, fontSize: 12, display: "block", marginBottom: 2 },
  markBtn: { background: amber, color: ink, border: "none", fontFamily: sans, fontWeight: 600, fontSize: 15, padding: "13px 28px", borderRadius: 99, cursor: "pointer", marginTop: 8 },
  markDone: { background: "transparent", color: green, border: `1px solid ${green}` },

  // progress strip
  progressStrip: { position: "relative", zIndex: 2, maxWidth: 820, margin: "0 auto", padding: "0 22px" },
  progressInner: { background: "rgba(243,234,217,.035)", border: "1px solid rgba(243,234,217,.09)", borderRadius: 14, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" },
  progressLabel: { fontSize: 13, color: muted },
  progressBarWrap: { flex: 1, minWidth: 140, height: 8, background: "rgba(243,234,217,.08)", borderRadius: 99, overflow: "hidden" },
  progressBarFill: { height: "100%", background: amber, borderRadius: 99, transition: "width .6s cubic-bezier(.2,.7,.2,1)" },
  progressCount: { fontFamily: serif, fontWeight: 600, fontSize: 15, color: cream, whiteSpace: "nowrap" },

  notFound: { position: "relative", zIndex: 2, maxWidth: 600, margin: "0 auto", padding: "100px 22px", textAlign: "center" },

  foot: { position: "relative", zIndex: 2, padding: "50px 22px 60px", maxWidth: 720, margin: "0 auto", textAlign: "center", borderTop: "1px solid rgba(243,234,217,.08)" },
  footText: { fontSize: 13, lineHeight: 1.7, color: muted, marginTop: 20, maxWidth: 520, marginLeft: "auto", marginRight: "auto" },
  footFine: { fontFamily: serif, fontStyle: "italic", fontSize: 15, color: amber, marginTop: 22 },
};
