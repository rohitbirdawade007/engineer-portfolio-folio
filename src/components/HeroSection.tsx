import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile, getAssetUrl } from "@/services/api";
import { FALLBACK_PROFILE } from "@/services/fallbackData";

const HeroSection = () => {
  const { data: apiProfile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  });

  const profile = apiProfile || FALLBACK_PROFILE;

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const photoUrl = profile?.photo || "/lovable-uploads/859560b4-157c-4dc1-a07c-9c8ccbdb9c8d.png";
  const name = profile?.name || "Rohit Sandip Birdawade";
  
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Profile Image */}
          <div className="order-1 md:order-2 md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl bg-slate-100 flex items-center justify-center">
              {isLoading ? (
                <Loader2 className="animate-spin text-primary" />
              ) : (
                <img 
                  src={getAssetUrl(photoUrl)} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="order-2 md:order-1 md:w-2/3">
            <div className="animate-fadeUp">
              <p className="text-primary font-medium mb-2">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{name}.</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
                I build with <span className="text-gradient">{profile?.skillsSnippet || "AI & ML"}</span>
              </h2>
            </div>
            
            <div className="animate-fadeUp animate-delay-200">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {profile?.heroDescription || "I'm an aspiring AI & ML engineer with a background in Computer Science Engineering from Baramati, Pune. Passionate about creating intelligent solutions that solve real-world problems."}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fadeUp animate-delay-300">
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={scrollToProjects}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
