import { Titulo } from "../Titulo";

const projetos = [
  {
    url: "/src/components/Projetos/image/projeto1.png",
    titulo: "Loja - TechSoft",
    subTitulo: "Feito com Html, Css e Javascript",
    alt: "Projeto Loja",
    githubIcon: "/src/components/Projetos/image/github-svgrepo-com.svg",
    desktopIcon: "/src/components/Projetos/image/desktop-svgrepo-com.svg",
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
                <div className="max-h-[200px] relative text-center">
                    <div className="w-full h-full">
                        <img
                        src={projetos[index].url}
                        alt={projetos[index].alt}
                        className="w-full h-full rounded-2xl"
                        />
                    </div>

                    <div className="absolute w-full bottom-0 py-4">
                        <div className="alinhamento justify-center pb-8 gap-16 text-white">
                            <img src={projetos[index].githubIcon} alt="" />
                            <img src={projetos[index].desktopIcon} alt="" />
                        </div>
                        <h2 className="font-roboto text-xl font-bold text-[#20b2aa]">{projetos[index].titulo}</h2>
                        <span className="font-playfair font-bold text-xs text-orange-500">{projetos[index].subTitulo}</span>
                    </div>
                </div>

                <div className="max-h-[200px] relative">
                    <img
                    src={projetos[index].url}
                    alt={projetos[index].alt}
                    className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className="max-h-[200px] relative">
                    <img
                    src={projetos[index].url}
                    alt={projetos[index].alt}
                    className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className="max-h-[200px] relative">
                    <img
                    src={projetos[index].url}
                    alt={projetos[index].alt}
                    className="w-full h-full rounded-2xl"
                    />
                </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
