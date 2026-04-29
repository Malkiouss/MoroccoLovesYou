import React from 'react';
import './TestimonialCard.css';
import SafeImage from './SafeImage';

export default function TestimonialCard({ name, image, text, rating }) {
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
          <p>Verified Guest</p>
        </div>
      </div>
    </div>
  );
}
