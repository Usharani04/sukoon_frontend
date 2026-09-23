import { fetchHomepageData } from "@/lib/strapi";
import { DynamicZoneRenderer } from "@/components/dynamic-zone/DynamicZoneRenderer";

export const revalidate = 60;

export default async function HomePage() {
  const sections = await fetchHomepageData();

  return (
    <div>
      <DynamicZoneRenderer sections={sections} />
    </div>
  );
}
