/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', ...fontFamily.sans],
        'play-serif': ['var(--font-play-serif)', ...fontFamily.serif],
      },
      colors: {
        'primary': '#10403C',
        'secondary': '#706F6D',
        'partial': '#404040',
      },
      aspectRatio: {
        'highlight': '25 / 12',
        'section': '2.1/1',
        'about': '2.08/1',
      }
    },
    screens: {
      'xs': { 'min': '320px', 'max': '767.98px' },
      'sm': { 'min': '768px', 'max': '1023.98px' },
      'md': { 'min': '1024px', 'max': '1199px' },
      'lg': { 'min': '1200px', 'max': '6000px' }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
