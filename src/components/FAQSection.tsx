"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  bengaliQuestion: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why does a Homeopathic Doctor specifically need dedicated digital infrastructure?",
    bengaliQuestion: "হোমিওপ্যাথিক ডাক্তার হিসেবে আমার কেন একটি ওয়েবসাইট ও এসইও প্রয়োজন?",
    answer: "Unlike general medicine, homeopathy relies heavily on patient trust, detailed chronic symptom evaluation, and long-term continuity. Millions of patients searching Google daily for natural, non-toxic healing from skin conditions, asthma, or chronic ailments have no way to discover your expertise unless you have a high-ranking website and Google Maps presence."
  },
  {
    question: "I am not tech-savvy. Will the Homeo Network team handle everything for my chamber?",
    bengaliQuestion: "আমি প্রযুক্তি ভালো বুঝি না। আমাদের চেম্বারের সবকিছু কি আপনারা পরিচালনা করবেন?",
    answer: "Yes, 100%! We provide an end-to-end done-for-you service. From building your website, optimizing Google Maps, writing medical content, setting up WhatsApp automated replies, to training your assistant or receptionist—we manage the entire technological foundation so you can focus entirely on patient care."
  },
  {
    question: "How does the Online Appointment and Telemedicine system operate?",
    bengaliQuestion: "অনলাইন অ্যাপয়েন্টমেন্ট ও টেলিমেডিসিনের মাধ্যমে রোগী দেখার নিয়ম কী?",
    answer: "Patients select an open slot from your digital calendar, fill out pre-case questionnaire notes, and receive an instant confirmation on WhatsApp with your chamber address or a private HD video link. Automated reminder SMS messages are dispatched 2 hours prior to eliminate missed appointments."
  },
  {
    question: "Is patient case history and prescription data completely secure and confidential?",
    bengaliQuestion: "রোগীদের মেডিকেল তথ্য ও প্রেসক্রিপশন কি নিরাপদ থাকবে?",
    answer: "Strict medical confidentiality is our highest priority. All electronic health records (EHR) and prescriptions are protected with bank-grade 256-bit SSL encryption, automated cloud backups, and HIPAA-compliant privacy standards. Only you and authorized personnel hold access keys."
  },
  {
    question: "How quickly can my clinic website and booking software be launched?",
    bengaliQuestion: "কতদিনের মধ্যে ওয়েবসাইট ও সফটওয়্যার রেডি হয়ে যাবে?",
    answer: "Standard doctor websites and booking systems go live within 7 to 10 business days. Custom enterprise clinic solutions with multi-chamber management or complex CRM modules typically take 2 to 3 weeks, accompanied by personalized staff onboarding."
  },
  {
    question: "What results can I expect from Local Medical SEO and Google Maps ranking?",
    bengaliQuestion: "গুগল এসইও এবং গুগল ম্যাপস থেকে কেমন ফলাফল পাওয়া যাবে?",
    answer: "Within 60-90 days of structured healthcare SEO, your clinic will rank in Google's Top 3 'Map Pack' for critical search terms like 'Best Homeopathic Doctor in [Your Area]'. This generates a consistent organic stream of direct telephone calls and appointment requests without recurring ad expenditure."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="badge-pill mb-3 inline-flex">
            <HelpCircle className="w-4 h-4 text-[#00E5FF]" />
            <span>Doctor Inquiries & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit] mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Everything you need to know about digitizing your homeopathic chamber and clinic with Homeo Network.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0A1630]/90 border-[#00A3FF]/40 shadow-[0_4px_25px_rgba(0,163,255,0.15)]"
                    : "bg-[#070E20]/60 border-[#00A3FF]/15 hover:border-[#00A3FF]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-bold text-white font-[Outfit]">
                      {faq.question}
                    </span>
                    <span className="text-xs text-[#00E5FF] mt-1 font-medium">
                      {faq.bengaliQuestion}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#00A3FF]/10 flex items-center justify-center shrink-0 text-[#00E5FF] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#00A3FF]/25" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-[#00A3FF]/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
