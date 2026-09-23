"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/types/content";

interface TreatmentModelProps {
  heading?: string;
  description?: string;
  cta?: CtaButton;
}

export const TreatmentModelSection: React.FC<TreatmentModelProps> = ({
  heading = "Our Proprietary Models",
  description = "Four-phase, evidence-based pathways for psychiatric and addiction recovery.",
}) => {
  return (
    <section className="py-20 bg-[#133D36] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#D4A359]">
            EVIDENCE-BASED PATHWAYS
          </div>
          <h2 
            className="text-4xl sm:text-5xl font-serif text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {heading}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* 2 Large Model Cards matching Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: A2R+ */}
          <div className="bg-[#1C4A42] p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4A359]">
                ACUTE PSYCHIATRY CARE MODEL
              </div>
              <h3 
                className="text-4xl sm:text-5xl font-serif text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                A2R+
              </h3>
              <p className="text-lg text-white/90 font-serif">
                Acute to Recovery Plus
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about-us#clinical-models"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4A359] hover:bg-[#c39347] text-[#133D36] font-bold text-xs tracking-wide transition-all shadow-md active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2: D2R+ */}
          <div className="bg-[#1C4A42] p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4A359]">
                DE-ADDICTION CARE MODEL
              </div>
              <h3 
                className="text-4xl sm:text-5xl font-serif text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                D2R+
              </h3>
              <p className="text-lg text-white/90 font-serif">
                Detox to Relapse-Free
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about-us#clinical-models"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4A359] hover:bg-[#c39347] text-[#133D36] font-bold text-xs tracking-wide transition-all shadow-md active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner Card */}
        <div className="bg-[#1C4A42] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h4 
            className="text-2xl sm:text-3xl font-serif text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Yes, Our Models Work.
          </h4>
          <Link
            href="/about-us#clinical-models"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-gray-100 text-[#133D36] font-bold text-xs tracking-wide transition-all shadow-md active:scale-95"
          >
            <span>We Measured It</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
