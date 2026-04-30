import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

const flags = {
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
  ar: '🇲🇦',
  he: '🇮🇱',
  ja: '🇯🇵',
  zh: '🇨🇳',
  vi: '🇻🇳'
};

export default function LanguageSelector() {
  const { language, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Fallback to avoid errors if context is not yet loaded
  if (!languages) return null;

  return (
    <div className="language-selector" onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="lang-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="lang-flag">{flags[language]}</span>
        <span className="lang-code">{language.toUpperCase()}</span>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown">
          {languages.map(lang => (
            <button
              key={lang}
              className={`lang-option ${language === lang ? 'active' : ''}`}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
            >
              <span className="lang-flag">{flags[lang]}</span>
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
