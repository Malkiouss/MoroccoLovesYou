import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Menu, MessageCircle, Star, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './PageHeader.css';

export default function PageHeader({ title, subtitle, bgImage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
 const heroStyle = bgImage
  ? {
      backgroundImage: `linear-gradient(rgba(13,31,23,0.8), rgba(13,31,23,0.13)), url("${bgImage}")`,
      backgroundSize: 'fill',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#0d1f17',
    }
  : {};
  return (
    <>
      {/* NAV */}
      <nav className="page-nav">
        <div className="navbar-brand-group">
          
          <Link to="/" className="logo">
            <img src="/assets/images/logoMorocco.png" alt="Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/tours">{t('nav.tours')}</Link>
          <Link to="/destinations">{t('nav.destinations')}</Link>
          <Link to="/experiences">{t('nav.experiences')}</Link>
          <Link to="/jewish-heritage">{t('nav.jewishHeritage')}</Link>
          <Link to="/vip">{t('nav.vip')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </div>
        <button className="nav-cta" onClick={() => window.open('https://wa.me/972546338757?text=' + encodeURIComponent(t('cta.whatsappInquiry')), '_blank')}>
          <MessageCircle aria-hidden="true" />
          {t('nav.chatWhatsApp')}
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
              <div className="mobile-menu-title">{t('nav.menu')}</div>
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
              <Link to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
              <Link to="/tours" onClick={() => setIsMenuOpen(false)}>{t('nav.tours')}</Link>
              <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>{t('nav.destinations')}</Link>
              <Link to="/experiences" onClick={() => setIsMenuOpen(false)}>{t('nav.experiences')}</Link>
              <Link to="/jewish-heritage" onClick={() => setIsMenuOpen(false)}>{t('nav.jewishHeritage')}</Link>
              <Link to="/vip" onClick={() => setIsMenuOpen(false)}>{t('nav.vipFull')}</Link>
              <Link to="/worldcup" onClick={() => setIsMenuOpen(false)}>{t('nav.worldcup')}</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>{t('nav.gallery')}</Link>
              <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>{t('nav.testimonials')}</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
            </div>

            <button className="nav-cta mobile-menu-cta" type="button" onClick={() => window.open('https://wa.me/972546338757', '_blank')}>
              <MessageCircle aria-hidden="true" />
              {t('nav.chatWhatsApp')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
