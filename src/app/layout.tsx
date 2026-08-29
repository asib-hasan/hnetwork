import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-jakarta)] bg-[#F8FAFC] text-[#0F172A] antialiased">
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
