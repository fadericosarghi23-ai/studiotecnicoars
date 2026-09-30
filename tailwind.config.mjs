/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // ---------------------------------------------------------------
      // DESIGN TOKENS — palette Studio Tecnico A'RS.
      // Neutri dalla mappa cliente (CONTENT_FILL.md); accento campionato
      // dal logo reale (verde #719168), scurito per il contrasto AA del
      // testo piccolo su bianco (5.2:1).
      // ---------------------------------------------------------------
      colors: {
        ink: '#1A1A1A',        // testo/sfondi scuri (mappa: testo/primary)
        accent: {
          DEFAULT: '#5A7453',  // colore d'accento (CTA, eyebrow) — verde logo -20%
          dark: '#495E44',     // hover accento
          hover: '#495E44',    // alias usato da `text-accent-hover`
          light: '#719168',    // verde esatto del logo
        },
        sand: {
          DEFAULT: '#E5E5E5',  // dettagli chiari su fondo scuro (mappa: bordo)
          light: '#EEF2EC',    // fondo sezione chiaro (tinta del verde logo)
        },
        grey: {
          DEFAULT: '#6B6B6B',  // testo secondario (mappa: secondary)
          light: '#F5F5F5',    // fondo neutro
        },
        body: '#1A1A1A',       // testo corrente (mappa: testo)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        h1: ['clamp(2rem,3.2vw + 1rem,4.25rem)', { lineHeight: '1.04', letterSpacing: '-.02em' }],
        h2: ['clamp(1.625rem,2.2vw + 1rem,3rem)', { lineHeight: '1.1', letterSpacing: '-.015em' }],
        h3: ['clamp(1.25rem,1.2vw + .75rem,1.75rem)', { lineHeight: '1.2' }],
        h4: ['clamp(1.125rem,1vw + .625rem,1.375rem)', { lineHeight: '1.25' }],
        h5: ['1.125rem', { lineHeight: '1.35' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        s: ['.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '3rem',
        '2xl': '4.5rem',
        header: 'var(--header-h)',
      },
      height: { header: 'var(--header-h)' },
      minHeight: { svh: '100svh' },
      maxWidth: { '2xl': '42rem' },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },
  plugins: [],
};
