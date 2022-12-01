/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'moveLeft' : 'moveLeft 0.4s ease-out',
        'moveRight' : 'moveRight 1s',
        'moveRight-low' : 'moveRight 2s',
      },
      keyframes:{
        pulse:{
          '0%, 100%' : {opacity:'1', scale: '1.2'},
          '50%' :  {opacity:'0.5', scale: '1'},
        },
        moveLeft:{
          '0%' : { transform : 'translateX(100%)'},
          '100%' : { transform : 'translateX(0)'},
        },
        moveRight:{
          '0%' : {transform : 'translateX(0%)'},
          '100%' : {transform : 'translateX(100%)'},
        },
      },
    },
  },
  plugins: [],
}
