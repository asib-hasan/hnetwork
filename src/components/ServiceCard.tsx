import React from "react";
import Link from "next/link";
import { 
  Globe, 
  CalendarCheck, 
  Search, 
  TrendingUp, 
  Palette, 
  Database, 
  Share2, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-sky-400" };
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
    <div
      id={service.id}
      className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden ${
        featured
          ? "bg-[#0A1628] border border-sky-500/20 shadow-[0_0_40px_rgba(0,163,255,0.06)]"
          : "bg-[#0A1628] border border-slate-800 hover:border-slate-700"
      }`}
    >
      {/* Hover glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/0 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/5 transition-all duration-700" />

      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center group-hover:bg-sky-500/15 transition-all duration-300">
            {renderIcon(service.iconName)}
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white font-[Outfit] group-hover:text-sky-300 transition-colors mb-1 leading-snug">
          {service.title}
        </h3>
        <p className="text-xs font-medium text-sky-400/70 mb-3">
          {service.bengaliTitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Deliverables */}
        <div className="space-y-2 mb-6 border-t border-slate-800 pt-4">
          <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold block mb-1.5">
            Key Deliverables
          </span>
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
        <Link
          href={`/services#${service.id}`}
          className="text-xs font-semibold text-slate-400 group-hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="text-[11px] px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition-all font-semibold"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
