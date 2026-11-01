/** THARA design tokens: the single source of truth for colors, fonts and shapes.
 *  Rule: never write a raw hex or font name in a page. Use these names only.
 *  The hex values were read off the Stitch prototype by eye. Replace them with the
 *  exact values the team agrees on, then everything updates in one place. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1f3a2d', // primary: navbar, footer, main buttons
          dark: '#142619',    // hero overlay, hover on primary
          light: '#2f5442',   // secondary surfaces on dark
        },
        cream: {
          DEFAULT: '#efe6d0', // page background
          card: '#f7f1e1',    // cards, forms, panels
          line: '#d9ccab',    // borders and dividers
        },
        gold: {
          DEFAULT: '#b88a2e', // accent: city names in Arabic, highlights
          light: '#e0c27a',   // accent on dark backgrounds
        },
        ink: {
          DEFAULT: '#26231c', // main text
          soft: '#6b6454',    // secondary text
        },
        success: '#3d7a4f',
        danger: '#a8402f',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'], // headings
        body: ['Inter', 'sans-serif'],              // everything else
      },
      fontSize: {
        // [size, line-height]
        h1: ['3.5rem', '1.1'],
        h2: ['2.25rem', '1.2'],
        h3: ['1.5rem', '1.3'],
        body: ['1rem', '1.7'],
        small: ['0.875rem', '1.5'],
      },
      borderRadius: {
        btn: '0.5rem',  // buttons and inputs
        card: '0.75rem', // cards and panels
      },
      boxShadow: {
        card: '0 2px 10px rgba(31, 58, 45, 0.12)',
      },
      maxWidth: {
        page: '72rem', // main container width
      },
    },
  },
};
