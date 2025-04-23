import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Ensure Tailwind scans your files
  theme: {
    extend: {
      animation: {
        marquee: 'marquee var(--duration, 40s) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration, 40s) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'marquee-vertical': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
