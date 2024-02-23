/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F5F5F5',
        secondary: '#FF9110'
      },
      colors: {
        primary: '#F5F5F5',
        secondary: '#FF9110'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}