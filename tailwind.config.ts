import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peach: '#E7816B',
        black: '#1D1C1E',
        'light-peach': '#FFAD9B',
        'lighter-peach': '#FDF3F0',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
      },
      maxWidth: {
        xs: '327px',
        '2xl': '689px',
        '6xl': '1111px',
      },
      fontSize: {
        base: ['16px', '26px'],
      },
      backgroundPosition: {
        cta: 'right 56% top 49%',
        'cta-tablet': 'right 90% top 50%',
        about: 'right 0% top 25.5%',
        'about-tablet': 'left -250% bottom -30%',
        'about-desktop': 'right 0% bottom 0%',
        'about-section': 'left 0% top 0%',
        'about-tablet-section': 'right 10% bottom -23%',
        'about-desktop-section': 'left 0% bottom 0%',
      },
    },
  },
  plugins: [],
} satisfies Config;
