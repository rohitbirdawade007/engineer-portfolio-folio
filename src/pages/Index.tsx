
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  useEffect(() => {
    // Scroll to anchor if present in URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
          });
        }, 100);
      }
    }
    
    // Reveal animations on scroll
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(".scroll-reveal");
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AchievementsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
