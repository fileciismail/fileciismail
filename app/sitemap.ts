import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/hizmetler", "/hakkimizda", "/iletisim"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified,
    }),
  );

  const serviceRoutes = services.map((item) => ({
    url: `${site.url}/hizmetler/${item.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
