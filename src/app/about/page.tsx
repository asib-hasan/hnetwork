import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Sparkles, Target, HeartHandshake, CheckCircle2, Cpu, ArrowRight, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Our Mission & Digital Vision",
  description:
    "Learn about Homeo Network: our mission, values, and engineering standards built specifically to modernize and empower homeopathic doctors.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="badge-pill mb-1 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Our Mission</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-[Outfit]">
            Bridging Classical Homeopathy with Modern Engineering
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Empowering homeopathic doctors with modern websites, Google SEO, and smart practice management software.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-[Outfit]">
              Why Generic IT Agencies Fail Homeopathic Doctors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every day, millions of individuals search Google for gentle, permanent healing through classical homeopathy. Yet, respected practitioners with decades of clinical excellence remain confined to their local neighborhood because they lack modern digital tools.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standard IT agencies don&apos;t understand homeopathic case-taking, miasms, the law of similars, or long-term chronic patient management. <strong className="text-slate-900">Homeo Network</strong> was founded to bridge this exact divide.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-sky-700">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Homeopathy-Focused</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Google-Grade Engineering</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Zero Tech Burden</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="w-16 h-16 rounded-xl p-2 bg-white border border-slate-200 flex items-center justify-center">
              <Image src="/logo.png" alt="Homeo Network" width={50} height={50} className="object-contain" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 font-[Outfit]">Homeo Network</h3>
            <p className="text-[11px] text-slate-500">Connecting classical practice with modern technology.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-[Outfit] mb-2">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, title: "Medical Privacy", desc: "Patient case histories and prescriptions are strictly protected with 256-bit encryption." },
            { icon: Cpu, title: "Engineering Quality", desc: "Built with Next.js and high-speed cloud infrastructure for instant smartphone loading." },
            { icon: HeartHandshake, title: "Doctor-First Simplicity", desc: "Intuitive systems designed so your chamber assistant can master them in 15 minutes." },
            { icon: Globe2, title: "Global Reach", desc: "Enabling doctors to consult patients across districts and overseas via secure telemedicine." },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-[Outfit]">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
