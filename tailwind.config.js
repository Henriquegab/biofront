/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bioPrincipal': '#42c248',
        'bioBrancoPrincipal' : '#f5f5f5',
        'bioTextoCinza' : '#dcdcdc',
        'bioTextoCinzaEscuro' : '#b6b6b6',
        'bioTextoCinzaMaisEscuro' : '#1c1c1c',
        
      },
    },
  },
  plugins: [],
}

