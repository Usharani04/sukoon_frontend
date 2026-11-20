import { Fragment } from "react";
import type { CtaBannerSection } from "@/lib/landing/types";
import CtaLink from "../ui/CtaLink";

const STYLE_CLASS = {
  brand: "therapists-mint",
  light: "therapists-cream",
  dark: "is-dark",
} as const;

/** "We Are Here For You" — closing reassurance + buttons. */
export default function CtaBanner(s: CtaBannerSection) {
  const style = s.style ?? "brand";
  const points = s.points ?? [];

  return (
    <section className={`therapists-section therapists-contact ${STYLE_CLASS[style]}`}>
      <div className="therapists-container">
        <h2 className="t-heading">{s.heading}</h2>
        {points.length > 0 && (
          <p className="t-body">
            {points.map((p, i) => (
              <Fragment key={p.id ?? i}>
                {i > 0 && <br />}
                {p.text}
              </Fragment>
            ))}
          </p>
        )}
        {s.buttons.length > 0 && (
          <div className="therapists-contact-actions">
            {s.buttons.map((b, i) => (
              <CtaLink key={b.id ?? i} link={b} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
