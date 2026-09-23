import React from "react";
import { locationsList } from "@/lib/mock-data";
import { LocationsSection } from "@/components/dynamic-zone/LocationsSection";

export const metadata = {
  title: "Our Hospitals & Facilities | Sukoon Health",
  description: "Explore Sukoon Health psychiatric hospitals in Gurugram, South Delhi (Chhatarpur), Bengaluru, and Hyderabad.",
};

export default function LocationsPage() {
  return (
    <div className="bg-white">
      <LocationsSection
        heading="Our Network of Psychiatric Hospitals"
        description="State-of-the-art NABH-accredited acute psychiatry centers in Gurugram, Delhi, Bengaluru, and Hyderabad."
        locations={locationsList}
      />
    </div>
  );
}
