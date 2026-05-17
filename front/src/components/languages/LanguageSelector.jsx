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
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.553 4.197 1.604 6.007L0 24l6.135-1.61a11.84 11.84 0 005.908 1.569h.005c6.635 0 12.031-5.391 12.033-12.029a11.82 11.82 0 00-3.526-8.513"/>
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
      {/* Mobile toggle — shows globe + current language name + flag + chevron */}
      <button
        className={`mobile-language-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <Earth size={16} />
        <span>{activeLang?.label ?? "Language"}</span>
        {activeLang && (
          <span className={`fi fi-${activeLang.flagCode} mobile-active-flag`} aria-hidden="true"></span>
        )}
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