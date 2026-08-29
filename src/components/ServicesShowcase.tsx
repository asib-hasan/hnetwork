"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
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
    { id: "all", label: "সকল ৮টি সেবা", count: 8 },
    { id: "web", label: "ওয়েবসাইট ও বুকিং", count: 2, items: ["medical-website", "online-appointments"] },
    { id: "seo", label: "এসইও ও বিজ্ঞাপন", count: 2, items: ["medical-seo", "digital-marketing"] },
    { id: "software", label: "ক্লিনিক সিআরএম ও বট", count: 2, items: ["clinic-crm-software", "tech-automation"] },
    { id: "branding", label: "ব্র্যান্ডিং ও সোশ্যাল", count: 2, items: ["branding-identity", "social-media-management"] },
  ];

  const filteredServices = servicesList.filter((service) => {
    if (activeCategory === "all") return true;
    const cat = categories.find((c) => c.id === activeCategory);
    return cat?.items?.includes(service.id);
  });

  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[#0052CC]" };
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
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-3xl mx-auto">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#0052CC] text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-blue-900 text-white" : "bg-slate-100 text-slate-500"}`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Services List */}
      <div className="space-y-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {renderIcon(service.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0052CC] block">
                    {service.tag}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h2>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] uppercase font-bold text-slate-700 block">
                  অন্তর্ভুক্ত সুবিধাসমূহ:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 font-semibold"
                >
                  <span>এই সেবার প্রস্তাবনা গ্রহণ করুন</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Benefits Box */}
            <div className="lg:col-span-5 rounded-xl p-5 bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                চেম্বারের বাস্তব ফলাফল
              </span>
              <div className="space-y-2">
                {service.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0052CC] flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                      {bIdx + 1}
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
