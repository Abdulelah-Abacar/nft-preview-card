/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "Out": ["Outfit"]
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "soft-blue": "hsl(215, 51%, 70%)",
      "cyan": {
        DEFAULT: "hsl(178, 100%, 50%)",
        100: "hsl(178deg 100% 50% / 35%)"
      },
      "dark-blue-main": "hsl(217, 54%, 11%)",
      "dark-blue-card": "hsl(216, 50%, 16%)",
      "dark-blue-line": "hsl(215, 32%, 27%)",
    },
  },
  plugins: [],
}
