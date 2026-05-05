import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import { ArrowRight, Calendar, MapPin, Star, ShieldCheck, MessageCircle, Car } from 'lucide-react';
import './WorldCup.css';

export default function WorldCup() {
  const { t } = useLanguage();

  return (
    <div className="worldcup-page">
      <PageHeader
        title={t('worldcup.pageTitle')}
        subtitle={t('worldcup.pageSubtitle')}
        bgImage="https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=1600&q=80"
      />

      <section className="wc-intro">
        <div className="section-container">
          <div className="wc-intro-content">
            <span className="wc-badge">{t('worldcup.limitedBadge')}</span>
            <h2>{t('worldcup.introTitle')}</h2>
            <p>{t('worldcup.introText')}</p>
          </div>
        </div>
      </section>

      <section className="wc-packages">
        <div className="section-container">
          <h2>{t('worldcup.packagesTitle')}</h2>
          <div className="packages-grid">
            
            <div className="wc-package-card">
              <div className="package-header silver-pkg">
                <h3>{t('worldcup.silverTitle')}</h3>
                <p>{t('worldcup.silverSub')}</p>
              </div>
              <ul className="package-features">
                <li><MapPin size={18} /> {t('worldcup.silverF1')}</li>
                <li><Calendar size={18} /> {t('worldcup.silverF2')}</li>
                <li><Star size={18} /> {t('worldcup.silverF3')}</li>
                <li><ShieldCheck size={18} /> {t('worldcup.silverF4')}</li>
              </ul>
              <a href="https://wa.me/972546338757?text=I'm%20interested%20in%20the%20Silver%20World%20Cup%20Package" target="_blank" rel="noopener noreferrer" className="pkg-btn">
                {t('worldcup.inquireWhatsApp')} <ArrowRight size={16} />
              </a>
            </div>

            <div className="wc-package-card featured">
              <div className="package-header gold-pkg">
                <span className="popular-tag">{t('worldcup.mostPopular')}</span>
                <h3>{t('worldcup.goldTitle')}</h3>
                <p>{t('worldcup.goldSub')}</p>
              </div>
              <ul className="package-features">
                <li><MapPin size={18} /> {t('worldcup.goldF1')}</li>
                <li><Car size={18} /> {t('worldcup.goldF2')}</li>
                <li><Star size={18} /> {t('worldcup.goldF3')}</li>
                <li><ShieldCheck size={18} /> {t('worldcup.goldF4')}</li>
              </ul>
              <a href="https://wa.me/972546338757?text=I'm%20interested%20in%20the%20Gold%20World%20Cup%20Package" target="_blank" rel="noopener noreferrer" className="pkg-btn primary">
                {t('worldcup.inquireWhatsApp')} <ArrowRight size={16} />
              </a>
            </div>

            <div className="wc-package-card">
              <div className="package-header diamond-pkg">
                <h3>{t('worldcup.diamondTitle')}</h3>
                <p>{t('worldcup.diamondSub')}</p>
              </div>
              <ul className="package-features">
                <li><MapPin size={18} /> {t('worldcup.diamondF1')}</li>
                <li><Car size={18} /> {t('worldcup.diamondF2')}</li>
                <li><Star size={18} /> {t('worldcup.diamondF3')}</li>
                <li><ShieldCheck size={18} /> {t('worldcup.diamondF4')}</li>
              </ul>
              <a href="https://wa.me/972546338757?text=I'm%20interested%20in%20the%20Diamond%20World%20Cup%20VIP%20Package" target="_blank" rel="noopener noreferrer" className="pkg-btn">
                {t('worldcup.inquireWhatsApp')} <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="wc-cta">
        <div className="section-container">
          <div className="wc-cta-box">
            <h2>{t('worldcup.ctaTitle')}</h2>
            <p>{t('worldcup.ctaText')}</p>
            <a href="https://wa.me/972546338757?text=Hello,%20I%20want%20to%20secure%20my%20place%20for%20Morocco%202030." target="_blank" rel="noopener noreferrer" className="btn-large">
              <MessageCircle size={24} /> {t('worldcup.ctaBtn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
