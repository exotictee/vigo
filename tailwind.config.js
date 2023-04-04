/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        courgette: ["courgette", "Sans-serif"],
      },
      backgroundImage: {
        vigo: "url('/img/images-removebg-preview.png')",
      },
    },
    plugins: [],
  },
};
