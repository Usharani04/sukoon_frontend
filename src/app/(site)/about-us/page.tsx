import React from "react";
import Image from "next/image";
import { doctorsList } from "@/lib/mock-data";
import { ShieldCheck, Award, Heart, CheckCircle2, Target, TrendingUp, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Sukoon Health | Purpose, Story & Leadership",
  description: "Learn about Sukoon Health's founding story, mission, clinical leadership, and proprietary A2R+ care protocols.",
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Saleem Asaria",
      role: "Chairman, Sukoon Health",
      bio: "Spent decades building and scaling world-class behavioral health institutions in the UK, bringing global clinical architecture, governance, and quality systems to India.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Vidit Bahri",
      role: "Co-Founder, Sukoon Health",
      bio: "Co-founded Sukoon after experiencing the lack of structured psychiatric facilities when a loved one needed care. Driven by building accountable healthcare.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Kanishk Gupta",
      role: "Co-Founder, Sukoon Health",
      bio: "Co-founded Sukoon to replace fragmented mental healthcare with dedicated inpatient hospitals built entirely around structured recovery.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop",
    },
  ];

  const guidingLights = doctorsList.filter((d) => d.role === "Clinical Advisory Board");

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#293F3B] to-[#3F7268] text-white py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-sukoon-sage">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Built for Recovery. Not Improvised.
          </h1>
          <p className="text-lg text-white/85 leading-relaxed">
            Sukoon Health is India's leading network of inpatient acute psychiatry facilities. Built on proprietary clinical models, measurable outcomes, and purpose-designed environments.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
              Our Founding Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#293F3B]">
              Vidit Bahri and Kanishk Gupta didn't set out to build a hospital. They set out to find one.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              When loved ones needed psychiatric care, they searched, asked, visited — and found a system that had no business existing in a country of this size. Inadequate facilities. Inconsistent standards. Care that depended entirely on who happened to be on duty that day.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Sukoon Health exists because they refused to accept that this was the best India could do. Joined by Saleem Asaria, who brought decades of behavioral health governance from the UK, Sukoon was created with one single outcome in mind: <strong>structured, measurable recovery</strong>.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-[#F9FBFA] p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div
                  className="w-full h-40 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${leader.image})` }}
                ></div>
                <h3 className="font-bold text-sm text-[#293F3B]">{leader.name}</h3>
                <p className="text-[11px] font-bold text-[#3F7268]">{leader.role}</p>
                <p className="text-[11px] text-gray-600 leading-snug line-clamp-4">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Belief System */}
      <section className="py-20 bg-[#F2F7F6] border-y border-[#C6DDD9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
              Our Belief System
            </span>
            <h2 className="text-3xl font-extrabold text-[#293F3B]">
              Core Principles of Sukoon Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-base font-bold text-[#293F3B]">Care is measurable, not vague</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Outcomes, progress, and effectiveness must be visible, trackable, and continually strengthened.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-base font-bold text-[#293F3B]">Care is structured, not improvised</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Care cannot depend on individual good intent alone. It must be designed through models, protocols, and systems that make quality repeatable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-base font-bold text-[#293F3B]">The individual sits at the center</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Care at Sukoon is built around the lived reality of the individual. Period. Every decision is shaped by their context and journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-base font-bold text-[#293F3B]">Infrastructure is a necessity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                High-quality mental healthcare requires well-oiled machinery, accountable teams, and environments scientifically designed for safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Guiding Lights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8" id="guiding-lights">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3F7268]">
            Clinical Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#293F3B]">
            The Guiding Lights
          </h2>
          <p className="text-sm text-gray-600">
            Sukoon's clinical direction is shaped by three of the most respected minds in global psychiatry and public health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guidingLights.map((guide) => (
            <div key={guide.id} className="bg-[#F9FBFA] p-8 rounded-3xl border border-gray-100 shadow-sukoon space-y-5">
              <div
                className="w-24 h-24 rounded-2xl bg-cover bg-center mx-auto"
                style={{ backgroundImage: `url(${guide.photo})` }}
              ></div>
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-[#293F3B]">{guide.name}</h3>
                <p className="text-xs font-semibold text-[#3F7268]">{guide.qualifications}</p>
                <span className="inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 mt-2">
                  Clinical Advisor
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed text-center">
                {guide.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
