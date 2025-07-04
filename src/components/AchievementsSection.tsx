
import { Award, Check, Trophy, Medal, BookOpen, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  type: "award" | "certification" | "workshop" | "competition" | "paper" | "leadership";
  description?: string;
  images?: string[];
  hasDetailPage?: boolean;
  category: "achievements" | "cocurricular" | "extracurricular";
}

const achievements: Achievement[] = [
  // Achievements & Awards
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
    hasDetailPage: true,
    category: "achievements"
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
    hasDetailPage: true,
    category: "achievements"
  },
  {
    id: 3,
    title: "1st Prize at National Level Project Competition (NLPC-2025)",
    organization: "Institution of Electronics & Telecommunication Engineers (IETE) Pune Centre and MMCOE Pune",
    date: "2025",
    type: "competition",
    description: "🥇 First place winner at the prestigious National Level Project Competition hosted by IETE Pune Centre and MMCOE Pune.",
    hasDetailPage: true,
    category: "achievements"
  },
  {
    id: 4,
    title: "1st Rank in Carrom (Anantmahotsav 2024–25)",
    organization: "Rajgad Dnyanpeeth Technical Campus",
    date: "2024-25",
    type: "competition",
    description: "🥇 Secured first rank in Carrom competition during Anantmahotsav 2024–25 at Rajgad Dnyanpeeth Technical Campus.",
    images: ["/lovable-uploads/b4a3c512-e6a1-42df-95ec-31a58de02a37.png"],
    hasDetailPage: true,
    category: "achievements"
  },
  {
    id: 5,
    title: "2nd Prize at National Level Project Competition (NLPC-2025)",
    organization: "Institution of Electronics & Telecommunication Engineers (IETE) Pune Centre and Sinhgad College of Engineering Vadgaon Pune",
    date: "2025",
    type: "competition",
    description: "🥈 Second place winner at the National Level Project Competition hosted by IETE Pune Centre and Sinhgad College of Engineering.",
    hasDetailPage: true,
    category: "achievements"
  },
  {
    id: 6,
    title: "3rd Prize at ProjectXpo, BharatiYugam 2025",
    organization: "Bharati Vidyapeeth College of Engineering for Women, Pune",
    date: "2025",
    type: "competition",
    description: "🥉 Third place winner at ProjectXpo during BharatiYugam 2025 at Bharati Vidyapeeth College of Engineering for Women, Pune.",
    images: ["/lovable-uploads/d93ba7ca-f0cf-4925-8ca0-968e1be71b21.png"],
    hasDetailPage: true,
    category: "achievements"
  },
  
  // Co-Curricular Activities
  {
    id: 7,
    title: "Research Paper Presentation: A Review on AI and IoT Integration in Sustainable Agriculture",
    organization: "NCRIST-2025, Rajgad Dnyanpeeth Technical Campus",
    date: "2025",
    type: "paper",
    description: "📜 Presented research paper on AI and IoT integration in sustainable agriculture at NCRIST-2025.",
    images: ["/lovable-uploads/247ab65a-b250-4b85-bf9a-0417ac01dbfc.png"],
    hasDetailPage: true,
    category: "cocurricular"
  },
  {
    id: 8,
    title: "Smart Washroom and Bathroom Project",
    organization: "DIPEX 2024 (State Level Project Competition, Terna College, Navi Mumbai)",
    date: "2024",
    type: "competition",
    description: "🏅 Participated in DIPEX 2024 state level project competition with Smart Washroom and Bathroom project.",
    images: ["/lovable-uploads/56f79f7d-cde4-4cc5-a520-d7e69cffe4f9.png"],
    hasDetailPage: true,
    category: "cocurricular"
  },
  {
    id: 9,
    title: "Impetus and Concepts 2024",
    organization: "International Level Technical Event, PICT Pune",
    date: "2024",
    type: "competition",
    description: "🏅 Participated in Impetus and Concepts 2024, an international level technical event at PICT Pune.",
    images: ["/lovable-uploads/a0138bd0-fe6c-4652-a9a7-51141e0c520c.png"],
    hasDetailPage: true,
    category: "cocurricular"
  },
  {
    id: 10,
    title: "Anant Nirmal Techutsav 2K25",
    organization: "State Level Project Competition, RDTC Bhor",
    date: "2025",
    type: "competition",
    description: "🏅 Participated in Anant Nirmal Techutsav 2K25 state level project competition at RDTC Bhor.",
    images: ["/lovable-uploads/20e20354-9542-4315-a9ce-3976d34a7c89.png"],
    hasDetailPage: true,
    category: "cocurricular"
  },
  
  // Extracurricular Activities
  {
    id: 11,
    title: "General Secretary",
    organization: "Student Council, Shri Chhatrapati Shivajiraje College of Engineering",
    date: "2024–25",
    type: "leadership",
    description: "🌟 Appointed as General Secretary to the Student Council at Shri Chhatrapati Shivajiraje College of Engineering for the academic year 2024–25.",
    hasDetailPage: true,
    category: "extracurricular"
  },
  {
    id: 12,
    title: "Technical Secretary (Boys)",
    organization: "Student Council, Shri Chhatrapati Shivajiraje College of Engineering",
    date: "2023–24",
    type: "leadership",
    description: "🌟 Served as Technical Secretary (Boys) for the Student Council at Shri Chhatrapati Shivajiraje College of Engineering during 2023–24.",
    hasDetailPage: true,
    category: "extracurricular"
  },
  {
    id: 13,
    title: "FE Induction Program Volunteer",
    organization: "Department of First Year Engineering",
    date: "2023-24",
    type: "workshop",
    description: "🌟 Served as a volunteer for the FE Induction Program 2023-24, helping new students with their orientation and academic integration.",
    images: ["/lovable-uploads/6adf669e-fc7b-4608-aeb1-ba0e6f6d2ec9.png"],
    hasDetailPage: true,
    category: "extracurricular"
  }
];

const AchievementsSection = () => {
  const navigate = useNavigate();

  const handleAchievementClick = (achievement: Achievement) => {
    if (achievement.hasDetailPage) {
      const routeMap: { [key: number]: string } = {
        1: '/awards/excellence-of-the-year',
        2: '/awards/student-of-computer-department',
        3: '/achievements/nlpc-first-prize',
        4: '/achievements/carrom-first-rank',
        5: '/achievements/nlpc-second-prize',
        6: '/achievements/project-xpo-third-prize',
        7: '/achievements/ncrist-research-paper',
        8: '/achievements/smart-washroom-dipex',
        9: '/achievements/impetus-concepts-pict',
        10: '/achievements/anant-nirmal-techutsav',
        11: '/achievements/general-secretary',
        12: '/achievements/technical-secretary',
        13: '/achievements/fe-induction-volunteer'
      };
      
      const route = routeMap[achievement.id];
      if (route) {
        navigate(route);
      }
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
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
    achievements: achievements.filter(a => a.category === "achievements"),
    cocurricular: achievements.filter(a => a.category === "cocurricular"),
    extracurricular: achievements.filter(a => a.category === "extracurricular")
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">Achievements & Recognition</h2>
        
        {/* Achievements & Awards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">🏆 Achievements & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievementsByCategory.achievements.map((achievement) => (
              <Card 
                key={achievement.id} 
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
                      {achievement.images && achievement.images.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {achievement.images.slice(0, 2).map((image, index) => (
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

        {/* Co-Curricular Activities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">📚 Co-Curricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievementsByCategory.cocurricular.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`overflow-hidden card-hover border-t-4 border-t-blue-500 ${
                  achievement.hasDetailPage ? 'cursor-pointer' : ''
                }`}
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
                      {achievement.images && achievement.images.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {achievement.images.slice(0, 2).map((image, index) => (
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
                        <p className="text-blue-500 text-sm mt-2 font-medium">Click to view details →</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">✨ Extracurricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievementsByCategory.extracurricular.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`overflow-hidden card-hover border-t-4 border-t-green-500 ${
                  achievement.hasDetailPage ? 'cursor-pointer' : ''
                }`}
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
                      {achievement.images && achievement.images.length > 0 && (
                        <div className="flex gap-2 mt-3">
                          {achievement.images.slice(0, 2).map((image, index) => (
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
                        <p className="text-green-500 text-sm mt-2 font-medium">Click to view details →</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
