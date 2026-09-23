"use client";

import React, { useState } from "react";
import { X, CheckCircle, PhoneCall, Calendar, MapPin, User, ShieldCheck } from "lucide-react";
import { Button } from "./Button";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocation?: string;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultLocation = "gurugram",
  defaultService = "Inpatient Admission",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: defaultLocation,
    service: defaultService,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Modal Header */}
        <div className="bg-[#293F3B] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-2 text-sukoon-horizon text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck size={16} /> 100% Confidential & Secure
          </div>
          <h3 className="text-2xl font-bold text-white">Book a Consultation</h3>
          <p className="text-white/80 text-sm mt-1">
            Speak with our senior clinical admissions coordinators immediately.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-xl font-bold text-[#293F3B]">Consultation Requested</h4>
              <p className="text-gray-600 text-sm mt-2 max-w-sm mx-auto">
                Thank you. A Clinical Decision Manager will contact you at <strong>{formData.phone}</strong> within 15 minutes.
              </p>
              <div className="mt-6 p-4 bg-[#F2F7F6] rounded-xl text-left text-xs text-gray-700 flex items-start gap-3">
                <PhoneCall className="text-[#3F7268] flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <strong>Need immediate emergency retrieval?</strong>
                  <p>Call our 24/7 MERA hotline directly at <a href="tel:+918448156500" className="text-[#3F7268] font-bold underline">+91 8448156500</a></p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="primary" onClick={onClose} className="w-full">
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name (Patient or Caregiver)
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <PhoneCall className="absolute left-3.5 top-3 text-gray-400" size={18} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 text-gray-400" size={18} />
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20 text-sm outline-none bg-white transition-all"
                    >
                      <option value="gurugram">Gurugram (Sec 56)</option>
                      <option value="chhatarpur">South Delhi (Chhatarpur)</option>
                      <option value="bengaluru">Bengaluru (Koramangala)</option>
                      <option value="hyderabad">Hyderabad (Jubilee Hills)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Type of Care Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20 text-sm outline-none bg-white transition-all"
                >
                  <option value="Inpatient Admission">Acute Inpatient Psychiatric Admission</option>
                  <option value="De-addiction Rehab">De-addiction & Substance Rehabilitation</option>
                  <option value="Emergency MERA Retrieval">24/7 Emergency Retrieval (MERA)</option>
                  <option value="Psychiatrist Consultation">Senior Psychiatrist OPD Consultation</option>
                  <option value="Second Opinion">Second Opinion / Clinical Assessment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Brief Context / Current Situation (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you or your loved one are experiencing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#3F7268] focus:ring-2 focus:ring-[#3F7268]/20 text-sm outline-none resize-none transition-all"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                Request Immediate Clinical Callback
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
