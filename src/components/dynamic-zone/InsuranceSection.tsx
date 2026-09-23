"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { InsurancePartner } from "@/types/content";

interface InsuranceSectionProps {
  heading: string;
  badge?: string;
  partners?: InsurancePartner[];
}

export const InsuranceSection: React.FC<InsuranceSectionProps> = ({
  heading,
  badge,
  partners = [],
}) => {
  return (
    <section className="py-16 bg-[#F2F7F6] border-y border-[#C6DDD9]" id="insurance">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
              {badge || "Cashless Hospitalization"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#293F3B] leading-tight">
              {heading}
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-200">
            <div className="h-10 w-10 shrink-0 rounded-full bg-[#F2F7F6] flex items-center justify-center">
              <ShieldCheck size={20} className="text-[#3F7268]" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-gray-800 block">Instant Pre-Authorization Support</span>
              <span className="text-gray-500">Dedicated on-campus TPA desk</span>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {partners.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-xl border border-gray-200/80 text-center flex items-center justify-center font-bold text-xs text-gray-700 shadow-sm hover:border-[#3F7268] transition-colors"
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};