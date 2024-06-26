/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E213F',
        'primary-dark': '#161932',
        secondary: '#FFFFFF',
        'secondary-dark': '#EFF1FA',
        tertiary: '#D7E0FF',
        red: '#F87070',
        cyan: '#00D1D1',
        violet: '#D881F8',
        green: '#16A34A',
        pink: '#F472B6',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(315deg, #2E325A 0%, #0E112A 100%)',
      },
      boxShadow: {
        'primary-shadow': '-50px -50px 100px #272C5A, 50px 50px 100px #121530',
        'bg-dark-shadow': 'inset 0 0 0.5px 1px hsla(0,0%,100%,.02),0 0 0 1px hsla(0,0%,100%,.02),0 0.3px 1.4px hsla(0,0%,100%,.4),0 0.9px 1.5px hsla(0,0%,100%,0.3),0 1.5px 6px hsla(0,0%,100%,0.1)',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        h1: ['6.25rem', { lineHeight: '7.5rem', letterSpacing: '-0.3125rem' }],
        h2: ['1.75rem', { lineHeight: '2.125rem' }],
        h3: ['1rem', { lineHeight: '1.1875rem', letterSpacing: '0.9375rem' }],
        h4: ['0.1875rem', { lineHeight: '1rem', letterSpacing: '0.3125rem' }],
        'body-1': ['0.875rem', { lineHeight: '1.125rem' }],
        'body-2': ['0.75rem', { lineHeight: '0.875rem' }],
      },
    },
  },
  plugins: [],
};
