import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cpu } from "lucide-react";
import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata: Metadata = {
  title: "Digital Services & Healthcare Solutions",
  description:
    "Explore the 8 core digital solutions engineered by Homeo Network for homeopathic doctors: websites, telemedicine, healthcare SEO, practice CRM software, digital branding, and automated workflows.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="badge-pill mb-1 inline-flex">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            <span>Tech Suite for Homeopathy</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-[Outfit]">
            Engineered Exclusively for Homeopathic Practice
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            From patient discovery on Google to automated booking and digital case records—we provide the complete technology ecosystem.
          </p>
        </div>
      </section>

      {/* Services Showcase with Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <ServicesShowcase />
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 sm:p-8 text-center rounded-xl border border-slate-200 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-[Outfit]">
            Need a Custom Solution for Your Clinic?
          </h2>
          <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
            Whether you are a solo practitioner or managing a multi-doctor center, we customize every module to your specific clinical workflow.
          </p>
          <div className="pt-1">
            <Link href="/contact" className="btn-primary py-2 px-5 text-xs font-semibold">
              Request Custom Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
