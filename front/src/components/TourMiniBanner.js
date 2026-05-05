import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./TourMiniBanner.css";

const TourMiniBanner = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/972546338757";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="tour-mini-float"
      aria-label="Premium Morocco Tour WhatsApp"
    >
      <div className="tour-mini-card">

        {/* ── Top red section ── */}
        <div className="tour-mini-top">
          <h3>{t('tourMini.days')}</h3>
          <h3>{t('tourMini.nights')}</h3>
          <p className="tour-mini-title">
            {t('tourMini.title').split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </p>
        </div>

        {/* ── Green date band ── */}
        <div className="tour-mini-date">
          <span>{t('tourMini.years')}</span>
          <small>{t('tourMini.departures')}</small>
        </div>

        {/* ── Dark bottom section ── */}
        <div className="tour-mini-bottom">
          {/* Moroccan flag — red field with green star */}
          <div className="tour-mini-flag" aria-hidden="true">
            <span className="flag-star">★</span>
          </div>

          <p className="tour-mini-included">
            {t('tourMini.allIncluded').split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </p>
        </div>

      </div>
    </a>
  );
};

export default TourMiniBanner;