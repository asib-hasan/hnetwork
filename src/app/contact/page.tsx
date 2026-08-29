import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Chamber Strategy Session",
  description:
    "Get in touch with the Homeo Network team. Book your free 30-minute clinic digital transformation consultation or connect via WhatsApp hotline.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="badge-pill mb-1 inline-flex">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
            <span>Consultation & Support</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-[Outfit]">
            Let&apos;s Build Your Clinic&apos;s Digital Blueprint
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Speak directly with our healthcare technology team. We provide personalized audits, demo previews, and transparent guidance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 font-[Outfit]">
                Direct Communication
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly through your preferred channel for prompt assistance:
              </p>

              <div className="space-y-3 pt-1">
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 transition-all"
                >
                  <div className="w-8 h-8 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">WhatsApp Instant Consultation</div>
                    <div className="text-xs text-emerald-700 font-semibold">+880 1700-000000</div>
                    <span className="text-[10px] text-slate-500">Typical response in 5 mins</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Direct Phone Line</div>
                    <a href="tel:+8801700000000" className="text-xs text-sky-700 font-semibold hover:underline">
                      +880 1700-000000
                    </a>
                    <span className="text-[10px] text-slate-500 block">10:00 AM - 10:00 PM (Daily)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Official Mailbox</div>
                    <a href="mailto:contact@homeonetwork.com" className="text-xs text-sky-700 font-semibold hover:underline">
                      contact@homeonetwork.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Headquarters</div>
                    <span className="text-xs text-slate-600">Dhaka, Bangladesh (Serving Worldwide)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700">
                <strong>Doctor Confidentiality:</strong> All medical chamber data and consultation details remain strictly confidential.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
