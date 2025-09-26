import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jukboks.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/app`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}