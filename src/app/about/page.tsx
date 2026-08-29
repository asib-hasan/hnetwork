import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, Cpu, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | আমাদের মিশন ও লক্ষ্য",
  description:
    "Homeo Network সম্পর্কে জানুন: হোমিওপ্যাথিক চিকিৎসকদের আধুনিক ওয়েবসাইট, গুগল এসইও এবং ক্লিনিক সফটওয়্যার দ্বারা ক্ষমতায়িত করার আমাদের লক্ষ্য।",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="badge-pill mb-1 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>আমাদের মিশন</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ক্লাসিক্যাল হোমিওপ্যাথির সাথে আধুনিক প্রযুক্তির মেলবন্ধন
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            আধুনিক ওয়েবসাইট, গুগল লোকাল এসইও এবং স্মার্ট প্র্যাকটিস ম্যানেজমেন্ট সফটওয়্যার দিয়ে হোমিওপ্যাথিক চিকিৎসকদের ক্ষমতায়ন।
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              হোমিওপ্যাথিতে সাধারণ আইটি এজেন্সি কেন কার্যকর নয়?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              প্রতিদিন লাখ লাখ মানুষ মৃদু, নিরাপদ ও স্থায়ী আরোগ্যের জন্য ক্লাসিক্যাল হোমিওপ্যাথি চিকিৎসা খোঁজেন। অথচ দীর্ঘ অভিজ্ঞতাসম্পন্ন সম্মানিত চিকিৎসকরা আধুনিক ডিজিটাল প্ল্যাটফর্মের অভাবে কেবল নির্দিষ্ট এলাকার মধ্যেই সীমাবদ্ধ থাকেন।
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              গতানুগতিক আইটি ফার্মগুলো হোমিওপ্যাথির স্বতন্ত্র কেস-টেকিং, মায়াজম, সদৃশ বিধান কিংবা দীর্ঘমেয়াদী ক্রনিক রোগীর ফলো-আপ বোঝে না। এই দূরত্ব ঘোচাতেই <strong className="text-slate-900">Homeo Network</strong> প্রতিষ্ঠিত হয়েছে।
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-blue-800">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ১০০% হোমিওপ্যাথি-কেন্দ্রিক</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> গুগল-মানের প্রকৌশল</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> চিকিৎসকের প্রযুক্তিগত চাপমুক্ত</span>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative aspect-[4/3] bg-slate-100">
            <Image
              src="/images/homeo-consultation.jpg"
              alt="হোমিওপ্যাথিক ডাক্তার কনসালটেশন"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3 text-white">
              <p className="text-xs font-bold">ডা. আর্থার ইভান্স, DHMS</p>
              <p className="text-[10px] text-slate-200">ক্লাসিক্যাল হোমিওপ্যাথিক ফিজিশিয়ান</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            আমাদের মূল মূল্যবোধ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, title: "তথ্যের সর্বোচ্চ নিরাপত্তা", desc: "রোগীদের অতীত কেস হিস্ট্রি ও প্রেসক্রিপশন ডেটা ২৫৬-বিট এনক্রিপশনে সম্পূর্ণ সুরক্ষিত।" },
            { icon: Cpu, title: "উচ্চমানের ইঞ্জিনিয়ারিং", desc: "Next.js ও দ্রুতগতির ক্লাউড সার্ভারের সমন্বয়ে যেকোনো স্মার্টফোনে চোখের পলকে লোড হয়।" },
            { icon: HeartHandshake, title: "ডাক্তার-প্রথম সহজবোধ্যতা", desc: "এমনভাবে তৈরি যেন আপনার চেম্বার সহকারী মাত্র ১৫ মিনিটে সবকিছু ব্যবহারে দক্ষ হয়ে ওঠে।" },
            { icon: Globe2, title: "সীমানাহীন প্রসার", desc: "টেলিমেডিসিনের মাধ্যমে সারা দেশ ও প্রবাসে ছড়িয়ে থাকা রোগীদের চিকিৎসা দেওয়ার সুযোগ তৈরি।" },
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
