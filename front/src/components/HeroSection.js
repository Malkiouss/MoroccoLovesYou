import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { FALLBACK_IMAGE, normalizeImageUrl } from '../utils/imageUtils';

export default function HeroSection({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
  const [heroBackground, setHeroBackground] = useState(FALLBACK_IMAGE);

  useEffect(() => {
    const resolvedBackground = normalizeImageUrl(backgroundImage);
    const image = new Image();
    image.onload = () => setHeroBackground(resolvedBackground);
    image.onerror = () => setHeroBackground(FALLBACK_IMAGE);
    image.src = resolvedBackground;
  }, [backgroundImage]);

  return (
    <div className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
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
