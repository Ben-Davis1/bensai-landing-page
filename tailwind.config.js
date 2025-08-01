/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bonsai-inspired color palette
        'bonsai-green': {
          50: '#f0f9f4',
          100: '#dcf2e5',
          200: '#bce5cf',
          300: '#8dd1b0',
          400: '#58b58a',
          500: '#359668',  // Main brand green
          600: '#277a53',
          700: '#226144',
          800: '#1e5038',
          900: '#1a412f',
        },
        'bonsai-brown': {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8ddd0',
          300: '#d9c5ac',
          400: '#c8a682',
          500: '#b8906b',  // Main brand brown
          600: '#a67c5f',
          700: '#8b6751',
          800: '#715447',
          900: '#5c463a',
        },
        'warm-cream': '#fefbf7',
        'soft-sage': '#e8f2ed',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gentle-sway': 'sway 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'grow': 'grow 0.3s ease-out',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}