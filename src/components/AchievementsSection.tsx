import { Award, Check, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  type: "certification" | "award" | "workshop";
  description?: string;
  images?: string[];
  hasDetailPage?: boolean;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Excellence of the Year Award",
    organization: "Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering",
    date: "A.Y. 2024-25",
    type: "award",
    description: "✨ Grateful & Humbled! ✨ I'm honored to receive the \"Excellence of the Year\" Award 🏆 from Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering for my outstanding contributions to technical and non-technical activities at University, State, and National levels during A.Y. 2024–25. This milestone is a reflection of consistent efforts, innovation, and active involvement across diverse platforms. 🚀 📖 Click to see detailed insights about this achievement.",
    images: [
      "/lovable-uploads/ce935f5a-f5f3-4a0b-bae5-f403b99e1b88.png",
      "/lovable-uploads/9e121016-b764-4662-9f3d-7a8d954cd754.png"
    ],
    hasDetailPage: true
  },
  {
    id: 2,
    title: "Student of the Computer Department (A.Y. 2024–25)",
    organization: "Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering",
    date: "2024-25",
    type: "award",
    description: "This award was given for overall excellence in curricular and extracurricular activities during the academic year 2024–25.",
    images: [
      "/lovable-uploads/894da7a4-76d8-4fbd-b7a8-350ad577b1b6.png",
      "/lovable-uploads/b652b495-14ff-43e6-8db5-1a6865a68549.png",
      "/lovable-uploads/1f4a7524-974e-43ee-a52c-0068c3221a0b.png"
    ],
    hasDetailPage: true
  }
];

const AchievementsSection = () => {
  const navigate = useNavigate();

  const handleAwardClick = (achievement: Achievement) => {
    if (achievement.hasDetailPage) {
      if (achievement.id === 1) {
        navigate('/awards/excellence-of-the-year');
      } else if (achievement.id === 2) {
        navigate('/awards/student-of-computer-department');
      }
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "award":
        return <Trophy size={24} className="text-primary" />;
      case "certification":
        return <Award size={24} className="text-primary" />;
      default:
        return <Check size={24} className="text-primary" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">Achievements & Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className={`overflow-hidden card-hover border-t-4 border-t-primary ${
                achievement.hasDetailPage ? 'cursor-pointer' : ''
              }`}
              onClick={() => handleAwardClick(achievement)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {getIcon(achievement.type)}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                    {achievement.organization && (
                      <p className="text-gray-600 text-sm mb-2">{achievement.organization}</p>
                    )}
                    <p className="text-gray-500 text-sm mb-2">{achievement.date}</p>
                    {achievement.description && (
                      <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                    )}
                    {achievement.images && achievement.images.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {achievement.images.slice(0, 3).map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${achievement.title} ${index + 1}`}
                            className="w-16 h-16 object-cover rounded border"
                          />
                        ))}
                      </div>
                    )}
                    {achievement.hasDetailPage && (
                      <p className="text-primary text-sm mt-2 font-medium">Click to view details →</p>
                    )}
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
