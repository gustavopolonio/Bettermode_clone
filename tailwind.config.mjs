import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'opacity-gradient':
          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: colors.green[700],
              textDecoration: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
