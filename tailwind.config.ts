import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#0a0a0a',
        bgLight: '#141414',
        borderDark: '#2a2a2a',
        textSecondary: '#a0a0a0',
        neon: '#00ff88',
        cyan: '#00ccff',
        magenta: '#ff00ff',
      },
      boxShadow: {
        neon: '0 0 20px rgba(0,255,136,0.4)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
