"use client";

import React from "react";
import { Clock, UserCheck, Stethoscope, DoorOpen, Scale, FileCheck, Phone } from "lucide-react";
import { CtaButton, IconFeature } from "@/types/content";

interface EmergencySectionProps {
  heading: string;
  tagline?: string;
  description?: string;
  icon_features?: IconFeature[];
  cta?: CtaButton;
  note?: string;
}

const icons = [Clock, UserCheck, Stethoscope, DoorOpen, Scale, FileCheck];

export const EmergencySection: React.FC<EmergencySectionProps> = ({
  heading,
  tagline,
  description,
  icon_features = [],
  cta,
  note,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#133D36] text-white p-10 sm:p-14">
          <div className="max-w-3xl">
            <h2
              className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight text-[#D4A359]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {heading}
            </h2>
            {tagline && (
              <p className="mt-4 text-xl sm:text-2xl text-white/90 leading-snug">
                {tagline}
              </p>
            )}
            {description && (
              <p className="mt-5 text-white/80 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {icon_features.length > 0 && (
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {icon_features.map((feature, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-lg border border-white/15 bg-white/5 p-5"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-full bg-[#D4A359]/15 flex items-center justify-center">
                      <Icon size={18} className="text-[#D4A359]" />
                    </div>
                    <span className="text-sm leading-snug pt-1.5">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {(cta || note) && (
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              {cta && (
                <a
                  href={cta.url}
                  className="inline-flex items-center gap-2 rounded-full bg-[#D4A359] text-[#133D36] px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition"
                >
                  <Phone size={16} />
                  <span>{cta.label}</span>
                </a>
              )}
              {note && (
                <p className="text-xs text-white/70 max-w-2xl leading-relaxed">
                  {note}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};