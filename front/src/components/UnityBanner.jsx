import React from 'react';
import './UnityBanner.css';

// Custom Culturally-Colored SVG Symbols from unity_banner_v3.html
const SymbolJudaism = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <polygon points="18,4 31,26 5,26" fill="rgba(52,120,220,0.18)" stroke="#3478DC" strokeWidth="1.6" strokeLinejoin="round"/>
    <polygon points="18,32 5,10 31,10" fill="rgba(52,120,220,0.18)" stroke="#3478DC" strokeWidth="1.6" strokeLinejoin="round"/>
    <polygon points="18,11.5 23.5,14.75 23.5,21.25 18,24.5 12.5,21.25 12.5,14.75" fill="rgba(52,120,220,0.22)" stroke="none"/>
  </svg>
);

const SymbolIslam = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <defs>
      <clipPath id="cresClip"><circle cx="16" cy="18" r="12"/></clipPath>
    </defs>
    <circle cx="16" cy="18" r="12" fill="#27ae60" opacity="0.85"/>
    <circle cx="20.5" cy="16" r="9.5" fill="#000000"/>
    <polygon points="28,10 29.1,13.4 32.7,13.4 29.8,15.5 30.9,18.9 28,16.8 25.1,18.9 26.2,15.5 23.3,13.4 26.9,13.4" fill="#27ae60"/>
  </svg>
);

const SymbolChristianity = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="15.5" y="4" width="5" height="28" rx="1.5" fill="#c9933a"/>  
    <rect x="7" y="12" width="22" height="5" rx="1.5" fill="#c9933a"/>
    <rect x="15.5" y="4" width="5" height="28" rx="1.5" fill="none" stroke="#f0c060" strokeWidth="0.6"/>
    <rect x="7" y="12" width="22" height="5" rx="1.5" fill="none" stroke="#f0c060" strokeWidth="0.6"/>
  </svg>
);

const SymbolBuddhism = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="11" stroke="#e67e22" strokeWidth="1.4" fill="rgba(230,126,34,0.1)"/>
    <circle cx="18" cy="18" r="3" fill="#DB9F46"/>
    <circle cx="18" cy="18" r="1.4" fill="#0d0d0d"/>
    <line x1="18" y1="7.5" x2="18" y2="15" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="18" y1="21" x2="18" y2="28.5" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="7.5" y1="18" x2="15" y2="18" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="21" y1="18" x2="28.5" y2="18" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="10.5" y1="10.5" x2="15.8" y2="15.8" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="20.2" y1="20.2" x2="25.5" y2="25.5" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="25.5" y1="10.5" x2="20.2" y2="15.8" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="15.8" y1="20.2" x2="10.5" y2="25.5" stroke="#e67e22" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const SymbolHinduism = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <text x="18" y="24" textAnchor="middle" fontSize="23" fontFamily="serif" fill="#e06030" fontWeight="700">ॐ</text>
    <text x="18" y="24" textAnchor="middle" fontSize="23" fontFamily="serif" fill="none" stroke="#f0a060" strokeWidth="0.4" fontWeight="700">ॐ</text>
  </svg>
);

const SymbolSikhism = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M9,31 Q5,22 6,14 Q7,8 11,4" stroke="#DB9F46" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M11.5,31 Q8,22 9,14 Q10,8 13.5,4" stroke="#DB9F46" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.55"/>
    <line x1="7" y1="28" x2="13" y2="26" stroke="#DB9F46" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M27,31 Q31,22 30,14 Q29,8 25,4" stroke="#DB9F46" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M24.5,31 Q28,22 27,14 Q26,8 22.5,4" stroke="#DB9F46" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.55"/>
    <line x1="29" y1="28" x2="23" y2="26" stroke="#DB9F46" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="18" cy="17" r="7.5" stroke="#DB9F46" strokeWidth="2" fill="none"/>
    <path d="M18,3 L15.5,12 L15.5,22 L18,23 L20.5,22 L20.5,12 Z" fill="#DB9F46"/>
    <path d="M18,3 L15.5,12" stroke="#f0c060" strokeWidth="0.5" fill="none" opacity="0.7"/>
    <path d="M18,3 L20.5,12" stroke="#f0c060" strokeWidth="0.5" fill="none" opacity="0.7"/>
    <rect x="12" y="21.5" width="12" height="2.5" rx="1" fill="#DB9F46"/>
    <rect x="12" y="21.5" width="12" height="2.5" rx="1" fill="none" stroke="#f0c060" strokeWidth="0.4"/>
    <rect x="16.5" y="24" width="3" height="6" rx="1" fill="#c9933a"/>
    <circle cx="18" cy="31.5" r="2" fill="#DB9F46" stroke="#f0c060" strokeWidth="0.4"/>
  </svg>
);

const SymbolTaoism = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="12" fill="#111"/>
    <path d="M18 6 A12 12 0 0 1 18 30 A6 6 0 0 1 18 18 A6 6 0 0 0 18 6Z" fill="rgba(255,255,255,0.92)"/>
    <circle cx="18" cy="12" r="2.6" fill="#111"/>
    <circle cx="18" cy="24" r="2.6" fill="rgba(255,255,255,0.92)"/>
    <circle cx="18" cy="18" r="12" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"/>
  </svg>
);

const SymbolEarth = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="12" fill="#1a5fa8" opacity="0.85"/>
    <path d="M12 9 Q14 8 16 10 Q15 13 13 13 Q10 12 12 9Z" fill="#27ae60" opacity="0.9"/>
    <path d="M17 9 Q20 8 22 10 Q24 13 22 15 Q19 16 17 14 Q15 12 17 9Z" fill="#27ae60" opacity="0.9"/>
    <path d="M13 15 Q16 14 18 17 Q17 21 14 22 Q11 20 12 17 Q11 15 13 15Z" fill="#27ae60" opacity="0.9"/>
    <path d="M21 17 Q24 16 25 19 Q24 22 22 23 Q19 22 20 19 Q20 17 21 17Z" fill="#27ae60" opacity="0.85"/>
    <circle cx="18" cy="18" r="12" stroke="#4a9fe0" strokeWidth="1" fill="none" opacity="0.5"/>
  </svg>
);

const SymbolConnection = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M0,28 L0,22 Q4,20 8,21 L12,22 L12,30 L4,30 Z" fill="#b8832a"/>
    <path d="M36,28 L36,22 Q32,20 28,21 L24,22 L24,30 L32,30 Z" fill="#c9a84c"/>
    <path d="M10,21 Q10,17 12,16 L16,15 Q18,14 19,16 L20,21 L20,28 L10,28 Z" fill="#DB9F46"/>
    <path d="M26,21 Q26,17 24,16 L20,15 Q18,14 17,16 L16,21 L16,28 L26,28 Z" fill="#f0d070"/>
    <path d="M19,15 Q22,13 23,15 Q23,18 20,19" fill="#DB9F46" stroke="#c9933a" strokeWidth="0.4"/>
    <path d="M19,17 Q22,15 23,17 Q23,20 20,21" fill="#c9933a" opacity="0.5"/>
    <path d="M17,15 Q14,13 13,15 Q13,18 16,19" fill="#f0d070" stroke="#d4aa40" strokeWidth="0.4"/>
    <path d="M17,17 Q14,15 13,17 Q13,20 16,21" fill="#d4aa40" opacity="0.5"/>
    <path d="M11,21 Q10,17 12,14 Q14,12 17,14 Q19,15 18,18" fill="#DB9F46" stroke="#c9933a" strokeWidth="0.5"/>
    <path d="M25,21 Q26,17 24,14 Q22,12 19,14 Q17,15 18,18" fill="#e8c455" stroke="#c9a030" strokeWidth="0.5"/>
    <line x1="18" y1="16" x2="18" y2="28" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5"/>
    <line x1="13" y1="22" x2="13" y2="25" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinecap="round"/>
    <line x1="15" y1="21" x2="15" y2="26" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinecap="round"/>
    <line x1="23" y1="22" x2="23" y2="25" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinecap="round"/>
    <line x1="21" y1="21" x2="21" y2="26" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export default function UnityBanner() {
  const symbols = [
    { component: <SymbolJudaism />, label: "Judaïsme" },
    { component: <SymbolIslam />, label: "Islam" },
    { component: <SymbolChristianity />, label: "Christianisme" },
    { component: <SymbolBuddhism />, label: "Bouddhisme" },
    { component: <SymbolHinduism />, label: "Hindouisme" },
    { component: <SymbolSikhism />, label: "Sikhisme" },
    { component: <SymbolTaoism />, label: "Taoïsme" },
    { component: <SymbolEarth />, label: "La Terre" },
    { component: <SymbolConnection />, label: "Connexion" },
  ];

  return (
    <div className="unity-banner">
      <div className="unity-container">
        <div className="unity-divider">
          <div className="line-left"></div>
          <div className="unity-symbols">
            {symbols.map((sym, index) => (
              <React.Fragment key={index}>
                <div className="sym-wrap">
                  {sym.component}
                  <span className="sym-label">{sym.label}</span>
                </div>
                {index < symbols.length - 1 && <span className="dot-sep">·</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="line-right"></div>
        </div>
        <div className="unity-quote">
          "Morocco Loves You accueille toutes les cultures, toutes les croyances et tous les peuples."
        </div>
      </div>
    </div>
  );
}
