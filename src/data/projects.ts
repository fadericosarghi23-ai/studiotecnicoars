import data from './projects.json';

// ============================================================
// PROGETTI DEL PORTFOLIO — immagini reali dal sito del cliente.
// Ogni progetto guida sia la card nel portfolio sia la pagina
// di dettaglio /portfolio/[slug]/. Luogo, anno e descrizione
// restano da compilare con i dati forniti dal cliente.
// ============================================================

export interface GalleryImage {
  src: string;
  w: number;
  h: number;
  alt: string;
  aspect: string; // "3/4" | "4/3"
  dimmed?: boolean;
}
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  meta: string;
  location: string;
  year: string;
  categories: string;
  tags: string[];
  displayTags: string[];
  previewSrc: string;
  previewW: number;
  previewH: number;
  previewAlt: string;
  hero: { src: string; w: number; h: number; alt: string };
  intro: string[];
  gallery: GalleryImage[];
  before: { heading: string; images: GalleryImage[] } | null;
  cta: { heading: string; paras: string[]; button: string } | null;
  related: string[];
}
export interface Filter { key: string; label: string; }

export const projects = data.projects as unknown as Project[];
export const filters = data.filters as Filter[];
export const portfolioIntro = data.pageIntro as string[];
export const portfolioStats = data.stats as string[];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
