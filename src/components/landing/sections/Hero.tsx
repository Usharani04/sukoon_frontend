import Link from "next/link";
import { getImageProps } from "next/image";
import type { HeroSection } from "@/lib/landing/types";
import { mediaAlt, mediaUrl } from "@/lib/landing/media";
import CtaLink from "../ui/CtaLink";
import StrapiImage from "../ui/StrapiImage";
import { PinIcon } from "../ui/Icons";

/** Doctor profile link. The live page links to the listing; switch to `${BASE}${slug}/` once profile pages exist. */
const DOCTOR_PROFILE_BASE = "/our-doctors/";

export default function Hero(s: HeroSection) {
  const desktopSrc = mediaUrl(s.background_image);
  const mobileSrc = mediaUrl(s.mobile_image);
  const alt = mediaAlt(s.background_image);

  // Art direction: optional mobile crop via <picture>. Eager + high priority because this is the LCP image.
  const common = { alt, sizes: "100vw", quality: 80, loading: "eager" as const, fetchPriority: "high" as const };
  const desktop = desktopSrc
    ? getImageProps({
        ...common,
        src: desktopSrc,
        width: s.background_image.width ?? 1600,
        height: s.background_image.height ?? 1000,
      }).props
    : null;
  const mobile =
    mobileSrc && s.mobile_image
      ? getImageProps({
          ...common,
          src: mobileSrc,
          width: s.mobile_image.width ?? 800,
          height: s.mobile_image.height ?? 1000,
        }).props
      : null;

  const doctor = s.reviewer;

  return (
    <section className="therapists-hero" aria-labelledby="hero-title">
      {desktop && (
        <picture>
          {mobile?.srcSet && <source media="(max-width: 768px)" srcSet={mobile.srcSet} />}
          {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
          <img {...desktop} className="therapists-hero-image" />
        </picture>
      )}

      <div className="therapists-container therapists-hero-content">
        {s.eyebrow && (
          <p className="therapists-badge t-small">
            <PinIcon />
            {s.eyebrow}
          </p>
        )}

        <h1 id="hero-title" className="t-title">
          {s.title}
        </h1>

        {s.description && <p className="t-body therapists-hero-intro">{s.description}</p>}

        {(s.primary_cta || s.secondary_cta) && (
          <div className="therapists-hero-actions">
            <CtaLink link={s.primary_cta} arrow={s.primary_cta?.url.startsWith("tel:") ? "before" : "auto"} />
            <CtaLink link={s.secondary_cta} />
          </div>
        )}

        {doctor && (
          <div className="therapists-review-strip">
            <div className="therapists-review-inner">
              <StrapiImage media={doctor.photo} fallbackAlt={doctor.name} width={64} height={64} />
              <div>
                <p className="t-small">
                  {s.reviewer_label || "Clinically reviewed by"}:{" "}
                  <Link href={DOCTOR_PROFILE_BASE}>{doctor.name}</Link>
                </p>
                {doctor.designation && <p className="t-small">{doctor.designation}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
