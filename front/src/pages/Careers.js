import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import './Careers.css';

export default function Careers() {
  const { t } = useLanguage();

  const jobs = [
    {
      id: 1,
      title: "Multilingual Professional Tour Guide",
      type: "Full-Time / Seasonal",
      location: "Marrakech / Fes / Morocco-wide",
      description: "We are looking for passionate, knowledgeable, and storytelling guides who speak fluent English, French, Spanish, or Hebrew to share the rich history and hospitality of Morocco.",
      requirements: [
        "Certified tour guide license from the Ministry of Tourism",
        "Excellent communication and interpersonal skills",
        "Deep knowledge of Moroccan history, culture, and architecture",
        "Fluency in English + at least one other foreign language"
      ]
    },
    {
      id: 2,
      title: "VIP Executive Driver",
      type: "Full-Time",
      location: "Morocco-wide",
      description: "Join our luxury transport team driving modern high-end Mercedes S-Class, V-Class, and VIP vehicles. You will be responsible for providing safe, comfortable, and outstanding personal hospitality.",
      requirements: [
        "Professional driver's license with clean record",
        "Minimum 5 years of professional driving experience",
        "Polite, respectful, and well-groomed presentation",
        "Basic conversational English or French"
      ]
    },
    {
      id: 3,
      title: "Customer Experience Coordinator",
      type: "Full-Time",
      location: "Remote / Hybrid (Fes Office)",
      description: "Support our CEO office in organizing luxury custom itineraries, coordinates 24/7 guest communications, hotel check-ins, and surprise premium experiences.",
      requirements: [
        "Experience in luxury travel agency or hospitality coordination",
        "Highly organized with strong multitasking capabilities",
        "Fluent English and French (written and spoken)",
        "Passionate about customer satisfaction and luxury standards"
      ]
    }
  ];

  return (
    <div className="careers-page">
      <PageHeader
        title={t('careers.pageTitle') || "Careers & Opportunities"}
        subtitle={t('careers.pageSubtitle') || "Join the MoroccoLovesYou team and build your future in luxury travel"}
        bgImage="/assets/cities/chefchaouen/chefhero.jpg"
      />

      <section className="careers-intro section-padding">
        <div className="container">
          <div className="careers-intro-content text-center">
            <h2>{t('careers.introTitle') || "Work With Love, Care & Excellence"}</h2>
            <p className="careers-lead">
              At MoroccoLovesYou, our mission is to offer premium, unforgettable luxury tours built on authentic Moroccan hospitality. 
              Our team members are the heartbeat of our success. We are looking for talented, passionate, and energetic individuals who want to represent the best of Morocco.
            </p>
          </div>
        </div>
      </section>

      <section className="open-positions section-padding">
        <div className="container">
          <h2 className="text-center section-title">{t('careers.openJobs') || "Open Positions"}</h2>
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-location">📍 {job.location}</span>
                  </div>
                </div>
                <p className="job-desc">{job.description}</p>
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="apply-cta section-padding">
        <div className="container text-center">
          <div className="cta-box">
            <h2>{t('careers.applyTitle') || "Ready to Join Us?"}</h2>
            <p>
              Send your CV/Resume and a short cover letter explaining why you would love to work with us, or contact our CEO office directly.
            </p>
            <div className="cta-buttons">
              <a href="mailto:CEO@MoroccoLovesYou.com" className="btn-primary">
                Email CV to CEO
              </a>
              <a href="https://wa.me/972546338757" className="btn-secondary" target="_blank" rel="noreferrer">
                Chat with CEO on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
