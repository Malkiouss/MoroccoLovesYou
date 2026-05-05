import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './DestinationCard.css';
import SafeImage from './SafeImage';

export default function DestinationCard({ image, title, description }) {
  const { t } = useLanguage();

  return (
    <div className="destination-card">
      <div className="destination-image">
        <SafeImage src={image} alt={title} />
      </div>
      <div className="destination-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="explore-btn">{t('destinations.exploreNow')}</button>
      </div>
    </div>
  );
}
