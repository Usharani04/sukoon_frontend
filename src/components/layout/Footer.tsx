import React from "react";
import Link from "next/link";
import { Mail, Phone, Smartphone } from "lucide-react";
import { SukoonLogo } from "../ui/Logo";
import type { FooterColumn, GlobalSettings, NavLink, SocialLink } from "@/types/content";

/**
 * Site footer, matching sukoon.sbprism.com:
 *   [logo + description + social icons + phones/email]  [3 link columns]
 *   ------------------------------------------------------------------
 *   [legal name, CIN, address]                          [copyright]
 *
 * All content comes from the Strapi "Global" single type:
 *   footer_description, social_links, primary_phone, secondary_phone, admissions_email,
 *   footer_columns (heading + links), company_legal_name, cin_number, registered_address, copyright_text
 */

type FooterSettings = GlobalSettings & { footer_description?: string | null };

const BRAND_ICONS: Record<SocialLink["platform"], { viewBox: string; d: string }> = {
  facebook: { viewBox: "0 0 320 512", d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" },
  twitter: { viewBox: "0 0 512 512", d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" },
  linkedin: { viewBox: "0 0 448 512", d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" },
  instagram: { viewBox: "0 0 448 512", d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" },
  youtube: { viewBox: "0 0 576 512", d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" }
};

const SOCIAL_LABEL: Record<SocialLink["platform"], string> = {facebook: "Facebook", twitter: "X (Twitter)", linkedin: "LinkedIn", instagram: "Instagram", youtube: "YouTube"};

/** Internal links use next/link; external links open in a new tab. */
function FooterLink({ link, className }: { link: NavLink; className?: string }) {
  const url = link.url || "#";
  if (/^https?:\/\//i.test(url)) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={url} className={className}>
      {link.label}
    </Link>
  );
}

/** Column widths follow the live site: first column widest, last slightly wider than the middle. */
function columnFlex(index: number, total: number) {
  if (index === 0) return "md:flex-[1.35_1_0] md:min-w-[240px] md:pr-3";
  if (index === total - 1 && total > 2) return "md:flex-[1.1_1_0]";
  return "md:flex-[1_1_0]";
}

function FooterLinkColumn({ col, index, total }: { col: FooterColumn; index: number; total: number }) {
  const links = col.links || [];
  // Long lists (e.g. "Resources & Information") split into two sub-columns, as on the live site.
  const twoCols = links.length > 6;
  return (
    <div className={`w-full ${columnFlex(index, total)}`}>
      <h3 className="mb-4 border-b border-white pb-4 pt-[0.4rem] text-[16px] font-normal leading-6 text-white xl:text-[18px] xl:leading-7">
        {col.heading}
      </h3>
      <ul className={twoCols ? "grid grid-cols-2 gap-x-[18px]" : ""}>
        {links.map((link, i) => (
          <li key={link.id ?? i} className="pb-3 text-[14px] leading-[22px] xl:text-[16px] xl:leading-[26px]">
            <FooterLink link={link} className="text-white transition-colors duration-300 hover:text-[#d3d3d3]" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 pt-[0.8rem] text-[14px] leading-[22px] text-white transition-colors duration-300 hover:text-[#d3d3d3] md:text-[16px] md:leading-6"
    >
      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center" aria-hidden="true">
        {icon}
      </span>
      {children}
    </a>
  );
}

interface FooterProps {
  settings: GlobalSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings: raw }) => {
  const s = raw as FooterSettings;
  const columns = s.footer_columns || [];
  const socials = (s.social_links || []).filter((l) => l?.url && BRAND_ICONS[l.platform]);
  const tel = (v?: string | null) => "tel:" + (v || "").replace(/[^\d+]/g, "");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#293F3B] text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-8 lg:px-20 lg:pb-16 lg:pt-[68px] xl:pb-[42px] xl:pt-[90px]">
        <div className="flex w-full flex-col gap-10 lg:mb-[3.25rem] lg:flex-row lg:gap-0">
          {/* ---------- Brand + contact ---------- */}
          <div className="w-full lg:w-[30%] xl:w-[35%]">
            {/* Live site: green logo on a white rounded badge (223 × 83) */}
            <div className="flex justify-center lg:block">
              <div className="inline-flex rounded-[7px] bg-white px-[17px] py-[13px]">
                <SukoonLogo variant="dark" height={56} />
              </div>
            </div>

            {s.footer_description ? (
              <p className="mb-[18px] mt-[14px] max-w-[310px] whitespace-pre-line text-[13px] leading-[1.65] text-white/90">
                {s.footer_description}
              </p>
            ) : null}

            {socials.length > 0 ? (
              <ul className="flex flex-wrap items-center justify-center gap-5 pb-2 pt-4 lg:justify-start lg:pt-2">
                {socials.map((l, i) => {
                  const icon = BRAND_ICONS[l.platform];
                  return (
                    <li key={l.id ?? i}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label={SOCIAL_LABEL[l.platform]}
                        className="block opacity-100 transition-opacity hover:opacity-75"
                      >
                        <svg viewBox={icon.viewBox} width="22" height="22" fill="currentColor" aria-hidden="true">
                          <path d={icon.d} />
                        </svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}

            <div className="mt-4 flex flex-row flex-wrap justify-around gap-x-6 gap-y-1 lg:flex-col lg:justify-start lg:gap-0">
              {s.primary_phone ? (
                <ContactRow href={tel(s.primary_phone)} icon={<Smartphone size={20} />}>
                  {s.primary_phone}
                </ContactRow>
              ) : null}
              {s.secondary_phone ? (
                <ContactRow href={tel(s.secondary_phone)} icon={<Phone size={20} />}>
                  {s.secondary_phone}
                </ContactRow>
              ) : null}
              {s.admissions_email ? (
                <ContactRow href={"mailto:" + s.admissions_email} icon={<Mail size={20} />}>
                  {s.admissions_email}
                </ContactRow>
              ) : null}
            </div>
          </div>

          {/* ---------- Link columns ---------- */}
          {columns.length > 0 ? (
            <nav aria-label="Footer" className="w-full lg:pl-4 xl:pl-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {columns.map((col, i) => (
                  <FooterLinkColumn key={col.id ?? i} col={col} index={i} total={columns.length} />
                ))}
              </div>
            </nav>
          ) : null}
        </div>

        {/* ---------- Legal strip ---------- */}
        <div className="mt-10 flex w-full flex-col items-start gap-4 border-t border-white pt-4 text-[16px] leading-6 lg:mt-0 lg:flex-row lg:justify-between">
          <p className="m-0 max-w-[760px]">
            {s.company_legal_name ? <strong className="font-semibold">{s.company_legal_name}</strong> : null}
            {s.cin_number || s.registered_address ? (
              <>
                <br />
                {s.cin_number ? `(CIN: ${s.cin_number})` : ""}
                {s.cin_number && s.registered_address ? ", " : ""}
                {s.registered_address || ""}
              </>
            ) : null}
          </p>
          <p className="m-0 shrink-0">{s.copyright_text || `© ${year} Sukoon Health | All rights reserved`}</p>
        </div>
      </div>
    </footer>
  );
};
