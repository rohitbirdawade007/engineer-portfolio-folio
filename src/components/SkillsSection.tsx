
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
      { name: "C", level: 80 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Computer Vision", level: 75 },
      { name: "Deep Learning", level: 80 },
      { name: "Data Analysis", level: 90 },
    ]
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    skills: [
      { name: "Jupyter Notebook", level: 90 },
      { name: "Google Colab", level: 85 },
      { name: "Arduino", level: 70 },
      { name: "Raspberry Pi", level: 75 },
      { name: "Git", level: 80 },
    ]
  },
  {
    id: "other",
    name: "Other Skills",
    skills: [
      { name: "IoT", level: 70 },
      { name: "Data Visualization", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Research", level: 80 },
      { name: "Technical Writing", level: 75 },
    ]
  },
];

const certifications = [
  "AI model-building workshop by NEXT WAVE (20/1/2024)",
  "HTML & CSS For Web Development by Skill Academy",
  "Free Live Course on Mastering Battery Management Systems",
  "Three Days of National Online Workshops on Research Paper Writing & Publishing",
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">Skills & Expertise</h2>
        
        <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 w-full">
            {skillsData.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-center">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillsData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <span>{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              "Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", 
              "NumPy", "Jupyter", "Google Colab", "Matplotlib", "Seaborn", 
              "CNN", "LSTM", "Computer Vision", "NLP", "Raspberry Pi", 
              "Arduino", "IoT", "C++", "C", "Git", "HTML", "CSS"
            ].map((tech, index) => (
              <Badge key={index} className="skill-pill text-base py-1.5 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
