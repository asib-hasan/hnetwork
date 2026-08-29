"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  DollarSign
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

  // Dynamic calculations for all 8 digital pillars
  const toolMultipliers: Record<string, number> = {
    "medical-website": 0.25,
    "online-appointments": 0.15,
    "medical-seo": 0.35,
    "digital-marketing": 0.45,
    "branding-identity": 0.15,
    "clinic-crm-software": 0.25,
    "social-media-management": 0.30,
    "tech-automation": 0.20,
    // Backwards compatibility keys
    website: 0.25,
    booking: 0.15,
    seo: 0.35,
    ads: 0.45,
    whatsapp: 0.20,
  };

  const totalMultiplier = selectedTools.reduce(
    (acc, curr) => acc + (toolMultipliers[curr] || 0.15),
    0
  );

  const estimatedNewPatientsPerMonth = Math.round(
    (patientsPerWeek * 4) * Math.min(totalMultiplier, 1.4)
  );

  const currentMonthlyRevenue = (patientsPerWeek * 4) * consultationFee;
  const projectedExtraMonthlyRevenue = Math.round(
    estimatedNewPatientsPerMonth * consultationFee
  );

  const hoursSavedPerWeek =
    (selectedTools.includes("tech-automation") || selectedTools.includes("whatsapp") ? 8 : 0) +
    (selectedTools.includes("online-appointments") || selectedTools.includes("booking") ? 6 : 0) +
    (selectedTools.includes("clinic-crm-software") ? 5 : 0) || 4;

  return (
    <section id="calculator" className="py-20 relative overflow-hidden">
      {/* Radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0047BA]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-pill mb-3 inline-flex">
            <Calculator className="w-4 h-4 text-[#00E5FF]" />
            <span>Interactive Clinic Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit] mb-4">
            Calculate Your Chamber&apos;s <span className="gradient-text">Digital Growth</span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            See how modern medical web engineering, Google local SEO, and automated booking expand your reach to patients seeking dedicated homeopathic care.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel (Left 7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 flex flex-col justify-between space-y-8 bg-[#091329]/80 border-[#00A3FF]/25">
            <div>
              <h3 className="text-xl font-bold text-white font-[Outfit] mb-6 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#00A3FF]/15 border border-[#00A3FF]/30 flex items-center justify-center text-[#00E5FF] text-sm">
                  1
                </span>
                Practice Metrics
              </h3>

              {/* Slider 1: Patients per week */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-[#F1F5F9] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#00A3FF]" />
                    Current Patients Per Week:
                  </label>
                  <span className="text-lg font-bold text-[#00E5FF] font-[Outfit]">
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
                  className="w-full h-2 bg-[#0E1E3D] rounded-lg appearance-none cursor-pointer accent-[#00A3FF]"
                />
                <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-mono">
                  <span>10/wk (Emerging)</span>
                  <span>75/wk (Established)</span>
                  <span>150+/wk (Busy Clinic)</span>
                </div>
              </div>

              {/* Slider 2: Consultation Fee */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-[#F1F5F9] flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#00A3FF]" />
                    Avg. Consultation & Case Fee (BDT):
                  </label>
                  <span className="text-lg font-bold text-[#00E5FF] font-[Outfit]">
                    ৳{consultationFee.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="3000"
                  step="100"
                  value={consultationFee}
                  onChange={(e) => setConsultationFee(Number(e.target.value))}
                  className="w-full h-2 bg-[#0E1E3D] rounded-lg appearance-none cursor-pointer accent-[#00A3FF]"
                />
                <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-mono">
                  <span>৳300</span>
                  <span>৳1,500</span>
                  <span>৳3,000+</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white font-[Outfit] mb-4 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#00A3FF]/15 border border-[#00A3FF]/30 flex items-center justify-center text-[#00E5FF] text-sm">
                  2
                </span>
                Desired Digital Capabilities
              </h3>

              {/* Tools Toggles - 8 Core Digital Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "medical-website", label: "Specialized Doctor Website", tag: "+25% Inquiries" },
                  { id: "online-appointments", label: "24/7 Booking & Telemedicine", tag: "No-Show Cut 75%" },
                  { id: "medical-seo", label: "Google Local & Medical SEO", tag: "+35% Inquiries" },
                  { id: "digital-marketing", label: "Targeted Patient Campaigns", tag: "+45% Inquiries" },
                  { id: "branding-identity", label: "Clinic Branding & Logo Kit", tag: "+15% Authority" },
                  { id: "clinic-crm-software", label: "Smart Clinic EHR & Case CRM", tag: "Retention +60%" },
                  { id: "social-media-management", label: "Social Media & Health Reels", tag: "+30% Reach" },
                  { id: "tech-automation", label: "WhatsApp Bot & Automation", tag: "Saves 8 hrs/wk" },
                ].map((tool) => {
                  const isChecked = selectedTools.includes(tool.id);
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => toggleTool(tool.id)}
                      className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isChecked
                          ? "bg-[#0047BA]/20 border-[#00A3FF] text-white shadow-[0_0_15px_rgba(0,163,255,0.15)]"
                          : "bg-[#070E20]/60 border-[#00A3FF]/15 text-[#94A3B8] hover:border-[#00A3FF]/30"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center text-xs ${
                            isChecked
                              ? "bg-[#00A3FF] border-[#00A3FF] text-white"
                              : "border-[#64748B]"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs font-semibold">{tool.label}</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00A3FF]/15 text-[#38BDF8] font-mono">
                        {tool.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-[12px] text-[#64748B] italic pt-4 border-t border-[#00A3FF]/15">
              * Calculations based on verified average metrics from over 250+ digitized healthcare clinics and medical practices.
            </div>
          </div>

          {/* Results Display Panel (Right 5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl p-8 bg-gradient-to-b from-[#0E2046] to-[#081229] border border-[#00A3FF]/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#00A3FF]/20 pb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#38BDF8]">
                  Projected Monthly Impact
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-[#00E5FF]">
                  <Sparkles className="w-3.5 h-3.5" /> High ROI Potential
                </span>
              </div>

              {/* Metric 1 */}
              <div className="p-4 rounded-xl bg-[#060D1E]/80 border border-[#00A3FF]/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">Est. New Chronic Patients</span>
                  <TrendingUp className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white font-[Outfit]">
                    +{estimatedNewPatientsPerMonth}
                  </span>
                  <span className="text-xs text-[#00E5FF] font-medium">
                    patients / month
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Qualified patients searching specifically for homeopathy
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-4 rounded-xl bg-[#060D1E]/80 border border-[#00A3FF]/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">Est. Additional Clinic Revenue</span>
                  <DollarSign className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#38BDF8] font-[Outfit]">
                    +৳{projectedExtraMonthlyRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#94A3B8] font-medium">
                    / month extra
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Current: ৳{currentMonthlyRevenue.toLocaleString()} → Est. Total: ৳{(currentMonthlyRevenue + projectedExtraMonthlyRevenue).toLocaleString()}
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-4 rounded-xl bg-[#060D1E]/80 border border-[#00A3FF]/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">Assistant & Admin Time Saved</span>
                  <Clock className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white font-[Outfit]">
                    ~{hoursSavedPerWeek} hrs
                  </span>
                  <span className="text-xs text-[#00E5FF] font-medium">
                    saved / week
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Via 24/7 WhatsApp automation and digital appointment booking
                </p>
              </div>

            </div>

            {/* CTA action */}
            <div className="pt-6 mt-6 border-t border-[#00A3FF]/20">
              <Link
                href={`/contact?source=calculator&patients=${patientsPerWeek}&tools=${selectedTools.join(",")}`}
                className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(0,163,255,0.4)]"
              >
                <span>Deploy This Digital Growth Plan</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-center text-[11px] text-[#64748B] mt-2">
                Free 30-minute clinic digital transformation consultation
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
