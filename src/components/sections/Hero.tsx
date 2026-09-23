"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { AppointmentModal } from "../ui/AppointmentModal";

interface HeroProps {
  data?: {
    heading?: string;
    subheading?: string;
    background_image?: string;
    stats?: { number: string; label: string }[];
    cta?: { label: string; url?: string };
  };
}

export const HeroSection: React.FC<HeroProps> = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const heading = data?.heading || "Building the future of Mental Healthcare in India";
  const subheading = data?.subheading || "Inpatient Psychiatric Hospitals & Addiction Rehabilitation Centre. Our Multidisciplinary Team of mental health experts bring 75+ years of combined experience to your recovery journey.";

  const stats = data?.stats && data.stats.length > 0 ? data.stats : [
    { number: "85K+", label: "People Treated" },
    { number: "4.8", label: "Overall Rating" },
    { number: "NABH", label: "Accredited" },
    { number: "ET Healthcare", label: "Awardee" },
  ];

  const bgUrl = data?.background_image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex flex-col justify-between overflow-hidden bg-[#13443e] text-white">
      {/* Background image & gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${bgUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 lg:from-black/80 lg:via-black/50 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-2xl space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-emerald-200 uppercase">
            <span>Trusted Since 2011</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {heading}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            {subheading}
          </p>

          {/* Action Row */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3 rounded-lg bg-[#13443e] hover:bg-[#1a554e] text-white font-bold text-sm transition-all shadow-md active:scale-95"
            >
              {data?.cta?.label || "Connect With Us"}
            </button>

            {/* Google Reviews Badge */}
            <a 
              href="https://www.google.com/search?q=sukoon+health+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white hover:bg-white/20 transition-all"
            >
              <div className="flex items-center text-amber-400">
                <Star size={14} className="fill-current" />
              </div>
              <span className="font-bold text-sm">4.8</span>
              <span className="text-white/80">Find us on Google Reviews (125+ reviews)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stat Pills Footer Row */}
      <div className="relative z-10 w-full bg-black/40 backdrop-blur-md border-t border-white/15 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 items-center">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className={`flex flex-col items-center md:items-start text-center md:text-left px-4 ${
                  idx !== 0 ? "md:border-l md:border-white/20" : ""
                }`}
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm text-white/85 font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
