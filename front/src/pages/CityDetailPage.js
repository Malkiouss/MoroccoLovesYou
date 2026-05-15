import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import { galleryCities } from '../data/galleryCities';
import { getWatermarkedVideoUrl } from '../utils/imageUtils';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import './CityDetailPage.css';

export default function CityDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const city = galleryCities.find(c => c.slug === slug);

  const openLightbox = (index) => { setCurrentImageIndex(index); setLightboxOpen(true); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setLightboxOpen(false); document.body.style.overflow = 'auto'; };
  const nextImage = useCallback((e) => { e?.stopPropagation(); setCurrentImageIndex((prev) => (prev + 1) % city.galleryImages.length); }, [city?.galleryImages?.length]);
  const prevImage = useCallback((e) => { e?.stopPropagation(); setCurrentImageIndex((prev) => (prev - 1 + city.galleryImages.length) % city.galleryImages.length); }, [city?.galleryImages?.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  if (!city) {
    return (
      <div className="city-not-found">
        <h1>{t('cityDetail.notFound')}</h1>
        <button onClick={() => navigate('/')}>{t('cityDetail.backHome')}</button>
      </div>
    );
  }

  const waLink = `https://wa.me/972546338757?text=I'd like to plan a trip to ${city.name}. Can you help me?`;

  return (
    <div className="city-detail-page">
      <PageHeader title={city.name} subtitle={t('cityDetail.discoverSubtitle')} bgImage={city.heroImage} />

      <section className="city-description-section">
        <div className="section-container">
          <div className="city-description">
            <p>
              {t(`cityDesc.${city.slug}`) !== `cityDesc.${city.slug}` 
                ? t(`cityDesc.${city.slug}`) 
                : city.description}
            </p>
          </div>
          <div className="section-cta">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn">
              <span>💬</span>&nbsp; {t('cityDetail.planTrip')} {city.name}
            </a>
          </div>
        </div>
      </section>

      <section className="city-gallery-section">
        <div className="section-container">
          <h2>{t('cityDetail.galleryOf')} {city.name}</h2>
          <div className="city-gallery-grid">
            {city.galleryImages.map((image, index) => (
              <div key={`img-${index}`} className="city-gallery-item" onClick={() => openLightbox(index)}>
                <SafeImage src={image} alt={`${city.name} - ${index + 1}`} className="city-gallery-img" />
                <div className="gallery-overlay"><span>🔎</span></div>
              </div>
            ))}
            {city.galleryVideos && city.galleryVideos.map((video) => (
              <div key={`vid-${video.id}`} className="city-gallery-item video-item">
                <CustomVideoPlayer src={getWatermarkedVideoUrl(video.src, undefined, 'c_fill,ar_16:9')} />
              </div>
            ))}
          </div>
          <div className="section-cta">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn">
              <span>📸</span>&nbsp; {t('cityDetail.bookExperience')}
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn-outline">
              <span>📋</span>&nbsp; {t('cityDetail.requestItinerary')}
            </a>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="mly-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-nav prev" onClick={prevImage}>‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={city.galleryImages[currentImageIndex]} alt={`${city.name} - ${currentImageIndex + 1}`} className="lightbox-main-img" />
            <div className="lightbox-caption">{city.name} — {currentImageIndex + 1} / {city.galleryImages.length}</div>
          </div>
          <button className="lightbox-nav next" onClick={nextImage}>›</button>
        </div>
      )}

      <section className="city-cta-section">
        <div className="city-cta-content">
          <h2>{t('cityDetail.readyToVisit')} {city.name}?</h2>
          <p>{t('cityDetail.readyToVisitText')}</p>
          <div className="cta-buttons">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn">
              <span>💬</span>&nbsp; {t('cityDetail.planMyTrip')}
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn-outline">
              <span>📞</span>&nbsp; {t('cityDetail.talkExpert')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}