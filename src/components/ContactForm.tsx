"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck, Stethoscope, MessageSquare } from "lucide-react";

const availableServices = [
  "ডাক্তার ওয়েবসাইট ডেভেলপমেন্ট",
  "জাতীয় ডাক্তার ডিরেক্টরি",
  "ডিজিটাল মার্কেটিং ও লোকাল এসইও",
];

function ContactFormInner() {
  const searchParams = useSearchParams();

  const { initialServices, initialVolume, initialMessage } = useMemo(() => {
    let services = ["ডাক্তার ওয়েবসাইট ডেভেলপমেন্ট", "ডিজিটাল মার্কেটিং ও লোকাল এসইও"];
    let volume = "25-50";
    let message = "";

    if (searchParams) {
      const serviceParam = searchParams.get("service");
      if (serviceParam) {
        const matched = availableServices.find(
          (s) => s.toLowerCase() === serviceParam.toLowerCase() || serviceParam.toLowerCase().includes(s.toLowerCase())
        ) || serviceParam;
        services = [matched];
      }
    }

    return { initialServices: services, initialVolume: volume, initialMessage: message };
  }, [searchParams]);

  const [formData, setFormData] = useState({
    doctorName: "",
    degree: "DHMS",
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

  const buildWhatsAppMessage = () => {
    return [
      `আসসালামু আলাইকুম Homeo Network!`,
      `আমি একটি ফ্রি চেম্বার স্ট্র্যাটেজি সেশন বুক করতে আগ্রহী:`,
      ``,
      `• চিকিৎসকের নাম: ডা. ${formData.doctorName || "চিকিৎসক"} (${formData.degree})`,
      `• চেম্বার/ক্লিনিক: ${formData.clinicName || "হোমিও চেম্বার"}`,
      `• মোবাইল/হোয়াটসঅ্যাপ: ${formData.phone}`,
      `• এলাকা ও জেলা: ${formData.city || "বাংলাদেশ"}`,
      `• সাপ্তাহিক রোগী: ${formData.patientVolume} জন`,
      `• নির্বাচিত সেবা: ${selectedServices.length > 0 ? selectedServices.join(", ") : "সকল সেবা"}`,
      formData.message ? `• বিশেষ চাহিদা/বার্তা: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const getWhatsAppUrl = () => {
    const text = buildWhatsAppMessage();
    return `https://wa.me/8801811999878?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappUrl = getWhatsAppUrl();

    // Async server lead log
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, services: selectedServices }),
      }).catch(() => {});
    } catch {
      // Ignored
    }

    // Direct WhatsApp redirect so the message instantly reaches admin WhatsApp
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    setLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
      {isSubmitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            বার্তাটি প্রস্তুত করা হয়েছে!
          </h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            ধন্যবাদ, <strong>ডা. {formData.doctorName}</strong>। আপনার বার্তা সরাসরি আমাদের অফিসিয়াল হোয়াটসঅ্যাপে পাঠানোর জন্য প্রস্তুত। স্বয়ংক্রিয়ভাবে হোয়াটসঅ্যাপ ওপেন না হয়ে থাকলে নিচের বাটনে ট্যাপ করুন:
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-xs font-semibold flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>সরাসরি হোয়াটসঅ্যাপে পাঠান</span>
            </a>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary py-2.5 px-4 text-xs font-semibold cursor-pointer"
            >
              আরেকটি বার্তা পাঠান
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-blue-700" />
              ফ্রি চেম্বার ডিজিটালাইজেশন সেশন বুক করুন
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              ফর্মটি পূরণ করলেই বিস্তারিত তথ্যসহ বার্তা সরাসরি আমাদের হোয়াটসঅ্যাপে চলে আসবে।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                চিকিৎসকের নাম *
              </label>
              <input
                type="text"
                required
                placeholder="যেমন: ডা. মো. রফিকুল ইসলাম"
                value={formData.doctorName}
                onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-[#0047BA]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ডিগ্রি *
              </label>
              <select
                value={formData.degree}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-[#0047BA]"
              >
                <option value="DHMS">DHMS (হোমিওপ্যাথি বোর্ড)</option>
                <option value="BHMS">BHMS (মেডিকেল ফ্যাকাল্টি)</option>
                <option value="DHMS, BHMS">উভয় ডিগ্রি</option>
                <option value="অন্যান্য">অন্যান্য প্রাতিষ্ঠানিক</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                চেম্বার বা ক্লিনিকের নাম *
              </label>
              <input
                type="text"
                required
                placeholder="যেমন: হোমিও কিউর চেম্বার"
                value={formData.clinicName}
                onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-[#0047BA]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                হোয়াটসঅ্যাপ বা মোবাইল নম্বর *
              </label>
              <input
                type="tel"
                required
                placeholder="যেমন: 017XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-[#0047BA]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                চেম্বারের জেলা ও এলাকা *
              </label>
              <input
                type="text"
                required
                placeholder="যেমন: ধানমন্ডি, ঢাকা অথবা আগ্রাবাদ, চট্টগ্রাম"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-[#0047BA]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                সাপ্তাহিক গড় রোগী সংখ্যা
              </label>
              <select
                value={formData.patientVolume}
                onChange={(e) => setFormData({ ...formData, patientVolume: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-[#0047BA]"
              >
                <option value="10-25">১০ - ২৫ জন রোগী/সপ্তাহ</option>
                <option value="25-50">২৫ - ৫০ জন রোগী/সপ্তাহ</option>
                <option value="50-100">৫০ - ১০০ জন রোগী/সপ্তাহ</option>
                <option value="100+">১০০+ জন রোগী/সপ্তাহ</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              প্রয়োজনীয় ডিজিটাল সেবাসমূহ নির্বাচন করুন:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableServices.map((service) => {
                const active = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                      active
                        ? "bg-[#EBF3FC] border border-[#07418b] text-[#07418b] font-semibold shadow-2xs"
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
              আপনার চেম্বারের বিশেষ কোনো লক্ষ্য বা চাহিদা (ঐচ্ছিক)
            </label>
            <textarea
              rows={2}
              placeholder="আপনার বর্তমান প্র্যাকটিস বা বিশেষ কোনো রোগের চিকিৎসায় ফোকাস করতে চাইলে লিখুন..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-hidden focus:bg-white focus:border-[#0047BA]"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-2.5 text-xs font-semibold cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{loading ? "হোয়াটসঅ্যাপে পাঠানো হচ্ছে..." : "বার্তাটি সরাসরি হোয়াটসঅ্যাপে পাঠান"}</span>
            </button>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 mt-2">
              <ShieldCheck className="w-3 h-3 text-[#0047BA]" />
              <span>চিকিৎসা তথ্যের পূর্ণ গোপনীয়তা • সরাসরি অফিশিয়াল হোয়াটসঅ্যাপে ডেলিভারি</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-xs text-slate-500">লোড হচ্ছে...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
