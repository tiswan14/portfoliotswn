/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "primary1": "#11071F",
        "text": "#AA58FC",
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}