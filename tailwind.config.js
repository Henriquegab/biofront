/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        
        'tab': '84px',
        'tab2': '86px',
        'tab3': '88px',
        'tab4': '90px',
        'tab5': '92px',
        
      },
      colors: {
        'bioPrincipal': '#42c248',
        'bioBrancoPrincipal' : '#f4f7f2',
        'bioTextoCinza' : '#dcdcdc',
        'bioTextoCinzaEscuro' : '#333333',
        'bioTextoCinzaMaisEscuro' : '#1c1c1c',
        'bioTextoCinzaDefault' : '#9f9f9f',
        'bioVerde' : '#607f60',
        'bioCinza': '#9c9c9c'
        
      },
    },
  },
  plugins: [],
}

