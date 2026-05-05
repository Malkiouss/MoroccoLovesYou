import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import TourCard from '../components/TourCard';
import TestimonialCard from '../components/TestimonialCard';
import GallerySection from '../components/GallerySection';
import './Home.css';


export default function Home() {
  const { t } = useLanguage();

  const featuredTours = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      title: 'Classic Morocco Experience',
      duration: 7,
      price: 1299,
      highlights: ['Marrakech', 'Sahara Desert', 'Atlas Mountains', 'Camel Trekking']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      title: 'Coastal Escape',
      duration: 5,
      price: 899,
      highlights: ['Essaouira', 'Casablanca', 'Beach Relaxation', 'Fresh Seafood']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      title: 'Mountain Adventure',
      duration: 6,
      price: 1199,
      highlights: ['Atlas Hiking', 'Berber Villages', 'Mountain Views', 'Local Cuisine']
    },
  ];

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

      {/* Premium Banner 1: VIP Morocco Travel Experiences */}
      <section className="premium-banner vip-banner">
        <div className="banner-content">
          <h2>{t('home.vipBannerTitle')}</h2>
          <p>{t('home.vipBannerText')}</p>
          <Link to="/vip" className="btn-primary">{t('home.vipBannerBtn')}</Link>
        </div>
      </section>

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

     

    
      {/* Gallery Section */}
      <GallerySection />

   
      {/* Featured Tours — white */}
      <section className="featured-tours">
        <div className="section-container">
          <h2>{t('home.featuredToursTitle')}</h2>
          <p className="section-subtitle">{t('home.featuredToursSubtitle')}</p>
          <div className="tours-grid">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
          <Link to="/tours" className="view-all-btn">{t('home.viewAllTours')}</Link>
        </div>
      </section>

      {/* Experiences — warm off-white */}
      <section className="featured-experiences">
        <div className="section-container">
          <h2>{t('home.culinaryTitle')}</h2>
          <p className="section-subtitle">{t('home.culinarySubtitle')}</p>
          <div className="experiences-preview">
            <Link to="/experiences" className="view-all-btn">{t('home.culinaryBtn')}</Link>
          </div>
        </div>
      </section>

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
    </div>
  );
}