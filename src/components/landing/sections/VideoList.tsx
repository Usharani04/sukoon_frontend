import type { VideoListSection } from "@/lib/landing/types";
import { mediaUrl } from "@/lib/landing/media";
import { youtubeId, youtubeWatchUrl } from "@/lib/landing/youtube";
import Slider from "../ui/Slider";
import YouTubeLite from "../ui/YouTubeLite";

/** "More From Our Experts" — Expert Video entries in a slider (3 visible on desktop). */
export default function VideoList(s: VideoListSection) {
  const headingId = `video-list-${s.id}`;
  const videos = s.videos
    .map((v) => ({ ...v, ytId: youtubeId(v.youtube_url) }))
    .filter((v): v is typeof v & { ytId: string } => Boolean(v.ytId));
  if (!videos.length) return null;

  return (
    <section className="therapists-section" id="therapist-expert-videos" aria-labelledby={headingId}>
      <div className="therapists-container">
        <h2 id={headingId} className="t-heading">
          {s.heading}
        </h2>
        {s.description && <p className="t-body therapists-intro">{s.description}</p>}

        <Slider id={headingId} label="expert video" desktopCount={3}>
          {videos.map((v) => (
            <article key={v.documentId ?? v.ytId} className="therapists-card therapists-expert-video-card">
              <YouTubeLite videoId={v.ytId} title={v.title} thumbnailUrl={mediaUrl(v.thumbnail)} />
              <div className="therapists-card-body">
                <h3 className="t-card-title">{v.title}</h3>
                <a
                  className="therapists-video-watch-link t-button"
                  href={youtubeWatchUrl(v.ytId)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}
