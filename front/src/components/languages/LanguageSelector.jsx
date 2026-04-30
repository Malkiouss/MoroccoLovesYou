import React, { useState } from "react";
import { Earth } from 'lucide-react';
import "flag-icons/css/flag-icons.min.css";
import "./LanguageSelector.css";

const languages = [
  { code: "en", label: "English", flagCode: "gb" },
  { code: "fr", label: "French", flagCode: "fr" },
  { code: "es", label: "Spanish", flagCode: "es" },
  { code: "he", label: "Hebrew", flagCode: "il" },
  { code: "ar", label: "Moroccan\nArabic / Darija", flagCode: "ma" },
  { code: "de", label: "German", flagCode: "de" },
  { code: "it", label: "Italian", flagCode: "it" },
  { code: "ja", label: "Japanese", flagCode: "jp" },
  { code: "zh", label: "Chinese", flagCode: "cn" },
  { code: "ko", label: "Korean", flagCode: "kr" },
  { code: "vi", label: "Vietnamese", flagCode: "vn" },
];

const translations = {
  en: { title: "Welcome to Morocco Loves You", text: "Discover Morocco with love." },
  fr: { title: "Bienvenue à Morocco Loves You", text: "Découvrez le Maroc avec amour." },
  es: { title: "Bienvenido a Morocco Loves You", text: "Descubre Marruecos con amor." },
  he: { title: "ברוכים הבאים ל-Morocco Loves You", text: "גלו את מרוקו באהבה." },
  ar: { title: "مرحبا بكم في Morocco Loves You", text: "اكتشف المغرب بالحب." },
  de: { title: "Willkommen bei Morocco Loves You", text: "Entdecken Sie Marokko mit Liebe." },
  it: { title: "Benvenuto in Morocco Loves You", text: "Scopri il Marocco con amore." },
  ja: { title: "Morocco Loves Youへようこそ", text: "愛を込めてモロッコを発見しましょう。" },
  zh: { title: "欢迎来到 Morocco Loves You", text: "用爱探索摩洛哥。" },
  ko: { title: "Morocco Loves You에 오신 것을 환영합니다", text: "사랑으로 모로코를 발견하세요。" },
  vi: { title: "Chào mừng đến với Morocco Loves You", text: "Khám phá Ma-rốc bằng tình yêu." },
};

function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageClick = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };

  return (
    <section className="language-section">
      <h3 className="language-title">Choose Your Language:</h3>

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

      <div className="translated-content">
        <h1>{translations[selectedLang].title}</h1>
        <p>{translations[selectedLang].text}</p>
      </div>
    </section>
  );
}

export default LanguageSelector;