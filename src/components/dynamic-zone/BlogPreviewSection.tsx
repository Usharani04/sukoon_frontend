"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { BlogPost } from "@/types/content";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const C = {
  bg: "#F5F1E8",
  green: "#1B3D33",
  text: "#3E5A50",
  card: "#FEFDF9",
  border: "#E4DFD2",
  tagBg: "#F4E4C6",
  tagText: "#2F2A1E",
  muted: "#6B6B60",
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";

const getMediaUrl = (media: unknown): string | null => {
  if (!media) return null;
  const m = media as { url?: string; data?: { attributes?: { url?: string } } };
  const url = typeof media === "string" ? media : m.url ?? m.data?.attributes?.url;
  if (!url) return null;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
};

const formatDate = (d?: string) => {
  if (!d) return "";
  return /^\d{4}-\d{2}-\d{2}/.test(d)
    ? new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : d;
};

const readTime = (body?: string | null) => {
  const words = body ? body.trim().split(/\s+/).length : 0;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

interface BlogPreviewSectionProps {
  heading: string;
  description?: string;
  blog_posts?: BlogPost[];
}

export const BlogPreviewSection: React.FC<BlogPreviewSectionProps> = ({
  heading,
  description,
  blog_posts: posts = [],
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pages = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    setPageCount(pages);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setPage(max <= 0 ? 0 : Math.round((el.scrollLeft / max) * (pages - 1)));
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update, posts.length]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("a") as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goToPage = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({
      left: pageCount <= 1 ? 0 : (max / (pageCount - 1)) * i,
      behavior: "smooth",
    });
  };

  if (!posts || posts.length === 0) return null;

  return (
    <section className={`${sans.className} py-20 sm:py-24`} style={{ backgroundColor: C.bg }}>
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2
              className={`${serif.className} text-[40px] font-normal leading-[1.1] sm:text-[52px] lg:text-[56px]`}
              style={{ color: C.green }}
            >
              {heading}
            </h2>
            {description && (
              <p className="mt-4 max-w-2xl text-base sm:text-lg" style={{ color: C.text }}>
                {description}
              </p>
            )}
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous articles"
              className="flex h-[54px] w-[54px] items-center justify-center rounded-full border bg-white transition disabled:cursor-default disabled:opacity-50"
              style={{ borderColor: C.border, color: atStart ? C.muted : C.green }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next articles"
              className="flex h-[54px] w-[54px] items-center justify-center rounded-full border bg-white transition disabled:cursor-default disabled:opacity-50"
              style={{ borderColor: C.border, color: C.green }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post) => {
            const cover = getMediaUrl(post.cover_image);
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block shrink-0 snap-start overflow-hidden rounded-2xl border basis-[86%] sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)]"
                style={{ backgroundColor: C.card, borderColor: C.border }}
              >
                <div
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #E3E2DA 0%, #F6EBD9 55%, #F1E8D8 100%)",
                  }}
                >
                  {cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cover}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span
                      className={`${serif.className} text-[64px] font-light`}
                      style={{ color: "rgba(27,61,51,0.28)" }}
                    >
                      S
                    </span>
                  )}
                </div>

                <div className="px-6 pb-6 pt-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-md px-3 py-2 text-[13px] font-medium uppercase leading-none tracking-[0.06em]"
                      style={{ backgroundColor: C.tagBg, color: C.tagText }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-[13px] uppercase tracking-[0.08em]"
                      style={{ color: C.muted }}
                    >
                      {formatDate(post.published_date)}
                    </span>
                  </div>

                  <h3
                    className={`${serif.className} mt-6 min-h-[68px] text-[24px] font-medium leading-[1.4]`}
                    style={{ color: C.green }}
                  >
                    {post.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between text-[16px]">
                    <span style={{ color: C.muted }}>{readTime(post.body)}</span>
                    <span
                      className="inline-flex items-center gap-1.5 font-medium"
                      style={{ color: C.green }}
                    >
                      Read
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === page}
                className="h-[7px] rounded-full transition-all duration-300"
                style={{
                  width: i === page ? 40 : 7,
                  backgroundColor: i === page ? C.green : "#C9C6BB",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};