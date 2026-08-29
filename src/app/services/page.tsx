import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cpu } from "lucide-react";
import ServicesShowcase from "@/components/ServicesShowcase";
import PricingPackages from "@/components/PricingPackages";

export const metadata: Metadata = {
  title: "ডিজিটাল সেবাসমূহ ও স্বাস্থ্যসেবা প্রযুক্তি",
  description:
    "হোমিওপ্যাথিক চিকিৎসকদের জন্য বিশেষায়িত ৮টি ডিজিটাল সেবা: ওয়েবসাইট, টেলিমেডিসিন, গুগল এসইও, কেস সফটওয়্যার, ক্লিনিক ব্র্যান্ডিং ও অটোমেশন।",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="badge-pill mb-1 inline-flex">
            <Cpu className="w-3.5 h-3.5 text-blue-700" />
            <span>হোমিওপ্যাথি টেকনোলজি স্যুট</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            হোমিওপ্যাথিক প্র্যাকটিসের জন্য বিশেষভাবে প্রস্তুত
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            গুগলে নতুন রোগী পাওয়া থেকে শুরু করে স্বয়ংক্রিয় সিরিয়াল ও ডিজিটাল কেস রেকর্ড—আপনার চেম্বারের পূর্ণাঙ্গ ডিজিটাল ইকোসিস্টেম।
          </p>
        </div>
      </section>

      {/* Services Showcase with Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <ServicesShowcase />
      </section>

      {/* Pricing Packages */}
      <PricingPackages />

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 sm:p-8 text-center rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            আপনার চেম্বারের জন্য কাস্টম সমাধান প্রয়োজন?
          </h2>
          <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
            আপনি একক চিকিৎসক হোন বা মাল্টি-ডাক্তার চিকিৎসাকেন্দ্র পরিচালনা করুন—আমরা আপনার নিজস্ব চেম্বারের নিয়ম অনুযায়ী প্রতিটি মডিউল সাজিয়ে দিই।
          </p>
          <div className="pt-1">
            <Link href="/contact" className="btn-primary py-2 px-5 text-xs font-semibold">
              কাস্টম প্রস্তাবনা অনুরোধ করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
