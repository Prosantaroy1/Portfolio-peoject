/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
        'blue': '#16325B',
        'nevy': '#48CFCB',
        'white': '#EEEEEE',
        'black': '#222831',
        "black-tt":'#31363F'
    },
    fontFamily:{
        fontpp: [ "Poppins", 'sans-serif']
    },

    extend: {},
  },
  plugins: [],
}