import React from "react";
import { faqsList } from "@/lib/mock-data";
import { FaqSection } from "@/components/dynamic-zone/FaqSection";

export const metadata = {
  title: "Frequently Asked Questions | Sukoon Health",
  description: "Find answers to questions about inpatient psychiatric admissions, insurance cashless claims, treatment duration, and MERA emergency services.",
};

export default function FaqsPage() {
  return (
    <div className="bg-white">
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqsList}
        show_view_all={false}
      />
    </div>
  );
}
