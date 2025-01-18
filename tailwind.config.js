/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pale_orange: '#E4E0E1',
        light_green: '#727D73',
        third_green: '#123524',
        green :'E8ECD7',
    },
      fontFamily:{
        sans : ['Josefin Sans' , 'sans-serif'],
        title : ['Playfair Display SC', 'serif']
      }
    },
  },
  plugins: [],
}

