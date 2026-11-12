import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Il robots.txt: tutto aperto ai motori di ricerca, con l'indirizzo della
    mappa del sito. Le anteprime di Vercel hanno già un loro robots che le
    tiene fuori dagli indici. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).href,
  };
}
