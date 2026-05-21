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
import PolicySummary from '../components/PolicySummary';
import './Home.css';

const WHATSAPP_NUMBER = '972546338757';

function buildWhatsAppUrl(pkg, t) {
  const message = [
    t('whatsapp.greeting'),
    t('whatsapp.bookPackage'),
    ``,
    `${t('whatsapp.packageInfo')}${pkg.title}`,
    `${t('whatsapp.duration')}${pkg.duration}`,
    `${t('whatsapp.price')}${pkg.price}`,
    ``,
    t('whatsapp.bookingRequest')
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}


export default function Home() {
  const { t } = useLanguage();

  const [selectedPackage, setSelectedPackage] = React.useState(null);

  const featuredTours = [
    {
      id: "pkg1",
      image: '/assets/packs/pack1.jpeg',
      title: t('tours.pkg1.title') || "Fes Luxury Weekend Escape",
      duration: t('tours.pkg1.duration') || "3 Nights / 4 Days (Thursday → Sunday)",
      price: t('tours.pkg1.price') || "€790",
      highlights: [
        t('tours.pkg1.hl1_brief') || "Direct roundtrip flights included",
        t('tours.pkg1.hl2') || "4–5 star luxury hotels",
        t('tours.pkg1.hl3') || "Traditional Moroccan hammam",
        t('tours.pkg1.hl4') || "Cooking & art workshops"
      ],
      fullDetails: {
        subtitle: t('tours.pkg1.subtitle') || "All-Inclusive Package – From A to Z",
        flights: [
          t('tours.pkg1.flight1') || "Direct roundtrip flights",
          t('tours.pkg1.flight2') || "20kg checked luggage",
          t('tours.pkg1.flight3') || "Cabin luggage up to 8kg"
        ],
        included: [
          t('tours.pkg1.inc1') || "Airport pickup & transfer back",
          t('tours.pkg1.inc2') || "4–5 star hotels (Half board)",
          t('tours.pkg1.inc3') || "Fresh & authentic Moroccan cuisine",
          t('tours.pkg1.inc4') || "Traditional tea & pastries experience",
          t('tours.pkg1.inc5') || "Professional tour guide & Private driver",
          t('tours.pkg1.inc6') || "Modern air-conditioned transportation",
          t('tours.pkg1.inc7_brief') || "Special live performances",
          t('tours.pkg1.inc8_brief') || "Traditional market tours",
          t('tours.pkg1.inc9_brief') || "Cooking & Art workshops",
          t('tours.pkg1.inc11') || "Day trips to Chefchaouen & Ifrane",
          t('tours.pkg1.inc12') || "Visits with local Moroccan families"
        ]
      }
    },
    {
      id: "pkg2",
      image: '/assets/packs/pack2.jpeg',
      title: t('tours.pkg2.title') || "Morocco Luxury Discovery Tour",
      duration: t('tours.pkg2.duration') || "6 Nights / 7 Days (Monday → Sunday)",
      price: t('tours.pkg2.price') || "€1490",
      highlights: [
        t('tours.pkg2.hl1') || "Package A",
        t('tours.pkg2.hl2') || "6 Nights - 7 Days",
        t('tours.pkg2.hl3') || "Atlas Mouvements",
        t('tours.pkg2.hl4') || "Marakech- Essaouira - Merzouga - Ouarzazte - Marakech-",
        t('tours.pkg2.hl5') || "Big Surprise ❤️"
      ],
      fullDetails: {
        subtitle: t('tours.pkg2.subtitle') || "Fes & North Morocco Route (All Inclusive)",
        route: t('tours.pkg2.routeText') || "2 nights Fes, 1 night Chefchaouen, 1 night Tangier, 1 night Ifrane, 1 final night Fes",
        flights: [
          t('tours.pkg2.flight1') || "Direct roundtrip flights from Europe",
          t('tours.pkg2.flight2') || "20kg luggage + Cabin luggage"
        ],
        transportation: [
          t('tours.pkg2.trans1') || "Airport pickup & transfer",
          t('tours.pkg2.trans2') || "Private professional driver & tour guide"
        ],
        hotels: [
          t('tours.pkg2.hotel1') || "4–5 star hotels",
          t('tours.pkg2.hotel2') || "Premium locations"
        ],
        food: [
          t('tours.pkg2.food1') || "Half board",
          t('tours.pkg2.food2') || "Authentic cuisine",
          t('tours.pkg2.food3') || "Traditional tea & pastries"
        ],
        experiences: [
          t('tours.pkg2.exp1') || "Moroccan live performances",
          t('tours.pkg2.exp2_brief') || "Traditional markets",
          t('tours.pkg2.exp3') || "Traditional Moroccan hammam",
          t('tours.pkg2.exp4_brief') || "Nature visits"
        ]
      }
    },
    {
      id: "pkg4",
      image: '/assets/packs/pack4.jpeg',
      title: t('tours.pkg4.title') || "Morocco Imperial & Sahara Experience",
      duration: t('tours.pkg4.duration') || "13 Nights / 14 Days",
      price: t('tours.pkg4.price') || "All Inclusive",
      highlights: [
        t('tours.pkg4.hl1') || "2 Nights Merzouga Sahara Desert",
        t('tours.pkg4.hl2') || "Premium AC tents & Jeep excursions",
        t('tours.pkg4.hl3_brief') || "Visit Atlas Mountains",
        t('tours.pkg4.hl5') || "Full ground services from A to Z"
      ],
      fullDetails: {
        subtitle: t('tours.pkg4.subtitle') || "✨ Morocco Imperial & Sahara Experience (Full Ground Services)",
        sahara: [
          t('tours.pkg4.sahara1') || "Premium air-conditioned desert tents",
          t('tours.pkg4.sahara2') || "Campfire music atmosphere",
          t('tours.pkg4.sahara3_brief') || "Jeep excursions & Camel rides"
        ],
        included: [
          t('tours.pkg4.inc1') || "Full premium ground services",
          t('tours.pkg4.inc2_brief') || "4–5 star hotels",
          t('tours.pkg4.inc3_brief') || "Professional tour guide",
          t('tours.pkg4.inc4_brief') || "Special live performances",
          t('tours.pkg4.inc5_brief') || "Traditional markets"
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
           {/*  <div className="travel-card-badge">{pkg.price}</div> */}
          </div>
          <div className="tour-modal-content">
            <h2>{pkg.title}</h2>
            <p className="tour-modal-duration">⏱️ {pkg.duration}</p>
            {pkg.fullDetails.subtitle && <h4 className="details-subtitle">{pkg.fullDetails.subtitle}</h4>}
            <DetailList title={t('tours.flights') || "Flights:"} items={pkg.fullDetails.flights} />
            <DetailList title={t('tours.route') || "Route:"} items={pkg.fullDetails.route ? [pkg.fullDetails.route] : null} />
            <DetailList title={t('tours.whatsIncluded') || "Included:"} items={pkg.fullDetails.included} />
            <DetailList title={t('tours.specialSaharaExperience') || "Sahara Experience:"} items={pkg.fullDetails.sahara} />
            
            <div className="card-messages">
              <div className="message-box safety">
                <strong>{t('tours.safetyComfort') || "Safety & Comfort:"}</strong>
                <p>{t('tours.safetyTextBrief') || "Coordinated with Moroccan authorities for your safety."}</p>
              </div>
              <div className="message-box values">
                <strong>{t('tours.givesMoreBrief') || "Morocco Loves You:"}</strong>
                <p>{t('tours.givesMoreTextBrief') || "More love, care, and professionalism."}</p>
              </div>
            </div>

            <div className="tour-modal-actions">
              <a
                href={buildWhatsAppUrl(pkg, t)}
                target="_blank"
                rel="noopener noreferrer"
                className="tour-modal-book-btn"
              >
                {t('tours.bookNow') || "Book Now"}
              </a>
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
                 {/* <div className="travel-card-badge">{pkg.price}</div> */}
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
                      {t('tours.viewDetails') || "View Details"}
                    </button>
                    <a
                      href={buildWhatsAppUrl(pkg, t)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="travel-card-btn"
                    >
                      {t('tours.bookNow') || "Book Now"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/tours" className="view-all-btn">{t('home.viewAllTours')}</Link>
        </div>
      </section>

    

 {/* Video Experience Section */}
      <VideoSection />
      
 {/* Culinary Section — mimic BusSection */}
      <CulinarySection />
     

    
     
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
                alt={t('aria.worldCupAlt')}
              />
            </div>
          </div>
        </section>
      </div>


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

        {/* Policy Summary — white */}
          <PolicySummary />
    </div>
  );
}
