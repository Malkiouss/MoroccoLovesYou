import React from 'react';
import PageHeader from '../components/PageHeader';
import { Briefcase, Car, Building, ShieldCheck, Clock, MapPin } from 'lucide-react';
import './VIP.css';

export default function VIP() {
  const services = [
    {
      icon: <Car size={32} />,
      title: 'Luxury Transport',
      description: 'VIP airport transfers and private bilingual drivers available 24/7 with luxury vehicles (Mercedes S-Class, V-Class).'
    },
    {
      icon: <Building size={32} />,
      title: 'Premium Accommodations',
      description: 'Exclusive bookings at 5-star hotels, luxury riads, or private villas suited for executives and their teams.'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Business Concierge',
      description: 'Full meeting assistance, private dining reservations, and specialized itineraries for corporate retreats.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Security & Privacy',
      description: 'Discreet service, secure environments, and absolute confidentiality for high-profile individuals and celebrities.'
    },
    {
      icon: <Clock size={32} />,
      title: '24/7 Support',
      description: 'Direct contact with the CEO and a dedicated team ready to assist you at any time during your stay.'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Custom Itineraries',
      description: 'Tailored travel plans perfectly balancing your business obligations with premium Moroccan cultural experiences.'
    }
  ];

  return (
    <div className="vip-page">
      <PageHeader
        title="VIP & Business Travel"
        subtitle="Exclusive services for CEOs, investors, and discerning travelers"
        bgImage="https://images.unsplash.com/photo-1542442828-287217bfb87f?w=1600&q=80"
      />

      <section className="vip-intro">
        <div className="section-container">
          <div className="vip-intro-content">
            <h2>Seamless Excellence in Morocco</h2>
            <p>
              MoroccoLovesYou provides an unparalleled standard of service for business travelers, corporate delegations, and VIP guests. We understand that your time is valuable and your standards are uncompromising. From touchdown to departure, we handle every detail with precision, allowing you to focus on your business objectives while we deliver a flawless Moroccan experience.
            </p>
          </div>
        </div>
      </section>

      <section className="vip-services">
        <div className="section-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="vip-service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vip-cta">
        <div className="section-container">
          <div className="vip-cta-box">
            <h2>Direct Access to the CEO</h2>
            <p>For urgent inquiries and highly specialized requests, speak directly with our Founder & CEO, Ilan Hatchuel.</p>
            <a href="https://wa.me/972546338757?text=Hello%20Ilan,%20I%20am%20inquiring%20about%20VIP%20business%20travel%20services%20in%20Morocco." target="_blank" rel="noopener noreferrer" className="btn-primary">
              Contact Ilan Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
