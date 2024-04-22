/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway':'Raleway',
        'rancho':'Rancho',
        'clicker-script' : 'Clicker Script',
        'playfair-display' : 'Playfair Display'
      },
      backgroundImage: {
        'banner': 'linear-gradient(90deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0.00) 87.45%), url("https://i.postimg.cc/qvXqRsRT/0a7728f3ba28e3c6592145766475c92c.jpg")'
      }
      
    },
  },
  plugins: [require("daisyui")],
}