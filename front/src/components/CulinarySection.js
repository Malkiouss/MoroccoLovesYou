import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { culinaryPhotos, culinaryVideos } from "../data/culinaryData";
import "./CulinarySection.css";

export default function CulinarySection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const featuredVideos = culinaryVideos.slice(0, 2);
  const LOGO_SRC = "/assets/vidlogo.png";

  const handleCardClick = () => {
    navigate("/experiences");
  };

  return (
    <section className="culinary-section">
      <div className="culinary-header">
        <h2>{t('home.culinaryTitle')}</h2>
        <p>{t('home.culinarySubtitle')}</p>
      </div>

      <div className="culinary-intro">
        <p>{t('home.culinaryIntro')}</p>
      </div>

      <div className="culinary-cards">
        {culinaryPhotos.slice(0, 3).map((photo) => (
          <div className="culinary-card" key={photo.id} onClick={handleCardClick}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      <div className="culinary-video-preview-header">
        <h3>
          {t('home.culinaryVideoTitle') || "Culinary Experience Videos"}
        </h3>
      </div>

      <div className="culinary-videos-preview">
        {featuredVideos.map((video) => (
          <div className="culinary-video-card-mini" key={video.id}>
            <div className="mini-video-watermark">
              <img src={LOGO_SRC} alt="Logo" />
            </div>
            <video 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="metadata"
              className="mini-video-player"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <Link to="/experiences" className="view-all-btn">
          {t('home.culinaryBtn')}
        </Link>
      </div>

      <div className="culinary-features">
        <span>Traditional Tagines</span>
        <span>Authentic Couscous</span>
        <span>Moroccan Pastries</span>
        <span>Tea Ceremonies</span>
        <span>Cooking Classes</span>
        <span>Local Spices</span>
        <span>Organic Ingredients</span>
        <span>Home-cooked Meals</span>
      </div>

      <div className="culinary-cta">
        <h3>{t('transportation.ctaTitle') || "Ready to Explore Moroccan Flavors?"}</h3>
        <p>{t('transportation.ctaSubtitle') || "Speak Directly With Allan – CEO & Founder"}</p>

        <div className="culinary-contact">
          <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer">
            WhatsApp: +972546338757
          </a>

          <a href="tel:+212663630579">Morocco Line: +212 6 63 63 05 79</a>
        </div>
      </div>
    </section>
  );
}
