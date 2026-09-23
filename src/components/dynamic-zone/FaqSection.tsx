"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { FaqItem } from "@/types/content";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const C = {
  bg: "#FDFAF3",
  green: "#1B3D33",
  question: "#2C3A33",
  answer: "#3E5A50",
  divider: "#E6E0D2",
  chevron: "#4B4B44",
};

interface FaqSectionProps {
  heading?: string;
  show_view_all?: boolean;
  button_label?: string;
  button_url?: string;
  // The relation field name can differ in Strapi, so all common names are accepted
  faqs?: FaqItem[];
  faq_items?: FaqItem[];
  faq_list?: FaqItem[];
  faq_item?: FaqItem[];
  questions?: FaqItem[];
}

// Strapi "Rich text (Blocks)" comes back as an array; plain text comes back as a string.
const answerToText = (answer: unknown): string => {
  if (typeof answer === "string") return answer;
  if (Array.isArray(answer)) {
    return answer
      .map((block: any) =>
        Array.isArray(block?.children)
          ? block.children.map((c: any) => c?.text ?? "").join("")
          : ""
      )
      .filter(Boolean)
      .join("\n\n");
  }
  return "";
};

export const FaqSection: React.FC<FaqSectionProps> = ({
  heading,
  show_view_all = true,
  button_label,
  button_url,
  faqs,
  faq_items,
  faq_list,
  faq_item,
  questions,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items: FaqItem[] = faqs ?? faq_items ?? faq_list ?? faq_item ?? questions ?? [];

  if (items.length === 0) {
    // Visible hint while developing; renders nothing in production
    if (process.env.NODE_ENV !== "production") {
      return (
        <section style={{ backgroundColor: C.bg, padding: 40, textAlign: "center" }}>
          FAQ section: no FAQ items received from Strapi. Link and publish FAQ entries
          in the Homepage → FAQ Section, and check the relation field name.
        </section>
      );
    }
    return null;
  }

  return (
    <section
      id="faqs"
      className={`${sans.className} py-20 sm:py-24`}
      style={{ backgroundColor: C.bg }}
    >
      <div className="mx-auto max-w-[900px] px-5 sm:px-6">
        {/* Heading (from Strapi) */}
        {heading && (
          <h2
            className={`${serif.className} text-center text-[38px] font-normal leading-[1.1] tracking-[0.01em] sm:text-[52px] lg:text-[58px]`}
            style={{ color: C.green }}
          >
            {heading}
          </h2>
        )}

        {/* Accordion (questions and answers from Strapi) */}
        <div className="mt-12 sm:mt-16">
          {items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const answer = answerToText(faq.answer);
            return (
              <div
                key={faq.id ?? idx}
                className="border-b"
                style={{ borderColor: C.divider }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-[26px]"
                >
                  <span
                    className={`${serif.className} text-[19px] font-medium leading-snug sm:text-[21px]`}
                    style={{ color: C.question }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: C.chevron }}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="whitespace-pre-line pb-6 pr-8 text-[15px] leading-relaxed sm:text-base"
                      style={{ color: C.answer }}
                    >
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Read More button (toggle, label and link from Strapi) */}
        {show_view_all && (
          <div className="mt-12 flex justify-center">
            <Link
              href={button_url || "/faqs"}
              className="inline-flex h-[62px] items-center gap-2.5 rounded-full border px-9 text-base font-medium transition-colors hover:text-white"
              style={{ borderColor: C.green, color: C.green }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.green)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {button_label || "Read More"}
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};