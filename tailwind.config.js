module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'satisfy': ['Satisfy', 'cursive']
      },
    },
    borderRadius:{
      '3xl':'2rem',
      '2xl':'1.5rem'
    },
    screens:{
      'md':'640px',
      'lg': '1700px'
    }
  },
  plugins: [],
}
