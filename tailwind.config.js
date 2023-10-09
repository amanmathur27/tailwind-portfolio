/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ['./*.html'],
  theme: {
    extend: {
      spacing:{
        "big":"40rem"
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      montserrat:['Montserrat', 'sans-serif'],
      caveat:['Caveat', 'cursive']
    }
  },
  plugins: [],
}

