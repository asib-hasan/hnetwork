"use client";

import React, { useState } from "react";
import { 
  FileText, 
  MessageSquare, 
  Search, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star,
  Leaf
} from "lucide-react";

export default function InteractiveClinicDemo() {
  const [activeTab, setActiveTab] = useState<"case" | "whatsapp" | "seo" | "courier">("case");

  return (
    <section id="clinic-demo" className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Homeo Network-এ আপনার চেম্বার <span className="text-[#0052CC]">কীভাবে পরিচালিত হবে?</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          সদৃশ বিধান (Law of Similars), কেন্ট রেপার্টরাইজেশন এবং ক্লাসিক্যাল চিকিৎসাসেবার বাস্তবধর্মী সমন্বয় স্বচক্ষে দেখুন।
        </p>
      </div>

      {/* Main Interactive Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 bg-slate-50/70 p-1.5 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab("case")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "case"
                ? "bg-white text-[#0052CC] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">১. কেস টেকিং ও রেপার্টরি</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "whatsapp"
                ? "bg-white text-[#0052CC] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">২. হোয়াটসঅ্যাপ ডায়েট ও ডোজ</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("seo")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "seo"
                ? "bg-white text-[#0052CC] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Search className="w-4 h-4 text-[#0052CC] shrink-0" />
            <span className="truncate">৩. গুগল ১ নম্বর সার্চ র‍্যাঙ্ক</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("courier")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "courier"
                ? "bg-white text-[#0052CC] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Package className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="truncate">৪. ওষুধ কুরিয়ার ট্র্যাকিং</span>
          </button>
        </div>

        {/* Tab 1 Content: Case Taking & Totality */}
        {activeTab === "case" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    সক্রিয় কেস নং #HN-৮৪৯২
                  </span>
                  <span className="text-xs text-slate-500">২য় ফলো-আপ কনসালটেশন</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ক্লাসিক্যাল কেস মূল্যায়ন ও লক্ষণ সমষ্টি (Totality of Symptoms)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">নির্বাচিত ওষুধ:</span>
                <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#0052CC] font-bold text-xs">
                  Arsenicum Album 200C (একক মাত্রা)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Patient Profile & Miasm */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                      সা
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">সুলতানা আফরোজ (৩৬ বছর)</h4>
                      <p className="text-[11px] text-slate-500">ক্রনিক একজিমা ও উদ্বেগ | শীতকাতর রোগী</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">মায়াজমেটিক ব্যাকগ্রাউন্ড:</span>
                      <span className="font-semibold text-rose-700">সোরা-সাইকোসিস (প্রধান)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">থার্মাল রিঅ্যাকশন:</span>
                      <span className="font-semibold text-blue-700">শীতকাতর (ঠাণ্ডায় বৃদ্ধি, গরমে উপশম)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">পিপাসা ও ইচ্ছা:</span>
                      <span className="font-semibold text-slate-800">অল্প অল্প পানি পান; উষ্ণ পানীয় প্রিয়</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">সময়গত হ্রাস-বৃদ্ধি:</span>
                      <span className="font-semibold text-amber-700">মধ্যরাত ১২টা থেকে ২টায় বৃদ্ধি</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <span className="font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                    চিকিৎসকের রেপার্টরি নোট
                  </span>
                  <p className="text-[11px] leading-relaxed text-amber-800">
                    চুলকানি ও জ্বালা গরম সেঁকে উপশম হয়। মধ্যরাতে তীব্র মানসিক অস্থিরতা। সার্বিক লক্ষণ সমষ্টি আর্সেনিকের সাথে মিলে যায়। কোনো বাহ্যিক মলম প্রয়োগ নিষেধ।
                  </p>
                </div>
              </div>

              {/* Repertorization Rubrics Table */}
              <div className="lg:col-span-8 space-y-4">
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>কেন্ট রেপার্টরি থেকে নির্বাচিত রুব্রিক</span>
                    <span className="text-emerald-700">গ্রেডেশন (নম্বর)</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="p-3 flex justify-between items-center bg-white hover:bg-slate-50">
                      <div>
                        <span className="font-semibold text-slate-800">মন - উদ্বেগ - মধ্যরাতের পরে (Mind - Anxiety - midnight, after)</span>
                        <p className="text-[10px] text-slate-400">পৃষ্ঠা ৫, কেন্ট রেপার্টরি</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                        Ars (৩), Acon (২), Rhus-t (২)
                      </span>
                    </div>
                    <div className="p-3 flex justify-between items-center bg-white hover:bg-slate-50">
                      <div>
                        <span className="font-semibold text-slate-800">চর্ম - একজিমা - জ্বালা ও চুলকানি (Skin - Eruptions - eczema - itching, burning)</span>
                        <p className="text-[10px] text-slate-400">পৃষ্ঠা ১৩০৮, কেন্ট রেপার্টরি</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                        Ars (৩), Sulph (৩), Graph (২)
                      </span>
                    </div>
                    <div className="p-3 flex justify-between items-center bg-white hover:bg-slate-50">
                      <div>
                        <span className="font-semibold text-slate-800">সার্বদৈহিক - উত্তাপে উপশম (Generalities - Warmth - amel.)</span>
                        <p className="text-[10px] text-slate-400">পৃষ্ঠা ১৪১২, কেন্ট রেপার্টরি</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                        Ars (৩), Hep (৩), Nux-v (২)
                      </span>
                    </div>
                    <div className="p-3 flex justify-between items-center bg-emerald-50/50">
                      <div>
                        <span className="font-bold text-emerald-900">চূড়ান্ত সিমিলিমাম ম্যাচিং স্কোর:</span>
                        <p className="text-[10px] text-emerald-700">লক্ষণ সাদৃশ্যে শীর্ষ ক্লাসিক্যাল রেমিডি</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-extrabold text-xs">
                        Arsenicum Alb: ৯/৯ পয়েন্ট (গ্রেড ৩)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    ক্লাউড এনক্রিপ্টেড কেস রেকর্ড (যেকোনো সময় ২ সেকেন্ডে রিট্রিভযোগ্য)
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#0052CC]">
                    পরবর্তী ফলো-আপ: ২১ দিন পর (Sac Lac প্লাসিবো নির্ধারিত)
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2 Content: WhatsApp Diet & Dose */}
        {activeTab === "whatsapp" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  স্বয়ংক্রিয় হোয়াটসঅ্যাপ হোমিওপ্যাথিক গাইডলাইন
                </h3>
                <p className="text-xs text-slate-500">
                  প্রেসক্রিপশন সম্পন্ন হওয়ামাত্রই রোগীর মোবাইলে ওষুধের নিয়ম, পথ্য ও চেম্বার লোকেশন চলে যায়।
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ১০০% অটোমেটেড
              </span>
            </div>

            <div className="max-w-md mx-auto bg-[#ECE5DD] p-4 rounded-2xl shadow-inner space-y-3 font-sans border border-slate-300">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-2.5 bg-[#075E54] text-white p-2.5 rounded-lg -mt-1 -mx-1 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                  চেম্বার
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold truncate">ডা. কে. আর. রহমান, DHMS (চেম্বার)</div>
                  <div className="text-[10px] text-emerald-200">ভেরিফায়েড ক্লিনিক হোয়াটসঅ্যাপ বট</div>
                </div>
              </div>

              {/* Message 1: Prescription & Dose */}
              <div className="bg-white p-3 rounded-lg shadow-xs space-y-2 text-xs text-slate-800 max-w-[90%]">
                <p className="font-semibold text-slate-900">
                  🌿 আসসালামু আলাইকুম মিসেস সুলতানা,
                </p>
                <p className="text-[11px] leading-relaxed">
                  আপনার আজকের প্রেসক্রিপশন ও ওষুধের নিয়মাবলী নিচে দেওয়া হলো:
                </p>
                <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-[11px] space-y-1">
                  <div><strong>💊 ওষুধ ১ (সাদা গ্লোবিউলস):</strong> সকালে খালি পেটে ৪টি দানা জিভে দিয়ে চুষে খাবেন।</div>
                  <div><strong>💧 ওষুধ ২ (লিকুইড ড্রপস):</strong> রাতে আধা কাপ কুসুম গরম পানিতে ৫ ফোঁটা।</div>
                </div>
                <div className="p-2 rounded bg-rose-50 border border-rose-200 text-[11px] text-rose-900 space-y-1">
                  <strong>⚠️ হোমিওপ্যাথিক নিয়ম (ওষুধের কার্যকারিতা বজায় রাখতে):</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-[10px]">
                    <li>কাঁচা পেঁয়াজ, কাঁচা রসুন ও অতিরিক্ত কফি খাওয়া নিষেধ।</li>
                    <li>ওষুধ সেবনের ৩০ মিনিট আগে-পরে কোনো খাবার বা পানীয় খাবেন না।</li>
                    <li>ওষুধ হাতে না ছুঁয়ে বোতলের ছিপিতে ঢেলে সরাসরি মুখে দিন।</li>
                  </ul>
                </div>
                <div className="text-[9px] text-slate-400 text-right">সকাল ১১:৪২ · স্বয়ংক্রিয়ভাবে প্রেরিত</div>
              </div>

              {/* Message 2: Follow-up booking */}
              <div className="bg-white p-3 rounded-lg shadow-xs space-y-1 text-xs text-slate-800 max-w-[85%]">
                <p className="text-[11px]">
                  📅 পরবর্তী ফলো-আপ ভিজিট: <strong>১৫ অক্টোবর, ২০২৬ (বৃহস্পতিবার)</strong>।
                </p>
                <div className="pt-1 flex gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                    গুগল ম্যাপে চেম্বার লোকেশন দেখুন
                  </span>
                </div>
                <div className="text-[9px] text-slate-400 text-right">সকাল ১১:৪২</div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 italic">
              ডাক্তারদের অভিজ্ঞতা অনুযায়ী, এর ফলে ওষুধের নিয়ম ও পথ্য নিয়ে <strong>রোগীদের ফোন কল ৭৫% কমে যায়</strong>।
            </p>
          </div>
        )}

        {/* Tab 3 Content: Google SEO Simulation */}
        {activeTab === "seo" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  গুগল সার্চ ও গুগল ম্যাপসে ১ নম্বর অবস্থান
                </h3>
                <p className="text-xs text-slate-500">
                  আপনার এলাকার রোগীরা জটিল রোগের প্রাকৃতিক সমাধান খুঁজলে যেভাবে সবার আগে আপনার চেম্বার খুঁজে পাবে।
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 text-[#0052CC] text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-[#0052CC]" /> গুগল ভেরিফায়েড ১ নম্বর র‍্যাঙ্ক
              </span>
            </div>

            {/* Google Search Bar Mock */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-full border border-slate-300 bg-white shadow-xs px-4">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-medium text-slate-700">
                  best homeopathic doctor for skin allergy in dhanmondi
                </span>
              </div>

              {/* Local 3-Pack Mock */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs divide-y divide-slate-100">
                <div className="p-4 bg-blue-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-extrabold text-[10px]">
                        ১ নম্বর রেজাল্ট
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        ডা. ফারহান আহমেদ, BHMS — ক্লাসিক্যাল হোমিওপ্যাথি চেম্বার
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-700">৪.৯ (১৮৪ জন রোগীর ভেরিফায়েড রিভিউ)</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      হোমিওপ্যাথিক ফিজিশিয়ান · ধানমন্ডি রোড ২৭, ঢাকা · রাত ৯:০০ টা পর্যন্ত খোলা
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-medium">
                        ✓ ক্রনিক একজিমা ও সোরিয়াসিস বিশেষজ্ঞ
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-medium">
                        ✓ ২৪/৭ হোয়াটসঅ্যাপ বুকিং সুবিধা
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
                    <button type="button" className="btn-primary text-xs py-1.5 px-3">
                      অনলাইন সিরিয়াল
                    </button>
                    <button type="button" className="btn-secondary text-xs py-1.5 px-3">
                      দিকনির্দেশনা
                    </button>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50/40 text-xs text-slate-400 flex items-center justify-between">
                  <span>ফলাফল ২: সাধারণ জেনারেল ক্লিনিক</span>
                  <span className="text-[11px] text-slate-400">৩.৮ (১৪টি রিভিউ)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>আমরা গুগল বিজনেস প্রোফাইল, রোগভিত্তিক কিওয়ার্ড ও কন্টেন্ট অপটিমাইজ করে এই শীর্ষ অবস্থান ধরে রাখি।</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4 Content: Medicine Courier Log */}
        {activeTab === "courier" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  ওষুধ তৈরি ও দেশব্যাপী কুরিয়ার ট্র্যাকিং লগ
                </h3>
                <p className="text-xs text-slate-500">
                  দূরবর্তী বা প্রবাসী রোগীদের কাছে পাঠানো সুগার গ্লোবিউলস বা লিকুইড ওষুধের সঠিক হিসাব রাখুন।
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                <Package className="w-3.5 h-3.5 text-amber-600" /> ডিসপ্যাচ যুক্ত
              </span>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                  <tr>
                    <th className="p-3">রোগী ও জেলা</th>
                    <th className="p-3">ওষুধ ও পোটেন্সি</th>
                    <th className="p-3">কুরিয়ার পার্টনার</th>
                    <th className="p-3">অবস্থা</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-900">
                      তানভীর হোসেন (চট্টগ্রাম)
                      <div className="text-[10px] text-slate-400">টেলিমেডিসিন কনসালটেশন</div>
                    </td>
                    <td className="p-3 text-slate-700">
                      Thuja Occidentalis 1M (সুগার গ্লোবিউলস, ২ ড্রাম)
                    </td>
                    <td className="p-3 text-slate-600">স্টেডফাস্ট কুরিয়ার #ST-৯৪৮১২</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        ডেলিভার্ড
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-900">
                      রাশেদুল ইসলাম (সিলেট)
                      <div className="text-[10px] text-slate-400">ক্রনিক অ্যাজমা ফলো-আপ</div>
                    </td>
                    <td className="p-3 text-slate-700">
                      Blatta Orientalis Q + Natrum Sulph 200C
                    </td>
                    <td className="p-3 text-slate-600">রেডএক্স লজিস্টিকস #RX-৩৩০১৯</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                        অন দ্য ওয়ে (বিতরণ চলছে)
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-900">
                      ফারজানা বেগম (লন্ডন, ইউকে)
                      <div className="text-[10px] text-slate-400">প্রবাসী ভিডিও কনসালটেশন</div>
                    </td>
                    <td className="p-3 text-slate-700">
                      Lycopodium 30C + Pulsatilla 200C
                    </td>
                    <td className="p-3 text-slate-600">ডিএইচএল এক্সপ্রেস ইন্টারন্যাশনাল</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                        কাস্টমস ক্লিয়ারেন্স
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong>চেম্বারের পরিসীমা বৃদ্ধি করুন:</strong> স্থানীয় এলাকার বাইরে দেশের ৬৪ জেলা এবং বিদেশে থাকা রোগীদেরও স্বাচ্ছন্দ্যে চিকিৎসা সেবা ও ওষুধ পৌঁছে দিন।
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("case")}
                className="btn-primary text-xs py-2 px-4 shrink-0"
              >
                <span>কেস টোটালিটিতে ফিরে যান</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
