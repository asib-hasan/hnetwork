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
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs">
                <Image
                  src="/logo.png"
                  alt="Homeo Network"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                Homeo<span className="text-[#0084FF]">Network</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              হোমিওপ্যাথিক চিকিৎসক, ক্লিনিক ও চিকিৎসা প্রতিষ্ঠানের জন্য নিবেদিত ডিজিটাল প্ল্যাটফর্ম ও টেকনোলজি সলিউশন।
            </p>

            <div className="flex gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> সর্বোচ্চ নিরাপত্তা
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                <HeartPulse className="w-3 h-3 text-[#0084FF]" /> ডাক্তার-প্রথম
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
                <Phone className="w-3.5 h-3.5 text-[#0084FF] shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-white transition-colors text-slate-200">
                  +৮৮০ ১৭০০-০০০০০০
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0084FF] shrink-0" />
                <a href="mailto:contact@homeonetwork.com" className="hover:text-white transition-colors text-slate-200">
                  contact@homeonetwork.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0084FF] shrink-0 mt-0.5" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© ২০২৬ Homeo Network. সর্বস্বত্ব সংরক্ষিত।</p>
          <span>হোমিওপ্যাথিক চিকিৎসকদের বিশ্বস্ত ডিজিটাল সঙ্গী</span>
        </div>
      </div>
    </footer>
  );
}
