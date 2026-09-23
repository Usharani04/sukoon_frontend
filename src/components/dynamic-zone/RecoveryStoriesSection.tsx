"use client";

import React, { useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/types/content";

interface RecoveryStoriesSectionProps {
  badge?: string;
  heading: string;
  testimonials?: Testimonial[];
}

export const RecoveryStoriesSection: React.FC<RecoveryStoriesSectionProps> = ({
  badge,
  heading,
  testimonials = [],
}) => {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section className="py-20 sm:py-24 bg-[#133D36] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          {badge && (
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4A359]">
              {badge}
            </span>
          )}
          <h2
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#FFFFFF" }}
           >
          {heading}
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-10 sm:p-14 text-center">
            <Sparkles className="mx-auto text-[#D4A359]" size={24} />
            <p
              className="mt-6 font-serif text-2xl sm:text-3xl leading-snug"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
            {current.quote}
            </p>
            <div className="mt-8 text-sm text-white/70">
              {current.designation || current.name}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous story"
              className="h-11 w-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Story ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#D4A359]" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next story"
              className="h-11 w-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};