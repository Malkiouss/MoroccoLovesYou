import React from 'react';
import './StarBanner.css';

const WhatsAppIcon = () => (
  <svg
    className="whatsapp-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M23.5 8.5A10.44 10.44 0 0 0 16 5.5C10.75 5.5 6.5 9.75 6.5 15a9.44 9.44 0 0 0 1.27 4.77L6.5 26.5l6.93-1.82A9.5 9.5 0 0 0 16 25.5c5.25 0 9.5-4.25 9.5-9.5a9.44 9.44 0 0 0-2-6Z"
      fill="#25D366"
    />
    <path
      d="M23.5 8.5A10.44 10.44 0 0 0 16 5.5C10.75 5.5 6.5 9.75 6.5 15a9.44 9.44 0 0 0 1.27 4.77L6.5 26.5l6.93-1.82A9.5 9.5 0 0 0 16 25.5c5.25 0 9.5-4.25 9.5-9.5a9.44 9.44 0 0 0-2-6Z"
      stroke="white"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M21.3 18.1c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.17 0-.45.06-.68.3-.23.24-.9.88-.9 2.14s.92 2.48 1.05 2.65c.13.17 1.8 2.75 4.37 3.86.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.51-.62 1.72-1.21.21-.6.21-1.11.15-1.21-.07-.1-.26-.17-.56-.32Z"
      fill="white"
    />
  </svg>
);

const StarBanner = () => {
  const whatsappUrl = "https://wa.me/212600000000";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="star-float"
      aria-label="CEO of Morocco Loves You"
    >
      <img src="/assets/star.png" alt="Star" className="star-img" />

      <div className="star-overlay">
        <p className="star-title">
          <span className="star-icon">★</span> CEO MESSAGE <span className="star-icon">★</span>
        </p>
        <p className="star-sub">Watch my video<br />&amp; read my message</p>
        <div className="star-arrow">↕</div>
        <p className="star-cta">Get to know<br /><em>Ilan personally</em></p>
      </div>

      <div className="whatsapp-bar">
        <WhatsAppIcon />
        <span className="whatsapp-label">Chat on WhatsApp</span>
      </div>
    </a>
  );
};

export default StarBanner;