import React from 'react';
import HeroSection from '../components/HeroSection';
import './About.css';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Fatima Hassan',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Travel enthusiast with 15+ years of experience in Morocco tourism.'
    },
    {
      id: 2,
      name: 'Ahmed Bennani',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Expert in creating unforgettable travel experiences for diverse groups.'
    },
    {
      id: 3,
      name: 'Layla Rahim',
      role: 'Customer Experience Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Dedicated to ensuring every guest has a magical Moroccan journey.'
    },
    {
      id: 4,
      name: 'Youssef Alaoui',
      role: 'Lead Tour Guide',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'Passionate storyteller sharing the rich history and culture of Morocco.'
    },
  ];

  return (
    <div className="about">
      <HeroSection
        title="About MoroccoLovesYou"
        subtitle="Your trusted partner in discovering the magic of Morocco"
        backgroundImage="https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=1200&h=600&fit=crop"
      />

      {/* Company Story */}
      <section className="company-story">
        <div className="story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              MoroccoLovesYou was founded with a simple mission: to help travelers experience the authentic beauty, 
              culture, and hospitality of Morocco. What started as a small travel guide service has grown into a 
              comprehensive tourism company serving thousands of visitors annually.
            </p>
            <p>
              Our founder, Fatima Hassan, fell in love with Morocco and wanted to share this passion with the world. 
              Today, we pride ourselves on creating personalized, authentic experiences that go beyond typical tourism.
            </p>
          </div>
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop" alt="Morocco landscape" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide exceptional travel experiences that showcase Morocco's rich cultural heritage, 
              stunning landscapes, and warm hospitality while supporting local communities and sustainable tourism practices.
            </p>
          </div>
          <div className="vision-card">
            <h3>🌟 Our Vision</h3>
            <p>
              To be the leading Morocco tourism company known for authenticity, reliability, and creating 
              unforgettable memories for every traveler who chooses to explore this magnificent country with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="why-container">
          <h2>Why Choose MoroccoLovesYou?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Expert Knowledge</h3>
              <p>Our team has extensive knowledge of Morocco and provides personalized recommendations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Local Connections</h3>
              <p>We work with authentic local guides and families to ensure genuine experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Value</h3>
              <p>Competitive pricing without compromising on quality and experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safety & Support</h3>
              <p>24/7 customer support and comprehensive travel insurance included.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Sustainable Tourism</h3>
              <p>We support local communities and practice responsible tourism.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Easy Booking</h3>
              <p>Simple online booking process with flexible payment options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h2>Our Team</h2>
          <p className="section-subtitle">Meet the passionate people behind MoroccoLovesYou</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Destinations</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}
