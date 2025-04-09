import { Key, useEffect, useRef } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGit } from 'react-icons/bs';
import { DiCss3, DiJavascript1, DiSass } from "react-icons/di";
import { FaJava, FaReact, FaSass } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiMui, SiSpring, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Title } from "../Title";

type TechnologiasType = {
  nome: string;
  icon: IconType;
};

export function Knowledge() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add("animate-fade-in");
              headingRef.current.classList.remove("opacity-0");
            }
            if (skillsRef.current) {
              skillsRef.current.classList.add("animate-fade-in");
              skillsRef.current.classList.remove("opacity-0");

              // Animate each skill item with delay
              const items = skillsRef.current.querySelectorAll(".skill-item");
              items.forEach((item, index) => {
                setTimeout(() => {
                  (item as HTMLElement).classList.add("animate-fade-in");
                  (item as HTMLElement).classList.remove("opacity-0");
                }, index * 100);
              });
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

  const skills = [
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Sass", icon: "devicon-sass-original" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original" },
    { name: "Jest", icon: "devicon-jest-plain" },
    { name: "Playwright", icon: "devicon-playwright-plain" },
    { name: "Redux", icon: "devicon-redux-original" },
    { name: "Electron", icon: "devicon-electron-original" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Spring Boot", icon: "devicon-spring-original" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "Mongo", icon: "devicon-mongodb-plain" },
    { name: "Postgresql", icon: "devicon-postgresql-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative bg-secondary/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>

      <div className="container mx-auto relative z-10">
        <h2
          ref={headingRef}
          className="text-4xl font-bold mb-16 text-center opacity-0"
        >
          <span className="text-gradient">Tecnologias</span>
        </h2>

        <div
          ref={skillsRef}
          className="opacity-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item opacity-0 glass rounded-lg p-6 flex flex-col items-center hover:bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
            >
              <i className={`${skill.icon} text-5xl mb-4 text-primary`}></i>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
