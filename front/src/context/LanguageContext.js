import React, { createContext, useContext, useState } from 'react';
import translations from '../locales/translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), translations[language]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: Object.keys(translations) }}>
      {children}
    </LanguageContext.Provider>
  );
};
