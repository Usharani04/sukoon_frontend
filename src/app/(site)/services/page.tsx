import React from "react";
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
