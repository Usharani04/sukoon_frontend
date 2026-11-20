"use client";

import { Children, isValidElement, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";

type Props = {
  /** Unique id; used for aria-controls. */
  id: string;
  /** Screen-reader label for one item, e.g. "expert video". */
  label: string;
  /** Slides visible on desktop (≥1200px). Tablet shows max 2, mobile shows 1. */
  desktopCount?: number;
  /**
   * true  = plain grid on desktop/tablet, slider only on mobile (city cards, steps, gallery, stages).
   * false = slider on every screen size (why cards, expert videos, testimonials).
   */
  mobileOnly?: boolean;
  /** Grid class used when mobileOnly and not on mobile. */
  gridClassName?: string;
  children: ReactNode;
};

/**
 * Same behaviour as the live page slider:
 *  - ≤768px: 1 slide, arrows + dots underneath
 *  - 769–1199px: min(2, desktopCount) slides, overlay arrows
 *  - ≥1200px: desktopCount slides, overlay arrows
 *  - keyboard (←, →, Home, End), swipe (>40px horizontal), off-screen slides are inert
 */
export default function Slider({
  id,
  label,
  desktopCount = 3,
  mobileOnly = false,
  gridClassName = "therapists-grid therapists-grid-four",
  children,
}: Props) {
  const items = Children.toArray(children).filter(isValidElement);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(desktopCount);
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setVisible(mobile ? 1 : window.innerWidth < 1200 ? Math.min(2, desktopCount) : desktopCount);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [desktopCount]);

  const maxIndex = Math.max(0, items.length - visible);
  const current = Math.min(index, maxIndex);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const go = (delta: number) => setIndex((i) => Math.max(0, Math.min(maxIndex, i + delta)));

  if (mobileOnly && !isMobile) {
    return <div className={gridClassName}>{items}</div>;
  }

  const slidesId = `${id}-slides`;
  const controlsClass = isMobile ? "therapists-slider-controls" : "therapists-carousel-buttons";
  const arrowClass = isMobile ? "therapists-slider-arrow" : "t-button";

  return (
    <div className="therapists-slider" style={{ ["--slides-visible" as string]: visible }}>
      <div className="therapists-slider-body">
        <div className={controlsClass}>
          <button
            className={arrowClass}
            type="button"
            onClick={() => go(-1)}
            disabled={current === 0}
            aria-label={`Previous ${label}`}
            aria-controls={slidesId}
          >
            <ChevronLeft />
          </button>

          {isMobile && (
            <div className="therapists-slider-dots">
              {items.map((item, i) => (
                <button
                  key={item.key ?? i}
                  className="therapists-slider-dot"
                  type="button"
                  aria-label={`Show ${label} card ${i + 1}`}
                  aria-pressed={current === i}
                  aria-controls={slidesId}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}

          <button
            className={arrowClass}
            type="button"
            onClick={() => go(1)}
            disabled={current === maxIndex}
            aria-label={`Next ${label}`}
            aria-controls={slidesId}
          >
            <ChevronRight />
          </button>
        </div>

        <div
          className="therapists-slider-viewport"
          id={slidesId}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={label}
          onKeyDown={(e) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
            e.preventDefault();
            if (e.key === "Home") setIndex(0);
            if (e.key === "End") setIndex(maxIndex);
            if (e.key === "ArrowLeft") go(-1);
            if (e.key === "ArrowRight") go(1);
          }}
          onTouchStart={(e) => {
            swiped.current = false;
            touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }}
          onTouchEnd={(e) => {
            if (!touchStart.current) return;
            const t = e.changedTouches[0];
            const dx = touchStart.current.x - t.clientX;
            const dy = touchStart.current.y - t.clientY;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
              swiped.current = true;
              go(dx > 0 ? 1 : -1);
            }
            touchStart.current = null;
          }}
          onTouchCancel={() => {
            touchStart.current = null;
          }}
          onClickCapture={(e) => {
            // A swipe must not also trigger a click on a card link.
            if (swiped.current) {
              e.preventDefault();
              e.stopPropagation();
              swiped.current = false;
            }
          }}
        >
          <div
            className="therapists-slider-track"
            style={{ transform: `translateX(calc(-${current} * ((100% + 24px) / ${visible})))` }}
          >
            {items.map((item, i) => {
              const hidden = i < current || i >= current + visible;
              return (
                <div
                  key={item.key ?? i}
                  className="therapists-slider-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${items.length}`}
                  aria-hidden={hidden}
                  // Set via ref so it works on both React 18 and React 19.
                  ref={(el) => {
                    if (el) el.inert = hidden;
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
