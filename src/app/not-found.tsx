import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Cpu, Calculator, MessageSquare, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-xl mx-auto text-center space-y-6 glass-panel p-8 sm:p-12 border-[#00A3FF]/30 relative z-10 bg-[#070F22]/90">
        
        {/* Glow & 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
          <AlertTriangle className="w-4 h-4" />
          <span>404 Error • Page Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-[Outfit]">
          Destination <span className="gradient-text">Unavailable</span>
        </h1>

        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          The chamber page or digital healthcare resource you are looking for might have been shifted, renamed, or is currently undergoing clinical updates.
        </p>

        {/* Quick Nav Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
          <Link
            href="/"
            className="p-3 rounded-xl bg-[#060D1E] hover:bg-[#0047BA]/20 border border-[#00A3FF]/15 hover:border-[#00A3FF]/40 text-xs text-white flex items-center gap-2.5 transition-all"
          >
            <Home className="w-4 h-4 text-[#00E5FF]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="p-3 rounded-xl bg-[#060D1E] hover:bg-[#0047BA]/20 border border-[#00A3FF]/15 hover:border-[#00A3FF]/40 text-xs text-white flex items-center gap-2.5 transition-all"
          >
            <Cpu className="w-4 h-4 text-[#00E5FF]" />
            <span>Explore 8 Digital Services</span>
          </Link>

          <Link
            href="/#calculator"
            className="p-3 rounded-xl bg-[#060D1E] hover:bg-[#0047BA]/20 border border-[#00A3FF]/15 hover:border-[#00A3FF]/40 text-xs text-white flex items-center gap-2.5 transition-all"
          >
            <Calculator className="w-4 h-4 text-[#00E5FF]" />
            <span>Clinic Growth Calculator</span>
          </Link>

          <Link
            href="/contact"
            className="p-3 rounded-xl bg-[#060D1E] hover:bg-[#0047BA]/20 border border-[#00A3FF]/15 hover:border-[#00A3FF]/40 text-xs text-white flex items-center gap-2.5 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#00E5FF]" />
            <span>Book Doctor Consultation</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#00A3FF]/15">
          <Link
            href="/"
            className="btn-primary py-3 px-8 text-xs font-bold inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
