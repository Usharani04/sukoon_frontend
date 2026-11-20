import type { LandingPage } from "./types";
import { therapistsStatic } from "@/lib/landing/therapists.static";

// Reuses the project's existing env var. STRAPI_URL (server-only) overrides it if set.
const STRAPI_URL = (process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337").replace(/\/$/, "");
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

/** Seconds before Next.js re-checks Strapi in the background (ISR). Webhook revalidation makes it instant. */
export const LANDING_REVALIDATE = 300;

/**
 * Strapi 5 does not return dynamic zones, components, media or relations unless populated.
 * One entry per section component, using the `on` fragment syntax.
 */
const LANDING_POPULATE = {
  seo: { populate: { og_image: true } },
  page_builder: {
    on: {
      "landing.hero": {
        populate: {
          background_image: true,
          mobile_image: true,
          primary_cta: true,
          secondary_cta: true,
          reviewer: { populate: { photo: true } },
        },
      },
      "landing.feature-cards": { populate: { cards: { populate: { image: true } } } },
      "landing.city-cards": { populate: { cards: { populate: { link: true } }, cta: true } },
      "landing.concern-list": { populate: { items: true, link: true } },
      "landing.steps": { populate: { steps: true } },
      "landing.expert-spotlight": { populate: { thumbnail: true, expert: { populate: { photo: true } } } },
      "landing.image-gallery": { populate: { images: true } },
      "landing.process-stages": { populate: { stages: { populate: { bullets: true } }, download_file: true } },
      "landing.video-embed": { populate: { poster: true } },
      "landing.video-list": { populate: { videos: { populate: { thumbnail: true } } } },
      "landing.testimonials": { populate: { testimonials: true } },
      "landing.faq": { populate: { faqs: true } },
      "landing.cta-banner": { populate: { points: true, buttons: true } },
    },
  },
};

/** Tiny qs-style serializer (bracket notation) so we don't need the `qs` package. */
function toQuery(value: unknown, prefix = ""): string[] {
  if (value === null || value === undefined) return [];
  if (typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      toQuery(v, prefix ? `${prefix}[${k}]` : k),
    );
  }
  return [`${prefix}=${encodeURIComponent(String(value))}`];
}

async function strapiFetch<T>(path: string, query: Record<string, unknown>, tags: string[]): Promise<T> {
  const url = `${STRAPI_URL}${path}?${toQuery(query).join("&")}`;
  const res = await fetch(url, {
    headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {},
    next: { revalidate: LANDING_REVALIDATE, tags },
    // Render free instances can take ~30–60s to wake up. Fail clearly instead of hanging the build.
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) {
    throw new Error(`Strapi ${res.status} ${res.statusText} for ${path}`);
  }
  return res.json() as Promise<T>;
}

export async function getLandingPage(slug: string): Promise<LandingPage | null> {
  const json = await strapiFetch<{ data: LandingPage[] }>(
    "/api/landing-pages",
    {
      filters: { slug: { $eq: slug } },
      populate: LANDING_POPULATE,
      // Only published entries. Editors preview drafts in Strapi, not on the live site.
      status: "published",
    },
    ["landing-page", `landing-page:${slug}`],
  );
  return json.data?.[0] ?? null;
}

/** For app/[slug]/page.tsx later: pre-build every landing page. */
export async function getLandingSlugs(): Promise<string[]> {
  const json = await strapiFetch<{ data: { slug: string }[] }>(
    "/api/landing-pages",
    { fields: ["slug"], pagination: { pageSize: 100 }, status: "published" },
    ["landing-page"],
  );
  return json.data.map((d) => d.slug);
}

/**
 * Phase switch. CONTENT_SOURCE=static -> local data (design work, no Strapi needed).
 * Anything else -> Strapi.
 */
export async function getTherapistsPage(): Promise<LandingPage | null> {
  if (process.env.CONTENT_SOURCE === "static") return therapistsStatic;
  return getLandingPage("therapists");
}
