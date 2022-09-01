/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        'princ': "#393E46",
        'sombreamento': 'rgba(0, 0, 0, 0.5)',
      },
      gridTemplateRows: {
        "sidebar": "10% 70% 15%",
      },
      backgroundImage: {
        "image-princ": "url('./src/components/Main/image/imagem-princ.jpg')",
      }
    },
  },
  plugins: [],
}
