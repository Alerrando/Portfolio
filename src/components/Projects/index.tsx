import { GithubLogo, Monitor } from "phosphor-react";
import { Title } from "../Title";
import { Key } from "react";

type ProjectsType = {
  data: ProjectTypesProps[]
}

type ProjectTypesProps = {
  title: string,
  description: string,
  img: string,
  alt: string,
  githubSite: string,
  desktopSite: string,
  projectFilter: string[],
}

const projects: ProjectsType[] = [
  {
    data: [
      {
        title: "Clipboard landing page master",
        description: `Este projeto é uma página de destino para um produto chamado Clipboard, desenvolvida como parte de um desafio do Frontend Mentor. 
          A página de destino foi construída utilizando HTML e CSS, com um design limpo e responsivo que se adapta a diferentes dispositivos. 
          O objetivo do projeto é demonstrar a capacidade de criar uma página web visualmente atraente e funcional, seguindo as melhores práticas 
          de desenvolvimento frontend.`,
        img: "Projetos/projeto1.png",
        alt: "Projeto Loja",
        githubSite: "https://github.com/Alerrando/clipboard-landing-page-master",
        desktopSite:
          "https://alerrando.github.io/clipboard-landing-page-master/index.html",
        projectFilter: ["Html", "Css"],
      },
      {
        title: "Previsão do Tempo",
        description: `O projeto "Previsão do Tempo" é uma aplicação web desenvolvida para fornecer informações meteorológicas detalhadas de qualquer localidade. 
          Ele utiliza a API do OpenWeatherMap para obter os dados climáticos em tempo real. A interface do usuário é simples e intuitiva, facilitando a consulta de
          informações meteorológicas de maneira rápida e eficiente.
        `,
        img: "Projetos/projeto2.png",
        alt: "Projeto de previsão do tempo",
        githubSite: "https://github.com/Alerrando/Previsao-do-Tempo",
        desktopSite: "https://alerrando.github.io/Previsao-do-Tempo/",
        projectFilter: ["Html", "Css", "Javascript"],
      },
    ]
  },
  {
    data: [
      {
        title: "Google",
        description: `O "Google Clone" é um projeto que visa replicar o layout e a funcionalidade básica da página inicial do Google, 
        incluindo o icônico menu de aplicativos. Este projeto foi desenvolvido com o objetivo de praticar e demonstrar habilidades em HTML, 
        CSS e JavaScript, recriando a interface limpa e intuitiva do Google, que é amplamente reconhecida por sua simplicidade e eficiência.`
        ,
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
    ]
  },
  {
    data: [
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
    ]
  },
  {
    data: [
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
    ]
  },
  {
    data: [
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
    ]
  }

];

export function Projetos() {

  return (
    <section className="bg-zinc-900 py-4">
      <a id="projects"></a>
      <div className="max-w-[90%] flex flex-col items-start justify-center gap-10 mx-auto py-6">
        <Title title={"Projetos"} />
        <div className="w-full flex gap-6 overflow-x-auto">
          {projects.map((project: ProjectsType, index: number) => (
            <div className="min-w-full flex flex-col gap-12 pb-6" key={index}>
                {project.data.map((projectInfo: ProjectTypesProps, indexProject: number) => (
                  <div className={`w-full h-auto flex flex-col md:flex-row ${indexProject === 1 && "md:flex-row-reverse"} gap-24 text-white`} key={indexProject}>
                    <aside className="w-full h-full">
                      <img src={projectInfo.img} alt={`projetc-${projectInfo.title}`} className="w-full h-full rounded-lg" />
                    </aside>
    
                    <div className="w-full h-full flex flex-col gap-7 items-start justify-start">
                      <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-bold">{projectInfo.title}</h2>
                        
                        <div className="flex gap-3">
                          {projectInfo.projectFilter.map((category: string, indexCategory: Key) => (
                            <div className="text-white bg-[#26BBA5] font-bold  px-3 py-2 rounded-lg cursor-pointer hover:bg-[#26BBA5]/90" key={indexCategory}>
                              {category}
                            </div>
                          ))}
                        </div>
                      </div>
    
                      <span>{projectInfo.description}</span>

                      <div className="flex gap-2 mx-auto mt-auto">
                          <a href={projectInfo.githubSite} target="_blank" rel="noreferrer">
                            <GithubLogo className="w-8 h-8" />
                          </a>
                          <a href={projectInfo.desktopSite} target="_blank" rel="noreferrer">
                            <Monitor className="w-8 h-8" />
                          </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
