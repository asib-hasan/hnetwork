"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Crown } from "lucide-react";

export default function PricingPackages() {
  const [billingCycle, setBillingCycle] = useState<"setup" | "annual">("setup");

  const packages = [
    {
      id: "starter",
      name: "স্টার্টার চেম্বার",
      target: "একক চিকিৎসকদের ডিজিটাল পরিচিতি ও রোগী পাওয়ার জন্য",
      popular: false,
      setupFee: "১৮,৫০০ টাকা",
      annualFee: "১৫,০০০ টাকা",
      description: "একটি দ্রুতগতির, গুগল-ইনডেক্সড ডাক্তার ওয়েবসাইট ও চেম্বার লোকেশন সেটআপের যাবতীয় সুবিধা।",
      features: [
        "ডাক্তার ওয়েবসাইট (মোবাইল ও পিসিতে দ্রুত লোড)",
        "ডাক্তারের পরিচিতি, ডিগ্রি ও চেম্বারের সময়সূচি",
        "গুগল বিজনেস প্রোফাইল (ম্যাপস) ভেরিফিকেশন ও সেটআপ",
        "সরাসরি হোয়াটসঅ্যাপ অ্যাপয়েন্টমেন্ট লিঙ্ক",
        "রোগভিত্তিক পেজ (চর্ম, অ্যালার্জি, অ্যাজমা ইত্যাদি)",
        "ডোমেইন ও হাই-স্পিড ক্লাউড হোস্টিং (১ বছর)",
      ],
    },
    {
      id: "growth",
      name: "গ্রোথ প্র্যাকটিস",
      target: "ব্যস্ত চিকিৎসকদের জন্য—স্বয়ংক্রিয় সিরিয়াল ও গুগলে ১ নম্বর অবস্থান",
      popular: true,
      setupFee: "৩৮,৫০০ টাকা",
      annualFee: "৩২,০০০ টাকা",
      description: "সম্পূর্ণ রোগী অর্জন ও চেম্বার অটোমেশন প্যাকেজ। রিসেপশনিস্টের বারবার ফোন রিসিভ করার ঝামেলা দূর করে।",
      features: [
        "স্টার্টার প্যাকেজের সকল সুবিধা অন্তর্ভুক্ত",
        "২৪/৭ স্বয়ংক্রিয় রোগী সিরিয়াল ও বুকিং পোর্টাল",
        "স্বয়ংক্রিয় হোয়াটসঅ্যাপ ও এসএমএস রিমাইন্ডার",
        "লোকাল গুগল সার্চ ও গুগল ম্যাপস ১ নম্বর এসইও",
        "দূরবর্তী রোগীদের জন্য এইচডি ভিডিও টেলিমেডিসিন",
        "কিউআর কোডযুক্ত ডিজিটাল প্রেসক্রিপশন জেনারেটর",
        "চেম্বার সহকারী ও সহকারীদের পূর্ণাঙ্গ ট্রেনিং",
      ],
    },
    {
      id: "apex",
      name: "অ্যাপেক্স মেডিকেল সেন্টার",
      target: "মাল্টি-ডাক্তার ক্লিনিক, ইনস্টিটিউট ও বড় আকারের সেন্টারের জন্য",
      popular: false,
      setupFee: "৬৮,৫০০ টাকা",
      annualFee: "৫৮,০০০ টাকা",
      description: "আমাদের পূর্ণাঙ্গ প্রাতিষ্ঠানিক টেকনোলজি স্ট্যাক: ক্লাউড কেস হিস্ট্রি সিআরএম, একাধিক ডাক্তার রোল ও সোশ্যাল মার্কেটিং।",
      features: [
        "গ্রোথ প্যাকেজের সকল সুবিধা অন্তর্ভুক্ত",
        "পূর্ণাঙ্গ ক্লাউড ইলেকট্রনিক হেলথ রেকর্ড ও কেস সিআরএম",
        "একাধিক ডাক্তার ও মাল্টিপল ব্রাঞ্চ পরিচালনা সুবিধা",
        "অফিসিয়াল হোয়াটসঅ্যাপ বিজনেস এপিআই ইন্টিগ্রেশন",
        "ফেসবুক ও ইনস্টাগ্রাম টার্গেটেড ক্রনিক পেশেন্ট অ্যাড",
        "ওষুধ কুরিয়ার ট্র্যাকিং অটোমেশন",
        "ডেডিকেটেড অ্যাকাউন্ট স্ট্র্যাটেজিস্ট ও প্রায়োরিটি সাপোর্ট",
      ],
    },
  ];

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="badge-pill mb-2 inline-flex">
          <Crown className="w-3.5 h-3.5 text-blue-700" />
          <span>পরিকল্পিত প্যাকেজসমূহ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          স্বচ্ছ ও সাশ্রয়ী চেম্বার প্যাকেজ
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          কোনো গোপন ফি নেই। স্বাস্থ্যসেবা ডিজিটাল বিশেষজ্ঞদের দ্বারা নির্মিত ও পরিচালিত।
        </p>

        {/* Toggle */}
        <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200">
          <button
            type="button"
            onClick={() => setBillingCycle("setup")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === "setup"
                ? "bg-[#0052CC] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            এককালীন বাস্তবায়ন
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === "annual"
                ? "bg-[#0052CC] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            বার্ষিক নবায়ন ও হোস্টিং
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-xl p-6 bg-white border flex flex-col justify-between transition-all ${
              pkg.popular
                ? "border-[#0052CC] shadow-md ring-1 ring-blue-100"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {pkg.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {pkg.target}
                  </span>
                </div>
                {pkg.popular && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-[#0052CC]">
                    সর্বাধিক জনপ্রিয়
                  </span>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="text-3xl font-black text-slate-900">
                  {billingCycle === "setup" ? pkg.setupFee : pkg.annualFee}
                </div>
                <span className="text-[11px] text-slate-500">
                  {billingCycle === "setup" ? "এককালীন পূর্ণাঙ্গ বাস্তবায়ন ফি" : "বার্ষিক টেকনিক্যাল সাপোর্ট ও ক্লাউড সার্ভার"}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {pkg.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2 border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                  অন্তর্ভুক্ত সেবাসমূহ:
                </span>
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100">
              <Link
                href={`/contact?service=${encodeURIComponent(pkg.name)}`}
                className={`w-full py-2.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  pkg.popular
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                <span>{pkg.name} বেছে নিন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
