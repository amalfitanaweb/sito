import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/* La mappa del sito per Search Console: si trova su /sitemap.xml.

   `lastModified` è la data dell'ultima volta che è cambiato il contenuto
   della pagina, non quella della pubblicazione: va aggiornata a mano quando
   si rimette mano a una pagina, altrimenti dice il falso e Google smette di
   darle peso. */
const PAGINE = [
  { path: "/", lastModified: "2026-09-24", changeFrequency: "monthly", priority: 1 },
  {
    path: "/menu",
    lastModified: "2026-09-28",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/pizze-gourmet",
    lastModified: "2026-09-18",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/filosofia",
    lastModified: "2026-09-24",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/contatti",
    lastModified: "2026-09-24",
    changeFrequency: "yearly",
    priority: 0.6,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGINE.map((pagina) => ({
    url: new URL(pagina.path, site.url).href,
    lastModified: pagina.lastModified,
    changeFrequency: pagina.changeFrequency,
    priority: pagina.priority,
  }));
}
