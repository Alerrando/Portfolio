import { Tab } from "@headlessui/react";
import { Fragment, Key } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGit } from 'react-icons/bs';
import { DiCss3, DiJavascript1, DiSass } from "react-icons/di";
import { FaJava, FaReact, FaSass } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiMui, SiSpring, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Title } from "../Title";

type TechnologiasType = {
  nome: string;
  icon: IconType;
};

export function Knowledge() {
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
      nome: "Sass",
      icon: FaSass
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
      nome: "Java",
      icon: FaJava
    },

    {
      nome: "Spring Boot",
      icon: SiSpring
    },

    {
      nome: "Git",
      icon: BsGit,
    }
  ];

  return (
    <section className="relative bg-zinc-900 py-4">
      <a id="sobre"></a>

      <div className="max-w-[1200px] h-auto flex flex-col gap-8 mx-auto py-6">
        <Title title="Conhecimentos" />
        <div className="w-full h-full flex flex-row items-center justify-center">
          <div className="w-full grid grid-cols-3 md:grid-cols-projetos gap-6">
            {technologias.map((item: TechnologiasType, key: Key) => (
              <div className="w-full flex items-center justify-center" key={key}>
                <div
                  className={`w-[65%] h-14 max-h-16 md:h-28 md:max-h-[120px] relative flex items-center justify-center mr-auto border-2 border-zinc-800 hover:border-[#CD5FF8] rounded-lg transition-all text-white`}
                >
                  <div className="h-3/4">
                    <item.icon className={`w-full h-full`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
