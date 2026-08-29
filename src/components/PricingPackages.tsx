"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Crown } from "lucide-react";

export default function PricingPackages() {
  const [billingCycle, setBillingCycle] = useState<"setup" | "annual">("setup");

  const packages = [
    {
      id: "starter",
      name: "Starter Chamber",
      target: "For solo practitioners establishing digital presence",
      popular: false,
      setupFee: "BDT 18,500",
      annualFee: "BDT 15,000",
      description: "Everything required to launch a high-speed, Google-indexed doctor website with verified chamber directions.",
      features: [
        "Doctor Website (Next.js & mobile fast)",
        "Doctor Bio, Credentials & Chamber Timings",
        "Google Business Profile (Maps) Setup",
        "WhatsApp Direct Appointment Link",
        "Specialty Disease Pages (Skin, Allergy, etc.)",
        "Domain & High-Speed Cloud Hosting (1 Year)",
      ],
    },
    {
      id: "growth",
      name: "Growth Practice",
      target: "For busy homeopaths seeking automated bookings and #1 Google ranking",
      popular: true,
      setupFee: "BDT 38,500",
      annualFee: "BDT 32,000",
      description: "The complete patient acquisition & chamber automation engine. Drastically cuts receptionist workload.",
      features: [
        "All Starter Features Included",
        "24/7 Self-Service Patient Booking Portal",
        "Automated WhatsApp & SMS Reminders",
        "Local Google Search & Maps #1 SEO",
        "HD Video Telemedicine Integration",
        "Digital Prescription Generator with QR Code",
        "Chamber Assistant Onboarding & Training",
      ],
    },
    {
      id: "apex",
      name: "Apex Medical Center",
      target: "For polyclinics, multi-doctor institutes & high-volume centers",
      popular: false,
      setupFee: "BDT 68,500",
      annualFee: "BDT 58,000",
      description: "Our complete institutional technology stack: custom practice EHR CRM, multi-doctor roles, and video marketing.",
      features: [
        "All Growth Features Included",
        "Full Cloud EHR & Classical Homeopathy Case CRM",
        "Multi-Doctor & Multi-Branch Management",
        "Verified WhatsApp Business API Integration",
        "Meta (Facebook & Instagram) Targeted Ads",
        "Medicine Courier Automation",
        "Dedicated Account Strategist & Priority Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="badge-pill mb-2 inline-flex">
          <Crown className="w-3.5 h-3.5 text-sky-600" />
          <span>Investment Plans</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-[Outfit] mb-2">
          Predictable Clinic Packages
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          Zero hidden fees. Built and maintained by dedicated healthcare digital experts.
        </p>

        {/* Toggle */}
        <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200">
          <button
            type="button"
            onClick={() => setBillingCycle("setup")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === "setup"
                ? "bg-sky-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            One-Time Setup
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === "annual"
                ? "bg-sky-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Annual Retainer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-xl p-6 bg-white border flex flex-col justify-between transition-all ${
              pkg.popular
                ? "border-sky-500 shadow-md ring-1 ring-sky-100"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-[Outfit]">
                    {pkg.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {pkg.target}
                  </span>
                </div>
                {pkg.popular && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="text-3xl font-black text-slate-900 font-[Outfit]">
                  {billingCycle === "setup" ? pkg.setupFee : pkg.annualFee}
                </div>
                <span className="text-[11px] text-slate-500">
                  {billingCycle === "setup" ? "One-time complete deployment" : "Annual renewal & hosting"}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {pkg.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2 border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                  Included Features:
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
                <span>Select {pkg.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
