import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicePolicySummary } from '../data/servicePolicy';
import './PolicySummary.css';

export default function PolicySummary({ variant = 'light' }) {
  const { t } = useLanguage();
  const summary = t('servicePolicy.summary') || servicePolicySummary;

  return (
    <section className={`policy-summary policy-summary-${variant}`}>
      <div className="policy-summary-inner">
        <div className="policy-summary-icon" aria-hidden="true">
          <ShieldCheck size={28} />
        </div>
        <div className="policy-summary-content">
          <p className="policy-summary-kicker">{summary.kicker || "Terms & Responsibility"}</p>
          <h2>{summary.title}</h2>
          <p>{summary.text}</p>
        </div>
        <Link to={summary.route || servicePolicySummary.route} className="policy-summary-link">
          <FileText size={18} />
          {summary.buttonText}
        </Link>
      </div>
    </section>
  );
}
