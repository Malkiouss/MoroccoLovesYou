import React from 'react';
import './HeroSection.css';

export default function HeroSection({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="hero-btn">
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
}
