import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { busPhotos } from "../data/busPhotos";
import { busVideos } from "../data/busVideos";
import { getWatermarkedVideoUrl } from '../utils/imageUtils';
import CustomVideoPlayer from "./CustomVideoPlayer";
import "./BusSection.css";

export default function BusSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const displayPhotos = busPhotos.slice(0, 3);
  const featuredVideos = busVideos.slice(0, 2);

  const handleCardClick = () => {
    navigate("/transportation");
  };

  return (
    <section className="bus-section">
      <div className="bus-header">
        <h2>{t('home.transportTitle')}</h2>
        <p>{t('home.transportSubtitle')}</p>
      </div>

      <div className="bus-intro">
        <p>{t('home.transportIntro')}</p>
      </div>

      <div className="bus-cards">
        {displayPhotos.map((photo) => (
          <div className="bus-card" key={photo.id} onClick={handleCardClick}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      <div className="bus-video-preview-header">
        <h3>
          {t('transportation.videoGalleryTitle') || "VIP Experience Videos"}
        </h3>
      </div>

      <div className="bus-videos-preview">
        {featuredVideos.map((video) => (
          <div className="bus-video-card-mini" key={video.id}>
            <CustomVideoPlayer src={getWatermarkedVideoUrl(video.src, undefined, 'c_fill,w_700,h_400')} />
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <Link to="/transportation" className="view-all-btn">
          {t('home.viewAllTransport')}
        </Link>
      </div>

      <div className="bus-features">
        {(t('transportation.featureList') || []).map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>

      <div className="bus-cta">
        <h3>{t('transportation.ctaTitle')}</h3>
        <p>{t('transportation.ctaSubtitle')}</p>

        <div className="bus-contact">
          <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer">
            {t('transportation.whatsapp')}
          </a>

          <a href="tel:+212663630579">{t('transportation.moroccoLine')}</a>
        </div>
      </div>
    </section>
  );
}
