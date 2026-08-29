"use client";

import React, { useState } from "react";
import { 
  CalendarCheck, 
  Database, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Stethoscope, 
  ArrowRight,
  Send,
  User,
  Activity,
  FileText
} from "lucide-react";

export default function InteractiveClinicDemo() {
  const [activeTab, setActiveTab] = useState<"booking" | "ehr" | "bot">("booking");

  // Booking Tab State
  const [selectedSpecialty, setSelectedSpecialty] = useState("Chronic Skin & Allergy");
  const [selectedSlot, setSelectedSlot] = useState("Tomorrow • 5:00 PM");
  const [consultType, setConsultType] = useState<"chamber" | "telemedicine">("chamber");
  const [bookingConfirmed, setBookingConfirmed] = useState(true);

  // Chatbot Tab State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string; time: string }>>([
    {
      sender: "bot",
      text: "Assalamu Alaikum! Welcome to Dr. M. Rahman's Classical Homeopathic Chamber. How may I assist you today?",
      time: "Just now",
    },
  ]);

  const handleQuickQuestion = (question: string, answer: string) => {
    setChatMessages((prev) => [
      ...prev,
      { sender: "user", text: question, time: "Just now" },
      { sender: "bot", text: answer, time: "Instant Reply" },
    ]);
  };

  const tabs = [
    { key: "booking" as const, label: "Patient Booking", icon: CalendarCheck },
    { key: "ehr" as const, label: "EHR & Repertory", icon: Database },
    { key: "bot" as const, label: "WhatsApp Bot", icon: MessageSquare },
  ];

  return (
    <div className="rounded-2xl bg-[#0A1628] border border-slate-800 overflow-hidden">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-[#0D1A30]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            dr-m-rahman.homeonetwork.cloud
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-emerald-400 font-medium">Live Demo</span>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex border-b border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium transition-all border-b-2 ${
                activeTab === tab.key
                  ? "border-sky-500 text-sky-400 bg-sky-500/5"
                  : "border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-7">

        {/* TAB 1: PATIENT BOOKING */}
        {activeTab === "booking" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Booking Form */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-[11px] font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
                  <span>Select Treatment Category</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Chronic Skin & Allergy",
                    "Migraine & Headache",
                    "Pediatric Asthma",
                    "Female Hormonal / PCOD",
                    "Rheumatoid Arthritis",
                    "Gastro & Liver",
                  ].map((spec) => (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => {
                        setSelectedSpecialty(spec);
                        setBookingConfirmed(false);
                      }}
                      className={`p-2.5 rounded-lg text-xs transition-all border ${
                        selectedSpecialty === spec
                          ? "bg-sky-500/15 border-sky-500/40 text-sky-300 font-semibold"
                          : "bg-transparent border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-400"
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Visit Type */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                    Visit Type
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => { setConsultType("chamber"); setBookingConfirmed(false); }}
                      className={`p-2 rounded-lg text-xs font-medium border text-center transition-all ${
                        consultType === "chamber"
                          ? "bg-sky-600 border-sky-500 text-white"
                          : "bg-transparent border-slate-800 text-slate-500"
                      }`}
                    >
                      Chamber
                    </button>
                    <button
                      type="button"
                      onClick={() => { setConsultType("telemedicine"); setBookingConfirmed(false); }}
                      className={`p-2 rounded-lg text-xs font-medium border text-center transition-all ${
                        consultType === "telemedicine"
                          ? "bg-sky-600 border-sky-500 text-white"
                          : "bg-transparent border-slate-800 text-slate-500"
                      }`}
                    >
                      Video Call
                    </button>
                  </div>
                </div>

                {/* Slot */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>Available Slot</span>
                  </span>
                  <select
                    value={selectedSlot}
                    onChange={(e) => { setSelectedSlot(e.target.value); setBookingConfirmed(false); }}
                    className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500"
                  >
                    <option>Today • 7:30 PM (1 slot left)</option>
                    <option>Tomorrow • 5:00 PM</option>
                    <option>Day After Tomorrow • 6:30 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBookingConfirmed(true)}
                className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Simulate Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* WhatsApp Preview */}
            <div className="lg:col-span-5 rounded-xl bg-[#0B141B] border border-slate-800 overflow-hidden">
              <div className="bg-[#1F2C34] px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold text-xs">
                    DR
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Dr. M. Rahman Chamber</div>
                    <div className="text-[10px] text-emerald-400">Verified Business</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500">WhatsApp</span>
              </div>

              <div className="p-4 min-h-[240px] flex items-center justify-center">
                {bookingConfirmed ? (
                  <div className="space-y-3 w-full">
                    <div className="bg-[#005C4B] text-white p-3.5 rounded-2xl rounded-tl-none text-xs space-y-2 max-w-[95%]">
                      <div className="font-semibold text-emerald-200 text-[11px] pb-1 border-b border-emerald-400/20">
                        ✅ Appointment Confirmed • Serial #08
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        Assalamu Alaikum <strong>Mrs. Yasmin</strong>! Your appointment with <strong>Dr. Mohammad Rahman</strong> has been successfully booked.
                      </p>
                      <div className="bg-black/20 p-2 rounded-lg text-[10px] space-y-1 text-slate-200">
                        <div>📅 <strong>Date/Time:</strong> {selectedSlot}</div>
                        <div>🏥 <strong>Type:</strong> {consultType === "chamber" ? "In-Chamber Visit" : "HD Video Consultation"}</div>
                        <div>🩺 <strong>Condition:</strong> {selectedSpecialty}</div>
                      </div>
                      <div className="text-[9px] text-right text-emerald-300 font-mono">
                        12:45 PM ✓✓
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/15 text-[11px] text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Alert sent to patient & chamber assistant</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-600 space-y-2">
                    <CalendarCheck className="w-7 h-7 mx-auto text-slate-700" />
                    <p className="text-xs">
                      Select options and click <strong>&quot;Simulate Booking&quot;</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DOCTOR EHR & REPERTORY */}
        {activeTab === "ehr" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                  <User className="w-4 h-4" />
                  <span>Patient EHR #HN-8842</span>
                </div>
                <div className="text-base font-bold text-white font-[Outfit]">Nasir Ahmed, 42M</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Chief: Chronic Atopic Eczema with lichenification (4 years)
                </div>
                <div className="text-[11px] text-sky-400/70 font-medium">
                  Miasm: Psoric-Sycotic
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                  <Activity className="w-4 h-4" />
                  <span>Key Modalities & Rubrics</span>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
                  <li>• Aggravation: Night & warmth of bed</li>
                  <li>• Amelioration: Cold water application</li>
                  <li>• Thirst: Burning, unquenchable, small sips</li>
                  <li>• Mind: Fastidious, anxious restlessness at 1 AM</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-sky-500/20 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    <span>Simillimum</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono">
                    94% Match
                  </span>
                </div>
                <div className="text-lg font-extrabold text-sky-400 font-[Outfit]">
                  Arsenicum Album 200CH
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  3 globules on empty stomach for 2 days. Then SL 30 drops twice daily.
                </div>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span>Follow-Up Alert:</span>
                  <span className="text-sky-400 font-semibold">Day 21 (Cloud Sync)</span>
                </div>
              </div>

            </div>

            <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800 text-xs text-slate-500 flex items-center justify-between">
              <span>HIPAA 256-bit AES encrypted cloud records. Zero paper loss.</span>
              <span className="text-sky-400/60 font-medium hidden sm:inline">2-Second Patient Search</span>
            </div>
          </div>
        )}

        {/* TAB 3: WHATSAPP CHAMBER BOT */}
        {activeTab === "bot" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Quick Trigger Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Click a patient query to test:
              </span>
              {[
                {
                  q: "What is your chamber address and parking?",
                  a: "Chamber Address: House 14, Road 7, Dhanmondi, Dhaka. Landmark: Beside LabAid Diagnostic. Dedicated parking on Ground Floor.",
                },
                {
                  q: "How much is the initial consultation fee?",
                  a: "First-time chronic case taking fee is ৳1,000 (includes 45-min evaluation). Follow-up: ৳500. Pay via bKash, Nagad, or Cash.",
                },
                {
                  q: "Are video consultations available?",
                  a: "Yes! Dr. M. Rahman sees remote patients via HD Video on Fridays & Tuesdays. German medicines couriered within 48 hours.",
                },
                {
                  q: "Can I book a slot for tomorrow evening?",
                  a: "Certainly! 2 slots left tomorrow: 5:00 PM and 6:30 PM. Click here to confirm: homeonetwork.cloud/book/dr-rahman",
                },
              ].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickQuestion(item.q, item.a)}
                  className="w-full text-left p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 text-xs text-slate-400 transition-all flex items-center justify-between group"
                >
                  <span className="line-clamp-1 group-hover:text-white transition-colors">{item.q}</span>
                  <Send className="w-3 h-3 text-sky-500 shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-7 rounded-xl bg-[#0B141B] border border-slate-800 p-4 flex flex-col justify-between h-72">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">Chamber Assistant</span>
                <span className="text-[10px] text-emerald-400/70 ml-auto font-mono">24/7 Active</span>
              </div>

              <div className="space-y-3 overflow-y-auto py-2 pr-1 flex-1">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-xs ${
                        msg.sender === "user"
                          ? "bg-sky-600 text-white rounded-br-none"
                          : "bg-[#1F2C34] text-slate-300 border border-slate-700/40 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-slate-600 mt-1 font-mono">
                      {msg.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-600">
                Save 15+ hours weekly with automated patient replies.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
