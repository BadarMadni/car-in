"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

type Lang = "ar" | "en";

interface LanguageContextType {
  lang: Lang;
  isAr: boolean;
  toggleLang: () => void;
  t: (en: string, ar?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  isAr: true,
  toggleLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const isAr = lang === "ar";

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", isAr ? "rtl" : "ltr");
    html.setAttribute("lang", isAr ? "ar" : "en");
  }, [isAr]);

  const t = useCallback(
    (en: string, ar?: string) => (isAr && ar ? ar : en),
    [isAr]
  );

  return (
    <LanguageContext.Provider value={{ lang, isAr, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
