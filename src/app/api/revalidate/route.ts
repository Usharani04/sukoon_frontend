import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Strapi webhook target. When an editor publishes/unpublishes anything the
 * landing pages use, Strapi calls this and the page refreshes within seconds
 * instead of waiting for the 5-minute ISR window.
 *
 * Strapi: Settings > Webhooks > Create
 *   URL:     https://<your-vercel-domain>/api/revalidate
 *   Headers: x-revalidate-secret = <same value as REVALIDATE_SECRET on Vercel>
 *   Events:  Entry publish, unpublish, update, delete; Media create/update/delete
 */

// Models that appear on landing pages. A change in any of them refreshes these paths.
const LANDING_PATHS = ["/therapists"];
const RELATED_MODELS = new Set(["landing-page", "expert-video", "doctor", "faq", "testimonial", "location", "file"]);

export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || req.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ ok: false, message: "Invalid secret" }, { status: 401 });
  }

  let body: { model?: string; uid?: string; entry?: { slug?: string } } = {};
  try {
    body = await req.json();
  } catch {
    /* Strapi always sends JSON; ignore malformed bodies */
  }

  const model = body.model ?? "";
  if (model && !RELATED_MODELS.has(model)) {
    return NextResponse.json({ ok: true, skipped: model });
  }

  const paths = new Set(LANDING_PATHS);
  if (model === "landing-page" && body.entry?.slug) paths.add(`/${body.entry.slug}`);

  paths.forEach((p) => revalidatePath(p));
  return NextResponse.json({ ok: true, revalidated: [...paths] });
}
