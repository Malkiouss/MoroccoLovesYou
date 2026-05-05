import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SafeImage from './SafeImage';

export default function GalleryCard({ city }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClick = () => {
    navigate(`/gallery/${city.slug}`);
  };

  return (
    <div className="gallery-card" onClick={handleClick}>
      <SafeImage
        src={city.coverImage}
        alt={city.name}
        className="gallery-card-img"
      />
      <div className="gallery-card-overlay">
        <h3>{city.name}</h3>
        <p>{t('home.exploreDestination')}</p>
      </div>
    </div>
  );
}
