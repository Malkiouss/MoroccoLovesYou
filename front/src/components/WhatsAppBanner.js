import React from 'react';
import './WhatsAppBanner.css';

const WhatsAppButton = () => {
  const phoneNumber = '972546338757'; // your number
  const message = 'Hello, I’m interested in a premium Morocco travel experience.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;