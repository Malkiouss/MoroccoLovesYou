import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand-group">
          <Link to="/" className="navbar-logo">
             <img src="/assets/images/logoMorocco.png" alt={t('aria.logoAlt')} />
          </Link>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Desktop Navigation Menu (Preserved clean design) */}
        <ul className="nav-menu desktop-only">
          <li className="nav-item">
            <Link to="/" className="nav-link">{t('nav.home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/destinations" className="nav-link">{t('nav.destinations')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/tours" className="nav-link">{t('nav.tours')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">{t('nav.gallery')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link">{t('nav.testimonials')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">{t('nav.blog')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-btn">{t('nav.contact')}</Link>
          </li>
        </ul>

        {/* Mobile Navigation Menu (Exact User-Requested Order & Content) */}
        <ul className={`nav-menu mobile-only ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.about')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/tours" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.tours')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.testimonials')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/experiences" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.experiences')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/destinations" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.destinations')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/jewish-heritage" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.jewishHeritage') || "Kosher Travel"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/vip" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.vipFull') || "VIP Business Travel"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.gallery')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/worldcup" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.worldcup') || "World Cup 2030"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.careers')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-btn" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
