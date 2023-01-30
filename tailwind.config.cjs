/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans':['ProximaNova','arial','Helvetica Neue','sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
        'orange': {
          DEFAULT:'#FC8019',
          'light':'#DB7C38',
          'pale':'#E1B055'
        },
        'gray':{
          'light':'#686B78',
          DEFAULT:'#808080',
          'dark':'#171A29'
        },
        'red': '#FF6161',
        'white': '#FFFFFF',
        'black':'#000000',
        'green':'#48C479',
        'brown':'#8A584B',
        'cyan':'#5D8Ed5',
    },
  },
  plugins: [],
}