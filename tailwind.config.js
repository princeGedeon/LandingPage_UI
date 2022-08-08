/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {

      gridTemplateColumns:{
        "menu":"100px 1fr 100px"
      }
    },
  },
  plugins: [],
}
