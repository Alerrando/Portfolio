import { GithubLogo, Monitor } from "phosphor-react";
import { Title } from "../Title";
import { Key } from "react";
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
        description: `O projeto CRUD de Hóspedes é uma aplicação web desenvolvida como trabalho acadêmico, cujo objetivo é criar um sistema básico de gerenciamento 
        de hóspedes. Este sistema permite aos usuários cadastrar, editar, excluir e buscar dados de hóspedes de forma local, utilizando o armazenamento local do 
        navegador (LocalStorage). A aplicação foi construída com ReactJs, Typescript e TailwindCSS, proporcionando uma interface intuitiva e fácil de usar para a 
        gestão de dados.
        `,
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
        description: `O projeto "Loja - TechSoft" é uma aplicação de comércio eletrônico desenvolvida utilizando ReactJS. O objetivo principal é proporcionar uma 
        experiência de compra online fluida e intuitiva. A aplicação inclui funcionalidades como visualização de produtos, adição ao carrinho de compras, e 
        finalização de pedido. O design é responsivo, garantindo que os usuários tenham uma experiência consistente em dispositivos móveis e desktops. Além disso, 
        a loja foi otimizada para desempenho, garantindo tempos de carregamento rápidos.`,
        img: "Projetos/projeto5.png",
        alt: "Projeto Loja com ReactJS",
        githubSite: "https://github.com/Alerrando/Loja-ReactJs",
        desktopSite: "https://loja-react-js.vercel.app/",
        projectFilter: ["React"],
      },
      {
        title: "Instagram Clone",
        description: `O "Instagram Clone" é uma réplica da interface do Instagram, desenvolvida com ReactJS, TypeScript, e TailwindCSS. 
        O objetivo deste projeto é recriar a experiência de usuário da popular plataforma de mídia social, incluindo funcionalidades 
        como feed de postagens, perfis de usuários, e interações como curtidas e comentários. O design responsivo assegura que a interface 
        se adapte bem a diferentes tamanhos de tela, proporcionando uma experiência semelhante à do aplicativo original.`,
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
        description: `O projeto "Pokedex" é uma aplicação web interativa que utiliza a API PokeAPI para fornecer informações detalhadas sobre 
        os diversos Pokémon. Desenvolvida com React e TypeScript, a aplicação permite que os usuários pesquisem e visualizem dados como tipo, 
        habilidades, e evoluções dos Pokémon. O design é limpo e responsivo, proporcionando uma experiência de usuário agradável tanto em dispositivos 
        móveis quanto em desktops. Este projeto é ideal para fãs de Pokémon e serve como uma excelente prática de integração com APIs.`,
        img: "Projetos/projeto7.png",
        alt: "Projeto de Pokedex",
        githubSite: "https://github.com/Alerrando/Pokedex",
        desktopSite: "https://pokedex-alerrando.vercel.app/",
        projectFilter: ["React", "Typescript"],
      },

      {
        title: "Sistema de Gerenciamento Escolar",
        description: `O "Sistema de Gerenciamento Escolar" é uma aplicação web robusta desenvolvida com ReactJS e Spring Boot. 
        Esta plataforma permite a administração eficiente de uma instituição escolar, incluindo funcionalidades como gerenciamento de alunos, 
        professores, turmas, e horários. O sistema é projetado para ser intuitivo e fácil de usar, com um design responsivo que garante acessibilidade 
        em diferentes dispositivos. Esta solução visa facilitar a organização e a eficiência administrativa de escolas.`,
        img: "Projetos/projeto9.png",
        alt: "Projeto de gerenciamento escolar",
        githubSite: "https://github.com/Alerrando/sistema-seduc",
        desktopSite: "https://sistema-seduc.vercel.app",
        projectFilter: ["NextJs", "Typescript", "TailwindCSS"],
      },
    ]
  },
  {
    data: [
      {
        title: "Clone do Notion",
        description: `O "Clone do Notion" é uma réplica da popular ferramenta de produtividade Notion, desenvolvida com ReactJS. 
        Este projeto visa recriar a interface e funcionalidades essenciais do Notion, permitindo que os usuários criem, editem e organizem 
        notas e tarefas. O design é minimalista e responsivo, garantindo uma experiência de usuário semelhante à do aplicativo original. 
        Este clone é uma excelente prática para entender a construção de aplicações complexas de produtividade.`,
        img: "Projetos/projeto10.png",
        alt: "Projeto do notion clone",
        githubSite: "https://github.com/Alerrando/Notion-Clone",
        desktopSite: "https://notion-clone-alerrando.vercel.app",
        projectFilter: ["React", "Typescript", "TailwindCSS"],
      },
    ]
  }

];

export function Projetos() {

  return (
    <section className="bg-zinc-900 py-4">
      <a id="projects"></a>
      <div className="flex flex-col items-start justify-center gap-10 mx-auto py-6 px-12">
        <Title title={"Projetos"} />
        <Carousel className="w-full flex gap-6 overflow-x-hidden">
          <CarouselContent>
            {projects.map((project: ProjectsType, index: number) => (
              <CarouselItem className="min-w-full flex flex-col gap-12 pb-6" key={index}>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
