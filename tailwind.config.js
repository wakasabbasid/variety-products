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
      height: {
        97: "550px",
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
  plugins: [require("@tailwindcss/line-clamp")],
}
