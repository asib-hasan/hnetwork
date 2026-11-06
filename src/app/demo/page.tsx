import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stethoscope, ShieldCheck, Globe } from "lucide-react";
import InteractiveClinicDemo from "@/components/InteractiveClinicDemo";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Live Technology Demo | Website, Directory & Marketing | Homeo Network",
  description:
    "Interactive demonstration of Homeo Network's 3 core solutions: bespoke doctor website, verified national doctor directory listing, and Google Maps #1 local SEO.",
};

export default function DemoPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header in Brand Royal Blue Aesthetic */}
      <section className="relative overflow-hidden bg-[#07264E] text-white pt-14 pb-16 sm:pt-20 sm:pb-22 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-grid-medical-dark opacity-35" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="eyebrow-tag eyebrow-dark mb-1 justify-center">
            <span className="eyebrow-indicator" />
            <span>Interactive Technology Simulation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Experience Homeo Network&apos;s 3 Core Solutions
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Without the friction of creating trial accounts—interactively explore how your doctor website, verified national directory profile, and #1 Google search ranking connect you directly with prospective chronic patients.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" /> Verified Board Stature
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Globe className="w-3.5 h-3.5 text-[#38BDF8]" /> 100% Real Physician Workflow
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Demo Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <InteractiveClinicDemo />
      </section>

      {/* Live Walkthrough CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="card-bespoke p-8 sm:p-12 text-center space-y-5 bg-gradient-to-b from-[#F0F6FD] to-white border border-[#D0E2F5]">
          <div className="eyebrow-tag mb-1 justify-center">
            <span className="eyebrow-indicator" />
            <span>Live Screen-Share or Chamber Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1E36]">
            Want a Guided Walkthrough on Your Clinic Computer or Mobile?
          </h2>
          <p className="text-xs sm:text-sm text-[#1E293B]/70 max-w-xl mx-auto leading-relaxed">
            Our medical technology specialist will conduct a tailored 20-minute live demonstration on Google Meet or in-person at your chamber at your convenience.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact?service=Website%20Development"
              className="btn-primary py-3 px-6 text-xs sm:text-sm font-semibold group cursor-pointer"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Book Guided Demo Session</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/8801811999878?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20live%20walkthrough%20of%20Homeo%20Network."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-brand py-3 px-6 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              Schedule via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
