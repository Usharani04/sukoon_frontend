"use client";

import React, { useState } from "react";
import { Users, Star, ShieldCheck, Award, ArrowRight, Shield } from "lucide-react";
import { AppointmentModal } from "../ui/AppointmentModal";
import { StatItem, CtaButton } from "@/types/content";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  background_image?: string;
  stats?: StatItem[];
  cta?: CtaButton;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heading = "Building the future of Mental Healthcare in India",
  subheading = "Inpatient Psychiatric Hospitals & Addiction Rehabilitation Centre. Our Multidisciplinary Team of mental health experts bring 75+ years of combined experience to your recovery journey.",
  background_image,
  cta,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Warm ambient room background with large glass windows matching screenshot
  const bgUrl = background_image || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex flex-col justify-between overflow-hidden bg-[#13443e]">
      {/* Background Image with warm dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${bgUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30 lg:from-black/75 lg:via-black/45 lg:to-transparent" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-2xl space-y-5">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-semibold tracking-wider text-amber-200 uppercase">
            <Shield size={12} className="text-amber-300" />
            <span>TRUSTED SINCE 2011</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {heading}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-xl">
            {subheading}
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#13443e] font-semibold text-sm tracking-wide hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <span>{cta?.label || "Connect With Us"}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Floating Google Review Badge (Bottom Right) */}
        <div className="absolute bottom-8 right-6 hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 px-4 rounded-xl shadow-2xl border border-white/20">
          <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-blue-600 text-xs">
            G
          </div>
          <div className="text-xs">
            <div className="font-semibold text-gray-800">Find us on Google Reviews</div>
            <div className="flex items-center gap-1.5 text-amber-500 font-bold">
              <span>4.8</span>
              <div className="flex text-amber-400 text-[10px]">★★★★★</div>
              <span className="text-gray-500 font-normal text-[11px]">125+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Dark Green Stat Bar matching media_1789545977391.png exactly */}
      <div className="relative z-10 w-full bg-[#123630] border-t border-white/10 py-4 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 items-center justify-between text-center md:text-left">
            {/* 1. 85K+ People Treated */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-3">
              <Users size={18} className="text-amber-300 flex-shrink-0" />
              <span className="font-medium tracking-wide">
                <strong className="font-bold text-white">85K+</strong> People Treated
              </span>
            </div>

            {/* 2. 4.8 Rating */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-3 md:border-l md:border-white/10">
              <Star size={18} className="text-amber-300 flex-shrink-0" />
              <span className="font-medium tracking-wide">
                <strong className="font-bold text-white">4.8</strong> Rating
              </span>
            </div>

            {/* 3. NABH Accredited */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-3 md:border-l md:border-white/10">
              <ShieldCheck size={18} className="text-amber-300 flex-shrink-0" />
              <span className="font-medium tracking-wide text-white">
                NABH Accredited
              </span>
            </div>

            {/* 4. ET Healthcare Awardee */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 px-3 md:border-l md:border-white/10">
              <Award size={18} className="text-amber-300 flex-shrink-0" />
              <span className="font-medium tracking-wide text-white">
                ET Healthcare Awardee
              </span>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
