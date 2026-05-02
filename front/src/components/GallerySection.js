import React from 'react';
import GalleryCard from './GalleryCard';
import { galleryCities } from '../data/galleryCities';
import '../pages/Home.css'; // Use existing Home.css styles

export default function GallerySection() {
  return (
    <section className="gallery-showcase">
      <div className="section-container">
        <h2>Gallery</h2>
        <p className="section-subtitle">
          A glimpse into your future Moroccan journey
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
