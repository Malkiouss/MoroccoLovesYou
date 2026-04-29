import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SafeImage from '../components/SafeImage';
import './Gallery.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=500&h=400&fit=crop',
      title: 'Marrakech Medina',
      category: 'Cities'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1532336414038-446546efb0fd?w=500&h=400&fit=crop',
      title: 'Chefchaouen Blue City',
      category: 'Cities'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1518552666983-3a60fbe5f0fa?w=500&h=400&fit=crop',
      title: 'Sahara Desert Dunes',
      category: 'Desert'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
      title: 'Desert Sunset',
      category: 'Desert'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1509316366560-61e0ba8cdd03?w=500&h=400&fit=crop',
      title: 'Fes City Walls',
      category: 'Cities'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a36c3f7?w=500&h=400&fit=crop',
      title: 'Essaouira Beach',
      category: 'Beach'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1503478211867-145a0caf9e25?w=500&h=400&fit=crop',
      title: 'Hassan II Mosque',
      category: 'Landmarks'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
      title: 'Atlas Mountains',
      category: 'Mountains'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1518685265046-3944bdc9a50d?w=500&h=400&fit=crop',
      title: 'Traditional Market',
      category: 'Culture'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
      title: 'Berber Village',
      category: 'Culture'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=400&fit=crop',
      title: 'Mountain Landscape',
      category: 'Mountains'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=400&fit=crop',
      title: 'Desert Camp',
      category: 'Desert'
    },
  ];

  return (
    <div className="gallery">
      <HeroSection
        title="Gallery"
        subtitle="Beautiful moments from Morocco captured in photos"
        backgroundImage="https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=1200&h=600&fit=crop"
      />

      <section className="gallery-section">
        <div className="gallery-container">
          <h2>Morocco in Pictures</h2>
          <p className="gallery-intro">
            Explore our collection of breathtaking photos from Morocco
          </p>

          <div className="gallery-grid">
            {galleryImages.map(image => (
              <div key={image.id} className="gallery-item">
                <SafeImage
                  src={image.src}
                  alt={image.title}
                  onClick={() => setSelectedImage(image)}
                  className="gallery-img"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
            <SafeImage src={selectedImage.src} alt={selectedImage.title} className="lightbox-img" />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <section className="gallery-cta">
        <div className="gallery-cta-inner">
          <h2>Share Your Morocco Memories</h2>
          <p>Have a great photo from your Morocco trip? We'd love to see it!</p>
          <a href="/contact" className="cta-btn">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
