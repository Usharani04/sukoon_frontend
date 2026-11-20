import Link from "next/link";
import type { CityCardsSection } from "@/lib/landing/types";
import CtaLink from "../ui/CtaLink";
import Slider from "../ui/Slider";
import { PinIcon } from "../ui/Icons";

/** "Meet Our Therapists" — 4 city cards (grid on desktop, slider on mobile) + booking banner. */
export default function CityCards(s: CityCardsSection) {
  const headingId = `city-cards-${s.id}`;
  return (
    <section className="therapists-section" id="meet-therapists" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <Slider id={headingId} label="therapist city" desktopCount={4} mobileOnly gridClassName="therapists-grid therapists-grid-four">
          {s.cards.map((card, i) => (
            <Link key={card.id ?? i} className="therapists-card therapists-city" href={card.link.url}>
              <span className="therapists-eyebrow t-label">
                <PinIcon />
                {card.city}
              </span>
              <h3 className="t-card-title">{card.title}</h3>
              <p className="t-body">{card.description}</p>
              <span className="therapists-card-cta t-button">
                {card.link.label} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </Slider>

        {(s.cta_heading || s.cta) && (
          <div className="therapists-book-banner">
            {s.cta_heading && <h3 className="t-feature">{s.cta_heading}</h3>}
            <CtaLink link={s.cta} />
          </div>
        )}
      </div>
    </section>
  );
}
