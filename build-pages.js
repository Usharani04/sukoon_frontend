const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'src', 'app', '(site)');

function writePage(relPath, content) {
  const target = path.join(base, relPath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, 'utf8');
  console.log('Created:', target);
}

// 1. Services index
writePage('services/page.tsx', `import React from "react";
import Link from "next/link";
import { servicesList } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Clinical Services & Specialties | Sukoon Health",
  description: "Comprehensive inpatient acute psychiatry, substance rehabilitation, women's mental health wing, and intensive care.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 bg-[#F9FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
            Clinical Specialties
          </span>
          <h1 className="text-4xl font-extrabold text-[#293F3B]">
            Comprehensive Inpatient & Acute Psychiatric Services
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            NABH-accredited facilities with 24/7 psychiatric medical monitoring, structured therapy pathways, and dedicated recovery suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sukoon hover:shadow-sukoon-hover transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F2F7F6] text-[#3F7268]">
                  {srv.category}
                </span>
                <h3 className="text-xl font-bold text-[#293F3B]">{srv.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{srv.summary}</p>
              </div>

              <div className="pt-6 mt-4 border-t border-gray-50 flex items-center justify-between">
                <Link
                  href={"/services/" + srv.slug}
                  className="text-xs font-bold text-[#3F7268] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

// 2. Service detail
writePage('services/[slug]/page.tsx', `import React from "react";
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
`);

// 3. Conditions index
writePage('conditions/page.tsx', `import React from "react";
import Link from "next/link";
import { disordersList } from "@/lib/mock-data";
import { Brain, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Conditions We Treat | Sukoon Health",
  description: "Specialized psychiatric treatment pathways for Bipolar Disorder, Depression, Schizophrenia, OCD, Anxiety, and Addiction.",
};

export default function ConditionsPage() {
  return (
    <div className="py-16 bg-[#F9FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
            Specialized Care
          </span>
          <h1 className="text-4xl font-extrabold text-[#293F3B]">
            Conditions We Treat
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Every condition has a clear, evidence-based care roadmap designed to restore functionality and achieve measurable remission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disordersList.map((disorder) => (
            <div
              key={disorder.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sukoon hover:shadow-sukoon-hover transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F2F7F6] text-[#3F7268] flex items-center justify-center">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#293F3B]">{disorder.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{disorder.summary}</p>
              </div>

              <div className="pt-6 mt-4 border-t border-gray-50">
                <Link
                  href={"/conditions/" + disorder.slug}
                  className="text-xs font-bold text-[#3F7268] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Explore treatment protocol</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`);

// 4. Condition detail
writePage('conditions/[slug]/page.tsx', `import React from "react";
import { notFound } from "next/navigation";
import { fetchDisorderBySlug, fetchDisorders } from "@/lib/strapi";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const disorders = await fetchDisorders();
  return disorders.map((d) => ({ slug: d.slug }));
}

export default async function DisorderDetailPage({ params }: PageProps) {
  const disorder = await fetchDisorderBySlug(params.slug);
  if (!disorder) notFound();

  return (
    <div className="bg-white">
      <div className="bg-[#293F3B] text-white py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/conditions" className="inline-flex items-center gap-1 text-xs text-sukoon-sage hover:underline mb-2">
            <ArrowLeft size={14} /> Back to all conditions
          </Link>
          <span className="block text-xs font-bold uppercase tracking-widest text-sukoon-horizon">
            Evidence-Based Care Pathway
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{disorder.name}</h1>
          <p className="text-white/80 text-base max-w-2xl">{disorder.summary}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        {disorder.symptoms && (
          <div className="bg-[#F9FBFA] p-8 rounded-3xl border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-[#293F3B]">Common Clinical Indicators & Symptoms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {disorder.symptoms.map((s, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <CheckCircle2 size={16} className="text-[#3F7268] flex-shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-8 rounded-3xl bg-[#F2F7F6] border border-[#C6DDD9] space-y-4">
          <h3 className="text-lg font-bold text-[#293F3B]">The Sukoon Recovery Protocol for {disorder.name}</h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Our treatment approach integrates precision pharmacology, cognitive behavioral therapies, circadian rhythm stabilization, and continuous family coordination. Outcomes are tracked every 48 hours using standardized global scales.
          </p>
        </div>

        <div className="text-center pt-4">
          <Button variant="primary" size="lg" href="/contact-us">
            Consult a Specialist for {disorder.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
`);

// 5. Doctors index
writePage('doctors/page.tsx', `import React from "react";
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
`);

// 6. Locations index
writePage('locations/page.tsx', `import React from "react";
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
`);

// 7. Location detail
writePage('locations/[slug]/page.tsx', `import React from "react";
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
`);

// 8. FAQs
writePage('faqs/page.tsx', `import React from "react";
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
`);

// 9. Contact Us
writePage('contact-us/page.tsx', `import React from "react";
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
`);

console.log("All subpages generated successfully!");
