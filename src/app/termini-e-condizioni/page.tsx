import type { Metadata } from "next";
import type { ReactNode } from "react";
import s from "./termini.module.css";

export const metadata: Metadata = {
  title: "Termini e condizioni per l’ordine",
  description:
    "Informativa sul trattamento dei dati personali per chi ordina con l’app L’Amalfitana Flero.",
};

/* Il testo è l'informativa privacy fornita da Passepartout, che gestisce
   l'app degli ordini: va riportato così com'è, cambia solo la tipografia
   (apostrofi e virgolette curvi). Se Passepartout la aggiorna, si sostituisce
   qui sezione per sezione. */

/** Richiamo a una nota: porta in fondo alla pagina, la nota riporta qui. */
function Rif({ n }: { n: number }) {
  return (
    <sup className={s.rif}>
      <a id={`rif-${n}`} href={`#nota-${n}`} aria-label={`Nota ${n}`}>
        {n}
      </a>
    </sup>
  );
}

function Elenco({ voci }: { voci: ReactNode[] }) {
  return (
    <ul className={s.elenco}>
      {voci.map((voce, i) => (
        <li key={i}>{voce}</li>
      ))}
    </ul>
  );
}

type Riga = { label: string; value: ReactNode };

function Righe({ righe }: { righe: Riga[] }) {
  return (
    <dl className={s.righe}>
      {righe.map((riga) => (
        <div key={riga.label} className={s.riga}>
          <dt>{riga.label}</dt>
          <dd>{riga.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Le due categorie di dati, con le rispettive finalità ---------- */

const OBBLIGATORIA_CONTRATTO =
  "Obbligatoria. L’eventuale rifiuto a fornire, in tutto o in parte, i dati personali comporta l’impossibilità da parte del Titolare di dare esecuzione agli accordi contrattuali o precontrattuali";

const BASE_CONTRATTO =
  "Art. 6, par. 1, lett. b) del GDPR e art. 5, comma 1, lett. b) della Legge Privacy RSM (Contratto o accordo precontrattuale)";

const categorie: { titolo: string; righe: Riga[]; finalita: Riga[][] }[] = [
  {
    titolo: "Dati identificativi, di contatto, commerciali e finanziari",
    righe: [
      {
        label: "Categoria di dati personali",
        value: (
          <Elenco
            voci={[
              "Informazioni di carattere identificativo (nome, cognome, data e luogo di nascita, luogo di residenza, codice fiscale, partita iva e sede, codice ISS, Codice Operatore Economico, username, password, sesso)",
              "Dati di contatto (numerazione telefonica, indirizzo e-mail, PEC)",
              "Dati relativi alle offerte, acquisti o vendite relative all’App L’Amalfitana Flero e/o dei servizi collegati e relativi alle attività di amministrativo-contabili",
              <>
                Dati di natura finanziaria
                <Rif n={3} />
              </>,
            ]}
          />
        ),
      },
      {
        label: "Tempi di conservazione",
        value: (
          <>
            Sino a conclusione del rapporto di contrattuale o dell’obbligo di
            legge
            <Rif n={5} />
          </>
        ),
      },
      {
        label: "Destinatari o categorie di destinatari dei dati personali",
        value: (
          <Elenco
            voci={[
              "Esercenti (selezionati dall’Utente)",
              "Autorità amministrative, di controllo e/o vigilanza",
            ]}
          />
        ),
      },
    ],
    finalita: [
      [
        {
          label: "Finalità del trattamento",
          value: (
            <>
              Dare esecuzione ai contratti relativi all’App L’Amalfitana Flero
              e/o ai servizi collegati
              <Rif n={4} />
            </>
          ),
        },
        { label: "Base giuridica", value: BASE_CONTRATTO },
        {
          label:
            "Natura del conferimento e conseguenze di un eventuale mancato conferimento",
          value: OBBLIGATORIA_CONTRATTO,
        },
      ],
      [
        {
          label: "Finalità del trattamento",
          value: (
            <>
              Offrire sicurezza e protezione sia ai dati personali ricevuti che
              ai sistemi di sicurezza di
              <Rif n={6} /> e soddisfare esigenze di giustizia e/o legali
              (risposta ad eventuali richieste provenienti dalle Autorità
              competenti)
            </>
          ),
        },
        {
          label: "Base giuridica",
          value:
            "Art. 6, par. 1, lett. c) del GDPR e art. 5, comma 1, lett. c) della Legge Privacy RSM (Obbligo di legge)",
        },
        {
          label:
            "Natura del conferimento e conseguenze di un eventuale mancato conferimento",
          value:
            "Obbligatoria. L’eventuale rifiuto a fornire, in tutto o in parte, i dati personali comporta l’impossibilità da parte del Titolare di adempiere ad obblighi normativi",
        },
      ],
    ],
  },
  {
    titolo: "Dati tecnici",
    righe: [
      {
        label: "Categoria di dati personali",
        value: (
          <>
            Dati tecnici (indirizzo IP, dati di navigazione e ogni altro dato
            che riguarda l’interazione dell’Utente con l’App L’Amalfitana Flero)
            <Rif n={7} />
          </>
        ),
      },
      {
        label: "Destinatari o categorie di destinatari dei dati personali",
        value: "Fornitori di servizi informatici",
      },
    ],
    finalita: [
      [
        {
          label: "Finalità del trattamento",
          value:
            "Prevenire le frodi; effettuare la promozione della sicurezza e della protezione dei dati; monitoraggio del traffico di rete",
        },
        {
          label: "Base giuridica",
          value: (
            <>
              Art. 6, par. 1, lett. f) del GDPR e art. 5, comma 1, lett. f)
              della Legge Privacy RSM (Legittimo interesse del Titolare del
              trattamento)
              <Rif n={8} />
            </>
          ),
        },
        {
          label:
            "Natura del conferimento e conseguenze di un eventuale mancato conferimento",
          value:
            "Obbligatoria. L’eventuale rifiuto a fornire, in tutto o in parte, i dati personali comporta l’impossibilità da parte del Titolare di perseguire i propri interessi legittimi",
        },
        {
          label: "Tempi di conservazione",
          value:
            "Fino al raggiungimento del legittimo interesse del Titolare del trattamento",
        },
      ],
      [
        {
          label: "Finalità del trattamento",
          value:
            "Monitorare il funzionamento tecnico e le prestazioni dell’App L’Amalfitana Flero",
        },
        { label: "Base giuridica", value: BASE_CONTRATTO },
        {
          label:
            "Natura del conferimento e conseguenze di un eventuale mancato conferimento",
          value: OBBLIGATORIA_CONTRATTO,
        },
        {
          label: "Tempi di conservazione",
          value:
            "Periodo massimo di 45 gg. ad eccezione del codice univoco del dispositivo che verrà memorizzato in maniera permanente in quanto necessario al funzionamento dell’App L’Amalfitana Flero",
        },
      ],
    ],
  },
];

/* ---------- Note in fondo ---------- */

/** Una nota per voce, ognuna con i suoi paragrafi. */
const note: string[][] = [
  [
    "Fermo restando che, la Legge Privacy RSM risulta essere – come peraltro specificato nella relazione al progetto di legge redatta (in materia) dal Segretario di Stato Affari Interni in data 15 maggio 2018 – «assolutamente aderente al Regolamento» (ovvero al GDPR).",
  ],
  [
    "La definizione di «dato personale» è fornita all’art. 2, comma 1, lett. a) della Legge Privacy RSM e all’art. 4, primo capoverso, lett. a) del GDPR.",
  ],
  [
    "Dati di natura finanziaria: tenuto conto che l’App L’Amalfitana Flero supporta pagamenti e transazioni con terze parti, potrebbe rendersi necessario fornire taluni dati per l’identificazione e la verifica dell’identità dell’Interessato e del mezzo di pagamento utilizzato, come ad esempio il nome, il cognome, il numero di carta di credito/debito, la data di scadenza della carta. Tali dati laddove raccolti dal Titolare del Trattamento verranno salvati solamente informa crittografata. In alcuni casi per consentire all’Interessato di velocizzare, in futuro, nuove ed analoghe operazioni di pagamento, l’Esercente potrebbe memorizzare solamente le ultime quattro cifre del numero della carta.",
  ],
  [
    "Tramite le informazioni ed i dati comunicati (dati relativi alle offerte, acquisti o vendite relative all’App L’Amalfitana Flero e/o ai servizi collegati forniti durante una trattativa precontrattuale ed il suo successivo perfezionamento ed ogni altro dato fornito in riferimento a tali operazioni), il Titolare del trattamento è in grado di dare esecuzione alle attività ed alle prestazioni contrattuali richieste per mezzo dell’App L’Amalfitana Flero dall’Interessato (anche in nome e/o per conto di terzi), ivi comprese le attività amministrative e contabili, la gestione di adempimenti fiscali, pagamenti ed eventuale fatturazione. Le informazioni raccolte serviranno altresì per contattare l’Interessato relativamente al suo account ed eventualmente risolvere problemi relativi allo stesso account. I dati personali potranno essere inoltre trattati per verificare e risolvere eventuali anomalie di funzionamento dell’App L’Amalfitana Flero; per eseguire analisi dei dati e test, per condurre ricerche e indagini e per sviluppare nuove funzionalità e servizi al fine di fornire all’Interessato un’esperienza sempre migliore.",
  ],
  [
    "Il periodo di conservazione dei dati personali è determinato (o determinabile) a seconda della finalità oppure della base giuridica in virtù della quale il trattamento debba avvenire. Nell’ipotesi in cui il dato personale sia trattato dall’Esercente per le proprie finalità, i dati dell’Interessato verranno memorizzati nel software gestionale utilizzato dall’Esercente e conservati per il tempo necessario per eseguire correttamente ed integralmente le prestazioni previste dall’App L’Amalfitana Flero, comprese quelle strettamente connesse e collegate alla sua cessazione. Pertanto la conservazione dei dati avverrà, a cura dell’Esercente, per un periodo di tempo dallo stesso definito.",
    "Per quanto attiene al Titolare del trattamento, rimane altresì salvo il caso in cui la maggior (o minore) conservazione dei dati debba essere effettuata per soddisfare esigenze di giustizia, ad esempio per ottemperare ad una richiesta dell’autorità amministrativa, autorità di controllo e/o di vigilanza ovvero per l’esercizio e/o per la tutela (in via giudiziale e/o stragiudiziale) dei propri diritti o per esercitare la difesa contro denunce e/o azioni legali. Una volta terminato il periodo di conservazione, i dati personali verranno rimossi in modo sicuro.",
  ],
  [
    "I dati raccolti vengono altresì utilizzati per verificare l’identità ed autenticare gli Utenti, consentire di effettuare e/o ricevere pagamenti, proteggere dalle possibili frodi e/o abusi, rispondere ad una richiesta o ad un reclamo, eseguire controlli, per prevenire, rilevare, mitigare e/o accertare violazioni della sicurezza e/o attività anche solo potenzialmente vietate, illegali e/o illecite.",
  ],
  [
    "Per “dati tecnici” si intendono: indirizzo IP, dati di navigazione, geolocalizzazione ed ogni altro dato che riguarda l’interazione dell’Interessato con l’App L’Amalfitana Flero e/o con i servizi collegati, ad esempio quando si visualizzano o si cercano i contenuti, si creano osi accede al proprio account e/o ad un’area riservata. Vengono inoltre raccolti i dati relativi ai dispositivi e/o ai computer utilizzati dall’Interessato per accedere all’App L’Amalfitana Flero e/o ai servizi collegati, inclusi il codice univoco del dispositivo, la lingua, il sistema operativo.",
  ],
  [
    "Rispetto ai legittimi interessi del Titolare del trattamento è possibile proporre opposizione.",
  ],
];

/* ---------- Indice ---------- */

const indice = [
  { id: "premessa", label: "Premessa" },
  { id: "titolare", label: "Titolare del trattamento" },
  { id: "fonte", label: "Fonte dei dati" },
  { id: "trattamento", label: "Come vengono trattati i dati" },
  { id: "terze-parti", label: "Dati di soggetti terzi" },
  { id: "diritti", label: "Diritti dell’interessato" },
  { id: "note", label: "Note" },
];

export default function TerminiPage() {
  return (
    <section className={s.page}>
      <header className={s.head}>
        <h1 className={s.title}>Termini e condizioni per l’ordine</h1>
        <p className={s.sub}>
          Informativa sul trattamento dei dati personali – L’Amalfitana Flero
        </p>
      </header>

      <div className={s.inner}>
        {/* Di lato, l'indice: resta fermo mentre si legge */}
        <nav className={s.toc} aria-labelledby="indice-titolo">
          <p id="indice-titolo" className={s.label}>
            Indice
          </p>
          <ol>
            {indice.map((voce) => (
              <li key={voce.id}>
                <a href={`#${voce.id}`}>{voce.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={s.body}>
          <section id="premessa" className={s.section}>
            <h2>Premessa ed ambito di applicazione</h2>
            <p>
              La presente informativa, fornita ai sensi degli articoli 13 e 14
              del Regolamento UE 2016/679 (di seguito “GDPR”) ed ai sensi degli
              articoli 13 e 14 della Legge della Repubblica di San Marino n.
              171/2018 (di seguito “Legge Privacy RSM”), viene rilasciata al
              fine di rendere consapevoli tutti gli Interessati circa le
              modalità e le finalità del trattamento
              <Rif n={1} /> dei dati personali
              <Rif n={2} /> raccolti da Passepartout S.p.A. nell’ambito del
              trattamento dei dati personali effettuato per mezzo della App
              “L’Amalfitana Flero” (di seguito “App L’Amalfitana Flero”).
            </p>
          </section>

          <section id="titolare" className={s.section}>
            <h2>
              Titolare del trattamento dei dati, Rappresentante nell’Unione
              Europea e Responsabile della protezione dei dati
            </h2>
            <p>
              Titolare del trattamento dei dati personali è Passepartout S.p.A.
              (di seguito anche “Titolare del trattamento”), con sede nella
              Repubblica di San Marino in Dogana (Cap 47891) in Via Consiglio
              dei Sessanta n. 99, contattabile, ai fini della presente
              informativa, all’indirizzo e-mail{" "}
              <a href="mailto:privacy@passepartout.sm">privacy@passepartout.sm</a>
              .
            </p>
            <p>
              Il Titolare del trattamento ha designato come proprio
              Rappresentante nell’Unione Europea, ai sensi dell’art. 27 del
              GDPR, la società Paci Rappresentante Privacy S.r.l., con sede a
              Rimini, in P.tta Gregorio da Rimini n. 1, contattabile, ai fini
              della presente informativa, all’indirizzo e-mail{" "}
              <a href="mailto:passepartout@pacirappresentanteprivacy.eu">
                passepartout@pacirappresentanteprivacy.eu
              </a>{" "}
              oppure al numero di telefono{" "}
              <a href="tel:+390541902128">0541 902128</a>.
            </p>
            <p>
              Il Responsabile della protezione dei dati designato dal Titolare
              del trattamento è contattabile ai fini della presente informativa,
              all’indirizzo e-mail{" "}
              <a href="mailto:dpo@passepartout.sm">dpo@passepartout.sm</a>.
            </p>
          </section>

          <section id="fonte" className={s.section}>
            <h2>Fonte da cui hanno origine i dati personali</h2>
            <p>
              I dati personali oggetto della presente informativa riguardano
              quelli ottenuti dal Titolare del trattamento direttamente
              dall’Interessato per mezzo dell’App L’Amalfitana Flero e dalla
              stessa inviati all’Esercente selezionato dall’interessato.
            </p>
          </section>

          <section id="trattamento" className={s.section}>
            <h2>
              Modalità di trattamento, categorie di dati personali, finalità,
              base giuridica, natura del conferimento dei dati e conseguenze di
              un eventuale mancato conferimento, tempi di conservazione,
              destinatari e categorie di destinatari dei dati personali
            </h2>
            <p>
              I dati personali vengono trattati dal Titolare del trattamento nel
              momento in cui l’Utente si avvale dell’App L’Amalfitana Flero per
              effettuare la richiesta di servizi ad un esercente.
            </p>
            <p>
              Oltre al titolare del trattamento dei dati, avranno accesso ai
              dati personali, gli esercenti presso i quali l’utente intende
              effettuare la propria richiesta di servizi. Pertanto, per mezzo
              dell’App L’Amalfitana Flero, l’Esercente selezionato
              dall’Interessato potrà, in qualità di autonomo Titolare del
              trattamento:
            </p>

            <h3>a) Comunicare con l’Interessato.</h3>
            <p>
              I dati potrebbero essere utilizzati per contattare l’Interessato
              per le finalità contenute nella presente informativa e nei casi
              previsti dalla legge. Il contatto e la comunicazione potrebbe
              avvenire via e-mail (anche con posta elettronica certificata),
              telefono, SMS, posta cartacea, notifiche push su dispositivi
              mobili.
            </p>
            <p>
              L’Esercente potrà utilizzare le informazioni dell’Interessato per
              inviare comunicazioni di servizio e/o rispondere alle sue
              richieste, per offrire sconti e promozioni speciali, per conoscere
              le sue opinioni tramite sondaggi o questionari.
            </p>

            <h3>b) Effettuare attività di marketing.</h3>
            <p>
              Con l’espresso ed apposito consenso dell’Interessato da
              manifestarsi secondo le modalità specificamente indicate di volta
              in volta, l’Esercente potrà utilizzare le informazioni
              dell’Interessato stesso per promuovere nuovi prodotti o servizi a
              cui potrebbe essere interessato, effettuare attività di marketing
              tramite telefonate, e-mail (anche con posta elettronica
              certificata) o SMS, via posta cartacea, notifiche push su
              dispositivi mobili, nonché per il tramite di soggetti terzi
              appositamente incaricati.
            </p>
            <p>
              L’Interessato potrà in ogni caso revocare il consenso espresso
              sulle attività di marketing seguendo le apposite indicazioni
              inserite all’interno dei medesimi strumenti utilizzati (es.
              newsletter, e-mail etc.) oppure inviando un’email all’indirizzo
              dell’Esercente.
            </p>

            <div className={s.stacco}>
              <p>
                Il trattamento dei dati personali raccolti avverrà in modo
                lecito e secondo correttezza nel rispetto del GDPR e, ove
                applicabile, della Legge Privacy RSM, con utilizzo di sistemi
                manuali o automatizzati che consentano di memorizzare, gestire e
                trasmettere (sia in formato cartaceo che elettronico) i dati
                stessi unicamente per le finalità indicate nella presente
                informativa. Il Titolare del trattamento garantisce la messa in
                atto ed il mantenimento di misure tecniche ed organizzative
                idonee per garantire un livello di sicurezza adeguato ad ogni
                possibile rischio, effettuando altresì costantemente una serie
                di controlli tecnici, amministrativi e fisici per mantenere
                riservati e sicuri i dati personali dell’Interessato.
                L’interessato potrà conoscere nel dettaglio le modalità e le
                procedure a tal fine utilizzate da Passepartout consultando la
                pagina{" "}
                <a
                  href="https://privacy.passepartout.net/misuresicurezza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacy.passepartout.net/misuresicurezza
                </a>
                . Solo il personale debitamente autorizzato dal Titolare del
                trattamento (e sotto la responsabilità del medesimo) potrà
                accedere ai dati personali raccolti.
              </p>
              <p>
                Il Titolare del trattamento potrebbe conservare o divulgare i
                dati personali laddove necessario per soddisfare esigenze di
                giustizia ad esempio perché richiesti da un’Autorità
                amministrativa, un’Autorità di controllo e/o vigilanza ovvero
                nell’ambito di un procedimento giudiziario o, comunque, in
                ottemperanza a disposizioni di legge, o comunque per l’esercizio
                di diritti legali o per la difesa contro denunce e/o azioni
                legali oppure per prevenire, individuare o indagare su attività
                illegali, frodi, abusi, violazioni delle posizioni giuridiche
                soggettive o laddove vi siano minacce anche solo potenziali alla
                sicurezza dell’App L’Amalfitana Flero o alla sicurezza fisica di
                qualsiasi persona.
              </p>
              <p>
                Fatto salvo il caso in cui uno o più destinatari di cui al
                presente articolo si trovi in un Paese Terzo e/o Estero o
                rappresenti un’organizzazione internazionale, e fatti salvi i
                casi ammessi espressamente per legge (Legge Privacy RSM e/o
                GDPR), il Titolare del Trattamento non trasferirà dati personali
                verso un Paese diverso dalla Repubblica di San Marino e/o verso
                un’organizzazione internazionale.
              </p>
              <p>
                L’eventuale trasferimento dei dati personali verso un Paese
                straniero e/o verso un’organizzazione internazionale avverrà in
                ogni caso nel pieno rispetto di termini, modalità e condizioni
                previste:
              </p>
              <Elenco
                voci={[
                  "dalla Legge Privacy RSM – agli articoli 46, 47, 48 e 50 – laddove il trasferimento contempli, rispettivamente, una delle ipotesi ivi disciplinate; nonché,",
                  "dal Regolamento UE 2016/679 – agli articoli 45, 46, 47 e 49 – laddove il trasferimento contempli, rispettivamente, una delle ipotesi ivi disciplinate.",
                ]}
              />
              <p>
                A tale specifico riguardo, si precisa che la regolamentazione
                del trasferimento di dati personali verso un Paese Terzo (e/o
                verso un’organizzazione internazionale) deve intendersi
                integrata, a tutti gli effetti di legge, delle clausole
                contrattuali tipo (di cui all’art. 47, comma 2, lett. c) della
                Legge Privacy RSM e, ove applicabile, di cui all’art. 46, comma
                2, lett. c, del Regolamento UE 2016/679) adottate dalla
                Commissione Europea e di volta in volta vigenti.
              </p>
              <p>
                Il Titolare del trattamento non sottopone i dati personali
                ricevuti a processi esclusivamente automatizzati per l’assunzione
                di decisioni o la profilazione quali, a titolo esemplificativo,
                quelli utili per valutare le preferenze o gli interessi personali
                dell’Interessato. Non vengono in ogni caso assunte
                sull’Interessato decisioni esclusivamente automatizzate (senza
                quindi interventi umani) che possano avere conseguenze
                significative nei suoi confronti, salvo circostanze in cui tale
                decisione sia necessaria per dare esecuzione ad un contratto
                oppure perché l’Utente abbia espressamente rilasciato il suo
                consenso.
              </p>
              <p>
                Il Titolare del trattamento non tratta dati personali di soggetti
                minori. Se l’Utente è un minore, ai sensi dell’art. 7, c.1 della
                Legge Privacy RSM e, ove applicabile, dell’art 8, c. 1 del GDPR,
                dovrà legittimare il suo consenso attraverso l’autorizzazione dei
                genitori o di chi ne esercita la tutela legale.
              </p>
              <p>
                Il Titolare del trattamento tratta le seguenti categorie di dati
                personali correlate a specifiche finalità, basi giuridiche e
                tempi di conservazione. Viene inoltre indicata l’obbligatorietà o
                meno del conferimento dei dati personali e le eventuali
                conseguenze in caso di mancato conferimento, nonché i destinatari
                o le categorie di destinatari dei dati personali.
              </p>
            </div>

            {categorie.map((categoria) => (
              <article key={categoria.titolo} className={s.categoria}>
                <p className={s.label}>Categoria di dati personali</p>
                <h3>{categoria.titolo}</h3>
                <Righe righe={categoria.righe} />
                {categoria.finalita.map((righe, i) => (
                  <div key={i} className={s.finalita}>
                    <h4>Finalità {i + 1}</h4>
                    <Righe righe={righe} />
                  </div>
                ))}
              </article>
            ))}

            <div className={s.stacco}>
              <p>
                Non vengono raccolti in alcun modo e quindi non vengono
                trattati, categorie particolari di dati personali quali ad
                esempio i dati che rivelino l’origine razziale o etnica, le
                opinioni politiche, le convinzioni religiose o filosofiche, o
                l’appartenenza sindacale, nonché trattare dati genetici, dati
                biometrici intesi a identificare in modo univoco una persona
                fisica, dati relativi alla salute o alla vita sessuale o
                all’orientamento sessuale della persona.
              </p>
              <p>
                Fermo restando quanto sopra, si precisa che il Titolare del
                trattamento potrebbe raccogliere ulteriori dati personali oppure
                integrare quelli già in suo possesso con altri dati ed
                informazioni raccolti da soggetti terzi (ad esempio, i propri
                fornitori, distributori, partner commerciali, etc.), utilizzando
                altresì dati ed informazioni di pubblico dominio, informazioni
                raccolte tramite apposite banche dati oppure ulteriori
                informazioni di contatto, dati di verifica del credito ed
                informazioni relative alla solvibilità fornite dagli uffici
                preposti in conformità alla vigente normativa.
              </p>
              <p>
                Il Titolare del trattamento potrebbe raccogliere dati anche
                tramite i social media utilizzati dall’Interessato. Laddove,
                infatti, l’Interessato colleghi il proprio account al rispettivo
                sito di social media, tale social media potrebbe autorizzare il
                Titolare del trattamento ad accedere automaticamente a
                determinati dati in suo possesso. Con tale possibilità
                l’Interessato fornisce espressamente al Titolare del trattamento
                accesso a siti con i vari contenuti in essi previsti.
              </p>
            </div>
          </section>

          <section id="terze-parti" className={s.section}>
            <h2>Dati personali di soggetti terzi forniti dall’Interessato</h2>
            <p>
              Fatti salvi i casi in cui ricorra una delle diverse fattispecie
              previste nella presente informativa, ogni qual volta si renda
              necessario da parte dell’Interessato fornire e/o comunicare al
              Titolare del trattamento, dati personali riferibili a soggetti
              terzi diversi dall’Interessato (di seguito per brevità “Terze
              Parti”),
            </p>
            <Elenco
              voci={[
                "il Titolare del trattamento non fornirà alcuna informativa alle Terze Parti, laddove ricorrano i presupposti di cui all’articolo 14, comma 5 della Legge Privacy RSM e, ove applicabile, dell’art. 14, comma 5, del GDPR;",
                "al di fuori dei casi di cui all’articolo 14, comma 5, della Legga Privacy RSM e, ove applicabile, dell’art. 14, comma 5 del GDPR, l’Interessato dovrà preventivamente informare le Terze Parti sulla destinazione dei loro dati personali (dall’Interessato forniti) nonché sulle modalità tramite cui il Titolare del trattamento potrebbe venire a conoscenza dei dati, in conformità a quanto previsto nella presente informativa.",
              ]}
            />
            <p>
              In difetto di quanto previsto nel presente paragrafo o laddove si
              ritenga che vi sia anche solo potenzialmente il rischio di un
              trattamento non lecito dei dati di Terze Parti, il Titolare del
              trattamento si riserva di non procedere con alcuna attività nei
              confronti dell’Interessato, ivi comprese quelle necessarie per dare
              correttamente esecuzione ai contratti instaurati o da instaurarsi
              (con gli Interessati) per avvalersi dei dell’App L’Amalfitana Flero
              e che pertanto si dovranno ritenere legittimamente interrotte e/o
              sospese a seconda dei casi.
            </p>
          </section>

          <section id="diritti" className={s.section}>
            <h2>Diritti dell’interessato</h2>
            <p>
              Il GDPR e la Legge Privacy RSM riconoscono all’Interessato
              l’esercizio di specifici diritti richiamati di seguito:
            </p>
            <Elenco
              voci={[
                "Diritto di ottenere l’accesso ai dati personali;",
                "Diritto di rettifica ed integrazione;",
                "Diritto alla cancellazione dei dati («diritto all’oblio») se sussistono i presupposti di legge;",
                "Diritto alla limitazione del trattamento nei casi previsti dalla legge;",
                "Diritto alla portabilità del dato;",
                "Diritto di opporsi in qualsiasi momento al trattamento;",
                "Diritto di non essere sottoposto a una decisione basata unicamente sul trattamento automatizzato, compresa la profilazione.",
              ]}
            />
            <p>
              L’Interessato, qualora l’acquisizione dei dati da parte del
              Titolare sia avvenuta a seguito di rilascio del consenso, ha il
              diritto di revocare il consenso in qualsiasi momento.
            </p>
            <p>
              I diritti di cui sopra possono essere esercitati dall’interessato
              mediante richiesta indirizzata al Titolare del trattamento sopra
              indicato.
            </p>
            <p>
              L’interessato inoltre, qualora ritenga violato uno o più dei
              propri diritti, può proporre reclamo all’Autorità Garante per la
              Protezione dei dati personali secondo le modalità indicate dalla
              stessa Autorità.
            </p>
            <p>
              La presente informativa viene rilasciata a completa ed integrale
              sostituzione di eventuali altre precedenti versioni.
            </p>
          </section>

          <section id="note" className={`${s.section} ${s.note}`}>
            <h2>Note</h2>
            <ol>
              {note.map((paragrafi, i) => (
                <li key={i} id={`nota-${i + 1}`}>
                  <span className={s.numero}>{i + 1}</span>
                  <div>
                    {paragrafi.map((testo, j) => (
                      <p key={j}>
                        {testo}
                        {/* In coda all'ultimo paragrafo, il ritorno al testo */}
                        {j === paragrafi.length - 1 && (
                          <a
                            href={`#rif-${i + 1}`}
                            className={s.torna}
                            aria-label={`Torna al richiamo della nota ${i + 1}`}
                          >
                            ↑
                          </a>
                        )}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </section>
  );
}
