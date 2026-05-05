import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './WhatsAppBanner.css';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = '972546338757'; // your number
  const message = t('cta.whatsappInquiry');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label={t('cta.whatsappFloating')}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;