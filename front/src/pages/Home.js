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
      <HeroSection
        title="Discover the Beauty of Morocco"
        subtitle="Experience authentic adventures with MoroccoLovesYou - Your gateway to unforgettable memories"
        backgroundImage="https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=1200&h=600&fit=crop"
        ctaText="Explore Tours"
        ctaLink="/tours"
      />

      {/* Featured Destinations */}
      <section className="featured-destinations">
        <div className="section-container">
          <h2>Popular Destinations</h2>
          <p className="section-subtitle">Explore Morocco's most enchanting destinations</p>
          <div className="destinations-grid">
            {featuredDestinations.map(destination => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
          <Link to="/destinations" className="view-all-btn">View All Destinations</Link>
        </div>
      </section>

      {/* Featured Tours */}
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

      {/* Testimonials Preview */}
      <section className="testimonials-preview">
        <div className="section-container">
          <h2>What Our Guests Say</h2>
          <p className="section-subtitle">Real reviews from real travelers</p>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <Link to="/testimonials" className="view-all-btn">Read More Reviews</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Moroccan Adventure?</h2>
          <p>Book your trip today and create memories that will last a lifetime!</p>
          <Link to="/contact" className="cta-btn">Plan Your Journey</Link>
        </div>
      </section>
    </div>
  );
}
