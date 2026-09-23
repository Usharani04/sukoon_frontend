// import { globalSettings, homePageSections, locationsList, doctorsList, servicesList, disordersList, faqsList, testimonialsList } from "./mock-data";
// import { GlobalSettings, Location, Doctor, Service, Disorder, DynamicSection } from "@/types/content";

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

// async function strapiFetch(path: string) {
//   const res = await fetch(`${STRAPI_URL}${path}`, { next: { revalidate: 60 } });
//   if (!res.ok) {
//     console.error(`Strapi fetch failed [${path}]:`, res.status, await res.text());
//     return null;
//   }
//   return res.json();
// }

// export async function fetchGlobalSettings(): Promise<GlobalSettings> {
//   try {
//     const data = await strapiFetch(
//       `/api/global?populate[nav_links][populate]=*&populate[footer_columns][populate]=*&populate[social_links][populate]=*&populate[default_cta][populate]=*&populate[seo_defaults][populate]=*`
//     );
//     if (data?.data) return data.data; // v5: no .attributes wrapper
//   } catch (e) {
//     console.error("fetchGlobalSettings error:", e);
//   }
//   return globalSettings;
// }

// export async function fetchHomepageData(): Promise<DynamicSection[]> {
//   try {
//     const data = await strapiFetch(`/api/homepage?populate[page_builder][populate]=*`);
//     if (data?.data?.page_builder) return data.data.page_builder;
//   } catch (e) {
//     console.error("fetchHomepageData error:", e);
//   }
//   return homePageSections;
// }

// export async function fetchLocations(): Promise<Location[]> {
//   try {
//     const data = await strapiFetch(`/api/locations?populate=*`);
//     if (data?.data) return data.data; // v5: id + fields directly, no .attributes
//   } catch (e) {
//     console.error("fetchLocations error:", e);
//   }
//   return locationsList;
// }

// export async function fetchLocationBySlug(slug: string): Promise<Location | null> {
//   try {
//     const data = await strapiFetch(`/api/locations?filters[slug][$eq]=${slug}&populate=*`);
//     if (data?.data?.[0]) return data.data[0];
//   } catch (e) {
//     console.error("fetchLocationBySlug error:", e);
//   }
//   return locationsList.find((l) => l.slug === slug) || null;
// }

// export async function fetchDoctors(): Promise<Doctor[]> {
//   try {
//     const data = await strapiFetch(`/api/doctors?populate=*`);
//     if (data?.data) return data.data;
//   } catch (e) {
//     console.error("fetchDoctors error:", e);
//   }
//   return doctorsList;
// }

// export async function fetchDoctorBySlug(slug: string): Promise<Doctor | null> {
//   try {
//     const data = await strapiFetch(`/api/doctors?filters[slug][$eq]=${slug}&populate=*`);
//     if (data?.data?.[0]) return data.data[0];
//   } catch (e) {
//     console.error("fetchDoctorBySlug error:", e);
//   }
//   return doctorsList.find((d) => d.slug === slug) || null;
// }

// export async function fetchServices(): Promise<Service[]> {
//   try {
//     const data = await strapiFetch(`/api/services?populate=*`);
//     if (data?.data) return data.data;
//   } catch (e) {
//     console.error("fetchServices error:", e);
//   }
//   return servicesList;
// }

// export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
//   try {
//     const data = await strapiFetch(`/api/services?filters[slug][$eq]=${slug}&populate=*`);
//     if (data?.data?.[0]) return data.data[0];
//   } catch (e) {
//     console.error("fetchServiceBySlug error:", e);
//   }
//   return servicesList.find((s) => s.slug === slug) || null;
// }

// export async function fetchDisorders(): Promise<Disorder[]> {
//   try {
//     const data = await strapiFetch(`/api/disorders?populate=*`);
//     if (data?.data) return data.data;
//   } catch (e) {
//     console.error("fetchDisorders error:", e);
//   }
//   return disordersList;
// }

// export async function fetchDisorderBySlug(slug: string): Promise<Disorder | null> {
//   try {
//     const data = await strapiFetch(`/api/disorders?filters[slug][$eq]=${slug}&populate=*`);
//     if (data?.data?.[0]) return data.data[0];
//   } catch (e) {
//     console.error("fetchDisorderBySlug error:", e);
//   }
//   return disordersList.find((d) => d.slug === slug) || null;
// }

import { globalSettings, homePageSections, locationsList, doctorsList, servicesList, disordersList, faqsList, testimonialsList } from "./mock-data";
import { GlobalSettings, Location, Doctor, Service, Disorder, DynamicSection } from "@/types/content";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

async function strapiFetch(path: string) {
  const res = await fetch(`${STRAPI_URL}${path}`, { next: { revalidate: 60 } });
  if (!res.ok) {
    console.error(`Strapi fetch failed [${path}]:`, res.status, await res.text());
    return null;
  }
  return res.json();
}

// Blog Preview only: attaches each post's cover_image to the blog section.
// Never throws, and leaves every other section untouched.
async function attachBlogCovers(sections: any[]): Promise<void> {
  try {
    const blogSections = sections.filter(
      (s) => s?.__component === "sections.blog-preview-section" && Array.isArray(s.blog_posts) && s.blog_posts.length > 0
    );
    if (blogSections.length === 0) return;

    const data = await strapiFetch(`/api/blog-posts?populate=cover_image&pagination[pageSize]=100`);
    if (!data?.data) return;

    const coverByKey = new Map<string, any>();
    for (const p of data.data) {
      if (p.cover_image) {
        if (p.documentId) coverByKey.set(String(p.documentId), p.cover_image);
        coverByKey.set(String(p.id), p.cover_image);
      }
    }

    for (const section of blogSections) {
      section.blog_posts = section.blog_posts.map((post: any) => ({
        ...post,
        cover_image:
          coverByKey.get(String(post.documentId)) ??
          coverByKey.get(String(post.id)) ??
          post.cover_image ??
          null,
      }));
    }
  } catch (e) {
    console.error("attachBlogCovers error:", e);
  }
}

export async function fetchGlobalSettings(): Promise<GlobalSettings> {
  try {
    const data = await strapiFetch(
      `/api/global?populate[nav_links][populate]=*&populate[footer_columns][populate]=*&populate[social_links][populate]=*&populate[default_cta][populate]=*&populate[seo_defaults][populate]=*`
    );
    if (data?.data) return data.data; // v5: no .attributes wrapper
  } catch (e) {
    console.error("fetchGlobalSettings error:", e);
  }
  return globalSettings;
}

export async function fetchHomepageData(): Promise<DynamicSection[]> {
  try {
    const data = await strapiFetch(`/api/homepage?populate[page_builder][populate]=*`);
    if (data?.data?.page_builder) {
      const sections = data.data.page_builder;
      await attachBlogCovers(sections);
      return sections;
    }
  } catch (e) {
    console.error("fetchHomepageData error:", e);
  }
  return homePageSections;
}

export async function fetchLocations(): Promise<Location[]> {
  try {
    const data = await strapiFetch(`/api/locations?populate=*`);
    if (data?.data) return data.data; // v5: id + fields directly, no .attributes
  } catch (e) {
    console.error("fetchLocations error:", e);
  }
  return locationsList;
}

export async function fetchLocationBySlug(slug: string): Promise<Location | null> {
  try {
    const data = await strapiFetch(`/api/locations?filters[slug][$eq]=${slug}&populate=*`);
    if (data?.data?.[0]) return data.data[0];
  } catch (e) {
    console.error("fetchLocationBySlug error:", e);
  }
  return locationsList.find((l) => l.slug === slug) || null;
}

export async function fetchDoctors(): Promise<Doctor[]> {
  try {
    const data = await strapiFetch(`/api/doctors?populate=*`);
    if (data?.data) return data.data;
  } catch (e) {
    console.error("fetchDoctors error:", e);
  }
  return doctorsList;
}

export async function fetchDoctorBySlug(slug: string): Promise<Doctor | null> {
  try {
    const data = await strapiFetch(`/api/doctors?filters[slug][$eq]=${slug}&populate=*`);
    if (data?.data?.[0]) return data.data[0];
  } catch (e) {
    console.error("fetchDoctorBySlug error:", e);
  }
  return doctorsList.find((d) => d.slug === slug) || null;
}

export async function fetchServices(): Promise<Service[]> {
  try {
    const data = await strapiFetch(`/api/services?populate=*`);
    if (data?.data) return data.data;
  } catch (e) {
    console.error("fetchServices error:", e);
  }
  return servicesList;
}

export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const data = await strapiFetch(`/api/services?filters[slug][$eq]=${slug}&populate=*`);
    if (data?.data?.[0]) return data.data[0];
  } catch (e) {
    console.error("fetchServiceBySlug error:", e);
  }
  return servicesList.find((s) => s.slug === slug) || null;
}

export async function fetchDisorders(): Promise<Disorder[]> {
  try {
    const data = await strapiFetch(`/api/disorders?populate=*`);
    if (data?.data) return data.data;
  } catch (e) {
    console.error("fetchDisorders error:", e);
  }
  return disordersList;
}

export async function fetchDisorderBySlug(slug: string): Promise<Disorder | null> {
  try {
    const data = await strapiFetch(`/api/disorders?filters[slug][$eq]=${slug}&populate=*`);
    if (data?.data?.[0]) return data.data[0];
  } catch (e) {
    console.error("fetchDisorderBySlug error:", e);
  }
  return disordersList.find((d) => d.slug === slug) || null;
}
