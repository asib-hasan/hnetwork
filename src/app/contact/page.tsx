import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "যোগাযোগ | ফ্রি চেম্বার স্ট্র্যাটেজি সেশন বুক করুন",
  description:
    "Homeo Network টিমের সাথে যোগাযোগ করুন। আপনার চেম্বার ডিজিটালাইজেশনের জন্য ৩০ মিনিটের ফ্রি কনসালটেশন নিন অথবা হোয়াটসঅ্যাপ হটলাইনে যুক্ত হন।",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="badge-pill mb-1 inline-flex">
            <MessageSquare className="w-3.5 h-3.5 text-blue-700" />
            <span>পরামর্শ ও সহায়তা</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            আপনার চেম্বারের ডিজিটাল রূপরেখা তৈরি করুন
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            আমাদের হেলথকেয়ার প্রযুক্তি টিমের সাথে সরাসরি কথা বলুন। আমরা আপনার চেম্বারের জন্য কাস্টম অডিট, লাইভ ডেমো ও স্বচ্ছ পরামর্শ প্রদান করি।
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                সরাসরি যোগাযোগ
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                দ্রুত সহযোগিতার জন্য আপনার সুবিধাজনক মাধ্যমে যোগাযোগ করতে পারেন:
              </p>

              <div className="space-y-3 pt-1">
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">হোয়াটসঅ্যাপ ইনস্ট্যান্ট কনসালটেশন</div>
                    <div className="text-xs text-emerald-700 font-semibold">+৮৮০ ১৭০০-০০০০০০</div>
                    <span className="text-[10px] text-slate-500">সাধারণত ৫ মিনিটে উত্তর দেওয়া হয়</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0052CC] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">সরাসরি ফোন কল</div>
                    <a href="tel:+8801700000000" className="text-xs text-[#0052CC] font-semibold hover:underline">
                      +৮৮০ ১৭০০-০০০০০০
                    </a>
                    <span className="text-[10px] text-slate-500 block">সকাল ১০:০০ - রাত ১০:০০ (প্রতিদিন)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0052CC] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">অফিসিয়াল ইমেইল</div>
                    <a href="mailto:contact@homeonetwork.com" className="text-xs text-[#0052CC] font-semibold hover:underline">
                      contact@homeonetwork.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0052CC] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">প্রধান কার্যালয়</div>
                    <span className="text-xs text-slate-600">ঢাকা, বাংলাদেশ (সারাদেশ ও প্রবাসে সেবা প্রদানকারী)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>চিকিৎসক গোপনীয়তা:</strong> আপনার চেম্বার সংক্রান্ত সকল তথ্য ও আলোচনার বিষয়বস্তু সর্বোচ্চ গোপনীয়তায় সংরক্ষিত থাকে।
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
