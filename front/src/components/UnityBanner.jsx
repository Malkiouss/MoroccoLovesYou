import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './UnityBanner.css';

export default function UnityBanner() {
  const { t } = useLanguage();

  return (
    <div className="unity-banner">
      <div className="unity-container">
        <div className="unity-image-wrapper">
          <img 
            src="/assets/unitybar.png" 
            alt={t('home.unityAlt') || "Morocco Loves You Unity Banner"} 
            className="unity-banner-img" 
          />
        </div>
        <div className="unity-quote">
          "{t('home.unityQuote')}"
        </div>
      </div>
    </div>
  );
}
