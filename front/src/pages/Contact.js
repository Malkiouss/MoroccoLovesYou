import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();

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
        title={t('contact.pageTitle')}
        subtitle={t('contact.pageSubtitle')}
        bgImage="https://images.unsplash.com/photo-1542442828-287217bfb87f?w=1200&h=600&fit=crop"
      />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>{t('contact.getInTouch')}</h2>
            <p>{t('contact.getInTouchText')}</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>{t('contact.address')}</h3>
                  <p>Rue de la Kasbah 123<br />Marrakech 40000<br />Morocco</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>{t('contact.phone')}</h3>
                  <p>+212 5 24 43 77 77<br />+212 6 12 34 56 78</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h3>{t('contact.email')}</h3>
                  <p>info@moroccolovesyou.com<br />support@moroccolovesyou.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div className="info-content">
                  <h3>{t('contact.businessHours')}</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>{t('contact.followUs')}</h3>
              <div className="social-icons">
                <a href="#facebook" className="social-icon">f</a>
                <a href="#twitter" className="social-icon">𝕏</a>
                <a href="#instagram" className="social-icon">📷</a>
                <a href="#youtube" className="social-icon">▶</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>{t('contact.formTitle')}</h2>

            {submitted && (
              <div className="success-message">
                {t('contact.successMessage')}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">{t('contact.fullName')}</label>
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
              <label htmlFor="email">{t('contact.emailAddress')}</label>
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
              <label htmlFor="phone">{t('contact.phoneNumber')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">{t('contact.selectSubject')}</option>
                <option value="tour-inquiry">{t('contact.tourInquiry')}</option>
                <option value="booking">{t('contact.bookingQuestion')}</option>
                <option value="custom-package">{t('contact.customPackage')}</option>
                <option value="feedback">{t('contact.feedback')}</option>
                <option value="other">{t('contact.other')}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">{t('contact.sendMessage')}</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h2>{t('contact.mapTitle')}</h2>
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
          <h2>{t('contact.faqTitle')}</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>{t('contact.faq1Q')}</h3>
              <p>{t('contact.faq1A')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq2Q')}</h3>
              <p>{t('contact.faq2A')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq3Q')}</h3>
              <p>{t('contact.faq3A')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq4Q')}</h3>
              <p>{t('contact.faq4A')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq5Q')}</h3>
              <p>{t('contact.faq5A')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('contact.faq6Q')}</h3>
              <p>{t('contact.faq6A')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
