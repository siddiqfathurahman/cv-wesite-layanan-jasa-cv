/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        GreenNom: '#d5ed9f',  
        Yellowcus: '#ff9100',
        Redcus: '#ff3131',
      },
    },
  },
  plugins: [],
}
