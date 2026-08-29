import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Homeo Network | হোমিওপ্যাথিক চিকিৎসকদের ডিজিটাল প্ল্যাটফর্ম ও ক্লিনিক প্রযুক্তি",
    template: "%s | Homeo Network"
  },
  description:
    "বাংলাদেশ হোমিওপ্যাথি বোর্ডের নিবন্ধিত DHMS ও বিএইচএমএস চিকিৎসকদের আধুনিক ওয়েবসাইট, গুগল ম্যাপস ১ নম্বর এসইও, ক্লিনিক ম্যানেজমেন্ট সফটওয়্যার ও চেম্বার অটোমেশন।",
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
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#EFF6FF] selection:text-[#0052CC]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActionWidget />
      </body>
    </html>
  );
}
