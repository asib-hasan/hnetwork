"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ShieldCheck, Stethoscope } from "lucide-react";

const availableServices = [
  "ডিগ্রিধারী ডাক্তার ওয়েবসাইট",
  "জাতীয় ডক্টর ডিরেক্টরি লিস্টিং",
  "গুগল ম্যাপস ও লোকাল এসইও",
  "টার্গেটেড ক্রনিক ফেসবুক অ্যাড",
  "চেম্বার ব্র্যান্ডিং ও প্রেসক্রিপশন কিট",
  "ক্লিনিক ম্যানেজমেন্ট সফটওয়্যার",
  "সোশ্যাল মিডিয়া ও স্বাস্থ্য রিলস",
  "হোয়াটসঅ্যাপ সিরিয়াল ও চেম্বার বট",
];

function ContactFormInner() {
  const searchParams = useSearchParams();

  const { initialServices, initialVolume, initialMessage } = useMemo(() => {
    let services = ["ডিগ্রিধারী ডাক্তার ওয়েবসাইট", "গুগল ম্যাপস ও লোকাল এসইও"];
    let volume = "20-50";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `আসসালামু আলাইকুম Homeo Network! আমি ডা. ${formData.doctorName || "[আপনার নাম]"} (${formData.degree}), চেম্বার: ${formData.clinicName || "[চেম্বারের নাম]"}, ${formData.city || "বাংলাদেশ"}। আমি আগ্রহী: ${selectedServices.join(", ")} সেবা নিয়ে কথা বলতে চাই।`
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
      {isSubmitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0047BA] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            পরামর্শের অনুরোধ সফলভাবে গৃহীত হয়েছে!
          </h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            ধন্যবাদ, <strong>ডা. {formData.doctorName}</strong>। আমাদের মেডিকেল টেকনোলজি টিম আগামী ২ ঘণ্টার মধ্যে আপনার হোয়াটসঅ্যাপ বা ফোনে যোগাযোগ করবে।
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
            <a
              href={`https://wa.me/8801628044781?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs"
            >
              সরাসরি হোয়াটসঅ্যাপে কথা বলুন
            </a>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary py-2 px-4 text-xs"
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
              আপনার চেম্বারের প্রসার, গুগল উপস্থিতি ও অটোমেশনের জন্য একটি ৩০ মিনিটের ফ্রি কনসালটেশন।
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
                    className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                      active
                        ? "bg-blue-50 border border-[#0047BA] text-[#0047BA] font-semibold"
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
              className="btn-primary w-full py-2.5 text-xs font-semibold"
            >
              {loading ? "জমা দেওয়া হচ্ছে..." : "ফ্রি চেম্বার স্ট্র্যাটেজি সেশন বুক করুন"}
            </button>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 mt-2">
              <ShieldCheck className="w-3 h-3 text-[#0047BA]" />
              <span>চিকিৎসা তথ্যের পূর্ণ গোপনীয়তা • কোনো অপ্রয়োজনীয় স্প্যাম নয়</span>
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
