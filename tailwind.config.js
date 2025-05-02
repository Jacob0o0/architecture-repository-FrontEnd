/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        negroPrincipal: '#1a1a1a',
        blancoPrincipal: '#FEFEFF',
        amarilloPrincipal: '#f1e71e',
        grisPrincipal: '#F8F7F5',
      },
      borderRadius: {
        '15px': '15px',
      },
      spacing: {
        '10px': '10px',
      },
    },
  },
  plugins: [],
};
