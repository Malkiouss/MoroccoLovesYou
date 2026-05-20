import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import './Tours.css';

const WHATSAPP_NUMBER = '972546338757';

function buildWhatsAppUrl(pkg, t) {
  const message = [
    t('whatsapp.greeting'),
    t('whatsapp.bookPackage'),
    ``,
    `${t('whatsapp.packageInfo')}${pkg.title}`,
    `${t('whatsapp.duration')}${pkg.duration}`,
    `${t('whatsapp.price')}${pkg.price}`,
    ``,
    t('whatsapp.bookingRequest')
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Tours() {
  const { t } = useLanguage();
  const [selectedPackage, setSelectedPackage] = React.useState(null);

  const premiumPackages = [
    {
      id: "pkg1",
      image: '/assets/packs/pack1.jpeg',
      title: t('tours.pkg1.title') || "Fes Luxury Weekend Escape",
      duration: t('tours.pkg1.duration') || "3 Nights / 4 Days (Thursday → Sunday)",
      price: t('tours.pkg1.price') || "€790",
      highlights: [
        t('tours.pkg1.hl1') || "Direct roundtrip flights included (London/Europe)",
        t('tours.pkg1.hl2') || "4–5 star luxury hotels",
        t('tours.pkg1.hl3') || "Traditional Moroccan hammam",
        t('tours.pkg1.hl4') || "Cooking & art workshops",
        t('tours.pkg1.hl5') || "Moroccan live performances"
      ],
      fullDetails: {
        subtitle: t('tours.pkg1.subtitle') || "All-Inclusive Package – From A to Z",
        flights: [
          t('tours.pkg1.flight1') || "Direct roundtrip flights",
          t('tours.pkg1.flight2') || "20kg checked luggage",
          t('tours.pkg1.flight3') || "Cabin luggage up to 8kg"
        ],
        included: [
          t('tours.pkg1.inc1') || "Airport pickup & transfer back",
          t('tours.pkg1.inc2') || "4–5 star hotels (Half board)",
          t('tours.pkg1.inc3') || "Fresh & authentic Moroccan cuisine",
          t('tours.pkg1.inc4') || "Traditional tea & pastries experience",
          t('tours.pkg1.inc5') || "Professional tour guide & Private driver",
          t('tours.pkg1.inc6') || "Modern air-conditioned transportation",
          t('tours.pkg1.inc7') || "Special live performances (Singers & dancers)",
          t('tours.pkg1.inc8') || "Traditional market tours (Spice, Lantern, Carpet)",
          t('tours.pkg1.inc9') || "Cooking & Art workshops (Pre-booking required)",
          t('tours.pkg1.inc10') || "Natural springs & Viewpoints visits",
          t('tours.pkg1.inc11') || "Day trips to Chefchaouen & Ifrane",
          t('tours.pkg1.inc12') || "Visits with local Moroccan families",
          t('tours.pkg1.inc13') || "Surprise experiences during the tour"
        ],
        suitableFor: [
          t('tours.pkg1.suit1') || "Couples",
          t('tours.pkg1.suit2') || "Families",
          t('tours.pkg1.suit3') || "Groups",
          t('tours.pkg1.suit4') || "Solo travelers",
          t('tours.pkg1.suit5') || "Seniors",
          t('tours.pkg1.suit6') || "Companies",
          t('tours.pkg1.suit7') || "Travel agencies",
          t('tours.pkg1.suit8') || "Tour operators"
        ]
      }
    },
    {
      id: "pkg2",
      image: '/assets/packs/pack2.jpeg',
      title: t('tours.pkg2.title') || "Morocco Luxury Discovery Tour",
      duration: t('tours.pkg2.duration') || "6 Nights / 7 Days (Monday → Sunday)",
      price: t('tours.pkg2.price') || "€1490",
      highlights: [
        t('tours.pkg2.hl1') || "Package A",
        t('tours.pkg2.hl2') || "6 Nights - 7 Days",
        t('tours.pkg2.hl3') || "Atlas Mouvements",
        t('tours.pkg2.hl4') || "Marakech- Essaouira - Merzouga - Ouarzazte - Marakech-",
        t('tours.pkg2.hl5') || "Big Surprise ❤️"
      ],
      fullDetails: {
        subtitle: t('tours.pkg2.subtitle') || "Fes & North Morocco Route (All Inclusive)",
        route: t('tours.pkg2.routeText') || "2 nights Fes, 1 night Chefchaouen, 1 night Tangier, 1 night Ifrane, 1 final night Fes",
        flights: [
          t('tours.pkg2.flight1') || "Direct roundtrip flights from Europe",
          t('tours.pkg2.flight2') || "20kg luggage + Cabin luggage"
        ],
        transportation: [
          t('tours.pkg2.trans1') || "Airport pickup & transfer",
          t('tours.pkg2.trans2') || "Private professional driver & tour guide",
          t('tours.pkg2.trans3') || "New air-conditioned vehicles"
        ],
        hotels: [
          t('tours.pkg2.hotel1') || "4–5 star hotels",
          t('tours.pkg2.hotel2') || "Premium locations",
          t('tours.pkg2.hotel3') || "High-level service"
        ],
        food: [
          t('tours.pkg2.food1') || "Half board",
          t('tours.pkg2.food2') || "Authentic cuisine",
          t('tours.pkg2.food3') || "Traditional tea & pastries"
        ],
        experiences: [
          t('tours.pkg2.exp1') || "Moroccan live performances",
          t('tours.pkg2.exp2') || "Traditional markets (Spice, Lantern, Carpet)",
          t('tours.pkg2.exp3') || "Traditional Moroccan hammam",
          t('tours.pkg2.exp4') || "Nature & forest visits",
          t('tours.pkg2.exp5') || "Beautiful viewpoints & Day trips",
          t('tours.pkg2.exp6') || "Cooking & art workshops",
          t('tours.pkg2.exp7') || "Visits with local families",
          t('tours.pkg2.exp8') || "Special surprises during the trip"
        ],
        suitableFor: [
          t('tours.pkg2.suit1') || "Couples",
          t('tours.pkg2.suit2') || "Families",
          t('tours.pkg2.suit3') || "Groups",
          t('tours.pkg2.suit4') || "Solo travelers",
          t('tours.pkg2.suit5') || "Seniors",
          t('tours.pkg2.suit6') || "Companies",
          t('tours.pkg2.suit7') || "Travel agencies"
        ]
      }
    },
    {
      id: "pkg3",
      image: '/assets/packs/casatour.jpeg',
      title: t('tours.pkg3.title') || "Morocco Grand Experience",
      duration: t('tours.pkg3.duration') || "10 Nights / 11 Days (Global Travelers)",
      price: t('tours.pkg3.price') || "€1990",
      highlights: [
        t('tours.pkg3.hl1') || "Full premium ground services",
        t('tours.pkg3.hl2') || "Casablanca, Marrakech & Fes",
        t('tours.pkg3.hl3') || "Agadir & Sahara desert surprises",
        t('tours.pkg3.hl4') || "Visit Ouarzazate & Chefchaouen",
        t('tours.pkg3.hl5') || "Special live music & performances"
      ],
      fullDetails: {
        subtitle: t('tours.pkg3.subtitle') || "✨ Morocco Grand Experience (Ground Services Only)",
        arrival: t('tours.pkg3.arrivalText') || "Casablanca or Marrakech",
        route: t('tours.pkg3.routeText') || "Casablanca, Rabat, 2 nights Fes, Tangier, Chefchaouen, Ifrane, 2 nights Marrakech, Agadir, Ouarzazate, final night Marrakech",
        notes: [
          
          t('tours.pkg3.note2') || "Groups > 40: Special discount of $50 per person",
          t('tours.pkg3.note3') || "International flights & insurance NOT included",
          t('tours.pkg3.note4') || "Tips for driver/guide NOT included"
        ],
        included: [
          t('tours.pkg3.inc1') || "Full premium ground services",
          t('tours.pkg3.inc2') || "4–5 star hotels (Half board)",
          t('tours.pkg3.inc3') || "Professional tour guide & Private driver",
          t('tours.pkg3.inc4') || "Air-conditioned bus or minibus",
          t('tours.pkg3.inc5') || "Live performances & music atmosphere",
          t('tours.pkg3.inc6') || "Traditional markets & Hammam visits",
          t('tours.pkg3.inc7') || "Cooking & art workshops",
          t('tours.pkg3.inc8') || "Excursions to forests, springs & viewpoints",
          t('tours.pkg3.inc9') || "Visits with local families",
          t('tours.pkg3.inc10') || "Special surprises during the journey"
        ]
      }
    },
    {
      id: "pkg4",
      image: '/assets/packs/pack4.jpeg',
      title: t('tours.pkg4.title') || "Morocco Imperial & Sahara Experience",
      duration: t('tours.pkg4.duration') || "16 Nights / 17 Days",
      price: t('tours.pkg4.price') || "All Inclusive",
      highlights: [
        t('tours.pkg4.hl1') || "Casablanca • Rabat • Fez • Tangier • Chefchaouen",
        t('tours.pkg4.hl2') || "Ifrane • Merzouga Sahara Desert",
        t('tours.pkg4.hl3') || "Essaouira • Ourika & Atlas Mountains • Marrakesh",
        t('tours.pkg4.hl4') || "2 Nights Luxury Desert Camp with Camel & Jeep Tours",
        t('tours.pkg4.hl5') || "Magical Sunrise & Sunset • Sleep Under The Stars"
      ],
      fullDetails: {
        subtitle: t('tours.pkg4.subtitle') || "✨ Morocco Imperial & Sahara Experience - The Complete Journey (16 Nights / 17 Days)",
        route: t('tours.pkg4.routeText') || "Casablanca (1 night), Rabat, Fez (2 nights), Tangier (1 night), Chefchaouen (1 night), Ifrane (1 night), Merzouga Sahara (2 nights), Essaouira (2 nights), Ourika & Atlas Mountains (1 night), Marrakesh (3 nights)",
        highlights: [
          t('tours.pkg4.itinerary1') || "Casablanca - Arrival (1 Night)",
          t('tours.pkg4.itinerary2') || "Rabat - The Royal Capital",
          t('tours.pkg4.itinerary3') || "Fez - Spiritual & Cultural Morocco (2 Nights)",
          t('tours.pkg4.itinerary4') || "Tangier - Where Europe Meets Africa (1 Night)",
          t('tours.pkg4.itinerary5') || "Chefchaouen - The Blue Pearl (1 Night)",
          t('tours.pkg4.itinerary6') || "Ifrane - The Moroccan Switzerland (1 Night)",
          t('tours.pkg4.itinerary7') || "Merzouga Sahara Desert (2 Nights) - Luxury Desert Camp - Camel Experience - Jeep Tours - Magical Sunrise & Sunset - Sleeping Under The Stars",
          t('tours.pkg4.itinerary8') || "Essaouira - Atlantic Ocean Escape (2 Nights)",
          t('tours.pkg4.itinerary9') || "Ourika & Atlas Mountains (1 Night)",
          t('tours.pkg4.itinerary10') || "Marrakesh - The Red City (3 Nights)"
        ],
        included: [
          t('tours.pkg4.inc1') || "4★ / 5★ Hotels",
          t('tours.pkg4.inc2') || "Luxury Air-Conditioned Desert Camp",
          t('tours.pkg4.inc3') || "Full Board / Premium Moroccan Cuisine",
          t('tours.pkg4.inc4') || "Professional Multilingual Guides",
          t('tours.pkg4.inc5') || "Private Modern Transportation",
          t('tours.pkg4.inc6') || "Air-Conditioned Coaches",
          t('tours.pkg4.inc7') || "WiFi • TV • Refrigerator On Board",
          t('tours.pkg4.inc8') || "Private Driver Throughout The Tour",
          t('tours.pkg4.inc9') || "Camel Tours",
          t('tours.pkg4.inc10') || "Jeep Desert Experience",
          t('tours.pkg4.inc11') || "Folklore Shows & Live Music",
          t('tours.pkg4.inc12') || "Moroccan Dance Performances",
          t('tours.pkg4.inc13') || "Cooking Workshops",
          t('tours.pkg4.inc14') || "Markets & Souks Experiences",
          t('tours.pkg4.inc15') || "Carpets • Spices • Flowers • Traditional Crafts",
          t('tours.pkg4.inc16') || "Lakes • Rivers • Atlas Mountains",
          t('tours.pkg4.inc17') || "Special Sunrise & Sunset Experiences",
          t('tours.pkg4.inc18') || "Direct 24/7 Support"
        ],
        optional: [
          t('tours.pkg4.optional1') || "Hot Air Balloon Experience",
          t('tours.pkg4.optional2') || "VIP Upgrades",
          t('tours.pkg4.optional3') || "Luxury Experiences",
          t('tours.pkg4.optional4') || "Private Security Services",
          t('tours.pkg4.optional5') || "Medical Assistance Services"
        ],
        optionalNote: t('tours.pkg4.optionalNote') || "Some premium services may require an additional fair supplement."
      }
    }
  ];

  const DetailList = ({ title, items }) => {
    if (!items) return null;

    return (
      <div className="details-section">
        <h5>{title}</h5>
        <ul className="details-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const TourCard = ({ pkg }) => {
    return (
      <div className="travel-card">
        <div className="travel-card-header">
          <img src={pkg.image} alt={pkg.title} />
          {/* <div className="travel-card-badge">{pkg.price}</div> */}
        </div>

        <div className="travel-card-body">
          <h3 className="travel-card-title">{pkg.title}</h3>

          <p className="travel-card-duration">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="clock-icon"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {pkg.duration}
          </p>

          <div className="travel-card-highlights">
            <h4>{t('tours.highlightsLabel') || "HIGHLIGHTS:"}</h4>
            <ul>
              {pkg.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>

          <div className="card-footer-actions">
            <button
              type="button"
              className="view-more-trigger"
              onClick={() => setSelectedPackage(pkg)}
            >
              {t('tours.viewFullDetails') || "View Full Details"}
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <a
              href={buildWhatsAppUrl(pkg, t)}
              target="_blank"
              rel="noopener noreferrer"
              className="travel-card-btn"
            >
              {t('tours.bookNow') || "Book Now"}
            </a>
          </div>
        </div>
      </div>
    );
  };

  const TourModal = ({ pkg }) => {
    if (!pkg) return null;

    return (
      <div className="tour-modal-overlay" onClick={() => setSelectedPackage(null)}>
        <div className="tour-modal" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="tour-modal-close"
            onClick={() => setSelectedPackage(null)}
            aria-label={t('aria.closeDetails')}
          >
            ×
          </button>

          <div className="tour-modal-image">
            <img src={pkg.image} alt={pkg.title} />
           {/* <div className="travel-card-badge">{pkg.price}</div> */}  
          </div>

          <div className="tour-modal-content">
            <span className="tour-modal-kicker">{t('tours.premiumPackage') || "Premium Package"}</span>
            <h2>{pkg.title}</h2>

            <p className="tour-modal-duration">
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {pkg.duration}
            </p>

            {pkg.fullDetails.subtitle && (
              <h4 className="details-subtitle">{pkg.fullDetails.subtitle}</h4>
            )}

            {pkg.fullDetails.arrival && (
              <div className="details-section">
                <h5>{t('tours.arrival') || "Arrival:"}</h5>
                <p>{pkg.fullDetails.arrival}</p>
              </div>
            )}

            {pkg.fullDetails.route && (
              <div className="details-section route-box">
                <h5>{t('tours.route') || "Route:"}</h5>
                <p>{pkg.fullDetails.route}</p>
              </div>
            )}

            <DetailList title={t('tours.flights') || "Flights:"} items={pkg.fullDetails.flights} />
            <DetailList title={t('tours.transportation') || "Transportation:"} items={pkg.fullDetails.transportation} />
            <DetailList title={t('tours.hotels') || "Hotels:"} items={pkg.fullDetails.hotels} />
            <DetailList title={t('tours.foodDining') || "Food & Dining:"} items={pkg.fullDetails.food} />
            <DetailList title={t('tours.whatsIncluded') || "What's Included:"} items={pkg.fullDetails.included} />
            <DetailList title={t('tours.attractionsExperiences') || "Attractions & Experiences:"} items={pkg.fullDetails.experiences} />

            {pkg.fullDetails.highlights && (
              <div className="details-section highlights-section">
                <h5>{t('tours.itinerary') || "Itinerary:"}</h5>
                <ul className="details-list">
                  {pkg.fullDetails.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {pkg.fullDetails.optional && (
              <div className="details-section optional-section">
                <h5>{t('tours.optionalExperiences') || "Optional Experiences:"}</h5>
                <p className="optional-intro">{t('tours.availableUponRequest') || "Available Upon Request:"}</p>
                <ul className="details-list">
                  {pkg.fullDetails.optional.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {pkg.fullDetails.optionalNote && (
                  <p className="optional-note">{pkg.fullDetails.optionalNote}</p>
                )}
              </div>
            )}

            {pkg.fullDetails.sahara && (
              <div className="details-section sahara-special">
                <h5>{t('tours.specialSaharaExperience') || "Special Sahara Experience:"}</h5>
                <ul className="details-list">
                  {pkg.fullDetails.sahara.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {pkg.fullDetails.suitableFor && (
              <div className="details-section">
                <h5>{t('tours.suitableFor') || "Suitable For:"}</h5>
                <p className="suitable-text">
                  {pkg.fullDetails.suitableFor.join(' • ')}
                </p>
              </div>
            )}

            {pkg.fullDetails.notes && (
              <div className="details-section notes">
                <h5>{t('tours.importantNotes') || "Important Notes:"}</h5>
                <ul className="details-list">
                  {pkg.fullDetails.notes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="card-messages">
              <div className="message-box price-warning">
                <strong>{t('tours.priceInformation') || "Price Information:"}</strong>
                <p>
                  {t('tours.priceWarningText') || "Prices may change depending on flight prices, exchange rates, holidays, seasons, and hotel availability."}
                </p>
              </div>

              <div className="message-box safety">
                <strong>{t('tours.safetyComfort') || "Safety & Comfort:"}</strong>
                <p>
                  {t('tours.safetyText') || "We work in coordination with Moroccan authorities and security services to ensure the safety and comfort of our guests."}
                </p>
              </div>

              <div className="message-box values">
                <strong>{t('tours.givesMore') || "Morocco Loves You gives more:"}</strong>
                <p>
                  {t('tours.givesMoreText') || "More love, care, professionalism, joy, and safety. Easy and relaxing tours with real human hospitality."}
                </p>
              </div>
            </div>

            <div className="tour-modal-actions">
              <a
                href={buildWhatsAppUrl(pkg, t)}
                target="_blank"
                rel="noopener noreferrer"
                className="tour-modal-book-btn"
              >
                {t('tours.bookThisPackage') || "Book This Package"}
              </a>

              <button
                type="button"
                className="tour-modal-secondary-btn"
                onClick={() => setSelectedPackage(null)}
              >
                {t('tours.backToPackages') || "Back to Packages"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tours">
      <PageHeader
        title={t('tours.pageTitle')}
        subtitle={t('tours.pageSubtitle')}
        bgImage="/assets/images/tours.jpeg"
      />

      <section className="travel-cards-section premium-bg">
        <div className="tours-container">
          <div className="section-header">
            <h2>{t('tours.premiumMoroccoPackages') || "Premium Morocco Packages"}</h2>
            <p>{t('tours.premiumMoroccoPackagesDesc') || "Exclusive, carefully curated experiences for our discerning guests."}</p>
          </div>

          <div className="travel-cards-grid">
            {premiumPackages.map((pkg) => (
              <TourCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="booking-info">
        <div className="booking-container">
          <h2>{t('tours.howToBook')}</h2>

          <div className="booking-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>{t('tours.step1Title')}</h3>
              <p>{t('tours.step1Text')}</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>{t('tours.step2Title')}</h3>
              <p>{t('tours.step2Text')}</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>{t('tours.step3Title')}</h3>
              <p>{t('tours.step3Text')}</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>{t('tours.step4Title')}</h3>
              <p>{t('tours.step4Text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-inner">
          <h2>{t('tours.customTitle')}</h2>
          <p>{t('tours.customText')}</p>
          <a href="/contact" className="contact-button">
            {t('tours.customBtn')}
          </a>
        </div>
      </section>

      <TourModal pkg={selectedPackage} />
    </div>
  );
}
