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
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold text-slate-900">
                ডাক্তার হেল্পলাইন (সরাসরি সহায়তা)
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="বন্ধ করুন"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            আপনার চেম্বার ওয়েবসাইট, গুগল ম্যাপস এসইও বা সফটওয়্যার সম্পর্কে যেকোনো তথ্যে কথা বলুন:
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/8801628044781?text=আসসালামু%20আলাইকুম%20Homeo%20Network,%20আমি%20একজন%20হোমিওপ্যাথিক%20চিকিৎসক।%20আমার%20চেম্বার%20ডিজিটালাইজেশন%20ও%20রোগী%20বৃদ্ধি%20সম্পর্কে%20পরামর্শ%20নিতে%20চাই।"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2 rounded-lg bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 text-slate-800 text-xs font-semibold flex items-center gap-2.5 transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-[#0047BA] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900">হোয়াটসঅ্যাপ কনসালটেশন</span>
                <span className="text-[10px] text-[#0047BA] font-medium">সাধারণত ৫ মিনিটে উত্তর</span>
              </div>
            </a>

            <a
              href="tel:+8801628044781"
              className="w-full p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2.5 transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900">সরাসরি হটলাইন কল</span>
                <span className="text-[10px] text-slate-500 font-normal">+৮৮০ ১৬২৮-০৪৪৭৮১</span>
              </div>
            </a>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-2 text-xs justify-center flex items-center gap-1.5"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>ফ্রি স্ট্র্যাটেজি সেশন নিন</span>
            </Link>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0047BA] hover:bg-[#00388F] text-white shadow-md text-xs font-bold"
        aria-label="ডাক্তার হেল্পলাইন"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{isOpen ? "বন্ধ করুন" : "ডাক্তার হেল্পলাইন"}</span>
      </button>
    </div>
  );
}
