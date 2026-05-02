import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import { galleryCities } from '../data/galleryCities';
import './CityDetailPage.css';

export default function CityDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const city = galleryCities.find(c => c.slug === slug);

  const waLink = `https://wa.me/?text=I'd like to plan a trip to ${city?.name}. Can you help me?`;

  if (!city) {
    return (
      <div className="city-not-found">
        <h1>City not found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

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
            {city.galleryImages.map((image, index) => (
              <div key={index} className="city-gallery-item">
                <SafeImage
                  src={image}
                  alt={`${city.name} - ${index + 1}`}
                  className="city-gallery-img"
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