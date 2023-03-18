/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["PP Neue Montreal Book", "sans-serif"],
        secondary: ["PP Neue Montreal Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
