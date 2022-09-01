/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "image-princ": "url('./src/components/Main/image/imagem-princ.jpg')",
      },
      colors: {
        princ: "#393E46",
        sombreamento: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        playfair: "'Playfair Display', serif",
        glory: "'Glory', sans-serif",
      },
      gridTemplateRows: {
        sidebar: "10% 70% 15%",
      },
    },
  },
  plugins: [],
};
