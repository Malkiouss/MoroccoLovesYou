import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🌍 MoroccoLovesYou</h3>
          <p>Discover the magic of Morocco with us. Experience unforgettable adventures and create lasting memories.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/tours">Tours & Packages</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>More</h4>
          <ul>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Marrakech, Morocco</p>
          <p>📧 info@moroccolovesyou.com</p>
          <p>📞 +212 5 24 43 77 77</p>
          <div className="social-links">
            <a href="#facebook" target="_blank" rel="noopener noreferrer">f</a>
            <a href="#twitter" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a href="#instagram" target="_blank" rel="noopener noreferrer">📷</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MoroccoLovesYou. All rights reserved.</p>
      </div>
    </footer>
  );
}
