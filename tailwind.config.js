module.exports = {
  purge: [],
  theme: {
    extend: {
      textColor: {
        'main-orange': 'rgb(255, 89, 18)',
        'smooth-gray': 'rgb(52, 64, 75)',
        'light-gray': 'rgb(244, 246, 248)',
        'second-light-gray': 'rgb(73, 86, 98)',
        'like-gray': 'rgb(124, 135, 145)',
        'almost-black': '#34404b'
      },
      colors:{
        'light-gray': 'rgb(244, 246, 248)'
      },
      spacing:{
        '7':'1.75rem',
        '44': '44rem',
        'my/32':'32rem',
        '11/25': '11.25rem'
      },
      fontSize:{
        '5/2xl':'3.25rem'
      },
      placeholderColor: {
        'like-gray': 'rgb(124, 135, 145)'
      },
      backgroundColor: theme => ({
        'main-orange': 'rgb(255, 89, 18)'
      })
    },
  },
  variants: {
    extend: {
      outline: ['focus', 'responsive', 'hover']
    }
  },
  plugins: [],
}
