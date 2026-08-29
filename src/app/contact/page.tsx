import React from "react";
import type { Metadata } from "next";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Chamber Strategy Session",
  description:
    "Get in touch with the Homeo Network team. Book your free 30-minute clinic digital transformation consultation or connect via WhatsApp hotline.",
};

export default function ContactPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="badge-pill mb-2 inline-flex">
            <MessageSquare className="w-4 h-4 text-[#00E5FF]" />
            <span>Chamber & Clinic Onboarding</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-[Outfit]">
            Let&apos;s Build Your Clinic&apos;s{" "}
            <span className="gradient-text">Digital Blueprint</span>
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Speak directly with our healthcare technology specialists. We provide personalized audits, demo previews of doctor websites, and transparent guidance.
          </p>

          <div className="p-3.5 rounded-2xl bg-[#09152E]/70 border border-[#00A3FF]/20 max-w-2xl mx-auto text-xs sm:text-sm text-[#38BDF8] font-medium">
            আপনার চেম্বার বা ক্লিনিক ডিজিটালাইজ করার জন্য ফ্রি কনসালটেশন শিডিউল করুন অথবা সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন।
          </div>
        </div>
      </section>

      {/* 2. CONTACT SECTION: FORM & DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-[#00A3FF]/25 bg-[#09142C]/80 space-y-6">
              <h2 className="text-2xl font-bold text-white font-[Outfit]">
                Direct Communication
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                We understand that doctors have demanding schedules. Connect via your preferred channel for prompt response.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* WhatsApp Channel */}
                <a
                  href="https://wa.me/8801700000000?text=Hello%20Homeo%20Network,%20I%20am%20a%20doctor%20inquiring%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20 hover:border-[#00E5FF] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00A3FF]/15 text-[#00E5FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      WhatsApp Instant Consultation
                    </div>
                    <div className="text-xs text-[#00A3FF] mt-0.5">
                      +880 1700-000000
                    </div>
                    <span className="text-[10px] text-[#64748B] block mt-1">
                      Fastest response (under 15 mins during clinic hours)
                    </span>
                  </div>
                </a>

                {/* Telephone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20">
                  <div className="w-10 h-10 rounded-xl bg-[#00A3FF]/15 text-[#00E5FF] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Direct Phone Line</div>
                    <a href="tel:+8801700000000" className="text-xs text-[#94A3B8] hover:text-white block mt-0.5">
                      +880 1700-000000
                    </a>
                    <span className="text-[10px] text-[#64748B] block mt-1">
                      10:00 AM - 10:00 PM (Everyday)
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20">
                  <div className="w-10 h-10 rounded-xl bg-[#00A3FF]/15 text-[#00E5FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Official Mailbox</div>
                    <a href="mailto:contact@homeonetwork.com" className="text-xs text-[#94A3B8] hover:text-white block mt-0.5">
                      contact@homeonetwork.com
                    </a>
                    <span className="text-[10px] text-[#64748B] block mt-1">
                      Proposals, institutional partnerships & RFP
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20">
                  <div className="w-10 h-10 rounded-xl bg-[#00A3FF]/15 text-[#00E5FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Headquarters</div>
                    <div className="text-xs text-[#94A3B8] mt-0.5">
                      Dhaka, Bangladesh
                    </div>
                    <span className="text-[10px] text-[#64748B] block mt-1">
                      Providing remote setup & on-premise onboarding nationwide
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Privacy & Guarantee Box */}
            <div className="p-5 rounded-2xl bg-[#050C1B] border border-[#00A3FF]/15 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
              <div className="text-xs text-[#94A3B8] leading-relaxed">
                <strong className="text-white">Doctor Confidentiality:</strong> All medical practice data, chamber revenue numbers, and patient case volumes discussed remain 100% confidential under our non-disclosure policy.
              </div>
            </div>

          </div>

          {/* Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <FAQSection />

    </div>
  );
}
