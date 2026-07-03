import { Github, Linkedin, Mail, Lock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/services/api";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: profile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });

  const github = profile?.socialLinks?.github || "https://github.com/rohitbirdawade007";
  const linkedin = profile?.socialLinks?.linkedin || "https://www.linkedin.com/in/rohit-birdawade-0b4865238/";
  const email = profile?.email || "Rohitbirdawade2875@gmail.com";

  const navLinks = ["home", "about", "projects", "skills", "experience", "contact"];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(262 83% 68% / 0.4), transparent)" }} />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "hsl(262 83% 68% / 0.06)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* CTA Block */}
        <div className="text-center mb-16">
          <p className="eyebrow justify-center mb-4">Let's Build Together</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Got a project in <span className="text-gradient">mind?</span>
          </h2>
          <a href={`mailto:${email}`} className="btn-primary inline-flex items-center gap-2">
            Start a Conversation
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="neon-line mb-12 opacity-30" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold text-white">Rohit Birdawade</p>
            <p className="text-xs text-white/30 font-mono-custom mt-2">AI &amp; ML Engineer — Pune, India</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a key={link} href={`#${link}`}
                className="text-xs text-white/40 hover:text-white/80 transition-colors capitalize font-medium">
                {link}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href={github} target="_blank" rel="noreferrer"
              className="glass w-9 h-9 rounded-full flex items-center justify-center border border-white/8 text-white/40 hover:text-white hover:border-purple-500/40 transition-all">
              <Github size={15} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer"
              className="glass w-9 h-9 rounded-full flex items-center justify-center border border-white/8 text-white/40 hover:text-white hover:border-purple-500/40 transition-all">
              <Linkedin size={15} />
            </a>
            <a href={`mailto:${email}`}
              className="glass w-9 h-9 rounded-full flex items-center justify-center border border-white/8 text-white/40 hover:text-white hover:border-purple-500/40 transition-all">
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/20">
            © {currentYear} Rohit Sandip Birdawade — All rights reserved
          </p>
          <Link to="/admin/login"
            className="text-xs text-white/20 hover:text-white/50 transition-colors flex items-center gap-1.5">
            <Lock size={10} /> Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
