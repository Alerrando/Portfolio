import { Titulo } from "../Titulo";

const projetos = [
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Feito com Html, Css e Javascript",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/Loja",
    desktopSite: "alerrando.github.io/loja/loja.html",
  },
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Feito com Html, Css e Javascript",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/Loja",
    desktopSite: "alerrando.github.io/loja/loja.html",
  },
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Feito com Html, Css e Javascript",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/Loja",
    desktopSite: "alerrando.github.io/loja/loja.html",
  },
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Feito com Html, Css e Javascript",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/Loja",
    desktopSite: "alerrando.github.io/loja/loja.html",
  },
];

export function Projetos() {
  return (
    <section>
      <Titulo titulo={"Projetos"} />

      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="grid grid-cols-projetos gap-4">
          {projetos.map((projeto, index) => (
            <>
              <div className="max-h-[200px] relative text-center group">
                <div className="w-full h-full">
                  <img src={`projeto${index+1}.png`} alt="" />
                </div>

                <div className="absolute w-full border-none outline-none ease-in-out bottom-0 py-4 md:hidden md:group-hover:block transition-all">
                  <div className="alinhamento justify-center pb-8 gap-16 text-white">
                    <a href={projetos[index].githubSite}>
                      <img src={'github-svgrepo-com.svg'} alt="" />
                    </a>
                    <a href={projetos[index].desktopSite}>
                      <img src={'desktop-svgrepo-com.svg'} alt="" />
                    </a>
                  </div>
                  <h2 className="font-roboto text-xl font-bold text-[#20b2aa]">
                    {projetos[index].titulo}
                  </h2>
                  <span className="font-playfair font-bold text-xs text-orange-500">
                    {projetos[index].subTitulo}
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
