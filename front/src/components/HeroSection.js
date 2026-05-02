import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Car,
  Hotel,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

import "./HeroSection.css";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav>
        <Link to="/" className="logo">
          <img src="/assets/images/logoMorocco.png" alt="Logo" />
        </Link>
        <div className="nav-links">
         <Link to="/">Home</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/vip">VIP Business</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="nav-cta">
          <MessageCircle aria-hidden="true" />
          Chat on WhatsApp
        </button>
        <button
          type="button"
          className="nav-menu-btn"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ background: 'linear-gradient(to bottom, rgba(30,15,5,0.35) 0%, rgba(20, 10, 3, 0.15) 50%, rgba(10,25,18,0.85) 100%), url("/assets/images/hero-img4.png") center/cover no-repeat' }} />
        <div className="hero-content">
          <span className="hero-star" aria-hidden="true">
            <Star />
          </span>
          <h1>
            <span className="line1">Welcome to Morocco.</span>
            <span className="line2">Welcome Home.</span>
          </h1>
          <p className="hero-sub">
            Private luxury tours, authentic experiences,<br />
            and full personal service across Morocco —
          </p>
          <p className="hero-sub-gold">personally handled by the CEO.</p>

          <button className="wa-btn">
            <MessageCircle aria-hidden="true" />
            Chat with Ilan (CEO) Now on WhatsApp
          </button>

          <div className="hero-badges">
            <span className="badge-item">Fast response</span>
            <span className="badge-divider">|</span>
            <span className="badge-item">Personal service</span>
            <span className="badge-divider">|</span>
            <span className="badge-item">24/7 availability</span>
          </div>

          <div className="hero-limited">
            <span>Limited availability</span>
            <span className="dot">•</span>
            <span>Personalized trips only</span>
          </div>

          
        </div>
      </section>

      {/* WORLD CUP BANNER */}
      

      {/* FOOTER STRIP */}
      <div className="footer-strip">
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><ShieldCheck /></span>
          <span className="strip-label">Private Tours</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><MapPin /></span>
          <span className="strip-label">Local Experts</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><Hotel /></span>
          <span className="strip-label">Best Hotels</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><Car /></span>
          <span className="strip-label">Luxury Transport</span>
        </div>
        <div className="strip-item">
          <span className="strip-icon" aria-hidden="true"><Star /></span>
          <span className="strip-label">100% Satisfaction</span>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bottom-bar">
        <div className="bottom-line" />
        <span className="bottom-star">★</span>
        <span className="bottom-url">MOROCCOLOVESYOU.COM</span>
        <span className="bottom-star">★</span>
        <div className="bottom-line" />
      </div>

      

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-top">
              <div className="mobile-menu-title">Menu</div>
              <button
                type="button"
                className="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X aria-hidden="true" />
              </button>
            </div>

            <div className="mobile-links">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/tours" onClick={() => setIsMenuOpen(false)}>Tours</Link>
              <Link to="/destinations" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
              <Link to="/experiences" onClick={() => setIsMenuOpen(false)}>Experiences</Link>
              <Link to="/vip" onClick={() => setIsMenuOpen(false)}>VIP Business Travel</Link>
              <Link to="/worldcup" onClick={() => setIsMenuOpen(false)}>World Cup 2030</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>

            <button className="nav-cta mobile-menu-cta" type="button">
              <MessageCircle aria-hidden="true" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}