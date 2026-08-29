import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Workflow } from "lucide-react";
import ServicesShowcase from "@/components/ServicesShowcase";
import PricingPackages from "@/components/PricingPackages";

export const metadata: Metadata = {
  title: "Digital Services & Healthcare Solutions",
  description:
    "Explore the 8 core digital solutions engineered by Homeo Network for homeopathic doctors: websites, telemedicine, healthcare SEO, practice CRM software, digital branding, and automated workflows.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="badge-pill mb-2 inline-flex">
            <Cpu className="w-4 h-4 text-[#00E5FF]" />
            <span>Dedicated Tech Suite for Homeopathy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-[Outfit]">
            Engineered Exclusively for{" "}
            <span className="gradient-text">Homeopathic Practice</span>
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            From patient discovery on Google to automated online booking, prescription delivery, and digital case management—we provide the complete technology ecosystem.
          </p>

          <div className="p-3.5 rounded-2xl bg-[#09152E]/70 border border-[#00A3FF]/20 max-w-2xl mx-auto text-xs sm:text-sm text-[#38BDF8] font-medium">
            হোমিওপ্যাথিক ডাক্তারদের চেম্বার ও ক্লিনিকের আধুনিকায়নে ৮টি বিশেষায়িত ডিজিটাল সেবা।
          </div>
        </div>
      </section>

      {/* 2. THE 8 SERVICES SHOWCASE WITH CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesShowcase />
      </section>

      {/* 3. TRANSPARENT PACKAGES & PRICING */}
      <PricingPackages />

      {/* 4. TRANSFORMATION ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-3 inline-flex">
            <Workflow className="w-4 h-4 text-[#00E5FF]" />
            <span>Structured Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit] mb-4">
            Our 4-Step <span className="gradient-text">Clinic Transformation</span> Process
          </h2>
          <p className="text-[#94A3B8] text-base">
            We handle 100% of the technical heavy lifting while ensuring smooth transition for you and your chamber staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery & Chamber Audit",
              desc: "We analyze your current patient flow, local competitor landscape on Google, and identify your clinic's specialty niches.",
            },
            {
              step: "02",
              title: "Digital Architecture & Design",
              desc: "We construct high-speed Next.js websites, interactive booking calendars, and craft your authoritative branding assets.",
            },
            {
              step: "03",
              title: "Deployment & Staff Training",
              desc: "Your platforms launch with 256-bit encryption. We provide hands-on training to your chamber assistant or receptionist.",
            },
            {
              step: "04",
              title: "Growth & Automation",
              desc: "Continuous local SEO optimization, automated WhatsApp review requests, and regular monthly practice performance reviews.",
            },
          ].map((item, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl border-[#00A3FF]/20 relative overflow-hidden space-y-4">
              <span className="text-4xl font-black text-[#00A3FF]/20 font-mono block">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-white font-[Outfit]">
                {item.title}
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. READY TO ELEVATE BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 text-center rounded-3xl border-[#00A3FF]/30 space-y-6 bg-gradient-to-b from-[#0B1A3A] to-[#060D1E]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-[Outfit]">
            Need a Custom Digital Package for Your Clinic?
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl mx-auto">
            Whether you are an independent practitioner establishing a private chamber or managing a multi-specialty homeopathic institute, we tailor every module to your clinical requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary py-3.5 px-8 text-sm font-bold"
            >
              Get Custom Proposal & Quote
            </Link>
            <Link
              href="/#calculator"
              className="btn-secondary py-3.5 px-8 text-sm font-medium"
            >
              Estimate Patient Growth First
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
