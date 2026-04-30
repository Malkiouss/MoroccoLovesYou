import React from 'react';
import PageHeader from '../components/PageHeader';
import TourCard from '../components/TourCard';
import './Tours.css';

export default function Tours() {
  const allTours = [
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
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      title: 'Imperial Cities',
      duration: 8,
      price: 1499,
      highlights: ['Rabat', 'Meknes', 'Fes', 'Marrakech', 'Historic Sites']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      title: 'Desert Explorer',
      duration: 4,
      price: 799,
      highlights: ['Ouarzazate', 'Merzouga', 'Kasbahs', '4x4 Adventure']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      title: 'Photography Tour',
      duration: 6,
      price: 1449,
      highlights: ['Best Photo Spots', 'Professional Guide', 'Golden Hour Shoots', 'Local Subjects', 'Photo Workshops']
    },
  ];

  return (
    <div className="tours">
      <PageHeader
        title="Tours & Packages"
        subtitle="Choose from our carefully curated Morocco tour packages"
        bgImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop"
      />

      <section className="tours-section">
        <div className="tours-container">
          <h2>Our Tour Packages</h2>
          <p className="tours-intro">
            From desert adventures to coastal escapes, we have the perfect package for every traveler
          </p>
          <div className="tours-grid">
            {allTours.map(tour => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="booking-info">
        <div className="booking-container">
          <h2>How to Book</h2>
          <div className="booking-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose a Tour</h3>
              <p>Browse our packages and select the one that suits you best</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Click Book Now</h3>
              <p>Click the "Book Now" button on your chosen tour</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Fill Details</h3>
              <p>Provide your travel dates and personal information</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Confirmation</h3>
              <p>Receive confirmation and itinerary details via email</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-inner">
          <h2>Need a Custom Package?</h2>
          <p>Contact us to create a personalized Morocco tour experience</p>
          <a href="/contact" className="contact-button">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
