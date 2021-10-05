module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        sm:'640px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        

      },
      container:{
        center:true,
        padding:'1rem'
      },
      fontFamily:{
      popins:"'Poppins', sans-serif",
      roboto:"'Roboto', sans-serif"
      },
      colors:{
        'primary': "#FD3D57"
      },
    },
  },
  variants: {
    extend: {
      display:['group-hover'],
      visibility:['group-hover']
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms')
  ],
}
