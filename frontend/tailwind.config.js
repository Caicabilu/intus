/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'organic-brown': {
          50: '#faf8f6',
          100: '#f4f2f0',
          200: '#e8ddc7',
          300: '#d4b896',
          400: '#c7a882',
          500: '#8b4513',
          600: '#a0522d',
          700: '#7d4213',
          800: '#6b3710',
          900: '#5a2d0d',
        },
        'natural-beige': {
          50: '#fefcfb',
          100: '#fdf9f7',
          200: '#faf5f0',
          300: '#f5ede3',
          400: '#ede0d0',
          500: '#e0cbb3',
          600: '#cfb193',
          700: '#b8956f',
          800: '#9d7a53',
          900: '#7f6242',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}