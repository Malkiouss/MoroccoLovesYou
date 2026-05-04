import React, { useState, useEffect, useCallback } from 'react';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import './Gallery.css';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=500&h=400&fit=crop',
      title: 'Marrakech Medina',
      city: 'Marrakech',
      category: 'Cities'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1532336414038-446546efb0fd?w=500&h=400&fit=crop',
      title: 'Chefchaouen Blue City',
      city: 'Chefchaouen',
      category: 'Cities'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1518552666983-3a60fbe5f0fa?w=500&h=400&fit=crop',
      title: 'Sahara Desert Dunes',
      city: 'Sahara Desert',
      category: 'Desert'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
      title: 'Desert Sunset',
      city: 'Sahara Desert',
      category: 'Desert'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1509316366560-61e0ba8cdd03?w=500&h=400&fit=crop',
      title: 'Fes City Walls',
      city: 'Fes',
      category: 'Cities'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a36c3f7?w=500&h=400&fit=crop',
      title: 'Casablanca Coast',
      city: 'Casablanca',
      category: 'Beach'
    },
  ];

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
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

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
    <div className="gallery-page">
      <PageHeader
        title="Our Gallery"
        subtitle="Visual memories of unforgettable Moroccan journeys"
        bgImage="https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=600&fit=crop"
      />

      <section className="gallery-section">
        <div className="gallery-container">
          <h2>Morocco in Pictures</h2>
          <p className="gallery-intro">
            Explore our collection of breathtaking photos from Morocco
          </p>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <SafeImage
                  src={image.src}
                  alt={image.title}
                  className="gallery-img"
                />

                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <span className="gallery-city">{image.city}</span>
                    <p>{image.category}</p>
                    <div className="zoom-icon">🔎</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM LIGHTBOX */}
      {lightboxOpen && (
        <div className="mly-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          
          <button className="lightbox-nav prev" onClick={prevImage}>
            ‹
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].title} 
              className="lightbox-main-img"
            />
            <div className="lightbox-caption">
              <h3>{galleryImages[currentImageIndex].title}</h3>
              <p>{galleryImages[currentImageIndex].city} — {galleryImages[currentImageIndex].category}</p>
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {galleryImages.length}
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