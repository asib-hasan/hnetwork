"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, ShieldCheck, Stethoscope, Users } from "lucide-react";

const TOOL_MAP: Record<string, string> = {
  "medical-website": "Doctor Website",
  "online-appointments": "Online Booking & Telemedicine",
  "medical-seo": "Google Local & Medical SEO",
  "digital-marketing": "Targeted Patient Ads",
  "branding-identity": "Branding & Logo Identity",
  "clinic-crm-software": "Clinic CRM & Case Software",
  "social-media-management": "Social Media & Health Reels",
  "tech-automation": "WhatsApp Clinic Automation",
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

  const { initialServices, initialVolume, initialMessage } = useMemo(() => {
    let services = ["Doctor Website", "Google Local & Medical SEO"];
    let volume = "20-50";
    let message = "";

    if (searchParams) {
      const serviceParam = searchParams.get("service");
      const toolsParam = searchParams.get("tools");
      const patientsParam = searchParams.get("patients");

      if (serviceParam) {
        const matched = availableServices.find(
          (s) => s.toLowerCase() === serviceParam.toLowerCase() || serviceParam.toLowerCase().includes(s.toLowerCase())
        ) || serviceParam;
        services = [matched];
      } else if (toolsParam) {
        const toolList = toolsParam.split(",");
        const matched = toolList.map((t) => TOOL_MAP[t.trim()]).filter(Boolean);
        if (matched.length > 0) services = matched;
        if (patientsParam) message = `Patient volume from calculator: ${patientsParam} patients/week.`;
      }
    }

    return { initialServices: services, initialVolume: volume, initialMessage: message };
  }, [searchParams]);

  const [formData, setFormData] = useState({
    doctorName: "",
    clinicName: "",
    phone: "",
    city: "",
    patientVolume: initialVolume,
    message: initialMessage,
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(initialServices);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Homeo Network! I am Dr. ${formData.doctorName || "[Doctor Name]"} from ${formData.clinicName || "[Chamber Name]"} (${formData.city || "Bangladesh"}). I am interested in: ${selectedServices.join(", ")}.`
  );

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
      {isSubmitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-[Outfit]">
            Consultation Request Received!
          </h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <strong>Dr. {formData.doctorName}</strong>. Our medical transformation team will contact you via WhatsApp or phone within 2 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
            <a
              href={`https://wa.me/8801700000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs"
            >
              Connect on WhatsApp Instantly
            </a>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary py-2 px-4 text-xs"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 font-[Outfit] flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-sky-600" />
              Schedule Free Clinic Strategy Call
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Complimentary 30-minute growth roadmap tailored specifically to your chamber.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Doctor Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Mohammad Rahman"
                value={formData.doctorName}
                onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-sky-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Chamber / Clinic Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pure Cure Homeopathy"
                value={formData.clinicName}
                onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-sky-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 017XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-sky-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Chamber City / Area *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dhanmondi, Dhaka"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-sky-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Select Desired Services:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableServices.map((service) => {
                const active = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                      active
                        ? "bg-sky-50 border border-sky-500 text-sky-800 font-semibold"
                        : "bg-slate-50 border border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Specific Chamber Goals or Special Needs (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Tell us about your chamber or specific goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-sky-600"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-2.5 text-xs font-semibold"
            >
              {loading ? "Submitting..." : "Request Free Clinic Strategy Call"}
            </button>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 mt-2">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Strict Medical Data Privacy • Zero Spam</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-xs text-slate-500">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
