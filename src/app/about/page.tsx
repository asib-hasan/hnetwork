import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, Cpu, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | আমাদের মিশন ও লক্ষ্য",
  description:
    "Homeo Network সম্পর্কে জানুন: বাংলাদেশের হোমিওপ্যাথিক চিকিৎসকদের আধুনিক ওয়েবসাইট, গুগল এসইও এবং ক্লিনিক সফটওয়্যার দ্বারা ক্ষমতায়িত করার আমাদের লক্ষ্য।",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="badge-pill mb-1 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>আমাদের মিশন ও অঙ্গীকার</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ডিগ্রিধারী হোমিওপ্যাথিক চিকিৎসকদের ডিজিটাল রূপান্তর
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            বাংলাদেশ হোমিওপ্যাথি বোর্ড নিবন্ধিত ও বিএইচএমএস চিকিৎসকদের আধুনিক ওয়েবসাইট, গুগল লোকাল এসইও এবং ক্লিনিক ম্যানেজমেন্ট সফটওয়্যার দিয়ে দেশব্যাপী ক্ষমতায়ন।
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              বাংলাদেশে সাধারণ আইটি এজেন্সি কেন চিকিৎসকদের প্রয়োজন বোঝে না?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              বাংলাদেশে প্রতিদিন লাখ লাখ মানুষ পাইলস, কিডনি পাথর, একজিমা, হাঁপানি, ক্রনিক গ্যাস্ট্রিক কিংবা মহিলাদের হরমোনজনিত জটিলতার স্থায়ী সমাধানে অভিজ্ঞ ডিগ্রিধারী (DHMS ও BHMS) হোমিওপ্যাথিক চিকিৎসকের সন্ধান করেন।
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              অথচ গতানুগতিক আইটি ফার্মগুলো চিকিৎসকদের বাস্তব চেম্বারের চ্যালেঞ্জ বোঝে না। তারা জানে না কীভাবে ডিগ্রিধারী চিকিৎসকের প্রাতিষ্ঠানিক মর্যাদা ও বোর্ড রেজিস্ট্রেশন সঠিকভাবে তুলে ধরতে হয়, কীভাবে গুগল ম্যাপসে স্থানীয় নতুন রোগীদের দৃষ্টি আকর্ষণ করতে হয়, কিংবা চেম্বারে ডিজিটাল প্রেসক্রিপশন ও বিলিং কতটা দ্রুত ও সহজে সম্পন্ন করা দরকার। এই দূরত্ব ঘুচিয়ে বাংলাদেশি রেজিস্টার্ড চিকিৎসকদের পেশাদার মর্যাদা ও চেম্বারে রোগী সংখ্যা বাড়াতেই <strong className="text-slate-900">Homeo Network</strong> প্রতিষ্ঠিত হয়েছে।
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-blue-800">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ১০০% হোমিওপ্যাথি-কেন্দ্রিক আর্কিটেকচার</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> গুগল ম্যাপসে থানা ও জেলাভিত্তিক শীর্ষ অবস্থান</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> বিকাশ ও নগদ কিউআর পেমেন্ট সমন্বিত</span>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative aspect-[4/3] bg-slate-100">
            <Image
              src="/images/male-doctor-consultation.jpg"
              alt="বাংলাদেশি ডিগ্রিধারী হোমিওপ্যাথিক কনসালটেন্টের রোগী পর্যবেক্ষণ"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3 text-white">
              <p className="text-xs font-bold">ডা. মো. আব্দুর রহিম, BHMS</p>
              <p className="text-[10px] text-slate-200">সরকারি হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতাল (প্রাক্তন)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            আমাদের মূল অঙ্গীকার ও ভিত্তি
          </h2>
          <p className="text-xs text-slate-600">
            চিকিৎসকের সময়ের মূল্যায়ন ও রোগীদের আস্থা সুদৃঢ় করাই আমাদের অগ্রাধিকার।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, title: "তথ্যের সর্বোচ্চ নিরাপত্তা", desc: "রোগীদের ডিজিটাল প্রেসক্রিপশন ও ক্লিনিক ডেটা ২৫৬-বিট এনক্রিপশনে সম্পূর্ণ সুরক্ষিত।" },
            { icon: Cpu, title: "উচ্চমানের ইঞ্জিনিয়ারিং", desc: "Next.js ও দ্রুতগতির ক্লাউড সার্ভারের সমন্বয়ে যেকোনো স্মার্টফোনে চোখের পলকে লোড হয়।" },
            { icon: HeartHandshake, title: "সহজ বাংলা ইন্টারফেস", desc: "এমনভাবে তৈরি যেন আপনার চেম্বার সহকারী বা কম্পাউন্ডার মাত্র ১৫ মিনিটে ব্যবহারে দক্ষ হয়ে ওঠে।" },
            { icon: Globe2, title: "দেশব্যাপী প্রসার", desc: "ডিজিটাল উপস্থিতি ও জাতীয় ডিরেক্টরির মাধ্যমে দেশের ৬৪ জেলার রোগীদের কাছে পৌঁছানোর সুযোগ।" },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
