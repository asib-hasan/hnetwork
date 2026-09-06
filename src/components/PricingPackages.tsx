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
      target: "একক ডিগ্রিধারী চিকিৎসকদের নিজস্ব ডিজিটাল পরিচয় ও স্থানীয় রোগী বৃদ্ধির জন্য",
      popular: false,
      setupFee: "১৮,৫০০ টাকা",
      annualFee: "৮,৫০০ টাকা",
      description: "বাংলাদেশ হোমিওপ্যাথি বোর্ডের নিবন্ধিত ও বিএইচএমএস চিকিৎসকদের জন্য দ্রুতগতির ওয়েবসাইট ও গুগল ম্যাপস সেটআপ।",
      features: [
        "ডিগ্রিধারী ডাক্তার প্রোফাইল ওয়েবসাইট (মোবাইল ও পিসিতে দ্রুত লোড)",
        "জাতীয় সেন্ট্রাল ডক্টর ডিরেক্টরিতে ভেরিফায়েড প্রোফাইল লিস্টিং",
        "বোর্ড রেজিস্ট্রেশন নম্বর, অভিজ্ঞতা ও চেম্বারের সময়সূচি প্রদর্শন",
        "গুগল বিজনেস প্রোফাইল (গুগল ম্যাপস) ভেরিফিকেশন ও লোকেশন সেটআপ",
        "সরাসরি হোয়াটসঅ্যাপ ও মোবাইল নম্বরে যোগাযোগ বাটন",
        "বিকাশ ও নগদ কিউআর কোডযুক্ত চেম্বার ফি গাইডলাইন",
        "জটিল ৫টি রোগের বিশেষ পেজ (পাইলস, একজিমা, কিডনি পাথর, ইত্যাদি)",
        ".com ডোমেইন ও হাই-স্পিড সিকিউর ক্লাউড সার্ভার (১ বছর)",
      ],
    },
    {
      id: "growth",
      name: "গ্রোথ চেম্বার",
      target: "ব্যস্ত চিকিৎসকদের জন্য—চেম্বারে রোগী বৃদ্ধি ও গুগলে থানা/জেলায় ১ নম্বর অবস্থান",
      popular: true,
      setupFee: "৩৮,৫০০ টাকা",
      annualFee: "১৮,৫০০ টাকা",
      description: "চেম্বারের ডিজিটাল ব্র্যান্ডিং, গুগল ম্যাপস এসইও ও রোগী বৃদ্ধির সম্পূর্ণ আধুনিক প্যাকেজ।",
      features: [
        "স্টার্টার প্যাকেজের সকল সুবিধা অন্তর্ভুক্ত",
        "সরাসরি হোয়াটসঅ্যাপ ও ফোনে দ্রুত রোগী যোগাযোগের ব্যবস্থা",
        "আপনার থানা ও জেলা পর্যায়ে গুগল সার্চ এবং গুগল ম্যাপস ১ নম্বর এসইও",
        "টার্গেটেড ক্রনিক রোগী ফেসবুক সচেতনতামূলক অ্যাড ক্যাম্পেইন সেটআপ",
        "বাংলা ও ইংরেজিতে প্রিন্টযোগ্য কিউআর কোডযুক্ত ডিজিটাল প্রেসক্রিপশন",
        "স্মার্ট হোয়াটসঅ্যাপ সিরিয়াল ও অ্যাপয়েন্টমেন্ট কনফার্মেশন বট",
        "চেম্বার সহকারী ও কম্পাউন্ডারকে সফটওয়্যার পরিচালনার পূর্ণাঙ্গ ট্রেনিং",
      ],
    },
    {
      id: "apex",
      name: "অ্যাপেক্স মেডিকেল সেন্টার",
      target: "মাল্টি-ডাক্তার ক্লিনিক, ইনস্টিটিউট ও বড় আকারের হোমিও কমপ্লেক্সের জন্য",
      popular: false,
      setupFee: "৬৮,৫০০ টাকা",
      annualFee: "২৮,৫০০ টাকা",
      description: "একাধিক চিকিৎসক, ফার্মেসি ডিসপেনসারি, ক্লিনিক ম্যানেজমেন্ট সফটওয়্যার ও দেশব্যাপী রোগী পাওয়ার সমন্বিত এন্টারপ্রাইজ সলিউশন।",
      features: [
        "গ্রোথ প্যাকেজের সকল সুবিধা অন্তর্ভুক্ত",
        "একাধিক ডাক্তার ও মাল্টিপল ব্রাঞ্চ/শাখা পরিচালনা সুবিধা",
        "পূর্ণাঙ্গ ক্লিনিক ম্যানেজমেন্ট সফটওয়্যার ও ডিজিটাল প্রেসক্রিপশন মডিউল",
        "অফিসিয়াল মেটা ভেরিফায়েড হোয়াটসঅ্যাপ বিজনেস এপিআই ইন্টিগ্রেশন",
        "ফেসবুক ও গুগল সার্চে জটিল রোগীদের জন্য টার্গেটেড বিজ্ঞাপন ক্যাম্পেইন",
        "ফার্মেসি জার্মান সিলপ্যাক ওষুধ ইনভেন্টরি ও স্টক ট্র্যাকিং",
        "ডেডিকেটেড টেকনিক্যাল অ্যাকাউন্ট ম্যানেজার ও অগ্রাধিকার ভিআইপি সাপোর্ট",
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
          স্বচ্ছ ও সাশ্রয়ী চেম্বার ডিজিটালাইজেশন প্যাকেজ
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          কোনো লুকানো খরচ নেই। বাংলাদেশি চিকিৎসকদের বাস্তব প্র্যাকটিসের প্রয়োজন অনুযায়ী সুবিন্যস্ত।
        </p>

        {/* Toggle */}
        <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200">
          <button
            type="button"
            onClick={() => setBillingCycle("setup")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === "setup"
                ? "bg-[#0047BA] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            এককালীন বাস্তবায়ন ফি
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === "annual"
                ? "bg-[#0047BA] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            বাৎসরিক নবায়ন ও সাপোর্ট ফি
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-xl p-6 bg-white border flex flex-col justify-between transition-all ${
              pkg.popular
                ? "border-[#0047BA] shadow-md ring-1 ring-blue-100"
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
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-[#0047BA]">
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
                  {billingCycle === "setup" ? "এককালীন বাস্তবায়ন ও ট্রেনিং ফি" : "বাৎসরিক সার্ভার হোস্টিং, সিকিউরিটি ও টেকনিক্যাল সাপোর্ট"}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {pkg.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2 border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                  প্যাকেজে অন্তর্ভুক্ত সেবাসমূহ:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0047BA] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href={`/contact?package=${pkg.id}`}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  pkg.popular
                    ? "btn-primary shadow-xs"
                    : "btn-secondary"
                }`}
              >
                <span>এই প্যাকেজটি বেছে নিন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">
        পরিশোধের মাধ্যম: বিকাশ (bKash), নগদ (Nagad), রকেট (Rocket) অথবা সরাসরি ব্যাংক ট্রান্সফার।
      </div>
    </section>
  );
}
