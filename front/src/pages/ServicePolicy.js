import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Building2, FileWarning, HeartPulse, Plane, ShieldCheck, Utensils, WalletCards } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import { servicePolicyIntro, servicePolicyMeta, servicePolicySections } from '../data/servicePolicy';
import './ServicePolicy.css';

const icons = [BadgeCheck, Building2, Plane, HeartPulse, Utensils, ShieldCheck, WalletCards, BadgeCheck, FileWarning, Building2];

export default function ServicePolicy() {
  const { t } = useLanguage();
  const metaCopy = t('servicePolicy.meta') || servicePolicyMeta;
  const introCopy = t('servicePolicy.intro') || servicePolicyIntro;
  const sectionsCopy = t('servicePolicy.sections') || servicePolicySections;

  useEffect(() => {
    document.title = metaCopy.seoTitle || servicePolicyMeta.seoTitle;

    const description = metaCopy.metaDescription || servicePolicyMeta.metaDescription;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [metaCopy]);

  return (
    <main className="service-policy-page">
      <PageHeader
        title={metaCopy.title}
        subtitle={metaCopy.subtitle}
        bgImage="/assets/images/aboutus.jpeg"
      />

      <section className="policy-intro-section">
        <div className="policy-container">
          <div className="policy-intro-card">
            <span className="policy-eyebrow">{metaCopy.eyebrow}</span>
            {introCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="policy-sections">
        <div className="policy-container">
          <div className="policy-section-heading">
            <h2>{metaCopy.commitmentsTitle}</h2>
            <p>{metaCopy.commitmentsText}</p>
          </div>

          <div className="policy-grid">
            {sectionsCopy.map((section, index) => {
              const Icon = icons[index] || ShieldCheck;
              return (
                <article className="policy-card" key={section.title}>
                  <div className="policy-card-icon" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <span className="policy-card-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="policy-final-cta">
        <div className="policy-container">
          <div className="policy-cta-box">
            <div>
              <p className="policy-eyebrow">{metaCopy.ctaEyebrow}</p>
              <h2>{metaCopy.ctaTitle}</h2>
              <p>{metaCopy.ctaText}</p>
            </div>
            <Link to="/contact" className="policy-contact-btn">{metaCopy.ctaButton}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
