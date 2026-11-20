import type { VideoEmbedSection } from "@/lib/landing/types";
import { mediaUrl } from "@/lib/landing/media";
import { youtubeId } from "@/lib/landing/youtube";
import YouTubeLite from "../ui/YouTubeLite";

/**
 * "Take a walk through our facility".
 * The live page loads the YouTube iframe immediately; this uses the click-to-load
 * player instead (same look, no YouTube JS until the user presses play).
 */
export default function VideoEmbed(s: VideoEmbedSection) {
  const headingId = `video-embed-${s.id}`;
  const id = youtubeId(s.video_url);
  if (!id) return null;

  return (
    <section className="therapists-section" aria-labelledby={headingId}>
      <div className="therapists-container">
        {s.eyebrow && <p className="therapists-eyebrow t-label therapists-center">{s.eyebrow}</p>}
        <h2 id={headingId} className="t-heading therapists-center">
          {s.heading}
        </h2>
        <div className="therapists-video">
          <YouTubeLite videoId={id} title={s.heading} start={s.start_seconds} thumbnailUrl={mediaUrl(s.poster)} />
        </div>
        {s.transcript && (
          <details className="therapists-video-caption t-small">
            <summary>Read video transcript</summary>
            <p>{s.transcript}</p>
          </details>
        )}
      </div>
    </section>
  );
}
