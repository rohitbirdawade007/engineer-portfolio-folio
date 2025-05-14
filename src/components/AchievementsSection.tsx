
import { Award, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  type: "certification" | "award" | "workshop";
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "AI model-building workshop",
    organization: "NEXT WAVE",
    date: "January 2024",
    type: "workshop"
  },
  {
    id: 2,
    title: "HTML & CSS For Web Development",
    organization: "Skill Academy",
    date: "2023",
    type: "certification"
  },
  {
    id: 3,
    title: "Free Live Course on Mastering Battery Management Systems",
    organization: "",
    date: "2023",
    type: "certification"
  },
  {
    id: 4,
    title: "Three Days of National Online Workshops on Research Paper Writing & Publishing",
    organization: "",
    date: "2022",
    type: "workshop"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">Achievements & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className="overflow-hidden card-hover border-t-4 border-t-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {achievement.type === "certification" ? (
                      <Award size={24} className="text-primary" />
                    ) : (
                      <Check size={24} className="text-primary" />
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                    {achievement.organization && (
                      <p className="text-gray-600 text-sm mb-2">{achievement.organization}</p>
                    )}
                    <p className="text-gray-500 text-sm">{achievement.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
