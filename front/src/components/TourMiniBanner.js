import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Play, Pause, RotateCcw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getWatermarkedVideoUrl, getVideoThumbnailUrl } from '../utils/imageUtils';
import "./TourMiniBanner.css";

const TourMiniBanner = () => {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const videoRef = useRef(null);
  const videoSrc = "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778161943/WhatsApp_Video_2026-05-05_at_11.04.21_jbcjin.mp4";
  const VIDEO_THUMB = getVideoThumbnailUrl(videoSrc);

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
        {/* ── Simplified Kosher Link ── */}
        <Link
          to="/jewish-heritage"
          className="kosher-simple-banner"
          aria-label="Kosher Travel Morocco"
        >
        
        </Link>

        {/* ── Video Thumbnail Badge ── */}
        <button 
          onClick={handleOpenVideo} 
          className="tour-mini-video-badge"
          aria-label="Watch Magic Morocco Video"
        >
          <div className="video-badge-thumb" style={{ backgroundImage: `url("${VIDEO_THUMB}")` }}>
            <div className="video-badge-overlay">
               <Play size={24} fill="currentColor" />
            </div>
            <div className="video-badge-label">
              <span>{t('tourMini.recommendations')}</span>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </button>
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
                  poster={VIDEO_THUMB}
                >
                  <source src={getWatermarkedVideoUrl(videoSrc)} type="video/mp4" />
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