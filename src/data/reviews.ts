// Recensioni mostrate in home. `translated` aggiunge la nota "Tradotto da Google".
// Sintesi reale dalla scheda Google Maps "STUDIO TECNICO AR`S" (verificata il 30/09/2026):
// 4,0 su 1 recensione, solo voto senza testo. I testi delle card vanno raccolti dal cliente
// (testimonianze reali con autore): non inventarli.
export interface Review {
  name: string;
  initial: string;
  date: string;
  text: string;
  translated?: boolean;
}

export const reviewsSummary = {
  rating: '4,0',
  ratingValue: 4,
  count: 1,
  heading: 'Il giudizio di chi ci ha scelto',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=STUDIO%20TECNICO%20AR%60S&query_place_id=ChIJaxI5z_21fkcRAXGrfzIwjZs',
};

export const reviews: Review[] = [
  { name: '[[DA COMPILARE: nome cliente 1]]', initial: '?', date: '[[DA COMPILARE: data]]', text: '[[DA COMPILARE: testimonianza reale del cliente 1, 2-4 frasi — da raccogliere]]' },
  { name: '[[DA COMPILARE: nome cliente 2]]', initial: '?', date: '[[DA COMPILARE: data]]', text: '[[DA COMPILARE: testimonianza reale del cliente 2, 2-4 frasi — da raccogliere]]' },
  { name: '[[DA COMPILARE: nome cliente 3]]', initial: '?', date: '[[DA COMPILARE: data]]', text: '[[DA COMPILARE: testimonianza reale del cliente 3, 2-4 frasi — da raccogliere]]' },
];
