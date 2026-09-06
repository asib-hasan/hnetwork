"use client";

import React, { useState } from "react";
import { 
  FileText, 
  MessageSquare, 
  Search, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  MapPin,
  Phone,
  Calendar
} from "lucide-react";

export default function InteractiveClinicDemo() {
  const [activeTab, setActiveTab] = useState<"rx" | "whatsapp" | "seo" | "directory">("rx");

  return (
    <section id="clinic-demo" className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="badge-pill mb-2 inline-flex">
          <Sparkles className="w-3.5 h-3.5 text-[#0047BA]" />
          <span>লাইভ চেম্বার প্রযুক্তি ডেমো</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Homeo Network-এ আপনার চেম্বার <span className="text-[#0047BA]">কীভাবে পরিচালিত হবে?</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          ডিজিটাল প্রেসক্রিপশন প্রিন্টিং, বিলিং ও হিসাব, হোয়াটসঅ্যাপ সিরিয়াল এবং জাতীয় ডক্টর ডিরেক্টরি প্রোফাইলের বাস্তব রূপ স্বচক্ষে দেখুন।
        </p>
      </div>

      {/* Main Interactive Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 bg-slate-50/70 p-1.5 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab("rx")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "rx"
                ? "bg-white text-[#0047BA] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <FileText className="w-4 h-4 text-[#0047BA] shrink-0" />
            <span className="truncate">১. ডিজিটাল প্রেসক্রিপশন ও বিলিং</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "whatsapp"
                ? "bg-white text-[#0047BA] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#0047BA] shrink-0" />
            <span className="truncate">২. হোয়াটসঅ্যাপ নোটিফিকেশন</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("seo")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "seo"
                ? "bg-white text-[#0047BA] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Search className="w-4 h-4 text-[#0047BA] shrink-0" />
            <span className="truncate">৩. গুগল ১ নম্বর সার্চ র‍্যাঙ্ক</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("directory")}
            className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === "directory"
                ? "bg-white text-[#0047BA] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <UserCheck className="w-4 h-4 text-[#0047BA] shrink-0" />
            <span className="truncate">৪. জাতীয় ডিরেক্টরি প্রোফাইল</span>
          </button>
        </div>

        {/* Tab 1 Content: Digital Prescription & Clinic Billing */}
        {activeTab === "rx" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#0047BA] border border-blue-200 text-[11px] font-bold">
                    পেশেন্ট আইডি #HN-৮৪৯২
                  </span>
                  <span className="text-xs text-slate-500">২য় ফলো-আপ কনসালটেশন</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ডিজিটাল প্রেসক্রিপশন ও চেম্বার বিলিং ড্যাশবোর্ড
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">প্রেসক্রিপশন স্ট্যাটাস:</span>
                <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#0047BA] font-bold text-xs">
                  প্রস্তুত ও প্রিন্টযোগ্য (QR কোডযুক্ত)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Patient Profile & Billing */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0047BA] text-white font-bold flex items-center justify-center text-sm">
                      সু
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">সুলতানা আফরোজ (৩৬ বছর)</h4>
                      <p className="text-[11px] text-slate-500">ধানমন্ডি, ঢাকা | মোবাইল: ০১৭১১-***৪২০</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">প্রধান সমস্যা:</span>
                      <span className="font-semibold text-slate-800">ক্রনিক একজিমা ও এলার্জি</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">পূর্ববর্তী ভিজিট:</span>
                      <span className="font-semibold text-blue-700">০৯ আগস্ট ২০২৬ (উন্নতি ৬০%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">রক্তচাপ ও ওজন:</span>
                      <span className="font-semibold text-slate-700">120/80 mmHg | ৫৮ কেজি</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-2.5">
                  <span className="font-bold flex items-center gap-1 text-[#0047BA]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0047BA]" />
                    চেম্বারের ভিজিট ফি ও ডিসপেনসারি বিলিং
                  </span>
                  <div className="space-y-1.5 pt-1 text-slate-700">
                    <div className="flex justify-between">
                      <span>ডাক্তার কনসালটেশন ফি:</span>
                      <span className="font-bold text-slate-900">৫০০ টাকা (নগদ)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ডিসপেনসারি ওষুধের মূল্য:</span>
                      <span className="font-bold text-slate-900">৩৫০ টাকা (বিকাশ)</span>
                    </div>
                    <div className="pt-1.5 border-t border-blue-200 flex justify-between font-bold text-slate-900">
                      <span>সর্বমোট আদায়:</span>
                      <span className="text-slate-900 font-extrabold">৮৫০ টাকা <span className="text-[#0047BA] text-xs font-bold">[পরিশোধিত]</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Prescription Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>ব্যবস্থাপত্র / ওষুধ তালিকা (Rx)</span>
                    <span className="text-[#0047BA]">পোটেন্সি ও সেবনমাত্রা</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="p-3 flex justify-between items-center hover:bg-slate-50">
                      <div>
                        <span className="font-bold text-slate-900 text-sm">১. Arsenicum Album 200C</span>
                        <p className="text-[11px] text-slate-500">জার্মান সিলপ্যাক অরিজিনাল ডিলিউশন</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-blue-50 text-[#0047BA] border border-blue-200 font-bold text-xs">
                        ৪ ফোঁটা করে দিনে ২ বার (খাবারের পূর্বে)
                      </span>
                    </div>
                    <div className="p-3 flex justify-between items-center hover:bg-slate-50">
                      <div>
                        <span className="font-bold text-slate-900 text-sm">২. Graphites 30C</span>
                        <p className="text-[11px] text-slate-500">ডিসপেনসারি লিকুইড ড্রপস</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs">
                        ২ ফোঁটা করে রাতে ১ বার (খাবারের পর)
                      </span>
                    </div>
                    <div className="p-3 bg-slate-50/70 text-slate-700">
                      <span className="font-semibold text-slate-800 block mb-1">চিকিৎসকের সাধারণ পরামর্শ ও পথ্য:</span>
                      <p className="text-[11px] text-slate-600">
                        কুসুম গরম পানিতে মিশিয়ে সেব্য। বাহ্যিক কোনো স্টেরয়েড মলম ব্যবহার নিষেধ। তৈলাক্ত ও অতিরিক্ত ভাজাপোড়া খাবার এড়িয়ে চলুন।
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0047BA]" />
                    ২ সেকেন্ডে রোগীর পূর্ববর্তী ব্যবস্থাপত্র সার্চ ও দেখার সুবিধা
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#0047BA]">
                    পরবর্তী সাক্ষাতের সম্ভাব্য তারিখ: ২১ দিন পর
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
                  স্বয়ংক্রিয় হোয়াটসঅ্যাপ হোমিওপ্যাথিক পথ্য ও সেবনবিধি গাইডলাইন
                </h3>
                <p className="text-xs text-slate-500">
                  প্রেসক্রিপশন সম্পন্ন হওয়ামাত্রই রোগীর মোবাইলে ওষুধের নিয়ম, পথ্য ও চেম্বার লোকেশন স্বয়ংক্রিয়ভাবে চলে যায়।
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-[#0047BA] border border-blue-200 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0047BA]" /> ১০০% অটোমেটেড
              </span>
            </div>

            <div className="max-w-md mx-auto bg-[#F1F5F9] p-4 rounded-2xl shadow-inner space-y-3 font-sans border border-slate-200">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-2.5 bg-slate-900 text-white p-2.5 rounded-lg -mt-1 -mx-1 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs">
                  ডা
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold truncate">ডা. কে. আর. রহমান, DHMS (রেজি: নং-১২৪১৫)</div>
                  <div className="text-[10px] text-slate-300">হোমিও ক্লিনিক, পল্টন, ঢাকা</div>
                </div>
              </div>

              {/* Message 1: Prescription & Dose */}
              <div className="bg-white p-3.5 rounded-lg shadow-xs space-y-2 text-xs text-slate-800 border border-slate-200 max-w-[92%]">
                <p className="font-semibold text-slate-900">
                  আসসালামু আলাইকুম মিসেস সুলতানা আফরোজ,
                </p>
                <p className="text-[11px] leading-relaxed">
                  আপনার আজকের ব্যবস্থাপত্র ও অরিজিনাল জার্মান ওষুধের সেবনবিধি নিচে দেওয়া হলো:
                </p>
                <div className="p-2 rounded bg-blue-50/70 border border-blue-200 text-[11px] space-y-1">
                  <div><strong>💊 ওষুধ ১ (সুগার গ্লোবিউলস):</strong> সকালে ঘুম থেকে উঠে খালি পেটে ৪টি সাদা দানা মুখে দিয়ে চুষে খাবেন।</div>
                  <div><strong>💧 ওষুধ ২ (লিকুইড ড্রপস):</strong> রাতে ঘুমানোর পূর্বে আধা কাপ বিশুদ্ধ পানিতে ৫ ফোঁটা মিশিয়ে সেবন করবেন।</div>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px] text-slate-800 space-y-1">
                  <strong>⚠️ অতি জরুরি সতর্কতা (হোমিও ওষুধের গুণাগুণ অক্ষুণ্ণ রাখতে):</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-[10px]">
                    <li>কাঁচা পেঁয়াজ, কাঁচা রসুন, অতিরিক্ত কফি ও তীব্র মসলাযুক্ত খাবার পরিহার করুন।</li>
                    <li>ওষুধ খাওয়ার আধা ঘণ্টা আগে ও পরে কোনো কিছু খাবেন বা পান করবেন না।</li>
                    <li>ওষুধ হাতে স্পর্শ না করে বোতলের ক্যাপ বা ছিপিতে ঢেলে সরাসরি জিহ্বায় দিন।</li>
                  </ul>
                </div>
                <div className="text-[9px] text-slate-400 text-right">সকাল ১১:৪২ · স্বয়ংক্রিয় ক্লিনিক বট</div>
              </div>

              {/* Message 2: Follow-up booking */}
              <div className="bg-white p-3 rounded-lg shadow-xs space-y-1 text-xs text-slate-800 border border-slate-200 max-w-[85%]">
                <p className="text-[11px]">
                  📅 পরবর্তী ফলো-আপ সাক্ষাতের তারিখ: <strong>২১ দিন পর (বৃহস্পতিবার)</strong>।
                </p>
                <div className="pt-1 flex gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-[#0047BA] border border-blue-200 font-semibold">
                    গুগল ম্যাপসে চেম্বার লোকেশন দেখুন
                  </span>
                </div>
                <div className="text-[9px] text-slate-400 text-right">সকাল ১১:৪২</div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 italic">
              ডাক্তারদের অভিজ্ঞতা অনুযায়ী, এই স্বয়ংক্রিয় ব্যবস্থার ফলে ওষুধের নিয়ম ও পথ্য নিয়ে <strong>রোগীদের ফোন কল ৭৫% কমে যায়</strong>।
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
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-[#0047BA] border border-blue-200 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-[#0047BA]" /> গুগল ভেরিফায়েড ১ নম্বর র‍্যাঙ্ক
              </span>
            </div>

            {/* Google Search Bar Mock */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-full border border-slate-300 bg-white shadow-xs px-4">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-medium text-slate-700">
                  best homeopathic doctor in dhanmondi dhaka
                </span>
              </div>

              {/* Local 3-Pack Mock */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs divide-y divide-slate-100">
                <div className="p-4 bg-blue-50/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#0047BA] text-white font-extrabold text-[10px]">
                        ১ নম্বর রেজাল্ট
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        ডা. মো. ফারহান আহমেদ, BHMS (ঢাকা বিশ্ববিদ্যালয়) — হোমিওপ্যাথি সেন্টার
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
                      হোমিওপ্যাথিক কনসালটেন্ট · ধানমন্ডি ২৭, ঢাকা · রাত ৯:০০ টা পর্যন্ত খোলা · সরকারি রেজিস্টার্ড চিকিৎসক
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-medium">
                        ✓ একজিমা, সোরিয়াসিস ও ক্রনিক অ্যালার্জি
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-medium">
                        ✓ ২৪/৭ অনলাইন সিরিয়াল ও হোয়াটসঅ্যাপ বুকিং
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
                  <span>ফলাফল ২: সাধারণ জেনারেল চেম্বার (অনুপ্টিমাইজড)</span>
                  <span className="text-[11px] text-slate-400">৩.৮ (১৪টি রিভিউ)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0047BA] shrink-0" />
                <span>আমরা গুগল বিজনেস প্রোফাইল, রোগভিত্তিক কিওয়ার্ড ও বাংলা কন্টেন্ট অপটিমাইজ করে এই শীর্ষ অবস্থান নিশ্চিত করি।</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4 Content: National Doctor Directory Profile */}
        {activeTab === "directory" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  জাতীয় হোমিওপ্যাথিক ডক্টর ডিরেক্টরি প্রোফাইল
                </h3>
                <p className="text-xs text-slate-500">
                  সারাদেশের রোগীরা যখন তাদের জেলায় রেজিস্টার্ড চিকিৎসকের সন্ধান করেন, তখন কেন্দ্রীয় ডিরেক্টরিতে আপনার ভেরিফায়েড প্রোফাইল প্রদর্শিত হয়।
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-[#0047BA] border border-blue-200 text-xs font-bold">
                <UserCheck className="w-3.5 h-3.5 text-[#0047BA]" /> সেন্ট্রাল ভেরিফায়েড
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Doctor Directory Card */}
              <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-14 h-14 rounded-xl bg-[#0047BA] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                    ডা
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-[#0047BA] border border-blue-200 text-[10px] font-bold">
                      <ShieldCheck className="w-3 h-3 text-[#0047BA]" /> ভেরিফায়েড প্র্যাকটিশনার
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">ডা. কে. আর. রহমান, DHMS</h4>
                    <p className="text-[11px] text-slate-600 font-medium">
                      বাংলাদেশ হোমিওপ্যাথি বোর্ড রেজি: নং-১২৪১৫
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs border-t border-slate-200 pt-3 text-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0047BA] shrink-0" />
                    <span>ধানমন্ডি হোমিও চেম্বার, রোড ২৭, ঢাকা</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#0047BA] shrink-0" />
                    <span>রোগী দেখার সময়: বিকাল ৫:০০ - রাত ৯:০০ (শনি-বৃহস্পতি)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                    <span className="font-bold text-slate-900">৫.০ স্টার</span>
                    <span className="text-slate-500">(১৮৪ জন ভেরিফায়েড রোগী রিভিউ)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 block">ভিজিট ফি</span>
                    <span className="text-xs font-bold text-slate-900">৫০০ টাকা</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 block">প্রেসক্রিপশন</span>
                    <span className="text-xs font-bold text-[#0047BA]">ডিজিটাল প্রিন্ট</span>
                  </div>
                </div>
              </div>

              {/* Specialties & Actions */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    বিশেষজ্ঞ চিকিৎসাসেবা (Specialties)
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "অর্শ, ভগন্দর ও পাইলস (বিনা অপারেশনে)",
                      "কিডনি ও মূত্রথলির পাথর অপসারণ",
                      "ক্রনিক একজিমা, সোরিয়াসিস ও অ্যালার্জি",
                      "ক্রনিক সাইনোসাইটিস ও ব্রঙ্কিয়াল হাঁপানি",
                    ].map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 text-xs text-slate-700 border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0047BA] shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 block">
                      রোগীদের ওয়ান-ক্লিক যোগাযোগ সুবিধা:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-[#0047BA] text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-xs">
                        <Phone className="w-3.5 h-3.5" />
                        সরাসরি সিরিয়াল কল
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs inline-flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-700" />
                        হোয়াটসঅ্যাপ বুকিং
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#0047BA] border border-blue-200 font-bold text-xs inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        ম্যাপসে চেম্বার দেখুন
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-[#0047BA] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0047BA] shrink-0" />
                  <span>কোনো থার্ড-পার্টি কমিশন নেই—রোগীরা সরাসরি আপনার চেম্বারের নাম্বারে সিরিয়াল নেয়।</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong>দেশব্যাপী পরিচিতি ও রোগীর আস্থা:</strong> কোয়াক বা হাতুড়েদের ভিড়ে ডিগ্রিধারী চিকিৎসক হিসেবে আপনার বোর্ড রেজিস্ট্রেশন ও প্রাতিষ্ঠানিক মর্যাদা জাতীয় ডিরেক্টরিতে প্রতিষ্ঠিত করুন।
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("rx")}
                className="btn-primary text-xs py-2 px-4 shrink-0"
              >
                <span>প্রেসক্রিপশন ড্যাশবোর্ডে ফিরে যান</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
