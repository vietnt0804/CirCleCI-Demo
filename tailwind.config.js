/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', "sans-serif"],
        GrandH: ['"Grand Hotel"', "cursive"],
        Poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
      screens: {
        xs: '480px',
        xl: '1440px',
      }
    },
  },
  plugins: [],
}

