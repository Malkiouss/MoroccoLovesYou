import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  /*const teamMembers = [
    { id: 1, name: 'Fatima Hassan', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', bio: 'Travel enthusiast with 15+ years of experience in Morocco tourism.' },
    { id: 2, name: 'Ahmed Bennani', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', bio: 'Expert in creating unforgettable travel experiences for diverse groups.' },
    { id: 3, name: 'Layla Rahim', role: 'Customer Experience Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', bio: 'Dedicated to ensuring every guest has a magical Moroccan journey.' },
    { id: 4, name: 'Youssef Alaoui', role: 'Lead Tour Guide', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', bio: 'Passionate storyteller sharing the rich history and culture of Morocco.' },
  ];*/

  return (
    <div className="about">
      <PageHeader title={t('about.pageTitle')} subtitle={t('about.pageSubtitle')} bgImage="https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=600&fit=crop" />
      <section className="company-story">
        <div className="story-container">
          <div className="story-content">
            <h2>{t('about.storyTitle')}</h2>
            <p>{t('about.storyP1')}</p>
            <p>{t('about.storyP2')}</p>
          </div>
          <div className="story-image">
            <SafeImage src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop" alt="Morocco landscape" />
          </div>
        </div>
      </section>
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-card"><h3>{t('about.missionTitle')}</h3><p>{t('about.missionText')}</p></div>
          <div className="vision-card"><h3>{t('about.visionTitle')}</h3><p>{t('about.visionText')}</p></div>
        </div>
      </section>
      <section className="why-choose">
        <div className="why-container">
          <h2>{t('about.whyTitle')}</h2>
          <div className="features-grid">
            <div className="feature-card"><div className="feature-icon">🏆</div><h3>{t('about.expertTitle')}</h3><p>{t('about.expertText')}</p></div>
            <div className="feature-card"><div className="feature-icon">🤝</div><h3>{t('about.localTitle')}</h3><p>{t('about.localText')}</p></div>
            <div className="feature-card"><div className="feature-icon">💰</div><h3>{t('about.valueTitle')}</h3><p>{t('about.valueText')}</p></div>
            <div className="feature-card"><div className="feature-icon">🛡️</div><h3>{t('about.safetyTitle')}</h3><p>{t('about.safetyText')}</p></div>
            <div className="feature-card"><div className="feature-icon">🌍</div><h3>{t('about.sustainTitle')}</h3><p>{t('about.sustainText')}</p></div>
            <div className="feature-card"><div className="feature-icon">📱</div><h3>{t('about.bookingTitle')}</h3><p>{t('about.bookingText')}</p></div>
          </div>
        </div>
      </section>
      
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item"><h3>5000+</h3><p>{t('about.happyTravelers')}</p></div>
          <div className="stat-item"><h3>15+</h3><p>{t('about.yearsExp')}</p></div>
          <div className="stat-item"><h3>25+</h3><p>{t('about.destinationsCount')}</p></div>
          <div className="stat-item"><h3>98%</h3><p>{t('about.satisfactionRate')}</p></div>
        </div>
      </section>
    </div>
  );
}
