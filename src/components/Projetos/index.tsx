import { Titulo } from "../Titulo";

const projetos = [
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Feito com Html e Css",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/Loja",
    desktopSite: "https://alerrando.github.io/Loja/Loja.html",
  },
  {
    titulo: "Rélogio Digital",
    subTitulo: "Feito com Html, Css e Javascript",
    alt: "Projeto Rélogio Digital",
    githubSite: "https://github.com/Alerrando/Relogio-Digital",
    desktopSite: "https://alerrando.github.io/Relogio-Digital/relogioDigital.html",
  },
  {
    titulo: "Trocador de Cor",
    subTitulo: "Feito com Html, Css e Javascript",
    alt: "Projeto Trocador de Cor",
    githubSite: "https://github.com/Alerrando/Trocador-de-Cores",
    desktopSite: "https://alerrando.github.io/Trocador-de-Cores/",
  },
  {
    titulo: "Clipboard landing page master",
    subTitulo: "Projeto do site Front End Mentor feito com Html e Css",
    alt: "Projeto Loja",
    githubSite: "https://github.com/Alerrando/clipboard-landing-page-master",
    desktopSite: "https://alerrando.github.io/clipboard-landing-page-master/index.html",
  },
  {
    titulo: "Previsão do Tempo",
    subTitulo: "Projeto consumindo API com Html, Css e Javascript",
    alt: "Projeto de previsão do tempo",
    githubSite: "https://github.com/Alerrando/Previsao-do-Tempo",
    desktopSite: "https://alerrando.github.io/Previsao-do-Tempo/",
  },
  {
    titulo: "Google",
    subTitulo: "Projeto de cópia da Google",
    alt: "Projeto Google",
    githubSite: "https://github.com/Alerrando/Google",
    desktopSite: "https://alerrando.github.io/Google/index.html",
  },
  {
    titulo: "Crud Hotel",
    subTitulo: "Projeto de um Crud usando ReactJS",
    alt: "Projeto Crud Hotel",
    githubSite: "https://github.com/Alerrando/Crud-Hotel",
    desktopSite: "https://crud-hotel.vercel.app/",
  },
  {
    titulo: "Loja - TechSoft",
    subTitulo: "Projeto da Loja TechSoft refeita com ReactJS",
    alt: "Projeto Loja com ReactJS",
    githubSite: "https://github.com/Alerrando/Loja-ReactJs",
    desktopSite: "https://loja-react-js.vercel.app/",
  },
  {
    titulo: "Instagram",
    subTitulo: "Projeto do Instagram feito com ReactJS",
    alt: "Projetodo Instagram feit com ReactJS",
    githubSite: "https://github.com/Alerrando/Instagram-Clone",
    desktopSite: "https://instagram-clone-alerrando.vercel.app/",
  },
];

export function Projetos() {
  return (
    <section>
      <Titulo titulo={"Projetos"} />

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-projetos gap-6">
          {projetos.map((projeto, index) => (
            <>
              <div className="max-h-[200px] relative text-center group border border-zinc-400 rounded-xl">
                <div className="w-full h-full">
                  <img src={`projeto${index+1}.png`} alt={projetos[index].alt} className="rounded-xl w-full h-full" />
                </div>

                <div className="absolute w-full border-none outline-none ease-in-out bottom-0 py-4 md:hidden md:group-hover:block transition-all">
                  <div className="alinhamento justify-center pb-8 gap-16 text-white">
                    <a href={projetos[index].githubSite} target="_blank">
                      <img src={'github-svgrepo-com.svg'} alt="icon do github" />
                    </a>
                    <a href={projetos[index].desktopSite} target="_blank">
                      <img src={'desktop-svgrepo-com.svg'} alt="icon de desktop" />
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
