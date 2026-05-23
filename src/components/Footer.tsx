import { Github, Linkedin, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl italic tracking-tight mb-3">Rohit Sandip Birdawade.</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 font-semibold">
              Engineering intelligent systems — Pune, India
            </p>
          </div>

          <div className="flex space-x-3">
            <a href="https://github.com/rohitbirdawade007" target="_blank" rel="noreferrer"
              className="border border-primary-foreground/20 hover:border-accent hover:text-accent text-primary-foreground p-3 transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/rohit-birdawade-0b4865238/" target="_blank" rel="noreferrer"
              className="border border-primary-foreground/20 hover:border-accent hover:text-accent text-primary-foreground p-3 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:Rohitbirdawade2875@gmail.com"
              className="border border-primary-foreground/20 hover:border-accent hover:text-accent text-primary-foreground p-3 transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50 font-semibold">
            © {currentYear} Rohit Sandip Birdawade — All rights reserved
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-primary-foreground/60">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            <Link to="/admin/login" className="flex items-center gap-1 hover:text-accent transition-colors opacity-70">
              <Lock size={11} /> Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
