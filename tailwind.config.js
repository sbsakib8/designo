/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
        poppins: ['Poppins', 'serif'],
      },
      colors: {
        primary: '#FF4B00',
        secondary: '#3083FF',
        navber: '#F9F9F9',
        blackColor: '#09090B',
        paragraphColor:'#727272'
       
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

