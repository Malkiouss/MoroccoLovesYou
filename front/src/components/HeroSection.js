import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Car,
  Hotel,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import "./HeroSection.css";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* NAV */}
      <nav>
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
        <button className="nav-cta">
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

      {/* HERO */}
      <section className="hero">
  <div className="hero-bg" />
  <img src="../../assets/king.jpeg" alt="King Hassan III" className="mly-king-flag-photo" />
        <div className="hero-content">
          
          <span className="hero-star" aria-hidden="true">
            <Star />
          </span>
          
          <h1>
            <span className="line1">{t('hero.welcome')}</span>
            <span className="line2">{t('hero.welcomeHome')}</span>
          </h1>

          <p className="hero-sub">
            {t('hero.subtitle')}<br />
            {t('hero.subtitleLine2')}
          </p>
          <p className="hero-sub-gold">{t('hero.subtitleGold')}</p>

          <button className="wa-btn">
            <MessageCircle aria-hidden="true" />
            {t('hero.whatsappBtn')}
          </button>

          <div className="hero-badges">
            <span className="badge-item">{t('hero.badgeFast')}</span>
            <span className="badge-divider">|</span>
            <span className="badge-item">{t('hero.badgePersonal')}</span>
            <span className="badge-divider">|</span>
            <span className="badge-item">{t('hero.badge247')}</span>
          </div>

          <div className="hero-limited">
            <span>{t('hero.limitedAvail')}</span>
            <span className="dot">•</span>
            <span>{t('hero.personalizedOnly')}</span>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="footer-strip">
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><ShieldCheck /></span>
          <span className="strip-label">{t('strip.privateTours')}</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><MapPin /></span>
          <span className="strip-label">{t('strip.localExperts')}</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><Hotel /></span>
          <span className="strip-label">{t('strip.bestHotels')}</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><Car /></span>
          <span className="strip-label">{t('strip.luxuryTransport')}</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><Star /></span>
          <span className="strip-label">{t('strip.satisfaction')}</span>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bottom-bar">
        <div className="bottom-line" />
        <span className="bottom-star">★</span>
        <span className="bottom-url">MOROCCOLOVESYOU.COM</span>
        <span className="bottom-star">★</span>
        <div className="bottom-line" />
      </div>

      

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

            <button className="nav-cta mobile-menu-cta" type="button">
              <MessageCircle aria-hidden="true" />
              {t('nav.chatWhatsApp')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}