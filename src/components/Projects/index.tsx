import { GithubLogo, Monitor } from "phosphor-react";
import { Key, useState } from "react";
import { Title } from "../Title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

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
  projectType: "personal-project" | "freela" | "Todos",
}

const projects: ProjectsType[] = [
  {
    data: [
      {
        title: "Loja - TechSoft",
        description: `O projeto "Loja - TechSoft" é uma aplicação de comércio eletrônico desenvolvida utilizando ReactJS. O objetivo principal é proporcionar uma 
        experiência de compra online fluida e intuitiva. A aplicação inclui funcionalidades como visualização de produtos, adição ao carrinho de compras, e 
        finalização de pedido. O design é responsivo, garantindo que os usuários tenham uma experiência consistente em dispositivos móveis e desktops. Além disso, 
        a loja foi otimizada para desempenho, garantindo tempos de carregamento rápidos.`,
        img: "Projetos/projeto1.png",
        alt: "Projeto Loja com ReactJS",
        githubSite: "https://github.com/Alerrando/Loja-ReactJs",
        desktopSite: "https://loja-react-js.vercel.app/",
        projectFilter: ["React"],
        projectType: "personal-project"
      },
      {
        title: "Clone do Notion",
        description: `O "Clone do Notion" é uma réplica da popular ferramenta de produtividade Notion, desenvolvida com ReactJS. 
        Este projeto visa recriar a interface e funcionalidades essenciais do Notion, permitindo que os usuários criem, editem e organizem 
        notas e tarefas. O design é minimalista e responsivo, garantindo uma experiência de usuário semelhante à do aplicativo original. 
        Este clone é uma excelente prática para entender a construção de aplicações complexas de produtividade.`,
        img: "Projetos/projeto2.png",
        alt: "Projeto do notion clone",
        githubSite: "https://github.com/Alerrando/Notion-Clone",
        desktopSite: "https://notion-clone-alerrando.vercel.app",
        projectFilter: ["React", "Typescript", "TailwindCSS"],
        projectType: "personal-project"
      },
    ]
  },
  {
    data: [
      {
        title: "Pokedex",
        description: `O projeto "Pokedex" é uma aplicação web interativa que utiliza a API PokeAPI para fornecer informações detalhadas sobre 
        os diversos Pokémon. Desenvolvida com React e TypeScript, a aplicação permite que os usuários pesquisem e visualizem dados como tipo, 
        habilidades, e evoluções dos Pokémon. O design é limpo e responsivo, proporcionando uma experiência de usuário agradável tanto em dispositivos 
        móveis quanto em desktops. Este projeto é ideal para fãs de Pokémon e serve como uma excelente prática de integração com APIs.`,
        img: "Projetos/projeto3.png",
        alt: "Projeto de Pokedex",
        githubSite: "https://github.com/Alerrando/Pokedex",
        desktopSite: "https://pokedex-alerrando.vercel.app/",
        projectFilter: ["React", "Typescript"],
        projectType: "personal-project"
      },

      {
        title: "Sistema de Gerenciamento Escolar",
        description: `O "Sistema de Gerenciamento Escolar" é uma aplicação web robusta desenvolvida com ReactJS e Spring Boot. 
        Esta plataforma permite a administração eficiente de uma instituição escolar, incluindo funcionalidades como gerenciamento de alunos, 
        professores, turmas, e horários. O sistema é projetado para ser intuitivo e fácil de usar, com um design responsivo que garante acessibilidade 
        em diferentes dispositivos. Esta solução visa facilitar a organização e a eficiência administrativa de escolas.`,
        img: "Projetos/projeto4.png",
        alt: "Projeto de gerenciamento escolar",
        githubSite: "https://github.com/Alerrando/sistema-seduc",
        desktopSite: "https://sistema-seduc.vercel.app",
        projectFilter: ["NextJs", "Typescript", "TailwindCSS"],
        projectType: "freela"
      },
    ]
  },
  {
    data: [
      {
        title: "Lanchonete Pequim",
        description: `O projeto "Landing Page - Lanchonete Pequim" é uma aplicação web desenvolvida para a renomada lanchonete Pequim, situada em Presidente Prudente. 
        Esta landing page foi construída utilizando as mais modernas tecnologias, incluindo TypeScript, TailwindCSS e React, com o objetivo de proporcionar uma 
        experiência de navegação fluida e visualmente atraente para os usuários.`,
        img: "Projetos/projeto5.png",
        alt: "Projeto de Lanchonete Pequim",
        githubSite: "https://github.com/Pixel-Pair-Devs/Lanchonete-Pequim",
        desktopSite: "https://pequim-lanchonete.vercel.app",
        projectFilter: ["React", "Typescript", "TailwindCSS"],
        projectType: "freela"
      },
    ]
  },
];

export function Projetos() {
  const [filteredProjects, setFilteredProjects] = useState<string>("Todos");

  return (
    <section className="bg-zinc-900 py-4">
      <a id="projects"></a>
      <div className="flex flex-col items-start justify-center gap-10 mx-auto py-6 px-6 md:px-12">
        <div className="w-full grid grid-cols-2">
          <Title title={"Projetos"} />

          <form className="w-[45%] flex flex-col items-start justify-end ml-auto">
            <label htmlFor="filter-projects" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escolher filtro de projetos</label>
            <select
              id="filter-projects"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={e => setFilteredProjects(e.target.value)}
            >
              <option selected value="">Todos Projetos</option>
              <option value="personal-project">Projetos Pessoais</option>
              <option value="freela">Freela</option>
            </select>
          </form>
        </div>
        <Carousel className="w-full flex gap-6 overflow-x-hidden">
          <CarouselContent>
            {handleprojectType().map((project: ProjectsType, index: number) => (
              <CarouselItem className="min-w-full flex flex-col justify-between md:gap-12 pb-6 space-y-2" key={index}>
                {project.data.map((projectInfo: ProjectTypesProps, indexProject: number) => (
                  <div className={`w-full h-auto flex flex-col-reverse md:flex-row ${indexProject === 1 && "md:flex-row-reverse"} gap-12 md:gap-24 text-white`} key={indexProject}>
                    <aside className="w-full h-full">
                      <img src={projectInfo.img} alt={`projetc-${projectInfo.title}`} className="w-full h-48 md:h-full rounded-lg" />
                    </aside>

                    <div className="w-full h-full flex flex-col gap-7 items-start justify-start">
                      <div className="flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold">{projectInfo.title}</h2>

                        <div className="flex gap-3">
                          {projectInfo.projectFilter.map((category: string, indexCategory: Key) => (
                            <div className="text-white bg-[#26BBA5] font-bold  px-3 py-2 rounded-lg cursor-pointer hover:bg-[#26BBA5]/90" key={indexCategory}>
                              {category}
                            </div>
                          ))}
                        </div>
                      </div>

                      <span className="text-sm md:text-base">{truncateDescription(projectInfo.description)}</span>

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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );

  function truncateDescription(description: string) {
    const maxLength = 120;
    if (window.innerWidth < 767 && description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    } else {
      return description;
    }
  };

  function handleprojectType() {
    if (filteredProjects === "Todos") {
      return projects;
    } 
  
    return projects
      .map(project => ({
        data: project.data.filter(item => item.projectType === filteredProjects),
      }))
      .filter(project => project.data.length > 0);
  }
  
}
