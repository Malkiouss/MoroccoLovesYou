import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/assets/images/logoMorocco1.png" alt="MoroccoLovesYou Logo" style={{ height: '180px', width: 'auto', alignItems:'left',marginBottom: '15px' }} />
          <p>{t('footer.description')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.quickLinks')}</h4>
          <ul>
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/destinations">{t('nav.destinations')}</Link></li>
            <li><Link to="/tours">{t('nav.tours')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.more')}</h4>
          <ul>
            <li><Link to="/gallery">{t('nav.gallery')}</Link></li>
            <li><Link to="/testimonials">{t('nav.testimonials')}</Link></li>
            <li><Link to="/blog">{t('nav.blog')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
            <li><Link to="/service-policy">{t('servicePolicy.meta.footerLink') || "Service Policy"}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contactInfo')}</h4>
          <p>📍 53 Muhammad V , Fes</p>
          <p>📧 I.H.Tradein@gmail.com</p>
          <p>📞 +972 54-633-8757</p>
          <div className="social-links">
            <a href="#facebook" target="_blank" rel="noopener noreferrer">f</a>
            <a href="#twitter" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a href="#instagram" target="_blank" rel="noopener noreferrer">📷</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
