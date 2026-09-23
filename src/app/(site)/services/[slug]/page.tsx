import React from "react";
import { notFound } from "next/navigation";
import { fetchServiceBySlug, fetchServices } from "@/lib/strapi";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const services = await fetchServices();
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const service = await fetchServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <div className="bg-white">
      <div className="bg-[#293F3B] text-white py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/services" className="inline-flex items-center gap-1 text-xs text-sukoon-sage hover:underline mb-2">
            <ArrowLeft size={14} /> Back to all services
          </Link>
          <span className="block text-xs font-bold uppercase tracking-widest text-sukoon-horizon">
            {service.category} Specialty
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{service.name}</h1>
          <p className="text-white/80 text-base max-w-2xl">{service.summary}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        <div className="bg-[#F2F7F6] p-8 rounded-3xl border border-[#C6DDD9] space-y-4">
          <h2 className="text-xl font-bold text-[#293F3B]">How Sukoon Delivers {service.name}</h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Our inpatient treatment pathway combines continuous medical oversight, structured psychiatric psychotherapy, occupational therapy, and nutritional rehabilitation in an anti-ligature, secure environment.
          </p>
          <ul className="space-y-2.5 text-xs text-gray-700 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#3F7268]" />
              <span>Multi-disciplinary clinical reviews conducted every 24 hours.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#3F7268]" />
              <span>Dedicated Clinical Decision Manager (CDM) assigned to the family.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#3F7268]" />
              <span>100% Cashless Insurance coverage under MHCA 2017.</span>
            </li>
          </ul>
        </div>

        <div className="text-center pt-6">
          <Button variant="primary" size="lg" href="/contact-us">
            Book Confidential Admission Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}
