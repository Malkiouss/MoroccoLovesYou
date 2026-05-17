import React, { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import { culinaryPhotos, culinaryVideos } from '../data/culinaryData';
import { getWatermarkedVideoUrl } from '../utils/imageUtils';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import './Gallery.css';
import './Experiences.css';

export default function Experiences() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImage = "/assets/food/food (1).png";
  const introImage = "/assets/food/food.jpg";
  const philosophyImage = "/assets/food/food (5).png";

  const usedImages = [heroImage, introImage, philosophyImage];
  const availablePhotos = culinaryPhotos.filter(photo => !usedImages.includes(photo.src));

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % availablePhotos.length);
  }, [availablePhotos.length]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + availablePhotos.length) % availablePhotos.length);
  }, [availablePhotos.length]);

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

  return (
    <div className="experiences-page">
      <PageHeader
        title={t('experiences.pageTitle')}
        subtitle={t('experiences.pageSubtitle')}
        bgImage={heroImage}
      />

      <div className="experiences-content">
        {/* ── INTRO SECTION ── */}
        <section className="exp-intro-section">
          <div className="split-layout">
            <div className="exp-text">
              <h2>{t('experiences.introTitle')}</h2>
              <p className="intro-highlight">{t('experiences.introHighlight')}</p>
              <p>{t('experiences.introP1')}</p>
              <p>{t('experiences.introP2')}</p>
              <p>{t('experiences.introP3')}</p>
              <p>{t('experiences.introP4')}</p>
            </div>
            <div className="exp-image">
              <img src={introImage} alt={t('experiences.introTitle')} className="exp-img" />
            </div>
          </div>

          <div className="sub-photo-grid">
            {availablePhotos.slice(0, 3).map((photo, index) => (
              <div key={photo.id} className="sub-photo-item" onClick={() => openLightbox(index)}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>

        {/* ── PHILOSOPHY SECTION ── */}
        <section className="philosophy-section">
          <div className="split-layout reverse">
            <div className="exp-image">
              <img src={philosophyImage} alt={t('experiences.prepTitle')} className="exp-img" />
            </div>
            <div className="exp-text">
              <h2>{t('experiences.prepTitle')}</h2>
              <div className="text-content-card">
                <p>{t('experiences.prepP1')}</p>
                <p>{t('experiences.prepP2')}</p>
                <p>{t('experiences.prepP3')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VIDEO GALLERY SECTION ── */}
        <section className="experiences-video-section">
          <h2>{t('experiences.journeyVideos')}</h2>
          <div className="exp-video-grid">
            {culinaryVideos.map((video) => (
              <div key={video.id} className="exp-video-card">
                <div className="video-container">
                  <CustomVideoPlayer src={getWatermarkedVideoUrl(video.src, undefined, 'c_fill,ar_9:16')} />
                </div>
              </div>
            ))}
          </div>
        </section>

         {/* ── FEATURES LIST ── */}
        <section className="services-grid-section">
          <h2>{t('experiences.highlightsTitle')}</h2>
          <ul className="services-list">
            <li><span className="service-icon">🥘</span> {t('experiences.highlightTagine')}</li>
            <li><span className="service-icon">🥘</span> {t('experiences.highlightCouscous')}</li>
            <li><span className="service-icon">🥘</span> {t('experiences.highlightVegetables')}</li>
            <li><span className="service-icon">🥘</span> {t('experiences.highlightPastries')}</li>
            <li><span className="service-icon">🥘</span> {t('experiences.highlightBreakfasts')}</li>
            <li><span className="service-icon">🥘</span> {t('experiences.highlightMeat')}</li>
            <li><span className="service-icon">🥘</span> {t('experiences.highlightJuices')}</li>
            <li><span className="service-icon">🥘</span> {t('experiences.highlightHealthy')}</li>
          </ul>
        </section>

        {/* ── PHOTO GALLERY GRID ── */}
        <section className="gallery-section experiences-gallery">
          <div className="gallery-container">
            <h2>{t('experiences.galleryTitle')}</h2>
            <div className="gallery-grid">
              {availablePhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <SafeImage
                    src={photo.src}
                    alt={photo.alt}
                    className="gallery-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUMMARY SECTION ── */}
        <section className="summary-section">
          <div className="text-content-card">
            <p>{t('experiences.summaryP1')}</p>
            <div className="feature-tags">
              <span>🌿 {t('experiences.tagHealthy')}</span>
              <span>🌿 {t('experiences.tagAuthentic')}</span>
              <span>🌿 {t('experiences.tagTraditional')}</span>
              <span>🌿 {t('experiences.tagFresh')}</span>
              <span>🌿 {t('experiences.tagUnique')}</span>
              <span>🌿 {t('experiences.tagDelicious')}</span>
            </div>
            <div className="important-note">
              <h4>{t('experiences.important')}</h4>
              <p>{t('experiences.guidanceNote')}</p>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="experiences-cta">
          <h3>Morocco Loves You</h3>
          <p className="cta-sub">{t('experiences.whereMeal')}</p>
          <div className="cta-links">
            <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer" className="cta-link whatsapp">
              <span>📲</span> {t('experiences.whatsappLabel') || "WhatsApp: +972 54-633-8757"}
            </a>
            <a href="tel:+212663630579" className="cta-link phone">
              <span>☎️</span> {t('experiences.moroccoLine') || "Morocco Line: +212 6 63 63 05 79"}
            </a>
          </div>
          <p style={{ marginTop: '2rem', opacity: 0.7 }}>🌐 www.MoroccoLovesYou.com</p>
        </section>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div className="mly-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-nav prev" onClick={prevImage}>‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={availablePhotos[currentImageIndex].src}
              alt={availablePhotos[currentImageIndex].alt}
              className="lightbox-main-img"
            />
            <div className="lightbox-caption">
              <h3>{availablePhotos[currentImageIndex].title || availablePhotos[currentImageIndex].alt}</h3>
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {availablePhotos.length}
              </div>
            </div>
          </div>
          <button className="lightbox-nav next" onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  );
}
