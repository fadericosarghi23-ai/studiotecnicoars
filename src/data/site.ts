// ============================================================
// IDENTITÀ DEL SITO — punto unico per i dati del cliente.
// Studio Tecnico A’RS (Mestre-Venezia). Fonte: CONTENT_FILL.md +
// www.studiotecnicoars.it. I valori ancora mancanti restano marcati.
// ============================================================

export const site = {
  name: 'Studio Tecnico A’RS',
  legalName: '[[DA COMPILARE: ragione sociale completa — da chiedere al cliente]]',
  tagline: 'Geom. Tosato Christian - Geom. Bonifati Riccardo',
  city: 'Mestre-Venezia',
  region: 'VE',
  foundedYear: '2003',
  domain: 'https://www.studiotecnicoars.it', // dominio attivo verificato (arsstudio.it non risolve)

  email: 'info@studiotecnicoars.it',
  // recapiti telefonici (href = formato E.164, label = leggibile)
  phones: [
    { role: 'Telefono', href: '+390415347795', label: '041 5347795' },
  ],
  whatsapp: '', // nessun WhatsApp fornito: il bottone resta nascosto finché è vuoto

  addresses: [
    { label: 'Sede', text: 'Galleria Teatro Vecchio 15, 30172 Mestre Venezia (VE)' },
  ],

  // orari dalla scheda Google Maps "Tosato Christian, Geometra" (stesso indirizzo): da confermare col cliente
  hours: 'Lun–Ven 8:30–13:00 · 15:00–19:00',
  hoursNote: 'Sabato e domenica chiuso',

  // dati legali (privacy / footer)
  legal: {
    vat: '[[DA COMPILARE: P.IVA — obbligatoria, da chiedere al cliente]]',
    pec: '',
    rea: '',
  },
} as const;

// Voci di menu.
export const nav = [
  { label: 'Lo studio', href: '/studio/' },
  { label: 'Servizi', href: '/servizi/' },
  { label: 'Progetti', href: '/portfolio/' },
  { label: 'Team', href: '/studio/#team' },
  { label: 'Contatti', href: '/contatti/' },
];

// Servizi (titoli dal mapping, ancore della pagina /servizi/).
export const serviceLinks = [
  { label: 'Progettazione e direzione lavori', href: '/servizi/#progettazione-direzione-lavori' },
  { label: 'Pratiche di detrazione fiscale in edilizia', href: '/servizi/#detrazioni-fiscali' },
  { label: 'Stime immobiliari', href: '/servizi/#stime-immobiliari' },
  { label: 'Assistenza alle compravendite', href: '/servizi/#compravendite' },
  { label: 'Consulenze tecniche per privati ed imprese', href: '/servizi/#consulenze-tecniche' },
  { label: 'Rilievi topografici e riconfinamenti', href: '/servizi/#rilievi-topografici' },
  { label: 'Tabelle millesimali', href: '/servizi/#tabelle-millesimali' },
  { label: 'Pratiche catastali, successioni e volture', href: '/servizi/#pratiche-catastali' },
  { label: 'Pratiche commerciali e di pubblico spettacolo', href: '/servizi/#pubblico-spettacolo' },
];

// Social: nessun profilo fornito dal cliente (la riga "Seguici" è nascosta se vuota).
export const socials: { label: string; href: string }[] = [];

// Team (colonna footer + pagina Lo studio).
export const team = [
  { name: 'Geom. Christian Tosato', href: '/studio/#team' },
  { name: 'Geom. Riccardo Bonifati', href: '/studio/#team' },
  { name: 'Geom. Alice Gaetani', href: '/studio/#team' },
  { name: 'Diego Agnoletti', href: '/studio/#team' },
];
