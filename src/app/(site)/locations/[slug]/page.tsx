import React from "react";
import { notFound } from "next/navigation";
import { fetchLocationBySlug, fetchLocations } from "@/lib/strapi";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const locations = await fetchLocations();
  return locations.map((l) => ({ slug: l.slug }));
}

export default async function LocationDetailPage({ params }: PageProps) {
  const location = await fetchLocationBySlug(params.slug);
  if (!location) notFound();

  return (
    <div className="bg-white">
      <div className="bg-[#293F3B] text-white py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/locations" className="inline-flex items-center gap-1 text-xs text-sukoon-sage hover:underline mb-2">
            <ArrowLeft size={14} /> Back to all hospitals
          </Link>
          <span className="block text-xs font-bold uppercase tracking-widest text-sukoon-sage">
            NABH Accredited Hospital
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{location.name}</h1>
          <p className="text-white/80 text-base max-w-2xl">{location.short_description}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-8">
        <div className="h-72 w-full rounded-3xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url(" + location.hero_image + ")" }}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="bg-[#F9FBFA] p-6 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="text-sm font-bold text-[#293F3B]">Hospital Address</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{location.full_address}</p>
          </div>
          <div className="bg-[#F9FBFA] p-6 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="text-sm font-bold text-[#293F3B]">24/7 Admissions Desk</h3>
            <p className="text-xs text-gray-600">Direct hospital line: {location.phone}</p>
            <a href={"tel:" + location.phone} className="inline-block text-xs font-bold text-[#3F7268] hover:underline mt-2">
              Call Admissions Now
            </a>
          </div>
        </div>

        <div className="text-center pt-8">
          <Button variant="primary" size="lg" href="/contact-us">
            Book Inpatient Admission at {location.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
