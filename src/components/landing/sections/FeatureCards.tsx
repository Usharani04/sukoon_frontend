import type { FeatureCardsSection } from "@/lib/landing/types";
import Slider from "../ui/Slider";
import StrapiImage from "../ui/StrapiImage";

/** "Why A Sukoon Therapist" — numbered image cards, slider on every screen size (3 visible on desktop). */
export default function FeatureCards(s: FeatureCardsSection) {
  const headingId = `feature-cards-${s.id}`;
  return (
    <section className="therapists-section therapists-cream" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <Slider id={headingId} label="therapist benefit" desktopCount={3}>
          {s.cards.map((card, i) => (
            <article key={card.id ?? i} className="therapists-card therapists-why-card">
              <StrapiImage media={card.image} sizes="(max-width: 768px) 100vw, (max-width: 1199px) 50vw, 33vw" />
              <div className="therapists-card-body">
                {/* Number comes from the array index, so reordering in Strapi never breaks numbering. */}
                <p className="therapists-eyebrow t-label">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="t-card-title">{card.title}</h3>
                <p className="t-body">{card.description}</p>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}
