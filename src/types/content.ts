// TypeScript definitions matching Strapi Content Architecture exactly

export interface CtaButton {
  id?: number | string;
  label: string;
  url: string;
  style: "primary" | "secondary" | "outline" | "white";
}

export interface StatItem {
  id?: number | string;
  number: string;
  label: string;
  sublabel?: string;
}

export interface IconFeature {
  id?: number | string;
  icon?: string;
  title: string;
  description: string;
}

export interface SocialLink {
  id?: number | string;
  platform: "facebook" | "twitter" | "linkedin" | "instagram" | "youtube";
  url: string;
}

export interface NavLink {
  id?: number | string;
  label: string;
  url: string;
  has_submenu?: boolean;
  submenu_items?: NavLink[];
}

export interface FooterColumn {
  id?: number | string;
  heading: string;
  links: NavLink[];
}

export interface Badge {
  id?: number | string;
  label: string;
  icon?: string;
}

export interface SeoData {
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
}

export interface Doctor {
  id: number | string;
  name: string;
  slug: string;
  photo?: string;
  qualifications: string;
  role: "Psychiatrist" | "Psychologist" | "Occupational Therapist" | "Art-Based Therapist" | "PSW" | "Clinical Advisory Board";
  experience_years: number;
  bio: string;
  locations?: Location[];
  book_appointment_url?: string;
}

export interface Location {
  id: number | string;
  name: string;
  slug: string;
  short_description: string;
  full_address: string;
  map_link?: string;
  hero_image?: string;
  gallery?: string[];
  accreditations?: Badge[];
  phone: string;
  services?: Service[];
  doctors?: Doctor[];
  facility_type?: string;
}

export interface Service {
  id: number | string;
  name: string;
  slug: string;
  category: "Residential" | "Rehabilitation" | "Outpatient" | "International";
  icon?: string;
  summary: string;
  locations?: Location[];
  related_disorders?: Disorder[];
}

export interface Disorder {
  id: number | string;
  name: string;
  slug: string;
  summary: string;
  symptoms?: string[];
  related_services?: Service[];
}

export interface Testimonial {
  id: number | string;
  name: string;
  designation?: string;
  organization?: string;
  quote: string;
  photo?: string;
  type: "patient" | "clinical_expert";
}

export interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
  category?: string;
}

export interface InsurancePartner {
  id: number | string;
  name: string;
  logo?: string;
  website_url?: string;
}

// CHANGED: cover_image can be a Strapi media object; excerpt/body/author can be empty
export interface BlogPost {
  id: number | string;
  title: string;
  slug: string;
  cover_image?: string | { url?: string } | null;
  excerpt?: string | null;
  body?: string | null;
  author?: string;
  category: string;
  published_date: string;
}

// Section types matching Strapi Dynamic Zone components (sections.*)
export type DynamicSection =
  | { __component: "sections.hero-section"; heading: string; subheading: string; background_image?: string; stats?: StatItem[]; cta?: CtaButton }
  | { __component: "sections.care-pathways-section" }
  | { __component: "sections.about-section"; heading: string; body: string; icon_features?: IconFeature[] }
  | { __component: "sections.mission-section"; heading: string; body: string }
  | { __component: "sections.treatment-model-section"; heading: string; description: string; cta?: CtaButton; image?: string; protocols?: { title: string; desc: string; icon: string }[] }
  | { __component: "sections.condition-cards-section"; heading: string; cards: { name: string; description: string; link: string; icon?: string }[] }
  | { __component: "sections.team-section"; heading: string; subheading: string; role_filters?: string[]; featured_doctors?: Doctor[] }
  | { __component: "sections.insurance-section"; heading: string; partners?: InsurancePartner[] }
  | { __component: "sections.emergency-section"; heading: string; description: string; icon_features?: IconFeature[]; cta?: CtaButton; phone?: string }
  | { __component: "sections.locations-section"; heading: string; description: string; locations?: Location[] }
  | { __component: "sections.infrastructure-section"; heading: string; description: string; image?: string; features?: string[] }
  | { __component: "sections.testimonial-section"; heading: string; filter_type?: "patient" | "expert" | "all"; testimonials?: Testimonial[] }
  | { __component: "sections.recovery-stories-section"; badge?: string; heading: string; testimonials?: Testimonial[] }
  | { __component: "sections.faq-section"; heading: string; faqs?: FaqItem[]; show_view_all?: boolean }
  | { __component: "sections.contact-form-section"; heading: string; description: string; appointment_types?: string[] }
  | { __component: "sections.rich-text-section"; body: string }
  | { __component: "sections.gallery-section"; heading: string; images: string[] }
  | { __component: "sections.press-mentions-section"; heading: string; mentions: { publication_name: string; logo?: string; article_url?: string }[] }
  // CHANGED: field is "blog_posts" (matches Strapi), not "posts"
  | { __component: "sections.blog-preview-section"; heading: string; description?: string; blog_posts?: BlogPost[] };

export interface GlobalSettings {
  site_name: string;
  logo?: string;
  favicon?: string;
  primary_phone: string;
  secondary_phone: string;
  whatsapp_number: string;
  admissions_email: string;
  nav_links: NavLink[];
  footer_columns: FooterColumn[];
  social_links: SocialLink[];
  company_legal_name: string;
  cin_number: string;
  registered_address: string;
  copyright_text: string;
  default_cta: CtaButton;
  seo_defaults: SeoData;
}