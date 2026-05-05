import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import { Briefcase, Car, Building, ShieldCheck, Clock, MapPin } from 'lucide-react';
import './VIP.css';

export default function VIP() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Car size={32} />,
      titleKey: 'vip.luxuryTransport',
      descKey: 'vip.luxuryTransportDesc'
    },
    {
      icon: <Building size={32} />,
      titleKey: 'vip.premiumAccom',
      descKey: 'vip.premiumAccomDesc'
    },
    {
      icon: <Briefcase size={32} />,
      titleKey: 'vip.businessConcierge',
      descKey: 'vip.businessConciergeDesc'
    },
    {
      icon: <ShieldCheck size={32} />,
      titleKey: 'vip.securityPrivacy',
      descKey: 'vip.securityPrivacyDesc'
    },
    {
      icon: <Clock size={32} />,
      titleKey: 'vip.support247',
      descKey: 'vip.support247Desc'
    },
    {
      icon: <MapPin size={32} />,
      titleKey: 'vip.customItineraries',
      descKey: 'vip.customItinerariesDesc'
    }
  ];

  return (
    <div className="vip-page">
      <PageHeader
        title={t('vip.pageTitle')}
        subtitle={t('vip.pageSubtitle')}
        bgImage="https://images.unsplash.com/photo-1542442828-287217bfb87f?w=1600&q=80"
      />

      <section className="vip-intro">
        <div className="section-container">
          <div className="vip-intro-content">
            <h2>{t('vip.introTitle')}</h2>
            <p>{t('vip.introText')}</p>
          </div>
        </div>
      </section>

      <section className="vip-services">
        <div className="section-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="vip-service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vip-cta">
        <div className="section-container">
          <div className="vip-cta-box">
            <h2>{t('vip.ctaTitle')}</h2>
            <p>{t('vip.ctaText')}</p>
            <a href="https://wa.me/972546338757?text=Hello%20Ilan,%20I%20am%20inquiring%20about%20VIP%20business%20travel%20services%20in%20Morocco." target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t('vip.ctaBtn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
