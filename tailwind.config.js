/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#35B8BE",
      },
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
