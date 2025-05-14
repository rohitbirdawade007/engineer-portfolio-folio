
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background when scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
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
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Account for navbar height
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  };

  const navItems = ["home", "about", "projects", "achievements", "experience", "skills", "contact"];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold text-gradient">Rohit.</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "nav-link capitalize",
                activeSection === section ? "text-primary font-medium" : ""
              )}
            >
              {section}
            </button>
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "py-2 text-left capitalize",
                activeSection === section ? "text-primary font-medium" : ""
              )}
            >
              {section}
            </button>
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-white w-full"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
