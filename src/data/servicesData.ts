export interface ServiceItem {
  id: string;
  title: string;
  bengaliTitle: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  deliverables: string[];
  benefits: string[];
  badgeColor?: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "medical-website",
    title: "Specialized Doctor & Clinic Websites",
    bengaliTitle: "হোমিওপ্যাথিক ডাক্তার ও ক্লিনিকের ওয়েবসাইট",
    shortDesc: "High-speed, SEO-engineered websites tailored specifically for homeopathic practitioners and specialized clinics.",
    fullDesc: "Unlike generic web design, we understand how patients seek homeopathic treatment. We build lightning-fast, mobile-first websites showcasing your credentials, treatment methodologies, patient success stories, and verified chamber locations.",
    iconName: "Globe",
    tag: "Core Digital Asset",
    deliverables: [
      "Custom responsive website (Next.js & modern UX)",
      "Doctor bio, credentials & clinic history",
      "Specialty disease treatment pages (Allergy, Skin, Arthritis, PCOD, etc.)",
      "Interactive Google Maps & chamber directions",
      "SSL 256-bit security & HIPAA-compliant data privacy",
      "Mobile-first, lightning fast 98+ Google PageSpeed"
    ],
    benefits: [
      "Establish instant professional authority & trust",
      "Rank at the top of local Google searches",
      "Attract informed, committed patients seeking homeopathic care"
    ]
  },
  {
    id: "online-appointments",
    title: "Smart Appointment & Telemedicine",
    bengaliTitle: "অনলাইন অ্যাপয়েন্টমেন্ট ও টেলিমেডিসিন",
    shortDesc: "24/7 automated booking system with automated WhatsApp/SMS alerts and seamless video consultation.",
    fullDesc: "Eliminate chamber phone chaos. Allow patients from anywhere in Bangladesh and abroad to book chamber visits or virtual video consultations with automated slot management, fee collection, and reminder alerts.",
    iconName: "CalendarCheck",
    tag: "Automation Engine",
    deliverables: [
      "24/7 self-service patient booking portal",
      "Automated WhatsApp & SMS appointment reminders",
      "Integrated HD video telemedicine for remote patients",
      "Doctor schedule & chamber slot customizer",
      "Digital prescription delivery integration",
      "Pre-appointment case questionnaire form"
    ],
    benefits: [
      "Reduce no-shows by up to 75% with automated reminders",
      "Save 10+ hours per week of receptionist / assistant time",
      "Expand your practice across national and international borders"
    ]
  },
  {
    id: "medical-seo",
    title: "Specialized Healthcare & Local SEO",
    bengaliTitle: "হোমিওপ্যাথিক এসইও ও গুগল র‍্যাংকিং",
    shortDesc: "Dominate Google search results and Google Maps when patients search for homeopathic treatments in your city.",
    fullDesc: "When patients search 'Best Homeopathic Doctor for Chronic Migraine' or 'Homeopathic Clinic near me', our specialized healthcare SEO guarantees top placement on Google Search and Google Maps.",
    iconName: "Search",
    tag: "High ROI Search",
    deliverables: [
      "Google Business Profile (Maps) optimization & verification",
      "Targeted homeopathic disease & remedy keyword strategy",
      "Local citation building across healthcare directories",
      "Schema.org MedicalBusiness structured data for rich snippets",
      "High-authority medical backlink acquisition",
      "Monthly search visibility & patient traffic reports"
    ],
    benefits: [
      "Organic stream of qualified patient calls every day",
      "Zero reliance on expensive paid ads for recurring traffic",
      "Dominant reputation as the premier specialist in your area"
    ]
  },
  {
    id: "digital-marketing",
    title: "Targeted Digital Ads & Patient Acquisition",
    bengaliTitle: "টার্গেটেড ডিজিটাল মার্কেটিং ও ক্যাম্পেইন",
    shortDesc: "Precision campaigns on Facebook, Instagram, and Google to reach patients seeking natural chronic healing.",
    fullDesc: "Reach patients struggling with long-term conditions who haven't found relief in conventional medicine. We design educational, ethical, and high-converting ad funnels that direct qualified patients directly to your chamber.",
    iconName: "TrendingUp",
    tag: "Growth Accelerator",
    deliverables: [
      "Meta Ads (Facebook & Instagram) hyper-targeted by condition & location",
      "Google Search PPC for urgent patient appointment searches",
      "Engaging Bengali & English medical ad copy and visual creatives",
      "A/B split testing of ad creatives and booking landing pages",
      "Full conversion tracking and cost-per-patient optimization",
      "Dedicated account strategist & monthly review calls"
    ],
    benefits: [
      "Predictable influx of new patient inquiries every week",
      "Fill open chamber slots during slower seasons",
      "Direct connection to patients actively seeking homeopathic care"
    ]
  },
  {
    id: "branding-identity",
    title: "Branding, Logo & Clinic Identity",
    bengaliTitle: "ব্র্যান্ডিং, লোগো ও ক্লিনিক্যাল আইডেন্টিটি",
    shortDesc: "Elite visual branding that reflects the science, purity, and clinical prestige of your medical practice.",
    fullDesc: "Transform your chamber from a simple office into a recognized healthcare brand. From modern logos and stationery to prescription pads and clinic signage, we craft cohesive identities that exude medical excellence.",
    iconName: "Palette",
    tag: "Visual Prestige",
    deliverables: [
      "Custom clinic & doctor logo design with vector master files",
      "Professional prescription pad, envelope, and letterhead layouts",
      "Premium visiting card and patient appointment card design",
      "Outdoor signage, light-box, and chamber interior branding guidelines",
      "Digital brand kit with official color palettes, fonts, and icons",
      "Certificate framing designs and staff identity templates"
    ],
    benefits: [
      "Command higher consultation fees with elevated brand perception",
      "Foster long-term patient loyalty and word-of-mouth referral",
      "Stand out dramatically from outdated competitor clinics"
    ]
  },
  {
    id: "clinic-crm-software",
    title: "Clinic CRM & Practice Management Software",
    bengaliTitle: "স্মার্ট চেম্বার সফটওয়্যার ও পেশেন্ট সিআরএম",
    shortDesc: "All-in-one digital case-taking, electronic health records (EHR), and automated patient follow-up software.",
    fullDesc: "Customized for the unique workflow of classical and clinical homeopathy. Record detailed repertory notes, potencies, follow-up evaluations, and automatically trigger medication refill and check-up notifications.",
    iconName: "Database",
    tag: "Practice Intelligence",
    deliverables: [
      "Cloud-based Electronic Health Records (EHR) accessible on PC/mobile",
      "Homeopathic case-taking template (symptoms, modalities, miasms)",
      "Digital prescription generator with printed or WhatsApp copy",
      "Automated follow-up scheduling and refill alert engine",
      "Chamber income, patient volume, and medicine inventory tracking",
      "Multi-chamber & assistant access role management"
    ],
    benefits: [
      "Retrieve any patient history in 2 seconds instead of digging in paper files",
      "Increase patient retention by 60% through timely follow-up alerts",
      "Keep all patient data 100% encrypted, backed-up, and secure"
    ]
  },
  {
    id: "social-media-management",
    title: "Social Media & Video Health Awareness",
    bengaliTitle: "সোশ্যাল মিডিয়া ও হেলথ ভিডিও কন্টেন্ট",
    shortDesc: "Engaging educational video reels, disease infographics, and authority-building content for Facebook & Instagram.",
    fullDesc: "Patients trust doctors who educate. We handle your entire social media presence: researching health topics, scripting short-form video reels, designing eye-catching infographics, and managing community questions.",
    iconName: "Share2",
    tag: "Community Building",
    deliverables: [
      "12-16 custom designed social media posts & infographics monthly",
      "Short-form video reel scripting & editing for Facebook/YouTube/Instagram",
      "Patient FAQ answering and engagement moderation",
      "Meta verification (blue badge) guidance & profile optimization",
      "Educational disease awareness campaigns (Migraine, Psoriasis, GERD, etc.)",
      "Quarterly patient community growth strategies"
    ],
    benefits: [
      "Build a loyal following of tens of thousands of health-conscious people",
      "Establish yourself as the go-to homeopathic voice on social media",
      "Turn passive followers into lifelong chamber patients"
    ]
  },
  {
    id: "tech-automation",
    title: "Custom Tech & WhatsApp Automation",
    bengaliTitle: "কাস্টম প্রযুক্তিগত সমাধান ও অটোমেশন",
    shortDesc: "Smart WhatsApp chatbots, automated medicine courier updates, and clinic workflow integration.",
    fullDesc: "Eliminate repetitive queries like 'Chamber open today?', 'What is your address?', or 'Did my courier ship?'. Our intelligent WhatsApp bot answers questions instantly 24/7 and routes urgent cases to your team.",
    iconName: "Cpu",
    tag: "Smart Operations",
    deliverables: [
      "Verified WhatsApp Business API integration",
      "Automated FAQ answering bot (chamber timings, address, fees)",
      "Medicine courier tracking notification integration (Steadfast, Pathao, etc.)",
      "Custom payment gateway (bKash, Nagad, Cards) for online consultations",
      "Automated patient review collection workflow after consultation",
      "End-to-end integration with your existing clinic workflow"
    ],
    benefits: [
      "Zero lost patients due to slow WhatsApp response time",
      "Deliver a 5-star digital experience comparable to top corporate hospitals",
      "Save your clinic staff 3+ hours of manual messaging daily"
    ]
  }
];
