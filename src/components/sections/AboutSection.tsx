"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface AboutSectionProps {
  data?: {
    heading?: string;
    body?: string;
    stats?: { value: string; label: string }[];
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const heading = data?.heading || "Psychiatric care in India has a new standard. We built it.";
  const body = data?.body || "At Sukoon, we believe recovery is science. One that demands evidence — consistency, transparency, and accountability. These principles shape our ecosystem of care: our chain of Inpatient Acute Psychiatry Hospitals and Rehabilitation Centre in India. We are with you every step of the way.";

  return (
    <section className="py-16 sm:py-24 bg-gray-50 text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#13443e]">
            About Sukoon
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {body}
          </p>
        </div>

        {/* 3 Stat Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <div className="text-4xl font-extrabold text-[#13443e]">84%</div>
            <p className="text-sm font-medium text-gray-700 leading-snug">
              Individuals stayed committed to their recovery journey.*
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <div className="text-4xl font-extrabold text-[#13443e]">50%</div>
            <p className="text-sm font-medium text-gray-700 leading-snug">
              Faster recovery with outcomes equal to global benchmarks.*
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
            <div className="text-4xl font-extrabold text-[#13443e]">3.4</div>
            <p className="text-sm font-medium text-gray-700 leading-snug">
              WHO Responsiveness Score.*
            </p>
          </div>
        </div>

        {/* Footnote & Learn More Link */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-xs text-gray-500">
          <p className="italic">
            *Based on internal outcome evaluations, treatment observations, and patient feedback.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=14fHdoxmcepD7Hr7A8FJzWyjfI1_9t4Al"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#13443e] font-bold hover:underline text-sm"
          >
            <span>Learn More</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
