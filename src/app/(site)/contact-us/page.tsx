import React from "react";
import { ContactFormSection } from "@/components/dynamic-zone/ContactFormSection";

export const metadata = {
  title: "Contact Us & Admissions | Sukoon Health",
  description: "Connect with our 24/7 clinical admissions helpdesk for confidential consultation and emergency triage.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactFormSection
        heading="Get in Touch with Our Clinical Team"
        description="Our clinical admissions team is available 24 hours a day, 7 days a week to support you and your family."
      />
    </div>
  );
}
