import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,

  include: [
    './src/**/*.{js,jsx,ts,tsx,astro}',
    './pages/**/*.{js,jsx,ts,tsx,astro}',
  ],

  exclude: [],

  theme: {
    extend: {},
  },

  globalCss: {
    'html, body': {
      fontFamily: 'Zen Maru Gothic',
      bg: '#EBECF0',
    },
  },

  outdir: 'styled-system',
})
