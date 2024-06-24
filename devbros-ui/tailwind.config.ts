import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode:'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle closest-side at center, white, transparent)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'border' : '#343434',
        'resalt-color': '#3EFFA2',
        'main-color': '#0a0a0b',
        'second-color': '#1a1a1a',
        'text-color' : '#d4d4d4',
        'navbar-color': 'bg-gradient-to-b from-blue-500 to-green-500'
      },
    },
  },
  plugins: [],
};
export default config;
