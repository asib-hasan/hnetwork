import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Cpu, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md mx-auto text-center space-y-4 bg-white p-8 rounded-xl border border-slate-200 shadow-xs">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 inline-block">
          404 Not Found
        </span>

        <h1 className="text-2xl font-bold text-slate-900 font-[Outfit]">
          Page Unavailable
        </h1>

        <p className="text-xs text-slate-600 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is currently unavailable.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
          <Link href="/" className="btn-primary py-2 px-4 text-xs font-semibold flex items-center justify-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link href="/services" className="btn-secondary py-2 px-4 text-xs font-semibold flex items-center justify-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
