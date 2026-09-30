# Studio Tecnico A’RS — sito

Sito dello **Studio Tecnico A’RS** (geometri Tosato e Bonifati, Mestre-Venezia), clonato da
`../base-studiodom-3` e riempito dal mapping `CONTENT_FILL.md` + asset reali estratti da
www.studiotecnicoars.it.

## Stack
Astro 5 (statico) + Tailwind CSS v3. Font Inter + Newsreader (base). Nessun JS runtime esterno.

```bash
npm install
npm run dev      # http://localhost:4651
npm run build
```

## Pagine
Home (hero, servizi, progetti, recensioni, sede) · Lo studio (chi siamo, mission, team) · Servizi (9) · Progetti (3 + schede) · Contatti · Mappa del sito · Privacy · Cookie.
Disattivate: blog/news, come lavoriamo, FAQ.

Progetti: 3 schede con le 4 immagini reali del sito (render + villa realizzata); luogo, anno e testi da chiedere al cliente.
Recensioni: sintesi reale Google Maps (4,0 · 1 recensione, solo voto); testi delle card da raccogliere.
Orari: dalla scheda Google Maps, da confermare.
Per riattivarle: ricopiare pagine/componenti/dati da `../base-studiodom-3`.

## Brand
- Palette in `tailwind.config.mjs`: neutri dal mapping, accento dal logo (`#719168`, scurito a `#5A7453` per il contrasto AA).
- Logo: `public/images/brand/` — `logo-originale.png` (raster dal sito) e ridisegno vettoriale
  (`logo-marchio.svg`, `logo-header.svg`, `logo-footer.svg`) con il font del logo (Architects Daughter) e
  Cabin. **Sostituire con il vettoriale originale del cliente appena disponibile.**

## Da completare prima di pubblicare
`grep -rn "DA COMPILARE" src` → ragione sociale, P.IVA (in `src/data/site.ts`), luogo/anno/testi progetti (`src/data/projects.json`), testimonianze (`src/data/reviews.ts`) e endpoint del form
(`src/pages/contatti/index.astro`, ora `action="#"`: non invia).
