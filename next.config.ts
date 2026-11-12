import type { NextConfig } from "next";

/* Gli indirizzi del vecchio sito, quelli che Google ha ancora in elenco, e la
   pagina che li sostituisce. Il dominio non cambia: cambiano solo gli
   indirizzi, quindi è il sito nuovo a doverli reindirizzare. La home resta la
   home e non ha bisogno di niente.

   Se un indirizzo nuovo cambia, qui si corregge la destinazione e basta. */
const VECCHIE_PAGINE: [vecchia: string, nuova: string][] = [
  ["/impasti-pizza", "/filosofia#impasti"],
  ["/ingredienti-e-farine", "/filosofia#materie-prime"],
  ["/pizze-da-asporto", "/menu"],
  ["/pizza-consegna-a-domicilio", "/contatti"],
  ["/selezione-gourmet", "/pizze-gourmet"],
];

const nextConfig: NextConfig = {
  // La home dell'utente contiene un package-lock.json: fissiamo la root
  // del workspace alla cartella del progetto.
  turbopack: {
    root: __dirname,
  },

  // 301 e non 308 (che sarebbe `permanent: true`): è quello che si aspetta
  // chi legge i log e quello che i vecchi client capiscono senza storie.
  // Per Google i due valgono uguale.
  redirects() {
    return VECCHIE_PAGINE.map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
