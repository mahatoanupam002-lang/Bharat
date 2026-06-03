import React from "react";
import { S } from "../theme.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

export default function SectionHead({ n, k, s }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal" style={S.secHead}>
      <span style={S.secNum} aria-hidden="true">{n}</span>
      <div>
        <h2 style={S.secK}>{k}</h2>
        <div style={S.secS}>{s}</div>
      </div>
    </div>
  );
}
