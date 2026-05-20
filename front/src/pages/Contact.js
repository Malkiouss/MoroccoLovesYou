import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const emails = t('contact.emailList') || [];

  return (
    <div className="contact-page">
      <PageHeader
        title={t('contact.pageTitle')}
        subtitle={t('contact.pageSubtitle')}
        bgImage="/assets/contact.jpeg"
      />

      <section className="contact-main">
        <div className="contact-container">
          {/* Info Side */}
          <div className="contact-info-panel">
            <div className="info-block">
              <h3>{t('contact.businessHours')}</h3>
              <p className="hours-highlight">{t('contact.businessHoursText')}</p>
              <p className="response-note">{t('contact.responseTime')}</p>
              <p className="welcome-mly">{t('contact.welcomeMessage')}</p>
            </div>

            <div className="info-block">
              <h3>{t('contact.address')}</h3>
              <p className="address-text">{t('contact.addressText')}</p>
            </div>

            <div className="info-block">
              <h3>{t('contact.phone')}</h3>
              <div className="phone-links">
                <a href="tel:+212663630579" className="phone-link">
                  <span className="icon">📞</span> {t('contact.directPhone')}
                </a>
                <a href="https://wa.me/972546338757" target="_blank" rel="noreferrer" className="phone-link whatsapp">
                  <span className="icon">💬</span> {t('contact.whatsappPhone')}
                </a>
              </div>
            </div>

            <div className="info-block">
              <h3>{t('contact.email')}</h3>
              <ul className="email-list">
                {Array.isArray(emails) && emails.map((email, idx) => (
                  <li key={idx}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-panel">
            <form className="mly-contact-form" onSubmit={handleSubmit}>
              <h2>{t('contact.formTitle')}</h2>
              
              {submitted && (
                <div className="success-banner">
                  {t('contact.successMessage')}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">{t('contact.firstName')}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={t('forms.firstName')}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">{t('contact.lastName')}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={t('forms.lastName')}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.emailAddress')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('forms.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t('forms.subject')}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t('forms.message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="mly-btn-gold">
                {t('contact.sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
