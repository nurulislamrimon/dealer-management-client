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
    // theme: false
    themes: [
      {
        mytheme: {

          "primary": "#00CB79",
          "primary-focus": "#50FFB8",
          "primary-content": "#DCFCE7",

          "secondary": "#BE82FE",
          "secondary-content": "#F4E8FF",

          "accent": "#FA6384",
          "accent-content": "#FFE2E6",

          "neutral": "#464545",
          "neutral-content": "#464545",

          "base-100": "#FFFFFF",
          "base-300": "#5D5C5C",
          "base-content": "#000000",

          "info": "#BE82FE",
          "info-content": "#F4E8FF",

          "success": "#00CB79",
          "success-content": "#E6FAF2",

          "warning": "#FD9379",
          "warning-content": "#FFF4DE",

          "error": "#FC2727",
          "error-content": "#FD9379",

        },
      },
    ],
  }
}