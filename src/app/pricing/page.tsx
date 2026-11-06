import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Zap, CheckCircle2, Lock, Banknote } from "lucide-react";
import PricingPackages from "@/components/PricingPackages";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Packages & Pricing | Transparent & Accessible Clinic Digitization | Homeo Network",
  description:
    "Transparent pricing structures for homeopathic practitioners: Starter Chamber, Growth Chamber, and Apex Medical Center. bKash, Nagad, and bank wire supported.",
};

export default function PricingPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header in Brand Royal Blue Aesthetic */}
      <section className="relative overflow-hidden bg-[#07264E] text-white pt-14 pb-16 sm:pt-20 sm:pb-22 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-grid-medical-dark opacity-35" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="eyebrow-tag eyebrow-dark mb-1 justify-center">
            <span className="eyebrow-indicator" />
            <span>Transparent &amp; Predictable Investment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Homeopathic Clinic Digitization Packages
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Zero hidden fees or unexpected recurring surprises. Clear one-time technical implementation and transparent annual cloud maintenance.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Banknote className="w-3.5 h-3.5 text-[#38BDF8]" /> bKash, Nagad &amp; QR Settle
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Lock className="w-3.5 h-3.5 text-[#38BDF8]" /> Bank-Grade Data Security
            </span>
          </div>
        </div>
      </section>

      {/* Main Pricing Packages Component */}
      <PricingPackages />

      {/* Included Guarantees Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-bespoke p-6 space-y-2.5">
            <div className="size-10 rounded-[10px] bg-[#F0F6FD] text-[#07418b] flex items-center justify-center border border-[#D0E2F5]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1E36]">100% Data Sovereignty</h3>
            <p className="text-xs text-[#1E293B]/70 leading-relaxed">
              All patient records, prescriptions, and financial summaries belong strictly to your chamber. Export comprehensive Excel backups at any moment.
            </p>
          </div>

          <div className="card-bespoke p-6 space-y-2.5">
            <div className="size-10 rounded-[10px] bg-[#F0F6FD] text-[#07418b] flex items-center justify-center border border-[#D0E2F5]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1E36]">Staff &amp; Compounder Training</h3>
            <p className="text-xs text-[#1E293B]/70 leading-relaxed">
              We provide complete hands-on operational training for your clinic staff, ensuring smooth digital prescription printing and appointment serial handling.
            </p>
          </div>

          <div className="card-bespoke p-6 space-y-2.5">
            <div className="size-10 rounded-[10px] bg-[#F0F6FD] text-[#07418b] flex items-center justify-center border border-[#D0E2F5]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B1E36]">Statutory Board Standards</h3>
            <p className="text-xs text-[#1E293B]/70 leading-relaxed">
              Engineered in complete accordance with Bangladesh Homeopathy Board guidelines, accurately highlighting your institutional credentials.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
