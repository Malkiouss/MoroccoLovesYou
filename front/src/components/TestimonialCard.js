import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './TestimonialCard.css';
import SafeImage from './SafeImage';

export default function TestimonialCard({ name, image, text, rating }) {
  const { t } = useLanguage();

  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {'⭐'.repeat(rating)}
      </div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <SafeImage src={image} alt={name} className="author-image" />
        <div className="author-info">
          <h4>{name}</h4>
          <p>{t('testimonials.verifiedGuest')}</p>
        </div>
      </div>
    </div>
  );
}
