import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://echoproductions.com";
  const routes = ["/","/services","/portfolio","/capabilities","/about","/pricing","/resources","/quote","/contact","/help"];
  return routes.map((route) => ({ url: base + route, lastModified: new Date() }));
}
