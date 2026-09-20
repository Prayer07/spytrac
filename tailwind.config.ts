import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A1F1D',
          soft: '#1C3634',
        },
        teal: {
          50: '#EFFAF8',
          100: '#D7F2ED',
          200: '#AEE5DB',
          300: '#79D1C2',
          400: '#45B7A5',
          500: '#279D8B',
          600: '#187E70',
          700: '#14655B',
          800: '#124F49',
          900: '#0F413C',
          950: '#082523',
        },
        sky: {
          50: '#EFF9FF',
          100: '#DEF2FF',
          200: '#B6E6FF',
          300: '#7CD4FF',
          400: '#3CBBFB',
          500: '#149FEA',
          600: '#0A7EC8',
          700: '#0A64A2',
          800: '#0D5385',
          900: '#0F456E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(20,101,91,0.08) 0%, rgba(20,101,91,0) 60%)',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(10,31,29,0.06), 0 12px 32px -16px rgba(10,31,29,0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
