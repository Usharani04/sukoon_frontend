"use client";

import React, { useState } from "react";
import { PhoneCall, MessageCircle, AlertTriangle } from "lucide-react";
import { AppointmentModal } from "../ui/AppointmentModal";

export const EmergencyFloatingBanner: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <aside aria-label="Emergency and Support Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Quick Link */}
        <a
          href="https://wa.me/918448156500"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
          title="WhatsApp Support"
        >
          <MessageCircle size={22} />
        </a>

        {/* 24/7 Psychiatric Emergency Call Badge */}
        <a
          href="tel:+918448156500"
          className="bg-[#293F3B] hover:bg-[#1E3330] text-white pl-4 pr-5 py-3 rounded-full shadow-xl border border-white/20 flex items-center gap-3 transition-transform hover:scale-105 group"
        >
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center animate-pulse">
            <PhoneCall size={16} className="text-white" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-[10px] uppercase font-bold text-sukoon-sage tracking-wider">
              24/7 Psychiatric Crisis
            </div>
            <div className="text-xs font-extrabold text-white">
              +91 8448156500
            </div>
          </div>
        </a>
      </aside>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
