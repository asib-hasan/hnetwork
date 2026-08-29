"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "হোমিওপ্যাথিক চিকিৎসকের জন্য একটি বিশেষায়িত ওয়েবসাইট ও গুগল উপস্থিতি কেন জরুরি?",
    answer: "হোমিওপ্যাথি চিকিৎসা গভীর বিশ্বাস, বিস্তারিত কেস হিস্ট্রি ও জটিল রোগের সফল সমাধানের ওপর নির্ভরশীল। প্রতিদিন হাজার হাজার মানুষ চর্মরোগ, অ্যালার্জি, অ্যাজমা বা জটিল ক্রনিক সমস্যার স্থায়ী নিরাময়ের জন্য গুগলে সার্চ করেন। একটি বিশেষায়িত ওয়েবসাইট ও গুগল ম্যাপস প্রোফাইল থাকলে তারা সরাসরি আপনার চেম্বারের সন্ধান পায় ও আস্থা স্থাপন করে।"
  },
  {
    question: "আমি প্রযুক্তিতে খুব বেশি পারদর্শী নই। হোমিও নেটওয়ার্ক টিম কি সব পরিচালনা করবে?",
    answer: "হ্যাঁ, শতভাগ! আমরা সম্পূর্ণ 'ডান-ফর-ইউ' (Done-for-you) সেবা দিয়ে থাকি। ডোমেইন, ওয়েবসাইট ডিজাইন, গুগল এসইও থেকে শুরু করে হোয়াটসঅ্যাপ অটোমেশন ও চেম্বার সহকারীকে ট্রেনিং দেওয়া—সবকিছু আমাদের টিম সম্পন্ন করে। ফলে আপনি কোনো প্রযুক্তিগত ঝামেলা ছাড়াই শুধু রোগীদের চিকিৎসা দিতে পারেন।"
  },
  {
    question: "অনলাইন অ্যাপয়েন্টমেন্ট ও দূরবর্তী রোগীদের টেলিমেডিসিন কীভাবে কাজ করে?",
    answer: "রোগীরা আপনার ডিজিটাল ক্যালেন্ডার থেকে নিজের সুবিধাজনক সময় বেছে নিয়ে সিরিয়াল দেয়। বুকিং নিশ্চিত হওয়ামাত্রই রোগীর হোয়াটসঅ্যাপে স্বয়ংক্রিয়ভাবে চেম্বারের লোকেশন বা ভিডিও কনসালটেশনের লিঙ্ক পৌঁছে যায়। একই সাথে অ্যাপয়েন্টমেন্টের আগের দিন রিমাইন্ডার এসএমএস পাঠানো হয়।"
  },
  {
    question: "রোগীদের পুরনো কেস হিস্ট্রি ও প্রেসক্রিপশন ডেটা কতটা নিরাপদ থাকবে?",
    answer: "চিকিৎসাসেবায় রোগীর গোপনীয়তা রক্ষা করা আমাদের সর্বোচ্চ অগ্রাধিকার। প্রতিটি কেস রেকর্ড ও প্রেসক্রিপশন ব্যাংক-গ্রেড ২৫৬-বিট এসএসএল এনক্রিপশনের মাধ্যমে সম্পূর্ণ নিরাপদে সংরক্ষিত থাকে, যা অন্য কারো অ্যাক্সেস করার সুযোগ নেই।"
  },
  {
    question: "কত দিনের মধ্যে আমার চেম্বার ওয়েবসাইট ও বুকিং সিস্টেম প্রস্তুত হবে?",
    answer: "সাধারণত চুক্তি চূড়ান্ত হওয়ার ৭ থেকে ১০ কার্যদিবসের মধ্যে আপনার লাইভ ডাক্তার ওয়েবসাইট ও বুকিং সিস্টেম চালু হয়ে যায়। মাল্টি-ডাক্তার ক্লিনিক সফটওয়্যার ও কাস্টম সমাধানের ক্ষেত্রে প্রায় ২ থেকে ৩ সপ্তাহ সময় প্রয়োজন হয়।"
  },
  {
    question: "গুগল ম্যাপস ও লোকাল এসইও থেকে আমি কেমন ফল আশা করতে পারি?",
    answer: "নিয়মতান্ত্রিক মেডিকেল এসইওর মাধ্যমে ৬০ থেকে ৯০ দিনের মধ্যে আপনার এলাকায় 'Best Homeopathic Doctor in [Your City]' জাতীয় হাই-ইনটেন্ট সার্চে আপনার চেম্বার গুগল ম্যাপসের শীর্ষ ৩টি রেজাল্টের মধ্যে স্থান করে নেয়। এর ফলে গুগল থেকে নিয়মিত নতুন রোগীর ফোন ও ভিজিট নিশ্চিত হয়।"
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
