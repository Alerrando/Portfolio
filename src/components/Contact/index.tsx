import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const schemaData = z.object({
  name: z.string().nonempty("Nome obrigatório"),
  email: z.string().email("Email inválido").nonempty("Email obrigatório"),
  description: z.string().nonempty("Descrição obrigatória"),
});

type SchemaDataType = z.infer<typeof schemaData>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SchemaDataType>({
    resolver: zodResolver(schemaData),
  });
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add("animate-fade-in-right");
              contentRef.current.classList.remove("opacity-0");
            }
            if (formRef.current) {
              formRef.current.classList.add("animate-fade-in-left");
              formRef.current.classList.remove("opacity-0");
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

  async function submit(data: SchemaDataType) {
    try {
      await axios.post("/api/contact", data);

      toast.success("Mensagem enviada com sucesso!");
      reset(); // limpa os campos após sucesso
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar mensagem.");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative bg-secondary/20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">
          <span className="text-gradient">Entre em contato</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={contentRef} className="opacity-0">
            <h3 className="text-2xl font-medium mb-6">Vamos conversar!</h3>

            <p className="text-muted-foreground mb-8">
              Estou interessado em oportunidades e colaborações freelancers.
              Se você tem uma pergunta ou apenas quer dizer oi, vou tentar o meu
              Melhor voltar para você!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span>alerrando2@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <span>+55 18 99823-3887</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" size={20} />
                <span>Rancharia, São Paulo - BR</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Alerrando"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-primary/20 transition-all duration-300"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://x.com/Allerrando"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-primary/20 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit(submit)}
            className="glass p-6 rounded-lg shadow-lg opacity-0"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome
                </label>
                <Input
                  {...register("name")}
                  placeholder="Seu nome"
                  required
                  className="bg-secondary/30 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Seu e -mail"
                  required
                  className="bg-secondary/30 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <Textarea
                  {...register("description")}
                  placeholder="Sua mensagem"
                  required
                  className="bg-secondary/30 border-white/10 focus:border-primary h-32"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary/90 hover:bg-primary text-white transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
