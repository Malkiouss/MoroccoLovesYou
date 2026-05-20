import React, { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import { Briefcase, Car, Building, ShieldCheck, Clock, MapPin } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import { busPhotos } from '../data/busPhotos';
import { busVideos } from '../data/busVideos';
import { getWatermarkedVideoUrl } from '../utils/imageUtils';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import './Gallery.css';
import './Transportation.css';
import './VIP.css';

export default function VIP() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    setCurrentImageIndex((prev) => (prev + 1) % busPhotos.length);
  }, []);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + busPhotos.length) % busPhotos.length);
  }, []);

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

  const services = [
    {
      icon: <Car size={32} />,
      titleKey: 'vip.luxuryTransport',
      descKey: 'vip.luxuryTransportDesc'
    },
    {
      icon: <Building size={32} />,
      titleKey: 'vip.premiumAccom',
      descKey: 'vip.premiumAccomDesc'
    },
    {
      icon: <Briefcase size={32} />,
      titleKey: 'vip.businessConcierge',
      descKey: 'vip.businessConciergeDesc'
    },
    {
      icon: <ShieldCheck size={32} />,
      titleKey: 'vip.securityPrivacy',
      descKey: 'vip.securityPrivacyDesc'
    },
    {
      icon: <Clock size={32} />,
      titleKey: 'vip.support247',
      descKey: 'vip.support247Desc'
    },
    {
      icon: <MapPin size={32} />,
      titleKey: 'vip.customItineraries',
      descKey: 'vip.customItinerariesDesc'
    }
  ];

  return (
    <div className="vip-page">
      <PageHeader
        title={t('vip.pageTitle')}
        subtitle={t('vip.pageSubtitle')}
        bgImage="/assets/vip.jpg"
      />

      <section className="vip-intro">
        <div className="section-container">
          <div className="vip-intro-content">
            <h2>{t('vip.introTitle')}</h2>
            <p>{t('vip.introText')}</p>
          </div>
        </div>
      </section>

      <section className="vip-services">
        <div className="section-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="vip-service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="transportation-content">
        {/* ── INTRO SECTION ── */}
        <section className="trans-intro-section">
          <div className="split-layout">
            <div className="trans-text">
              <h2>{t('transportation.introTitle')}</h2>
              <p>{t('transportation.introP1')}</p>
              <p><strong>{t('transportation.introP2')}</strong></p>
              <p>{t('transportation.introP3')}</p>
              <p>{t('transportation.introP4')}</p>
            </div>
            <div className="trans-image">
              <img src="/assets/bus/bus (17).png" alt={t('aria.vipBus')} className="trans-img" />
            </div>
          </div>

          <div className="sub-photo-grid">
            {busPhotos.slice(1, 4).map((photo, index) => (
              <div key={photo.id} className="sub-photo-item" onClick={() => openLightbox(index + 1)}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>

        {/* ── DRIVERS SECTION ── */}
        <section className="drivers-section">
          <div className="split-layout reverse">
            <div className="trans-image">
              <img src="/assets/bus/bus (3).png" alt={t('aria.drivers')} className="trans-img" />
            </div>
            <div className="trans-text">
              <h2>{t('transportation.driversTitle')}</h2>
              <div className="text-content-card">
                <p>{t('transportation.driversText1')}</p>
                <p><strong>{t('transportation.driversText2')}</strong></p>
                <p>{t('transportation.driversText3')}</p>
              </div>
            </div>
          </div>

          <div className="sub-photo-grid">
            {busPhotos.slice(4, 7).map((photo, index) => (
              <div key={photo.id} className="sub-photo-item" onClick={() => openLightbox(index + 4)}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>

        {/* ── SAFETY SECTION ── */}
        <section className="safety-section">
          <h2>{t('transportation.safetyTitle')}</h2>
          <div className="text-content-card">
            <p>{t('transportation.safetyText1')}</p>
            <p>{t('transportation.safetyText2')}</p>
            <p><strong>{t('transportation.safetyText3')}</strong></p>
          </div>
        </section>

        {/* ── VIDEO GALLERY SECTION ── */}
        <section className="transportation-video-section">
          <h2>{t('transportation.videoGalleryTitle') || "VIP Experience Videos"}</h2>
          <div className="bus-video-grid">
            {busVideos.map((video) => (
              <div key={video.id} className="bus-video-card">
                <div className="video-container">
                  <CustomVideoPlayer src={getWatermarkedVideoUrl(video.src, undefined, 'c_fill,ar_9:16')} />
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GALLERY GRID ── */}
        <section className="gallery-section transportation-gallery">
          <div className="gallery-container">
            <h2>{t('transportation.categories.buses')}</h2>
            <div className="gallery-grid">
              {busPhotos.map((photo, index) => (
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

        {/* ── SERVICES SECTION ── */}
        <section className="services-grid-section">
          <h2>{t('transportation.servicesTitle')}</h2>
          <ul className="services-list">
            {t('transportation.servicesList').map((service, idx) => (
              <li key={idx}>
                <span className="service-icon">✔</span>
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="transportation-cta">
          <h3>{t('transportation.ctaTitle')}</h3>
          <p className="cta-sub">{t('transportation.ctaSubtitle')}</p>
          <div className="cta-links">
            <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer" className="cta-link whatsapp">
              <span>📲</span> {t('transportation.whatsapp')}
            </a>
            <a href="tel:+212663630579" className="cta-link phone">
              <span>☎️</span> {t('transportation.moroccoLine')}
            </a>
          </div>
          <p style={{ marginTop: '2rem', opacity: 0.7 }}>🌐 www.MoroccoLovesYou.com</p>
        </section>
      </div>

      <section className="vip-cta">
        <div className="section-container">
          <div className="vip-cta-box">
            <h2>{t('vip.ctaTitle')}</h2>
            <p>{t('vip.ctaText')}</p>
            <a href="https://wa.me/972546338757?text=Hello%20Ilan,%20I%20am%20inquiring%20about%20VIP%20business%20travel%20services%20in%20Morocco." target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t('vip.ctaBtn')}
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxOpen && (
        <div className="mly-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>

          <button className="lightbox-nav prev" onClick={prevImage}>
            ‹
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={busPhotos[currentImageIndex].src}
              alt={busPhotos[currentImageIndex].alt}
              className="lightbox-main-img"
            />
            <div className="lightbox-caption">
              <h3>{busPhotos[currentImageIndex].alt}</h3>
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {busPhotos.length}
              </div>
            </div>
          </div>

          <button className="lightbox-nav next" onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}
