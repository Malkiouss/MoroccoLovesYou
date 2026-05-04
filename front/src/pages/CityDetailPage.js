import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import { galleryCities } from '../data/galleryCities';
import './CityDetailPage.css';

export default function CityDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const city = galleryCities.find(c => c.slug === slug);

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
    setCurrentImageIndex((prev) => (prev + 1) % city.galleryImages.length);
  }, [city?.galleryImages?.length]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + city.galleryImages.length) % city.galleryImages.length);
  }, [city?.galleryImages?.length]);

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
        <h1>City not found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const waLink = `https://wa.me/?text=I'd like to plan a trip to ${city.name}. Can you help me?`;

  return (
    <div className="city-detail-page">
      <PageHeader
        title={city.name}
        subtitle="Discover the beauty and culture"
        bgImage={city.heroImage}
      />

      {/* DESCRIPTION SECTION */}
      <section className="city-description-section">
        <div className="section-container">
          <div className="city-description">
            <p>{city.description}</p>
          </div>
          <div className="section-cta">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn">
              <span>💬</span>&nbsp; Plan My Trip to {city.name}
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="city-gallery-section">
        <div className="section-container">
          <h2>Gallery of {city.name}</h2>
          <div className="city-gallery-grid">
            {/* RENDER PHOTOS */}
            {city.galleryImages.map((image, index) => (
              <div 
                key={`img-${index}`} 
                className="city-gallery-item"
                onClick={() => openLightbox(index)}
              >
                <SafeImage
                  src={image}
                  alt={`${city.name} - ${index + 1}`}
                  className="city-gallery-img"
                />
                <div className="gallery-overlay">
                  <span>🔎</span>
                </div>
              </div>
            ))}

            {/* RENDER VIDEOS (Mixed in) */}
            {city.galleryVideos && city.galleryVideos.map((video) => (
              <div key={`vid-${video.id}`} className="city-gallery-item video-item">
                <div className="video-watermark">
                  <img src="/assets/vidlogo.png" alt="Logo" />
                </div>
                <video
                  src={video.src}
                  poster={video.poster}
                  className="city-gallery-video"
                  controls
                />
              </div>
            ))}
          </div>

          <div className="section-cta">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn">
              <span>📸</span>&nbsp; Book This Experience
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn-outline">
              <span>📋</span>&nbsp; Request Full Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="mly-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          
          <button className="lightbox-nav prev" onClick={prevImage}>
            ‹
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={city.galleryImages[currentImageIndex]} 
              alt={`${city.name} - ${currentImageIndex + 1}`} 
              className="lightbox-main-img"
            />
            <div className="lightbox-caption">
              {city.name} — {currentImageIndex + 1} / {city.galleryImages.length}
            </div>
          </div>

          <button className="lightbox-nav next" onClick={nextImage}>
            ›
          </button>
        </div>
      )}

      {/* CTA SECTION */}
      <section className="city-cta-section">
        <div className="city-cta-content">
          <h2>Ready to Visit {city.name}?</h2>
          <p>Let us plan your perfect journey to this amazing destination</p>
          <div className="cta-buttons">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn">
              <span>💬</span>&nbsp; Plan My Trip
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mly-wc2030-btn-outline">
              <span>📞</span>&nbsp; Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}