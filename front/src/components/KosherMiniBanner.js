import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./KosherMiniBanner.css";

const KosherMiniBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="kosher-mini-float">
      {/* ── Simplified Kosher Link ── */}
      <Link
        to="/jewish-heritage"
        className="kosher-simple-banner"
        aria-label={t('aria.kosherTravel')}
      >
        
      </Link>
    </div>
  );
};

export default KosherMiniBanner;
