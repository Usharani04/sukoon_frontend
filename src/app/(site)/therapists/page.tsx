import "./therapists.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionRenderer from "@/components/landing/SectionRenderer";
import { getTherapistsPage } from "@/lib/landing/api";
import { mediaUrl } from "@/lib/landing/media";

// ISR: page is static, refreshed at most every 5 minutes (instantly via the Strapi webhook).
export const revalidate = 300;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sukoonhealth.com").replace(/\/$/, "");
const absolute = (url: string | null) => (!url ? undefined : url.startsWith("http") ? url : `${SITE_URL}${url}`);

export async function generateMetadata(): Promise<Metadata> {
  const page = await getTherapistsPage();
  if (!page) return {};
  const seo = page.seo ?? {};
  const ogImage = absolute(mediaUrl(seo.og_image));

  return {
    title: seo.meta_title ?? undefined,
    description: seo.meta_description ?? undefined,
    alternates: seo.canonical_url ? { canonical: seo.canonical_url } : undefined,
    robots: { index: seo.robots_index !== false, follow: seo.robots_follow !== false },
    openGraph: {
      title: seo.og_title || seo.meta_title || undefined,
      description: seo.og_description || seo.meta_description || undefined,
      url: seo.canonical_url ?? undefined,
      type: "website",
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.og_title || seo.meta_title || undefined,
      description: seo.og_description || seo.meta_description || undefined,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function TherapistsPage() {
  const page = await getTherapistsPage();
  if (!page) notFound();

  return (
    // Root layout (src/app/layout.tsx) already provides <main>, Header and Footer.
    <div className="therapist-page">
      <SectionRenderer sections={page.page_builder} />
      {page.seo?.schema_json ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(page.seo.schema_json).replace(/</g, "\\u003c") }}
        />
      ) : null}
    </div>
  );
}
