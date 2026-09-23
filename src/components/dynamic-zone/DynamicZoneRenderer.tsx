"use client";

import React from "react";
import { DynamicSection } from "@/types/content";
import { HeroSection } from "./HeroSection";
import { RightCareSection } from "../sections/RightCareSection";
import { AboutSection } from "./AboutSection";
import { TreatmentModelSection } from "./TreatmentModelSection";
import { ConditionCardsSection } from "./ConditionCardsSection";
import { EmergencySection } from "./EmergencySection";
import { LocationsSection } from "./LocationsSection";
import { TeamSection } from "./TeamSection";
import { InsuranceSection } from "./InsuranceSection";
import { TestimonialSection } from "./TestimonialSection";
import { RecoveryStoriesSection } from "./RecoveryStoriesSection";
import { FaqSection } from "./FaqSection";
import { ContactFormSection } from "./ContactFormSection";
import { BlogPreviewSection } from "./BlogPreviewSection";

interface DynamicZoneRendererProps {
  sections: DynamicSection[];
}

export const DynamicZoneRenderer: React.FC<DynamicZoneRendererProps> = ({ sections }) => {
  if (!sections || !Array.isArray(sections)) return null;

  return (
    <>
      {sections.map((sec, idx) => {
        switch (sec.__component) {
          case "sections.hero-section":
            return <HeroSection key={idx} {...sec} />;
          case "sections.care-pathways-section":
            return <RightCareSection key={idx} />;
          case "sections.about-section":
            return <AboutSection key={idx} {...sec} />;
          case "sections.treatment-model-section":
            return <TreatmentModelSection key={idx} {...sec} />;
          case "sections.condition-cards-section":
            return <ConditionCardsSection key={idx} {...sec} />;
          case "sections.emergency-section":
            return <EmergencySection key={idx} {...sec} />;
          case "sections.locations-section":
            return <LocationsSection key={idx} {...sec} />;
          case "sections.team-section":
            return <TeamSection key={idx} {...sec} />;
          case "sections.insurance-section":
            return <InsuranceSection key={idx} {...sec} />;
          case "sections.testimonial-section":
            return <TestimonialSection key={idx} {...sec} />;
          case "sections.recovery-stories-section":
            return <RecoveryStoriesSection key={idx} {...sec} />;
          case "sections.faq-section":
            return <FaqSection key={idx} {...sec} />;
          case "sections.contact-form-section":
            return <ContactFormSection key={idx} {...sec} />;
          case "sections.blog-preview-section":
            return <BlogPreviewSection key={idx} {...sec} />;
          default:
            return null;
        }
      })}
    </>
  );
};
