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
    },
  },
  plugins: [],
};


