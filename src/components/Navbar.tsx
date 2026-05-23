import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  const navItems = ["home", "about", "projects", "achievements", "experience", "skills", "contact"];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-background/85 backdrop-blur-md border-b border-foreground/10 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-baseline">
        <button
          onClick={() => scrollToSection("home")}
          className="font-serif text-2xl md:text-3xl italic tracking-tight text-foreground hover:text-secondary transition-colors"
        >
          Rohit.
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn("nav-link capitalize", activeSection === section && "active text-secondary")}
            >
              {section}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-2 px-5 py-2 border border-primary text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Inquire
          </button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="8" y2="8"/><line x1="4" x2="20" y1="16" y2="16"/></svg>
          )}
        </button>
      </div>

      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/10 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-screen py-6" : "max-h-0"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-4">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "py-2 text-left text-[11px] uppercase tracking-[0.25em] font-semibold",
                activeSection === section ? "text-secondary" : "text-foreground/80"
              )}
            >
              {section}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-2 py-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            Inquire
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
