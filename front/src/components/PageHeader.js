import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, MessageCircle, Star, X } from 'lucide-react';
import './PageHeader.css';

export default function PageHeader({ title, subtitle, bgImage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroStyle = bgImage ? { backgroundImage: `linear-gradient(rgba(13,31,23,0.8), rgba(13,31,23,0.9)), url(${bgImage})` } : {};

  return (
    <>
      {/* NAV */}
      <nav className="page-nav">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="logo-top">Morocco</span>
            <div className="logo-heart">
              Loves <Heart className="icon" aria-hidden="true" /> You
            </div>
            <div className="logo-sub"><span className="logo-star">★</span></div>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/vip">VIP Business</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="nav-cta" onClick={() => window.open('https://wa.me/972546338757?text=Hello,%20I’m%20interested%20in%20a%20premium%20Morocco%20travel%20experience.', '_blank')}>
          <MessageCircle aria-hidden="true" />
          Chat on WhatsApp
        </button>
        <button
          type="button"
          className="nav-menu-btn"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </nav>

      <section className="page-header" style={heroStyle}>
        <div className="page-header-content">
          <span className="hero-star" aria-hidden="true"><Star /></span>
          <h1>{title}</h1>
          {subtitle && <p className="page-header-sub">{subtitle}</p>}
        </div>
      </section>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-top">
              <div className="mobile-menu-title">Menu</div>
              <button
                type="button"
                className="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X aria-hidden="true" />
              </button>
            </div>

            <div className="mobile-links">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/tours" onClick={() => setIsMenuOpen(false)}>Tours</Link>
              <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
              <Link to="/experiences" onClick={() => setIsMenuOpen(false)}>Experiences</Link>
              <Link to="/vip" onClick={() => setIsMenuOpen(false)}>VIP Business Travel</Link>
              <Link to="/worldcup" onClick={() => setIsMenuOpen(false)}>World Cup 2030</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>

            <button className="nav-cta mobile-menu-cta" type="button" onClick={() => window.open('https://wa.me/972546338757', '_blank')}>
              <MessageCircle aria-hidden="true" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}
