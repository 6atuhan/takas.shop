/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode : "jit",darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        'jura':["jura"],
        'tektur':["tektur"],
      },
      colors: {
        'light': '#00fc97',
        'dark': '#16301d',
      },
    },
  },
  plugins: [],
}

