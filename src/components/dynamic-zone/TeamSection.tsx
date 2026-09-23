"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { Doctor } from "@/types/content";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const C = {
  bg: "#F6F1E7",
  green: "#154238",
  text: "#3E5A50",
  border: "#E4DFD2",
  placeholder: "#DEDDD3",
  placeholderLetter: "#A9AFA4",
};

const DEFAULT_HEADING = "Our Multidisciplinary Team of Mental Health Experts";
const DEFAULT_SUBHEADING =
  "Led by India's brightest minds, our teams work together within a shared framework, ensuring every aspect of your treatment is aligned towards holistic recovery.";

const MAX_CARDS = 4; // doctors shown per role
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

// Used only if Strapi sends no role_filters
const DEFAULT_FILTERS = [
  "Clinical Leads",
  "Psychiatrists",
  "Psychologists",
  "Occupational Therapists",
  "PSWs",
  "Art-Based Therapists",
  "Nursing",
  "Clinical Advisory Board",
];

interface TeamSectionProps {
  heading?: string;
  subheading?: string;
  role_filters?: (string | { label?: string; name?: string })[];
  featured_doctors?: Doctor[];
}

/* ---------- helpers ---------- */

// "Occupational Therapists" and "Occupational Therapist" must match each other
const norm = (s: unknown) =>
  String(s ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/s$/, "");

const roleOf = (d: any): string => {
  const r = d?.role;
  if (typeof r === "string") return r;
  return r?.name || r?.title || r?.label || "";
};

const getMediaUrl = (media: unknown): string | null => {
  if (!media) return null;
  const m = media as { url?: string; data?: { attributes?: { url?: string } } };
  const url = typeof media === "string" ? media : m.url ?? m.data?.attributes?.url;
  if (!url) return null;
  return url.startsWith("http") ? url : STRAPI_URL + url;
};

// bio can be plain text or Strapi rich text (blocks)
const toText = (v: unknown): string => {
  if (typeof v === "string") return v;
  if (Array.isArray(v)) {
    return v
      .map((b: any) =>
        Array.isArray(b?.children) ? b.children.map((c: any) => c?.text ?? "").join("") : ""
      )
      .filter(Boolean)
      .join(" ");
  }
  return "";
};

// One letter, skipping titles: "Dr. Somnath Chatterji" -> "S"
const initial = (name?: string) =>
  (name || "")
    .replace(/^(dr|prof|mr|mrs|ms)\.?\s+/i, "")
    .trim()
    .charAt(0)
    .toUpperCase();

/* ---------- component ---------- */

export const TeamSection: React.FC<TeamSectionProps> = ({
  heading,
  subheading,
  role_filters,
  featured_doctors = [],
}) => {
  const [doctors, setDoctors] = useState<Doctor[]>(featured_doctors || []);
  const [activeIdx, setActiveIdx] = useState(0);

  // Load all doctors with photos (populate=*). Falls back to featured_doctors.
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(STRAPI_URL + "/api/doctors?populate=*&pagination[pageSize]=100", {
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (json && Array.isArray(json.data) && json.data.length > 0) {
          setDoctors(json.data);
        }
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  const parsed = (role_filters || [])
    .map((f) => (typeof f === "string" ? f : f?.label || f?.name || ""))
    .filter((f) => f !== "");
  const filters = parsed.length > 0 ? parsed : DEFAULT_FILTERS;

  const activeLabel = filters[activeIdx] || filters[0];
  const visible = doctors
    .filter((d) => norm(roleOf(d)) === norm(activeLabel))
    .slice(0, MAX_CARDS);

  return (
    <section
      id="team"
      className={sans.className + " py-16 sm:py-20"}
      style={{ backgroundColor: C.bg }}
    >
      {/* right-to-left entrance animation */}
      <style>{`
        @keyframes teamSlideIn {
          from { opacity: 0; transform: translateX(90px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .team-card { animation: teamSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .team-card { animation: none !important; }
        }
      `}</style>

      {/* 1444px max minus 32px padding each side = 1380px content, centered */}
      <div className="mx-auto max-w-[1444px] px-5 sm:px-8">
        {/* Heading */}
        <h2
          className={
            serif.className +
            " text-[36px] font-normal leading-[1.1] sm:text-[48px] lg:text-[60px]"
          }
          style={{ color: C.green }}
        >
          {heading || DEFAULT_HEADING}
        </h2>

        <p
          className="mt-4 max-w-[820px] text-[18px] leading-[1.5] sm:text-[20px]"
          style={{ color: C.text }}
        >
          {subheading || DEFAULT_SUBHEADING}
        </p>

        <div className="mt-8">
          <Link
            href="/doctors"
            className="inline-block border-b pb-1.5 text-[18px] font-medium sm:text-[20px]"
            style={{ color: C.green, borderColor: "rgba(21,66,56,0.5)" }}
          >
            Meet The Team
          </Link>
        </div>

        {/* Role pills */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {filters.map((label, i) => {
            const active = i === activeIdx;
            return (
              <button
                key={label + i}
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-pressed={active}
                className="rounded-full border px-5 py-[11px] text-[16px] font-medium transition"
                style={{
                  backgroundColor: active ? C.green : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#2C3A33",
                  borderColor: active ? C.green : C.border,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Doctor cards: key forces the animation to replay on every filter change */}
        <div className="mt-[60px] overflow-x-clip">
          {visible.length === 0 ? (
            <p className="py-10 text-[16px]" style={{ color: C.text }}>
              No specialists listed in this category yet.
            </p>
          ) : (
            <div
              key={activeLabel}
              className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4"
            >
              {visible.map((doc, i) => {
                const photo = getMediaUrl((doc as any).photo);
                const hasPhoto = !!photo;
                const bio = toText((doc as any).bio);
                return (
                  <Link
                    key={doc.id ?? i}
                    href={"/doctors/" + doc.slug}
                    className="team-card group relative block aspect-[4/5] overflow-hidden rounded-2xl"
                    style={{
                      animationDelay: i * 110 + "ms",
                      backgroundColor: hasPhoto ? undefined : C.placeholder,
                    }}
                  >
                    {hasPhoto ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo!}
                          alt={doc.name}
                          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        {/* Dark gradient so text is readable on photos */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(8,24,20,0.92) 0%, rgba(8,24,20,0.55) 42%, rgba(8,24,20,0) 70%)",
                          }}
                        />
                      </>
                    ) : (
                      <div
                        className={
                          serif.className +
                          " absolute inset-x-0 top-0 flex h-[55%] items-center justify-center text-[88px]"
                        }
                        style={{ color: C.placeholderLetter }}
                      >
                        {initial(doc.name)}
                      </div>
                    )}

                    {/* Role badge */}
                    <span
                      className={
                        "absolute left-5 top-5 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wide " +
                        (hasPhoto
                          ? "border-white/40 bg-white/25 text-white backdrop-blur-sm"
                          : "border-[#154238]/25 bg-white/70 text-[#154238]")
                      }
                    >
                      {roleOf(doc) || activeLabel}
                    </span>

                    {/* Text: white on photos, dark green on the light placeholder */}
                    <div
                      className="absolute inset-x-0 bottom-0 p-6"
                      style={{ color: hasPhoto ? "#FFFFFF" : C.green }}
                    >
                      <h3
                        className={
                          serif.className + " text-[26px] font-medium leading-tight"
                        }
                      >
                        {doc.name}
                      </h3>
                      {doc.qualifications ? (
                        <p className="mt-1 text-[14px] opacity-80">{doc.qualifications}</p>
                      ) : null}
                      {doc.experience_years ? (
                        <p className="mt-1 text-[13px] opacity-70">
                          {doc.experience_years}+ years experience
                        </p>
                      ) : null}
                      {bio ? (
                        <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed opacity-85">
                          {bio}
                        </p>
                      ) : null}
                      <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold">
                        View Dedicated Page
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};