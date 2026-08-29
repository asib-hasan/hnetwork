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
    default: "Homeo Network | হোমিওপ্যাথিক ডাক্তারদের ডিজিটাল প্ল্যাটফর্ম ও টেকনোলজি",
    template: "%s | Homeo Network"
  },
  description:
    "হোমিওপ্যাথিক ডাক্তার ও ক্লিনিকের জন্য বিশেষায়িত আধুনিক ওয়েবসাইট, গুগল লোকাল এসইও, স্বয়ংক্রিয় হোয়াটসঅ্যাপ অ্যাপয়েন্টমেন্ট এবং স্মার্ট প্র্যাকটিস ম্যানেজমেন্ট সফটওয়্যার।",
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
