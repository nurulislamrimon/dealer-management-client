/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00CB79",

          "secondary": "#DCFCE7",

          "accent": "#9E9E9E",

          "neutral": "#464545",

          "base-100": "#E8E0F0",

          "info": "#BE82FE",

          "success": "#1C8246",

          "warning": "#FA6384",

          "error": "#FD9379",
        },
      },
    ],
  }
}