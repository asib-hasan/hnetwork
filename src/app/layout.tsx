import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionWidget from "@/components/FloatingActionWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Homeo Network | Healthcare Technology & Digital Solutions",
    template: "%s | Homeo Network"
  },
  description:
    "Modern websites, Google local SEO, automated WhatsApp booking, and clinic software engineered specifically for homeopathic practices.",
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
    <html lang="en" className={inter.variable}>
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
