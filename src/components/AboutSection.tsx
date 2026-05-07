import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Database, Terminal, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile, getEducations, getAssetUrl } from "@/services/api";
import { FALLBACK_PROFILE, FALLBACK_EDUCATION } from "@/services/fallbackData";

const AboutSection = () => {
  const { data: apiProfile, isLoading: loadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  });

  const { data: apiEducations = [], isLoading: loadingEdu } = useQuery({
    queryKey: ['educations'],
    queryFn: getEducations
  });

  const profile = apiProfile || FALLBACK_PROFILE;
  const educations = apiEducations.length > 0 ? apiEducations : FALLBACK_EDUCATION;

  const photoUrl = profile?.profileImage || profile?.photo || "/lovable-uploads/859560b4-157c-4dc1-a07c-9c8ccbdb9c8d.png";

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image Column */}
          <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl max-w-sm w-full bg-slate-200">
              {loadingProfile ? (
                <div className="aspect-[4/5] flex items-center justify-center"><Loader2 className="animate-spin text-primary" /></div>
              ) : (
                <>
                  <img 
                    src={getAssetUrl(photoUrl)}
                    alt={profile?.name || "Rohit Sandip Birdawade"} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-bold">{profile?.name || "Rohit Sandip Birdawade"}</h3>
                    <p className="text-white/90 text-sm">{profile?.title || "Aspiring AI & ML Engineer"}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4">
              {profile?.tagline || "Computer Science Engineer with a passion for AI and ML"}
            </h3>
            
            <div className="text-gray-700 mb-6 leading-relaxed space-y-4">
              {profile?.bio ? (
                <p>{profile.bio}</p>
              ) : (
                <>
                  <p>
                    Highly motivated and results-driven Computer Science Engineer with a strong foundation in software development, data analytics, and deep learning models. Proficient in designing and implementing advanced algorithms, with practical experience in hydroponic farming projects integrating aquaponics and poultry systems.
                  </p>
                  <p>
                    Demonstrated ability to work collaboratively on interdisciplinary projects and deliver innovative solutions. Proven internship experience in Data Analytics, showcasing strong analytical and problem-solving skills. Committed to continuous learning and applying cutting-edge technologies to solve real-world problems.
                  </p>
                </>
              )}
            </div>
            
            {/* Education */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary" /> Education
              </h4>
              <div className="space-y-4 ml-7">
                {loadingEdu ? (
                  <Loader2 className="animate-spin text-primary size-4" />
                ) : (Array.isArray(educations) && educations.length > 0) ? (
                  educations.map((edu: any) => (
                    <div key={edu._id}>
                      <h5 className="font-medium">{edu.degree}</h5>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.period}</p>
                      {edu.description && <p className="text-gray-600 text-sm">{edu.description}</p>}
                    </div>
                  ))
                ) : (
                  <>
                    <div>
                      <h5 className="font-medium">Bachelor of Computer Science Engineering</h5>
                      <p className="text-gray-600">Rajgad Dnyanpeeth's Shree Chhatrapati Shivajiraje College of Engineering, Bhor, Pune</p>
                      <p className="text-gray-500 text-sm">Expected Graduation: May 2025</p>
                    </div>
                    <div>
                      <h5 className="font-medium">H.S.C</h5>
                      <p className="text-gray-600">Vidya Pratishthan's Arts, Science and Commerce College, Baramati, Pune, India</p>
                      <p className="text-gray-500 text-sm">June 2021</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Key Skills Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <Code size={24} className="text-primary mb-2" />
                <h4 className="font-medium mb-1">Languages</h4>
                <p className="text-sm text-gray-600">Python, C, C++, HTML, CSS</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <Terminal size={24} className="text-primary mb-2" />
                <h4 className="font-medium mb-1">Tools</h4>
                <p className="text-sm text-gray-600">Jupyter Notebook, Google Colab, Arduino, Raspberry Pi</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <Database size={24} className="text-primary mb-2" />
                <h4 className="font-medium mb-1">Technologies</h4>
                <p className="text-sm text-gray-600">Data Science, Machine Learning, Deep Learning, IoT</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Skills
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => window.open(profile?.linkedin || "https://www.linkedin.com/in/rohit-birdawade-0b4865238/", "_blank")}
              >
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
