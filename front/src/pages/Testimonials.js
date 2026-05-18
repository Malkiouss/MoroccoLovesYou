import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useLanguage();

  const allTestimonials = [
    { id: 1, name: 'Sarah Johnson', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', text: 'MoroccoLovesYou made my dream trip unforgettable! The guides were knowledgeable and the experiences were authentic. I felt like a local, not a tourist.', rating: 5 },
    { id: 2, name: 'Michael Chen', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', text: 'Best travel company ever! The attention to detail and customer service was exceptional. Every aspect of our trip was perfectly planned.', rating: 5 },
    { id: 3, name: 'Emma Wilson', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', text: 'From the Sahara to the medinas, every moment was magical. Thank you MoroccoLovesYou for creating such amazing memories!', rating: 5 },
    { id: 4, name: 'James Rodriguez', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', text: 'Incredible value for money. The tours were well-organized and our guide Ahmed was fantastic. Highly recommend!', rating: 5 },
    { id: 5, name: 'Anna Mueller', image: 'https://images.unsplash.com/photo-1502685106110-e5b8468a4e0f?w=100&h=100&fit=crop', text: 'A truly transformative experience. The cultural immersion and hospitality exceeded all my expectations. Cannot wait to return!', rating: 5 },
    { id: 6, name: 'David Thompson', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', text: 'Perfect balance of adventure and relaxation. The desert camp experience was out of this world. Professional and caring team.', rating: 5 },
    { id: 7, name: 'Lisa Anderson', image: 'https://images.unsplash.com/photo-1507072957990-185f270e64b2?w=100&h=100&fit=crop', text: 'Felt like we were traveling with friends. The guides shared incredible stories and made us feel welcome everywhere we went.', rating: 5 },
    { id: 8, name: 'Marcus Smith', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', text: 'Absolutely phenomenal service from start to finish. The itinerary was perfect and the guides were both knowledgeable and fun!', rating: 5 },
    { id: 9, name: 'Sophie Laurent', image: 'https://images.unsplash.com/photo-1517046220202-51c2fdc5d660?w=100&h=100&fit=crop', text: 'Morocco is beautiful and MoroccoLovesYou knows exactly how to showcase it. Will definitely book again!', rating: 5 },
  ];

  return (
    <div className="testimonials-page">
      <PageHeader
        title={t('testimonials.pageTitle')}
        subtitle={t('testimonials.pageSubtitle')}
        bgImage="/assets/images/testements.jpeg"
      />

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2>{t('testimonials.sectionTitle')}</h2>
          <p className="testimonials-intro">{t('testimonials.sectionIntro')}</p>
          <div className="testimonials-grid">
            {allTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="rating-stats">
        <div className="rating-container">
          <h2>{t('testimonials.ratingsTitle')}</h2>
          <div className="rating-cards">
            <div className="rating-card">
              <h3>4.9 / 5</h3>
              <p>{t('testimonials.avgRating')}</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="rating-card">
              <h3>5000+</h3>
              <p>{t('testimonials.verifiedReviews')}</p>
              <p className="small">{t('testimonials.fromReal')}</p>
            </div>
            <div className="rating-card">
              <h3>98%</h3>
              <p>{t('testimonials.custSatisfaction')}</p>
              <p className="small">{t('testimonials.wouldRecommend')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="share-experience">
        <div className="share-container">
          <h2>{t('testimonials.shareTitle')}</h2>
          <p>{t('testimonials.shareText')}</p>
          <a href="/contact" className="share-btn">{t('testimonials.shareBtn')}</a>
        </div>
      </section>
    </div>
  );
}
