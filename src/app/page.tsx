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
  ChevronRight
} from "lucide-react";
import { servicesList } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">

      {/* ===== 1. HERO SECTION (NO IMAGE - CLEAN & HIGH-CONVERSION) ===== */}
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-14 bg-gradient-to-b from-emerald-50/50 via-white to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-7">

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] max-w-4xl mx-auto">
            ক্লাসিক্যাল হোমিওপ্যাথিক প্র্যাকটিসে আনুন{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-emerald-600">
              আধুনিক প্রযুক্তির পূর্ণাঙ্গ শক্তি
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            বাংলাদেশ হোমিওপ্যাথি বোর্ডের নিবন্ধিত DHMS ও ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত BHMS চিকিৎসকদের জন্য বিশেষায়িত ডাক্তার ওয়েবসাইট, জাতীয় ডিরেক্টরি লিস্টিং, গুগল ম্যাপস ১ নম্বর এসইও এবং আধুনিক ক্লিনিক সফটওয়্যার।
          </p>

          {/* Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="btn-primary text-xs sm:text-sm py-3 px-6 font-bold shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>ফ্রি চেম্বার স্ট্র্যাটেজি সেশন বুক করুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="btn-secondary text-xs sm:text-sm py-3 px-5 font-semibold text-center flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              <span>ডিজিটাল সেবাসমূহ দেখুন</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Trust Checkmarks */}
          <div className="pt-2 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">ডিজিটাল প্রেসক্রিপশন</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">চেম্বার বিলিং ও স্টক</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">জার্মান ওষুধের পথ্য</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">গুগলে এলাকাভিত্তিক ১ নম্বর</span>
              </div>
            </div>
          </div>

          {/* Social Proof Bar */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[9px] ring-2 ring-white">
                ডি
              </div>
              <div className="w-6 h-6 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-[9px] ring-2 ring-white">
                বি
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-[9px] ring-2 ring-white">
                ৫★
              </div>
            </div>
            <span>
              ঢাকা, চট্টগ্রাম, সিলেটসহ সারাদেশে <strong>৫০০+ রেজিস্টার্ড চিকিৎসকদের</strong> বিশ্বস্ত প্ল্যাটফর্ম।
            </span>
          </div>

        </div>
      </section>

      {/* ===== 2. KEY STATS STRIP ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              ৫০০<span className="text-emerald-600">+</span>
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              নিবন্ধিত ডাক্তার ডিজিটাইজড
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center mx-auto mb-2">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              ৮৫ হাজার<span className="text-[#0052CC]">+</span>
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              রোগী ও প্রেসক্রিপশন ডিজিটাইজড
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              ৬৪<span className="text-emerald-600"> জেলা</span>
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              দেশব্যাপী ডাক্তার নেটওয়ার্ক
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center mx-auto mb-2">
              <Activity className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              ৩.৮<span className="text-[#0052CC]"> গুণ</span>
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              গড় রোগী বৃদ্ধি হার
            </div>
          </div>

        </div>
      </section>

      {/* ===== 3. HAHNEMANNIAN PHILOSOPHICAL BANNER ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white shadow-lg border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <span>Similia Similibus Curentur</span>
                <span>•</span>
                <span>Aude Sapere</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white italic leading-relaxed">
                &ldquo;চিকিৎসকের একমাত্র ও সর্বোচ্চ ব্রত হলো অসুস্থ মানুষকে আরোগ্য প্রদান করা, যাকে প্রকৃত চিকিৎসা বলা হয়।&rdquo;
              </h3>
              <p className="text-xs text-slate-300">
                — মহাত্মা ডা. স্যামুয়েল হ্যানিম্যান (অর্গানন অব মেডিসিন, ১ম সূত্র)
              </p>
              <p className="text-xs text-emerald-200/90 pt-1 max-w-xl leading-relaxed">
                আমরা ক্লাসিক্যাল চিকিৎসার বিজ্ঞান ও পবিত্রতা অক্ষুণ্ণ রেখে আপনার চেম্বারকে গুগল ও ডিজিটালে শীর্ষ শক্তিতে রূপান্তরিত করি।
              </p>
            </div>

            <div className="shrink-0 text-center">
              <Link
                href="/about"
                className="btn-primary bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2.5 px-5 font-bold shadow-md inline-flex items-center gap-1.5"
              >
                <span>আমাদের মিশন পড়ুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. CLASSICAL HOMEOPATHY MEETS DIGITAL PRECISION ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="badge-pill mb-2 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>হোমিওপ্যাথিতে সাধারণ আইটি কেন ব্যর্থ হয়?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            হোমিওপ্যাথিক প্র্যাকটিসের স্বতন্ত্র বৈশিষ্ট্যের জন্য নির্মিত
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            হোমিওপ্যাথিক চিকিৎসকদের প্রতিদিনের চেম্বার পরিচালনার জন্য সহজে ডিজিটাল প্রেসক্রিপশন প্রিন্ট, রোগী রেজিস্ট্রি, ভিজিট ফি ও ডিসপেনসারি ব্যবস্থাপনার সম্পূর্ণ সমাধান।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Card 1: Patient & Prescription */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src="/images/male-doctor-consultation.jpg"
                alt="রোগীর সাথে কথা বলছেন ও ডিজিটাল প্রেসক্রিপশন প্রস্তুত করছেন অভিজ্ঞ চিকিৎসক"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 border border-slate-200 shadow-xs">
                স্মার্ট প্রেসক্রিপশন
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  ডিজিটাল রোগী ব্যবস্থাপনা ও দ্রুত প্রেসক্রিপশন প্রিন্ট
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  রোগীর নাম বা মোবাইল নম্বর দিতেই ২ সেকেন্ডে পূর্ববর্তী ব্যবস্থাপত্র স্ক্রিনে দৃশ্যমান। কিউআর কোডযুক্ত বাংলা ও ইংরেজি প্রফেশনাল প্রেসক্রিপশন চোখের পলকে প্রিন্ট করুন।
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> পেশেন্ট ডাটাবেস ও চেম্বার বিলিং রেকর্ড
                </span>
                <Link href="/services#clinic-crm-software" className="text-[#0052CC] font-bold hover:underline flex items-center gap-0.5">
                  বিস্তারিত <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Remedies & Dispensing */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src="/images/homeo-remedy-tech.jpg"
                alt="হোমিওপ্যাথিক ওষুধ, সুগার গ্লোবিউলস এবং মোবাইল অ্যাপ্লিকেশন"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 border border-slate-200 shadow-xs">
                সিরিয়াল ও চ্যাটবট
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  হোয়াটসঅ্যাপ সিরিয়াল ও চেম্বার শিডিউল
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  রোগীর সিরিয়াল কনফার্মেশন, চেম্বার শিডিউল এবং গুগল ম্যাপস লোকেশন স্বয়ংক্রিয়ভাবে রোগীর হোয়াটসঅ্যাপে পৌঁছে দেওয়ার আধুনিক ব্যবস্থা।
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> বারবার ফোন আসার ঝামেলা ৭৫% হ্রাস
                </span>
                <Link href="/services#tech-automation" className="text-[#0052CC] font-bold hover:underline flex items-center gap-0.5">
                  বিস্তারিত <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 5. CHRONIC DISEASE SPECIALTIES (WHERE BD PATIENTS SEARCH HOMEO ON GOOGLE) ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="badge-pill mb-2 inline-flex">
            <Globe className="w-3.5 h-3.5 text-[#0052CC]" />
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
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center space-y-1.5 shadow-2xs hover:border-[#0052CC] transition-all">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                {item.tag}
              </span>
              <h4 className="text-xs font-bold text-slate-900 pt-1">{item.title}</h4>
              <p className="text-[10px] text-slate-500 leading-tight">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 6. SERVICES CATALOG ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            বিশেষায়িত ডিজিটাল সমাধান
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            হোমিওপ্যাথিক চেম্বার ও ক্লিনিকের প্রতিটি ধাপ স্বাচ্ছন্দ্যময় করার সম্পূর্ণ প্রযুক্তি কাঠামো।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="btn-secondary text-xs py-2.5 px-6 inline-flex items-center gap-1.5 font-semibold"
          >
            <span>সকল সেবার বিস্তারিত বিবরণ দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ===== 8. COMPARISON TABLE ===== */}
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
                  <span className="text-[11px] text-rose-600 font-medium">ম্যানুয়াল ও সীমাবদ্ধ পরিসর</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>কাগজের মোটা ফাইল যা ভিজে বা হারিয়ে যাওয়ার ঝুঁকি থাকে</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>চেম্বারে রোগী দেখার ব্যস্ত সময়ে সিরিয়াল ও তথ্যের জন্য বারবার ফোন কলে চিকিৎসা বিঘ্নিত হওয়া</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>কোয়াকদের ভিড়ে ডিগ্রিধারী চিকিৎসকের গুগলে কোনো আনুষ্ঠানিক উপস্থিতি না থাকা</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>রোগীর সিরিয়াল ও সময়সূচির তথ্য দিতে সহকারীর প্রতিদিন ঘণ্টার পর ঘণ্টা সময় অপচয়</span>
                </li>
              </ul>
            </div>

            {/* With Homeo Network */}
            <div className="p-6 space-y-3.5 bg-emerald-50/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Homeo Network-এর সাথে</h3>
                  <span className="text-[11px] text-emerald-700 font-medium">স্বয়ংক্রিয় ও দেশব্যাপী গ্রহণযোগ্যতা</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>২ সেকেন্ডে রোগীর পূর্ববর্তী ডিজিটাল প্রেসক্রিপশন ও চেম্বার তথ্য প্রদর্শন</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>সরাসরি হোয়াটসঅ্যাপ হটলাইন ও সিরিয়াল কনফার্মেশন</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>গুগল সার্চ ও গুগল ম্যাপসে জটিল রোগের জন্য ১ নম্বর অবস্থান</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>চেম্বারের গুগল ম্যাপস লোকেশন ও ডিরেকশন স্বয়ংক্রিয়ভাবে রোগীর কাছে পৌঁছে যাওয়া</span>
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
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                তা
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">ডা. মো. তারিকুল ইসলাম</h4>
                <p className="text-[10px] text-slate-500">DHMS (বাংলাদেশ হোমিওপ্যাথি বোর্ড), ঢাকা</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-white border border-emerald-400 shadow-xs flex flex-col justify-between space-y-4">
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
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
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
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center font-bold text-xs">
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
