"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Crown
} from "lucide-react";

export default function PricingPackages() {
  const [billingCycle, setBillingCycle] = useState<"setup" | "annual">("setup");

  const packages = [
    {
      id: "starter",
      name: "Starter Chamber",
      bengaliName: "স্টার্টার চেম্বার প্যাকেজ",
      target: "For solo practitioners establishing professional digital authority",
      tag: "Essential Presence",
      popular: false,
      setupFee: "৳18,500",
      annualFee: "৳15,000",
      description: "Everything required to launch a high-speed, Google-indexed doctor website with verified chamber directions.",
      features: [
        "Specialized Doctor Website (Next.js & Mobile Fast)",
        "Doctor Bio, Qualifications & Chamber Timings",
        "Google Business Profile (Maps) Verification",
        "WhatsApp Direct Appointment Link",
        "Specialty Disease Pages (Allergy, Skin, PCOD, etc.)",
        "256-Bit SSL Certificate & Data Security",
        "Domain & High-Speed Cloud Hosting (1 Year)",
      ],
      notIncluded: [
        "Automated Calendar Slot Booking",
        "Classical EHR & Practice CRM Software",
        "Targeted Patient Ad Management",
      ],
    },
    {
      id: "growth",
      name: "Growth Practice",
      bengaliName: "গ্রোথ ক্লিনিক (সর্বাধিক জনপ্রিয়)",
      target: "For busy homeopaths seeking automated bookings and #1 Google ranking",
      tag: "Most Popular",
      popular: true,
      setupFee: "৳38,500",
      annualFee: "৳32,000",
      description: "The complete patient acquisition & chamber automation engine. Drastically cuts receptionist workload.",
      features: [
        "All Starter Features Included",
        "24/7 Self-Service Patient Booking Portal",
        "Automated WhatsApp & SMS Appointment Reminders",
        "Local Healthcare & Google Maps #1 SEO Campaign",
        "HD Video Telemedicine Integration for Global Patients",
        "Digital Prescription Generator with QR Code",
        "Automated 5-Star Patient Review Engine",
        "Chamber Assistant Onboarding & Training",
      ],
      notIncluded: [
        "Full Multi-Chamber EHR Repertory CRM",
      ],
    },
    {
      id: "apex",
      name: "Apex Medical Institute",
      bengaliName: "এপেক্স মেডিকেল সেন্টার / ইনস্টিটিউট",
      target: "For polyclinics, multi-doctor institutes & high-volume centers",
      tag: "Enterprise Suite",
      popular: false,
      setupFee: "৳68,500",
      annualFee: "৳58,000",
      description: "Our complete institutional technology stack: custom practice EHR CRM, multi-doctor roles, and video marketing.",
      features: [
        "All Growth Features Included",
        "Full Cloud EHR & Classical Homeopathy Case CRM",
        "Multi-Doctor & Multi-Branch Chamber Management",
        "Verified WhatsApp Business API Integration",
        "Meta (Facebook & Instagram) Targeted Patient Ad Setup",
        "8-12 Custom Medical Infographics & Health Video Reels",
        "Medicine Courier Automation (Pathao, Steadfast)",
        "Dedicated Account Strategist & Priority 24/7 VIP Support",
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-pill mb-3 inline-flex">
            <Crown className="w-4 h-4 text-[#00E5FF]" />
            <span>Transparent Investment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-[Outfit] mb-4">
            Predictable Packages for <span className="gradient-text">Homeopathic Practice</span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-6">
            Zero hidden charges. Every solution is custom-engineered and maintained by healthcare digital technology experts.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex p-1 rounded-full bg-[#081226] border border-[#00A3FF]/20">
            <button
              type="button"
              onClick={() => setBillingCycle("setup")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === "setup"
                  ? "bg-[#0047BA] text-white shadow-md"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              One-Time Complete Setup
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-[#0047BA] text-white shadow-md"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Annual Care & Support
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#0E2248] via-[#091632] to-[#050C1B] border-2 border-[#00A3FF] shadow-[0_10px_40px_rgba(0,163,255,0.3)] transform lg:-translate-y-2"
                  : "bg-[#070F22]/90 border border-[#00A3FF]/20 hover:border-[#00A3FF]/40"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00E5FF] text-[#050B17] font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{pkg.tag}</span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-[Outfit]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#00E5FF] mt-0.5">
                      {pkg.bengaliName}
                    </p>
                  </div>
                  {!pkg.popular && (
                    <span className="text-[11px] font-semibold text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/20">
                      {pkg.tag}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {pkg.target}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-[#00A3FF]/15">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white font-[Outfit]">
                      {billingCycle === "setup" ? pkg.setupFee : pkg.annualFee}
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      {billingCycle === "setup" ? "/ complete setup" : "/ year support & hosting"}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#38BDF8] mt-1 font-medium">
                    {billingCycle === "setup"
                      ? "Includes full engineering, design, branding & staff training."
                      : "Includes cloud server, security updates, SSL & doctor hotline."}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-white font-[Outfit] block mb-2">
                    What&apos;s Included:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E2E8F0]">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#00A3FF]/15">
                <Link
                  href={`/contact?service=${encodeURIComponent(pkg.name + " Package")}&source=pricing`}
                  className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? "btn-primary shadow-[0_0_25px_rgba(0,163,255,0.4)]"
                      : "btn-secondary text-white hover:border-[#00A3FF]"
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-1 text-[10px] text-[#64748B] mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Free pre-deployment consultation included</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Enterprise Notice */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#08142D]/80 border border-[#00A3FF]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-[Outfit] flex items-center justify-center sm:justify-start gap-2">
              <Building2 className="w-4 h-4 text-[#00E5FF]" />
              <span>Need a Custom Solution for Multiple Chambers or Hospitals?</span>
            </h4>
            <p className="text-xs text-[#94A3B8]">
              We build custom homeopathic repertory databases, pharmaceutical inventory trackers, and large-scale hospital networks.
            </p>
          </div>
          <Link
            href="/contact?service=Custom%20Enterprise%20Clinic"
            className="btn-secondary text-xs py-3 px-6 shrink-0"
          >
            Request Enterprise Blueprint
          </Link>
        </div>

      </div>
    </section>
  );
}
