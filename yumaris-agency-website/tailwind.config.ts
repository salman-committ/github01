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
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        'neon-primary': 'rgb(var(--primary-neon) / <alpha-value>)',
        'neon-secondary': 'rgb(var(--secondary-neon) / <alpha-value>)',
        'neon-accent': 'rgb(var(--accent-neon) / <alpha-value>)',
        
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',

        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'card-bg': 'rgb(var(--card-bg-rgb) / <alpha-value>)',
        'card-border': 'rgb(var(--card-border-rgb) / <alpha-value>)',
        'glass-bg': 'var(--glass-bg-rgb)',
        'glass-border': 'var(--glass-border-color)',
      },
      backgroundImage: {
        'futuristic-gradient': 'linear-gradient(135deg, var(--gradient-neon-start) 0%, var(--gradient-neon-mid) 50%, var(--gradient-neon-end) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
