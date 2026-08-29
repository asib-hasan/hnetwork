"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  CalendarCheck, 
  Search, 
  TrendingUp, 
  Palette, 
  Database, 
  Share2, 
  Cpu
} from "lucide-react";
import { servicesList } from "@/data/servicesData";

export default function ServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All 8 Digital Solutions", count: 8 },
    { id: "web", label: "Websites & Telemedicine", count: 2, items: ["medical-website", "online-appointments"] },
    { id: "seo", label: "Medical SEO & Patient Ads", count: 2, items: ["medical-seo", "digital-marketing"] },
    { id: "software", label: "Clinic CRM & Automation", count: 2, items: ["clinic-crm-software", "tech-automation"] },
    { id: "branding", label: "Branding & Social Media", count: 2, items: ["branding-identity", "social-media-management"] },
  ];

  const filteredServices = servicesList.filter((service) => {
    if (activeCategory === "all") return true;
    const cat = categories.find((c) => c.id === activeCategory);
    return cat?.items?.includes(service.id);
  });

  const renderIcon = (name: string) => {
    const props = { className: "w-7 h-7 text-[#00E5FF]" };
    switch (name) {
      case "Globe":
        return <Globe {...props} />;
      case "CalendarCheck":
        return <CalendarCheck {...props} />;
      case "Search":
        return <Search {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      case "Palette":
        return <Palette {...props} />;
      case "Database":
        return <Database {...props} />;
      case "Share2":
        return <Share2 {...props} />;
      case "Cpu":
        return <Cpu {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isActive
                  ? "bg-[#00A3FF]/20 border border-[#00A3FF] text-[#00E5FF] shadow-[0_0_15px_rgba(0,163,255,0.2)]"
                  : "bg-[#081226]/80 border border-[#00A3FF]/15 text-[#94A3B8] hover:text-white hover:border-[#00A3FF]/30"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? "bg-[#00E5FF]/20 text-white" : "bg-white/5 text-[#64748B]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Services List */}
      <div className="space-y-16">
        {filteredServices.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`glass-panel p-8 sm:p-12 rounded-3xl border-[#00A3FF]/20 scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-300 ${
                isEven ? "bg-[#0A1633]/70" : "bg-[#070F22]/80"
              }`}
            >
              {/* Service Info (7 cols) */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#0047BA]/25 border border-[#00A3FF]/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.25)]">
                    {renderIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#38BDF8] block">
                      {service.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-[Outfit]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="text-sm font-semibold text-[#00E5FF]">
                  {service.bengaliTitle}
                </div>

                <p className="text-[#CBD5E1] text-base leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-white font-[Outfit]">
                    Scope of Deliverables:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn-primary text-xs py-3 px-6 group"
                  >
                    <span>Request Proposal for this Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/8801700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors"
                  >
                    Quick WhatsApp Inquiry →
                  </a>
                </div>
              </div>

              {/* Benefits Highlight Box (5 cols) */}
              <div className={`lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-[#050C1B] border border-[#00A3FF]/30 space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-2 border-b border-[#00A3FF]/15 pb-3">
                  <Sparkles className="w-4 h-4 text-[#00E5FF]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-[Outfit]">
                    Direct Practice Benefits
                  </span>
                </div>

                <div className="space-y-4">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00A3FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {bIdx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-[#09152E] border border-[#00A3FF]/15 text-[11px] text-[#64748B] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Includes lifetime maintenance and technical support options.</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
