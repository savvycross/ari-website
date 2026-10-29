import type { MetadataRoute } from "next";
import { engagements } from "@/data/experience";
import { nav, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...nav.map((n) => n.href),
    ...engagements.map((e) => `/experience/${e.slug}/`),
    "/privacy-policy/",
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
