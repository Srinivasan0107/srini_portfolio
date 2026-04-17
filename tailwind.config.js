/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f5f3ef',
          100: '#e8e4db',
          200: '#d4ccbe',
          300: '#b8ac99',
          400: '#998b74',
          500: '#7d6f5c',
          600: '#65594a',
          700: '#50473c',
          800: '#433c33',
          900: '#3a352e',
          950: '#1e1b17',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
