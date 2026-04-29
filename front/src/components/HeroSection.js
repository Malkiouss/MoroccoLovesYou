import React, { useEffect, useState, useRef } from 'react';
import './HeroSection.css';
import { FALLBACK_IMAGE, normalizeImageUrl } from '../utils/imageUtils';

export default function HeroSection({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
  const [heroBackground, setHeroBackground] = useState(FALLBACK_IMAGE);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const resolvedBackground = normalizeImageUrl(backgroundImage);
    const image = new Image();
    image.onload = () => {
      setHeroBackground(resolvedBackground);
      setTimeout(() => setLoaded(true), 50);
    };
    image.onerror = () => {
      setHeroBackground(FALLBACK_IMAGE);
      setLoaded(true);
    };
    image.src = resolvedBackground;
  }, [backgroundImage]);

  // Subtle parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 18;
      const y = (clientY / height - 0.5) * 10;
      hero.style.setProperty('--parallax-x', `${x}px`);
      hero.style.setProperty('--parallax-y', `${y}px`);
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className={`hero ${loaded ? 'hero--loaded' : ''}`}
      style={{ '--bg-image': `url(${heroBackground})` }}
    >
      {/* Layered background with parallax */}
      <div className="hero-bg" />

      {/* Gradient overlay — dark navy vignette */}
      <div className="hero-overlay" />

      {/* Decorative geometric accents */}
      <div className="hero-accent hero-accent--tl" aria-hidden="true" />
      <div className="hero-accent hero-accent--br" aria-hidden="true" />

      {/* Animated grain texture */}
      <div className="hero-grain" aria-hidden="true" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow" aria-hidden="true">
          <span className="hero-eyebrow__line" />
          <span className="hero-eyebrow__dot" />
          <span className="hero-eyebrow__line" />
        </div>

        <h1 className="hero-title">
          {title?.split(' ').map((word, i) => (
            <span key={i} className="hero-title__word" style={{ '--word-index': i }}>
              {word}{' '}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">{subtitle}</p>

        {ctaText && ctaLink && (
          <a href={ctaLink} className="hero-btn">
            <span className="hero-btn__text">{ctaText}</span>
            <span className="hero-btn__icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="hero-btn__shine" />
          </a>
        )}

        {/* Scroll indicator */}
        <div className="hero-scroll" aria-label="Scroll down">
          <span className="hero-scroll__bar" />
        </div>
      </div>
    </div>
  );
}