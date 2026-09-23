import React from "react";
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
