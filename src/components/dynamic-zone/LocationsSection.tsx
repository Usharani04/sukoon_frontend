"use client";

import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Location } from "@/types/content";

interface LocationsSectionProps {
  heading?: string;
  description?: string;
  locations?: Location[];
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  heading = "Find Your Nearest Sukoon",
  description = "Rehab and Mental Health Centres Across India",
  locations = [],
}) => {
  return (
    <section className="py-20 bg-[#FAF6EF]" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2
            className="text-4xl sm:text-5xl font-serif text-[#13443e] tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {heading}
          </h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/locations/${loc.slug}`}
              className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white hover:border-[#13443e] hover:shadow-lg transition flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={loc.hero_image}
                  alt={loc.name}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13443e]/40 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-[#13443e]">
                  <MapPin size={16} />
                  <span
                    className="font-serif text-xl"
                    style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                  >
                    {loc.name}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                </div>
                <div className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm text-[#13443e] font-medium">
                  Visit centre
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};