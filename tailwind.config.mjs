import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // 'graygreen': '#c6cdc6'
        'graygreen': '#a4c5a4',
        'graygreen-dark': '#fffdf9'
      },
      saturate: {
        '125': '125%'
      },
    },
  },
  plugins: [typography],
};
