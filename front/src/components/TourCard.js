import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './TourCard.css';
import SafeImage from './SafeImage';

export default function TourCard({ image, title, duration, price, highlights }) {
  const { t } = useLanguage();

  return (
    <div className="tour-card">
      <div className="tour-image">
        <SafeImage src={image} alt={title} />
        <div className="tour-badge">${price}</div>
      </div>
      <div className="tour-content">
        <h3>{title}</h3>
        <p className="tour-duration">⏱️ {duration} {t('tours.days')}</p>
        <div className="tour-highlights">
          <h4>{t('tours.highlights')}</h4>
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <button className="book-now-btn">{t('tours.bookNow')}</button>
      </div>
    </div>
  );
}
