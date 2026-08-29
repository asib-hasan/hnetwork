import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, HeartPulse } from "lucide-react";
import { servicesList } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden p-1 bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Homeo Network"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white font-[Outfit]">
                Homeo<span className="text-sky-400">Network</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated digital platform and technology solutions for homeopathic doctors, clinics, and medical institutions.
            </p>

            <div className="flex gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> HIPAA Security
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                <HeartPulse className="w-3 h-3 text-sky-400" /> Doctor First
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3 font-[Outfit]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Digital Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book Strategy Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3 font-[Outfit]">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {servicesList.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3 font-[Outfit]">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-white transition-colors text-slate-200">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:contact@homeonetwork.com" className="hover:text-white transition-colors text-slate-200">
                  contact@homeonetwork.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Homeo Network. All rights reserved.</p>
          <span>Modern Next.js Healthcare Platform</span>
        </div>
      </div>
    </footer>
  );
}
