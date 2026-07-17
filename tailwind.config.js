/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F1',
        parchment: '#F5F0E6',
        espresso: { DEFAULT: '#1F1B16', soft: '#4C463F', mute: '#7D766E' },
        gold: { DEFAULT: '#C9A15A', deep: '#A47F35', soft: 'rgba(201,161,90,0.14)' },
        forest: '#3F6B4F',
        terracotta: '#C4704F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 4px 20px rgba(31,27,22,0.06)',
        lift: '0px 18px 44px rgba(31,27,22,0.14)',
        glow: '0 8px 30px rgba(201,161,90,0.35)',
      },
      borderRadius: {
        card: '20px',
      },
      letterSpacing: {
        widest2: '0.18em',
      },
    },
  },
  plugins: [],
};
