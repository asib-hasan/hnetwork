"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why does a Homeopathic Doctor need a dedicated digital presence?",
    answer: "Homeopathy relies on patient trust, detailed symptom evaluation, and chronic care discovery. Millions of patients search Google daily for natural healing from allergies, skin issues, asthma, or chronic ailments. A dedicated website and Google Maps presence ensures these patients discover and trust your chamber."
  },
  {
    question: "I am not tech-savvy. Will the Homeo Network team handle everything?",
    answer: "Yes, 100%! We provide an end-to-end done-for-you service. From domain setup, web design, Google SEO, to WhatsApp automated replies and staff training—we manage the entire tech foundation so you can focus entirely on patient care."
  },
  {
    question: "How does the Online Appointment and Telemedicine system operate?",
    answer: "Patients select an open slot from your digital calendar and receive an instant confirmation on WhatsApp with your chamber address or a private HD video link. Automated reminder SMS messages are dispatched prior to the visit to eliminate missed appointments."
  },
  {
    question: "Is patient case history and prescription data completely secure?",
    answer: "Strict medical confidentiality is our highest priority. All electronic health records (EHR) and prescriptions are protected with bank-grade 256-bit SSL encryption and HIPAA-compliant privacy standards."
  },
  {
    question: "How quickly can my clinic website and booking software be launched?",
    answer: "Standard doctor websites and booking systems go live within 7 to 10 business days. Custom institutional solutions typically take 2 to 3 weeks with personalized staff onboarding."
  },
  {
    question: "What results can I expect from Local Medical SEO and Google Maps ranking?",
    answer: "Within 60-90 days of structured healthcare SEO, your clinic will rank in Google's Top 3 Map Pack for critical search terms like 'Best Homeopathic Doctor in [Your City]'. This generates a consistent stream of direct patient calls."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="badge-pill mb-2 inline-flex">
          <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
          <span>Common Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-[Outfit] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Clear answers about doctor websites, local Google SEO, and chamber automation.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all overflow-hidden ${
                isOpen
                  ? "bg-white border-sky-300 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-hidden"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900 font-[Outfit]">
                  {faq.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform ${
                    isOpen ? "rotate-180 bg-sky-100 text-sky-700" : ""
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
