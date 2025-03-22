/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        dark: "#121212",
        shadow: "#1D2025",
        highlight: "#5E81AC",
        highlight2: "#5E81AC",

      },
      screens: {
        "2xl": "1440px"
      },
    },
  },
  plugins: [],
};