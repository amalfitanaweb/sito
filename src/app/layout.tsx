import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/data/site";
import "./globals.css";

// Didot Bold per menu e titoli (font locale), Didot Italic per i corsivi.
const didot = localFont({
  src: [
    { path: "./fonts/Didot-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Didot-Italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-didot",
  display: "swap",
});

// Montserrat per i paragrafi.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Base per gli indirizzi dei metadati (anteprime social, canonical):
  // senza, Next li scrive relativi e fuori dal sito non risolvono.
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${didot.variable} ${montserrat.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>

        {/* iubenda, privacy controls e cookie solution: banner del consenso
            e blocco dei cookie prima del consenso.

            afterInteractive e non beforeInteractive: il blocco automatico
            passa in rassegna script, immagini e video e ci aggiunge degli
            attributi suoi (data-cmp-info, data-cmp-ab). Se lo fa prima che
            React si agganci alla pagina, React trova un HTML diverso da
            quello del server e segnala un errore di hydration. Così parte
            subito dopo, e da lì tiene d'occhio tutto quello che entra nella
            pagina.

            Se un giorno si aggiungono script di terzi (statistiche, pixel),
            vanno messi dopo questo Script, mai prima. */}
        <Script src={site.iubenda.widget} strategy="afterInteractive" />

        {/* Apre privacy e cookie policy in un popup: cerca nella pagina i
            link con la classe "iubenda-embed" (nel footer). Non serve
            subito, quindi a pagina caricata, come nel codice di iubenda. */}
        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
