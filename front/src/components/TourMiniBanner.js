import React, { useState, useRef } from "react";
import { X, Play, Pause, RotateCcw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "./TourMiniBanner.css";

const TourMiniBanner = () => {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const videoRef = useRef(null);
  const whatsappUrl = "https://wa.me/972546338757";
  const VIDEO_THUMB = "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778161943/WhatsApp_Video_2026-05-05_at_11.04.21_jbcjin.jpg";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleOpenVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(true);
    setFinished(false);
    // Use a timeout to ensure the ref is available after render
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoOpen(false);
    setIsPlaying(false);
  };

  return (
    <>
      <div className="tour-mini-float">

        {/* ── Video Thumbnail Badge ── */}
        <button 
          onClick={handleOpenVideo} 
          className="tour-mini-video-badge"
          aria-label="Watch Magic Morocco Video"
        >
          <div className="video-badge-thumb" style={{ backgroundImage: `url(${VIDEO_THUMB})` }}>
            <div className="video-badge-overlay">
              <Play size={24} fill="currentColor" />
            </div>
            <div className="video-badge-label">
              <span>{t('tourMini.recommendations')}</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </button>

        {/* ── Clickable card ── */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tour-mini-card"
          aria-label="Premium Morocco Tour WhatsApp"
        >
          {/* ── Top red section ── */}
          <div className="tour-mini-top">
            <h3>{t('tourMini.days')}</h3>
            <h3>{t('tourMini.nights')}</h3>
            <p className="tour-mini-title">
              {t('tourMini.title').split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
              ))}
            </p>
          </div>

          {/* ── Green date band ── */}
          <div className="tour-mini-date">
            <span>{t('tourMini.years')}</span>
            <small>{t('tourMini.departures')}</small>
          </div>

          {/* ── Dark bottom section ── */}
          <div className="tour-mini-bottom">
            <div className="tour-mini-flag" aria-hidden="true">
              <span className="flag-star">★</span>
            </div>
            <p className="tour-mini-included">
              {t('tourMini.allIncluded').split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
              ))}
            </p>
          </div>
        </a>
      </div>

      {/* ── Video Lightbox Overlay ── */}
      {isVideoOpen && (
        <div className="video-lightbox-overlay" onClick={handleCloseVideo}>
          <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-lightbox-close" onClick={handleCloseVideo}>
              <X size={32} />
            </button>
            
            <section className="video-showcase lightbox-video" id="magic-morocco-video">
              <h2 className="video-title">{t('home.videoTitle')}</h2>

              <div className="video-wrapper" onClick={togglePlay}>
                <div className="video-logo-overlay">
                  <img src="/assets/vidlogo.png" alt="Logo" className="video-logo" />
                </div>
                <video
                  ref={videoRef}
                  className="video-player"
                  onEnded={() => {
                    setIsPlaying(false);
                    setFinished(true);
                  }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  controls={false}
                  playsInline
                >
                  <source src="https://res.cloudinary.com/dylxqjhjj/video/upload/v1778161943/WhatsApp_Video_2026-05-05_at_11.04.21_jbcjin.mp4" type="video/mp4" />
                </video>

                <button 
                  className={`video-btn ${isPlaying ? "playing" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {finished ? (
                    <RotateCcw size={34} />
                  ) : isPlaying ? (
                    <Pause size={34} />
                  ) : (
                    <Play size={34} fill="currentColor" />
                  )}
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default TourMiniBanner;