import React, { useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { getVideoThumbnailUrl } from "../utils/imageUtils";
import "./CustomVideoPlayer.css";

export default function CustomVideoPlayer({ src, poster, className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finished, setFinished] = useState(false);

  const togglePlay = async (e) => {
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

  const activePoster = poster || getVideoThumbnailUrl(src);

  return (
    <div className={`custom-video-wrapper ${className}`} onClick={togglePlay}>
      

      <video
        ref={videoRef}
        className="custom-video-player"
        onEnded={() => {
          setIsPlaying(false);
          setFinished(true);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls={false}
        playsInline
        poster={activePoster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button 
        className={`custom-video-btn ${isPlaying ? "playing" : ""}`}
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
  );
}
