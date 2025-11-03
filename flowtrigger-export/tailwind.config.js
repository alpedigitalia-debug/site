/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-pure-black': '#000000',
        'background-near-black': '#0a0a0a',
        'background-deep-gray': '#111111',
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-tertiary': '#888888',
        'accent-cyan': '#00ffff',
        'accent-blue': '#0099ff',
        'border-subtle': '#222222',
        'border-light': '#333333',
      },
      fontFamily: {
        'display': ['ui-sans-serif', 'system-ui'],
        'body': ['ui-sans-serif', 'system-ui'],
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        glowPulse: {
          '0%': { textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
        },
      },
    },
  },
  plugins: [],
}