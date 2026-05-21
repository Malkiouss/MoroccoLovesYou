export const servicePolicyIntro = [
  "Morocco Loves You is an international DMC company specialized in professional ground services in Morocco for travel agencies, tour operators, companies, private groups, VIP clients, and international organizations.",
  "We operate exclusively under a B2B business model."
];

export const servicePolicyMeta = {
  title: "Service Policy & Responsibility",
  subtitle: "Morocco Loves You - Professional DMC & Ground Services",
  seoTitle: "Service Policy & Responsibility | Morocco Loves You",
  metaDescription: "Professional B2B DMC service policy, responsibility terms, commitments, and limitation of liability for Morocco Loves You ground services in Morocco.",
  eyebrow: "International B2B DMC",
  commitmentsTitle: "Our Commitments & Responsibilities",
  commitmentsText: "Clear operating terms for agencies, tour operators, companies, organized groups, VIP clients, and professional partners.",
  ctaEyebrow: "Partner Support",
  ctaTitle: "Need a confirmed B2B program in Morocco?",
  ctaText: "Our team is available for professional itinerary coordination, quotation support, and 24/7 ground assistance.",
  ctaButton: "Contact Our Team",
  footerLink: "Service Policy"
};

export const servicePolicySections = [
  {
    title: "Service Commitment",
    text: "We are committed to delivering all services agreed upon in writing and confirmed in the signed agreement with our professional partners."
  },
  {
    title: "Our DMC Services",
    text: "Our services include hotels, transportation, tour guides, restaurants, excursions, logistics, VIP assistance, and 24/7 support."
  },
  {
    title: "Airline Tickets",
    text: "Morocco Loves You does not sell international airline tickets. We may assist with guidance and flight research, but responsibility for flights, delays, cancellations, or airline policies belongs to the airlines, travel agencies, and travelers themselves."
  },
  {
    title: "Medical & Travel Insurance",
    text: "We do not provide travel insurance or medical insurance. We strongly recommend that every traveler purchases full travel and medical insurance before arriving in Morocco."
  },
  {
    title: "Food & Catering Responsibility",
    text: "We work with recognized hotels, restaurants, and catering providers. Each establishment remains fully responsible for food quality, hygiene, freshness, food preparation, and service. Our role is to supervise and verify service quality standards. Morocco Loves You cannot be held responsible for food poisoning, allergies, digestive issues, or medical incidents related to food consumption."
  },
  {
    title: "Our Professional Responsibility",
    text: "We are responsible for respecting the confirmed itinerary, providing professional service, working with reliable hotels and partners, providing proper transportation, supplying professional multilingual guides, and supporting groups throughout their stay."
  },
  {
    title: "Tips",
    text: "Tour prices do not include tips for drivers and guides. It is customary to give up to €2.5 per traveler per day."
  },
  {
    title: "24/7 Assistance",
    text: "The Morocco Loves You team provides support 24/7 via phone, WhatsApp, and messaging services."
  },
  {
    title: "Limitation of Liability",
    text: "The company cannot be held responsible for circumstances beyond its control, including weather conditions, flight cancellations, strikes, governmental decisions, security situations, pandemics, and force majeure events. We will always do our best to assist clients and partners."
  },
  {
    title: "B2B Business Model",
    text: "We work exclusively with travel agencies, tour operators, companies, organized groups, and VIP clients. The final commercial relationship with travelers remains under the responsibility of the selling agency or partner."
  }
];

export const servicePolicySummary = {
  title: "Important Information",
  text: "Morocco Loves You operates as a professional B2B DMC company providing ground services in Morocco. International flights, travel insurance, medical insurance, airline delays, food-related medical incidents, and force majeure events are not included in our responsibility. Tips for drivers and guides are not included and are customarily up to €2.5 per traveler per day. Our team provides 24/7 assistance throughout the stay.",
  buttonText: "Read Full Service Policy",
  route: "/service-policy"
};

export const servicePolicyContractText = [
  "Service Policy & Responsibility",
  "Morocco Loves You - Professional DMC & Ground Services",
  ...servicePolicyIntro,
  ...servicePolicySections.map((section) => `${section.title}: ${section.text}`)
].join("\n\n");
