import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAchievement } from "@/services/api";
import { FALLBACK_ACHIEVEMENTS } from "@/services/fallbackData";
import { ArrowLeft, Trophy, Medal, BookOpen, Star, Award, Check, Loader2, Calendar, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import NotFound from "./NotFound";

const AchievementDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: apiAchievement, isLoading, error } = useQuery({
    queryKey: ['achievement', id],
    queryFn: () => getAchievement(id as string),
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
  let achievement = apiAchievement;
  if (!achievement || error) {
    achievement = FALLBACK_ACHIEVEMENTS.find(
      (a: any) => a.id === id || a.slug === id
    );
  }

  if (!achievement) {
    return <NotFound />;
  }

  const getIcon = (type: string, size = 24) => {
    switch (type?.toLowerCase()) {
      case "award":
        return <Trophy size={size} className="text-primary" />;
      case "competition":
        return <Medal size={size} className="text-primary" />;
      case "paper":
        return <BookOpen size={size} className="text-primary" />;
      case "leadership":
        return <Star size={size} className="text-primary" />;
      case "certification":
        return <Award size={size} className="text-primary" />;
      default:
        return <Check size={size} className="text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center">
          <Link to="/#achievements" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          {getIcon(achievement.type, 200)}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/50 shadow-sm">
             {getIcon(achievement.type, 20)}
             <span className="font-semibold text-primary capitalize">{achievement.type || "Achievement"}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
            {achievement.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 mb-8 text-slate-700">
            {achievement.organization && (
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg shadow-sm">
                <Building size={18} className="text-primary" />
                <span className="font-medium">{achievement.organization}</span>
              </div>
            )}
            {achievement.date && (
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg shadow-sm">
                <Calendar size={18} className="text-primary" />
                <span className="font-medium">{achievement.date}</span>
              </div>
            )}
          </div>
          
          <div className="flex gap-2 mb-6">
            <Badge variant="secondary" className="capitalize px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20">
              {achievement.category || "General"}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Overview</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
              {achievement.description ? (
                achievement.description.split('\n').map((paragraph: string, i: number) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))
              ) : (
                <p>No detailed description provided for this achievement.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link to="/#achievements" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-md">
          <ArrowLeft size={20} />
          View All Achievements
        </Link>
      </div>
    </div>
  );
};

export default AchievementDetailPage;
