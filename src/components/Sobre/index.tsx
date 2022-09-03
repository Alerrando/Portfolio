import { Titulo } from "../Titulo";

export function Sobre() {
  return (
    <section>
      <Titulo titulo="Sobre" />
      <div className="block md:flex md:justify-evenly md:text-center">
        <div className="w-full h-full md:w-[40rem] md:h-[30rem]">
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

            <h3 className="mt-16 text-2xl font-bold font-times">O que estou estudando</h3>
            <span className="font-playfair font-bold text-base">
                Atualmente estou estudando ReactJS, TailwindCSS.
            </span>
          </div>
        </div>

        
      </div>
    </section>
  );
}
