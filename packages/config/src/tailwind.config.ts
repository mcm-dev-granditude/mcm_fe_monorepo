import type { Config } from 'tailwindcss'
import { tailwindTheme } from '@repo/tokens/src'

const config = {
  darkMode: [ 'class' ],
  content: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: tailwindTheme
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [ require( 'tailwindcss-animate' ) ]
} satisfies Config

export default config