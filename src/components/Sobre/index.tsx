import { Tab } from "@headlessui/react";
import { Titulo } from "../Titulo";
import React, { Fragment } from "react";

export function Sobre() {
  return (
    <section className="mb-6 md:m-0 relative">
      <a id="sobre"></a>
      <Titulo titulo="Sobre Mim" />
      <Tab.Group>
        <Tab.List className="absolute flex flex-row gap-[1.5rem] bottom-[5%] right-[50%]">
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
          <Tab.Panel className="block md:flex md:justify-evenly md:text-center">
            <div className="w-full h-full md:w-[46rem] md:h-[36rem]">
              <img
                src="frontend-image.png"
                alt="foto de um programador front-end"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="alinhamento justify-center md:block md:my-auto">
              <div className="text-center md:text-left w-[18.75rem]">
                <h3 className="text-2xl font-bold font-times">Quem sou eu</h3>
                <span className="font-playfair font-bold text-base">
                  Meu nome é Alerrando Breno, sou um desenvoldedor front-end jr,
                  atualmente estou cursando Análise e Desenvolvimento de
                  Sistemas na Universidade do Oeste Paulista(Unoeste).
                </span>

                <h3 className="mt-16 text-2xl font-bold font-times">
                  O que estou estudando
                </h3>
                <span className="font-playfair font-bold text-base">
                  Atualmente estou estudando ReactJS, TailwindCSS.
                </span>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="w-full h-full md:w-[46rem] md:h-[36rem]"></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
