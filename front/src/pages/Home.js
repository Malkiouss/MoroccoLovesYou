import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TourCard from '../components/TourCard';
import TestimonialCard from '../components/TestimonialCard';
import GallerySection from '../components/GallerySection';
import './Home.css';


export default function Home() {


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
          <h2>VIP Morocco Travel Experiences</h2>
          <p>Exclusive access, private drivers, and luxury accommodations tailored for discerning travelers.</p>
          <Link to="/vip" className="btn-primary">Discover VIP Services</Link>
        </div>
      </section>

      {/* White strip wraps the WC card — breaks up the two dark sections */}
      <div className="wc2030-strip">
        <section className="mly-wc2030-luxury-banner">
          <div className="mly-wc2030-pattern"></div>

          <div className="mly-wc2030-content">
            <div className="mly-wc2030-text">
              <span className="mly-wc2030-badge">🇲🇦 Morocco World Cup 2030</span>

              <h2>Morocco 2030</h2>

              <p>
                Exclusive World Cup travel packages combining football, Moroccan culture,
                VIP hospitality, and luxury experiences.
              </p>

              <Link to="/worldcup" className="mly-wc2030-btn">
                View Packages
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
          <h2>Featured Tours & Packages</h2>
          <p className="section-subtitle">Carefully curated experiences for the perfect Moroccan adventure</p>
          <div className="tours-grid">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
          <Link to="/tours" className="view-all-btn">View All Tours</Link>
        </div>
      </section>

      {/* Experiences — warm off-white */}
      <section className="featured-experiences">
        <div className="section-container">
          <h2>Moroccan Culinary Excellence</h2>
          <p className="section-subtitle">Discover our food — the best in the world</p>
          <div className="experiences-preview">
            <Link to="/experiences" className="view-all-btn">Discover Food Experiences</Link>
          </div>
        </div>
      </section>

      {/* Testimonials — dark */}
      <section className="testimonials-preview">
        <div className="section-container">
          <h2>What Our VIP Guests Say</h2>
          <p className="section-subtitle">Real reviews from international travelers</p>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <Link to="/testimonials" className="view-all-btn">Read More Reviews</Link>
        </div>
      </section>
    </div>
  );
}