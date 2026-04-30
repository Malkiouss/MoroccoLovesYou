import React from 'react';
import PageHeader from '../components/PageHeader';
import DestinationCard from '../components/DestinationCard';
import './Destinations.css';

export default function Destinations() {
  const allDestinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=400&h=300&fit=crop',
      title: 'Marrakech',
      description: 'Experience the vibrant markets, stunning palaces like Bahia Palace, and the lively Jemaa el-Fnaa square with its street performers and traditional foods.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1532336414038-446546efb0fd?w=400&h=300&fit=crop',
      title: 'Chefchaouen',
      description: 'Explore the enchanting blue-painted streets nestled in the Rif Mountains. This serene mountain town is famous for its blue architecture and peaceful atmosphere.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518552666983-3a60fbe5f0fa?w=400&h=300&fit=crop',
      title: 'Sahara Desert',
      description: 'Adventure into the endless golden dunes of the Sahara. Enjoy camel trekking, desert camps, and magical starry nights under the open sky.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1509316366560-61e0ba8cdd03?w=400&h=300&fit=crop',
      title: 'Fes',
      description: 'Wander through the ancient medinas of Fes, home to traditional tanneries, souks, and centuries of Moroccan history and culture.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      title: 'Atlas Mountains',
      description: 'Trek through stunning mountain landscapes, visit Berber villages, and experience authentic mountain hospitality and cuisine.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a36c3f7?w=400&h=300&fit=crop',
      title: 'Essaouira',
      description: 'Relax at the coastal city of Essaouira with its beautiful beaches, fresh seafood, and charming blue and white architecture.'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1503478211867-145a0caf9e25?w=400&h=300&fit=crop',
      title: 'Casablanca',
      description: 'Morocco\'s modern metropolis featuring the magnificent Hassan II Mosque, beautiful beaches, and vibrant contemporary culture.'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
      title: 'Tatooine Landscape',
      description: 'Visit the dramatic desert landscapes that served as Star Wars filming locations. Experience otherworldly rock formations and desert beauty.'
    },
  ];

  return (
    <div className="destinations">
      <PageHeader
        title="Explore Morocco's Destinations"
        subtitle="Discover incredible places to visit across beautiful Morocco"
        bgImage="https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=1200&h=600&fit=crop"
      />

      <section className="destinations-section">
        <div className="destinations-container">
          <h2>All Destinations</h2>
          <p className="destinations-intro">
            Morocco is a country of diverse landscapes and rich cultural heritage. Explore our carefully selected destinations:
          </p>
          <div className="destinations-grid">
            {allDestinations.map(destination => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>

      <section className="explore-cta">
        <div className="cta-inner">
          <h2>Ready to Plan Your Trip?</h2>
          <p>Browse our curated tours and packages to find the perfect Moroccan experience</p>
          <a href="/tours" className="cta-button">View Tours & Packages</a>
        </div>
      </section>
    </div>
  );
}
