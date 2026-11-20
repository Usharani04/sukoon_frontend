/**
 * Types for the Landing Page collection type.
 * Shapes mirror the Strapi 5 REST response (flat objects, no `attributes`),
 * so the static Phase-1 data and the live Strapi data are interchangeable.
 */

/* ---------- Strapi "Rich text (Blocks)" ---------- */
export type BlockText = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};
export type BlockLink = { type: "link"; url: string; children: BlockText[] };
export type BlockInline = BlockText | BlockLink;
export type BlockNode =
  | { type: "paragraph"; children: BlockInline[] }
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; children: BlockInline[] }
  | { type: "quote"; children: BlockInline[] }
  | { type: "list"; format: "ordered" | "unordered"; children: { type: "list-item"; children: BlockInline[] }[] };
export type BlocksContent = BlockNode[];

export type StrapiMedia = {
  id?: number;
  documentId?: string;
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  mime?: string | null;
  name?: string | null;
};

/* ---------- elements.* components (existing + new) ---------- */
/** Existing elements.cta-button — style enum: primary | secondary | outline | white */
export type CtaStyle = "primary" | "secondary" | "outline" | "white";
export type CtaButton = {
  id?: number;
  label: string;
  url: string;
  style?: CtaStyle | null;
};

/** New elements.feature-card — used by "Why" cards (with image) and "Steps" (without). */
export type FeatureCard = {
  id?: number;
  title: string;
  description: string;
  image?: StrapiMedia | null;
};

export type ListItem = { id?: number; text: string };

export type Stage = {
  id?: number;
  title: string;
  subtitle?: string | null;
  bullets?: ListItem[] | null;
};

export type CityCard = {
  id?: number;
  city: string;
  title: string;
  description: string;
  link: CtaButton;
};

/** Existing elements.seo + new optional fields. */
export type Seo = {
  id?: number;
  meta_title?: string | null;
  meta_description?: string | null;
  og_image?: StrapiMedia | null;
  canonical_url?: string | null;
  robots_index?: boolean | null;
  robots_follow?: boolean | null;
  og_title?: string | null;
  og_description?: string | null;
  schema_json?: unknown;
};

/* ---------- existing collection types (fields this page reads) ---------- */
export type Doctor = {
  id?: number;
  documentId?: string;
  name: string;
  slug?: string | null;
  /** NEW field, e.g. "Executive Director, Psychiatry Services · Sukoon Health" */
  designation?: string | null;
  /** NEW field */
  photo?: StrapiMedia | null;
};

export type ExpertVideo = {
  id?: number;
  documentId?: string;
  title: string;
  youtube_url: string;
  thumbnail?: StrapiMedia | null;
  summary?: string | null;
};

/** Existing testimonial. Label shown = name (+ ", " + designation if set). */
export type Testimonial = {
  id?: number;
  documentId?: string;
  name?: string | null;
  designation?: string | null;
  quote?: string | null;
  /** NEW field — only `true` is shown on landing pages. */
  consent_confirmed?: boolean | null;
};

/** Existing faq. `answer` is plain text (used by the homepage); `answer_rich` is NEW and optional (for links). */
export type Faq = {
  id?: number;
  documentId?: string;
  question: string;
  answer: string;
  answer_rich?: BlocksContent | null;
};

/* ---------- landing.* (dynamic zone `page_builder`) ---------- */
type Base<C extends string> = { __component: C; id: number };

export type HeroSection = Base<"landing.hero"> & {
  eyebrow?: string | null;
  title: string;
  description?: string | null;
  background_image: StrapiMedia;
  mobile_image?: StrapiMedia | null;
  primary_cta?: CtaButton | null;
  secondary_cta?: CtaButton | null;
  reviewer_label?: string | null;
  reviewer?: Doctor | null;
};

export type FeatureCardsSection = Base<"landing.feature-cards"> & {
  heading: string;
  description?: string | null;
  cards: FeatureCard[];
};

export type CityCardsSection = Base<"landing.city-cards"> & {
  heading: string;
  description?: string | null;
  cards: CityCard[];
  cta_heading?: string | null;
  cta?: CtaButton | null;
};

export type ConcernListSection = Base<"landing.concern-list"> & {
  heading: string;
  description?: string | null;
  items: ListItem[];
  link?: CtaButton | null;
};

export type StepsSection = Base<"landing.steps"> & {
  heading: string;
  description?: string | null;
  steps: FeatureCard[];
};

export type ExpertSpotlightSection = Base<"landing.expert-spotlight"> & {
  heading: string;
  description?: string | null;
  video_title?: string | null;
  video_url: string;
  thumbnail?: StrapiMedia | null;
  quote?: string | null;
  expert?: Doctor | null;
};

export type ImageGallerySection = Base<"landing.image-gallery"> & {
  heading: string;
  subheading?: string | null;
  images: StrapiMedia[];
};

export type ProcessStagesSection = Base<"landing.process-stages"> & {
  heading: string;
  subheading?: string | null;
  description?: string | null;
  stages: Stage[];
  download_label?: string | null;
  download_file?: StrapiMedia | null;
};

export type VideoEmbedSection = Base<"landing.video-embed"> & {
  eyebrow?: string | null;
  heading: string;
  video_url: string;
  start_seconds?: number | null;
  poster?: StrapiMedia | null;
  transcript?: string | null;
};

export type VideoListSection = Base<"landing.video-list"> & {
  heading: string;
  description?: string | null;
  videos: ExpertVideo[];
};

export type TestimonialsSection = Base<"landing.testimonials"> & {
  heading: string;
  description?: string | null;
  testimonials: Testimonial[];
};

export type FaqSection = Base<"landing.faq"> & {
  heading: string;
  description?: string | null;
  faqs: Faq[];
  output_schema?: boolean | null;
};

export type CtaBannerSection = Base<"landing.cta-banner"> & {
  heading: string;
  points?: ListItem[] | null;
  buttons: CtaButton[];
  style?: "light" | "dark" | "brand" | null;
};

export type LandingSection =
  | HeroSection
  | FeatureCardsSection
  | CityCardsSection
  | ConcernListSection
  | StepsSection
  | ExpertSpotlightSection
  | ImageGallerySection
  | ProcessStagesSection
  | VideoEmbedSection
  | VideoListSection
  | TestimonialsSection
  | FaqSection
  | CtaBannerSection;

export type LandingPage = {
  id?: number;
  documentId?: string;
  title: string;
  slug: string;
  breadcrumb_label?: string | null;
  seo?: Seo | null;
  page_builder: LandingSection[];
};
