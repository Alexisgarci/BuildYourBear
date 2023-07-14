/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: ["./src/**/*.{vue,ts,jsx,tsx,html,js}",  'node_modules/preline/dist/*.js',],
//   theme: {
//     extend: {},
    
//   },
//   plugins: [
//     require('preline/plugin'),
//   ],
// }


module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
      extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
  }