import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import { getWatermarkedVideoUrl, getVideoThumbnailUrl } from '../utils/imageUtils';
import './JewishHeritage.css';

export default function JewishHeritage() {
  const { t } = useLanguage();
  const [lightboxVideo, setLightboxVideo] = useState(null);

  const experiences = [
    { title: t('jewishHeritage.expFood') || "100% Kosher Food", icon: "🍷" },
    { title: t('jewishHeritage.expRestaurant') || "Kosher Restaurant", icon: "🍽️" },
    { title: t('jewishHeritage.expChef') || "Private Kosher Chef Available", icon: "👨‍🍳" },
    { title: t('jewishHeritage.expCuisine') || "Traditional Moroccan Jewish Cuisine", icon: "🍲" },
    { title: t('jewishHeritage.expHotels') || "Luxury Hotels 4 & 5 Stars", icon: "🏨" },
    { title: t('jewishHeritage.expDeluxeHotels') || "Deluxe Hotels Available Upon Request", icon: "✨" },
    { title: t('jewishHeritage.expTransport') || "Private VIP Transportation", icon: "🚘" },
    { title: t('jewishHeritage.expDrivers') || "Professional Drivers", icon: "👤" },
    { title: t('jewishHeritage.expAC') || "Air-Conditioned Vehicles", icon: "❄️" },
    { title: t('jewishHeritage.expWifi') || "WiFi, TV & Refrigerators In Selected Vehicles", icon: "📡" },
    { title: t('jewishHeritage.expGuides') || "Multilingual Professional Guides", icon: "🗣️" },
    { title: t('jewishHeritage.expStaff') || "Hebrew / English / French / Spanish / Russian / German Speaking Staff", icon: "🌍" },
    { title: t('jewishHeritage.expHeritage') || "Jewish Heritage Tours", icon: "📜" },
    { title: t('jewishHeritage.expSynagogues') || "Ancient Synagogues", icon: "✡" },
    { title: t('jewishHeritage.expCemeteries') || "Jewish Cemeteries", icon: "🪦" },
    { title: t('jewishHeritage.expMuseums') || "Jewish Museums", icon: "🖼️" },
    { title: t('jewishHeritage.expSpiritual') || "Spiritual & Cultural Experiences", icon: "🧘" },
    { title: t('jewishHeritage.expDesert') || "Sahara Desert Experiences", icon: "🐪" },
    { title: t('jewishHeritage.expHammam') || "Moroccan Hammam Experiences", icon: "🧖" },
    { title: t('jewishHeritage.expAttractions') || "Unique Attractions Across Morocco", icon: "🏰" },
    { title: t('jewishHeritage.expAssistance') || "24/7 Assistance", icon: "☎️" }
  ];

  const packages = [
    t('jewishHeritage.package4_5') || "4–5 Days",
    t('jewishHeritage.package7_8') || "7–8 Days",
    t('jewishHeritage.package10_11') || "10–11 Days",
    t('jewishHeritage.package13_14') || "13–14 Days",
    t('jewishHeritage.package21') || "21 Days",
    t('jewishHeritage.packageTailor') || "Tailor-Made Private Tours"
  ];

  const videos = [
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778531935/WhatsApp_Video_2026-05-10_at_18.36.21_gjj2sq.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778798738/WhatsApp_Video_2026-05-14_at_23.22.38_azcie5.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778798799/WhatsApp_Video_2026-05-14_at_23.25.50_t2mcnh.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778798810/WhatsApp_Video_2026-05-14_at_23.23.11_sfzyfe.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778798849/WhatsApp_Video_2026-05-14_at_23.14.05_hbw57y.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778798882/WhatsApp_Video_2026-05-14_at_23.22.26_hnn1yn.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799040/WhatsApp_Video_2026-05-14_at_23.24.40_cwpszg.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778798970/WhatsApp_Video_2026-05-14_at_23.15.23_uy1mpr.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799030/WhatsApp_Video_2026-05-14_at_23.25.21_uatm79.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799056/WhatsApp_Video_2026-05-14_at_23.18.48_sznlb7.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799215/WhatsApp_Video_2026-05-14_at_23.28.00_g4nzxx.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799245/WhatsApp_Video_2026-05-14_at_23.21.50_wnpegs.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799318/WhatsApp_Video_2026-05-14_at_23.19.54_jgynzi.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799332/WhatsApp_Video_2026-05-14_at_23.18.16_csjkrt.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799495/WhatsApp_Video_2026-05-14_at_23.20.59_cgqwiy.mp4",
    "https://res.cloudinary.com/dylxqjhjj/video/upload/v1778799522/WhatsApp_Video_2026-05-14_at_23.17.23_rjczk6.mp4"
  ];

  return (
    <div className="jewish-heritage-page">
      <PageHeader
        title={t('jewishHeritage.pageTitle')}
        subtitle={t('jewishHeritage.pageSubtitle')}
        bgImage="/assets/images/kosher.jpeg"
      />

      <section className="heritage-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="kicker">{t('jewishHeritage.introTitle')}</span>
              <h2>{t('jewishHeritage.introHeading') || "Discover Authentic Jewish Morocco"}</h2>
              <p>{t('jewishHeritage.introText')}</p>
              <div className="intro-quote">
                <p>{t('jewishHeritage.introQuote') || `"Morocco is a land of tolerance and coexistence, where Jewish heritage is preserved with love and respect."`}</p>
              </div>
            </div>
            <div className="intro-image">
              <img src="/assets/kosher/kosher (5).png" alt="Jewish Heritage Architecture" />
            </div>
          </div>
        </div>
      </section>

      <section className="kosher-experiences">
        <div className="container">
          <div className="section-header">
            <h2>{t('jewishHeritage.experiencesTitle')}</h2>
            <div className="header-line"></div>
          </div>
          <div className="experiences-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card">
                <span className="exp-icon">{exp.icon}</span>
                <h3>{exp.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flexible-packages">
        <div className="container">
          <div className="packages-card">
            <div className="packages-content">
              <h2>{t('jewishHeritage.packagesTitle')}</h2>
              <p className="packages-intro">{t('jewishHeritage.packagesIntro')}</p>
              <div className="options-grid">
                {packages.map((opt, index) => (
                  <div key={index} className="opt-item">
                    <span className="opt-bullet">✡</span> {opt}
                  </div>
                ))}
              </div>
              <p className="packages-note">{t('jewishHeritage.packagesQuote') || `“We customize every trip according to the needs, traditions, travel style, dates, and expectations of our guests.”`}</p>
            </div>
            <div className="packages-image">
              <img src="/assets/kosher/kosher (6).png" alt="Kosher Moroccan Table" />
            </div>
          </div>
        </div>
      </section>

      <section className="safety-section">
        <div className="container">
          <div className="safety-box">
            <div className="safety-icon">🛡️</div>
            <h2>{t('jewishHeritage.safetyTitle')}</h2>
            <p>{t('jewishHeritage.safetyQuote') || `“Our tours operate with high attention to comfort, organization, service quality, and professional coordination across Morocco.”`}</p>
          </div>
        </div>
      </section>

      <section className="b2b-section">
        <div className="container">
          <div className="b2b-grid">
            <div className="b2b-image">
              <img src="/assets/kosher/kosher (7).png" alt="Luxury Hospitality" />
            </div>
            <div className="b2b-content">
              <h2>{t('jewishHeritage.b2bTitle')}</h2>
              <p>{t('jewishHeritage.b2bText')}</p>
              <p>{t('jewishHeritage.b2bPartnersList') || "We work with: Jewish communities, Synagogues, Rabbis, Jewish organizations, Kosher tour operators, and Travel agencies worldwide."}</p>
              <Link to="/contact" className="b2b-btn">{t('jewishHeritage.partnerBtn') || "Partner With Us"}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="heritage-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('jewishHeritage.galleryTitle') || "Kosher Experience Gallery"}</h2>
            <div className="header-line"></div>
          </div>
          <div className="heritage-gallery-grid">
            {Array.from({ length: 23 }, (_, i) => i + 8).map(num => (
              <div key={num} className="gallery-item">
                <img src={`/assets/kosher/kosher (${num}).png`} alt={`Kosher Experience ${num}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="heritage-videos-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('jewishHeritage.videosTitle') || "Featured Videos"}</h2>
            <div className="header-line"></div>
          </div>
          <div className="videos-grid">
            {videos.map((vid, idx) => (
              <div key={idx} className="video-card" onClick={() => setLightboxVideo(vid)}>
                <div className="video-card-overlay"></div>
                <CustomVideoPlayer src={getWatermarkedVideoUrl(vid)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="heritage-cta">
        <div className="container">
          <div className="cta-card">
            <h2>{t('jewishHeritage.ctaTitle') || "Ready to Begin Your Journey?"}</h2>
            <p>{t('jewishHeritage.ceoContact')}</p>
            <div className="cta-buttons">
              <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer" className="btn-whatsapp">
                {t('jewishHeritage.msgAllan') || "Message Allan on WhatsApp"}
              </a>
              <a href="tel:+212663630579" className="btn-phone">
                {t('jewishHeritage.callMorocco') || "Call Morocco: +212 6 63 63 05 79"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxVideo && (
        <div className="video-lightbox" onClick={() => setLightboxVideo(null)}>
          <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-lightbox-close" onClick={() => setLightboxVideo(null)}>×</button>
            <video 
              src={getWatermarkedVideoUrl(lightboxVideo)} 
              controls 
              autoPlay 
              playsInline 
              className="lightbox-video"
              poster={getVideoThumbnailUrl(lightboxVideo)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
