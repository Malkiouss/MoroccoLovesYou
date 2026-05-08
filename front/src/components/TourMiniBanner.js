import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./TourMiniBanner.css";

const TourMiniBanner = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/972546338757";

  return (
    <div className="tour-mini-float">

      {/* ── Standalone Recommendations badge ── */}
      <a href="#magic-morocco-video" className="tour-mini-rec-badge">
        <div className="tour-mini-rec-stars">★★★★★</div>
        <div className="tour-mini-rec-text">{t('tourMini.recommendations')}</div>
        <div className="tour-mini-rec-count">{t('tourMini.recCount')}</div>
      </a>

      {/* ── Clickable card ── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="tour-mini-card"
        aria-label="Premium Morocco Tour WhatsApp"
      >
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
          <div className="tour-mini-flag" aria-hidden="true">
            <span className="flag-star">★</span>
          </div>
          <p className="tour-mini-included">
            {t('tourMini.allIncluded').split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </p>
        </div>
      </a>

    </div>
  );
};

export default TourMiniBanner;