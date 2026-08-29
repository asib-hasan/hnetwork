import React from "react";
import Link from "next/link";
import { Home, Cpu } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-4 bg-white p-8 rounded-xl border border-slate-200 shadow-xs">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC] px-3 py-1 rounded-full bg-blue-50 border border-blue-200 inline-block">
          ৪০৪ পেজ পাওয়া যায়নি
        </span>

        <h1 className="text-2xl font-bold text-slate-900">
          পাতাটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="text-xs text-slate-600 leading-relaxed">
          আপনি যে পাতাটি খুঁজছেন তা স্থানান্তরিত হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা বর্তমানে উপলব্ধ নেই।
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
          <Link href="/" className="btn-primary py-2 px-4 text-xs font-semibold flex items-center justify-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            <span>হোমপেজে ফিরে যান</span>
          </Link>
          <Link href="/services" className="btn-secondary py-2 px-4 text-xs font-semibold flex items-center justify-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>সেবাসমূহ দেখুন</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
