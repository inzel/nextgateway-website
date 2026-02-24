/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nextgateway-blue': '#3B82F6',
        'nextgateway-dark-blue': '#2563EB',
        'nextgateway-navy': '#0F172A',
        'nextgateway-gray': '#64748B',
        'nextgateway-light-gray': '#94A3B8',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
