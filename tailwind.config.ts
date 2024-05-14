import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary:{ 
        50: '#f9e6e6',
        100: '#f2baba',
        200: '#eb8d8d',
        300: '#e46161',
        400: '#dd3434',
        500: '#a20101',
        600: '#920101',
        700: '#820101',
        800: '#710101',
        900: '#610101'
      },
      yellow:colors.yellow,
      blue:colors.blue,
      white:colors.white,
      gray:colors.gray,
      green:colors.green,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
