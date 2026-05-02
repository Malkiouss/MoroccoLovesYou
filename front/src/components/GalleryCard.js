import React from 'react';
import { useNavigate } from 'react-router-dom';
import SafeImage from './SafeImage';

export default function GalleryCard({ city }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/gallery/${city.slug}`);
  };

  return (
    <div className="gallery-card" onClick={handleClick}>
      <SafeImage
        src={city.coverImage}
        alt={city.name}
        className="gallery-card-img"
      />
      <div className="gallery-card-overlay">
        <h3>{city.name}</h3>
        <p>Explore destination</p>
      </div>
    </div>
  );
}
