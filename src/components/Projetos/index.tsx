import { useState } from "react";
import { Titulo } from "../Titulo";

const projetos = [
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Feito com Html e Css",
    img: "Projetos/projeto1.png",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/Loja",
    desktopSite: "https://alerrando.github.io/Loja/Loja.html",
    filterProjeto: "Html/Css/Js",
  },
  {
    titulo: "Rélogio Digital",
    subTitulo: "Feito com Html, Css e Javascript",
    img: "Projetos/projeto2.png",
    alt: "Projeto Rélogio Digital",
    githubSite: "https://github.com/Alerrando/Relogio-Digital",
    desktopSite:
      "https://alerrando.github.io/Relogio-Digital/relogioDigital.html",
    filterProjeto: "Html/Css/Js",
  },
  {
    titulo: "Trocador de Cor",
    subTitulo: "Feito com Html, Css e Javascript",
    img: "Projetos/projeto3.png",
    alt: "Projeto Trocador de Cor",
    githubSite: "https://github.com/Alerrando/Trocador-de-Cores",
    desktopSite: "https://alerrando.github.io/Trocador-de-Cores/",
    filterProjeto: "Html/Css/Js",
  },
  {
    titulo: "Clipboard landing page master",
    subTitulo: "Projeto do site Front End Mentor feito com Html e Css",
    img: "Projetos/projeto4.png",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/clipboard-landing-page-master",
    desktopSite:
      "https://alerrando.github.io/clipboard-landing-page-master/index.html",
    filterProjeto: "Html/Css/Js",
  },
  {
    titulo: "Previsão do Tempo",
    subTitulo: "Projeto consumindo API com Html, Css e Javascript",
    img: "Projetos/projeto5.png",
    alt: "Projeto de previsão do tempo",
    githubSite: "https://github.com/Alerrando/Previsao-do-Tempo",
    desktopSite: "https://alerrando.github.io/Previsao-do-Tempo/",
    filterProjeto: "Html/Css/Js"
  },
  {
    titulo: "Google",
    subTitulo: "Projeto de cópia da Google",
    img: "Projetos/projeto6.png",
    alt: "Projeto Google",
    githubSite: "https://github.com/Alerrando/Google",
    desktopSite: "https://alerrando.github.io/Google/index.html",
    filterProjeto: "Html/Css/Js",
  },
  {
    titulo: "Crud Hotel",
    subTitulo: "Projeto de um Crud usando ReactJS",
    img: "Projetos/projeto7.png",
    alt: "Projeto Crud Hotel",
    githubSite: "https://github.com/Alerrando/Crud-Hotel",
    desktopSite: "https://crud-hotel.vercel.app/",
    filterProjeto: "React",
  },
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Projeto da Loja TechSoft refeita com ReactJS",
    img: "Projetos/projeto8.png",
    alt: "Projeto Loja com ReactJS",
    githubSite: "https://github.com/Alerrando/Loja-ReactJs",
    desktopSite: "https://loja-react-js.vercel.app/",
    filterProjeto: "React",
  },
  {
    titulo: "Instagram",
    subTitulo: "Projeto do Instagram feito com ReactJS",
    img: "Projetos/projeto9.png",
    alt: "Projetodo Instagram feit com ReactJS",
    githubSite: "https://github.com/Alerrando/Instagram-Clone",
    desktopSite: "https://instagram-clone-alerrando.vercel.app/",
    filterProjeto: "React",
  },
  {
    titulo: "Pokedex",
    subTitulo: "Projeto usando a API PokeAPI",
    img: "Projetos/projeto10.png",
    alt: "Projetodo Pokedex",
    githubSite: "https://github.com/Alerrando/Pokedex",
    desktopSite: "https://pokedex-alerrando.vercel.app/",
    filterProjeto: "React",
  },

  {
    titulo: "Previsão do Tempo",
    subTitulo: "Projeto Previsão do Tempo",
    img: "Projetos/projeto11.png",
    alt: "Projetodo Previsão do Tempo",
    githubSite: "https://github.com/Alerrando/Previsao-do-Tempo-ReactJS",
    desktopSite: "https://previsao-do-tempo-reactjs-alerrando.vercel.app/",
    filterProjeto: "React",
  },
];

export function Projetos() {
  const [project, setProject] = useState("");

  const projectFilter = projetos.filter((projeto) => projeto.filterProjeto.includes(project))

  return (
    <section>
      <a id="projetos"></a>
      <Titulo titulo={"Projetos"} />
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="w-full pb-4 alinhamento justify-around">
          <button 
            className="alinhamento justify-center text-sm md:text-base py-2 w-24 md:py-2 md:w-36 bg-[#2e3238] text-white rounded-lg opacity-90 hover:opacity-100"
            onClick={() => setProject("")}
            >
            Todos
          </button>
          <button 
            className="alinhamento justify-center text-sm md:text-base py-2 w-24 md:py-2 md:w-36 bg-[#2e3238] text-white rounded-lg opacity-90 hover:opacity-100"
            onClick={() => setProject("Html/Css/Js")}
            >
            Html/Css/Js
          </button>
          <button 
            className="alinhamento justify-center text-sm md:text-base py-2 w-24 md:py-2 md:w-36 bg-[#2e3238] text-white rounded-lg opacity-90 hover:opacity-100"
            onClick={() => setProject("React")}
            >
            ReactJS
          </button>
        </div>

        <div className="grid grid-cols-projetos gap-6">
          {projectFilter.map((projeto, index) => (
            <>
              <div className="max-h-[200px] relative text-center group border border-zinc-400 rounded-xl">
                <div className="w-full h-full">
                  <img
                    src={projeto.img}
                    alt={projeto.alt}
                    className="rounded-xl w-full h-full"
                  />
                </div>

                <div className="absolute w-full border-none outline-none ease-in-out bottom-0 py-4 md:hidden md:group-hover:block transition-all">
                  <div className="alinhamento justify-center pb-8 gap-16 text-white">
                    <a href={projeto.githubSite} target="_blank">
                      <img
                        src={"github-svgrepo-com.svg"}
                        alt="icon do github"
                      />
                    </a>
                    <a href={projeto.desktopSite} target="_blank">
                      <img
                        src={"desktop-svgrepo-com.svg"}
                        alt="icon de desktop"
                      />
                    </a>
                  </div>
                  <h2 className="font-roboto text-xl font-bold text-[#20b2aa]">
                    {projeto.titulo}
                  </h2>
                  <span className="font-playfair font-bold text-xs text-orange-500">
                    {projeto.subTitulo}
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
