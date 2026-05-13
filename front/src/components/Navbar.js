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
          <div className="royal-portrait">
            <svg className="royal-crown-icon" viewBox="0 0 24 24" fill="#C9A227" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
            <div className="royal-portrait-frame">
              <img src="/assets/king.jpeg" alt="King Hassan III" />
            </div>
            <span className="royal-portrait-text">Kingdom of Morocco</span>
          </div>
          <Link to="/" className="navbar-logo">
             <img src="/assets/images/logoMorocco.png" alt="MoroccoLovesYou Logo" />
          </Link>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.about')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/destinations" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.destinations')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/tours" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.tours')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.gallery')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.testimonials')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>{t('nav.blog')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-btn" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
