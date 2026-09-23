import React from "react";
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
