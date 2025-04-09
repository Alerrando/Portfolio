import { useEffect, useRef } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.classList.add("animate-fade-in-right");
              imageRef.current.classList.remove("opacity-0");
            }
            if (contentRef.current) {
              contentRef.current.classList.add("animate-fade-in-left");
              contentRef.current.classList.remove("opacity-0");
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Sobre mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className="opacity-0 order-2 md:order-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_25px_rgba(79,70,229,0.3)] animate-pulse-glow">
                <img
                  src="/perfil-ghibli.png"
                  alt="Alerrando"
                  className="w-full h-full object-cover hover:grayscale transition-all duration-200"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-70"></div>
            </div>
          </div>

          <div
            ref={contentRef}
            className="opacity-0 order-1 md:order-2"
          >
            <h3 className="text-2xl font-medium mb-4">
              Olá! Eu sou <span className="text-primary">Alerrando</span>
            </h3>
            
            <p className="text-muted-foreground mb-4">
                Sou um desenvolvedor Fullstack com experiência em várias tecnologias como ReactJS, NextJS, Typescript, Java, Spring Boot, Laravel e MySQL. Atualmente, estou no 6º semestre do curso de Análise e Desenvolvimento de Sistemas pela Universidade UNOESTE, em Presidente Prudente - SP.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Tenho experiência prática no desenvolvimento de aplicações como E-commerce e sistemas de gerenciamento educacional, onde utilizei ReactJS, NextJS e outras ferramentas para criar soluções eficientes e escaláveis. Além disso, tenho trabalhado em projetos desafiadores, onde aprendi a integrar front-end com back-end de forma eficiente.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Quando não estou programando, gosto de aprender novas tecnologias, explorar novas soluções e passar meu tempo livre lendo blogs de tecnologia ou conhecendo novos cafés. Estou sempre em busca de novas oportunidades de crescer como desenvolvedor e enfrentar desafios interessantes.
            </p>
            
            <a
              href="#contact"
              className="inline-block px-6 py-2 glass hover:bg-primary/20 rounded-md transition-all duration-300 text-white"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
