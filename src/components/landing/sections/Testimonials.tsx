import type { TestimonialsSection } from "@/lib/landing/types";
import Slider from "../ui/Slider";
import { QuoteIcon } from "../ui/Icons";

/**
 * "Stories of Hope". Only testimonials with consent_confirmed === true are shown —
 * a patient story without recorded consent never reaches the page, even if an editor links it.
 */
export default function Testimonials(s: TestimonialsSection) {
  const headingId = `testimonials-${s.id}`;
  const stories = s.testimonials
    .filter((t) => t.consent_confirmed === true && t.quote)
    .map((t) => ({ ...t, label: [t.name, t.designation].filter(Boolean).join(", ") }));
  if (!stories.length) return null;

  return (
    <section className="therapists-section" id="therapy-stories" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <Slider id={headingId} label="testimonial" desktopCount={2}>
          {stories.map((t, i) => (
            <figure key={t.documentId ?? i} className="therapists-card therapists-story">
              <figcaption className="t-small">
                <span className="therapists-story-avatar" aria-hidden="true">
                  {t.label.trim().charAt(0).toUpperCase()}
                </span>
                {t.label}
              </figcaption>
              <blockquote className="t-body">{t.quote}</blockquote>
              <QuoteIcon className="therapists-story-quote" strokeWidth={1.7} />
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
}
