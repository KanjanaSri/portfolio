/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "Arial", "sans-serif"],
      Charmonman: ["Charmonman"],
    },
    screens: {
      sm: "340px",
      md: "840px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
