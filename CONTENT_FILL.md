# Mappa di riempimento base - Studio Tecnico A'RS

- Cliente: Studio Tecnico A'RS (geometri Tosato e Bonifati), Mestre-Venezia
- Scopo: riempire la base gia pronta con i contenuti reali del cliente. Struttura, layout, tipografia, spacing, componenti e animazioni restano della base e NON si toccano.
- Cosa sovrascrive il cliente: solo palette (token colore), logo, eventuale font.
- Legenda contenuti: [VERBATIM] = testo del cliente tale e quale. [RISCRITTO] = versione migliorata, da usare al posto del verbatim, motivata sotto.

---

## OVERRIDE CLIENTE

Da applicare ai token colore della base, non ai singoli componenti.

### Palette
Stato reale: il sito attuale non ha una palette di brand. E' un template monocromatico. Non ho CSS, screenshot o brand guideline, quindi gli unici valori certi sono bianco e nero osservati nella chrome (icone, badge). Il resto sotto e' una proposta neutra ripulita, NON una palette estratta. L'accent non ha alcuna base reale: da definire col cliente, non inventato.

| Token | HEX | Stato |
|---|---|---|
| background | #FFFFFF | osservato |
| testo | #1A1A1A | proposto (near-black, piu leggibile del nero puro) |
| primary | #1A1A1A | proposto (neutro, manca colore di brand) |
| secondary | #6B6B6B | proposto |
| bordo | #E5E5E5 | proposto |
| accent | DA DEFINIRE | manca, non inventato |

Nota per Code: non applicare la palette finche l'accent non e' confermato. Se il cliente fornisce CSS, logo vettoriale o una guideline, gli HEX si chiudono in modo certo (campionabili dal file).

### Logo
Non esiste un file logo vero recuperabile: sul sito l'identita e' testuale. Da richiedere al cliente il logo in vettoriale (SVG). Sulla base va SVG, non un raster. Se il cliente manda solo PNG/JPG, richiedere comunque l'SVG prima del build.

### Font
Nessun font di brand proprietario riconoscibile. Si tiene quello della base.

---

## PAGINE E SEZIONI DELLA BASE: tenere / togliere

In base a cosa il cliente ha davvero.

| Sezione base | Azione | Motivo |
|---|---|---|
| Hero | Tenere | Nome studio + titolari disponibili |
| Chi siamo / Studio | Tenere | Testo disponibile |
| Mission (se slot dedicato) | Tenere o fondere in Chi siamo | Testo breve, valutare se merita blocco a se |
| Servizi | Tenere | 9 servizi reali disponibili |
| Team | Tenere | 4 bio disponibili (foto da richiedere) |
| Gallery | TOGLIERE (per ora) | Vuota sul sito, nessuna foto reale. Riattivare solo se il cliente fornisce immagini progetti |
| Recensioni / Testimonianze | TOGLIERE | Nessuna recensione esistente. Non inventare. Riattivare se il cliente ne fornisce |
| Blog | TOGLIERE (per ora) | Guscio vuoto, zero articoli. Riattivare se il cliente vuole produrre contenuti |
| Contatti | Tenere | Indirizzo, telefono, email disponibili (orari mancanti) |
| Footer / legale | Tenere ma incompleto | Mancano P.IVA e ragione sociale: da completare prima della pubblicazione |

---

## MAPPA DI RIEMPIMENTO

### HERO

- Slot: [[DA COMPILARE: headline hero]]
  - Contenuto [VERBATIM]: "STUDIO TECNICO A'RS"
- Slot: [[DA COMPILARE: sottotitolo hero]]
  - Contenuto [VERBATIM]: "Geom. Tosato Christian - Geom. Bonifati Riccardo"
- Media: immagine hero non presente in modo estraibile. Da chiedere al cliente in alta risoluzione (o usare asset neutro della base).

### CHI SIAMO / STUDIO

- Slot: [[DA COMPILARE: testo chi siamo]]
  - Contenuto [VERBATIM]: "Lo Studio Tecnico A'RS di Mestre-Venezia svolge attivita di progettazione di interventi edilizi residenziali, commerciali, industriali, rurali, di nuova costruzione o in ristrutturazione, dalle fasi di analisi di fattibilita preliminare sino al completamento delle opere. Fondato dal geometra dott. Riccardo Bonifati e dal geometra dott. Christian Tosato nasce nel 2003 dalla fusione degli studi del geom. Gustavo Zuppati e del geom. Roberto Vesco, con l'intento di portare avanti il modello di lavoro acquisito nel corso degli anni di maturazione professionale e di condurre nel futuro i principi cardine che sono alla base dell'attivita tecnica del geometra: preparazione, passione, creativita e responsabilita nell'accompagnare il cliente al raggiungimento dei propri obiettivi."
- Slot: [[DA COMPILARE: testo mission]]
  - Contenuto [VERBATIM]: "La costante formazione specialistica ed il graduale inserimento nell'organico dello studio di giovani professionisti, hanno permesso allo Studio Tecnico A'RS di mantenersi costantemente informato sui continui aggiornamenti normativi e tecnici nei piu svariati ambiti della professione, conservando un elevato profilo di preparazione ed efficienza, al passo con le moderne dinamiche nella vita e nelle attivita di business. Lo Studio Tecnico A'RS ha sede nel cuore della citta di Mestre-Venezia, nel cui territorio svolge prevalentemente la propria attivita."
- Media: foto "studio" e "mission" non estraibili. Da chiedere al cliente in alta risoluzione.

### SERVIZI

Nota trasversale: uniformare la grafia del nome a "A'RS" (sul sito compare anche AR'S / AR'S).

- Slot: [[DA COMPILARE: servizio 1 titolo]] -> "Progettazione e direzione lavori"
  - [VERBATIM]: "Da sempre i Geometri Riccardo Bonifati e Christian Tosato e lo Studio Tecnico A'RS svolgono attivita di progettazione di interventi edilizi residenziali, commerciali, industriali, rurali, di nuova costruzione o in ristrutturazione, dalle fasi di analisi di fattibilita preliminare sino al completamento delle opere. La pluridecennale esperienza maturata nel settore edilizio, consente allo Studio Tecnico A'RS di consigliare ed accompagnare il cliente nella realizzazione dei propri progetti immobiliari, in tutti i momenti del processo di costruzione. Attraverso un percorso graduale e personalizzato che inizia dalle proprie esigenze e desideri, lo Studio Tecnico A'RS conduce la clientela a sviluppare il progetto sul piano tecnico, dalla idea sino all'opera finita, seguendo tutte le fasi burocratiche, amministrative e costruttive con elevata professionalita e competenza, frutto del continuo aggiornamento professionale e tecnico nel settore."

- Slot: [[DA COMPILARE: servizio 2 titolo]] -> "Pratiche di detrazione fiscale in edilizia"
  - ATTENZIONE: il verbatim promuove il Superbonus 110%, non piu in vigore. NON usare il verbatim. Usare la versione riscritta.
  - [RISCRITTO] (rimosso il riferimento al 110% e alle norme decadute, senza inventare aliquote vigenti): "Lo Studio A'RS affianca privati e condomini nell'accesso alle agevolazioni fiscali per l'edilizia previste dalla normativa vigente, per interventi di efficienza energetica, riduzione del rischio sismico e installazione di impianti da fonti rinnovabili. In collaborazione con professionisti specializzati del territorio, fornisce valutazioni sul rendimento energetico dell'edificio e proposte progettuali per migliorarne efficienza, qualita abitativa e sicurezza. Offre analisi e consulenza preventiva, verifiche formali, regolarizzazione degli immobili, gestione della progettazione, della cantieristica e della sicurezza, oltre all'accompagnamento del cliente nell'intero percorso burocratico e fiscale dell'operazione."
  - Nota: le aliquote e i meccanismi vigenti al momento del build vanno verificati e inseriti dal cliente o da chi cura la parte fiscale. Non inserire percentuali non verificate.

- Slot: [[DA COMPILARE: servizio 3 titolo]] -> "Stime immobiliari"
  - [VERBATIM]: "Grazie alla costante formazione professionale ed agli studi decennali sulla materia, lo Studio Tecnico A'RS affronta il tema delle stime immobiliari con elevato grado di competenza e rigore, in conformita agli Standard Internazionali di Valutazione. Storicamente, nel nostro Paese, il processo di stima dei beni del settore immobiliare e sempre stato legato a valutazioni di carattere prevalentemente soggettivo. Gli operatori del settore hanno spesso sintetizzato i procedimenti di stima con valutazioni empiriche basate su dati non reali, tentando in qualche modo di azzeccare il piu probabile valore di un bene, affidandosi alla scorciatoia della stima sintetica ed offrendo, in questo modo, una analisi piuttosto opaca, approssimativa e superficiale del mercato immobiliare e della attivita del valutatore professionista. Da ormai almeno vent'anni, anche il mercato italiano ha iniziato a richiedere al settore immobiliare e finanziario di dotarsi di metodologie e processi di stima idonei e riconosciuti, in un quadro di condivisione ed omogeneita di regole e standard. Da tempo lo Studio Tecnico A'RS ha compreso la reale portata della svolta avvenuta nel settore delle stime immobiliari e si e adeguato alle procedure estimative in conformita agli standard internazionali di valutazione, attraverso un percorso che ha portato alla certificazione UNI 11588:2014."

- Slot: [[DA COMPILARE: servizio 4 titolo]] -> "Assistenza alle compravendite"
  - [VERBATIM]: "La vendita o l'acquisto di un immobile rappresentano momenti sempre importanti e complessi. Approcciarsi ad una fase cosi delicata con imprudenza o affidandosi ad operatori non preparati, puo portare spesso a brutte sorprese con incremento dei costi e dei tempi programmati. Sia per immobili residenziali che per ogni altro ambito del patrimonio immobiliare commerciale, terziario o produttivo, lo Studio Tecnico A'RS e in grado di accompagnare ed assistere il cliente nelle fasi di approccio alle compravendite, recuperando e certificando tutta la documentazione necessaria al notaio per la stipula finale. Con la collaudata procedura Check-up Immobiliare, lo Studio Tecnico A'RS e in grado di fornire al Cliente una valutazione complessiva dello stato documentale del proprio immobile e risolvere prontamente e per tempo eventuali carenze o disguidi, prima che diventino problemi insormontabili. Lo Studio Tecnico A'RS offre inoltre assistenza all'acquisto di immobili proposti nelle aste giudiziarie dei Tribunali Italiani, dalla ricerca dei beni piu adeguati alla richiesta dei clienti, alla lettura della perizia di stima depositata in Tribunale, sino alla partecipazione all'asta di acquisto."

- Slot: [[DA COMPILARE: servizio 5 titolo]] -> "Consulenze tecniche per privati ed imprese"
  - [VERBATIM]: "La pluridecennale assistenza ai principali Uffici Giudiziari della Provincia di Venezia e la rete di collaborazione e convenzioni con gli studi Legali specializzati del territorio, consentono allo Studio Tecnico A'RS di accompagnare il Cliente nei vari gradi dei processi civili e penali. Lo Studio Tecnico A'RS e in grado di assistere il Cliente privato o l'azienda nella tutela dei propri diritti in tutte le fasi che caratterizzano i procedimenti giudiziari. Nello stato antecedente il contenzioso per una valutazione preliminare della posizione tecnico-giuridica e per la preparazione della documentazione tecnica necessaria all'introduzione del Giudizio. In fase di mediaconciliazione. Durante il procedimento in stretta collaborazione con lo studio Legale designato."
  - [RISCRITTO] (correzione refuso "mediaconciliazione" e frasi spezzate): "La pluridecennale assistenza ai principali Uffici Giudiziari della Provincia di Venezia e la rete di collaborazione con gli studi legali specializzati del territorio consentono allo Studio Tecnico A'RS di accompagnare il Cliente nei vari gradi dei processi civili e penali. Lo Studio assiste il privato o l'azienda nella tutela dei propri diritti in tutte le fasi del procedimento giudiziario: nella fase antecedente il contenzioso, per una valutazione preliminare della posizione tecnico-giuridica e la preparazione della documentazione necessaria; in fase di mediazione e conciliazione; durante il procedimento, in stretta collaborazione con lo studio legale designato."

- Slot: [[DA COMPILARE: servizio 6 titolo]] -> "Rilievi topografici e riconfinamenti"
  - [VERBATIM]: "Lo Studio Tecnico A'RS, si occupa del rilievo di terreni edificati o privi di fabbricati, in zona agricola o in aree urbanizzate di ogni genere, con moderne strumentazione tecnica di campagna e post-modellazione software. Un corretto rilievo planoaltimetrico non e solamente utile per la esatta determinazione delle dimensioni di una proprieta ma costituisce sempre piu spesso la base di partenza indispensabile per programmare correttamento lo sviluppo del territorio urbano o rurale. L'esperienza maturata negli anni e la continua formazione nel settore, consentono allo Studio Tecnico A'RS di fornire consulenze tecniche su confinazioni, riconfinazioni, apposizione di termini, verifiche di confini esistenti, sia sulla base della ricostruzione delle mappe storiche di impianto che assumendo per riferimento atti di divisione piu recenti. La determinazione della posizione di un confine non e solamente l'esercizio di operazioni di rilievo ma necessita della conoscenza specialistica di tecniche, norme, procedure, prassi che sono alla base della corretta lettura e interpretazione dei documenti ed atti che negli hanno modificato le proprieta di un territorio."
  - [RISCRITTO] (corretti i refusi "strumentazione"/"correttamento" e la frase mozza "che negli hanno modificato"): "Lo Studio Tecnico A'RS si occupa del rilievo di terreni edificati o privi di fabbricati, in zona agricola o in aree urbanizzate di ogni genere, con moderne strumentazioni di campagna e post-modellazione software. Un corretto rilievo planoaltimetrico non e utile solo alla esatta determinazione delle dimensioni di una proprieta, ma costituisce sempre piu spesso la base di partenza indispensabile per programmare correttamente lo sviluppo del territorio urbano o rurale. L'esperienza maturata negli anni e la continua formazione consentono allo Studio di fornire consulenze su confinazioni, riconfinazioni, apposizione di termini e verifiche di confini esistenti, sia sulla base della ricostruzione delle mappe storiche di impianto sia assumendo a riferimento atti di divisione piu recenti. La determinazione di un confine non e solo un'operazione di rilievo: richiede la conoscenza specialistica di tecniche, norme e prassi alla base della corretta lettura dei documenti e degli atti che nel tempo hanno modificato le proprieta di un territorio."

- Slot: [[DA COMPILARE: servizio 7 titolo]] -> "Tabelle millesimali"
  - [VERBATIM]: "La redazione delle Tabelle Millesimali pone una serie di tormentate questioni ed altrettanti dubbi che molto spesso sono motivo di confusione e difficolta in sede assembleare. Lo Studio tecnico A'RS, offre il servizio di prima redazione, verifica, aggiornamento o revisione di tabelle millesimali degli edifici in condominio e supercondominio, sulla base della indispensabile conoscenza dei fondamenti legislativi e dei criteri specialistici del corretto procedimento tecnico-estimativo. Attivita svolta per amministratori condominiali ma anche per singoli condomini che volessero sciogliere le proprie perplessita su tale delicato argomento."

- Slot: [[DA COMPILARE: servizio 8 titolo]] -> "Pratiche catastali, successioni e volture"
  - [VERBATIM]: "Visure catastali attuali o storiche, reperimento di planimetrie, aggiornamenti catastali, frazionamenti, volture, successioni, riunioni di usufrutto, verifiche di proprieta, copie di atti di acquisto, cancellazioni di formalita. E' sufficiente compilare il form sottostante e specificare la richiesta per ottenere in breve tempo un preventivo di spesa per reperire la documentazione necessaria in qualsiasi ufficio nel territorio Italiano."
  - Nota CTA: "compilare il form sottostante" va ricollegato al form contatti della base. Se nella base il form non e nella stessa vista, riscrivere la chiusura come "Contattaci per ricevere un preventivo".

- Slot: [[DA COMPILARE: servizio 9 titolo]] -> "Pratiche commerciali e di pubblico spettacolo"
  - [VERBATIM]: "Lo Studio Tecnico A'RS si occupa anche delle pratiche di pubblico spettacolo per l'avvio di manifestazioni, eventi e apertura di strutture assoggettate ad agibilita di pubblico spettacolo, nonche pratiche per attivita commerciali quali bar, ristoranti, musei, laboratori, etc. E' sufficiente compilare il form sottostante e specificare la richiesta per ottenere in breve tempo un preventivo di spesa per reperire la documentazione necessaria in qualsiasi ufficio nel territorio Italiano."
  - Nota CTA: come servizio 8.

- Media servizi: nessuna foto estraibile per i 9 blocchi. Se la base prevede un'immagine per servizio, chiederle al cliente in alta risoluzione, oppure usare icone/asset neutri della base.

### TEAM

- Slot: [[DA COMPILARE: team membro 1 nome]] -> "Geom. Christian Tosato"
  - Bio [VERBATIM]: "Consegue il diploma di Geometra nell'anno 1994. Dopo gli anni di formazione presso lo studio del Geom. Roberto Vesco, dal 2001 intraprende l'attivita libero professionale di Geometra assumendo da subito il ruolo di Consulente d'Ufficio del Tribunale di Venezia, della Corte d'Appello di Venezia e di altri Uffici Giudiziari del territorio. Dal 2015 e membro fondatore del comitato CTU Italia e socio di Geo.Val. Geometri Valutatori Esperti. Dal 2019 e valutatore immobiliare certificato ai sensi della norma UNI 11588:2014. Nel 2020 consegue la laurea triennale in Ingegneria Civile con tesi sulla applicazione del modello di stima Market Comparison Approach. Attuale componente della Commissione Estimo e Contenzioso del Collegio dei Geometri e Geometri Laureati di Venezia."
  - Media: ritratto da chiedere al cliente in alta risoluzione.

- Slot: [[DA COMPILARE: team membro 2 nome]] -> "Geom. Riccardo Bonifati"
  - Bio [VERBATIM]: "Consegue il diploma di Geometra nell'anno 1991. Dopo il periodo di apprendistato presso lo studio del Geom. Gustavo Zuppati, dal 1996 intraprende l'attivita libero professionale di Geometra impegnandosi da subito nell'attivita di consulente per la progettazione e la direzione dei lavori di interventi edilizi di diversa tipologia. Sin dal 1998 si occupa di sicurezza nei cantieri edili. Diplomato esperto Casa Clima nel 2008. Dal 2015 e consulente tecnico dell'A.C. Mestre Calcio. Dal 2014 consulente della Societa partecipata Ecoricicli Veritas. Nel 2020 consegue la laurea triennale in Ingegneria Civile con tesi sulla redazione di un piano urbanistico di recupero di un'area ex industriale."
  - Media: ritratto da chiedere al cliente in alta risoluzione.

- Slot: [[DA COMPILARE: team membro 3 nome]] -> "Geom. Alice Gaetani"
  - Bio [VERBATIM]: "Diplomata nell'anno 2010, dallo stesso anno inizia il tirocinio presso lo Studio Tecnico A'RS proseguendo poi l'attivita professionale nel medesimo studio sino ad oggi. Dal 2013 e abilitata all'esercizio della professione di Geometra. Nel 2020 consegue la laurea triennale in Ingegneria Civile con tesi sullo studio dello smaltimento di acque di prima e seconda pioggia in impianto di riciclo di rifiuti urbani."
  - Media: ritratto da chiedere al cliente in alta risoluzione.

- Slot: [[DA COMPILARE: team membro 4 nome]] -> "Diego Agnoletti"
  - Bio [VERBATIM]: "Diplomato nell'anno 2019, dallo stesso anno svolge attivita di tirocinio presso lo Studio Tecnico A'RS."
  - Media: ritratto da chiedere al cliente in alta risoluzione.

### GALLERY
Togliere per questo cliente. Nessuna immagine reale. Riattivare solo con foto progetti fornite dal cliente.

### RECENSIONI
Togliere. Nessuna recensione esistente, non inventarne. Riattivare se il cliente fornisce testimonianze reali con autore.

### CONTATTI

- Slot: [[DA COMPILARE: indirizzo]] -> "Galleria Teatro Vecchio 15, 30172 Mestre Venezia (VE)"
- Slot: [[DA COMPILARE: telefono]] -> "0415347795"
- Slot: [[DA COMPILARE: email]] -> "info@studiotecnicoars.it"
  - Nota: sul sito attuale compaiono anche christian.tosato@gmail.com e riccardobonifati@gmail.com. Decidere col cliente se mostrarle o tenere solo la casella di dominio.
- Slot: [[DA COMPILARE: orari]] -> MANCANTE. Da chiedere al cliente.
- Slot: [[DA COMPILARE: mappa]] -> incorporare mappa sull'indirizzo sopra (componente mappa della base).
- Slot: [[DA COMPILARE: form contatti]] -> usare il form della base. Label pulsante originale: "Invia un messaggio". Checkbox consenso privacy da collegare alla nuova informativa.

### FOOTER / LEGALE

- Slot: [[DA COMPILARE: ragione sociale footer]] -> MANCANTE sul sito. Da chiedere al cliente.
- Slot: [[DA COMPILARE: P.IVA]] -> MANCANTE sul sito. Obbligatoria. Da chiedere al cliente.
- Slot: [[DA COMPILARE: privacy policy]] -> rifare ex novo. Quella attuale e un template datato 25/05/2018 con riferimenti pre-GDPR. Non riportare.
- Nota: il footer attuale contiene il segnaposto "Adjectives" e il credito "BDF communication" (l'agenzia uscente): non riportare nulla di questo.

---

## BUCHI da colmare col cliente prima del riempimento

1. Accent di brand (HEX): manca del tutto. Senza, la palette resta monocromatica.
2. Logo in vettoriale (SVG): non esiste file logo recuperabile, identita solo testuale.
3. P.IVA e ragione sociale completa: assenti ovunque, obbligatorie per footer e privacy.
4. Orari di apertura: assenti.
5. Foto in alta risoluzione: 2 ritratti titolari + 2 collaboratori (team), eventuali immagini progetti se si vuole la gallery, eventuali immagini servizi/hero se la base le prevede.
6. Contenuto fiscale aggiornato: il blocco Superbonus va allineato alle agevolazioni vigenti (verifica a cura del cliente o del referente fiscale). Non inserire aliquote non verificate.
7. Decisione sulle email personali gmail: mantenerle o sostituirle.
8. Dominio ufficiale: studiotecnicoars.it o arsstudio.it (canonical incoerente).

---

## Riepilogo decisioni per Code
- Applicare override colore solo dopo che l'accent e confermato. Font: base. Logo: attendere SVG.
- Sezioni attive: hero, chi siamo/mission, servizi (9), team (4), contatti, footer.
- Sezioni disattivate: gallery, recensioni, blog.
- Usare le versioni [RISCRITTO] per i servizi 2, 5 e 6; verbatim per tutti gli altri testi.
- Ogni voce media senza URL e "da chiedere al cliente in alta risoluzione": nessun placeholder inventato.
