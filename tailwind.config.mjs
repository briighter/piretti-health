/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'tomato-jam': {
          50:  '#fbecea',
          100: '#f6d9d5',
          200: '#edb4ab',
          300: '#e48e81',
          400: '#db6857',
          500: '#d2432d',
          600: '#a83524',
          700: '#7e281b',
          800: '#541b12',
          900: '#2a0d09',
        },
        glaucous: {
          50:  '#eff2f5',
          100: '#dfe5ec',
          200: '#bfcad9',
          300: '#9fb0c6',
          400: '#8096b3',
          500: '#607b9f',
          600: '#4d6380',
          700: '#394a60',
          800: '#263140',
          900: '#131920',
        },
        thistle: {
          300: '#c1a4b6',
          400: '#ac869e',
          500: '#986785',
          600: '#79536b',
        },
        'coffee-bean': {
          100: '#eee4dd',
          200: '#ddc8bb',
          300: '#ccad99',
          500: '#aa7655',
          700: '#664733',
        },
        'pearl-beige': {
          50:  '#faf4eb',
          100: '#f5ead6',
          200: '#ebd4ad',
          300: '#e0bf85',
        },
      },
      maxWidth: {
        content: '1100px',
        prose: '680px',
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
};
