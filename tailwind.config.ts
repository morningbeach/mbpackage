import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT:'#1F6FEB',50:'#EAF2FF',100:'#D5E4FE',200:'#AAC9FD',300:'#7FADFC',400:'#5492FB',500:'#2976FA',600:'#1F6FEB',700:'#1B5AC0',800:'#164496',900:'#102E6B' }
      },
      borderRadius: { '3xl':'1.5rem' },
      boxShadow: { soft:'0 10px 30px rgba(0,0,0,0.06)' }
    }
  },
  plugins: []
}
export default config
