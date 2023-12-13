/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
      ...colors,
      Basic: {
          300: '#7754BD',
          500: '#7754BD'
      }
    }},
  },
  plugins: [],
}

