/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "bgImageForApplication":"url(/src/assets/applicationbg.png)",
        "heroBg":"url(/src/assets/heroBg.webp)"
      },
      colors:{
        "primary_bg": '#2e2e2e',
        "secondary_tx_color": "#c7e3ff",
        "grayish_black": "#bdbdbd",
        "detailSectionBgNav": "#2e2e2e",
        "detailSectionBgHero": "#242424",
      }
    },
  },
  plugins: [],
}
