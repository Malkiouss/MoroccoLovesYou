import React, { useState } from "react";
import { Earth } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
import "./LanguageSelector.css";
import { useLanguage } from "../../context/LanguageContext";

const languages = [
  { code: "en", label: "English",    flagCode: "gb" },
  { code: "en-US", label: "American", flagCode: "us" },
  { code: "en-AU", label: "Australia", flagCode: "au" },
  { code: "en-CA", label: "Canada",    flagCode: "ca" },
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

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-1.5 6.5z"></path>
  </svg>
);

function LanguageSelector() {
  const { language: selectedLang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageClick = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const activeLang = languages.find((l) => l.code === selectedLang);
  const whatsappUrl = "https://wa.me/972546338757";

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

      {/* Social Links Corner */}
      <div className="language-socials">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="lang-social-icon whatsapp" aria-label="WhatsApp">
          <WhatsAppIcon />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="lang-social-icon instagram" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="lang-social-icon facebook" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </div>
    </section>
  );
}

export default LanguageSelector;