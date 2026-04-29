import React from 'react';
import HeroSection from '../components/HeroSection';
import './Blog.css';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Hidden Gems to Discover in Morocco',
      author: 'Fatima Hassan',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=400&h=250&fit=crop',
      excerpt: 'Discover the lesser-known destinations in Morocco that will take your breath away. From hidden beaches to mountain villages...',
      category: 'Travel Guide'
    },
    {
      id: 2,
      title: 'Best Time to Visit Morocco: A Complete Guide',
      author: 'Ahmed Bennani',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1532336414038-446546efb0fd?w=400&h=250&fit=crop',
      excerpt: 'Planning a trip to Morocco? Learn about the best seasons to visit, weather conditions, and what to expect throughout the year...',
      category: 'Planning'
    },
    {
      id: 3,
      title: 'Moroccan Cuisine: A Culinary Adventure',
      author: 'Layla Rahim',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
      excerpt: 'Explore the rich flavors of Moroccan cuisine. From tagines to mint tea, learn about the traditional dishes you must try...',
      category: 'Food & Culture'
    },
    {
      id: 4,
      title: 'How to Haggle in Moroccan Markets Like a Pro',
      author: 'Youssef Alaoui',
      date: 'February 28, 2024',
      image: 'https://images.unsplash.com/photo-1509316366560-61e0ba8cdd03?w=400&h=250&fit=crop',
      excerpt: 'Master the art of haggling in Moroccan souks. Discover tips and tricks to get the best deals while respecting local culture...',
      category: 'Travel Tips'
    },
    {
      id: 5,
      title: 'Trekking the Atlas Mountains: What You Need to Know',
      author: 'Ahmed Bennani',
      date: 'February 20, 2024',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop',
      excerpt: 'A comprehensive guide to trekking in the Atlas Mountains. Learn about routes, difficulty levels, and essential gear...',
      category: 'Adventure'
    },
    {
      id: 6,
      title: 'Desert Safari: An Unforgettable Experience',
      author: 'Fatima Hassan',
      date: 'February 15, 2024',
      image: 'https://images.unsplash.com/photo-1518552666983-3a60fbe5f0fa?w=400&h=250&fit=crop',
      excerpt: 'Everything you need to know about desert safaris in Morocco. From camel trekking to desert camps, prepare for an adventure...',
      category: 'Adventure'
    },
    {
      id: 7,
      title: 'Cultural Etiquette: Respecting Moroccan Traditions',
      author: 'Layla Rahim',
      date: 'February 10, 2024',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a36c3f7?w=400&h=250&fit=crop',
      excerpt: 'Learn about Moroccan customs and traditions to ensure respectful and meaningful interactions with locals during your visit...',
      category: 'Culture'
    },
    {
      id: 8,
      title: 'Photography in Morocco: Capturing the Magic',
      author: 'Youssef Alaoui',
      date: 'February 5, 2024',
      image: 'https://images.unsplash.com/photo-1503478211867-145a0caf9e25?w=400&h=250&fit=crop',
      excerpt: 'Tips and tricks for capturing stunning photographs in Morocco. Learn about the best lighting, locations, and techniques...',
      category: 'Photography'
    },
  ];

  return (
    <div className="blog">
      <HeroSection
        title="Travel Blog"
        subtitle="Tips, guides, and stories from Morocco lovers"
        backgroundImage="https://images.unsplash.com/photo-1518684255275-e8c1f8e6fcc6?w=1200&h=600&fit=crop"
      />

      <section className="blog-section">
        <div className="blog-container">
          <h2>Latest Travel Articles</h2>
          <p className="blog-intro">
            Read our latest articles about traveling in Morocco, local culture, and insider tips
          </p>

          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <div className="blog-meta">
                    <span className="blog-author">By {post.author}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href="#readmore" className="read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="categories-container">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>✈️ Travel Guide</h3>
              <p>12 Articles</p>
            </div>
            <div className="category-card">
              <h3>🍽️ Food & Culture</h3>
              <p>8 Articles</p>
            </div>
            <div className="category-card">
              <h3>🥾 Adventure</h3>
              <p>10 Articles</p>
            </div>
            <div className="category-card">
              <h3>💡 Travel Tips</h3>
              <p>15 Articles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest travel tips and exclusive offers delivered to your inbox</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
