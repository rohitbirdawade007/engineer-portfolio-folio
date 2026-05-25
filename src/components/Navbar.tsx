import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getProfile, getAssetUrl } from "@/services/api";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: profile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });
  const logoUrl = profile?.logo ? getAssetUrl(profile.logo) : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 120;
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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass-strong border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group"
        >
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="h-9 w-9 rounded-full object-cover ring-2 ring-purple-500/30 group-hover:ring-purple-500/60 transition-all" />
          ) : (
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg, hsl(262 83% 68%), hsl(168 84% 50%))" }}>
              R
            </div>
          )}
          <span className="font-display text-xl font-bold text-white group-hover:text-gradient transition-all">
            Rohit<span className="text-gradient">.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                activeSection === item.id
                  ? "text-white bg-white/5"
                  : "hover:text-white hover:bg-white/5"
              )}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-4 btn-primary px-5 py-2.5 text-xs rounded-full"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={cn("flex flex-col gap-1.5 transition-all", mobileMenuOpen && "gap-0")}>
            <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", mobileMenuOpen && "rotate-45 translate-y-0.5")} />
            <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", mobileMenuOpen && "opacity-0")} />
            <span className={cn("block w-6 h-0.5 bg-current transition-all duration-300", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full glass-strong border-b border-white/5 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "py-3 px-4 rounded-xl text-left text-sm font-medium transition-all",
                activeSection === item.id
                  ? "text-white bg-white/5 text-gradient"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-2 btn-primary py-3 text-sm rounded-xl"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
