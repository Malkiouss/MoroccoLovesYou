import React from 'react';
import PageHeader from '../components/PageHeader';
import { MessageCircle } from 'lucide-react';
import './Experiences.css';

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'Traditional Tagine Masterclass',
      description: 'Learn the secrets of the slow-cooked Moroccan tagine. From selecting the freshest ingredients at the local souk to mastering the spice blends, you will create a royal feast under the guidance of a master chef.',
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80',
    },
    {
      id: 2,
      title: 'Royal Couscous Friday',
      description: 'Experience the most sacred Moroccan culinary tradition. Join a local family for the traditional Friday couscous, prepared over hours with seven vegetables and tender meat, reflecting centuries of hospitality.',
      image: 'https://images.unsplash.com/photo-1589113182023-708e185c671b?w=800&q=80',
    },
    {
      id: 3,
      title: 'Medina Street Food Discovery',
      description: 'Navigate the labyrinth of the ancient medina to discover hidden culinary gems. From steaming snails and spicy harira to sweet chebakia, experience the vibrant soul of Moroccan street food.',
      image: 'https://images.unsplash.com/photo-1518685265046-3944bdc9a50d?w=800&q=80',
    },
    {
      id: 4,
      title: 'Exclusive Rooftop Gastronomy',
      description: 'Dine under the stars on an exclusive private rooftop. Enjoy a modern take on Moroccan classics paired with breathtaking views of the Atlas Mountains and the illuminated Koutoubia Mosque.',
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80',
    },
    {
      id: 5,
      title: 'Atlas Mountain Berber Lunch',
      description: 'Journey into the High Atlas for an authentic Berber dining experience. Freshly baked bread from a clay oven, mountain-grown vegetables, and breathtaking views create an unforgettable meal.',
      image: 'https://images.unsplash.com/photo-1518552666983-3a60fbe5f0fa?w=800&q=80',
    },
    {
      id: 6,
      title: 'Moroccan Tea & Pastry Ceremony',
      description: 'Master the art of the Moroccan mint tea pour. Discover the delicate world of almond-based pastries, including Cornes de Gazelle, in a serene courtyard setting.',
      image: 'https://images.unsplash.com/photo-1505315848031-64d84b067a99?w=800&q=80',
    }
  ];

  return (
    <div className="experiences-page">
      <PageHeader
        title="Moroccan Culinary Excellence"
        subtitle="Discover our food — the best in the world"
        bgImage="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1600&q=80"
      />

      <section className="experiences-section">
        <div className="section-container">
          <div className="experiences-grid">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-card">
                <div className="experience-image">
                  <img src={exp.image} alt={exp.title} />
                  <div className="experience-overlay" />
                </div>
                <div className="experience-content">
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                  <a 
                    href={`https://wa.me/972546338757?text=Hello,%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(exp.title)}%20experience.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-wa-btn"
                  >
                    <MessageCircle size={18} /> Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
