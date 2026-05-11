import React, { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import { culinaryPhotos, culinaryVideos } from '../data/culinaryData';
import './Gallery.css';
import './Experiences.css';

export default function Experiences() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImage = "/assets/food/food (1).png";
  const introImage = "/assets/food/food.jpg";
  const philosophyImage = "/assets/food/food (5).png";
   const LOGO_SRC = "/assets/vidlogo.png";

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
              <h2>Our Unique Moroccan Culinary Experience</h2>
              <p className="intro-highlight">Authentic flavors, fresh ingredients, centuries of tradition, and unforgettable hospitality.</p>
              <p>Welcome to the authentic flavors of Morocco.</p>
              <p>At Morocco Loves You, food is not just a meal — it is culture, history, family, hospitality, and love.</p>
              <p>For centuries, Moroccan cuisine has been considered one of the richest, healthiest, and most flavorful cuisines in the world.</p>
              <p>Our culinary traditions combine Arab, Berber, Jewish Moroccan, Andalusian, Mediterranean, and African influences — creating unique recipes preserved for more than 500 years.</p>
            </div>
            <div className="exp-image">
              <img src={introImage} alt="Moroccan Feast" className="exp-img" />
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
              <img src={philosophyImage} alt="Fresh Ingredients" className="exp-img" />
            </div>
            <div className="exp-text">
              <h2>The Art of Moroccan Preparation</h2>
              <div className="text-content-card">
                <p>Everything is prepared with care, passion, fresh local ingredients, and authentic Moroccan spices.</p>
                <p>We carefully select trusted restaurants, authentic local experiences, and quality culinary destinations for our guests.</p>
                <p>Morocco is known worldwide for its colorful markets, fresh agriculture, natural products, spices, olives, oranges, pastries, mint tea, and unforgettable hospitality.</p>
              </div>
            </div>
          </div>
        </section>


        {/* ── VIDEO GALLERY SECTION ── */}
        <section className="experiences-video-section">
          <h2>Culinary Journey Videos</h2>
          <div className="exp-video-grid">
            {culinaryVideos.map((video) => (
              <div key={video.id} className="exp-video-card">
                <div className="video-container">
                  <div className="video-logo-overlay">
                    <img src={LOGO_SRC} alt="Logo" className="video-logo" />
                  </div>
                  <video
                    className="exp-video-player"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </section>


         {/* ── FEATURES LIST ── */}
        <section className="services-grid-section">
          <h2>Traditional Culinary Highlights</h2>
          <ul className="services-list">
            <li><span className="service-icon">🥘</span> Authentic Moroccan Tagine</li>
            <li><span className="service-icon">🥘</span> Traditional Couscous</li>
            <li><span className="service-icon">🥘</span> Fresh vegetables & natural ingredients</li>
            <li><span className="service-icon">🥘</span> Homemade pastries & desserts</li>
            <li><span className="service-icon">🥘</span> Traditional Moroccan breakfasts</li>
            <li><span className="service-icon">🥘</span> Fresh fish & quality meats</li>
            <li><span className="service-icon">🥘</span> Natural juices & Moroccan tea</li>
            <li><span className="service-icon">🥘</span> Healthy and delicious cooking traditions</li>
          </ul>
        </section>

        {/* ── PHOTO GALLERY GRID ── */}
        <section className="gallery-section experiences-gallery">
          <div className="gallery-container">
            <h2>Our Culinary Gallery</h2>
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
            <p>Our goal is to offer our guests not only a trip — but a true Moroccan culinary journey.</p>
            <div className="feature-tags">
              <span>🌿 Healthy</span>
              <span>🌿 Authentic</span>
              <span>🌿 Traditional</span>
              <span>🌿 Fresh</span>
              <span>🌿 Unique</span>
              <span>🌿 Delicious</span>
            </div>
            <div className="important-note">
              <h4>Important:</h4>
              <p>For the best culinary experience, we strongly recommend following the guidance of our team and culinary recommendations during your journey in Morocco.</p>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="experiences-cta">
          <h3>Morocco Loves You</h3>
          <p className="cta-sub">Where every meal becomes a memory.</p>
          <div className="cta-links">
            <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer" className="cta-link whatsapp">
              <span>📲</span> WhatsApp: +972 54-633-8757
            </a>
            <a href="tel:+212663630579" className="cta-link phone">
              <span>☎️</span> Morocco Line: +212 6 63 63 05 79
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
