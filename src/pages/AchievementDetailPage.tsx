import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAchievement, getAssetUrl } from "@/services/api";
import { FALLBACK_ACHIEVEMENTS } from "@/services/fallbackData";
import { 
  ArrowLeft, Trophy, Medal, BookOpen, Star, Award, 
  Check, Loader2, Calendar, Building, MapPin, 
  Share2, ExternalLink, Image as ImageIcon, Users, 
  Quote, CheckCircle, ChevronLeft, ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const AchievementDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: apiAchievement, isLoading, error } = useQuery({
    queryKey: ['achievement', id],
    queryFn: () => getAchievement(id as string),
    retry: 1,
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

  // Helper to get image URL
  const getImgUrl = (img: string) => {
    if (!img) return null;
    if (img.startsWith('http') || img.startsWith('/lovable-uploads/')) return img;
    return getAssetUrl(img);
  };

  const images = achievement.images || (achievement.image ? [achievement.image] : []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Breadcrumb / Back */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-slate-100 text-slate-600 flex items-center gap-2 group transition-all"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Button>

          {/* Premium Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl opacity-70"></div>
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white shadow-xl shadow-primary/10 rounded-2xl border border-primary/10 transform -rotate-3">
                {getIcon(achievement.type, 48)}
              </div>
            </div>
            
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary font-bold uppercase tracking-wider text-xs">
                {achievement.category || "General Achievement"}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                {achievement.title}
              </h1>
              
              <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-8 text-slate-500 font-medium">
                {achievement.organization && (
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                      <Building size={16} />
                    </div>
                    <span>{achievement.organization}</span>
                  </div>
                )}
                {achievement.date && (
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                      <Calendar size={16} />
                    </div>
                    <span>{achievement.date}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Side */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Main Description Card */}
              <div className="bg-slate-50/50 rounded-3xl p-8 md:p-10 border border-slate-100">
                <h2 className="text-2xl font-extrabold mb-6 text-slate-900 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                  About This Recognition
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-medium">
                  {achievement.description?.split('\n').map((p: string, i: number) => (
                    <p key={i} className="mb-4">{p}</p>
                  ))}
                  {achievement.fullDescription?.split('\n').map((p: string, i: number) => (
                    <p key={i} className="mb-4">{p}</p>
                  ))}
                </div>
              </div>

              {/* Dynamic Highlights / Features if available */}
              {achievement.highlights && achievement.highlights.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">Key Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievement.highlights.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                        <p className="text-slate-600 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Carousel Showcase */}
              {images.length > 0 && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-900">Showcase Gallery</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <ImageIcon size={16} />
                      <span>{images.length} Media items</span>
                    </div>
                  </div>
                  
                  <div className="-mx-4 md:-mx-12">
                    <PremiumSlider 
                      images={images.map(img => getImgUrl(img) || '')} 
                      title={achievement.title}
                      location={achievement.organization}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Side */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Verification / Metadata Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl shadow-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Verified Detail</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Official Record</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1.5">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Issuer</p>
                    <p className="font-bold text-white leading-tight">{achievement.organization}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Recognition Type</p>
                    <Badge className="bg-white/10 text-white border-none capitalize">{achievement.type || 'Academic'}</Badge>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Date Conferred</p>
                    <p className="font-bold text-white">{achievement.date}</p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-extrabold gap-2">
                    <Share2 size={18} />
                    Share Achievement
                  </Button>
                </div>
              </div>

              {/* Quote Card if available */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:scale-110 transition-transform" />
                <p className="relative text-slate-700 italic font-medium leading-relaxed mb-4">
                  "Excellence is not a skill, it's an attitude. This recognition fuels my passion to keep innovating."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">RB</div>
                  <p className="text-sm font-bold text-slate-900">Rohit Birdawade</p>
                </div>
              </div>

              {/* Navigation help */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center space-y-4">
                <h4 className="font-bold text-slate-900">Explore More?</h4>
                <p className="text-slate-500 text-sm">Discover more awards and professional achievements in my journey.</p>
                <Link to="/#achievements" className="inline-block text-primary font-bold text-sm hover:underline">
                  View Achievements Wall
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AchievementDetailPage;
