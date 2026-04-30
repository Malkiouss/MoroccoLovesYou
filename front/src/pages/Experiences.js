import React from 'react';
import PageHeader from '../components/PageHeader';
import { MessageCircle } from 'lucide-react';
import './Experiences.css';

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'Luxury Desert Camp',
      description: 'Spend an unforgettable night under the Sahara stars in a premium private camp with gourmet dining, Berber music, and absolute privacy.',
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80',
    },
    {
      id: 2,
      title: 'Private Driver & Guide',
      description: 'Explore Morocco at your own pace in a luxury vehicle (Mercedes V-Class or similar) with a dedicated bilingual professional driver.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    },
    {
      id: 3,
      title: 'Traditional Premium Hammam',
      description: 'Rejuvenate your body and soul with an authentic Moroccan spa day in a private, luxurious setting featuring argan oil treatments.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    },
    {
      id: 4,
      title: 'Exclusive Moroccan Gastronomy',
      description: 'Private cooking classes with renowned chefs, or an exclusive dining experience on a rooftop overlooking the ancient medina.',
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80',
    },
    {
      id: 5,
      title: 'Guided VIP City Tours',
      description: 'Skip the lines and avoid the crowds with our specialized local experts who provide deep cultural insights into Morocco’s hidden gems.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    },
    {
      id: 6,
      title: 'Private Yacht & Events',
      description: 'Celebrate special occasions with a private yacht trip along the coast or a fully catered event in a secluded luxury riad.',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    }
  ];

  return (
    <div className="experiences-page">
      <PageHeader
        title="Exclusive Experiences"
        subtitle="Curated moments of luxury designed specifically for you"
        bgImage="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1600&q=80"
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
