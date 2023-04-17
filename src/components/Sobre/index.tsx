import { Tab } from "@headlessui/react";
import { Titulo } from "../Titulo";
import { Fragment, Key } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { BsGit } from 'react-icons/bs'
import { FaReact } from "react-icons/fa";
import { DiCss3, DiJavascript1, DiSass } from "react-icons/di";
import { SiMui, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

type TechnologiasType = {
  nome: string;
  icon: IconType;
};

export function Sobre() {
  const technologias: TechnologiasType[] = [
    {
      nome: "Html",
      icon: AiFillHtml5,
    },
    {
      nome: "Css",
      icon: DiCss3,
    },
    {
      nome: "Javascript",
      icon: DiJavascript1,
    },
    {
      nome: "React-Js",
      icon: FaReact,
    },
    {
      nome: "Tailwind-Css",
      icon: SiTailwindcss,
    },
    {
      nome: "Next-Js",
      icon: TbBrandNextjs,
    },

    {
      nome: "Scss",
      icon: DiSass,
    },

    {
      nome: "Mui-Core",
      icon: SiMui,
    },

    {
      nome: "Git",
      icon: BsGit,
    }
  ];

  return (
    <section className="mb-6 md:m-0 relative">
      <a id="sobre"></a>
      <Titulo titulo="Sobre Mim" />
      <Tab.Group>
        <Tab.List className="w-full absolute flex flex-row justify-center gap-[1.5rem] bottom-0 md:bottom-[5%]">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`bg-transparent border-0 text-dark cursor-pointer block text-sm relative outline-none ${
                  selected
                    ? "after:bg-red-600 after:rounded-[25px] after:b-[-18px] after:block after:h-[.5rem] after:left-0 after:mr-auto after:ml-auto after:right-0 after:absolute after:w-[29px] after:z-100"
                    : ""
                }`}
              >
                INFOS
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`bg-transparent border-0 text-dark cursor-pointer block text-sm relative outline-none ${
                  selected
                    ? "after:bg-red-600 after:rounded-[25px] after:b-[-18px] after:block after:h-[.5rem] after:left-0 after:mx-auto after:right-0 after:absolute after:w-[29px] after:z-100"
                    : ""
                }`}
              >
                TECHNOLOGIAS
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="block pb-10 md:grid md:text-center md:px-5 md:pb-0 tab-panel">
            <div className="w-full h-full md:w-[46rem] md:h-[36rem]">
              <img
                src="frontend-image.png"
                alt="foto de um programador front-end"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="alinhamento justify-center md:block md:my-auto md:px-10">
              <div className="flex flex-col gap-2 text-center md:text-left w-[18.75rem]">
                <h3 className="text-2xl font-bold font-times">Quem sou eu</h3>
                <p className="font-playfair font-bold text-base text-[#27BBA5]">
                  Olá, eu sou Alerrando! 
                </p>

                <p className="font-playfair font-bold text-base text-[#27BBA5]">
                  Adoro desenvolver aplicações web e
                  estou sempre procurando aprender mais sobre o mundo da
                  programação porque é literalmente infinito.
                </p>

                <p className="font-playfair font-bold text-base text-[#27BBA5]">
                  Estou sempre
                  procurando melhorar meu trabalho o máximo possível e adoro
                  pedir dicas a outros desenvolvedores sobre como fazer isso.
                  Acredito que a troca de conhecimento entre as pessoas é
                  fundamental para o desenvolvimento pessoal e interpessoal de
                  cada um.
                </p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="w-full h-full md:h-[36rem]">
            <div className="max-w-[1200px] mx-auto px-4 pt-8 pb-10 md:pb-0">
              <div className="grid grid-cols-3 md:grid-cols-projetos gap-6">
                {technologias.map((item: TechnologiasType, key: Key) => (
                  <div
                    key={key}
                    className={`w-[65%] h-14 max-h-16 md:h-28 md:max-h-[120px] relative flex items-center justify-center mx-auto hover:border hover:border-black hover:rounded-lg transition-all ${item.nome}`}
                  >
                    <div className="h-3/4">
                      <item.icon className={`w-full h-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
