"use client";

import React from "react";
import { ShieldCheck, Activity, Users, Home, CheckCircle2, ArrowRight } from "lucide-react";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { IconFeature } from "@/types/content";

interface StatItem {
  id: number;
  number: string;
  label: string;
  sublabel?: string;
}

interface AboutSectionProps {
  heading: string;
  body?: any;
  icon_features?: IconFeature[];
  badge?: string;
  stats?: StatItem[];
  note?: string;
  button_label?: string;
  button_url?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  heading,
  body,
  icon_features = [],
  badge,
  stats = [],
  note,
  button_label,
  button_url,
}) => {
  return (
    <section className="py-20 bg-[#F9FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
         <div>
    <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
      {badge || "The Sukoon Difference"}
    </span>
    <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif text-[#293F3B] leading-tight">
      {heading}
    </h2>
  </div>
  <div className="text-gray-600 text-base leading-relaxed flex flex-col justify-center gap-4">
    {typeof body === "string" ? (
      <p>{body}</p>
    ) : Array.isArray(body) ? (
      <BlocksRenderer content={body} />
    ) : (
      <p>{String(body || "")}</p>
    )}
  </div>
</div>

        {/* Feature Cards Grid */}
        {icon_features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {icon_features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sukoon hover:shadow-sukoon-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F2F7F6] text-[#3F7268] flex items-center justify-center font-bold">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#293F3B]">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200 rounded-2xl bg-white">
            {stats.map((stat) => (
              <div key={stat.id} className="p-8">
                <p className="text-4xl font-extrabold text-[#293F3B]">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                {stat.sublabel && (
                  <p className="mt-1 text-xs text-gray-400">{stat.sublabel}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {note && (
          <p className="mt-4 text-xs text-gray-400">{note}</p>
        )}

{button_label && (
  <div className="mt-8">
       <a
      href={button_url || "#"}
      className="inline-flex items-center gap-2 rounded-full bg-[#293F3B] px-6 py-3 text-white text-sm font-semibold hover:bg-[#1f302c] transition"
       >
      {button_label}
      <ArrowRight size={16} />
    </a>
  </div>
)}
      </div>
    </section>
  );
};