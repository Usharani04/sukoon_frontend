import Image, { type ImageProps } from "next/image";
import type { StrapiMedia } from "@/lib/landing/types";
import { mediaAlt, mediaUrl } from "@/lib/landing/media";

type Props = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  media?: StrapiMedia | null;
  /** Used only when the Media Library entry has no alt text. */
  fallbackAlt?: string;
  width?: number;
  height?: number;
};

/**
 * next/image wrapper for Strapi media. Uses the width/height Strapi stores,
 * so there is no layout shift. Pass `fill` for absolutely positioned images.
 */
export default function StrapiImage({ media, fallbackAlt = "", width, height, fill, ...rest }: Props) {
  const src = mediaUrl(media);
  if (!src) return null;
  const alt = mediaAlt(media, fallbackAlt);

  if (fill) return <Image src={src} alt={alt} fill {...rest} />;

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? media?.width ?? 800}
      height={height ?? media?.height ?? 600}
      {...rest}
    />
  );
}
