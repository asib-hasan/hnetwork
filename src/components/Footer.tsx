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
          <div className="space-y-3.5">
            <Link href="/" className="inline-block group">
              <div className="bg-white rounded-xl px-3.5 py-2 inline-flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                <Image
                  src="/logo-full.png?v=1"
                  alt="Homeo Network"
                  width={150}
                  height={55}
                  className="h-11 w-auto object-contain"
                  unoptimized
                />
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              বাংলাদেশ হোমিওপ্যাথি বোর্ডের নিবন্ধিত DHMS ও বিএইচএমএস চিকিৎসকদের চেম্বার অটোমেশন ও ডিজিটাল প্রবৃদ্ধির নিবেদিত প্ল্যাটফর্ম।
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                <ShieldCheck className="w-3 h-3 text-blue-400" /> সর্বোচ্চ নিরাপত্তা
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                <HeartPulse className="w-3 h-3 text-[#38BDF8]" /> ডিগ্রিধারী ডাক্তার-প্রথম
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3">
              নেভিগেশন
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  সকল ডিজিটাল সেবাসমূহ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  ফ্রি স্ট্র্যাটেজি সেশন
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3">
              সমাধানসমূহ
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
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3">
              যোগাযোগ ও সহায়তা
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <a href="tel:+8801628044781" className="hover:text-white transition-colors text-slate-200">
                  +৮৮০ ১৬২৮-০৪৪৭৮১
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <a href="mailto:support@homeonetwork.com.bd" className="hover:text-white transition-colors text-slate-200">
                  support@homeonetwork.com.bd
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200">বাংলা মোটর, ঢাকা-১০০০</span>
                  <span className="text-[11px] text-slate-400">মিরপুর-১৪ (সরকারি হোমিও মেডিকেল কলেজ সংলগ্ন)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© ২০২৬ Homeo Network. সর্বস্বত্ব সংরক্ষিত।</p>
          <span>বাংলাদেশি হোমিওপ্যাথিক চিকিৎসকদের আধুনিক প্রযুক্তি সহযোগী</span>
        </div>
      </div>
    </footer>
  );
}
