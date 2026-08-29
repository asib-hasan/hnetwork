"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Phone, CalendarCheck } from "lucide-react";

export default function FloatingActionWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-2.5 w-72 rounded-xl p-4 bg-white border border-slate-200 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-900 font-[Outfit]">
                Doctor Helpline
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Need guidance for your clinic website, Google SEO, or software? Connect with our team:
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/8801700000000?text=Hello%20Homeo%20Network,%20I%20am%20a%20doctor%20and%20interested%20in%20digitizing%20my%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-slate-800 text-xs font-semibold flex items-center gap-2.5 transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900">WhatsApp Chat</span>
                <span className="text-[10px] text-emerald-700 font-normal">Typical reply in 5 mins</span>
              </div>
            </a>

            <a
              href="tel:+8801700000000"
              className="w-full p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2.5 transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900">Voice Call</span>
                <span className="text-[10px] text-slate-500 font-normal">+880 1700-000000</span>
              </div>
            </a>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-2 text-xs justify-center flex items-center gap-1.5"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Strategy Call</span>
            </Link>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-md text-xs font-bold font-[Outfit]"
        aria-label="Doctor Helpline"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{isOpen ? "Close" : "Doctor Helpline"}</span>
      </button>
    </div>
  );
}
