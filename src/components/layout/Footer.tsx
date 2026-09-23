"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CalendarDays, Mail, MessageCircle, Phone } from "lucide-react";
import { SukoonLogo } from "../ui/Logo";
import { GlobalSettings } from "@/types/content";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const C = {
  bg: "#1D4037",
  gold: "#D9A441",
  cream: "#FDF8EF",
  green: "#1D4037",
  fieldBorder: "#E7E1D3",
  label: "#22332D",
  muted: "#5D6B64",
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
const CALLBACK_ENDPOINT = STRAPI_URL + "/api/callback-requests";

// Every text on this footer comes from the Global single type in Strapi
type FooterSettings = GlobalSettings & {
  contact_eyebrow?: string;
  contact_heading?: string;
  contact_description?: string;
  call_label?: string;
  email_label?: string;
  form_eyebrow?: string;
  form_heading?: string;
  form_name_label?: string;
  form_name_placeholder?: string;
  form_phone_label?: string;
  form_phone_placeholder?: string;
  form_city_label?: string;
  form_cities?: any[];
  form_message_label?: string;
  form_message_placeholder?: string;
  form_button_label?: string;
  form_footnote?: string;
  form_success_message?: string;
  form_error_message?: string;
  footer_description?: string;
};

interface ContactCardProps {
  href: string;
  label?: string;
  value: string;
  icon: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ href, label, value, icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3.5 transition hover:bg-white/[0.11]"
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(217,164,65,0.22)", color: C.gold }}
      >
        {icon}
      </span>
      <span>
        {label ? (
          <span className="block text-[12px] uppercase tracking-[0.1em] text-white/70">
            {label}
          </span>
        ) : null}
        <span className="block break-all text-[17px] font-medium">{value}</span>
      </span>
    </Link>
  );
};

interface FooterProps {
  settings: GlobalSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings: rawSettings }) => {
  const settings = rawSettings as FooterSettings;

  const cityList: string[] = Array.isArray(settings.form_cities)
    ? settings.form_cities
        .map((c: any) => (typeof c === "string" ? c : c?.label || c?.name || ""))
        .filter((c: string) => c !== "")
    : [];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(cityList[0] || "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(CALLBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { name, phone, city, message } }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  };

  const columns = settings.footer_columns || [];
  const phoneValue = settings.primary_phone || "";
  const emailValue = settings.admissions_email || "";
  const telHref = "tel:" + phoneValue.replace(/\s+/g, "");
  const mailHref = "mailto:" + emailValue;

  const inputClass =
    "w-full rounded-lg border bg-white px-4 py-2.5 text-[15px] outline-none transition focus:ring-2 focus:ring-[#1D4037]/25";
  const labelClass = "mb-1.5 block text-[13px] font-medium";

  return (
    <footer className={sans.className + " text-white"} style={{ backgroundColor: C.bg }}>
      {/* ============ GET IN TOUCH + CALLBACK FORM ============ */}
      <div className="mx-auto max-w-[1200px] px-5 pb-14 pt-12 sm:px-8 lg:pb-16 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left */}
          <div>
            {settings.contact_eyebrow ? (
              <p
                className="text-[12px] font-medium uppercase tracking-[0.2em]"
                style={{ color: C.gold }}
              >
                {settings.contact_eyebrow}
              </p>
            ) : null}

           {settings.contact_heading ? (
           <h2
           className={
           serif.className +
           " mt-4 text-[34px] font-normal leading-[1.1] text-white sm:text-[42px] lg:text-[48px]"
           }
           >
           {settings.contact_heading}
           </h2>
           ) : null}

            {settings.contact_description ? (
              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.65] text-white/85">
                {settings.contact_description}
              </p>
            ) : null}

            <div className="mt-8 space-y-4">
              {phoneValue !== "" ? (
                <ContactCard
                  href={telHref}
                  label={settings.call_label}
                  value={phoneValue}
                  icon={<Phone size={18} />}
                />
              ) : null}

              {emailValue !== "" ? (
                <ContactCard
                  href={mailHref}
                  label={settings.email_label}
                  value={emailValue}
                  icon={<Mail size={18} />}
                />
              ) : null}
            </div>
          </div>

          {/* Right: callback card */}
          <div
            className="rounded-3xl p-6 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)] sm:p-8"
            style={{ backgroundColor: C.cream, color: C.label }}
          >
            {settings.form_eyebrow ? (
              <div
                className="flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.2em]"
                style={{ color: C.green }}
              >
                <CalendarDays size={18} />
                <span>{settings.form_eyebrow}</span>
              </div>
            ) : null}

            {settings.form_heading ? (
              <h3
                className={
                  serif.className + " mt-2 text-[26px] font-normal leading-tight sm:text-[30px]"
                }
                style={{ color: C.green }}
              >
                {settings.form_heading}
              </h3>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                {settings.form_name_label ? (
                  <label htmlFor="cb-name" className={labelClass}>
                    {settings.form_name_label}
                  </label>
                ) : null}
                <input
                  id="cb-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={settings.form_name_placeholder || ""}
                  className={inputClass}
                  style={{ borderColor: C.fieldBorder }}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  {settings.form_phone_label ? (
                    <label htmlFor="cb-phone" className={labelClass}>
                      {settings.form_phone_label}
                    </label>
                  ) : null}
                  <input
                    id="cb-phone"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={settings.form_phone_placeholder || ""}
                    className={inputClass}
                    style={{ borderColor: C.fieldBorder }}
                  />
                </div>

                {cityList.length > 0 ? (
                  <div>
                    {settings.form_city_label ? (
                      <label htmlFor="cb-city" className={labelClass}>
                        {settings.form_city_label}
                      </label>
                    ) : null}
                    <select
                      id="cb-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={inputClass}
                      style={{ borderColor: C.fieldBorder }}
                    >
                      {cityList.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}
              </div>

              <div>
                {settings.form_message_label ? (
                  <label htmlFor="cb-msg" className={labelClass}>
                    {settings.form_message_label}
                  </label>
                ) : null}
                <textarea
                  id="cb-msg"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={settings.form_message_placeholder || ""}
                  className={inputClass + " resize-none"}
                  style={{ borderColor: C.fieldBorder }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: C.green }}
              >
                <MessageCircle size={17} />
                {status === "sending" ? "..." : settings.form_button_label || ""}
              </button>

              {status === "success" && settings.form_success_message ? (
                <p className="text-center text-[14px]" style={{ color: C.green }}>
                  {settings.form_success_message}
                </p>
              ) : null}
              {status === "error" && settings.form_error_message ? (
                <p className="text-center text-[14px] text-red-700">
                  {settings.form_error_message}
                </p>
              ) : null}

              {settings.form_footnote ? (
                <p className="text-center text-[13px]" style={{ color: C.muted }}>
                  {settings.form_footnote}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>

      {/* ============ LINK COLUMNS ============ */}
      <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-2 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <SukoonLogo variant="light" size="md" />
            {settings.footer_description ? (
              <p className="mt-4 max-w-[320px] text-[14px] leading-[1.65] text-white/75">
                {settings.footer_description}
              </p>
            ) : null}
          </div>

          {columns.map((col, idx) => (
            <div key={col.id ?? idx}>
              <h4 className="text-[15px] font-semibold text-white">{col.heading}</h4>
              <ul className="mt-4 space-y-2.5">
                {(col.links || []).map((link, lIdx) => (
                  <li key={link.id ?? lIdx}>
                    <Link
                      href={link.url || "#"}
                      className="text-[14px] text-white/80 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-[13px] text-white/50 md:flex-row">
          <span>{settings.cin_number ? "CIN: " + settings.cin_number : ""}</span>
          <span>{settings.copyright_text}</span>
        </div>
      </div>
    </footer>
  );
};