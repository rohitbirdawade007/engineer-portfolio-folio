import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile, getEducations } from "@/services/api";
import { FALLBACK_PROFILE, FALLBACK_EDUCATION } from "@/services/fallbackData";

const AboutSection = () => {
  const { data: apiProfile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });
  const { data: apiEducations = [], isLoading: loadingEdu } = useQuery({ queryKey: ['educations'], queryFn: getEducations });

  const profile = apiProfile || FALLBACK_PROFILE;
  const educations = apiEducations.length > 0 ? apiEducations : FALLBACK_EDUCATION;

  const bioText = profile?.bio || "Highly motivated and results-driven Computer Science Engineer with a strong foundation in software development, data analytics, and deep learning models. Proficient in designing and implementing advanced algorithms with practical experience in sustainable systems.";
  const firstChar = bioText.charAt(0);
  const restBio = bioText.slice(1);

  return (
    <section id="about" className="py-24 md:py-32 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Sidebar meta */}
        <div className="md:col-span-4">
          <span className="eyebrow mb-6 block">Section 01</span>
          <h2 className="section-heading italic mb-8">Biography</h2>
          <div className="space-y-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            <p>BE Computer Science</p>
            <p>{profile?.location || "Pune, Maharashtra"}</p>
            <p>Class of 2025</p>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-8">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground">
            <span className="float-left font-serif italic text-7xl md:text-8xl mr-4 mt-2 leading-[0.7] text-muted-foreground">
              {firstChar}
            </span>
            {restBio}
          </p>

          <div className="mt-20 pt-12 border-t border-foreground/10 grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="eyebrow mb-6">Education</h3>
              <div className="space-y-4">
                {loadingEdu ? (
                  <Loader2 className="animate-spin text-secondary size-4" />
                ) : (
                  educations.map((edu: any) => (
                    <div key={edu._id || edu.degree}>
                      <p className="font-serif italic text-xl leading-tight mb-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <p className="text-[10px] uppercase tracking-widest text-secondary mt-1 font-semibold">{edu.period}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-6">Languages</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Python / C / C++</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> HTML / CSS</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> SQL</li>
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-6">Tools &amp; Tech</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Jupyter / Colab</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> Arduino / Raspberry Pi</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" /> TensorFlow / PyTorch</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-editorial"
            >
              View My Skills
            </button>
            <a
              href={profile?.linkedin || "https://www.linkedin.com/"}
              target="_blank"
              rel="noreferrer"
              className="btn-editorial-outline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
