/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'title':'hsl(var(--title))',
        'secondary-title':'hsl(var(--secondary-title))',
        'primary-bg':'hsl(var(--primary-bg))',
        'secondary-bg':'hsl(var(--secondary-bg))'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:[ {
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        '--title': '126, 16.8%, 37.3%',
        '--primary-bg': '98, 33%, 84%',
        '--secondary-bg': '125, 16%, 59%',
        '--secondary-title': '118, 12%, 51%',
      },
    },]
      
  }
}

