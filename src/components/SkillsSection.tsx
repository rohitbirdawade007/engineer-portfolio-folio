
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getSkills, getCertifications } from "@/services/api";
import { FALLBACK_SKILLS, FALLBACK_CERTIFICATIONS } from "@/services/fallbackData";
import { Loader2 } from "lucide-react";

interface Skill {
  _id?: string;
  name: string;
  proficiency?: number;
  level?: number;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { data: apiSkills = [], isLoading: loadingSkills } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills
  });

  const { data: apiCerts = [], isLoading: loadingCerts } = useQuery({
    queryKey: ['certifications'],
    queryFn: getCertifications
  });

  const skills = apiSkills.length > 0 ? apiSkills : FALLBACK_SKILLS;
  const certs = apiCerts.length > 0 ? apiCerts : FALLBACK_CERTIFICATIONS;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">Skills & Expertise</h2>
        
        <div className="max-w-4xl mx-auto">
          {loadingSkills ? (
            <div className="flex justify-center p-12"><Loader2 className="animate-spin text-primary" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {skills.map((skill: any, index: number) => (
                <div key={skill._id || index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-sm text-gray-500">{skill.proficiency || skill.level || 0}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-bar-fill"
                      style={{ 
                        width: isVisible ? `${skill.proficiency || skill.level || 0}%` : '0%',
                        transitionDelay: `${index * 50}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-16">
          <h3 className="font-serif text-4xl italic mb-10">Certifications</h3>
          {loadingCerts ? (
            <div className="flex justify-center"><Loader2 className="animate-spin text-primary" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {certs.map((cert: any, index: number) => (
                <Card key={cert._id || index} className="card-hover">
                  <CardContent className="p-4 flex items-center">
                    <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <span>{cert.title || cert.name || cert}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-16">
          <h3 className="font-serif text-4xl italic mb-10">Technical Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {(skills || []).map((skill: any, index: number) => (
              <Badge key={skill._id || index} className="skill-pill text-base py-1.5 px-3 bg-white text-primary border border-primary/20 hover:bg-primary/5">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
