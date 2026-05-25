
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileChartLine, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects, getAssetUrl } from "@/services/api";
import { FALLBACK_PROJECTS } from "@/services/fallbackData";
import { CardSkeleton } from "./ui/skeleton";

const ProjectsSection = () => {
  const { data: apiProjects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });

  const dietProject = FALLBACK_PROJECTS.find(p => p.id === 'diet-prediction');
  
  // Combine API projects with the diet project if it's not already in the API response
  const combinedProjects = [...apiProjects];
  if (dietProject && !apiProjects.find((p: any) => p.slug === 'diet-prediction' || p.id === 'diet-prediction')) {
    combinedProjects.unshift(dietProject);
  }

  const projects = combinedProjects.length > 0 ? combinedProjects : FALLBACK_PROJECTS;

  return (
    <section id="projects" className="py-24 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="eyebrow mb-4 block">Section 02 — Portfolio</span>
            <h2 className="section-heading">Selected <span className="text-gradient">Work</span></h2>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">Index 01 — 05</span>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project: any) => (
            <Card key={project._id || project.id} className="overflow-hidden card-hover">
              <div className="h-56 overflow-hidden bg-gray-100">
                <img 
                  src={getAssetUrl(project.image || project.images?.[0])} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {(project.tags || project.technologies || []).map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                {(project.githubUrl || project.githubLink) && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl || project.githubLink, "_blank")}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                )}
                {(project.demoUrl || project.demoLink) && (
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex items-center gap-2 bg-primary"
                    onClick={() => window.open(project.demoUrl || project.demoLink, "_blank")}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                )}
                {project.internalLink && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex items-center gap-2 bg-primary"
                    asChild
                  >
                    <Link to={project.internalLink}>
                      <FileChartLine size={16} />
                      View Project
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/5"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
