import type { MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  const base = getBaseUrl();

  return {
    name: "Lara Croft Fans",
    short_name: "LCF",
    description: "A fan-made Tomb Raider portal celebrating Lara Croft's legacy.",
    start_url: `${base}/en`,
    scope: base,
    display: "standalone",
    theme_color: "#282828",
    background_color: "#000000",
    categories: ["games", "entertainment", "fan site"],
    icons: [
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
