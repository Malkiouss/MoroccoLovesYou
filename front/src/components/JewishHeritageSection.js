import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './JewishHeritageSection.css';

export default function JewishHeritageSection() {
  const { t } = useLanguage();

  const inclusions = [
    t('jewishHeritage.experiencesList.0'),
    t('jewishHeritage.experiencesList.1'),
    t('jewishHeritage.experiencesList.2'),
    t('jewishHeritage.experiencesList.3'),
    t('jewishHeritage.experiencesList.4'),
    t('jewishHeritage.experiencesList.5'),
    t('jewishHeritage.experiencesList.6'),
  ];

  return (
    <section className="jewish-heritage-section">
      <div className="heritage-container">
        <div className="heritage-grid">
          <div className="heritage-content">
            <div className="heritage-badge">
              <span className="star-jew">✡</span> {t('jewishHeritage.introTitle')}
            </div>
            <h2>{t('jewishHeritage.pageTitle')}</h2>
            <p className="heritage-subtitle">{t('jewishHeritage.pageSubtitle')}</p>
            
            <div className="heritage-features-grid">
              {inclusions.map((item, index) => (
                <div key={index} className="feature-item">
                  <span className="check-mark">✓</span> {item}
                </div>
              ))}
            </div>

            <div className="heritage-actions">
              <Link to="/jewish-heritage" className="heritage-btn-primary">
                {t('jewishHeritage.exploreBtn')}
              </Link>
              <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer" className="heritage-btn-whatsapp">
                {t('starBanner.ilanPersonally')} on WhatsApp
              </a>
            </div>
          </div>

          <div className="heritage-visual">
            <div className="image-stack">
              <div className="main-img-wrapper">
                <img 
                  src="/assets/kosher/kosher (1).png" 
                  alt="Jewish Heritage Morocco" 
                  className="main-img"
                />
              </div>
              <div className="side-img-wrapper">
                <img 
                  src="/assets/kosher/kosher (2).png" 
                  alt="Kosher Food Morocco" 
                  className="side-img"
                />
              </div>
              <div className="third-img-wrapper">
                <img 
                  src="/assets/kosher/kosher (3).png" 
                  alt="Jewish Heritage Experience" 
                  className="third-img"
                />
              </div>
            </div>
            <div className="heritage-quote">
              <p>"{t('jewishHeritage.introText')}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
