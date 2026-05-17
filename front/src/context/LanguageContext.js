import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from '../locales/translations';
import en from '../locales/en';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const RTL_LANGUAGES = ['ar', 'he'];

// Deep-merge helper: returns target value if it exists, otherwise fallback value
function getNestedValue(obj, keys) {
  return keys.reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('mly-language') || 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('mly-language', lang);
    } catch {
      // localStorage unavailable
    }
  }, []);

  // RTL support
  useEffect(() => {
    const isRtl = RTL_LANGUAGES.includes(language);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    if (isRtl) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language]);

  // Translation function with English fallback
  const t = useCallback((key) => {
    const keys = key.split('.');
    const langTranslations = translations[language];

    // Try current language first
    const value = langTranslations ? getNestedValue(langTranslations, keys) : undefined;
    if (value !== undefined) return value;

    // Fallback to English
    const fallback = getNestedValue(en, keys);
    if (fallback !== undefined) return fallback;

    // Return undefined to let JSX inline fallbacks (e.g. t('key') || "Default") work perfectly
    return undefined;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: Object.keys(translations) }}>
      {children}
    </LanguageContext.Provider>
  );
};
