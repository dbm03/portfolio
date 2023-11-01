import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      background: {
        'striped': "linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3), linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3)",
      },
      backgroundImage: {
        'rainy': "url('../public/rain_background.jpg')",
      },
      animation: {
        "thunderstrike": "thunderstrike 7s ease-out 2s infinite",
        "skeleton-loader": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
          thunderstrike: {
              "0%": {
                  opacity: 0,
              },
              "92%": {
                  opacity: 0,
              },
              "93%": {
                  opacity: 0.6,
              },
              "94%": {
                  opacity: 0.2,
              },
              "96%": {
                  opacity: 1,
              },
              "100%": {
                  opacity: 0,
              },
          }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
