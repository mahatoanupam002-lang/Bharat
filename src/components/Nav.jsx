import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { S } from "../theme.js";
import { useLang } from "../context/LangContext.jsx";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: "/learn", label: t("Learn", "सीखें") },
    { to: "/quiz", label: t("Quiz", "प्रश्नोत्तरी") },
    { to: "/duties", label: t("Duties", "कर्तव्य") },
    { to: "/pledge", label: t("Pledge", "संकल्प") },
  ];

  const isActive = (to) => loc.pathname === to || (to !== "/" && loc.pathname.startsWith(to));

  return (
    <>
      <nav style={S.nav}>
        <Link to="/" style={S.brand} aria-label="SOCH home" onClick={() => setOpen(false)}>
          <span style={S.brandMark}>सोच</span>
          <span style={S.brandWord}>SOCH</span>
        </Link>

        <div style={S.navRight}>
          <div className="soch-nav-links" style={S.navLinks}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                style={({ isActive }) => ({ ...S.navLink, ...(isActive ? S.navLinkOn : {}) })}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div style={S.langWrap} role="group" aria-label="Language">
            <button onClick={() => setLang("en")} style={{ ...S.lang, ...(lang === "en" ? S.langOn : {}) }} aria-pressed={lang === "en"}>EN</button>
            <button onClick={() => setLang("hi")} style={{ ...S.lang, ...(lang === "hi" ? S.langOn : {}) }} aria-pressed={lang === "hi"}>हिं</button>
          </div>

          <button
            className="soch-menu-btn"
            style={S.menuBtn}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={t("Toggle menu", "मेन्यू खोलें/बंद करें")}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div style={S.mobileMenu}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{ ...S.mobileLink, ...(isActive(l.to) ? { color: "#FF9933" } : {}) }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
