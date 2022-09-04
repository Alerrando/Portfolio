import { Titulo } from "../Titulo";

export function Sobre() {
  return (
    <section className="mb-6 md:m-0">
      <a id="sobre"></a>
      <Titulo titulo="Sobre" />
      <div className="block md:flex md:justify-evenly md:text-center">
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
              atualmente estou cursando Análise e Desenvolvimento de Sistemas na
              Universidade do Oeste Paulista(Unoeste).
            </span>

            <h3 className="mt-16 text-2xl font-bold font-times">
              O que estou estudando
            </h3>
            <span className="font-playfair font-bold text-base">
              Atualmente estou estudando ReactJS, TailwindCSS.
            </span>
          </div>
        </div>

        <div className="alinhamento mt-8">
          <div className="w-full md:w-16 md:grid gap-8 alinhamento place-content-center">
            <img src="html.svg" alt="imagem da linguagem html" className="w-12 h-12 md:w-20 md:h-20" />
            <img src="css3.svg" alt="imagem da linguagem css" className="w-12 h-12 md:w-20 md:h-20" />
            <img src="javascript.svg" alt="imagem da linguagem javascript" className="w-12 h-12 md:w-20 md:h-20" />
            <img src="react.svg" alt="imagem da linguagem react" className="w-12 h-12 md:w-20 md:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
