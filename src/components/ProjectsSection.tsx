import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects, getAssetUrl, getProfile } from "@/services/api";
import { FALLBACK_PROJECTS } from "@/services/fallbackData";

const ProjectsSection = () => {
  const { data: apiProjects = [], isLoading } = useQuery({ queryKey: ['projects'], queryFn: getProjects });
  const { data: profile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });

  // Merge backend projects with fallback GitHub projects
  // ensuring we don't duplicate any that might have been manually added to the backend
  const combinedProjects = [...apiProjects];
  FALLBACK_PROJECTS.forEach(fallback => {
    if (!combinedProjects.find(p => p.slug === fallback.id || p.id === fallback.id || p.githubUrl === fallback.githubUrl)) {
      combinedProjects.push(fallback);
    }
  });
  
  const projects = combinedProjects;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(168 84% 50% / 0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 scroll-reveal">
          <div>
            <span className="eyebrow mb-4 block">02 — Portfolio</span>
            <h2 className="section-heading text-white">
              Selected <span className="text-gradient">Work</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs">
            A curated showcase of my most impactful projects across AI, IoT, and full-stack engineering.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: any, idx: number) => {
              const tags = project.tags || project.technologies || project.techStack || [];
              const github = project.githubUrl || project.githubLink;
              const demo = project.demoUrl || project.demoLink;
              const slug = project.slug || project.internalLink;

              return (
                <div key={project._id || project.id || idx}
                  className="glow-card overflow-hidden group scroll-reveal"
                  style={{ animationDelay: `${idx * 0.1}s` }}>
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-white/5">
                    <img
                      src={getAssetUrl(project.image || project.images?.[0])}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 opacity-60"
                      style={{ background: "linear-gradient(to top, hsl(220 20% 6%), transparent)" }} />

                    {/* Hover links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {github && (
                        <a href={github} target="_blank" rel="noreferrer"
                          className="glass p-2 rounded-full border border-white/10 text-white hover:text-purple-400 transition-colors">
                          <Github size={16} />
                        </a>
                      )}
                      {demo && (
                        <a href={demo} target="_blank" rel="noreferrer"
                          className="glass p-2 rounded-full border border-white/10 text-white hover:text-teal-400 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    {/* Category badge */}
                    {project.category && (
                      <div className="absolute top-4 left-4">
                        <span className="tag text-xs">{project.category}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-white text-lg leading-snug group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      {slug && (
                        <Link to={`/project/${slug}`}
                          className="shrink-0 text-white/20 group-hover:text-purple-400 transition-colors">
                          <ArrowUpRight size={20} />
                        </Link>
                      )}
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {tags.slice(0, 4).map((tag: string) => (
                        <span key={tag} className="tag text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 scroll-reveal">
          <a
            href={profile?.socialLinks?.github || "https://github.com/rohitbirdawade007"}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
