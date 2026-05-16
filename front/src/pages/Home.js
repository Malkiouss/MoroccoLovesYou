import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import TestimonialCard from '../components/TestimonialCard';
import GallerySection from '../components/GallerySection';
import VideoSection from '../components/VideoSection';
import BusSection from '../components/BusSection';
import CulinarySection from '../components/CulinarySection';
import JewishHeritageSection from '../components/JewishHeritageSection';
import './Home.css';


export default function Home() {
  const { t } = useLanguage();

  const [selectedPackage, setSelectedPackage] = React.useState(null);

  const featuredTours = [
    {
      id: "pkg1",
      image: '/assets/packs/pack1.jpeg',
      title: "Fes Luxury Weekend Escape",
      duration: "3 Nights / 4 Days (Thursday → Sunday)",
      price: "€790",
      highlights: [
        "Direct roundtrip flights included",
        "4–5 star luxury hotels",
        "Traditional Moroccan hammam",
        "Cooking & art workshops"
      ],
      fullDetails: {
        subtitle: "All-Inclusive Package – From A to Z",
        flights: ["Direct roundtrip flights", "20kg checked luggage", "Cabin luggage up to 8kg"],
        included: [
          "Airport pickup & transfer back",
          "4–5 star hotels (Half board)",
          "Fresh & authentic Moroccan cuisine",
          "Traditional tea & pastries experience",
          "Professional tour guide & Private driver",
          "Modern air-conditioned transportation",
          "Special live performances",
          "Traditional market tours",
          "Cooking & Art workshops",
          "Day trips to Chefchaouen & Ifrane",
          "Visits with local Moroccan families"
        ]
      }
    },
    {
      id: "pkg2",
      image: '/assets/packs/pack2.jpeg',
      title: "Morocco Luxury Discovery Tour",
      duration: "6 Nights / 7 Days (Monday → Sunday)",
      price: "€1490",
      highlights: [
        "Fes & North Morocco Route",
        "Chefchaouen & Tangier visits",
        "Direct flights & private driver",
        "Premium locations"
      ],
      fullDetails: {
        subtitle: "Fes & North Morocco Route (All Inclusive)",
        route: "2 nights Fes, 1 night Chefchaouen, 1 night Tangier, 1 night Ifrane, 1 final night Fes",
        flights: ["Direct roundtrip flights from Europe", "20kg luggage + Cabin luggage"],
        transportation: ["Airport pickup & transfer", "Private professional driver & tour guide"],
        hotels: ["4–5 star hotels", "Premium locations"],
        food: ["Half board", "Authentic cuisine", "Traditional tea & pastries"],
        experiences: ["Moroccan live performances", "Traditional markets", "Hammam", "Nature visits"]
      }
    },
    {
      id: "pkg4",
      image: '/assets/packs/pack4.jpeg',
      title: "Morocco Imperial & Sahara Experience",
      duration: "13 Nights / 14 Days",
      price: "All Inclusive",
      highlights: [
        "2 Nights Merzouga Sahara Desert",
        "Premium AC tents & Jeep excursions",
        "Visit Atlas Mountains",
        "Full ground services from A to Z"
      ],
      fullDetails: {
        subtitle: "✨ Morocco Imperial & Sahara Experience (Full Ground Services)",
        sahara: [
          "Premium air-conditioned desert tents",
          "Campfire music atmosphere",
          "Jeep excursions & Camel rides"
        ],
        included: [
          "Full premium ground services",
          "4–5 star hotels",
          "Professional tour guide",
          "Special live performances",
          "Traditional markets"
        ]
      }
    }
  ];

  // Helper component for the modal details
  const DetailList = ({ title, items }) => {
    if (!items) return null;
    return (
      <div className="details-section">
        <h5>{title}</h5>
        <ul className="details-list">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  };

  const TourModal = ({ pkg }) => {
    if (!pkg) return null;
    return (
      <div className="tour-modal-overlay" onClick={() => setSelectedPackage(null)}>
        <div className="tour-modal" onClick={e => e.stopPropagation()}>
          <button className="tour-modal-close" onClick={() => setSelectedPackage(null)}>×</button>
          <div className="tour-modal-image">
            <img src={pkg.image} alt={pkg.title} />
            <div className="travel-card-badge">{pkg.price}</div>
          </div>
          <div className="tour-modal-content">
            <h2>{pkg.title}</h2>
            <p className="tour-modal-duration">⏱️ {pkg.duration}</p>
            {pkg.fullDetails.subtitle && <h4 className="details-subtitle">{pkg.fullDetails.subtitle}</h4>}
            <DetailList title="Flights:" items={pkg.fullDetails.flights} />
            <DetailList title="Route:" items={pkg.fullDetails.route ? [pkg.fullDetails.route] : null} />
            <DetailList title="Included:" items={pkg.fullDetails.included} />
            <DetailList title="Sahara Experience:" items={pkg.fullDetails.sahara} />
            
            <div className="card-messages">
              <div className="message-box safety">
                <strong>Safety & Comfort:</strong>
                <p>Coordinated with Moroccan authorities for your safety.</p>
              </div>
              <div className="message-box values">
                <strong>Morocco Loves You:</strong>
                <p>More love, care, and professionalism.</p>
              </div>
            </div>

            <div className="tour-modal-actions">
              <button className="tour-modal-book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
      text: 'MoroccoLovesYou made my dream trip unforgettable! The guides were knowledgeable and the experiences were authentic.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      text: 'Best travel company ever! The attention to detail and customer service was exceptional. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
      text: 'From the Sahara to the medinas, every moment was magical. Thank you MoroccoLovesYou!',
      rating: 5
    },
  ];

  return (
    <div className="home">
      <HeroSection />

 {/* Video Experience Section */}
      <VideoSection />

     

      {/* White strip wraps the WC card — breaks up the two dark sections */}
      <div className="wc2030-strip">
        <section className="mly-wc2030-luxury-banner">
          <div className="mly-wc2030-pattern"></div>

          <div className="mly-wc2030-content">
            <div className="mly-wc2030-text">
              <span className="mly-wc2030-badge">{t('home.wcBadge')}</span>

              <h2>{t('home.wcTitle')}</h2>

              <p>{t('home.wcText')}</p>

              <Link to="/worldcup" className="mly-wc2030-btn">
                {t('home.wcBtn')}
              </Link>
            </div>

            <div className="mly-wc2030-visual">
              <img
                src="/assets/wordcup.png"
                alt="World Cup trophy with Moroccan flag"
              />
            </div>
          </div>
        </section>
      </div>

     
 {/* Premium Banner 1: VIP Morocco Travel Experiences */}
      <section className="premium-banner vip-banner">
        <div className="banner-content">
          <h2>{t('home.vipBannerTitle')}</h2>
          <p>{t('home.vipBannerText')}</p>
          <Link to="/vip" className="btn-primary">{t('home.vipBannerBtn')}</Link>
        </div>
      </section>
    
      {/* Gallery Section */}
      <GallerySection />

   
      {/* Featured Tours — white */}
      <section className="featured-tours">
        <div className="section-container">
          <h2>{t('home.featuredToursTitle')}</h2>
          <p className="section-subtitle">{t('home.featuredToursSubtitle')}</p>
          <div className="tours-grid">
            {featuredTours.map(pkg => (
              <div key={pkg.id} className="travel-card">
                <div className="travel-card-header">
                  <img src={pkg.image} alt={pkg.title} />
                  <div className="travel-card-badge">{pkg.price}</div>
                </div>
                <div className="travel-card-body">
                  <h3 className="travel-card-title">{pkg.title}</h3>
                  <p className="travel-card-duration">⏱️ {pkg.duration}</p>
                  <div className="travel-card-highlights">
                    <ul>
                      {pkg.highlights.map((hl, i) => <li key={i}>{hl}</li>)}
                    </ul>
                  </div>
                  <div className="card-footer-actions">
                    <button className="view-more-trigger" onClick={() => setSelectedPackage(pkg)}>
                      View Details
                    </button>
                    <button className="travel-card-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/tours" className="view-all-btn">{t('home.viewAllTours')}</Link>
        </div>
      </section>

      {/* Culinary Section — mimic BusSection */}
      <CulinarySection />

      {/* Jewish Heritage Section */}
      <JewishHeritageSection />

     

      {/* Bus Section */}
      <BusSection />

      {/* Testimonials — dark */}
      <section className="testimonials-preview">
        <div className="section-container">
          <h2>{t('home.testimonialsTitle')}</h2>
          <p className="section-subtitle">{t('home.testimonialsSubtitle')}</p>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <Link to="/testimonials" className="view-all-btn">{t('home.readMoreReviews')}</Link>
        </div>
      </section>
      <TourModal pkg={selectedPackage} />
    </div>
  );
}