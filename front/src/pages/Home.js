import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import DestinationCard from '../components/DestinationCard';
import TourCard from '../components/TourCard';
import TestimonialCard from '../components/TestimonialCard';
import './Home.css';


export default function Home() {
  const featuredDestinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=400&h=300&fit=crop',
      title: 'Marrakech',
      description: 'Explore the vibrant markets, stunning palaces, and the beautiful Jemaa el-Fnaa square.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1532336414038-446546efb0fd?w=400&h=300&fit=crop',
      title: 'Chefchaouen',
      description: 'Experience the enchanting blue-painted streets and the serene mountain atmosphere.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518552666983-3a60fbe5f0fa?w=400&h=300&fit=crop',
      title: 'Sahara Desert',
      description: 'Adventure into the endless golden dunes and experience the magic of desert nights.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1509316366560-61e0ba8cdd03?w=400&h=300&fit=crop',
      title: 'Fes',
      description: 'Wander through the ancient medinas and immerse yourself in Moroccan culture and history.'
    },
  ];

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

      {/* Premium Banner 2: World Cup 2030 */}
{/* Luxury World Cup 2030 Banner */}
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


      {/* WhatsApp CTA Section */}
      <section className="wa-cta-section">
        <div className="wa-cta-content">
          <h2>Talk Directly to the CEO</h2>
          <p>No middlemen. Get a personalized itinerary from Ilan Hatchuel.</p>
          <a href="https://wa.me/972546338757?text=Hello,%20I%E2%80%99m%20interested%20in%20a%20premium%20Morocco%20travel%20experience." target="_blank" rel="noopener noreferrer" className="wa-btn-large">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="video-showcase">
        <div className="section-container">
          <h2>Discover the Magic</h2>
          <p className="section-subtitle">A glimpse into your future Moroccan journey</p>
          <div className="video-grid">
            {[1, 2, 3].map((v) => (
              <div key={v} className="video-card">
                <div className="video-placeholder">
                  <span>Video {v} Placeholder</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previews linking to main pages */}
      <section className="featured-destinations">
        <div className="section-container">
          <h2>Top Destinations</h2>
          <p className="section-subtitle">Explore Morocco's most enchanting destinations</p>
          <div className="destinations-grid">
            {featuredDestinations.map(destination => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
          <Link to="/destinations" className="view-all-btn">View All Destinations</Link>
        </div>
      </section>

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
      
      <section className="featured-experiences">
        <div className="section-container">
          <h2>Exclusive Experiences</h2>
          <p className="section-subtitle">From desert camps to private yachts</p>
          <div className="experiences-preview">
            <Link to="/experiences" className="view-all-btn">Discover Experiences</Link>
          </div>
        </div>
      </section>

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