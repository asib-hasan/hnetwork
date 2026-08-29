"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "সেবাসমূহ", href: "/services" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Homeo Network Logo"
              width={40}
              height={40}
              className="object-contain transform group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[#0047BA]">
              Homeo<span className="text-[#0084FF]">Network</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              হোমিওপ্যাথদের জন্য
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? "text-[#0052CC] bg-[#EFF6FF] font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-600 hover:text-[#0052CC] flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
            <span>হোয়াটসঅ্যাপ</span>
          </a>
          <Link
            href="/contact"
            className="btn-primary py-2 px-4 text-xs font-semibold"
          >
            পরামর্শ নিন
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          aria-label="মেনু টগল করুন"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full py-2 text-xs text-center"
            >
              পরামর্শ নিন
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
