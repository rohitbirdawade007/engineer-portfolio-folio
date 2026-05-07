
import { Award, Check, Trophy, Medal, BookOpen, Star, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAchievements } from "@/services/api";
import { FALLBACK_ACHIEVEMENTS } from "@/services/fallbackData";
import { CardSkeleton } from "./ui/Skeleton";

const AchievementsSection = () => {
  const navigate = useNavigate();

  const { data: apiAchievements = [], isLoading } = useQuery({
    queryKey: ['achievements'],
    queryFn: getAchievements
  });

  const achievements = apiAchievements.length > 0 ? apiAchievements : FALLBACK_ACHIEVEMENTS;

  const handleAchievementClick = (achievement: any) => {
    if (achievement.hasDetailPage || achievement.slug) {
      // If we have a slug or a specific ID-based route
      const route = achievement.slug ? `/achievements/${achievement.slug}` : null;
      if (route) navigate(route);
    }
  };

  const getIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case "award":
        return <Trophy size={24} className="text-primary" />;
      case "competition":
        return <Medal size={24} className="text-primary" />;
      case "paper":
        return <BookOpen size={24} className="text-primary" />;
      case "leadership":
        return <Star size={24} className="text-primary" />;
      case "certification":
        return <Award size={24} className="text-primary" />;
      default:
        return <Check size={24} className="text-primary" />;
    }
  };

  const achievementsByCategory = {
    achievements: (Array.isArray(achievements) ? achievements : []).filter((a: any) => a.category === "achievements" || !a.category),
    cocurricular: (Array.isArray(achievements) ? achievements : []).filter((a: any) => a.category === "cocurricular"),
    extracurricular: (Array.isArray(achievements) ? achievements : []).filter((a: any) => a.category === "extracurricular")
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">Achievements & Recognition</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {/* Achievements & Awards */}
            {achievementsByCategory.achievements.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">🏆 Achievements & Awards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {achievementsByCategory.achievements.map((achievement: any) => (
                    <Card 
                      key={achievement._id} 
                      className={`overflow-hidden card-hover border-t-4 border-t-primary ${
                        achievement.hasDetailPage ? 'cursor-pointer' : ''
                      }`}
                      onClick={() => handleAchievementClick(achievement)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-full">
                            {getIcon(achievement.type)}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                            {achievement.organization && (
                              <p className="text-gray-600 text-sm mb-2">{achievement.organization}</p>
                            )}
                            <p className="text-gray-500 text-sm mb-2">{achievement.date}</p>
                            {achievement.description && (
                              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{achievement.description}</p>
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
            )}

            {/* Co-Curricular Activities */}
            {achievementsByCategory.cocurricular.length > 0 && (
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">📚 Co-Curricular Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {achievementsByCategory.cocurricular.map((achievement: any) => (
                    <Card 
                      key={achievement._id} 
                      className="overflow-hidden card-hover border-t-4 border-t-blue-500"
                      onClick={() => handleAchievementClick(achievement)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500/10 p-3 rounded-full">
                            {getIcon(achievement.type)}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                            {achievement.organization && (
                              <p className="text-gray-600 text-sm mb-2">{achievement.organization}</p>
                            )}
                            <p className="text-gray-500 text-sm mb-2">{achievement.date}</p>
                            {achievement.description && (
                              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{achievement.description}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Extracurricular Activities */}
            {achievementsByCategory.extracurricular.length > 0 && (
              <div>
                <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">✨ Extracurricular Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {achievementsByCategory.extracurricular.map((achievement: any) => (
                    <Card 
                      key={achievement._id} 
                      className="overflow-hidden card-hover border-t-4 border-t-green-500"
                      onClick={() => handleAchievementClick(achievement)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-green-500/10 p-3 rounded-full">
                            {getIcon(achievement.type)}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                            {achievement.organization && (
                              <p className="text-gray-600 text-sm mb-2">{achievement.organization}</p>
                            )}
                            <p className="text-gray-500 text-sm mb-2">{achievement.date}</p>
                            {achievement.description && (
                              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{achievement.description}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;
