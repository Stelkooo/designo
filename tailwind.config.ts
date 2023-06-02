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
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
      },
    },
  },
  plugins: [],
} satisfies Config;
