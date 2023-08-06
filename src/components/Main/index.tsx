export function Main() {
  return (
    <main className="w-full h-screen">
      <img src="main-img.jpg" alt="" className="h-full w-full absolute object-cover -z-10" />
      
      <div className="w-full h-full flex flex-col-reverse items-center justify-between md:grid md:grid-cols-2 px-5 md:px-20 z-50">
        <div className="w-full h-full flex flex-col items-start justify-center gap-4">
          <div className="w-auto bg-white rounded-lg p-2 md:py-3 md:px-4">
            <span className="text-[#CD5FF8] text-base md:text-xl font-roboto">Desenvolvedor Front End</span>
          </div>

          <h1 className="text-[28px] md:text-4xl font-bold font-roboto uppercase">Alerrando Breno</h1>

          <p className="text-[#AFAFAF] text-base md:text-lg leading-snug">
            Estou sempre procurando melhorar meu trabalho o máximo possível e adoro pedir dicas a outros 
            desenvolvedores sobre como fazer isso. Acredito que a troca de conhecimento entre as pessoas é 
            fundamental para o desenvolvimento pessoal e interpessoal de cada um.
          </p>

          <div className="w-1/2 h-auto flex items-center justify-between">
            <img src="react.svg" alt="Icone da Linguagem React" className="w-10 h-9 md:w-16 md:h-14" />
            
            <img src="typescript.svg" alt="Icone da Linguagem Typescript" className="w-9 h-9 md:w-16 md:h-14" />

            <img src="spring-boot.svg" alt="Icone da Linguagem Spring Boot" className="w-9 h-9 md:w-16 md:h-14" />
          </div>
        </div>

        <aside className="w-full h-full flex flex-col items-end justify-center">
          <img src="aside-main.png" alt="Imagem Aside Main" className="aside-main" />
        </aside>
      </div>
    </main>
  );
}
