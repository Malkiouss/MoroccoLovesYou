import React from 'react';
import './TourCard.css';

export default function TourCard({ image, title, duration, price, highlights }) {
  return (
    <div className="tour-card">
      <div className="tour-image">
        <img src={image} alt={title} />
        <div className="tour-badge">${price}</div>
      </div>
      <div className="tour-content">
        <h3>{title}</h3>
        <p className="tour-duration">⏱️ {duration} Days</p>
        <div className="tour-highlights">
          <h4>Highlights:</h4>
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  );
}
