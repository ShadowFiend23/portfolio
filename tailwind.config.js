/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors')
const colors = {
  ...defaultColors,
  ...{
      "green": "#01b8b0",
  },
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    colors: colors,
    extend: {
    },
  },
  plugins: [],
}
