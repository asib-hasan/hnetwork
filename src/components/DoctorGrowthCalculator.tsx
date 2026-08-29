"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock
} from "lucide-react";

export default function DoctorGrowthCalculator() {
  const [patientsPerWeek, setPatientsPerWeek] = useState<number>(35);
  const [consultationFee, setConsultationFee] = useState<number>(800);
  const [selectedTools, setSelectedTools] = useState<string[]>([
    "medical-website",
    "medical-seo",
    "tech-automation"
  ]);

  const toggleTool = (tool: string) => {
    if (selectedTools.includes(tool)) {
      if (selectedTools.length > 1) {
        setSelectedTools(selectedTools.filter((t) => t !== tool));
      }
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const toolMultipliers: Record<string, number> = {
    "medical-website": 0.25,
    "online-appointments": 0.15,
    "medical-seo": 0.35,
    "digital-marketing": 0.45,
    "branding-identity": 0.15,
    "clinic-crm-software": 0.25,
    "social-media-management": 0.30,
    "tech-automation": 0.20,
  };

  const totalMultiplier = selectedTools.reduce(
    (acc, curr) => acc + (toolMultipliers[curr] || 0.15),
    0
  );

  const estimatedNewPatientsPerMonth = Math.round(
    (patientsPerWeek * 4) * Math.min(totalMultiplier, 1.4)
  );

  const projectedExtraMonthlyRevenue = Math.round(
    estimatedNewPatientsPerMonth * consultationFee
  );

  const hoursSavedPerWeek =
    (selectedTools.includes("tech-automation") ? 8 : 0) +
    (selectedTools.includes("online-appointments") ? 6 : 0) +
    (selectedTools.includes("clinic-crm-software") ? 5 : 0) || 4;

  return (
    <section id="calculator" className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="badge-pill mb-2 inline-flex">
          <Calculator className="w-3.5 h-3.5 text-blue-700" />
          <span>ইন্টারেক্টিভ গ্রোথ ক্যালকুলেটর</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          আপনার চেম্বারের সম্ভাব্য প্রসার হিসাব করুন
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          হোমিওপ্যাথিক ওয়েবসাইট, লোকাল গুগল এসইও এবং অটোমেশন আপনার রোগী প্রবাহ কতটা বাড়াতে পারে তা দেখুন।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Controls (Left 7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-2xs">
          <div className="space-y-5">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#0052CC]" />
                  বর্তমানে প্রতি সপ্তাহে রোগী সংখ্যা:
                </label>
                <span className="text-sm font-bold text-[#0052CC]">
                  {patientsPerWeek} জন রোগী
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={patientsPerWeek}
                onChange={(e) => setPatientsPerWeek(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>১০ জন/সপ্তাহ</span>
                <span>৭৫ জন/সপ্তাহ</span>
                <span>১৫০+ জন/সপ্তাহ</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="font-bold text-[#0052CC]">৳</span>
                  গড় কনসালটেশন বা ভিজিট ফি (টাকা):
                </label>
                <span className="text-sm font-bold text-[#0052CC]">
                  ৳ {consultationFee.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="3000"
                step="100"
                value={consultationFee}
                onChange={(e) => setConsultationFee(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>৳ ৩০০</span>
                <span>৳ ১,৫০০</span>
                <span>৳ ৩,০০০+</span>
              </div>
            </div>

            {/* Capabilities Toggles */}
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">
                প্রয়োজনীয় ডিজিটাল সমাধান নির্বাচন করুন:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "medical-website", label: "ডাক্তার ওয়েবসাইট", tag: "+২৫% রোগী" },
                  { id: "online-appointments", label: "২৪/৭ বুকিং ও টেলিমেডিসিন", tag: "নো-শো ৭৫% হ্রাস" },
                  { id: "medical-seo", label: "গুগল লোকাল ও মেডিকেল এসইও", tag: "+৩৫% রিচ" },
                  { id: "digital-marketing", label: "টার্গেটেড ক্রনিক পেশেন্ট অ্যাড", tag: "+৪৫% নতুন কেস" },
                  { id: "branding-identity", label: "প্রেসক্রিপশন ও ব্র্যান্ডিং কিট", tag: "+১৫% বিশ্বাস" },
                  { id: "clinic-crm-software", label: "হোমিও কেস সিআরএম ও হিস্ট্রি", tag: "+৬০% রিটেনশন" },
                  { id: "social-media-management", label: "সোশ্যাল মিডিয়া ও রিলস", tag: "+৩০% পরিচিতি" },
                  { id: "tech-automation", label: "হোয়াটসঅ্যাপ ডায়েট অটোমেশন", tag: "৮ ঘণ্টা/সপ্তাহ সেভ" },
                ].map((tool) => {
                  const isChecked = selectedTools.includes(tool.id);
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => toggleTool(tool.id)}
                      className={`p-2 rounded-lg text-left border transition-all flex items-center justify-between text-xs ${
                        isChecked
                          ? "bg-blue-50 border-[#0052CC] text-[#0052CC] font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[10px] ${
                            isChecked ? "bg-[#0052CC] border-[#0052CC] text-white" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span className="truncate">{tool.label}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-[#0052CC] border border-slate-200 shrink-0">
                        {tool.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 italic pt-2 border-t border-slate-100">
            * ২৫০+ সফলভাবে ডিজিটাইজড হওয়া হোমিওপ্যাথিক চেম্বারের বাস্তব পরিসংখ্যানের ওপর ভিত্তি করে প্রাক্কলিত।
          </div>
        </div>

        {/* Results Panel (Right 5 cols) */}
        <div className="lg:col-span-5 rounded-xl p-5 sm:p-6 bg-slate-900 text-white flex flex-col justify-between space-y-4 shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
                মাসিক সম্ভাব্য প্রবৃদ্ধি
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> উচ্চ ফলাফল
              </span>
            </div>

            {/* Metric 1 */}
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>সম্ভাব্য নতুন রোগী</span>
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-white">
                  +{estimatedNewPatientsPerMonth}
                </span>
                <span className="text-xs text-blue-300">জন রোগী / প্রতি মাসে</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>সম্ভাব্য অতিরিক্ত চেম্বার আয়</span>
                <span className="text-emerald-400 font-bold">৳</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-emerald-400">
                  +৳ {projectExtraMonthlyRevenue(projectedExtraMonthlyRevenue)}
                </span>
                <span className="text-xs text-slate-400">/ প্রতি মাসে</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>চেম্বারের সময় সাশ্রয়</span>
                <Clock className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-white">
                  ~{hoursSavedPerWeek} ঘণ্টা
                </span>
                <span className="text-xs text-blue-300">/ প্রতি সপ্তাহে সাশ্রয়</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <Link
              href={`/contact?tools=${selectedTools.join(",")}&patients=${patientsPerWeek}`}
              className="btn-primary w-full py-2.5 text-xs font-semibold justify-center flex items-center gap-1.5"
            >
              <span>এই হিসাব অনুযায়ী রোডম্যাপ গ্রহণ করুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

function projectExtraMonthlyRevenue(val: number) {
  return val.toLocaleString("en-US");
}
