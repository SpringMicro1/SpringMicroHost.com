import { HERO } from './src/config';

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  safelist: [
    // ...HERO.APPS.map(({color})=>`text-${color}-500`),
    // ...HERO.APPS.map(({color})=>`border-${color}-500`),
    // ...HERO.APPS.map(({color})=>`text-${color}-500`),
    "border-primary",
    "text-primary",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
};
