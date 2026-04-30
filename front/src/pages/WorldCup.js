import React from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowRight, Calendar, MapPin, Star, ShieldCheck, MessageCircle, Car } from 'lucide-react';
import './WorldCup.css';

export default function WorldCup() {
  return (
    <div className="worldcup-page">
      <PageHeader
        title="Morocco 2030 World Cup"
        subtitle="Exclusive VIP Packages & Travel Experiences for the Biggest Football Event"
        bgImage="https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=1600&q=80"
      />

      <section className="wc-intro">
        <div className="section-container">
          <div className="wc-intro-content">
            <span className="wc-badge">Limited Availability</span>
            <h2>The Ultimate Football Journey</h2>
            <p>
              In 2030, Morocco will co-host the FIFA World Cup, bringing the world’s most prestigious sporting event to North Africa. MoroccoLovesYou is proud to offer exclusive, all-inclusive luxury travel packages designed for fans who demand the absolute best in comfort, access, and experience.
            </p>
          </div>
        </div>
      </section>

      <section className="wc-packages">
        <div className="section-container">
          <h2>Premium World Cup Packages</h2>
          <div className="packages-grid">
            
            <div className="wc-package-card">
              <div className="package-header silver-pkg">
                <h3>Silver Package</h3>
                <p>The Essential Experience</p>
              </div>
              <ul className="package-features">
                <li><MapPin size={18} /> Premium Riad / 4-Star Hotel Accommodation</li>
                <li><Calendar size={18} /> Pre-planned Match Day Logistics</li>
                <li><Star size={18} /> Guided City Tours (Host Cities)</li>
                <li><ShieldCheck size={18} /> 24/7 Dedicated Support Line</li>
              </ul>
              <a href="https://wa.me/972546338757?text=I'm%20interested%20in%20the%20Silver%20World%20Cup%20Package" target="_blank" rel="noopener noreferrer" className="pkg-btn">
                Inquire via WhatsApp <ArrowRight size={16} />
              </a>
            </div>

            <div className="wc-package-card featured">
              <div className="package-header gold-pkg">
                <span className="popular-tag">Most Popular</span>
                <h3>Gold Package</h3>
                <p>The Luxury Experience</p>
              </div>
              <ul className="package-features">
                <li><MapPin size={18} /> 5-Star Hotel / Luxury Villa Accommodation</li>
                <li><Car size={18} /> Private Airport & Match Transfers</li>
                <li><Star size={18} /> VIP Desert Camp Getaway (2 Days)</li>
                <li><ShieldCheck size={18} /> Personal Bilingual Concierge</li>
              </ul>
              <a href="https://wa.me/972546338757?text=I'm%20interested%20in%20the%20Gold%20World%20Cup%20Package" target="_blank" rel="noopener noreferrer" className="pkg-btn primary">
                Inquire via WhatsApp <ArrowRight size={16} />
              </a>
            </div>

            <div className="wc-package-card">
              <div className="package-header diamond-pkg">
                <h3>Diamond VIP</h3>
                <p>The Ultimate Experience</p>
              </div>
              <ul className="package-features">
                <li><MapPin size={18} /> Presidential Suites / Private Palaces</li>
                <li><Car size={18} /> 24/7 Private Chauffeur & Security</li>
                <li><Star size={18} /> Exclusive Access to VIP Events & Parties</li>
                <li><ShieldCheck size={18} /> Direct CEO Handling & VVIP Concierge</li>
              </ul>
              <a href="https://wa.me/972546338757?text=I'm%20interested%20in%20the%20Diamond%20World%20Cup%20VIP%20Package" target="_blank" rel="noopener noreferrer" className="pkg-btn">
                Inquire via WhatsApp <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="wc-cta">
        <div className="section-container">
          <div className="wc-cta-box">
            <h2>Secure Your Place Before Prices Rise</h2>
            <p>Due to extremely high international demand, we highly recommend securing your VIP package early. Accommodations in host cities will sell out.</p>
            <a href="https://wa.me/972546338757?text=Hello,%20I%20want%20to%20secure%20my%20place%20for%20Morocco%202030." target="_blank" rel="noopener noreferrer" className="btn-large">
              <MessageCircle size={24} /> Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Temporary component since lucide-react doesn't have a Car icon imported above. I'll import it correctly inside the component file.
