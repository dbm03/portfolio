import { heroui } from "@heroui/react";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "470px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        nhost: "#0052cc",
        reactjs: "#61dbfb",
        nextjs: "#000000",
        aws: "#ff9900",
        python: "#306998",
        typescript: "#007acc",
        javascript: "#f7df1e",
        css: "#1572b6",
        supabase: "#3ecf8e",
        nodejs: "#417e38",
        docker: "#1d63ed",
        firebase: "#ffca28",
        java: "#ed2025",
        c: "#5d6cbf",
        css: "#214ce5",
        html: "#e44d26",
      },
      background: {
        striped:
          "linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3), linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3)",
      },
      backgroundImage: {
        rainy: "url('../public/rain_background.jpg')",
        "insta-gradient":
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      },
      animation: {
        thunderstrike: "thunderstrike 7s ease-out 2s infinite",
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
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            content1: "#18181b99",
            nhost: "#000",
          },
        },
      },
    }),
  ],
};
