import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Activity, 
  Award, 
  Users, 
  Zap, 
  BarChart3, 
  Globe, 
  CalendarCheck, 
  Database 
} from "lucide-react";
import { servicesList } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* ===== 1. HERO SECTION ===== */}
      <section className="pt-16 pb-6 sm:pt-20 sm:pb-10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-tight">
            Transform Your Homeopathic Practice with{" "}
            <span className="text-[#0052CC]">Modern Digital Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            High-converting doctor websites, Google Maps #1 SEO, 24/7 automated WhatsApp appointments, and smart clinic software built specifically for classical homeopathic practitioners.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto text-xs py-2.5 px-6 font-semibold"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            
            <Link
              href="/services"
              className="btn-secondary w-full sm:w-auto text-xs py-2.5 px-6 font-semibold"
            >
              <span>Explore All 8 Services</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium border-t border-slate-200 max-w-md mx-auto">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> HIPAA Security
            </span>
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-[#0052CC]" /> 99.9% Uptime
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-emerald-600" /> Classical Workflows
            </span>
          </div>

        </div>
      </section>

      {/* ===== 2. KEY STATS STRIP ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center mx-auto mb-2">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              500<span className="text-[#0052CC]">+</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">
              Doctors Digitized
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center mx-auto mb-2">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              85K<span className="text-[#0052CC]">+</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">
              Appointments Handled
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              98.2<span className="text-emerald-600">%</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">
              PageSpeed Score
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center mx-auto mb-2">
              <Activity className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              3.8<span className="text-[#0052CC]">x</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-0.5">
              Average Growth
            </div>
          </div>

        </div>
      </section>

      {/* ===== 3. CORE PILLARS ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Why Modernize Your Practice?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Three foundational pillars built to eliminate chamber friction and grow patient discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0052CC]">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Doctor Website & SEO
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dominate Google search and Google Maps when local chronic patients look for homeopathic cures in your city.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0052CC]">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              24/7 Automated Booking
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patients book available slots directly. Instant WhatsApp confirmations and reminders reduce no-shows by 75%.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0052CC]">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Clinic CRM & Records
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cloud access to patient symptom records, repertory notes, and digital prescriptions in 2 seconds from any device.
            </p>
          </div>

        </div>
      </section>

      {/* ===== 4. 8 SERVICES CATALOG ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            8 Specialized Digital Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tailored digital products designed exclusively for classical homeopathic chambers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="btn-secondary text-xs py-2.5 px-6 inline-flex items-center gap-1.5 font-semibold"
          >
            <span>Compare Detailed Deliverables & Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ===== 5. COMPARISON TABLE ===== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Traditional */}
            <div className="p-6 space-y-3.5 bg-rose-50/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
                  <XCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Traditional Chamber</h3>
                  <span className="text-[11px] text-rose-600 font-medium">Manual & limited reach</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Paper case records that risk permanent loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Phone calls interrupting doctor consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Zero Google ranking for local disease searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>30%+ appointment no-show rates</span>
                </li>
              </ul>
            </div>

            {/* With Homeo Network */}
            <div className="p-6 space-y-3.5 bg-emerald-50/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">With Homeo Network</h3>
                  <span className="text-[11px] text-emerald-700 font-medium">Automated & global reach</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>2-second cloud retrieval of full case histories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>24/7 automated booking with WhatsApp alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rank #1 on Google Search & Maps locally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>No-shows cut below 5% via calendar reminders</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 6. TESTIMONIALS ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Trusted by Respected Homeopaths
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real feedback from practitioners who digitized their clinical chambers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="rounded-xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-2.5">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;80% of our appointments now happen automatically through our website, and we rank #1 on Google for chronic allergy treatment in Dhanmondi.&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center font-bold text-xs">
                DT
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Dr. Tariqul Islam</h4>
                <p className="text-[10px] text-slate-500">DHMS, Homeopath (Dhaka)</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-white border border-blue-400 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic font-medium">
                &ldquo;Telemedicine integration opened up patients across Chittagong, Sylhet, and expatriate families in the UK and Middle East.&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0052CC] text-white flex items-center justify-center font-bold text-xs">
                SJ
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Dr. Sabrina Jahan</h4>
                <p className="text-[10px] text-slate-500">Chronic Female Health</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-2.5">
              <div className="flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &ldquo;Their branding and CRM transformed our 20-year chamber into a prestigious, modern healthcare center. Patient retention jumped 60%.&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0052CC] flex items-center justify-center font-bold text-xs">
                MK
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Dr. M. A. Karim</h4>
                <p className="text-[10px] text-slate-500">Senior Consultant</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 7. FAQ ===== */}
      <FAQSection />

      {/* ===== 8. FINAL CTA ===== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl p-8 sm:p-12 bg-[#0052CC] text-center text-white space-y-4 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Let&apos;s Modernize Your Medical Practice
          </h2>
          <p className="text-white/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Schedule a complimentary 30-minute consultation with our healthcare digital transformation team for your custom clinic growth plan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white text-[#0052CC] font-bold text-xs hover:bg-slate-100 transition-all shadow-xs"
            >
              Schedule Free Strategy Session
            </Link>
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0041A8] hover:bg-[#00358A] border border-white/20 text-white font-semibold text-xs transition-all text-center"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
