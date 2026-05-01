import React, { useState } from "react";
import { Earth } from 'lucide-react';
import "flag-icons/css/flag-icons.min.css";
import "./LanguageSelector.css";
import { useLanguage } from "../../context/LanguageContext";

const languages = [
  { code: "en", label: "English", flagCode: "gb" },
  { code: "fr", label: "French", flagCode: "fr" },
  { code: "es", label: "Spanish", flagCode: "es" },
  { code: "he", label: "Hebrew", flagCode: "il" },
  { code: "ar", label: "Arabic", flagCode: "ma" },
  { code: "de", label: "German", flagCode: "de" },
  { code: "it", label: "Italian", flagCode: "it" },
  { code: "ja", label: "Japanese", flagCode: "jp" },
  { code: "zh", label: "Chinese", flagCode: "cn" },
  { code: "ko", label: "Korean", flagCode: "kr" },
  { code: "vi", label: "Vietnamese", flagCode: "vn" },
];

function LanguageSelector() {
  const { language: selectedLang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageClick = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <section className="language-section">
      <button className="mobile-language-toggle" onClick={() => setIsOpen(!isOpen)}>
            <Earth />
      </button>

      <div className={`language-list ${isOpen ? "show-mobile-list" : ""}`}>

        {languages.map((language) => (
          <button
            key={language.code}
            className={`language-item ${selectedLang === language.code ? "active" : ""}`}
            onClick={() => handleLanguageClick(language.code)}
          >
            <span className={`fi fi-${language.flagCode} flag-icon`}></span>

            <span className="language-name">
              {language.label.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== language.label.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default LanguageSelector;
