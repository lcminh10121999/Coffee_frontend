/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",
    "./index.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "pink-4": "#FFF7E6",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "orange-1": "#ffb141",
        "orange-2": "#fa8c16",
        "orange-3": "#e57905",
        "smoky-gray": "#b2b2b2",
        main: "#080A1A",
        subMain: "#F20000",
        star: "#FFB000",
        dry: "#0b0f29",
        "gray-1": '#808080',
        border: '#4b5563',
        dryGray: '#e0d5d5',


      },
      boxShadow: {
        "image": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      },
      fontFamily: {
        "poppins": ['"Poppins"', 'cursive']
      },
      height: {
        header: '560px',
        rate: '400px',
        "100": "25rem",
        "150": "30rem",
        "20vh": "20vh",
        "75vh": "75vh",
        "10vh": "10vh",

      },
      borderRadius: {
        "5": "5px",
      },
      minHeight: {
        "haft-screen": "50vh",
      },
      maxHeight: {
        100: "30rem"
      },
      fontSize: {
        h1: "2.6rem",
      },
      screens: {
        xs: '300px'
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}