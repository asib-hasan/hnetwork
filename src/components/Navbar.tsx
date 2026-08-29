"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight, 
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Growth Calculator", href: "/#calculator" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050B17] border-b border-white/5 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden p-1 bg-[#0A1630] border border-[#00A3FF]/40 group-hover:border-[#00E5FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,163,255,0.25)] flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Homeo Network Logo"
              width={40}
              height={40}
              className="object-contain transform group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white font-[Outfit]">
                Homeo<span className="text-[#00A3FF]">Network</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
            </div>
            <span className="text-[10px] tracking-wider uppercase text-[#94A3B8] font-medium">
              Digital Platform for Doctors
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0B1730]/70 border border-[#00A3FF]/15 rounded-full px-5 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#00E5FF] bg-[#00A3FF]/15 shadow-[0_0_12px_rgba(0,163,255,0.2)]"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Hotline */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/8801700000000?text=Hello%20Homeo%20Network,%20I%20am%20a%20doctor%20and%20interested%20in%20your%20digital%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#00A3FF]/15 flex items-center justify-center text-[#00E5FF]">
              <PhoneCall className="w-3.5 h-3.5" />
            </div>
            <span>WhatsApp Consultation</span>
          </a>

          <Link
            href="/contact"
            className="btn-primary text-xs py-2.5 px-5 group"
          >
            <span>Consult an Expert</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-primary text-xs py-2 px-3 flex items-center gap-1.5"
          >
            <span>Book Call</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-[#0B1730] border border-[#00A3FF]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#070E1E]/95 backdrop-blur-2xl border-b border-[#00A3FF]/20 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-4 rounded-xl text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#00A3FF]/15 text-[#00E5FF] font-semibold"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#00A3FF]/15 flex flex-col gap-3">
              <a
                href="https://wa.me/8801700000000?text=Hello%20Homeo%20Network,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center text-sm py-3"
              >
                <PhoneCall className="w-4 h-4 text-[#00E5FF]" />
                <span>WhatsApp Helpline</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center text-sm py-3"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Clinic Audit</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
