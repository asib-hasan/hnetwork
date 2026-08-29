import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";
import FloatingActionWidget from "@/components/FloatingActionWidget";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Homeo Network | Digital Platform & Tech Solutions for Homeopathic Doctors",
    template: "%s | Homeo Network"
  },
  description:
    "Homeo Network is the premier digital platform and tech provider empowering homeopathic doctors with high-performance websites, 24/7 online appointments, healthcare SEO, clinic CRM, and patient acquisition engines.",
  keywords: [
    "Homeopathic doctor website",
    "Homeopathy telemedicine software",
    "Homeopathic clinic CRM",
    "Medical SEO for homeopaths",
    "Homeo Network",
    "হোমিওপ্যাথিক ডাক্তার ওয়েবসাইট",
    "হোমিওপ্যাথিক সফটওয়্যার",
    "Doctor appointment booking system Bangladesh",
    "Healthcare digital marketing"
  ],
  authors: [{ name: "Homeo Network Digital Health Team" }],
  creator: "Homeo Network",
  publisher: "Homeo Network",
  metadataBase: new URL("https://homeonetwork.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Homeo Network | Futuristic Digital Platform for Homeopathic Doctors",
    description:
      "Transform your homeopathic practice with specialized medical websites, automated booking, top-tier Google SEO, and smart clinic software.",
    url: "https://homeonetwork.com",
    siteName: "Homeo Network",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Homeo Network Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeo Network | Digital Tech for Homeopathic Doctors",
    description:
      "Specialized website development, SEO, online appointment booking, and clinic software for homeopaths.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Homeo Network",
    "image": "https://homeonetwork.com/logo.png",
    "@id": "https://homeonetwork.com",
    "url": "https://homeonetwork.com",
    "telephone": "+8801700000000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "description": "Digital platform and technology provider dedicated to homeopathic doctors, offering websites, online appointments, SEO, CRM software, and branding.",
    "serviceType": [
      "Homeopathic Website Development",
      "Online Appointment & Telemedicine",
      "Healthcare SEO",
      "Clinic CRM Software",
      "Digital Marketing for Doctors"
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-jakarta)] bg-[#050B17] text-[#F1F5F9] relative selection:bg-[#00A3FF] selection:text-white">
        {/* Futuristic Interactive Background Canvas */}
        <NetworkCanvas />

        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#0047BA]/20 via-[#00A3FF]/10 to-transparent blur-[120px] pointer-events-none z-0"></div>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Helpline & Consultation Widget */}
        <FloatingActionWidget />
      </body>
    </html>
  );
}
