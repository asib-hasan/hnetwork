"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck,
  Stethoscope,
  AlertCircle,
  Users
} from "lucide-react";

// Mapping of calculator tool IDs to full service titles
const TOOL_MAP: Record<string, string> = {
  "medical-website": "Doctor Website",
  "online-appointments": "Online Booking & Telemedicine",
  "medical-seo": "Google Local & Medical SEO",
  "digital-marketing": "Targeted Patient Ads",
  "branding-identity": "Branding & Logo Identity",
  "clinic-crm-software": "Clinic CRM & Case Software",
  "social-media-management": "Social Media & Health Reels",
  "tech-automation": "WhatsApp Clinic Automation",
  // Legacy aliases
  website: "Doctor Website",
  seo: "Google Local & Medical SEO",
  whatsapp: "WhatsApp Clinic Automation",
  booking: "Online Booking & Telemedicine",
  ads: "Targeted Patient Ads",
};

const availableServices = [
  "Doctor Website",
  "Online Booking & Telemedicine",
  "Google Local & Medical SEO",
  "Targeted Patient Ads",
  "Branding & Logo Identity",
  "Clinic CRM & Case Software",
  "Social Media & Health Reels",
  "WhatsApp Clinic Automation",
];

function ContactFormInner() {
  const searchParams = useSearchParams();

  // Extract initial parameters synchronously
  const { initialServices, initialVolume, initialMessage, initialNotice } = useMemo(() => {
    let services = ["Doctor Website", "Google Local & Medical SEO"];
    let volume = "20-50";
    let message = "";
    let notice: string | null = null;

    if (searchParams) {
      const serviceParam = searchParams.get("service");
      const toolsParam = searchParams.get("tools");
      const patientsParam = searchParams.get("patients");

      if (serviceParam) {
        const matched = availableServices.find(
          (s) => s.toLowerCase() === serviceParam.toLowerCase() || serviceParam.toLowerCase().includes(s.toLowerCase())
        ) || serviceParam;
        services = [matched];
        notice = `Inquiring about: ${matched}`;
      } else if (toolsParam) {
        const toolList = toolsParam.split(",");
        const matched = toolList
          .map((t) => TOOL_MAP[t.trim()])
          .filter(Boolean);
        if (matched.length > 0) {
          services = matched;
        }
        if (patientsParam) {
          const pCount = parseInt(patientsParam, 10);
          if (pCount <= 20) volume = "<20";
          else if (pCount <= 50) volume = "20-50";
          else if (pCount <= 100) volume = "50-100";
          else volume = "100+";

          message = `Estimated patient volume from calculator: ${pCount} patients/week.`;
        }
        notice = "Configuration pre-loaded from your Clinic Growth Calculator estimation.";
      }
    }

    return { initialServices: services, initialVolume: volume, initialMessage: message, initialNotice: notice };
  }, [searchParams]);

  const [formData, setFormData] = useState({
    doctorName: "",
    clinicName: "",
    phone: "",
    email: "",
    city: "",
    patientVolume: initialVolume,
    message: initialMessage,
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(initialServices);
  const [prefilledNotice] = useState<string | null>(initialNotice);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          selectedServices,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please connect via WhatsApp.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Homeo Network Team! I am Dr. ${formData.doctorName || "[Doctor Name]"} from ${formData.clinicName || "[Chamber Name]"} (${formData.city || "Bangladesh"}). I need digital solutions for: ${selectedServices.join(", ")}. Patient volume: ~${formData.patientVolume}/wk.`
  );

  return (
    <div className="glass-panel p-6 sm:p-10 border-[#00A3FF]/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
      {isSubmitted ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF] flex items-center justify-center mx-auto text-[#00E5FF] animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-[Outfit]">
              Consultation Request Received!
            </h3>
            <p className="text-[#94A3B8] max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <strong className="text-white">Dr. {formData.doctorName}</strong>. Our senior healthcare digital transformation architect will contact you via WhatsApp or phone within 2 hours with your clinic blueprint.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/8801700000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-6 text-sm flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Connect on WhatsApp Instantly</span>
            </a>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary py-3 px-6 text-sm"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#00A3FF]/15 pb-4">
            <h3 className="text-xl font-bold text-white font-[Outfit] flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#00E5FF]" />
              Schedule Clinic Digital Strategy Session
            </h3>
            <p className="text-xs text-[#94A3B8] mt-1">
              Complimentary 30-minute growth roadmap tailored specifically to homeopathic clinical reality.
            </p>
          </div>

          {/* Calculator or Service Sync Notice */}
          {prefilledNotice && (
            <div className="p-3 rounded-xl bg-[#0047BA]/20 border border-[#00A3FF]/40 text-xs text-[#38BDF8] flex items-center gap-2 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>{prefilledNotice}</span>
            </div>
          )}

          {/* Error Alert */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Doctor Name & Clinic Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#E2E8F0] mb-1.5">
                Doctor Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Mohammad Rahman"
                value={formData.doctorName}
                onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#E2E8F0] mb-1.5">
                Clinic / Chamber Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pure Cure Homeopathy Chamber"
                value={formData.clinicName}
                onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]"
              />
            </div>
          </div>

          {/* Row 2: Phone & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#E2E8F0] mb-1.5">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 017XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#E2E8F0] mb-1.5">
                Chamber City / Area *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dhanmondi, Dhaka"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]"
              />
            </div>
          </div>

          {/* Row 3: Current Weekly Patient Volume */}
          <div>
            <label className="block text-xs font-semibold text-[#E2E8F0] mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Current Weekly Patient Volume:</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "<20", label: "Under 20 / wk" },
                { id: "20-50", label: "20 – 50 / wk" },
                { id: "50-100", label: "50 – 100 / wk" },
                { id: "100+", label: "100+ (Busy Clinic)" },
              ].map((vol) => (
                <button
                  key={vol.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, patientVolume: vol.id })}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all text-center ${
                    formData.patientVolume === vol.id
                      ? "bg-[#00A3FF]/20 border-[#00A3FF] text-[#00E5FF] font-bold shadow-[0_0_10px_rgba(0,163,255,0.2)]"
                      : "bg-[#060D1E] border-[#00A3FF]/15 text-[#94A3B8] hover:border-[#00A3FF]/30"
                  }`}
                >
                  {vol.label}
                </button>
              ))}
            </div>
          </div>

          {/* Multi-select Services */}
          <div>
            <label className="block text-xs font-semibold text-[#E2E8F0] mb-2">
              Select Desired Digital Solutions:
            </label>
            <div className="flex flex-wrap gap-2">
              {availableServices.map((service) => {
                const active = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      active
                        ? "bg-[#0047BA]/30 border-[#00A3FF] text-[#00E5FF] shadow-[0_0_10px_rgba(0,163,255,0.2)]"
                        : "bg-[#060D1E] border-[#00A3FF]/15 text-[#94A3B8] hover:border-[#00A3FF]/30"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-semibold text-[#E2E8F0] mb-1.5">
              Specific Chamber Goals or Special Needs (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your chamber, current challenges, or specific needs..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#060D1E] border border-[#00A3FF]/20 text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF]"
            ></textarea>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Securing Consultation Slot...
                </span>
              ) : (
                <>
                  <span>Request Free Clinic Strategy Call</span>
                  <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Strict Medical Data Privacy • Zero Spam Guarantee</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="glass-panel p-10 text-center text-[#94A3B8] border-[#00A3FF]/20">
          <div className="w-6 h-6 border-2 border-[#00A3FF] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-xs">Loading consultation form...</p>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
