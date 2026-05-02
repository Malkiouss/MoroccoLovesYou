import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import './Gallery.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <SafeImage
              src={selectedImage.src}
              alt={selectedImage.title}
              className="lightbox-img"
            />

            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <span className="gallery-city">{selectedImage.city}</span>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
}