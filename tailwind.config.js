/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    variants: {
      extend: {
        fontSize: ["hover"],
      }
    },
    extend: {

      colors: {
        primary: {
          light: "#DCFCE7",
          DEFAULT: "#00CB79",
          dark: "#50FFB8",
        },
        "dying-rose": {
          light: "#FFE2E6",
          DEFAULT: "#FA6384",
        },
        "electric-orange": {
          light: "#FFF4DE",
          DEFAULT: "#FD9379",
        },
        "maya-blue": {
          light: "#F4E8FF",
          DEFAULT: "#BE82FE",
        },
        black: {
          "light-bg": "#F4F5F7",
          light: "#5D5C5C",
          DEFAULT: "#000000",
        },
        gray: "#E7E8EB",
        white: "#ffffff",
        error:{ 
          light:"#F87272",
          DEFAULT:"#FC2727",

      },
      },
    },
  },
  plugins: [require("daisyui")],

}