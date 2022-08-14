module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    
    container: {
      center: true,
      padding: '20px'
    },

    extend: {
      colors: {
        lightblack: '#4d4244',
        lightgray: '#747474',
        lightred: '#ff0d38',
        darkgray: '#272727',
        darkred: '#d70026',
      }
    },
  },
  plugins: [],
}
