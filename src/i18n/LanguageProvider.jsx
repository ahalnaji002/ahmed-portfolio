import { useEffect, useMemo, useState } from "react";
import { LANGS, LanguageContext, SET_LANG_EVENT } from "./context";
import { strings } from "./strings";

// ?lang= in the URL wins, then the visitor's last choice, then the browser language.
function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = window.localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch {
    // Storage can be blocked; fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = strings[lang].meta.title;
    try {
      // Keep a shared ?lang= link in sync so a reload doesn't undo the switch.
      const url = new URL(window.location.href);
      if (url.searchParams.has("lang") && url.searchParams.get("lang") !== lang) {
        url.searchParams.set("lang", lang);
        window.history.replaceState(window.history.state, "", url);
      }
      window.localStorage.setItem("lang", lang);
    } catch {
      // Not critical: the choice just won't be remembered.
    }
  }, [lang]);

  useEffect(() => {
    const onSetLang = (event) => {
      if (LANGS.includes(event.detail)) setLang(event.detail);
    };
    window.addEventListener(SET_LANG_EVENT, onSetLang);
    return () => window.removeEventListener(SET_LANG_EVENT, onSetLang);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      isAr: lang === "ar",
      t: strings[lang],
      setLang,
      toggleLang: () => setLang((current) => (current === "ar" ? "en" : "ar")),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export default LanguageProvider;
