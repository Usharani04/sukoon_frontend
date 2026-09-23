import React from "react";
import { doctorsList } from "@/lib/mock-data";
import { TeamSection } from "@/components/dynamic-zone/TeamSection";

export const metadata = {
  title: "Our Doctors & Clinical Team | Sukoon Health",
  description: "Meet our senior psychiatrists, clinical psychologists, and clinical advisors dedicated to psychiatric recovery.",
};

export default function DoctorsPage() {
  return (
    <div className="bg-white">
      <TeamSection
        heading="Our Multidisciplinary Clinical Team"
        subheading="Over 75+ years of combined clinical psychiatry experience across premier Indian and international institutions."
        featured_doctors={doctorsList}
      />
    </div>
  );
}
