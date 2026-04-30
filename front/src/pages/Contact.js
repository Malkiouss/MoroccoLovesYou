import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team to plan your VIP Morocco adventure"
        bgImage="https://images.unsplash.com/photo-1542442828-287217bfb87f?w=1200&h=600&fit=crop"
      />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We're here to help and answer any questions you might have. Our team is ready to assist you in planning your perfect Morocco trip.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>Rue de la Kasbah 123<br />Marrakech 40000<br />Morocco</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+212 5 24 43 77 77<br />+212 6 12 34 56 78</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@moroccolovesyou.com<br />support@moroccolovesyou.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#facebook" className="social-icon">f</a>
                <a href="#twitter" className="social-icon">𝕏</a>
                <a href="#instagram" className="social-icon">📷</a>
                <a href="#youtube" className="social-icon">▶</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="tour-inquiry">Tour Inquiry</option>
                <option value="booking">Booking Question</option>
                <option value="custom-package">Custom Package</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h2>Find Us on the Map</h2>
          <iframe
            title="MoroccoLovesYou Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.9651046899166!2d-8.008379!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee6fe6e6e6e6d%3A0x0!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sma!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is the best time to visit Morocco?</h3>
              <p>Spring (April-May) and Fall (September-October) offer the best weather. Summer is hot in the desert, while winter is mild but can be rainy.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need a visa to visit Morocco?</h3>
              <p>Visa requirements depend on your nationality. Many countries have visa-free entry for up to 90 days. Check with your local embassy.</p>
            </div>
            <div className="faq-item">
              <h3>What currency is used in Morocco?</h3>
              <p>The Moroccan Dirham (MAD) is the official currency. ATMs are widely available in cities, and most places accept credit cards.</p>
            </div>
            <div className="faq-item">
              <h3>What language is spoken in Morocco?</h3>
              <p>Arabic and Berber (Amazigh) are official languages. French is widely spoken, and English is increasingly common in tourist areas.</p>
            </div>
            <div className="faq-item">
              <h3>Is Morocco safe for tourists?</h3>
              <p>Yes, Morocco is generally safe for tourists. Common sense precautions apply. Our guides ensure you have a safe and enjoyable experience.</p>
            </div>
            <div className="faq-item">
              <h3>Can I customize my tour package?</h3>
              <p>Absolutely! We offer custom packages tailored to your interests, budget, and travel dates. Contact us to discuss your requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
