import { Key, useState } from "react";
import { Title } from "../Title";
import { GithubLogo, Monitor } from "phosphor-react";

type ProjectsTypes = {
  title: string,
  subTitle: string,
  img: string,
  alt: string,
  githubSite: string,
  desktopSite: string,
  projectFilter: string,
}

const projects: ProjectsTypes[] = [
  {
    title: "Clipboard landing page master",
    subTitle: "Projeto do site Front End Mentor feito com Html e Css",
    img: "Projetos/projeto1.png",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/clipboard-landing-page-master",
    desktopSite:
      "https://alerrando.github.io/clipboard-landing-page-master/index.html",
    projectFilter: "Html/Css/Js",
  },
  {
    title: "Previsão do Tempo",
    subTitle: "Projeto consumindo API com Html, Css e Javascript",
    img: "Projetos/projeto2.png",
    alt: "Projeto de previsão do tempo",
    githubSite: "https://github.com/Alerrando/Previsao-do-Tempo",
    desktopSite: "https://alerrando.github.io/Previsao-do-Tempo/",
    projectFilter: "Html/Css/Js"
  },
  {
    title: "Google",
    subTitle: "Projeto de cópia da Google",
    img: "Projetos/projeto3.png",
    alt: "Projeto Google",
    githubSite: "https://github.com/Alerrando/Google",
    desktopSite: "https://alerrando.github.io/Google/index.html",
    projectFilter: "Html/Css/Js",
  },
  {
    title: "Crud Hotel",
    subTitle: "Projeto de um Crud usando ReactJS",
    img: "Projetos/projeto4.png",
    alt: "Projeto Crud Hotel",
    githubSite: "https://github.com/Alerrando/Crud-Hotel",
    desktopSite: "https://crud-hotel.vercel.app/",
    projectFilter: "React",
  },
  {
    title: "Loja - TechSoft",
    subTitle: "Projeto da Loja TechSoft refeita com ReactJS",
    img: "Projetos/projeto5.png",
    alt: "Projeto Loja com ReactJS",
    githubSite: "https://github.com/Alerrando/Loja-ReactJs",
    desktopSite: "https://loja-react-js.vercel.app/",
    projectFilter: "React",
  },
  {
    title: "Instagram",
    subTitle: "Projeto do Instagram feito com ReactJS",
    img: "Projetos/projeto6.png",
    alt: "Projetodo Instagram feit com ReactJS",
    githubSite: "https://github.com/Alerrando/Instagram-Clone",
    desktopSite: "https://instagram-clone-alerrando.vercel.app/",
    projectFilter: "React",
  },
  {
    title: "Pokedex",
    subTitle: "Projeto usando a API PokeAPI",
    img: "Projetos/projeto7.png",
    alt: "Projetodo Pokedex",
    githubSite: "https://github.com/Alerrando/Pokedex",
    desktopSite: "https://pokedex-alerrando.vercel.app/",
    projectFilter: "React",
  },

  {
    title: "Previsão do Tempo",
    subTitle: "Projeto Previsão do Tempo",
    img: "Projetos/projeto8.png",
    alt: "Projetodo Previsão do Tempo",
    githubSite: "https://github.com/Alerrando/Previsao-do-Tempo-ReactJS",
    desktopSite: "https://previsao-do-tempo-reactjs-alerrando.vercel.app/",
    projectFilter: "React",
  },
];

export function Projetos() {

  return (
    <section className="bg-zinc-900">
      <a id="projetos"></a>
      <div className="max-w-[1200px] flex flex-col gap-10 mx-auto px-4 py-6">
        <Title title={"Projetos"} />

        <div className="grid grid-cols-projetos gap-6">
          {projects.map((projeto: ProjectsTypes, index: number) => (
            <>
              <div className="max-h-[200px] relative text-center group border border-zinc-400 rounded-xl" key={index}>
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
                      <GithubLogo size={22} className="text-black" />
                    </a>
                    <a href={projeto.desktopSite} target="_blank">
                      <Monitor size={22} className="text-black" />
                    </a>
                  </div>
                  <h2 className="font-roboto text-xl font-bold text-[#20b2aa]">
                    {projeto.title}
                  </h2>
                  <span className="font-playfair font-bold text-xs text-orange-500">
                    {projeto.subTitle}
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
