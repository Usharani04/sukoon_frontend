import type { StrapiMedia } from "./types";

/**
 * Strapi returns relative URLs (/uploads/...) with the local upload provider
 * and absolute URLs with Cloudinary/S3. Static Phase-1 data uses /therapists/...
 * (served from /public). This normalises all three.
 */
export function mediaUrl(media?: StrapiMedia | null): string | null {
  if (!media?.url) return null;
  const { url } = media;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/uploads/")) {
    const base = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "";
    return `${base.replace(/\/$/, "")}${url}`;
  }
  return url;
}

export function mediaAlt(media?: StrapiMedia | null, fallback = ""): string {
  return media?.alternativeText ?? fallback;
}
