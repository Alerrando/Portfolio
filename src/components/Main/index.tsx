import { ChevronDown } from "lucide-react";

export function Main() {
  return (
    <section 
    id="home" 
    className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-grid"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background"></div>
    
    <div className="container mx-auto relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <p className="text-primary font-mono mb-6 opacity-0 animate-fade-in">
            Olá, meu nome é
          </p>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-in delay-100">
            <span className="block text-gradient-blue">Alerrando</span>
            <span className="block mt-2 text-muted-foreground">Desenvolvedor Full Stack</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg opacity-0 animate-fade-in delay-200">
            Estou sempre procurando melhorar meu trabalho o máximo possível. Acredito que a troca de conhecimento entre as pessoas é 
            fundamental para o desenvolvimento pessoal e interpessoal de cada um.
          </p>
          
          <div className="opacity-0 animate-fade-in delay-300">
            <a
              href="#projects"
              className="px-7 py-3 bg-primary/90 hover:bg-primary text-white rounded-md 
                transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.4)] 
                hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] block"
            >
              Confira meus projetos
            </a>
          </div>
        </div>
        
        <div className="mt-12 md:mt-0 opacity-0 animate-fade-in delay-400">
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            <img 
              src="aside-main.png" 
              alt="Developer workspace with laptop" 
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in delay-500">
      <a 
        href="#about" 
        className="flex flex-col items-center text-muted-foreground hover:text-white transition-colors duration-300"
      >
        <span className="text-sm mb-2">Role para baixo</span>
        <ChevronDown className="animate-bounce" size={20} />
      </a>
    </div>
  </section>
  );
}
