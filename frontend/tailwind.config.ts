import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9A84C',
          dark: '#A8863A',
          light: '#FDF6E3',
        },
        secondary: {
          DEFAULT: '#0A1628',
          light: '#1A2E4A',
        },
        accent: {
          DEFAULT: '#3B7BC8',
          light: '#EBF3FF',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A0',
          dark: '#A8863A',
        },
        background: {
          DEFAULT: '#FAFAF8',
          alt: '#F5F3EE',
          dark: '#0A1628',
          cream: '#FAF7F2',
        },
        text: {
          primary: '#0A1628',
          secondary: '#4B5563',
          muted: '#9CA3AF',
          light: '#F5F3EE',
        },
        border: {
          DEFAULT: '#E8E2D9',
          gold: '#C9A84C',
        },
        status: {
          available: '#38A169',
          sold: '#E53E3E',
          reserved: '#F6AD55',
          unavailable: '#94a3b8',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8D5A0 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 60%, #C9A84C 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
        'gold-lg': '0 8px 40px rgba(201, 168, 76, 0.4)',
        'dark': '0 4px 20px rgba(10, 22, 40, 0.3)',
        'luxury': '0 20px 60px rgba(10, 22, 40, 0.15)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config;