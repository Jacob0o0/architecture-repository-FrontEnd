/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        negroPrincipal: '#1a1a1a',
        blancoPrincipal: '#FEFEFF',
        amarilloPrincipal: '#f1e71e'
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
}
