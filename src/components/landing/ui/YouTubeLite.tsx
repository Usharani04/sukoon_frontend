"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "./Icons";
import { youtubeEmbedUrl, youtubeThumb } from "@/lib/landing/youtube";

/**
 * Click-to-load YouTube player (same pattern as the live page).
 * Only the thumbnail loads until the user clicks play, so YouTube's
 * ~500 KB+ of JS stays off the initial page load (better LCP / INP).
 */
export default function YouTubeLite({
  videoId,
  title,
  thumbnailUrl,
  start,
}: {
  videoId: string;
  title: string;
  /** Optional custom thumbnail (Strapi). Falls back to YouTube's hqdefault. */
  thumbnailUrl?: string | null;
  start?: number | null;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="therapists-youtube-player">
      {playing ? (
        <iframe
          src={youtubeEmbedUrl(videoId, { start, autoplay: true })}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          className="therapists-youtube-preview"
          type="button"
          aria-label={`Play ${title}`}
          onClick={() => setPlaying(true)}
        >
          <Image
            src={thumbnailUrl || youtubeThumb(videoId)}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1199px) 50vw, 600px"
          />
          <span className="therapists-youtube-play-icon" aria-hidden="true">
            <PlayIcon />
          </span>
        </button>
      )}
    </div>
  );
}
