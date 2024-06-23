import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo': '#290742',
        'verde': '#4FFF4B',
        'roxo-escuro': '#170027',
        'roxo-claro': '#9E6DC2'
      },
      textColor: {
        'roxo': '#290742', 
        'verde': '#4FFF4B', 
        'roxo-escuro': '#170027',
        'roxo-claro': '#9E6DC2'
      },

      borderColor: {
        'roxo-escuro': '#170027',
        'roxo-claro': '#9E6DC2'
      },

      placeholderColor: {
        'roxo-escuro': '#170027'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
