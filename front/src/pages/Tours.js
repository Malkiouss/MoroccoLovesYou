import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PageHeader from '../components/PageHeader';
import './Tours.css';

export default function Tours() {
  const { t } = useLanguage();
  const [selectedPackage, setSelectedPackage] = React.useState(null);

  const premiumPackages = [
    {
      id: "pkg1",
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop',
      title: "Fes Luxury Weekend Escape",
      duration: "3 Nights / 4 Days (Thursday → Sunday)",
      price: "€790",
      highlights: [
        "Direct roundtrip flights included (London/Europe)",
        "4–5 star luxury hotels",
        "Traditional Moroccan hammam",
        "Cooking & art workshops",
        "Moroccan live performances"
      ],
      fullDetails: {
        subtitle: "All-Inclusive Package – From A to Z",
        flights: ["Direct roundtrip flights", "20kg checked luggage", "Cabin luggage up to 8kg"],
        included: [
          "Airport pickup & transfer back",
          "4–5 star hotels (Half board)",
          "Fresh & authentic Moroccan cuisine",
          "Traditional tea & pastries experience",
          "Professional tour guide & Private driver",
          "Modern air-conditioned transportation",
          "Special live performances (Singers & dancers)",
          "Traditional market tours (Spice, Lantern, Carpet)",
          "Cooking & Art workshops (Pre-booking required)",
          "Natural springs & Viewpoints visits",
          "Day trips to Chefchaouen & Ifrane",
          "Visits with local Moroccan families",
          "Surprise experiences during the tour"
        ],
        suitableFor: ["Couples", "Families", "Groups", "Solo travelers", "Seniors", "Companies", "Travel agencies", "Tour operators"]
      }
    },
    {
      id: "pkg2",
      image: 'https://images.unsplash.com/photo-1552683526-616900f6b3b5?w=600&h=400&fit=crop',
      title: "Morocco Luxury Discovery Tour",
      duration: "6 Nights / 7 Days (Monday → Sunday)",
      price: "€1490",
      highlights: [
        "Fes & North Morocco Route",
        "Chefchaouen & Tangier visits",
        "Direct flights & private driver",
        "Premium locations & high-level service",
        "Authentic Moroccan hospitality"
      ],
      fullDetails: {
        subtitle: "Fes & North Morocco Route (All Inclusive)",
        route: "2 nights Fes, 1 night Chefchaouen, 1 night Tangier, 1 night Ifrane, 1 final night Fes",
        flights: ["Direct roundtrip flights from Europe", "20kg luggage + Cabin luggage"],
        transportation: ["Airport pickup & transfer", "Private professional driver & tour guide", "New air-conditioned vehicles"],
        hotels: ["4–5 star hotels", "Premium locations", "High-level service"],
        food: ["Half board", "Authentic cuisine", "Traditional tea & pastries"],
        experiences: [
          "Moroccan live performances",
          "Traditional markets (Spice, Lantern, Carpet)",
          "Traditional Moroccan hammam",
          "Nature & forest visits",
          "Beautiful viewpoints & Day trips",
          "Cooking & art workshops",
          "Visits with local families",
          "Special surprises during the trip"
        ],
        suitableFor: ["Couples", "Families", "Groups", "Solo travelers", "Seniors", "Companies", "Travel agencies"]
      }
    },
    {
      id: "pkg3",
      image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop',
      title: "Morocco Grand Experience",
      duration: "10 Nights / 11 Days (Global Travelers)",
      price: "€1990",
      highlights: [
        "Full premium ground services",
        "Casablanca, Marrakech & Fes",
        "Agadir & Sahara desert surprises",
        "Visit Ouarzazate & Chefchaouen",
        "Special live music & performances"
      ],
      fullDetails: {
        subtitle: "✨ Morocco Grand Experience (Ground Services Only)",
        arrival: "Casablanca or Marrakech",
        route: "Casablanca, Rabat, 2 nights Fes, Tangier, Chefchaouen, Ifrane, 2 nights Marrakech, Agadir, Ouarzazate, final night Marrakech",
        notes: [
          "Minimum: 20 travelers",
          "Groups > 40: Special discount of $50 per person",
          "International flights & insurance NOT included",
          "Tips for driver/guide NOT included"
        ],
        included: [
          "Full premium ground services",
          "4–5 star hotels (Half board)",
          "Professional tour guide & Private driver",
          "Air-conditioned bus or minibus",
          "Live performances & music atmosphere",
          "Traditional markets & Hammam visits",
          "Cooking & art workshops",
          "Excursions to forests, springs & viewpoints",
          "Visits with local families",
          "Special surprises during the journey"
        ]
      }
    },
    {
      id: "pkg4",
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=400&fit=crop',
      title: "Morocco Imperial & Sahara Experience",
      duration: "13 Nights / 14 Days",
      price: "All Inclusive",
      highlights: [
        "2 Nights Merzouga Sahara Desert",
        "Premium AC tents & Jeep excursions",
        "Visit Atlas Mountains & Ourika Valley",
        "Ouzoud Waterfalls & Imperial Cities",
        "Full ground services from A to Z"
      ],
      fullDetails: {
        subtitle: "✨ Morocco Imperial & Sahara Experience (Full Ground Services)",
        route: "2 nights Marrakech, Ourika Valley, Agadir, 2 nights Merzouga, Ouarzazate, Ouzoud Waterfalls, Ifrane, Tangier, Chefchaouen, 2 nights Fes, El Jadida, Casablanca",
        sahara: [
          "Premium air-conditioned desert tents",
          "Campfire music atmosphere",
          "Jeep excursions & Camel rides",
          "Unforgettable sunsets & sunrises"
        ],
        included: [
          "Full premium ground services",
          "4–5 star hotels (Half board)",
          "Professional tour guide & Private driver",
          "Special live performances & dancers",
          "Traditional spice, carpet & lantern markets",
          "Traditional Moroccan hammam",
          "Cooking & art workshops",
          "Visits with local families",
          "Special surprises during the journey"
        ],
        notes: ["Minimum: 20 travelers"]
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
          <div className="travel-card-badge">{pkg.price}</div>
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
            <h4>HIGHLIGHTS:</h4>
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
              View Full Details
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

            <button type="button" className="travel-card-btn">
              Book Now
            </button>
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
            aria-label="Close details"
          >
            ×
          </button>

          <div className="tour-modal-image">
            <img src={pkg.image} alt={pkg.title} />
            <div className="travel-card-badge">{pkg.price}</div>
          </div>

          <div className="tour-modal-content">
            <span className="tour-modal-kicker">Premium Package</span>
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
                <h5>Arrival:</h5>
                <p>{pkg.fullDetails.arrival}</p>
              </div>
            )}

            {pkg.fullDetails.route && (
              <div className="details-section route-box">
                <h5>Route:</h5>
                <p>{pkg.fullDetails.route}</p>
              </div>
            )}

            <DetailList title="Flights:" items={pkg.fullDetails.flights} />
            <DetailList title="Transportation:" items={pkg.fullDetails.transportation} />
            <DetailList title="Hotels:" items={pkg.fullDetails.hotels} />
            <DetailList title="Food & Dining:" items={pkg.fullDetails.food} />
            <DetailList title="What's Included:" items={pkg.fullDetails.included} />
            <DetailList title="Attractions & Experiences:" items={pkg.fullDetails.experiences} />

            {pkg.fullDetails.sahara && (
              <div className="details-section sahara-special">
                <h5>Special Sahara Experience:</h5>
                <ul className="details-list">
                  {pkg.fullDetails.sahara.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {pkg.fullDetails.suitableFor && (
              <div className="details-section">
                <h5>Suitable For:</h5>
                <p className="suitable-text">
                  {pkg.fullDetails.suitableFor.join(' • ')}
                </p>
              </div>
            )}

            {pkg.fullDetails.notes && (
              <div className="details-section notes">
                <h5>Important Notes:</h5>
                <ul className="details-list">
                  {pkg.fullDetails.notes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="card-messages">
              <div className="message-box price-warning">
                <strong>Price Information:</strong>
                <p>
                  Prices may change depending on flight prices, exchange rates,
                  holidays, seasons, and hotel availability.
                </p>
              </div>

              <div className="message-box safety">
                <strong>Safety & Comfort:</strong>
                <p>
                  We work in coordination with Moroccan authorities and security
                  services to ensure the safety and comfort of our guests.
                </p>
              </div>

              <div className="message-box values">
                <strong>Morocco Loves You gives more:</strong>
                <p>
                  More love, care, professionalism, joy, and safety. Easy and
                  relaxing tours with real human hospitality.
                </p>
              </div>
            </div>

            <div className="tour-modal-actions">
              <button type="button" className="tour-modal-book-btn">
                Book This Package
              </button>

              <button
                type="button"
                className="tour-modal-secondary-btn"
                onClick={() => setSelectedPackage(null)}
              >
                Back to Packages
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
        bgImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop"
      />

      <section className="travel-cards-section premium-bg">
        <div className="tours-container">
          <div className="section-header">
            <h2>Premium Morocco Packages</h2>
            <p>Exclusive, carefully curated experiences for our discerning guests.</p>
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