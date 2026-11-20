import Link from "next/link";
import type { CtaButton } from "@/lib/landing/types";

type Arrow = "auto" | "none" | "before";

/**
 * Renders the existing `elements.cta-button` (label, url, style) as a pill button.
 *
 * style -> look (matches the live therapists page):
 *   primary   -> green button
 *   white     -> white button (use on dark backgrounds, e.g. hero "Call Us")
 *   outline   -> white with green border (e.g. closing "Call Us")
 *   secondary -> same as outline
 *
 * Arrow ("auto"): tel:/mailto: -> none, new tab -> "↗" after, otherwise "→" after.
 * New tab: only when `newTab` is passed (e.g. the A2R+ PDF). External links open in the same tab, as on live.
 */
export default function CtaLink({
  link,
  arrow = "auto",
  newTab = false,
  className = "",
}: {
  link?: CtaButton | null;
  arrow?: Arrow;
  newTab?: boolean;
  className?: string;
}) {
  if (!link?.url || !link.label) return null;

  const style = link.style ?? "primary";
  const styleClass =
    style === "white" ? "therapists-button-white" : style === "outline" || style === "secondary" ? "therapists-button-outline" : "";

  const isProtocol = /^(tel|mailto):/i.test(link.url);
  const classes = ["therapists-button", styleClass, "t-button", className].filter(Boolean).join(" ");
  const trailing = arrow === "auto" && !isProtocol ? (newTab ? "↗" : "→") : null;

  const content = (
    <>
      {arrow === "before" && <span aria-hidden="true">↗</span>}
      {link.label}
      {trailing && <span aria-hidden="true">{trailing}</span>}
    </>
  );

  if (link.url.startsWith("/") && !newTab) {
    return (
      <Link className={classes} href={link.url}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={link.url} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  );
}
