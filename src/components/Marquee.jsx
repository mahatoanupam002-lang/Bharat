import React from "react";
import { S } from "../theme.js";

const WORDS = ["जिज्ञासा", "CURIOSITY", "तर्क", "REASON", "संविधान", "DUTY", "एकता", "INQUIRY", "सेवा", "SERVICE"];

export default function Marquee() {
  return (
    <div style={S.marquee} aria-hidden="true">
      <div style={S.marqueeTrack}>
        {[...WORDS, ...WORDS].map((w, i) => (
          <span key={i} style={S.marqueeWord}>
            {w}
            <span style={S.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
