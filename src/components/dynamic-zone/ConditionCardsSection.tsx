"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ConditionCard {
  name: string;
  description?: string;
  link: string;
}

interface ConditionCardsSectionProps {
  heading?: string;
  cards?: ConditionCard[];
}

export const ConditionCardsSection: React.FC<ConditionCardsSectionProps> = ({
  heading = "Our Clinical Expertise",
  cards = [],
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1); // Default Schizophrenia selected as in screenshot

  const defaultCards: ConditionCard[] = [
    { name: "Depressive Disorders", link: "/conditions/depression" },
    { name: "Schizophrenia", link: "/conditions/schizophrenia" },
    { name: "Bipolar Disorders", link: "/conditions/bipolar-disorder" },
    { name: "Alcohol & Drug Addiction", link: "/conditions/substance-use" },
    { name: "Psychosis", link: "/conditions/schizophrenia" },
    { name: "Severe Anxiety Disorders", link: "/conditions/anxiety" },
    { name: "Personality Disorders", link: "/conditions/ocd" },
  ];

  const displayCards = cards.length > 0 ? cards : defaultCards;

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12 text-left">
          <h2 
            className="text-4xl sm:text-5xl font-serif text-[#13443e] tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {heading}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We specialise in inpatient psychiatric care for severe mental health disorders in India.
          </p>
        </div>

        {/* Cards Grid matching Image 1 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayCards.map((card, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <Link
                key={idx}
                href={card.link || "#"}
                onClick={() => setSelectedIndex(idx)}
                className={`bg-white p-6 rounded-2xl border transition-all duration-200 flex items-center justify-between group shadow-sm ${
                  isSelected
                    ? "border-[#13443e] ring-1 ring-[#13443e]"
                    : "border-gray-200/80 hover:border-[#13443e]/50 hover:shadow-md"
                }`}
              >
                <span className="text-base font-semibold text-gray-800 group-hover:text-[#13443e] transition-colors">
                  {card.name}
                </span>
                <ArrowRight
                  size={18}
                  className={`text-gray-400 group-hover:text-[#13443e] group-hover:translate-x-1 transition-all ${
                    isSelected ? "text-[#13443e]" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Bottom Explore More Link */}
        <div className="mt-10">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 underline underline-offset-4 hover:text-[#13443e] transition-colors"
          >
            <span>Explore More</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
