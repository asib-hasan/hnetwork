import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ExternalLink,
  HeartPulse,
  Clock
} from "lucide-react";
import { servicesList } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="relative bg-[#040813] border-t border-[#00A3FF]/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#00A3FF]/10 to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#00A3FF]/15">
          
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-1 bg-[#0A1630] border border-[#00A3FF]/40 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Homeo Network"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white font-[Outfit]">
                Homeo<span className="text-[#00A3FF]">Network</span>
              </span>
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md">
              <strong className="text-white">Homeo Network</strong> একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম ও টেকনোলজি পার্টনার, যা পেশাদার হোমিওপ্যাথিক ডাক্তার ও ক্লিনিকগুলোর জন্য ডেডিকেটেড ওয়েবসাইট, অনলাইন অ্যাপয়েন্টমেন্ট, এসইও, সিআরএম সফটওয়্যার ও ডিজিটাল গ্রোথ নিশ্চিত করে।
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/25 text-[11px] font-medium text-[#38BDF8]">
                <ShieldCheck className="w-3.5 h-3.5" /> Medical Grade Security
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/25 text-[11px] font-medium text-[#38BDF8]">
                <HeartPulse className="w-3.5 h-3.5" /> Doctor First UX
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4 font-[Outfit]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="/" className="hover:text-[#00E5FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                  All Digital Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00E5FF] transition-colors">
                  About & Mission
                </Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-[#00E5FF] transition-colors">
                  Clinic Growth Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00E5FF] transition-colors">
                  Book Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4 font-[Outfit]">
              Digital Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              {servicesList.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-[#00E5FF] transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#00A3FF] hover:text-white font-medium inline-flex items-center gap-1 mt-1"
                >
                  <span>View all 8 services</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4 font-[Outfit]">
              Contact & Chamber Support
            </h4>
            <ul className="space-y-3 text-xs text-[#94A3B8]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+8801700000000" className="hover:text-white transition-colors block">
                    +880 1700-000000
                  </a>
                  <span className="text-[10px] text-[#64748B]">WhatsApp & Phone Hotline</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contact@homeonetwork.com" className="hover:text-white transition-colors block">
                    contact@homeonetwork.com
                  </a>
                  <span className="text-[10px] text-[#64748B]">Official Inquiries</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh — Serving Worldwide</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>Support: 10:00 AM - 10:00 PM (Daily)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} Homeo Network. All rights reserved. Transforming Homeopathy with Digital Engineering.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#94A3B8]">Built with Next.js & Google-Grade Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
