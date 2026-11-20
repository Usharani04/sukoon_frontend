import type { ExpertSpotlightSection } from "@/lib/landing/types";
import { mediaUrl } from "@/lib/landing/media";
import { youtubeId, youtubeWatchUrl } from "@/lib/landing/youtube";
import StrapiImage from "../ui/StrapiImage";
import YouTubeLite from "../ui/YouTubeLite";
import { QuoteIcon } from "../ui/Icons";

/** "Hear From Our Experts" — featured video + expert quote. */
export default function ExpertSpotlight(s: ExpertSpotlightSection) {
  const headingId = `expert-spotlight-${s.id}`;
  const id = youtubeId(s.video_url);
  const title = s.video_title || s.heading;
  const expert = s.expert;

  return (
    <section className="therapists-section" id="lead-therapist" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <div className="therapists-foreword-grid">
          {id && (
            <div className="therapists-foreword-video">
              <YouTubeLite videoId={id} title={title} thumbnailUrl={mediaUrl(s.thumbnail)} />
              <a
                className="therapists-video-watch-link t-small"
                href={youtubeWatchUrl(id)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube ↗
              </a>
            </div>
          )}

          {s.quote && (
            <figure className="therapists-foreword-quote">
              <QuoteIcon className="therapists-foreword-quote-icon" />
              <blockquote className="t-feature">{s.quote}</blockquote>
              {expert && (
                <figcaption>
                  <StrapiImage media={expert.photo} fallbackAlt={expert.name} width={56} height={56} />
                  <div>
                    <p className="t-small">
                      <strong>{expert.name}</strong>
                    </p>
                    {expert.designation && <p className="t-small">{expert.designation}</p>}
                  </div>
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
