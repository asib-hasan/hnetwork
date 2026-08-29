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
  DollarSign,
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
          <Calculator className="w-3.5 h-3.5 text-sky-600" />
          <span>Interactive Estimator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-[Outfit] mb-2">
          Calculate Your Chamber&apos;s Growth
        </h2>
        <p className="text-xs sm:text-sm text-slate-600">
          See how medical web engineering and local SEO expand your patient reach.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Controls (Left 7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-5">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-sky-600" />
                  Current Patients Per Week:
                </label>
                <span className="text-sm font-bold text-sky-700 font-[Outfit]">
                  {patientsPerWeek} patients
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={patientsPerWeek}
                onChange={(e) => setPatientsPerWeek(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>10/wk</span>
                <span>75/wk</span>
                <span>150+/wk</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-sky-600" />
                  Avg. Consultation Fee (BDT):
                </label>
                <span className="text-sm font-bold text-sky-700 font-[Outfit]">
                  BDT {consultationFee.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="3000"
                step="100"
                value={consultationFee}
                onChange={(e) => setConsultationFee(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>BDT 300</span>
                <span>BDT 1,500</span>
                <span>BDT 3,000+</span>
              </div>
            </div>

            {/* Capabilities Toggles */}
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">
                Select Desired Digital Capabilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "medical-website", label: "Doctor Website", tag: "+25%" },
                  { id: "online-appointments", label: "24/7 Booking & Telemed", tag: "-75% No-Show" },
                  { id: "medical-seo", label: "Google Local & Medical SEO", tag: "+35%" },
                  { id: "digital-marketing", label: "Targeted Patient Ads", tag: "+45%" },
                  { id: "branding-identity", label: "Clinic Branding Kit", tag: "+15%" },
                  { id: "clinic-crm-software", label: "Clinic EHR & Case CRM", tag: "Retention +60%" },
                  { id: "social-media-management", label: "Social Media & Reels", tag: "+30%" },
                  { id: "tech-automation", label: "WhatsApp Automation", tag: "Saves 8h/wk" },
                ].map((tool) => {
                  const isChecked = selectedTools.includes(tool.id);
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => toggleTool(tool.id)}
                      className={`p-2 rounded-lg text-left border transition-all flex items-center justify-between text-xs ${
                        isChecked
                          ? "bg-sky-50 border-sky-500 text-sky-900 font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[10px] ${
                            isChecked ? "bg-sky-600 border-sky-600 text-white" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span>{tool.label}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-white text-sky-700 border border-slate-200">
                        {tool.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 italic pt-2 border-t border-slate-100">
            * Estimated metrics based on verified averages from 250+ digitized clinics.
          </div>
        </div>

        {/* Results Panel (Right 5 cols) */}
        <div className="lg:col-span-5 rounded-xl p-5 sm:p-6 bg-slate-900 text-white flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-sky-400">
                Projected Monthly Growth
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> High ROI
              </span>
            </div>

            {/* Metric 1 */}
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Est. New Patients</span>
                <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-white font-[Outfit]">
                  +{estimatedNewPatientsPerMonth}
                </span>
                <span className="text-xs text-sky-400">patients / month</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Est. Additional Revenue</span>
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-emerald-400 font-[Outfit]">
                  +BDT {projectedExtraMonthlyRevenue.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Staff Time Saved</span>
                <Clock className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-white font-[Outfit]">
                  ~{hoursSavedPerWeek} Hours
                </span>
                <span className="text-xs text-sky-400">/ week saved</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <Link
              href={`/contact?tools=${selectedTools.join(",")}&patients=${patientsPerWeek}`}
              className="btn-primary w-full py-2.5 text-xs font-semibold justify-center flex items-center gap-1.5"
            >
              <span>Get Custom Roadmap for this Estimation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
