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

          "primary": "#0b892a",

          "secondary": "#4dcc73",

          "accent": "#77ef87",

          "neutral": "#1B1F22",

          "base-100": "#E8E0F0",

          "info": "#8CDAF2",

          "success": "#1C8246",

          "warning": "#CD970E",

          "error": "#EF5D8D",
        },
      },
    ],
  }
}