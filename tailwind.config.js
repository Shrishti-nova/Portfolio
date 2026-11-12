/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080810',
          'bg-secondary': '#11111C',
          'bg-card': '#161426',
          'bg-card-hover': '#1F1B36',
          purple: '#A855F7',
          violet: '#C084FC',
          glow: '#9333EA',
          deep: '#581C87',
          accent: '#7E22CE',
          text: '#FFFFFF',
          muted: '#A1A1AA',
          border: 'rgba(168, 85, 247, 0.25)',
          'border-hover': 'rgba(192, 132, 252, 0.5)',
          cyan: '#38BDF8',
          green: '#10B981',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 15px rgba(168, 85, 247, 0.35), 0 0 30px rgba(147, 51, 234, 0.2)',
        'neon-strong': '0 0 25px rgba(168, 85, 247, 0.6), 0 0 50px rgba(147, 51, 234, 0.35)',
        'neon-sm': '0 0 10px rgba(168, 85, 247, 0.25)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite',
        'radar': 'radarSweep 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

