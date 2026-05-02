import React from "react";
import "./TourMiniBanner.css";

const TourMiniBanner = () => {
  const whatsappUrl = "https://wa.me/212663630579";

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
          <h3>10 DAYS</h3>
          <h3>/ 9 NIGHTS</h3>
          <p className="tour-mini-title">
            PREMIUM MOROCCO<br />TOUR
          </p>
        </div>

        {/* ── Green date band ── */}
        <div className="tour-mini-date">
          <span>2026 - 2027</span>
          <small>MONTHLY DEPARTURES</small>
        </div>

        {/* ── Dark bottom section ── */}
        <div className="tour-mini-bottom">
          {/* Moroccan flag — red field with green star */}
          <div className="tour-mini-flag" aria-hidden="true">
            <span className="flag-star">★</span>
          </div>

          <p className="tour-mini-included">
            ALL INCLUDED<br />FULL BOARD
          </p>
        </div>

      </div>
    </a>
  );
};

export default TourMiniBanner;