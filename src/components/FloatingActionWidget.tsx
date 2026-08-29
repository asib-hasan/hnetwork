"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MessageCircle, 
  X, 
  Phone, 
  CalendarCheck 
} from "lucide-react";

export default function FloatingActionWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Contact Drawer */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl p-4 bg-[#070F22]/95 backdrop-blur-2xl border border-[#00A3FF]/30 shadow-[0_10px_40px_rgba(0,0,0,0.7)] animate-fadeIn space-y-3">
          <div className="flex items-center justify-between border-b border-[#00A3FF]/15 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse"></div>
              <span className="text-xs font-bold text-white font-[Outfit]">
                Doctor Helpline & Consultation
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#94A3B8] hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close helpline menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#94A3B8] leading-relaxed">
            Need urgent guidance for your chamber website, SEO, or software? Connect with our digital architect immediately:
          </p>

          <div className="space-y-2 pt-1">
            {/* WhatsApp */}
            <a
              href="https://wa.me/8801700000000?text=Hello%20Homeo%20Network,%20I%20am%20a%20doctor%20and%20interested%20in%20digitizing%20my%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 rounded-xl bg-[#0047BA]/20 hover:bg-[#0047BA]/40 border border-[#00A3FF]/30 hover:border-[#00E5FF] text-white text-xs font-semibold flex items-center gap-2.5 transition-all group"
            >
              <div className="w-7 h-7 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span>WhatsApp Hotline</span>
                <span className="text-[10px] text-[#38BDF8] font-normal">Typical reply in 5 mins</span>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+8801700000000"
              className="w-full p-2.5 rounded-xl bg-[#0B1730] hover:bg-[#0E2044] border border-[#00A3FF]/15 hover:border-[#00A3FF]/30 text-white text-xs font-semibold flex items-center gap-2.5 transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-[#00A3FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span>Direct Voice Call</span>
                <span className="text-[10px] text-[#94A3B8] font-normal">+880 1700-000000</span>
              </div>
            </a>

            {/* Schedule Consultation */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-2.5 text-xs justify-center flex items-center gap-2"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Schedule 30-Min Strategy Call</span>
            </Link>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#0047BA] to-[#00A3FF] text-white shadow-[0_4px_25px_rgba(0,163,255,0.4)] hover:shadow-[0_6px_30px_rgba(0,229,255,0.6)] border border-[#00E5FF]/40 transition-all duration-300 transform hover:scale-105 focus:outline-none"
        aria-label="Open chamber helpline"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping"></span>
        </div>
        <span className="text-xs font-bold font-[Outfit] pr-1">
          {isOpen ? "Close" : "Doctor Helpline"}
        </span>
      </button>
    </div>
  );
}
