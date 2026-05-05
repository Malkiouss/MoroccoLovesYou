import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GalleryCard from './GalleryCard';
import { galleryCities } from '../data/galleryCities';
import '../pages/Home.css'; // Use existing Home.css styles

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="gallery-showcase">
      <div className="section-container">
        <h2>{t('home.galleryTitle')}</h2>
        <p className="section-subtitle">
          {t('home.gallerySubtitle')}
        </p>

        <div className="gallery-grid">
          {galleryCities.map((city) => (
            <GalleryCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
