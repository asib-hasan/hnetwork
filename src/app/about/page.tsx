import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Sparkles, 
  Target, 
  HeartHandshake, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  Stethoscope,
  Globe2
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Our Mission & Digital Vision",
  description:
    "Learn about Homeo Network: our mission, values, and engineering standards built specifically to modernize and empower homeopathic doctors and medical centers.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="badge-pill mb-2 inline-flex">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span>Dedicated Healthcare Mission</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-[Outfit]">
            Bridging Classical Homeopathy with{" "}
            <span className="gradient-text">21st-Century Engineering</span>
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            We are on a mission to ensure no deserving homeopathic doctor remains invisible in the digital era.
          </p>

          <div className="p-3.5 rounded-2xl bg-[#09152E]/70 border border-[#00A3FF]/20 max-w-2xl mx-auto text-xs sm:text-sm text-[#38BDF8] font-medium">
            হোমিওপ্যাথিক চিকিৎসা ব্যবস্থার মর্যাদা, গভীরতা ও বিজ্ঞানসম্মত সেবাকে সর্বাধুনিক প্রযুক্তির মাধ্যমে বিশ্বব্যাপী মানুষের কাছে পৌঁছে দেওয়াই আমাদের লক্ষ্য।
          </div>
        </div>
      </section>

      {/* 2. THE STORY / PURPOSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border-[#00A3FF]/25 bg-[#09142C]/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="badge-pill inline-flex">
              <Stethoscope className="w-4 h-4 text-[#00E5FF]" />
              <span>The Origin of Homeo Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-[Outfit]">
              Why Generic IT Agencies Fail Homeopathic Doctors
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              Every day, millions of individuals battle debilitating chronic conditions—severe eczema, chronic asthma, migraine, autoimmune disorders, and digestive troubles. Many desperately search Google for gentle, holistic, and permanent cures through Classical Homeopathy.
            </p>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              Yet, respected homeopathic practitioners with decades of clinical excellence remain confined to their local neighborhoods simply because they lack dedicated digital tools. Standard IT agencies don&apos;t understand case-taking, miasms, the law of similars, or the sensitive doctor-patient relationship in chronic care.
            </p>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              <strong className="text-white">Homeo Network</strong> was founded to bridge this exact divide. We provide modern medical websites, Google Maps ranking systems, and chamber automation built strictly around homeopathic clinical reality.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5FF]">
                <CheckCircle2 className="w-4 h-4" /> 100% Homeopathy-Focused
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5FF]">
                <CheckCircle2 className="w-4 h-4" /> Google-Grade Engineering
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5FF]">
                <CheckCircle2 className="w-4 h-4" /> Zero Tech Burden for Doctors
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#060D1E] border border-[#00A3FF]/30 space-y-6 text-center">
            <div className="w-28 h-28 rounded-2xl p-3 bg-[#0A1630] border-2 border-[#00A3FF]/50 flex items-center justify-center shadow-[0_0_35px_rgba(0,163,255,0.3)]">
              <Image
                src="/logo.png"
                alt="Homeo Network Emblem"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-[Outfit]">The HN Connected Network</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Symbolizing interconnected clinics, research databases, automated patient channels, and classical healing united by advanced technology.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR FOUR CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-pill mb-3 inline-flex">
            <Target className="w-4 h-4 text-[#00E5FF]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit]">
            Our Core <span className="gradient-text">Values & Philosophy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Medical Privacy & Ethics",
              bengali: "চিকিৎসা নৈতিকতা ও তথ্যের গোপনীয়তা",
              desc: "Patient case histories and prescriptions are strictly protected with 256-bit encryption. We never sell, monetize, or expose patient data.",
            },
            {
              icon: Cpu,
              title: "Engineering Excellence",
              bengali: "গুগল লেভেল ইঞ্জিনিয়ারিং ও গতি",
              desc: "Built with Next.js, headless cloud infrastructure, and 98+ Google PageSpeed benchmarks to ensure instant loading on any smartphone.",
            },
            {
              icon: HeartHandshake,
              title: "Doctor-First Simplicity",
              bengali: "ডাক্তারদের জন্য সহজ ও ঝামেলামুক্ত",
              desc: "Doctors shouldn't have to become web developers. We design interfaces so intuitive that your assistant can master them in 15 minutes.",
            },
            {
              icon: Globe2,
              title: "Global Reach for Homeopathy",
              bengali: "হোমিওপ্যাথিকে বিশ্বমঞ্চে তুলে ধরা",
              desc: "Enabling doctors to consult patients across borders via secure telemedicine, automated prescriptions, and online courier updates.",
            },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border-[#00A3FF]/20 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0047BA]/20 border border-[#00A3FF]/30 flex items-center justify-center text-[#00E5FF]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-[Outfit]">
                  {val.title}
                </h3>
                <p className="text-xs font-semibold text-[#00A3FF]">
                  {val.bengali}
                </p>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 text-center rounded-3xl border-[#00A3FF]/30 space-y-6 bg-gradient-to-b from-[#0B1A3A] to-[#060D1E]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-[Outfit]">
            Join the Network of Forward-Thinking Homeopaths
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl mx-auto">
            Let us handle your technological growth while you focus on patient diagnosis, repertorization, and classical healing.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary py-3.5 px-8 text-sm font-bold flex items-center gap-2"
            >
              <span>Schedule Free Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary py-3.5 px-8 text-sm font-medium"
            >
              Review Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
