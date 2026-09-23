"use client";

import React, { useState } from "react";
import { Quote, Star, CheckCircle2 } from "lucide-react";
import { Testimonial } from "@/types/content";

interface TestimonialSectionProps {
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
  youtube_url?: string;
}

function getYoutubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  const videoId = match ? match[1] : url;
  return `https://www.youtube.com/embed/${videoId}`;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  heading = "Sukoon Recovery Stories",
  description,
  testimonials = [],
  youtube_url,
}) => {
  const [filter, setFilter] = useState<"all" | "patient" | "clinical_expert">("all");

  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Family of an Inpatient",
      designation: "Gurugram Inpatient Ward",
      organization: "Bipolar Mania Recovery",
      quote: "When my son experienced an acute manic episode, we were terrified and lost. Sukoon did not judge us; they gave us a clear 14-day clinical roadmap. The transparency, daily updates from the Clinical Care Manager, and respectful environment changed everything.",
      type: "patient",
    },
    {
      id: 2,
      name: "Consultant Psychiatrist",
      designation: "MRCPsych, London",
      organization: "Referring Clinician",
      quote: "Sukoon has elevated behavioral healthcare in India to global standards. Their adherence to evidence-based A2R+ care protocols and independent verification by WHO reviewers gives me total confidence when referring patients.",
      type: "clinical_expert",
    },
    {
      id: 3,
      name: "Caregiver - Spouse",
      designation: "South Delhi Hospital",
      organization: "Depression & Anxiety Care",
      quote: "The MERA emergency team was prompt, gentle, and profoundly professional during our crisis. Sukoon treated my wife as a human being first, not just a psychiatric diagnosis.",
      type: "patient",
    },
  ];

  const list = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const filtered = filter === "all" ? list : list.filter((t) => t.type === filter);

  return (
    <section className="py-20 bg-white border-b border-gray-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {!youtube_url && (
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
              REAL IMPACT
            </div>
          )}
          <h2
            className="text-4xl sm:text-5xl font-serif text-[#13443e] tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {heading}
          </h2>
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Video takes over the whole section when provided */}
        {youtube_url ? (
          <div className="max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <iframe
              className="h-full w-full"
              src={getYoutubeEmbedUrl(youtube_url)}
              title={heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <>
            {/* Interactive Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setFilter("all")}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  filter === "all"
                    ? "bg-[#13443e] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Recovery Stories
              </button>
              <button
                onClick={() => setFilter("patient")}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  filter === "patient"
                    ? "bg-[#13443e] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Patient & Caregiver Stories
              </button>
              <button
                onClick={() => setFilter("clinical_expert")}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  filter === "clinical_expert"
                    ? "bg-[#13443e] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Clinical Expert Reviews
              </button>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {filtered.map((t, idx) => (
                <div
                  key={t.id || idx}
                  className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Quote size={28} className="text-[#13443e]/40 group-hover:text-[#13443e] transition-colors" />
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light italic">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-6 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-serif font-bold text-gray-900">{t.name}</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">{t.organization || t.designation}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#E8F2EE] text-[#13443e] flex items-center justify-center font-bold text-xs">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};