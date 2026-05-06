
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileChartLine, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects, getAssetUrl } from "@/services/api";
import { FALLBACK_PROJECTS } from "@/services/fallbackData";

const ProjectsSection = () => {
  const { data: apiProjects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });

  const projects = apiProjects.length > 0 ? apiProjects : FALLBACK_PROJECTS;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">My Projects</h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on, showcasing my skills in AI, machine learning, data analytics, and IoT applications.
        </p>

        {isLoading ? (
          <div className="flex justify-center my-20">
            <Loader2 className="animate-spin text-primary w-10 h-10" />
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
