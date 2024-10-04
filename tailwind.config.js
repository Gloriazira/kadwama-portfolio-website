/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['"NEW YORK"', 'serif'],  // New York font for headers
        'body': ['Montserrat', 'sans-serif'],  // Montserrat for body text
      },
      screens: {
        'xs': [{ 'min': '319px', 'max': '499px' },],
        'sm': [{ 'min': '500px', 'max': '599px' },],
        'md': [{ 'min': '600px', 'max': '899px' },],
        'lg': [{ 'min': '900px', 'max': '1024px' },],
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};



