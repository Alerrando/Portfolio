import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <div
      className="opacity-0 animate-fade-in glass rounded-xl overflow-hidden project-card-shadow group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-48 md:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <span className="text-gradient">{title}</span>
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-secondary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-white transition-colors duration-300"
          >
            <Github size={18} />
            <span>Código</span>
          </a>
          
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={18} />
            <span>Hospedagem</span>
          </a>
        </div>
      </div>
    </div>
  );
};
