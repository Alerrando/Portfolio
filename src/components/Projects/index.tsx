import { useEffect, useRef } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export function Projetos() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add("animate-fade-in");
              headingRef.current.classList.remove("opacity-0");
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

  const projects = [
    {
      title: "Plataforma E-Commerce",
      description: "Uma plataforma que principal é proporcionar uma experiência de compra online fluida e intuitiva.",
      image: "Projetos/projeto1.png",
      technologies: ["React", "Typescript", "TailwindCSS", "Stripe"],
      githubUrl: "https://github.com/Alerrando/Loja-ReactJs",
      liveUrl: "https://loja-react-js.vercel.app",
    },
    {
      title: "Clone do Notion",
      description: "Este projeto visa recriar a interface e funcionalidades essenciais do Notion, permitindo que os usuários criem, editem e organizem notas e tarefas.",
      image: "Projetos/projeto2.png",
      technologies: ["React", "Typescript", "Tailwind CSS", "Zustand", "Tiptap"],
      githubUrl: "https://github.com/Alerrando/Notion-Clone",
      liveUrl: "https://notion-clone-alerrando.vercel.app",
    },
    {
      title: "Lanchonete Pequim",
      description: "Esta landing page é uma aplicação web desenvolvida para a lanchonete Pequim, situada em Presidente Prudente",
      image: "Projetos/projeto3.png",
      technologies: ["React", "Typescript", "TailwindCSS"],
      githubUrl: "https://github.com/Pixel-Pair-Devs/Lanchonete-Pequim",
      liveUrl: "https://pequim-lanchonete.vercel.app",
    },
    {
      title: "NoNet Blog",
      description: "Um espaço para anotações, pensamentos e recursos disponíveis localmente.",
      image: "Projetos/projeto4.png",
      technologies: ["React", "Typescript", "TailwindCSS", "Tiptap", "Zustand", "IndexedDB"],
      githubUrl: "https://github.com/Alerrando/nonet-blog",
      liveUrl: "https://nonet-blog.vercel.app/",
    },
    {
      title: "SecBank",
      description: "Um projeto freelancer para a empresa SecBank.",
      image: "Projetos/projeto5.png",
      technologies: ["ReactJS", "Typescript", "TailwindCSS"],
      githubUrl: "/",
      liveUrl: "https://www.secbank.com.br/",
    },
    {
      title: "Gerenciamento de investimentos",
      description: "Em construção...",
      image: "Projetos/projeto6.png",
      technologies: ["NextJS", "Typescript", "TailwindCSS", "Spring Boot", "MySQL"],
      githubUrl: "https://github.com/Alerrando/investment-management",
      liveUrl: "https://investment-management-alerrandos-projects.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl font-bold mb-16 text-center opacity-0"
        >
          <span className="text-gradient">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
