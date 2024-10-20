import localFont from "next/font/local";

export const fontSans = localFont({
  src: "../app/fonts/Inter-Variable.ttf",
  variable: "--font-sans",
});

export const fontMono = localFont({
  src: "../app/fonts/FiraCode-Variable.ttf",
  variable: "--font-mono",
});
