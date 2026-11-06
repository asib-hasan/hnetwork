import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  Activity,
  Users,
  Zap,
  MapPin,
  Globe,
  Sparkles,
  ChevronRight,
  Search,
  ShieldCheck,
  PhoneCall,
  ExternalLink
} from "lucide-react";
import { servicesList } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">

      {/* ===== 1. BESPOKE HERO SECTION (CLEAN, PROFESSIONAL & NON-AI) ===== */}
      <section className="relative pt-8 pb-10 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#F0F6FD]/90 via-white to-white border-b border-[#E2EDF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Clear Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Main Headline - Solid, Confident Typography (No AI rainbow gradients) */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B1E36] tracking-tight leading-[1.22]">
                হোমিওপ্যাথিক প্র্যাকটিসের জন্য{" "}
                <span className="text-[#07418b]">ওয়েবসাইট, ডিরেক্টরি</span> ও ডিজিটাল উপস্থিতি
              </h1>

              {/* Concrete Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                বাংলাদেশ হোমিওপ্যাথি বোর্ডের নিবন্ধিত DHMS ও ঢাকা বিশ্ববিদ্যালয়ের BHMS চিকিৎসকদের নিজস্ব ওয়েবসাইট তৈরি, ভেরিফায়েড ডিরেক্টরি লিস্টিং এবং গুগলে স্থানীয় রোগী বৃদ্ধির নির্ভরযোগ্য মাধ্যম।
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary text-xs sm:text-sm py-3 px-6 font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>চেম্বারের জন্য কথা বলুন</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="btn-outline-brand text-xs sm:text-sm py-3 px-5 font-semibold text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>সেবাগুলো দেখুন</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#07418b]" />
                </Link>
              </div>

              {/* Trust Indicators - Real Capabilities */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-600 border-t border-slate-200/80">
                <span className="flex items-center gap-1.5 font-medium text-[#0B1E36]">
                  <CheckCircle2 className="w-4 h-4 text-[#07418b]" />
                  <span>ক্লিনিকাল ওয়েবসাইট ডেভেলপমেন্ট</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#0B1E36]">
                  <CheckCircle2 className="w-4 h-4 text-[#07418b]" />
                  <span>দেশব্যাপী ভেরিফায়েড ডিরেক্টরি</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#0B1E36]">
                  <CheckCircle2 className="w-4 h-4 text-[#07418b]" />
                  <span>গুগল ম্যাপস ও লোকাল এসইও</span>
                </span>
              </div>

            </div>

            {/* Right Column: Realistic Chamber Web & Directory Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_32px_rgba(7,65,139,0.08)] overflow-hidden">
                
                {/* Browser Top Navigation Bar */}
                <div className="bg-slate-50/90 px-4 py-2.5 border-b border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-slate-300" />
                    <span className="size-2.5 rounded-full bg-slate-300" />
                    <span className="size-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="bg-white px-3 py-1 rounded-md text-[11px] text-slate-600 font-mono flex items-center gap-1.5 border border-slate-200 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#07418b]" />
                    <span>homeonetwork.com/dr-hasan</span>
                  </div>
                  <div className="w-7" />
                </div>

                {/* Doctor Chamber Interactive Portal Preview */}
                <div className="p-5 space-y-4">
                  
                  {/* Doctor Profile Header */}
                  <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                    <div className="size-12 rounded-xl bg-[#07418b] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      ডা
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-[#0B1E36] truncate">ডা. এম. এ. হাসান</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EBF3FC] text-[#07418b] border border-[#D0E2F5] shrink-0">
                          ভেরিফায়েড
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">BHMS (ঢাকা বিশ্ববিদ্যালয়), ডিএইচএমএস • রেজি: ১২৪৫০</p>
                      <p className="text-[11px] text-[#07418b] font-medium mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>ধানমন্ডি, ঢাকা • ক্রনিক রোগ ও কেস-টেকিং স্পেশালিস্ট</span>
                      </p>
                    </div>
                  </div>

                  {/* 3 Core Services in Chamber Portal */}
                  <div className="space-y-2">
                    
                    {/* Deliverable 1: Website */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F0F6FD] border border-[#D0E2F5] text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="size-6 rounded-md bg-[#07418b] text-white flex items-center justify-center shrink-0">
                          <Globe className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0B1E36] block">১. পার্সোনাল ওয়েবসাইট</span>
                          <span className="text-[10px] text-slate-500">অনলাইন চেম্বার ও রোগী অ্যাপয়েন্টমেন্ট</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#07418b] bg-white px-2 py-0.5 rounded-md border border-[#D0E2F5]">
                        লাইভ পোর্টাল
                      </span>
                    </div>

                    {/* Deliverable 2: Directory */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="size-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0B1E36] block">২. জাতীয় ডিরেক্টরি লিস্টিং</span>
                          <span className="text-[10px] text-slate-500">সারাদেশের রোগীদের জন্য উন্মুক্ত প্রোফাইল</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        লিস্টেড
                      </span>
                    </div>

                    {/* Deliverable 3: Digital Marketing */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="size-6 rounded-md bg-amber-600 text-white flex items-center justify-center shrink-0">
                          <Search className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0B1E36] block">৩. গুগল ম্যাপস ও এসইও</span>
                          <span className="text-[10px] text-slate-500">লোকাল এলাকায় গুগলে ১ নম্বর পজিশন</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        #১ র্যাংক
                      </span>
                    </div>

                  </div>

                  {/* Patient Action Footer */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px] font-medium text-slate-600">রোগীর সাথে সরাসরি যোগাযোগ:</span>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-[#07418b] text-white text-[11px] font-semibold flex items-center gap-1 shadow-2xs">
                        <PhoneCall className="w-3 h-3" />
                        <span>কল করুন</span>
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold flex items-center gap-1 shadow-2xs">
                        <span>হোয়াটসঅ্যাপ</span>
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 2. 3 CORE PILLARS OVERVIEW ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="card-bespoke p-6 space-y-2.5">
            <div className="size-10 rounded-xl bg-[#F0F6FD] text-[#07418b] flex items-center justify-center border border-[#D0E2F5]">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1E36]">
              ১. ডাক্তার ওয়েবসাইট ডেভেলপমেন্ট
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              ডাক্তারের নিজের নামে কাস্টম ডোমেইন, চেম্বার শিডিউল, ভিজিট ফি, প্রেসক্রিপশন গাইড এবং মোবাইল-বান্ধব ইন্টারফেস।
            </p>
          </div>

          <div className="card-bespoke p-6 space-y-2.5">
            <div className="size-10 rounded-xl bg-[#F0F6FD] text-[#07418b] flex items-center justify-center border border-[#D0E2F5]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1E36]">
              ২. জাতীয় ডাক্তার ডিরেক্টরি
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              সারাদেশের ৬৪ জেলার রোগীদের নিকট ডিগ্রিধারী চিকিৎসকের ভেরিফায়েড পরিচিতি ও সরাসরি বুকিং সুবিধা।
            </p>
          </div>

          <div className="card-bespoke p-6 space-y-2.5">
            <div className="size-10 rounded-xl bg-[#F0F6FD] text-[#07418b] flex items-center justify-center border border-[#D0E2F5]">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1E36]">
              ৩. গুগল ম্যাপস ও ডিজিটাল মার্কেটিং
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              গুগল বিজনেস প্রোফাইল অপ্টিমাইজেশন ও লোকাল এসইও, যার মাধ্যমে আশপাশের ক্রনিক রোগীরা সহজে খুঁজে পাবে।
            </p>
          </div>

        </div>
      </section>

      {/* ===== 5. CHRONIC DISEASE SPECIALTIES (WHERE BD PATIENTS SEARCH HOMEO ON GOOGLE) ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="badge-pill mb-2 inline-flex">
            <Globe className="w-3.5 h-3.5 text-[#0047BA]" />
            <span>গুগলে জটিল রোগী আকর্ষণ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            রোগভিত্তিক ডেডিকেটেড গুগল ল্যান্ডিং পেজ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            যেসব জটিল রোগের আরোগ্যের জন্য বাংলাদেশি রোগীরা গুগলে নির্ভরযোগ্য হোমিওপ্যাথিক ডাক্তার খোঁজেন:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {[
            { title: "পাইলস ও ফিস্টুলা", sub: "অর্শ, ভগন্দর ও এনাল ফিশার (বিনা অপারেশনে)", tag: "শীর্ষ অনুসন্ধান" },
            { title: "কিডনি ও গলব্লাডার পাথর", sub: "রেনাল ক্যালকুলাস অপসারণ কেয়ার", tag: "উচ্চ চাহিদা" },
            { title: "চর্ম ও ক্রনিক অ্যালার্জি", sub: "একজিমা, সোরিয়াসিস, মেছতা ও ছুলি", tag: "সর্বাধিক সার্চ" },
            { title: "হাঁপানি ও সাইনোসাইটিস", sub: "ক্রনিক অ্যালার্জিক রাইনাইটিস, পলিপাস", tag: "ক্রনিক কেয়ার" },
            { title: "মহিলাদের সিস্ট ও টিউমার", sub: "PCOD/PCOS, ওভারিয়ান সিস্ট, ফাইব্রয়েড", tag: "শীর্ষ স্পেশালিটি" },
            { title: "গ্যাস্ট্রিক, আইবিএস ও লিভার", sub: "ক্রনিক অম্লতা, আলসার, ফ্যাটি লিভার", tag: "নিত্যদিনের সমস্যা" },
            { title: "বাতব্যথা ও সায়াটিকা", sub: "রিউমাটয়েড আর্থ্রাইটিস, কোমর ব্যথা", tag: "ব্যথামুক্ত জীবন" },
            { title: "শিশু স্বাস্থ্য ও বিকাশ", sub: "ঘন ঘন টনসিল, কৃমি ও বিকাশগত বিলম্ব", tag: "কনস্টিটিউশনাল" },
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1.5 shadow-2xs hover:border-[#0047BA] transition-all">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0047BA] border border-blue-200">
                {item.tag}
              </span>
              <h4 className="text-xs font-bold text-slate-900 pt-1">{item.title}</h4>
              <p className="text-[10px] text-slate-500 leading-tight">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 5. SERVICES CATALOG ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36] mb-2">
            বিশেষায়িত ডিজিটাল সমাধান
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            ডিগ্রিধারী হোমিওপ্যাথিক চিকিৎসকদের প্র্যাকটিস আধুনিকায়ন ও রোগী বৃদ্ধির পূর্ণাঙ্গ সেবা।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="btn-outline-brand text-xs sm:text-sm py-2.5 px-6 inline-flex items-center gap-1.5 font-semibold"
          >
            <span>সেবাগুলোর বিস্তারিত বিবরণ দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ===== 6. COMPARISON TABLE ===== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">

            {/* Traditional */}
            <div className="p-6 space-y-3.5 bg-rose-50/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
                  <XCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">গতানুগতিক সনাতন চেম্বার</h3>
                  <span className="text-[11px] text-rose-600 font-medium">ম্যানুয়াল ও সীমাবদ্ধ প্রচার</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>কোয়াকদের ভিড়ে ডিগ্রিধারী চিকিৎসকের নিজস্ব কোনো অফিসিয়াল ওয়েবসাইট না থাকা</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>গুগল সার্চ বা ম্যাপসে এলাকার রোগীরা চেম্বারের সঠিক তথ্য ও লোকেশন খুঁজে না পাওয়া</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>জাতীয় ডিরেক্টরিতে নাম না থাকায় দূরবর্তী জটিল রোগীদের কাছে পৌঁছাতে না পারা</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>টার্গেটেড ডিজিটাল মার্কেটিং না থাকায় শুধুমাত্র মুখের সুপারিশে রোগী সীমাবদ্ধ থাকা</span>
                </li>
              </ul>
            </div>

            {/* With Homeo Network */}
            <div className="p-6 space-y-3.5 bg-blue-50/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#07418b]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Homeo Network-এর সাথে</h3>
                  <span className="text-[11px] text-[#07418b] font-semibold">আধুনিক ও দেশব্যাপী গ্রহণযোগ্যতা</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#07418b] shrink-0 mt-0.5" />
                  <span>নিজস্ব ডোমেইনে মোবাইল-বান্ধব ডাক্তার ওয়েবসাইট ও প্রফেশনাল পরিচিতি</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#07418b] shrink-0 mt-0.5" />
                  <span>গুগল সার্চ ও গুগল ম্যাপসে ক্রনিক রোগীর জন্য এলাকার ১ নম্বর অবস্থান</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#07418b] shrink-0 mt-0.5" />
                  <span>দেশব্যাপী কেন্দ্রীয় ডাক্তার ডিরেক্টরিতে ভেরিফায়েড প্রোফাইল ও রোগীর আস্থা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#07418b] shrink-0 mt-0.5" />
                  <span>টার্গেটেড ডিজিটাল প্রচারণা ও সরাসরি ফোন/হোয়াটসঅ্যাপ রোগী পরামর্শ সুবিধা</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 8. TESTIMONIALS ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            সম্মানিত রেজিস্টার্ড চিকিৎসকদের মতামত
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            চেম্বার আধুনিকায়নের পর বাংলাদেশি চিকিৎসকদের বাস্তব অভিজ্ঞতা।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="rounded-xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-2.5">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;আমাদের ৮০% সিরিয়াল এখন ওয়েবসাইটের মাধ্যমে স্বয়ংক্রিয়ভাবে আসে। পুরানা পল্টন ও মতিঝিল এলাকায় গুগলে আমাদের চেম্বার ১ নম্বরে থাকায় প্রতিদিন নতুন শিক্ষিত রোগী পাচ্ছি।&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs">
                তা
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">ডা. মো. তারিকুল ইসলাম</h4>
                <p className="text-[10px] text-slate-500">DHMS (বাংলাদেশ হোমিওপ্যাথি বোর্ড), ঢাকা</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-white border border-[#0047BA] shadow-md ring-1 ring-blue-100 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic font-medium">
                &ldquo;ডিজিটাল ওয়েবসাইট ও ডিরেক্টরি লিস্টিংয়ের মাধ্যমে আমার এলাকায় গুগল সার্চে ১ নম্বরে অবস্থান তৈরি হয়েছে। এখন প্রতিদিন নতুন ক্রনিক রোগীরা সরাসরি চেম্বারে আসছেন।&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0047BA] text-white flex items-center justify-center font-bold text-xs">
                সা
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">ডা. সাবরিনা জাহান</h4>
                <p className="text-[10px] text-slate-500">BHMS (ঢাকা বিশ্ববিদ্যালয়), ধানমন্ডি, ঢাকা</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-2.5">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;প্রফেশনাল ডিজিটাল প্রেসক্রিপশন ও ক্লিনিক ম্যানেজমেন্ট সফটওয়্যার আমাদের ২৫ বছরের পুরনো ঐতিহ্যবাহী চেম্বারকে আধুনিক কর্পোরেট মানের ক্লিনিকাল রূপ দিয়েছে।&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0047BA] flex items-center justify-center font-bold text-xs">
                ক
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">ডা. এম. এ. করিম</h4>
                <p className="text-[10px] text-slate-500">সিনিয়র কনসালটেন্ট, আগ্রাবাদ, চট্টগ্রাম</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 9. FAQ ===== */}
      <FAQSection />

    </div>
  );
}
