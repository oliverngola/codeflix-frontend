import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@vidstack/react/tailwind.cjs'),
  ],
}
export default config
