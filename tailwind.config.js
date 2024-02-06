/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors : {
          'primary': {
            100 : '#9395D3',
            200 : '#8B8787',
          },
        },
        boxShadow: {
          main: {
            50: '0_-2px_8px_rgba(0,0,0,0.4)'
          }
        }
      },
    },
    plugins: [],
  }
  