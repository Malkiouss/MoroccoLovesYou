import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import SafeImage from '../components/SafeImage';
import './Gallery.css';

export default function Gallery() {
  const { t } = useLanguage();

  const galleryCategories = [
    {
      id: 'food',
      title: t('gallery.catFood') || 'Culinary Experience',
      image: '/assets/food/food (1).png',
      link: '/experiences'
    },
    {
      id: 'destinations',
      title: t('gallery.catDestinations') || 'Destinations',
      image: '/assets/cities/rabat/rabat4.jpg',
      link: '/destinations'
    },
    {
      id: 'kosher',
      title: t('gallery.catKosher') || 'Kosher',
      image: '/assets/kosher/kosher (6).png',
      link: '/jewish-heritage'
    },
    {
      id: 'transport',
      title: t('gallery.catTransport') || 'VIP Transportation',
      image: '/assets/bus/bus (1).png',
      link: '/transportation'
    }
  ];

  return (
    <div className="gallery-page">
      <PageHeader
        title={t('gallery.pageTitle')}
        subtitle={t('gallery.pageSubtitle')}
        bgImage="/assets/cities/casa/casa (4).jpg"
      />

      <section className="gallery-section">
        <div className="gallery-container">
          <h2>{t('gallery.picturesTitle')}</h2>
          <p className="gallery-intro">{t('gallery.picturesIntro')}</p>

          {/* ── CATEGORIES CARDS ── */}
          <div className="gallery-categories-grid">
            {galleryCategories.map(cat => (
              <Link to={cat.link} key={cat.id} className="gallery-category-card">
                <SafeImage src={cat.image} alt={cat.title} className="category-img" />
                <div className="category-overlay">
                  <h3>{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}