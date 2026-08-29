import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle,
  Star,
  Activity,
  Cpu,
  Award,
  Users,
  Zap,
  BarChart3
} from "lucide-react";
import { servicesList } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import DoctorGrowthCalculator from "@/components/DoctorGrowthCalculator";
import FAQSection from "@/components/FAQSection";
import InteractiveClinicDemo from "@/components/InteractiveClinicDemo";
import PricingPackages from "@/components/PricingPackages";

export default function HomePage() {
  return (
    <div className="pb-16">
      
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Radial hero glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,71,186,0.25),transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Platform for Classical Homeopaths</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white font-[Outfit] leading-[1.1] max-w-3xl">
              Modern Digital Infrastructure for{" "}
              <span className="gradient-text">Homeopathic Doctors</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              High-performance doctor websites, 24/7 automated appointments, Google Maps #1 SEO, and intelligent clinic software — built exclusively for homeopathic practitioners.
            </p>

            {/* Bengali line — subtle, no box */}
            <p className="text-sm text-sky-400/70 max-w-xl">
              হোমিওপ্যাথিক ডাক্তারদের জন্য ডেডিকেটেড ওয়েবসাইট, অ্যাপয়েন্টমেন্ট, এসইও ও স্মার্ট সফটওয়্যার সমাধান।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="btn-primary py-3.5 px-8 text-sm font-bold flex items-center gap-2.5 group"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="btn-secondary py-3.5 px-8 text-sm font-medium flex items-center gap-2.5"
              >
                <Cpu className="w-4 h-4 text-sky-400" />
                <span>Explore All Services</span>
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" /> HIPAA Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-slate-500" /> 99.9% Uptime
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-slate-500" /> Built for Homeopathy
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="relative -mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0A1628] border border-slate-800 shadow-2xl shadow-black/40 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
          
          <div className="p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-4 h-4 text-sky-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-[Outfit]">
              500<span className="text-sky-500">+</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">
              Doctors Digitized
            </div>
          </div>

          <div className="p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-sky-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-[Outfit]">
              85K<span className="text-sky-500">+</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">
              Appointments Processed
            </div>
          </div>

          <div className="p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-[Outfit]">
              98.2<span className="text-emerald-500">%</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">
              PageSpeed Score
            </div>
          </div>

          <div className="p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-violet-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-[Outfit]">
              3.8<span className="text-violet-500">x</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">
              Revenue Growth
            </div>
          </div>

        </div>
      </section>

      {/* ===== 2. INTERACTIVE CLINIC DEMO ===== */}
      <section id="demo" className="mt-28 sm:mt-36 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge-pill mb-4 inline-flex">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span>Interactive Clinic Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit] mb-4">
            Test Drive Your Future{" "}
            <span className="gradient-text">Digital Practice</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Experience how patients book 24/7, case records are stored in the cloud, and WhatsApp alerts streamline your chamber.
          </p>
        </div>

        <InteractiveClinicDemo />
      </section>

      {/* ===== 3. SERVICES GRID ===== */}
      <section className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-pill mb-4 inline-flex">
            <Cpu className="w-4 h-4 text-[#00E5FF]" />
            <span>Digital Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit] mb-4">
            8 Core Pillars for{" "}
            <span className="gradient-text">Homeopathic Excellence</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything your practice needs to dominate search, automate bookings, and build a lasting reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {servicesList.map((service, index) => (
            <ServiceCard key={service.id} service={service} featured={index === 0 || index === 1} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-secondary py-3 px-8 text-sm inline-flex items-center gap-2"
          >
            <span>Compare Detailed Deliverables & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== 4. COMPARISON MATRIX ===== */}
      <section className="mt-28 sm:mt-36 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-pill mb-4 inline-flex">
            <Activity className="w-4 h-4 text-[#00E5FF]" />
            <span>The Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit]">
            Why Homeopaths Are{" "}
            <span className="gradient-text">Switching to Us</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0A1628]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Left: Traditional */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-[Outfit]">Traditional Chamber</h3>
                  <span className="text-[11px] text-slate-500">Manual & local-only</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  <span>Paper case records that take minutes to locate and risk damage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  <span>Phone calls interrupting consultations throughout the day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  <span>Zero Google visibility for chronic treatment searches.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  <span>30%+ no-show rate — patients forget appointments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  <span>Can&apos;t treat patients outside your immediate neighborhood.</span>
                </li>
              </ul>
            </div>

            {/* Right: Digitally Powered */}
            <div className="p-6 sm:p-10 space-y-6 bg-sky-950/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-[Outfit]">With Homeo Network</h3>
                  <span className="text-[11px] text-emerald-400">Automated & global</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>2-second cloud retrieval of complete symptom histories & repertory notes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>24/7 automated booking with WhatsApp confirmation & reminders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Rank #1 on Google Search and Maps for high-intent medical queries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>No-shows below 5% with automated calendar reminders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Telemedicine video consultations serving patients worldwide.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 5. GROWTH CALCULATOR ===== */}
      <div className="mt-28 sm:mt-36">
        <DoctorGrowthCalculator />
      </div>

      {/* ===== 6. TESTIMONIALS ===== */}
      <section className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-pill mb-4 inline-flex">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Doctor Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[Outfit] mb-4">
            Trusted by Respected{" "}
            <span className="gradient-text">Homeopathic Practitioners</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hear from doctors whose clinics experienced unprecedented growth and operational peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Testimonial 1 */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0A1628] border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                &ldquo;Before Homeo Network, my assistant spent hours answering repetitive phone calls. Today, 80% of my appointments happen automatically through our website, and we rank #1 on Google for chronic allergy treatment in Dhanmondi.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-900 flex items-center justify-center font-bold text-sky-300 text-sm">
                DT
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-[Outfit]">Dr. Tariqul Islam</h4>
                <p className="text-xs text-slate-500">DHMS, Classical Homeopath (Dhaka)</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 — Featured */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0A1628] border border-sky-500/30 flex flex-col justify-between space-y-6 shadow-[0_0_40px_rgba(0,163,255,0.08)]">
            <div className="space-y-4">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                &ldquo;The telemedicine integration opened up patients across Chittagong, Sylhet, and even expatriate families in the UK and Middle East. Their understanding of homeopathic workflows is unmatched by generic IT agencies.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center font-bold text-white text-sm">
                SJ
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-[Outfit]">Dr. Sabrina Jahan</h4>
                <p className="text-xs text-slate-500">Specialist in Female Chronic Health</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0A1628] border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                &ldquo;Their branding work and clinic CRM transformed our 20-year-old chamber into a prestigious, modern healthcare center. Patient retention jumped 60% with automated follow-up reminders.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-900 flex items-center justify-center font-bold text-sky-300 text-sm">
                MK
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-[Outfit]">Dr. M. A. Karim</h4>
                <p className="text-xs text-slate-500">Senior Consultant Homeopath</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 7. PRICING ===== */}
      <div className="mt-28 sm:mt-36">
        <PricingPackages />
      </div>

      {/* ===== 8. FAQ ===== */}
      <div className="mt-28 sm:mt-36">
        <FAQSection />
      </div>

      {/* ===== 9. FINAL CTA ===== */}
      <section className="mt-28 sm:mt-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-16 bg-gradient-to-br from-[#003893] via-[#0047BA] to-[#0084FF] shadow-2xl shadow-blue-950/50 overflow-hidden text-center text-white">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" /> Ready for the Digital Leap?
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-[Outfit]">
              Let&apos;s Build the Future of Your Medical Practice
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Schedule a private 30-minute consultation with our healthcare digital transformation team. We&apos;ll inspect your current chamber presence and present a tailored growth roadmap.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0047BA] font-bold text-sm hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Schedule Free Strategy Session
              </Link>
              <a
                href="https://wa.me/8801700000000?text=Hello%20Homeo%20Network,%20I%20am%20a%20doctor%20and%20want%20to%20digitize%20my%20clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/15 hover:bg-black/25 border border-white/20 text-white font-medium text-sm transition-all text-center"
              >
                Direct WhatsApp Hotline
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
