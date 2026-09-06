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
  Sparkles,
  UserCheck
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[#0047BA] group-hover:text-white transition-colors" };
    switch (name) {
      case "Globe":
        return <Globe {...props} />;
      case "UserCheck":
        return <UserCheck {...props} />;
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
    <Link
      href={`/services#${service.id}`}
      className="group block p-6 rounded-xl bg-white border border-slate-200 hover:border-[#0047BA] hover:shadow-sm transition-all duration-150"
    >
      <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center group-hover:bg-[#0047BA] group-hover:text-white transition-colors mb-4">
        {renderIcon(service.iconName)}
      </div>

      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0047BA] bg-[#EFF6FF] px-2 py-0.5 rounded-md inline-block mb-2">
        {service.tag}
      </span>

      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0047BA] transition-colors">
        {service.title}
      </h3>

      <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-2">
        {service.shortDesc}
      </p>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0047BA]">
        <span>বিস্তারিত দেখুন</span>
        <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
