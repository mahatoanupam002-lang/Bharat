import React from "react";
import { Link } from "react-router-dom";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";

export default function Foot() {
  const { t } = useLang();
  return (
    <footer style={S.foot}>
      <Link to="/" style={S.brand} aria-label="SOCH home">
        <span style={S.brandMark}>सोच</span>
        <span style={S.brandWord}>SOCH</span>
      </Link>
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
