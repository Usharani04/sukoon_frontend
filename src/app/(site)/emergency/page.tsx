import React from "react";
import { PhoneCall, Ambulance, ShieldCheck, Clock, CheckCircle2, AlertOctagon, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "MERA Sukoon | 24/7 Psychiatric Emergency & Retrieval Service",
  description: "India's only structured 24/7 psychiatric emergency response fleet, MHCA compliant with trained de-escalation teams.",
};

export default function EmergencyPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-red-900 via-[#293F3B] to-[#293F3B] text-white py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500/50 text-xs font-bold uppercase tracking-wider text-red-200">
            <Ambulance size={16} /> Immediate Crisis Intervention
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            MERA Sukoon Emergency Retrieval
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            India's only structured psychiatric emergency retrieval service. Available 24x7, MHCA-compliant, and integrated directly into Sukoon's A2R+ care pathway.
          </p>

          <div className="pt-4">
            <a
              href="tel:+918448156500"
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xl px-10 py-5 rounded-full shadow-2xl inline-flex items-center gap-3 transition-transform hover:scale-105 animate-pulse"
            >
              <PhoneCall size={26} />
              <span>Call Emergency Dispatch: +91 8448156500</span>
            </a>
          </div>
        </div>
      </section>

      {/* In 2024 Alone Stats */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#F2F7F6] p-8 rounded-3xl border border-[#C6DDD9] text-center space-y-2">
            <div className="text-4xl font-extrabold text-[#3F7268] font-display">120+</div>
            <div className="text-sm font-bold text-[#293F3B]">Successful Retrievals</div>
            <p className="text-xs text-gray-600">Conducted with zero physical harm or trauma in 2024</p>
          </div>
          <div className="bg-[#F2F7F6] p-8 rounded-3xl border border-[#C6DDD9] text-center space-y-2">
            <div className="text-4xl font-extrabold text-[#3F7268] font-display">90%+</div>
            <div className="text-sm font-bold text-[#293F3B]">Families Reassured</div>
            <p className="text-xs text-gray-600">Reported feeling safe, supported, and clearly guided</p>
          </div>
          <div className="bg-[#F2F7F6] p-8 rounded-3xl border border-[#C6DDD9] text-center space-y-2">
            <div className="text-4xl font-extrabold text-[#3F7268] font-display">&gt;70%</div>
            <div className="text-sm font-bold text-[#293F3B]">Critical Cases Resolved</div>
            <p className="text-xs text-gray-600">Were previously deemed unreachable by general emergency services</p>
          </div>
        </div>
      </section>

      {/* How MERA Works */}
      <section className="py-20 bg-[#F9FBFA] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
              Standard Operating Protocol
            </span>
            <h2 className="text-3xl font-extrabold text-[#293F3B]">
              How the MERA Response Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#3F7268] text-white font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="font-bold text-base text-[#293F3B]">Rapid Triage & Dispatch</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our crisis coordinator assesses the situation on call within 3 minutes and dispatches the nearest MERA ambulance unit equipped with psychiatric emergency specialists.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#3F7268] text-white font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="font-bold text-base text-[#293F3B]">Verbal De-escalation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Trained psychiatric nurses and clinical responders arrive to calmly engage the individual, ensuring emotional safety, respect, and dignity without force.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#3F7268] text-white font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="font-bold text-base text-[#293F3B]">Direct Inpatient ICU Transfer</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                The individual is brought smoothly to the Sukoon Inpatient Hospital and immediately received by the Senior Consultant Psychiatrist for acute stabilization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
