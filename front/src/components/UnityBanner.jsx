import React from 'react';
import './UnityBanner.css';

export default function UnityBanner() {
  return (
    <div className="unity-banner">
      <div className="unity-container">
        <div className="unity-image-wrapper">
          <img 
            src="/assets/unitybar.png" 
            alt="Morocco Loves You Unity Banner" 
            className="unity-banner-img" 
          />
        </div>
        <div className="unity-quote">
          "Morocco Loves You accueille toutes les cultures, toutes les croyances et tous les peuples."
        </div>
      </div>
    </div>
  );
}
