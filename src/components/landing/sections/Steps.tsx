import type { StepsSection } from "@/lib/landing/types";
import Slider from "../ui/Slider";

/** "How To Consult A Sukoon Therapist" — numbered steps (grid on desktop, slider on mobile). */
export default function Steps(s: StepsSection) {
  const headingId = `steps-${s.id}`;
  return (
    <section className="therapists-section" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <Slider id={headingId} label="consultation step" desktopCount={4} mobileOnly gridClassName="therapists-grid therapists-grid-four">
          {s.steps.map((step, i) => (
            <article key={step.id ?? i} className="therapists-card therapists-step">
              <span className="therapists-step-number t-button">{i + 1}</span>
              <h3 className="t-card-title">{step.title}</h3>
              <p className="t-body">{step.description}</p>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}
