import foto from "./image/imagem-princ.jpg";

export function Main() {
  return (
    <main className={"w-full alinhamento h-screen img-fundo"}>
      <div className="mx-12 md:mx-20 w-[420px] text-center chegando">
        <p className="text-[#f8f8ff] text-xl md:text-base font-bold font-playfair">
          Olá, meu nome é
        </p>
        <h1 className="text-[#20b2aa] text-3xl md:text-4xl my-1 font-roboto font-bold">
          Alerrando Breno
        </h1>
        <p className="text-[#f8f8ff] text-xl md:text-base font-bold font-playfair">
          e sou
        </p>
        <h2 className="text-[#ffffe0] text-2xl md:text-2xl mb-3 font-roboto font-bold">
          Desenvolvedor Front End
        </h2>

        <div className="md:flex md:justify-center block gap-3">
          <a href="https://www.linkedin.com/in/alerrando-breno-656aa8188" className="no-underline font-roboto text-base text-white">
            <button className="cursor-pointer border-none rounded-[20px] md:opacity-80 md:px-16 py-2 mt-4 px-32 shadow-[2px 3px 3px black] bg-[#26bba5] opacidade md:animate-none md:hover:opacity-100">Linkedin</button>
          </a>
          <a href="https://github.com/Alerrando" className="no-underline font-roboto text-base text-white">
            <button className="cursor-pointer border-none rounded-[20px] md:opacity-80 md:px-16 py-2 mt-4 px-[136px] shadow-[2px 3px 3px black] bg-[#0f3443] opacidade md:animate-none md:hover:opacity-100">Github</button>
          </a>
        </div>
      </div>
    </main>
  );
}
