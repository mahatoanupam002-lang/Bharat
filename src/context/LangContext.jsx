import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useLocalStorage("soch.lang", "en");
  const t = (en, hi) => (lang === "en" ? en : hi);
  // keep <html lang> in sync for accessibility / SEO
  React.useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "hi";
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
