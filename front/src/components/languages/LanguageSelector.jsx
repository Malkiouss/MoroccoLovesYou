import React, { useState } from "react";
import { Earth } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
import "./LanguageSelector.css";
import { useLanguage } from "../../context/LanguageContext";

const languages = [
  { code: "en", label: "English",    flagCode: "gb" },
  { code: "fr", label: "French",     flagCode: "fr" },
  { code: "es", label: "Spanish",    flagCode: "es" },
  { code: "he", label: "Hebrew",     flagCode: "il" },
  { code: "ar", label: "العربية",    flagCode: "ma" },
  { code: "de", label: "German",     flagCode: "de" },
  { code: "it", label: "Italian",    flagCode: "it" },
  { code: "ja", label: "Japanese",   flagCode: "jp" },
  { code: "zh", label: "Chinese",    flagCode: "cn" },
  { code: "ko", label: "Korean",     flagCode: "kr" },
  { code: "vi", label: "Vietnamese", flagCode: "vn" },
  { code: "ru", label: "Russian",    flagCode: "ru" },
];

function LanguageSelector() {
  const { language: selectedLang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageClick = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const activeLang = languages.find((l) => l.code === selectedLang);

  return (
    <section className="language-section">
      {/* Mobile toggle — shows globe + current language name + chevron */}
      <button
        className={`mobile-language-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <Earth size={16} />
        <span>{activeLang?.label ?? "Language"}</span>
        <span className="toggle-chevron">▼</span>
      </button>

      {/* Language grid */}
      <div className={`language-list ${isOpen ? "show-mobile-list" : ""}`}>
        {languages.map((language) => (
          <button
            key={language.code}
            className={`language-item ${selectedLang === language.code ? "active" : ""}`}
            onClick={() => handleLanguageClick(language.code)}
            aria-pressed={selectedLang === language.code}
          >
            <span className={`fi fi-${language.flagCode} flag-icon`}></span>
            <span className="language-name">{language.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default LanguageSelector;