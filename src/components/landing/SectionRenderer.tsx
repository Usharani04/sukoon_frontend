import type { LandingSection } from "@/lib/landing/types";
import Hero from "./sections/Hero";
import FeatureCards from "./sections/FeatureCards";
import CityCards from "./sections/CityCards";
import ConcernList from "./sections/ConcernList";
import Steps from "./sections/Steps";
import ExpertSpotlight from "./sections/ExpertSpotlight";
import ImageGallery from "./sections/ImageGallery";
import ProcessStages from "./sections/ProcessStages";
import VideoEmbed from "./sections/VideoEmbed";
import VideoList from "./sections/VideoList";
import Testimonials from "./sections/Testimonials";
import FaqSection from "./sections/FaqSection";
import CtaBanner from "./sections/CtaBanner";

/**
 * Renders the Strapi dynamic zone in the order editors set.
 * `__component` decides which React component renders each block.
 * Unknown components are skipped (and logged in dev) instead of breaking the page.
 */
export default function SectionRenderer({ sections }: { sections: LandingSection[] }) {
  return (
    <>
      {sections.map((s) => {
        const key = `${s.__component}-${s.id}`;
        switch (s.__component) {
          case "landing.hero": return <Hero key={key} {...s} />;
          case "landing.feature-cards": return <FeatureCards key={key} {...s} />;
          case "landing.city-cards": return <CityCards key={key} {...s} />;
          case "landing.concern-list": return <ConcernList key={key} {...s} />;
          case "landing.steps": return <Steps key={key} {...s} />;
          case "landing.expert-spotlight": return <ExpertSpotlight key={key} {...s} />;
          case "landing.image-gallery": return <ImageGallery key={key} {...s} />;
          case "landing.process-stages": return <ProcessStages key={key} {...s} />;
          case "landing.video-embed": return <VideoEmbed key={key} {...s} />;
          case "landing.video-list": return <VideoList key={key} {...s} />;
          case "landing.testimonials": return <Testimonials key={key} {...s} />;
          case "landing.faq": return <FaqSection key={key} {...s} />;
          case "landing.cta-banner": return <CtaBanner key={key} {...s} />;
          default: {
            if (process.env.NODE_ENV !== "production") {
              console.warn("[SectionRenderer] No component for", (s as { __component: string }).__component);
            }
            return null;
          }
        }
      })}
    </>
  );
}
