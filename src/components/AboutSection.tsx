import { useQuery } from "@tanstack/react-query";
import { getProfile, getEducations } from "@/services/api";
import { FALLBACK_PROFILE, FALLBACK_EDUCATION } from "@/services/fallbackData";
import { GraduationCap, MapPin, Calendar, Code2, Cpu, Layers } from "lucide-react";

const AboutSection = () => {
  const { data: apiProfile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });
  const { data: apiEducations = [] } = useQuery({ queryKey: ['educations'], queryFn: getEducations });

  const profile = apiProfile || FALLBACK_PROFILE;
  const educations = (apiEducations.length > 0 ? apiEducations : FALLBACK_EDUCATION) as any[];

  const highlights = [
    { icon: <Code2 size={18} />, label: "Languages", items: ["Python", "C / C++", "JavaScript", "SQL"] },
    { icon: <Cpu size={18} />, label: "Hardware", items: ["Arduino", "Raspberry Pi", "IoT Sensors"] },
    { icon: <Layers size={18} />, label: "Frameworks", items: ["TensorFlow", "PyTorch", "FastAPI", "React"] },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Section bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(262 83% 68% / 0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 scroll-reveal">
          <span className="eyebrow mb-4 block">01 — About</span>
          <h2 className="section-heading text-white">
            The Person Behind<br />
            <span className="text-gradient">The Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Bio */}
          <div className="scroll-reveal space-y-6">
            <p className="text-lg text-white/70 leading-relaxed">
              {profile?.about || profile?.bio || "Highly motivated Computer Engineering student specializing in Artificial Intelligence and Machine Learning. I build intelligent systems that bridge the gap between complex algorithms and real-world impact."}
            </p>
            <p className="text-base text-white/50 leading-relaxed">
              From winning 1st prize at NLPC-2025 to being awarded Student of the Computer Department — I constantly push boundaries and seek out new engineering challenges.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-white/5">
                <MapPin size={14} style={{ color: "hsl(168 84% 50%)" }} />
                <span className="text-sm text-white/70">{profile?.location || "Pune, India"}</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-white/5">
                <GraduationCap size={14} style={{ color: "hsl(168 84% 50%)" }} />
                <span className="text-sm text-white/70">B.E. Computer Engineering</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-white/5">
                <Calendar size={14} style={{ color: "hsl(168 84% 50%)" }} />
                <span className="text-sm text-white/70">Class of 2025</span>
              </div>
            </div>

            <div className="pt-4 flex gap-4 flex-wrap">
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                View My Skills
              </button>
              {profile?.socialLinks?.linkedin && (
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  LinkedIn Profile
                </a>
              )}
            </div>
          </div>

          {/* Right — Education + Skills */}
          <div className="space-y-6 scroll-reveal">
            {/* Education */}
            <div className="glow-card p-6">
              <h3 className="eyebrow mb-6">Education</h3>
              <div className="space-y-5">
                {educations.map((edu: any, i: number) => (
                  <div key={edu._id || i} className="relative pl-5 border-l border-white/10">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full"
                      style={{ background: "linear-gradient(135deg, hsl(262 83% 68%), hsl(168 84% 50%))" }} />
                    <p className="font-semibold text-white mb-0.5">{edu.degree}</p>
                    <p className="text-sm text-white/50">{edu.institution || edu.school}</p>
                    <p className="text-xs mt-1 font-mono-custom" style={{ color: "hsl(168 84% 50%)" }}>
                      {edu.startDate && edu.endDate ? `${edu.startDate} → ${edu.endDate}` : edu.period}
                      {edu.grade && <span className="ml-3 text-white/40">{edu.grade}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="glow-card p-5">
                  <div className="mb-3" style={{ color: "hsl(262 83% 68%)" }}>{h.icon}</div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-mono-custom mb-3">{h.label}</p>
                  <ul className="space-y-1">
                    {h.items.map((item) => (
                      <li key={item} className="text-xs text-white/60 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-400/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
