export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  benefits: string[];
}

export const servicesList: ServiceItem[] = [
  {
    id: "medical-website",
    title: "Specialized Doctor Websites",
    iconName: "Globe",
    tag: "Core Asset",
    shortDesc: "Fast, Google-optimized doctor websites showcasing your clinical specialty, credentials, and chamber hours.",
    fullDesc: "Modern, secure Next.js websites built specifically for homeopathic practitioners. Includes chronic condition treatment pages, patient education blogs, and verified credentials.",
    deliverables: [
      "Custom responsive website (Next.js & modern UX)",
      "Doctor bio, credentials & chamber timings",
      "Specialty treatment pages (Skin, Asthma, Allergy, PCOD, etc.)",
      "Integrated patient contact & inquiry forms"
    ],
    benefits: [
      "Instantly build clinical trust and authority",
      "24/7 digital presence for patient discovery",
      "100% mobile-friendly and ultra-fast loading"
    ]
  },
  {
    id: "online-appointments",
    title: "Online Booking & Telemedicine",
    iconName: "CalendarCheck",
    tag: "Automation",
    shortDesc: "Automated booking system with WhatsApp confirmations and encrypted HD video telemedicine.",
    fullDesc: "Eliminate receptionist phone calls with self-service booking. Patients receive instant WhatsApp alerts with chamber directions or private video consultation links.",
    deliverables: [
      "Self-service patient appointment calendar",
      "Automated WhatsApp & SMS reminders",
      "Pre-case symptom notes collection form",
      "Integrated HD video telemedicine for remote patients"
    ],
    benefits: [
      "Cut appointment no-show rates by 75%",
      "Zero receptionist overhead during busy hours",
      "Expand patient reach across districts and overseas"
    ]
  },
  {
    id: "medical-seo",
    title: "Google Local & Medical SEO",
    iconName: "Search",
    tag: "High ROI",
    shortDesc: "Rank #1 on Google Search and Google Maps for high-intent homeopathic treatment searches.",
    fullDesc: "Targeted local healthcare SEO that places your chamber at the top of Google when patients in your city search for classical homeopathy and chronic cures.",
    deliverables: [
      "Google Business Profile (Maps) #1 optimization",
      "Targeted homeopathic disease & remedy keyword strategy",
      "Local healthcare directory citations",
      "Automated 5-star Google review collection system"
    ],
    benefits: [
      "Consistent organic stream of new patient calls",
      "High local search visibility without recurring ad costs",
      "Established clinical reputation in your city"
    ]
  },
  {
    id: "digital-marketing",
    title: "Targeted Patient Ads",
    iconName: "TrendingUp",
    tag: "Growth",
    shortDesc: "Precision campaigns on Google, Facebook, and Instagram reaching patients seeking natural healing.",
    fullDesc: "Ethical medical marketing campaigns targeting patients suffering from chronic ailments like eczema, psoriasis, migraine, and arthritis with proven conversion funnels.",
    deliverables: [
      "Meta (Facebook & Instagram) disease-targeted campaigns",
      "Google Search PPC for urgent doctor searches",
      "Engaging medical ad creatives",
      "Dedicated conversion landing pages & analytics"
    ],
    benefits: [
      "Predictable influx of new chronic cases",
      "Hyper-targeted by geographical location and age",
      "Transparent ROI and detailed monthly analytics"
    ]
  },
  {
    id: "branding-identity",
    title: "Branding & Logo Identity",
    iconName: "Palette",
    tag: "Prestige",
    shortDesc: "Distinguished branding reflecting the science, purity, and clinical prestige of your practice.",
    fullDesc: "Complete visual identity kit crafted for homeopathy clinics. From elegant logos and prescription pads to chamber signage and digital letterheads.",
    deliverables: [
      "Custom medical clinic logo with vector master files",
      "Professional prescription pad, envelope & card designs",
      "Chamber signboard & reception backdrop mockups",
      "Complete brand guideline (colors, fonts, usage)"
    ],
    benefits: [
      "Command respect as an elite healthcare institute",
      "Uniform clinical branding across print and digital",
      "Memorable identity that patients remember and recommend"
    ]
  },
  {
    id: "clinic-crm-software",
    title: "Clinic CRM & Case History",
    iconName: "Database",
    tag: "Software",
    shortDesc: "Cloud-based digital case taking, encrypted health records (EHR), and automated follow-ups.",
    fullDesc: "Cloud-based homeopathic practice software with symptom repertorization notes, past prescription archives, and automated follow-up reminders.",
    deliverables: [
      "Cloud electronic health records (EHR) with 256-bit encryption",
      "Homeopathic case-taking & miasmatic evaluation module",
      "QR-code enabled digital prescription generator",
      "Patient retention & follow-up tracking"
    ],
    benefits: [
      "Retrieve complete case histories in 2 seconds",
      "Eliminate fragile paper files permanently",
      "Boost long-term chronic patient retention by 60%"
    ]
  },
  {
    id: "social-media-management",
    title: "Social Media & Health Content",
    iconName: "Share2",
    tag: "Awareness",
    shortDesc: "Engaging educational video reels, infographics, and authority-building healthcare posts.",
    fullDesc: "Turn your practice into a trusted medical voice with customized health awareness content, chronic disease explainers, and homeopathic case study showcases.",
    deliverables: [
      "12-16 custom designed social media posts & carousels/month",
      "Short-form video reels scriptwriting & editing",
      "Community management & patient inquiry responses",
      "Monthly audience growth and engagement report"
    ],
    benefits: [
      "Establish authority as a leading homeopathic expert",
      "Educate public on natural non-toxic healing",
      "Continuous organic patient referrals via social platforms"
    ]
  },
  {
    id: "tech-automation",
    title: "WhatsApp Bot & Automation",
    iconName: "Cpu",
    tag: "Efficiency",
    shortDesc: "Smart WhatsApp chatbots, automated medicine courier updates, and clinic workflow integration.",
    fullDesc: "Automate repetitive chamber tasks. WhatsApp bots answer patient FAQs, verify clinic open hours, and dispatch courier tracking for home-delivered remedies.",
    deliverables: [
      "Verified WhatsApp Business API integration",
      "Automated FAQ answering bot (chamber address, fees, timings)",
      "Medicine courier tracking integration",
      "Automated birthday & seasonal wellness greetings"
    ],
    benefits: [
      "Save 8+ staff hours every week",
      "Instant response to patients 24 hours a day",
      "Seamless medicine delivery tracking for patients"
    ]
  }
];
