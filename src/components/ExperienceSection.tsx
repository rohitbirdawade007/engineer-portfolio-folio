
import { CalendarIcon, BriefcaseIcon, BookOpenIcon, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getExperiences, getResearchList } from "@/services/api";
import { FALLBACK_EXPERIENCE, FALLBACK_RESEARCH } from "@/services/fallbackData";

const ExperienceSection = () => {
  const { data: apiExperiences = [], isLoading: loadingExp } = useQuery({
    queryKey: ['experiences'],
    queryFn: getExperiences
  });

  const { data: apiResearch = [], isLoading: loadingRes } = useQuery({
    queryKey: ['research'],
    queryFn: getResearchList
  });

  const experiences = apiExperiences.length > 0 ? apiExperiences : FALLBACK_EXPERIENCE;
  const research = apiResearch.length > 0 ? apiResearch : FALLBACK_RESEARCH;

  return (
    <div>
      {/* Internships & Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mx-auto text-center mb-12">Internships & Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {loadingExp ? (
              <div className="flex justify-center"><Loader2 className="animate-spin text-primary" /></div>
            ) : (
              <div className="space-y-12">
                {experiences.map((experience: any, index: number) => (
                  <div 
                    key={experience._id || index} 
                    className={`relative flex flex-col md:flex-row gap-6 ${
                      index !== experiences.length - 1 ? "pb-12 border-b border-gray-200" : ""
                    }`}
                  >
                    <div className="hidden md:block absolute top-0 bottom-0 left-[7.5rem] w-0.5 bg-gray-200 -z-10"></div>
                    
                    <div className="md:w-32 flex items-start">
                      <div className="flex items-center gap-2 bg-white md:pr-4">
                        <CalendarIcon size={18} className="text-primary shrink-0" />
                        <span className="text-gray-600 font-medium">{experience.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BriefcaseIcon size={18} className="text-primary shrink-0" />
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                      </div>
                      <p className="text-gray-700 font-medium mb-3">{experience.company}</p>
                      <p className="text-gray-600 mb-4">{experience.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {(experience.skills || []).map((skill: string, skillIndex: number) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Publications & Research Work Section */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mx-auto text-center mb-12">Publications & Research Work</h2>
          
          <div className="max-w-4xl mx-auto">
            {loadingRes ? (
              <div className="flex justify-center"><Loader2 className="animate-spin text-primary" /></div>
            ) : (
              <div className="space-y-8">
                {research.map((item: any) => (
                  <div key={item._id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <BookOpenIcon size={20} className="text-primary shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 mb-2">{item.authors}</p>
                        <p className="text-gray-600 mb-3">
                          <span className="font-medium">{item.journal}</span>, {item.year}. {item.volume}
                        </p>
                        <a 
                          href={item.url || item.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                          View Publication →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
