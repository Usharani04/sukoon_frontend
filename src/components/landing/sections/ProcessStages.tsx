import type { ProcessStagesSection } from "@/lib/landing/types";
import { mediaUrl } from "@/lib/landing/media";
import CtaLink from "../ui/CtaLink";
import Slider from "../ui/Slider";

/** "How Therapy Fits Into Your Recovery" — dark A2R+ band with 3 stage cards + PDF download. */
export default function ProcessStages(s: ProcessStagesSection) {
  const headingId = `process-stages-${s.id}`;
  const pdfUrl = mediaUrl(s.download_file);

  return (
    <section className="therapists-section therapists-recovery" id="therapy-recovery" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.subheading && <h3 className="t-feature">{s.subheading}</h3>}
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <Slider id={headingId} label="recovery stage" desktopCount={3} mobileOnly gridClassName="therapists-grid therapists-grid-three">
          {s.stages.map((stage, i) => (
            <article key={stage.id ?? i} className="therapists-card therapists-stage">
              <span className="therapists-step-number t-button">{i + 1}</span>
              <h3 className="t-card-title">{stage.title}</h3>
              {stage.subtitle && <p className="t-body therapists-stage-subtitle">{stage.subtitle}</p>}
              {!!stage.bullets?.length && (
                <ul>
                  {stage.bullets.map((b, j) => (
                    <li key={b.id ?? j} className="t-body">
                      {b.text}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </Slider>

        {pdfUrl && (
          <div className="therapists-center">
            <CtaLink
              link={{ label: s.download_label || "Learn More", url: pdfUrl, style: "white" }}
              newTab
            />
          </div>
        )}
      </div>
    </section>
  );
}
