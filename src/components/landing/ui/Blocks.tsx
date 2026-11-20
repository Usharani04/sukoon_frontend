import Link from "next/link";
import type { ReactNode } from "react";
import type { BlockInline, BlockNode, BlocksContent, BlockText } from "@/lib/landing/types";

/**
 * Minimal renderer for Strapi 5 "Rich text (Blocks)".
 * Server-component safe and dependency-free. Handles paragraph, heading, quote,
 * list, text marks and links — everything an FAQ answer needs. Unknown block
 * types (image, code) are skipped instead of crashing the page.
 */
function renderText(t: BlockText, key: number): ReactNode {
  let node: ReactNode = t.text;
  if (t.code) node = <code>{node}</code>;
  if (t.bold) node = <strong>{node}</strong>;
  if (t.italic) node = <em>{node}</em>;
  if (t.underline) node = <u>{node}</u>;
  if (t.strikethrough) node = <s>{node}</s>;
  return <span key={key}>{node}</span>;
}

function renderInline(children: BlockInline[]): ReactNode[] {
  return children.map((c, i) => {
    if (c.type === "link") {
      const inner = c.children.map((t, j) => renderText(t, j));
      return c.url.startsWith("/") ? (
        <Link key={i} href={c.url}>
          {inner}
        </Link>
      ) : (
        <a key={i} href={c.url} {...(/^https?:/i.test(c.url) ? { rel: "noopener" } : {})}>
          {inner}
        </a>
      );
    }
    return renderText(c, i);
  });
}

export default function Blocks({
  content,
  paragraphClassName,
}: {
  content?: BlocksContent | null;
  paragraphClassName?: string;
}) {
  if (!Array.isArray(content)) return null;
  return (
    <>
      {content.map((block: BlockNode, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className={paragraphClassName}>
                {renderInline(block.children)}
              </p>
            );
          case "heading": {
            // Keep the page outline intact: answers never produce H1/H2.
            const Tag = (`h${Math.max(4, block.level)}`) as "h4" | "h5" | "h6";
            return <Tag key={i}>{renderInline(block.children)}</Tag>;
          }
          case "quote":
            return <blockquote key={i}>{renderInline(block.children)}</blockquote>;
          case "list": {
            const Tag = block.format === "ordered" ? "ol" : "ul";
            return (
              <Tag key={i} className={paragraphClassName}>
                {block.children.map((li, j) => (
                  <li key={j}>{renderInline(li.children)}</li>
                ))}
              </Tag>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
}

/** Plain text for JSON-LD and meta usage. */
export function blocksToPlainText(content?: BlocksContent | null): string {
  if (!Array.isArray(content)) return "";
  const inline = (children: BlockInline[]) =>
    children.map((c) => (c.type === "link" ? c.children.map((t) => t.text).join("") : c.text)).join("");
  return content
    .map((b) => {
      if (b.type === "list") return b.children.map((li) => inline(li.children)).join(" ");
      if ("children" in b) return inline(b.children as BlockInline[]);
      return "";
    })
    .filter(Boolean)
    .join(" ")
    .trim();
}
