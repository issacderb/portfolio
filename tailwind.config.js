/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          blue: '#4D8CFF',
          light: '#72A4FF',
          pale: '#CDE0FF',
        },
        lavender: {
          DEFAULT: '#B69CFF',
          light: '#D3C4FF',
          dark: '#9372F2',
        },
        pink: {
          soft: '#F0B7D8',
          pale: '#FCE7F3',
          warm: '#F8C2DB',
        },
        cloud: '#F7F8FC',
        navy: {
          DEFAULT: '#10182B',
          deep: '#0B101D',
          surface: '#152037',
        },
        accent: {
          cyan: '#38E1D8',
          peach: '#FFAE8A',
          jade: '#2DD4BF',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'float-gentle': 'floatGentle 4.5s ease-in-out infinite',
        'spin-very-slow': 'spin 30s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      }
    },
  },
  plugins: [],
}
