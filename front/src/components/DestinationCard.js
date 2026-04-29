import React from 'react';
import './DestinationCard.css';
import SafeImage from './SafeImage';

export default function DestinationCard({ image, title, description }) {
  return (
    <div className="destination-card">
      <div className="destination-image">
        <SafeImage src={image} alt={title} />
      </div>
      <div className="destination-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
}
