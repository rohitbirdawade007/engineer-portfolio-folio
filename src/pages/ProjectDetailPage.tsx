import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProject, getAssetUrl } from "@/services/api";
import { FALLBACK_PROJECTS } from "@/services/fallbackData";
import { ArrowLeft, Code, Loader2, Github, ExternalLink, Box } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PremiumSlider from "@/components/PremiumSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: apiProject, isLoading, error } = useQuery({
    queryKey: ['project', id],
    queryFn: () => getProject(id as string),
    retry: 1, // Don't retry too many times if 404
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="animate-spin text-primary w-12 h-12" />
      </div>
    );
  }

  // Fallback if not found in API
  let project = apiProject;
  if (!project || error) {
    project = FALLBACK_PROJECTS.find(
      (p: any) => p.id === id || p.slug === id
    );
  }

  if (!project) {
    return <NotFound />;
  }

  const imageUrl = project.image ? getAssetUrl(project.image) : null;
  const techStack = Array.isArray(project.techStack) ? project.techStack : (project.tags || project.technologies || []);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center">
          <Link to="/#projects" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <Box size={200} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none">
                {tech}
              </Badge>
            ))}
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl">
            {project.problemStatement || project.description}
          </p>
        </div>
      </div>

      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 pt-32 pb-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <Box size={200} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none px-4 py-1">
                {tech}
              </Badge>
            ))}
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl font-medium leading-relaxed">
            {project.problemStatement || project.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {imageUrl && (
              <div className="-mx-4 md:-mx-12">
                <PremiumSlider 
                  images={[imageUrl]} 
                  title={project.title}
                  location={project.techStack?.join(', ')}
                />
              </div>
            )}
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-black mb-8 text-slate-900 flex items-center gap-4">
                <span className="w-2 h-10 bg-primary rounded-full"></span>
                Project Deep Dive
              </h2>
              <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed max-w-none font-medium">
                {project.description ? (
                  project.description.split('\n').map((paragraph: string, i: number) => (
                    <p key={i} className="mb-6">{paragraph}</p>
                  ))
                ) : (
                  <p>No detailed description provided.</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="text-lg font-bold mb-4 text-slate-800">Links</h3>
              <div className="space-y-4">
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-slate-900 text-white px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <Github size={20} />
                    <span className="font-medium">View Source Code</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 w-full bg-slate-200 text-slate-500 px-4 py-3 rounded-xl cursor-not-allowed">
                    <Github size={20} />
                    <span className="font-medium">Source Private</span>
                  </div>
                )}
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-primary text-white px-4 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="text-lg font-bold mb-4 text-slate-800">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-700">
                    <Code size={14} className="text-primary" />
                    <span>{tech}</span>
                  </div>
                ))}
                {techStack.length === 0 && (
                  <span className="text-slate-500 text-sm">No specific technologies listed.</span>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link to="/#projects" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-all border border-slate-200">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
