"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { SukoonLogo } from "../ui/Logo";
import { AppointmentModal } from "../ui/AppointmentModal";
import { GlobalSettings } from "@/types/content";

interface HeaderProps {
  settings: GlobalSettings;
}

export const Header: React.FC<HeaderProps> = ({ settings }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const phone = settings?.primary_phone || "+91 8448156500";

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Sukoon Brand Logo */}
          <div className="flex-shrink-0">
            <SukoonLogo variant="dark" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-[#2d3748]">
            {/* 1. Rehab */}
            <Link
              href="/services/addiction-deaddiction"
              className="py-2 text-gray-700 hover:text-[#13443e] font-medium transition-colors"
            >
              Rehab
            </Link>

            {/* 2. Locations Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("locations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-2 text-gray-700 group-hover:text-[#13443e] font-medium transition-colors">
                <span>Locations</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-[#13443e] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-72 pt-2 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 px-1">
                  <Link href="/locations/gurugram" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">
                    Gurgaon (Psychiatric Hospital)
                  </Link>
                  <Link href="/locations/chhatarpur" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">
                    Chattarpur, New Delhi (Rehab)
                  </Link>
                  <Link href="/locations/bengaluru" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">
                    Bangalore (Hospital & Rehab)
                  </Link>
                  <Link href="/locations/hyderabad" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">
                    Hyderabad (Hospital & Rehab)
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Doctors Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("doctors")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-2 text-gray-700 group-hover:text-[#13443e] font-medium transition-colors">
                <span>Doctors</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-[#13443e] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-72 pt-2 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 space-y-1 text-xs">
                  <div className="font-semibold text-gray-800 px-2 py-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#13443e]" />
                    Psychiatrists
                  </div>
                  <div className="pl-4 space-y-1 text-gray-600">
                    <Link href="/doctors?role=psychiatrist&location=bengaluru" className="block py-1 hover:text-[#13443e]">
                      Psychiatrists in Bangalore
                    </Link>
                    <Link href="/doctors?role=psychiatrist&location=gurugram" className="block py-1 hover:text-[#13443e]">
                      Psychiatrists in Gurgaon
                    </Link>
                    <Link href="/doctors?role=psychiatrist&location=hyderabad" className="block py-1 hover:text-[#13443e]">
                      Psychiatrists in Hyderabad
                    </Link>
                  </div>

                  <Link href="/doctors?role=psychologist" className="block font-semibold text-gray-800 px-2 py-1.5 hover:text-[#13443e] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#13443e]" />
                    Psychologists
                  </Link>
                  <Link href="/doctors?role=therapist" className="block font-semibold text-gray-800 px-2 py-1.5 hover:text-[#13443e] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#13443e]" />
                    Therapists
                  </Link>
                  <Link href="/doctors?role=child-psychiatrist" className="block text-gray-600 italic px-2 py-1 hover:text-[#13443e] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Child Psychiatrist
                  </Link>
                  <Link href="/doctors?role=child-psychologist" className="block text-gray-600 italic px-2 py-1 hover:text-[#13443e] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Child Psychologist
                  </Link>
                  <Link href="/doctors?role=couple-therapist" className="block text-gray-600 italic px-2 py-1 hover:text-[#13443e] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Couple Therapist
                  </Link>
                  <Link href="/doctors?role=family-therapist" className="block text-gray-600 italic px-2 py-1 hover:text-[#13443e] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    Family Therapist
                  </Link>

                  <div className="pt-2 border-t border-gray-100">
                    <Link
                      href="/doctors"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#13443e] text-white font-semibold text-xs hover:bg-[#1a5b53] transition-all"
                    >
                      <span>See all</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Services Mega-Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-2 text-gray-700 group-hover:text-[#13443e] font-medium transition-colors">
                <span>Services</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-[#13443e] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-48 w-[720px] pt-2 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-3 gap-10">
                  {/* Column 1: REHABILITATION */}
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 pb-2 border-b border-gray-100">
                      REHABILITATION
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li><Link href="/services/alcohol-rehab" className="hover:text-[#13443e]">Alcohol Rehab</Link></li>
                      <li><Link href="/services/drug-rehab" className="hover:text-[#13443e]">Drug Rehab</Link></li>
                      <li><Link href="/services/habit-rehab" className="hover:text-[#13443e]">Habit Rehab</Link></li>
                      <li><Link href="/services/gambling-deaddiction" className="text-amber-600 hover:text-amber-700 font-medium">Gambling Deaddiction</Link></li>
                      <li><Link href="/services/nicotine-deaddiction" className="text-amber-600 hover:text-amber-700 font-medium">Nicotine Deaddiction</Link></li>
                      <li><Link href="/services/porn-deaddiction" className="text-amber-600 hover:text-amber-700 font-medium">Porn Deaddiction</Link></li>
                    </ul>
                  </div>

                  {/* Column 2: INPATIENT */}
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 pb-2 border-b border-gray-100">
                      INPATIENT
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li><Link href="/services/acute-psychiatric-care" className="hover:text-[#13443e]">Acute Psychiatric Care</Link></li>
                      <li><Link href="/services/psychiatric-icu" className="hover:text-[#13443e]">Psychiatric ICU</Link></li>
                      <li><Link href="/services/sukoon-at-home-care" className="hover:text-[#13443e]">Sukoon at Home Care</Link></li>
                      <li><Link href="/services/geriatric-care" className="hover:text-[#13443e]">Geriatric Care</Link></li>
                      <li><Link href="/services/womens-mental-health" className="hover:text-[#13443e]">Women's Mental Health</Link></li>
                      <li><Link href="/services/childrens-mental-health" className="hover:text-[#13443e]">Children's Mental Health</Link></li>
                    </ul>
                  </div>

                  {/* Column 3: OUTPATIENT */}
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 pb-2 border-b border-gray-100">
                      OUTPATIENT
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li><Link href="/services/clinical-psychologist" className="hover:text-[#13443e]">Clinical Psychologist</Link></li>
                      <li><Link href="/services/mental-health-counselling" className="hover:text-[#13443e]">Mental Health Counselling</Link></li>
                      <li><Link href="/services/art-therapy" className="hover:text-[#13443e]">Art Therapy</Link></li>
                      <li><Link href="/services/rtms-treatment" className="hover:text-[#13443e]">RTMS Treatment</Link></li>
                      <li><Link href="/services/cognitive-remediation" className="hover:text-[#13443e]">Cognitive Remediation</Link></li>
                      <li><Link href="/services/psychoanalytic-therapy" className="hover:text-[#13443e]">Psychoanalytic Therapy</Link></li>
                      <li><Link href="/services/occupational-therapy" className="hover:text-[#13443e]">Occupational Therapy</Link></li>
                      <li><Link href="/services/psychiatric-treatment" className="hover:text-[#13443e]">Psychiatric Treatment</Link></li>
                      <li><Link href="/services/psycho-oncology" className="hover:text-[#13443e]">Psycho Oncology</Link></li>
                      <li><Link href="/services/psychometric-testing" className="hover:text-[#13443e]">Psychometric Testing</Link></li>
                      <li><Link href="/services/ketamine-infusion-therapy" className="hover:text-[#13443e]">Ketamine Infusion Therapy</Link></li>
                      <li><Link href="/services/electroconvulsive-therapy" className="hover:text-[#13443e]">Electroconvulsive Therapy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Conditions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("conditions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-2 text-gray-700 group-hover:text-[#13443e] font-medium transition-colors">
                <span>Conditions</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-[#13443e] transition-transform duration-200 group-hover:rotate-180" />
              </button>
             <div className="absolute top-full left-0 w-64 pt-2 hidden group-hover:block animate-fadeIn z-50">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-5 space-y-2 text-xs">
               <ul className="space-y-3 text-gray-700 text-sm">
                    <li><Link href="/conditions/alcohol-addiction" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Alcohol Addiction</Link></li>
                    <li><Link href="/conditions/antisocial-personality-disorder" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Antisocial Personality Disorder</Link></li>
                    <li><Link href="/conditions/bipolar-disorder" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Bipolar Disorder</Link></li>
                    <li><Link href="/conditions/borderline-personality-disorder" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Borderline Personality Disorder</Link></li>
                    <li><Link href="/conditions/claustrophobia" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Claustrophobia</Link></li>
                    <li><Link href="/conditions/drug-addiction" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Drug Addiction</Link></li>
                    <li><Link href="/conditions/narcissistic-personality-disorder" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Narcissistic Personality Disorder</Link></li>
                    <li><Link href="/conditions/persistent-depressive-disorder" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Persistent Depressive Disorder</Link></li>
                    <li><Link href="/conditions/schizophrenia" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Schizophrenia</Link></li>
                    <li><Link href="/conditions/seasonal-affective-disorder" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Seasonal Affective Disorder</Link></li>
                    <li><Link href="/conditions/social-anxiety-disorder" className="hover:text-[#13443e] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" />Social Anxiety Disorder</Link></li>
                  </ul>
                  <div className="pt-2 border-t border-gray-100">
                    <Link
                      href="/conditions"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#13443e] text-white font-semibold text-xs hover:bg-[#1a5b53] transition-all"
                    >
                      <span>See all</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Blog */}
            <Link href="/blog" className="py-2 text-gray-700 hover:text-[#13443e] font-medium transition-colors">
              Blog
            </Link>

            {/* 7. More */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("more")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-2 text-gray-700 group-hover:text-[#13443e] font-medium transition-colors">
                <span>More</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-[#13443e] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 w-64 pt-2 hidden group-hover:block animate-fadeIn z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 px-1">
                  <Link href="/about-us" className="block px-3.5 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">About Sukoon</Link>
                  <Link href="/emergency" className="block px-3.5 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">24/7 Emergency Retrieval (MERA)</Link>
                  <Link href="/#insurance" className="block px-3.5 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">Cashless Insurance Partners</Link>
                  <Link href="/#testimonials" className="block px-3.5 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">Recovery Stories</Link>
                  <Link href="/faqs" className="block px-3.5 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">Frequently Asked Questions</Link>
                  <Link href="/contact-us" className="block px-3.5 py-2 text-sm text-gray-700 hover:bg-[#F2F7F6] hover:text-[#13443e] rounded-lg">Contact Us</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#13443e] text-white text-sm font-semibold hover:bg-[#1a5b53] transition-all shadow-sm"
            >
              <span>Book Appointment</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* 24/7 Helpline Bar — now sits below the main nav */}
      <div className="bg-[#13443e] text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-center gap-2 text-center">
          <Phone size={14} className="shrink-0" />
          <span>
            24×7 Mental Health Emergency Helpline:{" "}
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </span>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};