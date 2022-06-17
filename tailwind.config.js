const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.tag': {
          paddingTop: theme('spacing.[0.5]'),
          paddingBottom: theme('spacing.[0.5]'),
          paddingLeft: theme('spacing.2'),
          paddingRight: theme('spacing.2'),
          borderRadius: theme('borderRadius.xl'),
          fontSize: theme('fontSize.sm'),
          backgroundColor: theme('backgroundColor.gray.800'),
          color: theme('colors.gray.300')
        },
        '.content': {
          color: theme('colors.neutral.400'),
          lineHeight: theme('lineHeight.8')
        }
      })
    })
  ]
}
