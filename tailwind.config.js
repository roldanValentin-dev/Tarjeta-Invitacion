/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF0F2',
          100: '#FCE4EC',
          200: '#F2B0B8',
          300: '#E8808E',
          400: '#E05068',
          500: '#D43850',
          600: '#C02840',
          700: '#A81830',
          800: '#881028',
          900: '#680820',
        },
        lavender: {
          50: '#F5EEF8',
          100: '#F0E6F6',
          200: '#E0C8E8',
          300: '#D0A8D8',
          400: '#C088C8',
          500: '#B070B8',
          600: '#9858A0',
          700: '#804088',
          800: '#683070',
          900: '#502058',
        },
      },
      fontFamily: {
        titulo: ['"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
        garamond: ['"Cormorant Garamond"', 'serif'],
      },

    },
  },
  plugins: [],
}
