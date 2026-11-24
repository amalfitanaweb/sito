import { Fragment } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/data/site";
import s from "./Footer.module.css";

// Wordmark come nel logo (Didot Bold, apostrofo tipografico).
const WORDMARK = "L’Amalfitana";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}`,
)}`;

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
  /** Documento iubenda: si apre in un popup sopra la pagina. */
  iubenda?: boolean;
};

// Le classi che iubenda.js cerca per aprire il documento in un popup:
// "iubenda-nostyle no-brand" lo lascia un link come gli altri, senza il
// bottone e il marchio di iubenda.
const IUBENDA_POPUP = "iubenda-nostyle no-brand iubenda-noiframe iubenda-embed";

// Quattro liste di link sotto alle colonne incorniciate.
// Privacy e cookie policy stanno su iubenda; i termini e condizioni sono
// l'informativa dell'app per gli ordini, pagina del sito.
const columns: { title: string; links: FooterLink[] }[] = [
  { title: "Esplora", links: site.nav },
  {
    title: "Legale",
    links: [
      {
        label: "Privacy Policy",
        href: site.iubenda.privacyPolicy,
        iubenda: true,
      },
      { label: "Termini e condizioni", href: "/termini-e-condizioni" },
      {
        label: "Cookie Policy",
        href: site.iubenda.cookiePolicy,
        iubenda: true,
      },
    ],
  },
  {
    title: "Azioni",
    links: [
      { label: "Vedi il menù", href: "/menu" },
      {
        label: "Menù d’asporto",
        href: "/assets/menu-amalfitana.pdf",
        external: true,
      },
      { label: "Ordina ora", href: site.orderPhoneHref },
    ],
  },
  {
    title: "Social",
    links: site.social.map((so) => ({ ...so, external: true })),
  },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      {/* Colonne incorniciate: due a sinistra, ornamento al centro, due a destra */}
      <div className={s.top}>
        <section className={s.cell} aria-labelledby="footer-where">
          <h2 id="footer-where" className={s.cellTitle}>
            Dove siamo
          </h2>
          <div className={s.cellBody}>
            <p>
              <strong>{site.address.locality}</strong>
              <br />
              {site.address.street}
              <br />
              {site.address.city}
            </p>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer">
              Apri in Google Maps
            </a>
          </div>
        </section>

        <section
          className={`${s.cell} ${s.cellDivided}`}
          aria-labelledby="footer-hours"
        >
          <h2 id="footer-hours" className={s.cellTitle}>
            Orari
          </h2>
          <div className={s.cellBody}>
            <ul className={s.hours}>
              {site.hours.map((h) => (
                <li key={h.days}>
                  <strong>{h.days}</strong>
                  {/* Ogni fascia resta intera, si va a capo solo al "·": gli
                      spazi non divisibili non bastano, dopo il trattino "–"
                      il browser può spezzare comunque. */}
                  <span>
                    {h.time.split(" · ").map((range, i) => (
                      <Fragment key={range}>
                        {i > 0 && " · "}
                        <span className={s.range}>{range}</span>
                      </Fragment>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className={s.ornament} aria-hidden="true">
          <span className={s.symbol} />
        </div>

        <section className={s.cell} aria-labelledby="footer-contact">
          <h2 id="footer-contact" className={s.cellTitle}>
            Contatti
          </h2>
          <div className={s.cellBody}>
            <p>
              <strong>Ordini</strong>
              <br />
              <a href={site.orderPhoneHref}>{site.orderPhone}</a>
            </p>
            <p>
              <strong>Telefono</strong>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <a href={`mailto:${site.email}`}>Scrivici</a>
          </div>
        </section>

        <section
          className={`${s.cell} ${s.cellDivided}`}
          aria-labelledby="footer-newsletter"
        >
          <h2 id="footer-newsletter" className={s.cellTitle}>
            Newsletter
          </h2>
          <div className={s.cellBody}>
            <p>
              Ricevi le novità.
              <br />
              Presto disponibile…
            </p>
          </div>
        </section>
      </div>

      {/* Liste di link */}
      <div className={s.links}>
        {columns.map((col) => (
          <div key={col.title} className={s.col}>
            <h3 className={s.colTitle}>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link.href}>
                  {link.disabled ? (
                    // Pagina ancora da fare: la voce resta, senza link
                    <span className={s.off}>{link.label}</span>
                  ) : link.iubenda ? (
                    // Senza JavaScript (o prima che iubenda.js arrivi) resta
                    // un normale link alla pagina di iubenda
                    <a
                      href={link.href}
                      className={IUBENDA_POPUP}
                      title={link.label}
                    >
                      {link.label}
                    </a>
                  ) : link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : link.href.startsWith("/") ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    // tel: e mailto: restano nella stessa scheda
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Wordmark a tutta larghezza */}
      <Reveal className={s.brand} y={28}>
        <p className={s.wordmark}>
          <span className="visually-hidden">{site.name}</span>
          <span aria-hidden="true">{WORDMARK}</span>
        </p>
      </Reveal>

      <div className={s.bottom}>
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <p>P.IVA {site.vat} · Tutti i diritti riservati</p>
        <p>
          Website by <span className={s.credit}>Erma Studio</span>
        </p>
      </div>
    </footer>
  );
}
