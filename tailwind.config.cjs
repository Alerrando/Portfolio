/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        princ: "#393E46",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        playfair: "'Playfair Display', serif",
        glory: "'Glory', sans-serif",
        times: "'Times New Roman', sans-serif",
      },
      gridTemplateRows: {
        sidebar: "10% 70% 15%",
      },
      gridTemplateColumns: {
        "projetos": "repeat(auto-fit, minmax(300px, 1fr));",
      },
    },
  },
  plugins: [],
};
