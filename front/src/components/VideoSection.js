import { useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "./VideoSection.css";

export default function VideoSection() {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const LOGO_SRC = "/assets/vidlogo.png";

  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  const togglePlay = async (e) => {
    // Prevent double triggering if button is clicked inside the wrapper
    e.stopPropagation();
    
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      if (finished) {
        video.currentTime = 0;
        setFinished(false);
      }
      try {
        await video.play();
      } catch (err) {
        console.error("Playback failed", err);
      }
    }
  };

  return (
    <section className="video-showcase" id="magic-morocco-video">
      <h2 className="video-title">{t('home.videoTitle')}</h2>

      <div className="video-wrapper" onClick={togglePlay}>
        {/* Logo watermark */}
        <div className="video-logo-overlay">
          <img src={LOGO_SRC} alt="Logo" className="video-logo" />
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
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {finished ? (
            <RotateCcw size={34} />
          ) : isPlaying ? (
            <Pause size={34} />
          ) : (
            <Play size={34} />
          )}
        </button>
      </div>
    </section>
  );
}