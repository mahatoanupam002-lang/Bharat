import React, { useState } from "react";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";
import { useProgress } from "../hooks/useProgress.js";
import SectionHead from "../components/SectionHead.jsx";
import { QUIZ } from "../data/quiz.js";

export default function Quiz() {
  const { t } = useLang();
  const { quizBest, setQuizBest } = useProgress();
  useDocumentMeta({
    title: t("Quiz", "प्रश्नोत्तरी"),
    description: t(
      "Train the rational reflex: a quiz on misinformation, logic, scientific temper and the Constitution of India.",
      "तर्कशील सोच का अभ्यास: भ्रामक सूचना, तर्क, वैज्ञानिक दृष्टिकोण और भारत के संविधान पर एक प्रश्नोत्तरी।"
    ),
  });

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
    if (i + 1 >= QUIZ.length) {
      setDone(true);
      setQuizBest((b) => Math.max(b, score));
      return;
    }
    setI(i + 1);
    setPick(null);
  };
  const reset = () => {
    setI(0);
    setPick(null);
    setScore(0);
    setDone(false);
  };

  return (
    <section style={S.section}>
      <SectionHead n="?" k={t("Spot the Fake", "सच पहचानो")} s={t("Train the rational reflex", "तर्कशील सोच का अभ्यास")} />
      <div style={S.quizBox}>
        {!done ? (
          <>
            <div style={S.quizProg}>
              <span>{t("Question", "प्रश्न")} {i + 1} / {QUIZ.length}</span>
              <span style={S.quizTopic}>{t(q.topic.en, q.topic.hi)}</span>
            </div>
            <h3 style={S.quizQ}>{t(q.q.en, q.q.hi)}</h3>
            <div style={S.quizOpts}>
              {q.opts.map((o, idx) => {
                let st = { ...S.opt };
                if (pick !== null) {
                  if (idx === q.correct) st = { ...st, ...S.optRight };
                  else if (idx === pick) st = { ...st, ...S.optWrong };
                  else st = { ...st, opacity: 0.45 };
                }
                return (
                  <button key={idx} style={st} onClick={() => choose(idx)} disabled={pick !== null}>
                    {t(o.en, o.hi)}
                  </button>
                );
              })}
            </div>
            {pick !== null && (
              <div style={S.why}>
                <strong style={{ color: pick === q.correct ? "#7bb86f" : "#e08a5a" }}>
                  {pick === q.correct ? t("Right.", "सही।") : t("Not quite.", "बिलकुल नहीं।")}
                </strong>{" "}
                {t(q.why.en, q.why.hi)}
                <button style={S.next} onClick={next}>
                  {i + 1 >= QUIZ.length ? t("See result →", "परिणाम देखें →") : t("Next →", "अगला →")}
                </button>
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
            <p style={S.resultBest}>
              {t("Your best", "आपका सर्वश्रेष्ठ")}: {Math.max(quizBest, score)} / {QUIZ.length}
            </p>
            <button style={S.next} onClick={reset}>{t("Try again ↺", "फिर से ↺")}</button>
          </div>
        )}
      </div>
    </section>
  );
}
