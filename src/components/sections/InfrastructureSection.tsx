"use client";

import React from "react";

interface InfrastructureSectionProps {
  badge?: string;
  heading: string;
  description?: string;
  youtube_url?: string;
}

function getYoutubeEmbedUrl(url: string): string {
  // Handles full URLs, youtu.be links, or a bare video ID
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  const videoId = match ? match[1] : url;
  return `https://www.youtube.com/embed/${videoId}`;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({
  badge,
  heading,
  description,
  youtube_url,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          {badge && (
            <span className="text-xs uppercase tracking-[0.2em] text-[#3F7268]">
              {badge}
            </span>
          )}
          <h2
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-[#13443e] font-serif"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-gray-600">{description}</p>
          )}
        </div>

        {youtube_url && (
          <div className="mt-12 aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <iframe
              className="h-full w-full"
              src={getYoutubeEmbedUrl(youtube_url)}
              title={heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
};