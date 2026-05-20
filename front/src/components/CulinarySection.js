import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { culinaryPhotos, culinaryVideos } from "../data/culinaryData";
import { getWatermarkedVideoUrl } from "../utils/imageUtils";
import CustomVideoPlayer from "./CustomVideoPlayer";
import "./CulinarySection.css";

export default function CulinarySection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const featuredVideos = culinaryVideos.slice(0, 2);

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
            <CustomVideoPlayer src={getWatermarkedVideoUrl(video.src, undefined, 'c_fill,w_700,h_400')} />
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <Link to="/experiences" className="view-all-btn">
          {t('home.culinaryBtn')}
        </Link>
      </div>

      <div className="culinary-features">
        {(t('home.culinaryFeatures') || []).map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>

      <div className="culinary-cta">
        <h3>{t('transportation.ctaTitle') || "Ready to Explore Moroccan Flavors?"}</h3>
        <p>{t('transportation.ctaSubtitle') || "Speak Directly With Allan – CEO & Founder"}</p>

        <div className="culinary-contact">
          <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer">
            {t('transportation.whatsapp')}
          </a>

          <a href="tel:+212663630579">{t('transportation.moroccoLine')}</a>
        </div>
      </div>
    </section>
  );
}
