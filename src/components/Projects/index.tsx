import { GithubLogo, Monitor } from "phosphor-react";
import { Title } from "../Title";
import { Key } from "react";

type ProjectsTypes = {
  title: string,
  description: string,
  img: string,
  alt: string,
  githubSite: string,
  desktopSite: string,
  projectFilter: string[],
}

const projects: ProjectsTypes[] = [
  {
    title: "Clipboard landing page master",
    description: "Projeto do site Front End Mentor feito com Html e Css",
    img: "Projetos/projeto1.png",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/clipboard-landing-page-master",
    desktopSite:
      "https://alerrando.github.io/clipboard-landing-page-master/index.html",
    projectFilter: ["Html", "Css", "Javascript"],
  },
  {
    title: "Previsão do Tempo",
    description: "Projeto consumindo API com Html, Css e Javascript",
    img: "Projetos/projeto2.png",
    alt: "Projeto de previsão do tempo",
    githubSite: "https://github.com/Alerrando/Previsao-do-Tempo",
    desktopSite: "https://alerrando.github.io/Previsao-do-Tempo/",
    projectFilter: ["Html", "Css", "Javascript"],
  },
  {
    title: "Google",
    description: "Projeto de cópia da Google",
    img: "Projetos/projeto3.png",
    alt: "Projeto Google",
    githubSite: "https://github.com/Alerrando/Google",
    desktopSite: "https://alerrando.github.io/Google/index.html",
    projectFilter: ["Html", "Css", "Javascript"],
  },
  {
    title: "Crud Hotel",
    description: "Projeto de um Crud usando ReactJS",
    img: "Projetos/projeto4.png",
    alt: "Projeto Crud Hotel",
    githubSite: "https://github.com/Alerrando/Crud-Hotel",
    desktopSite: "https://crud-hotel.vercel.app/",
    projectFilter: ["React"],
  },
  {
    title: "Loja - TechSoft",
    description: "Projeto da Loja TechSoft refeita com ReactJS",
    img: "Projetos/projeto5.png",
    alt: "Projeto Loja com ReactJS",
    githubSite: "https://github.com/Alerrando/Loja-ReactJs",
    desktopSite: "https://loja-react-js.vercel.app/",
    projectFilter: ["React"],
  },
  {
    title: "Instagram",
    description: "Projeto do Instagram feito com ReactJS",
    img: "Projetos/projeto6.png",
    alt: "Projeto do Instagram feito com ReactJS",
    githubSite: "https://github.com/Alerrando/Instagram-Clone",
    desktopSite: "https://instagram-clone-alerrando.vercel.app/",
    projectFilter: ["React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Pokedex",
    description: "Projeto usando a API PokeAPI",
    img: "Projetos/projeto7.png",
    alt: "Projeto de Pokedex",
    githubSite: "https://github.com/Alerrando/Pokedex",
    desktopSite: "https://pokedex-alerrando.vercel.app/",
    projectFilter: ["React", "Typescript"],
  },

  {
    title: "Previsão do Tempo",
    description: "Projeto Previsão do Tempo",
    img: "Projetos/projeto8.png",
    alt: "Projeto de Previsão do Tempo",
    githubSite: "https://github.com/Alerrando/Previsao-do-Tempo-ReactJS",
    desktopSite: "https://previsao-do-tempo-reactjs-alerrando.vercel.app/",
    projectFilter: ["React", "Typescript"],
  },

  {
    title: "Sistema de Gerenciamento Escolar",
    description: "Projeto Sistema de Gerenciamento Escolar com ReactJS e Spring Boot", 
    img: "Projetos/projeto9.png",
    alt: "Projeto de gerenciamento escolar",
    githubSite: "https://github.com/Alerrando/sistema-seduc",
    desktopSite: "https://sistema-seduc.vercel.app",
    projectFilter: ["NextJs", "Typescript", "TailwindCSS"],
  },

  {
    title: "Clone do Notion",
    description: "Projeto Notion Clone feito com ReactJS",
    img: "Projetos/projeto10.png",
    alt: "Projeto do notion clone",
    githubSite: "https://github.com/Alerrando/Notion-Clone",
    desktopSite: "https://notion-clone-alerrando.vercel.app",
    projectFilter: ["React"],
  },
];

export function Projetos() {

  return (
    <section className="py-4">
      <a id="projects"></a>
      <div className="max-w-[90%] flex flex-col items-start justify-center gap-10 mx-auto py-6">
        <Title title={"Projetos"} />

        <div className="w-full flex gap-6 overflow-x-auto">
          {projects.map((projeto: ProjectsTypes, index: Key) => (
            <div className="min-w-full flex flex-col gap-12">
              <div className="w-full h-[280px] flex gap-24" key={index}>
                <aside className="w-full h-full">
                  <img src={projeto.img} alt={`projetc-${projeto.title}`} className="w-full h-full" />
                </aside>

                <div className="w-full h-full flex flex-col gap-7 items-center justify-start">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">{projeto.title}</h2>
                    
                    <div className="flex gap-3">
                      {projeto.projectFilter.map((category: string, indexCategory: Key) => (
                        <div className="text-white bg-[#26BBA5] border border-[#22C55E] font-bold  px-3 py-2 rounded-lg">
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>

                  <span>{projeto.description}</span>
                </div>
              </div>

              <div className="w-full h-[280px] flex flex-row-reverse gap-24" key={index}>
                <aside className="w-full h-full">
                  <img src={projeto.img} alt={`projetc-${projeto.title}`} className="w-full h-full" />
                </aside>

                <div className="w-full h-full flex flex-col gap-7 items-center justify-start">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">{projeto.title}</h2>
                    
                    <div className="flex gap-3">
                      {projeto.projectFilter.map((category: string, indexCategory: Key) => (
                        <div className="text-white bg-[#26BBA5] border border-[#22C55E] font-bold  px-3 py-2 rounded-lg">
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>

                  <span>{projeto.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
