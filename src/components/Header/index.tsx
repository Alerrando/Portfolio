import { Menu } from "lucide-react";
import {
  X
} from "phosphor-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contatos", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="animate-fade-in">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tighter text-gradient"
            >
              Alerrando
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-medium hover:text-primary transition-colors duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden animate-fade-in">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-foreground focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass absolute top-full left-0 right-0 pb-4 shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium hover:text-primary px-4 py-2 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
