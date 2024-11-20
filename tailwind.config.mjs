/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B75BC',
        secondary: '#404041',
        accent: '#F7941D'
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif']
      }
    },
  },
  plugins: [],
}