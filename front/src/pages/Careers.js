import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import './Careers.css';

export default function Careers() {
  const { t } = useLanguage();

  const jobs = [
    {
      id: 1,
      title: t('jobs.job1.title'),
      type: t('jobs.job1.type'),
      location: t('jobs.job1.location'),
      description: t('jobs.job1.description'),
      requirements: [
        t('jobs.job1.req1'),
        t('jobs.job1.req2'),
        t('jobs.job1.req3'),
        t('jobs.job1.req4')
      ]
    },
    {
      id: 2,
      title: t('jobs.job2.title'),
      type: t('jobs.job2.type'),
      location: t('jobs.job2.location'),
      description: t('jobs.job2.description'),
      requirements: [
        t('jobs.job2.req1'),
        t('jobs.job2.req2'),
        t('jobs.job2.req3'),
        t('jobs.job2.req4')
      ]
    },
    {
      id: 3,
      title: t('jobs.job3.title'),
      type: t('jobs.job3.type'),
      location: t('jobs.job3.location'),
      description: t('jobs.job3.description'),
      requirements: [
        t('jobs.job3.req1'),
        t('jobs.job3.req2'),
        t('jobs.job3.req3'),
        t('jobs.job3.req4')
      ]
    }
  ];

  return (
    <div className="careers-page">
      <PageHeader
        title={t('jobs.title')}
        subtitle={t('jobs.intro')}
        bgImage="/assets/cities/chefchaouen/chefhero.jpg"
      />

      <section className="careers-intro section-padding">
        <div className="container">
          <div className="careers-intro-content text-center">
            <h2>{t('jobs.workWith')}</h2>
            <p className="careers-lead">
              {t('jobs.introText')}
            </p>
          </div>
        </div>
      </section>

      <section className="open-positions section-padding">
        <div className="container">
          <h2 className="text-center section-title">{t('jobs.openPositions')}</h2>
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
                  <h4>{t('jobs.requirements') || "Requirements:"}</h4>
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
            <h2>{t('jobs.readyJoin')}</h2>
            <p>
              {t('jobs.instructions')}
            </p>
            <div className="cta-buttons">
              <a href="mailto:CEO@MoroccoLovesYou.com" className="btn-primary">
                {t('jobs.emailCv') || "Email CV to CEO"}
              </a>
              <a href="https://wa.me/972546338757" className="btn-secondary" target="_blank" rel="noreferrer">
                {t('jobs.chatCeo') || "Chat with CEO on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
