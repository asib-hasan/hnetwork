"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "হোমিওপ্যাথিক চিকিৎসকদের জন্য বিশেষায়িত ওয়েবসাইট ও গুগল ম্যাপস উপস্থিতি কেন অপরিহার্য?",
    answer: "হোমিওপ্যাথি চিকিৎসা গভীর বিশ্বাস, চিকিৎসকের অভিজ্ঞতা ও জটিল রোগের সফল আরোগ্যের ওপর নির্ভরশীল। বাংলাদেশে প্রতিদিন হাজার হাজার মানুষ পাইলস, কিডনি পাথর, একজিমা, হাঁপানি, অ্যালার্জি বা জটিল ক্রনিক সমস্যার স্থায়ী নিরাময়ের জন্য গুগলে সার্চ করেন। আপনার একটি ভেরিফায়েড প্রোফাইল ও গুগল ম্যাপসে শীর্ষ অবস্থান থাকলে রোগীরা কোয়াকদের খপ্পরে না পড়ে সরাসরি আপনার চেম্বারের সন্ধান পায় ও আস্থা স্থাপন করে।"
  },
  {
    question: "আমি কি বাংলাদেশ হোমিওপ্যাথি বোর্ডের নিয়ম মেনে ডিজিটাল প্রেসক্রিপশন ও সাইনবোর্ড ব্যবহার করতে পারব?",
    answer: "হ্যাঁ, শতভাগ! আমাদের প্রতিটি প্রেসক্রিপশন ও চেম্বার ব্র্যান্ডিং টেমপ্লেট বাংলাদেশ হোমিওপ্যাথি বোর্ডের নীতি ও চিকিৎসা বিজ্ঞানের মানদণ্ড বজায় রেখে প্রস্তুত করা হয়। এতে আপনার রেজিস্টার্ড ডিগ্রি (DHMS/BHMS), বোর্ড রেজিস্ট্রেশন নম্বর, চেম্বার শিডিউল এবং হোমিওপ্যাথিক পথ্য সংক্রান্ত আইনি ও পেশাদার সতর্কতা সুবিন্যস্ত থাকে।"
  },
  {
    question: "আমি প্রযুক্তিতে খুব বেশি পারদর্শী নই। ডোমেইন, ওয়েবসাইট ও এসইও কি আপনারা পরিচালনা করবেন?",
    answer: "হ্যাঁ, সম্পূর্ণ দায়িত্ব আমাদের! আমরা সম্পূর্ণ 'ডান-ফর-ইউ' (Done-for-you) সেবা প্রদান করি। ডোমেন ও ক্লাউড সার্ভার সেটআপ, কন্টেন্ট তৈরি, গুগল বিজনেস প্রোফাইল ভেরিফিকেশন, হোয়াটসঅ্যাপ বট এবং আপনার চেম্বারের সহকারীকে সফটওয়্যার ট্রেনিং দেওয়া—সবকিছু আমাদের অভিজ্ঞ টিম সম্পন্ন করে দেয়। আপনি নির্বিঘ্নে কেবল রোগীদের চিকিৎসা দেবেন।"
  },
  {
    question: "বিকাশ, নগদ ও রকেটের মাধ্যমে রোগীরা কীভাবে ভিজিট ফি পরিশোধ করবে?",
    answer: "আপনার ওয়েবসাইটে ব্যক্তিগত বিকাশ/নগদ নম্বর অথবা মার্চেন্ট কিউআর কোড সরাসরি সংযুক্ত থাকে। রোগীরা অনলাইন সিরিয়াল বুকিং বা চেম্বার ভিজিট ফি সহজেই পরিশোধ করতে পারে এবং আপনি সাথে সাথে লেনদেনের সত্যতা যাচাই করতে পারেন।"
  },
  {
    question: "রোগীরা কীভাবে হোয়াটসঅ্যাপের মাধ্যমে সহজে চেম্বার সিরিয়াল ও লোকেশন পাবে?",
    answer: "আমাদের স্বয়ংক্রিয় হোয়াটসঅ্যাপ বট রোগীর অ্যাপয়েন্টমেন্ট কনফার্ম করার পর সাথে সাথে চেম্বারের সঠিক সময়সূচি, সিরিয়াল নম্বর এবং গুগল ম্যাপস লোকেশন ডিরেকশন পাঠিয়ে দেয়। ফলে রোগীকে চেম্বারের পথ বা সিরিয়াল নিয়ে বারবার ফোন দিতে হয় না।"
  },
  {
    question: "রোগীদের পুরনো প্রেসক্রিপশন ও চেম্বারের রেকর্ড কতটা নিরাপদ থাকবে?",
    answer: "চিকিৎসাসেবায় তথ্যের গোপনীয়তা রক্ষা করা আমাদের সর্বোচ্চ অগ্রাধিকার। প্রতিটি ডিজিটাল প্রেসক্রিপশন ও রোগীর তথ্য ব্যাংক-গ্রেড ২৫৬-বিট এসএসএল এনক্রিপশনের মাধ্যমে সম্পূর্ণ নিরাপদে ক্লাউডে সংরক্ষিত থাকে, যা অন্য কারো অ্যাক্সেস করার কোনো সুযোগ নেই এবং আজীবন সুরক্ষিত থাকে।"
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
          <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
          <span>সাধারণ প্রশ্নোত্তর</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          ডাক্তার ওয়েবসাইট, লোকাল গুগল এসইও এবং ক্লিনিক অটোমেশন সম্পর্কিত যাবতীয় তথ্য।
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
                  ? "bg-white border-blue-400 shadow-2xs"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-hidden"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {faq.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform ${
                    isOpen ? "rotate-180 bg-blue-100 text-blue-800" : ""
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
