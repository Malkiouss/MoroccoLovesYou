import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import GalleryCard from '../components/GalleryCard';
import { galleryCities } from '../data/galleryCities';
import './Destinations.css';
import './Home.css'; // Import Home.css for gallery-grid and gallery-card styles

export default function Destinations() {
  const { t } = useLanguage();

  return (
    <div className="destinations">
      <PageHeader
        title={t('destinations.pageTitle')}
        subtitle={t('destinations.pageSubtitle')}
        bgImage="/assets/cities/fes/fes4.jpg"
      />

      <section className="destinations-section gallery-showcase">
        <div className="section-container">
          <h2>{t('destinations.sectionTitle')}</h2>
          <p className="section-subtitle">
            {t('destinations.sectionIntro')}
          </p>
          <div className="gallery-grid">
            {galleryCities.map(city => (
              <GalleryCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      <section className="explore-cta">
        <div className="cta-inner">
          <h2>{t('destinations.ctaTitle')}</h2>
          <p>{t('destinations.ctaText')}</p>
          <a href="/tours" className="cta-button">{t('destinations.ctaBtn')}</a>
        </div>
      </section>
    </div>
  );
}
