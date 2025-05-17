
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileChartLine } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  internalLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Plant Disease Classification using DenseNet",
    description: "A deep learning model trained using DenseNet201 to classify plant diseases from leaf images. Achieved 94% accuracy across 10 classes.",
    technologies: ["Deep Learning", "Keras", "Image Classification", "DenseNet"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/",
    internalLink: "/projects/plant-disease"
  },
  {
    id: 2,
    title: "Smart Electronic Voting Machines (SEVM)",
    description: "Advanced electronic voting system using Raspberry Pi that enhances security, transparency, and usability by integrating digital technology and the VVPAT process.",
    technologies: ["Raspberry Pi", "Python", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/"
  },
  {
    id: 3,
    title: "Smart Washroom for Senior Citizens",
    description: "Revolutionary Smart Washroom incorporating advanced technologies to enhance convenience, safety, and autonomy for senior citizens and hospital patients with a hands-free experience.",
    technologies: ["Arduino", "IoT", "Sensors"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/"
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    description: "Data analytics project focused on customer segmentation using machine learning models, data cleaning, and visualization techniques to extract actionable business insights.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://www.kaggle.com/",
    githubLink: "https://github.com/"
  },
  {
    id: 5,
    title: "🧿 Diabetic Retinopathy Detection Using Deep Learning",
    description: "A CNN model that classifies retinal fundus images into Diabetic Retinopathy, Cataract, Glaucoma, or Normal with 88% accuracy and 99% precision for Diabetic Retinopathy, helping with early diagnosis in ophthalmology.",
    technologies: ["TensorFlow", "Keras", "CNN", "Python", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    demoLink: "https://colab.research.google.com/",
    githubLink: "https://github.com/",
    internalLink: "/projects/retinopathy"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">My Projects</h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on, showcasing my skills in AI, machine learning, data analytics, and IoT applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
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
                {project.githubLink && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                )}
                {project.demoLink && (
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex items-center gap-2 bg-primary"
                    onClick={() => window.open(project.demoLink, "_blank")}
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
