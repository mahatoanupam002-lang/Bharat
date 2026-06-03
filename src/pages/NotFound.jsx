import React from "react";
import { Link } from "react-router-dom";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.js";

export default function NotFound() {
  const { t } = useLang();
  useDocumentMeta({ title: t("Page not found", "पृष्ठ नहीं मिला") });
  return (
    <div style={S.notFound}>
      <div style={S.resultBig}>404</div>
      <p style={S.resultMsg}>
        {t("This page doesn't exist — but a good question always does.", "यह पृष्ठ मौजूद नहीं है — पर एक अच्छा सवाल हमेशा होता है।")}
      </p>
      <div style={{ marginTop: 28 }}>
        <Link to="/" style={S.cta}>{t("Back home →", "घर वापस →")}</Link>
      </div>
    </div>
  );
}
