"use client";

import React, { useState } from "react";
import { PhoneCall, ShieldCheck, CheckCircle, Mail, MapPin, User } from "lucide-react";
import { Button } from "../ui/Button";

interface ContactFormProps {
  heading: string;
  description: string;
  appointment_types?: string[];
}

export const ContactFormSection: React.FC<ContactFormProps> = ({
  heading,
  description,
  appointment_types = ["Inpatient Admission", "De-addiction Rehab", "Emergency Retrieval", "Doctor Consultation"],
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: appointment_types[0] || "Inpatient Admission",
    city: "Gurugram",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#293F3B] rounded-3xl text-white overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left contact info */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-8 bg-gradient-to-br from-[#243E3A] to-[#293F3B] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-sukoon-sage">
                24/7 Clinical Helpdesk
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {heading}
              </h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-4 text-xs text-white/90">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <PhoneCall size={18} className="text-sukoon-sage" />
                <div>
                  <span className="block text-white/60 text-[10px] uppercase font-bold">Admissions Hotline</span>
                  <a href="tel:+918448156500" className="font-bold text-sm text-white hover:text-sukoon-horizon">+91 8448156500</a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <Mail size={18} className="text-sukoon-sage" />
                <div>
                  <span className="block text-white/60 text-[10px] uppercase font-bold">Email Inquiries</span>
                  <a href="mailto:admissions@sukoonhealth.com" className="font-bold text-xs text-white hover:text-sukoon-horizon">admissions@sukoonhealth.com</a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sukoon-sage text-[11px] font-semibold pt-2">
                <ShieldCheck size={16} /> 100% Confidential. Zero Judgement.
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-gray-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#293F3B]">Request Submitted</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Our clinical care manager will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <Button variant="primary" onClick={() => setSubmitted(false)} className="mt-4">
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#293F3B] mb-4">Request a Confidential Callback</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Care Required</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none bg-white focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20"
                    >
                     {Array.isArray(appointment_types) && appointment_types.map((t, idx) => (
                        <option key={idx} value={t}>{t}</option>
                    ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Preferred City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none bg-white focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20"
                    >
                      <option value="Gurugram">Gurugram (NCR)</option>
                      <option value="New Delhi">New Delhi (Chhatarpur)</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Message / Context (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what support you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none resize-none focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Confidential Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
