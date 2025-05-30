import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'], // Use CSS variable
      },
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
        accent: 'rgb(var(--accent-color) / <alpha-value>)',
        'text-custom': 'rgb(var(--text-color) / <alpha-value>)', // Renamed to avoid conflict
        'background-custom': 'rgb(var(--background-color) / <alpha-value>)', // Renamed
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
      },
    },
  },
  plugins: [],
}
export default config
