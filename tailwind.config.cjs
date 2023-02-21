/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        mobile:{"min":"0px","max":"480px"}
      }
    },
  },
  plugins: [],
}