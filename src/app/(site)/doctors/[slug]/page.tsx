import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GraduationCap, Award, Calendar, ArrowLeft, CheckCircle2, Shield, Users, HeartHandshake } from "lucide-react";
import { doctorsList } from "@/lib/mock-data";

interface SpecializationData {
  title: string;
  roleKey: string;
  heroImage: string;
  heroTag: string;
  summary: string;
  description: string;
  keyInterventions: string[];
  outcomes: string;
}

const specializations: Record<string, SpecializationData> = {
  "clinical-leads": {
    title: "Clinical Leads & Department Heads",
    roleKey: "Clinical Lead",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop",
    heroTag: "EXPERT MULTIDISCIPLINARY LEADERSHIP",
    summary: "Senior psychiatric department heads directing integrated inpatient triage, daily clinical rounds, and multi-specialty care pathways.",
    description: "Our Clinical Leads bridge medical psychiatry, psychotherapy, and nursing care. They oversee daily multi-specialty case reviews, ensuring that every patient at Sukoon receives a unified, evidence-based recovery plan based on our proprietary A2R+ protocol.",
    keyInterventions: [
      "Daily Multi-Disciplinary Team (MDT) rounds",
      "Acute crisis stabilization and protocol governance",
      "Personalized A2R+ clinical trajectory planning",
      "Family decision alignment and progress reviews"
    ],
    outcomes: "100% adherence to NABH clinical governance and global psychiatric safety benchmarks."
  },
  "psychiatrists": {
    title: "Consultant Psychiatrists & Neuropsychiatrists",
    roleKey: "Psychiatrist",
    heroImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1920&auto=format&fit=crop",
    heroTag: "MEDICAL PSYCHIATRY & PHARMACOTHERAPY",
    summary: "NIMHANS & UK-trained senior psychiatrists specializing in affective disorders, treatment-resistant depression, and neurostimulation.",
    description: "Sukoon's psychiatrists provide round-the-clock medical evaluation, pharmacological management, and modern neuromodulation (rTMS). Working in standalone hospitals rather than crowded wards, our psychiatrists dedicate deep time to diagnostic precision and side-effect mitigation.",
    keyInterventions: [
      "24/7 emergency psychiatric assessment & detox supervision",
      "US-FDA approved rTMS (Transcranial Magnetic Stimulation)",
      "Circadian regulation & mood stabilization protocols",
      "Comorbid addiction & dual-diagnosis treatment"
    ],
    outcomes: "40-60% faster symptom reduction tracked through international clinical evaluation scales."
  },
  "psychologists": {
    title: "Clinical Psychologists & Psychotherapists",
    roleKey: "Psychologist",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920&auto=format&fit=crop",
    heroTag: "EVIDENCE-BASED PSYCHOTHERAPY",
    summary: "M.Phil & PhD clinical psychologists delivering structured CBT, Dialectical Behavior Therapy (DBT), and psychometric evaluations.",
    description: "Psychotherapy at Sukoon is structured and goal-directed. Our clinical psychologists conduct comprehensive cognitive testing and lead daily individual and group therapy sessions designed to rebuild emotional regulation, coping mechanisms, and self-efficacy.",
    keyInterventions: [
      "Cognitive Behavioral Therapy (CBT) & DBT skills modules",
      "Comprehensive psychometric & neuro-diagnostic testing",
      "Exposure & Response Prevention (ERP) for severe OCD",
      "Trauma-informed cognitive restructuring"
    ],
    outcomes: "74% symptom reduction in severe OCD and panic disorders."
  },
  "occupational-therapists": {
    title: "Occupational & Functional Rehab Therapists",
    roleKey: "Occupational Therapist",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1920&auto=format&fit=crop",
    heroTag: "FUNCTIONAL RECOVERY & DAILY LIVING",
    summary: "Specialists restoring cognitive functioning, daily routine structures, motor coordination, and sensory regulation.",
    description: "Occupational therapy transforms clinical recovery into real-world independence. Our therapists work in sensory gardens and functional suites to rebuild routine discipline, time management, and motor-sensory integration for individuals recovering from acute episodes.",
    keyInterventions: [
      "Sensory integration & emotional de-escalation rooms",
      "Cognitive remediation & executive function retraining",
      "Structured daily routine & circadian habit building",
      "Pre-discharge independent living assessment"
    ],
    outcomes: "Smooth transition to outpatient life with sustained routine discipline."
  },
  "psws": {
    title: "Psychiatric Social Workers (PSWs)",
    roleKey: "PSW",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop",
    heroTag: "FAMILY INTEGRATION & CONTINUITY OF CARE",
    summary: "Dedicated care managers ensuring family counseling, post-discharge support networks, and community reintegration.",
    description: "Mental healthcare involves the entire family system. Sukoon's Psychiatric Social Workers serve as single-point Clinical Decision Managers (CDMs) for families, providing transparent daily updates, psychoeducation, and relapse-proofing before discharge.",
    keyInterventions: [
      "Structured family psychoeducation & counseling sessions",
      "Post-discharge recovery roadmap & home visit coordination",
      "Crisis safety planning & helpline integration",
      "Community support group facilitation"
    ],
    outcomes: "Significantly reduced caregiver burden and lower 6-month relapse rates (8% vs 27% global average)."
  },
  "art-based-therapists": {
    title: "Art-Based & Expressive Movement Therapists",
    roleKey: "Art-Based Therapist",
    heroImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1920&auto=format&fit=crop",
    heroTag: "NON-VERBAL & EXPRESSIVE HEALING",
    summary: "Certified art, music, and somatic movement therapists facilitating deep emotional release and subconscious processing.",
    description: "When words are insufficient to convey severe distress or trauma, art-based therapy offers a safe, non-judgmental channel. In our dedicated creative studios, patients engage in visual expression, music therapy, and somatic grounding.",
    keyInterventions: [
      "Guided visual art therapy & subconscious exploration",
      "Rhythmic sound & music relaxation sessions",
      "Somatic movement & breathwork grounding",
      "Group creative expression & emotional catharsis"
    ],
    outcomes: "Enhanced self-expression, reduced anxiety tension, and improved emotional resilience."
  },
  "nursing": {
    title: "24/7 Psychiatric Nursing & Critical Care",
    roleKey: "Nursing",
    heroImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1920&auto=format&fit=crop",
    heroTag: "DIGNIFIED 24/7 COMPASSIONATE CARE",
    summary: "NABH-trained psychiatric nurses delivering 1:1 continuous vitals monitoring, medication administration, and crisis de-escalation.",
    description: "Our psychiatric nursing team is the backbone of patient safety at Sukoon. Trained in anti-ligature protocols, MHCA compliance, and compassionate de-escalation, our nurses provide dignified round-the-clock care in a safe, home-like environment.",
    keyInterventions: [
      "24/7 continuous vitals & safety monitoring",
      "Strict medication administration oversight",
      "Non-coercive gentle crisis de-escalation",
      "Daily hygiene, nutrition, and comfort management"
    ],
    outcomes: "Zero-compromise safety environment and highest patient satisfaction ratings."
  },
  "clinical-advisory-board": {
    title: "Global Clinical Advisory Board",
    roleKey: "Clinical Advisory Board",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop",
    heroTag: "INDEPENDENT GOVERNANCE & GLOBAL STANDARDS",
    summary: "Former Directors at the World Health Organization (WHO), NIMHANS scholars, and Cambridge leaders auditing Sukoon's clinical protocols.",
    description: "Sukoon's Clinical Advisory Board comprises internationally distinguished leaders in public health and psychiatry. They independently audit patient outcome data, refine care protocols, and ensure Sukoon remains at the global forefront of evidence-based behavioral healthcare.",
    keyInterventions: [
      "Independent verification of 40-60% symptom reduction outcomes",
      "Annual clinical governance & safety protocol audits",
      "Integration of international psychiatric research breakthroughs",
      "Ethical oversight & MHCA 2017 legal compliance reviews"
    ],
    outcomes: "Uncompromising clinical integrity independently validated against global standards."
  }
};

export function generateStaticParams() {
  return Object.keys(specializations).map((slug) => ({ slug }));
}

export default function SpecializationPage({ params }: { params: { slug: string } }) {
  const spec = specializations[params.slug];

  if (!spec) {
    // If it's a specific doctor slug or unmapped slug, fallback gracefully
    const doctor = doctorsList.find((d) => d.slug === params.slug);
    if (!doctor) {
      notFound();
    }
  }

  // Filter doctors for this specialization or show all
  const filteredDoctors = spec
    ? doctorsList.filter((d) => d.role.toLowerCase().includes(spec.roleKey.toLowerCase()) || spec.roleKey.toLowerCase().includes(d.role.toLowerCase()))
    : doctorsList;

  const displayDoctors = filteredDoctors.length > 0 ? filteredDoctors : doctorsList;

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Hero Banner with specialization background image */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center justify-center bg-[#13443e] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('${spec?.heroImage || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 lg:from-black/80 lg:via-black/50 lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl space-y-4">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to All Doctors & Team</span>
            </Link>

            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold tracking-wider text-amber-200 uppercase">
              {spec?.heroTag || "SPECIALIZED CLINICAL TEAM"}
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {spec?.title || "Clinical Specialization"}
            </h1>

            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
              {spec?.summary || "Dedicated multidisciplinary specialists driving evidence-based psychiatric recovery."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Discipline Details Card */}
        {spec && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#13443e]">
                CLINICAL ROLE & PHILOSOPHY
              </span>
              <h2
                className="text-2xl sm:text-3xl font-serif text-[#13443e]"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                How {spec.title} Drive Recovery
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {spec.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  KEY INTERVENTIONS & PROTOCOLS
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {spec.keyInterventions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-[#13443e] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#E8F2EE] p-8 rounded-2xl border border-[#13443e]/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#13443e] text-white flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#13443e]">MEASURED IMPACT</div>
                  <div className="text-sm font-bold text-gray-900">Clinical Benchmark</div>
                </div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                {spec.outcomes}
              </p>
              <div className="pt-2 border-t border-[#13443e]/10 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">NABH Accredited</span>
                <span className="font-bold text-[#13443e]">100% MHCA Compliant</span>
              </div>
            </div>
          </div>
        )}

        {/* Practitioner Team Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
              MEET THE SPECIALISTS
            </span>
            <h3
              className="text-3xl sm:text-4xl font-serif text-[#13443e]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Practitioners in {spec?.title || "this Field"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-20 h-20 rounded-2xl bg-cover bg-center border border-gray-100 flex-shrink-0 bg-gray-100"
                      style={{ backgroundImage: `url(${doc.photo || "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop"})` }}
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#13443e] px-2 py-0.5 rounded-full bg-[#E8F2EE]">
                        {doc.role}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 mt-1">
                        {doc.name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                        <GraduationCap size={13} />
                        <span className="line-clamp-1">{doc.qualifications}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-gray-50 mt-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">
                    {doc.experience_years}+ Yrs Experience
                  </span>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#13443e] hover:bg-[#1a5b53] text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    <Calendar size={13} />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
