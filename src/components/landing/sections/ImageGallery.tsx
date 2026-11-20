import type { ImageGallerySection } from "@/lib/landing/types";
import Slider from "../ui/Slider";
import StrapiImage from "../ui/StrapiImage";

/**
 * Live page renders two blocks:
 *   1. a cream pull-quote band with `heading` ("Find your space to be heard")
 *   2. the gallery with `subheading` as its H2 ("Care At Sukoon Looks Like")
 * If subheading is empty, only the gallery renders, titled with `heading`.
 */
export default function ImageGallery(s: ImageGallerySection) {
  const headingId = `image-gallery-${s.id}`;
  const galleryTitle = s.subheading || s.heading;

  return (
    <>
      {s.subheading && (
        <section className="therapists-pullquote therapists-cream">
          <div className="therapists-container">
            <h2 className="t-heading">{s.heading}</h2>
          </div>
        </section>
      )}

      <section className="therapists-section" aria-labelledby={headingId}>
        <div className="therapists-container">
          <h2 id={headingId} className="t-heading">
            {galleryTitle}
          </h2>
          <div className="therapists-care-gallery">
            <Slider id={headingId} label="care image" desktopCount={4} mobileOnly gridClassName="therapists-grid therapists-grid-four">
              {s.images.map((img, i) => (
                <StrapiImage
                  key={img.id ?? i}
                  media={img}
                  sizes="(max-width: 768px) 100vw, (max-width: 1199px) 50vw, 25vw"
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
