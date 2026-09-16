import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://stacknet.dev/sitemap.xml",
    host: "https://stacknet.dev",
  };
}
