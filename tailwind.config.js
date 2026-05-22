/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF0F2',
          100: '#FCE4EC',
          200: '#F4C2C8',
          300: '#E8B4B8',
          400: '#E87A8A',
          500: '#D4959C',
          600: '#C98A93',
          700: '#A85C6A',
          800: '#8B3A4A',
          900: '#6B2737',
        },
        lavender: {
          50: '#F5EEF8',
          100: '#F0E6F6',
          200: '#E1D1EC',
          300: '#D9C4E8',
          400: '#C9A9D6',
          500: '#B894C9',
          600: '#A58CBA',
          700: '#8B6F8C',
          800: '#6D5170',
          900: '#4F3854',
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
