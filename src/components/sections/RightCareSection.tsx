"use client";

import React from "react";
import Link from "next/link";
import { Brain, Heart, ArrowRight } from "lucide-react";

export const RightCareSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5] text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            BUILT FOR RECOVERY
          </div>
          <h2 
            className="text-4xl sm:text-5xl font-serif text-[#13443e] tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Find the Right Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Inpatient Psychiatric Hospitals */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F2EE] text-[#13443e] flex items-center justify-center">
                <Brain size={20} />
              </div>
              <h3 
                className="text-2xl sm:text-3xl font-serif text-[#13443e]"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Inpatient Psychiatric Hospitals
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Evidence-based residential psychiatric care for individuals with severe mental health disorders.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">LOCATIONS</div>
                <div className="text-xs font-bold text-gray-800 mt-0.5">Gurugram, Bengaluru & Hyderabad</div>
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#13443e] transition-colors"
              >
                <span>Take Virtual Tour</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2: Addiction Rehabilitation Centre */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F2EE] text-[#13443e] flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h3 
                className="text-2xl sm:text-3xl font-serif text-[#13443e]"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Addiction Rehabilitation Centre
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Structured residential recovery for addiction, with specialised detoxification and multidisciplinary support.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">LOCATION</div>
                <div className="text-xs font-bold text-gray-800 mt-0.5">Chhatarpur, New Delhi</div>
              </div>
              <Link
                href="/locations/chhatarpur"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#13443e] transition-colors"
              >
                <span>Take Virtual Tour</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
