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
  BarChart3, 
  Globe, 
  CalendarCheck, 
  Leaf, 
  Sparkles, 
  Stethoscope, 
  ChevronRight, 
  PhoneCall 
} from "lucide-react";
import { servicesList } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* ===== 1. HERO SECTION WITH AUTHENTIC HOMEO DOCTOR VISUAL ===== */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-12 bg-gradient-to-b from-emerald-50/40 via-white to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
                ক্লাসিক্যাল হোমিওপ্যাথিক প্র্যাকটিসে আনুন{" "}
                <span className="text-[#0052CC]">আধুনিক প্রযুক্তির পূর্ণাঙ্গ শক্তি</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                ৪৫ মিনিটের গভীর কেস-টেকিং থেকে শুরু করে রেপার্টরি মূল্যায়ন, ওষুধ কুরিয়ার ট্র্যাকিং এবং ২৪/৭ স্বয়ংক্রিয় হোয়াটসঅ্যাপ সিরিয়াল—হোমিওপ্যাথিক চিকিৎসকদের জন্য বিশেষায়িত ওয়েবসাইট, গুগল ম্যাপসে ১ নম্বর এসইও এবং ক্লিনিক সফটওয়্যার।
              </p>

              {/* Trust Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>কেন্ট ও বোরিক রেপার্টরি উপযোগী</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>মায়াজমেটিক লক্ষণ সমষ্টি রেকর্ড</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ওষুধের ডায়েট ও পথ্য নির্দেশনা</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>গুগলে জটিল রোগের চিকিৎসায় ১ নম্বর</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary text-xs py-3 px-6 font-bold shadow-sm flex items-center justify-center gap-2"
                >
                  <span>ফ্রি চেম্বার স্ট্র্যাটেজি সেশন বুক করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/services"
                  className="btn-secondary text-xs py-3 px-5 font-semibold text-center flex items-center justify-center gap-1.5"
                >
                  <span>৮টি ডিজিটাল সমাধান দেখুন</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Social proof note */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white">
                    ডা
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white">
                    হো
                  </div>
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-white">
                    ৫★
                  </div>
                </div>
                <span>
                  বাংলাদেশ ও ভারতে <strong>৫০০+ DHMS ও BHMS চিকিৎসকদের</strong> বিশ্বস্ত প্ল্যাটফর্ম।
                </span>
              </div>

            </div>

            {/* Right Column: Hero Visual with Interactive Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-xl bg-white group">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                    <Image
                      src="/images/homeo-hero.jpg"
                      alt="হোমিওপ্যাথিক চিকিৎসকের আধুনিক চেম্বার, রেপার্টরি বই, সুগার গ্লোবিউলস ও ডিজিটাল ক্লিনিক ড্যাশবোর্ড"
                      fill
                      priority
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold flex items-center gap-1 text-emerald-300">
                          <Stethoscope className="w-3.5 h-3.5" />
                          <span>ডা. স্যামুয়েল ক্লাসিক্যাল ক্লিনিক স্যুট</span>
                        </p>
                        <p className="text-[11px] text-slate-200">
                          ক্লাসিক্যাল রেপার্টরি + ক্লাউড পেশেন্ট সিআরএম
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/90 text-white text-[10px] font-bold">
                        সরাসরি চেম্বার
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Top Right */}
                <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200 flex items-center gap-2.5 z-10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900">সিমিলিমাম ম্যাচিং</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">কেন্ট ও বোরিক রুব্রিক্স</div>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200 flex items-center gap-2.5 z-10">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052CC] flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900">+৬৮ জন নতুন রোগী</div>
                    <div className="text-[10px] text-slate-500 font-medium">স্বয়ংক্রিয় হোয়াটসঅ্যাপ বুকিং</div>
                  </div>
                </div>

              </div>
            </div>

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
              হোমিও ডাক্তার ডিজিটাইজড
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
              জটিল কেস রেকর্ড সংরক্ষিত
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              ৯৮.২<span className="text-emerald-600">%</span>
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-0.5">
              গুগল এসইও স্পিড স্কোর
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
            সাধারণ ক্লিনিক সফটওয়্যার তৈরি হয় ৩ মিনিটের অ্যালোপ্যাথিক প্রেসক্রিপশনের জন্য। কিন্তু ক্লাসিক্যাল হোমিওপ্যাথিতে প্রয়োজন গভীর লক্ষণ সমষ্টি, মায়াজম মূল্যায়ন ও পথ্যের সতর্কবার্তা।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Consultation & Case Taking */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src="/images/homeo-consultation.jpg"
                alt="গভীর মনোযোগে রোগীর কেস হিস্ট্রি গ্রহণ করছেন অভিজ্ঞ হোমিওপ্যাথিক চিকিৎসক"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 border border-slate-200 shadow-xs">
                গভীর লক্ষণ সমষ্টি
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  ৪৫ মিনিটের কেস টেকিং ও রেপার্টরি মূল্যায়ন
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  রোগীর মানসিক লক্ষণ, শীতকাতরতা/উষ্ণকাতরতা, খাবারের পছন্দ-অপছন্দ এবং বৃদ্ধি ও উপশমের সময় লিপিবদ্ধ রাখুন। ফলো-আপের সময় ২ সেকেন্ডে স্ক্রিনে পুরো ফাইল দৃশ্যমান হবে।
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> কেন্ট ও বোরিক মায়াজমেটিক নোটস
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
                ওষুধ প্রস্তুত ও ডায়েট নির্দেশনা
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  সুগার গ্লোবিউলস সেবন ও হোয়াটসঅ্যাপ ডায়েট অ্যালার্ট
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  সেন্টেসিমাল (30C থেকে 1M) বা ৫০ সহস্রতমিক (LM) পোটেন্সি সঠিকভাবে নির্ধারণ করুন। ওষুধের অ্যাকশন ঠিক রাখতে রোগীর হোয়াটসঅ্যাপে স্বয়ংক্রিয়ভাবে কাঁচা পেঁয়াজ ও কফি পরিহারের সতর্কবার্তা চলে যায়।
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

      {/* ===== 5. CHRONIC DISEASE SPECIALTIES (WHERE HOMEOPATHY SHINES ON GOOGLE) ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="badge-pill mb-2 inline-flex">
            <Globe className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>গুগলে নতুন রোগী আকর্ষণ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            রোগভিত্তিক ডেডিকেটেড গুগল ল্যান্ডিং পেজ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            যেসব জটিল রোগের স্থায়ী নিরাময়ের জন্য রোগীরা গুগলে হোমিওপ্যাথি খোঁজেন, সেগুলোর জন্য আপনার চেম্বারের পাতা প্রস্তুত করি:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { title: "চর্ম ও অ্যালার্জি", sub: "সোরিয়াসিস, একজিমা, আর্টিকারিয়া", tag: "সর্বাধিক সার্চ" },
            { title: "শ্বাসতন্ত্র ও অ্যাজমা", sub: "হাঁপানি, ক্রনিক রাইনাইটিস", tag: "উচ্চ চাহিদা" },
            { title: "মহিলা ও হরমোন", sub: "PCOD, থাইরয়েড, টিউমার", tag: "শীর্ষ স্পেশালিটি" },
            { title: "শিশু স্বাস্থ্য", sub: "টনসিল, ঘনঘন জ্বর, বিকাশ", tag: "কনস্টিটিউশনাল" },
            { title: "গ্যাস্ট্রিক ও লিভার", sub: "IBS, ফ্যাটি লিভার, পাইলস", tag: "ক্রনিক কেয়ার" },
            { title: "বাত ও জয়েন্ট পেইন", sub: "আর্থ্রাইটিস, সায়াটিকা, কোমর ব্যথা", tag: "ব্যথামুক্ত জীবন" },
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

      {/* ===== 7. 8 SERVICES CATALOG ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            ৮টি বিশেষায়িত ডিজিটাল সমাধান
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
            <span>সকল সেবার বিস্তারিত বিবরণ ও তুলনা দেখুন</span>
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
                  <span>কাগজের মোটা ফাইল যা হারিয়ে যাওয়ার বা ছেঁড়ার ঝুঁকি থাকে</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>গভীর কেস-টেকিং চলাকালীন সময়ে রোগীর বারবার ফোন কলে বিঘ্ন</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>স্থানীয় জটিল রোগের চিকিৎসায় গুগলে কোনো উপস্থিতি নেই</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>রিমাইন্ডার না থাকায় ৩০%+ সিরিয়াল দেওয়া রোগী অনুপস্থিত থাকা</span>
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
                  <span>২ সেকেন্ডে ক্লাউড থেকে লক্ষণ সমষ্টি ও অতীত প্রেসক্রিপশন পুনরুদ্ধার</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>২৪/৭ স্বয়ংক্রিয় সিরিয়াল বুকিং ও হোয়াটসঅ্যাপ ডায়েট অ্যালার্ট</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>গুগল সার্চ ও ম্যাপসে জটিল রোগের জন্য ১ নম্বর অবস্থান</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>স্বয়ংক্রিয় এসএমএস রিমাইন্ডারে মিসড অ্যাপয়েন্টমেন্ট ৫% এর নিচে নেমে আসা</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 10. TESTIMONIALS ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            সম্মানিত চিকিৎসকদের মতামত
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            চেম্বার আধুনিকায়নের পর চিকিৎসকদের বাস্তব অভিজ্ঞতা।
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
                &ldquo;আমাদের ৮০% সিরিয়াল এখন ওয়েবসাইটের মাধ্যমে স্বয়ংক্রিয়ভাবে হয়। ধানমন্ডিতে অ্যালার্জি ও চর্মরোগের চিকিৎসায় আমরা গুগলে ১ নম্বরে আছি।&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                তা
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">ডা. তারিকুল ইসলাম</h4>
                <p className="text-[10px] text-slate-500">DHMS, ক্লাসিক্যাল প্র্যাকটিশনার (ঢাকা)</p>
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
                &ldquo;টেলিমেডিসিন সিস্টেম চালু করায় চট্টগ্রাম, সিলেট এবং যুক্তরাজ্য ও মধ্যপ্রাচ্যের প্রবাসী রোগীদের কোনো ঝামেলা ছাড়াই নিয়মিত পরামর্শ দিতে পারছি।&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                সা
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">ডা. সাবরিনা জাহান</h4>
                <p className="text-[10px] text-slate-500">BHMS, মহিলা ও ক্রনিক বিশেষজ্ঞ</p>
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
                &ldquo;তাদের প্রফেশনাল প্রেসক্রিপশন ও ক্লাউড কেস সফটওয়্যার আমাদের ২০ বছরের পুরনো চেম্বারকে একটি সুপ্রতিষ্ঠিত আধুনিক স্বাস্থ্যকেন্দ্রে রূপান্তর করেছে।&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center font-bold text-xs">
                ক
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">ডা. এম. এ. করিম</h4>
                <p className="text-[10px] text-slate-500">সিনিয়র কনসালটেন্ট (হোমিওপ্যাথি)</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 10. FAQ ===== */}
      <FAQSection />

    </div>
  );
}
