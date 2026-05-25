import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSkills, getCertifications } from "@/services/api";
import { FALLBACK_SKILLS, FALLBACK_CERTIFICATIONS } from "@/services/fallbackData";
import { Award, CheckCircle2 } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { data: apiSkills = [] } = useQuery({ queryKey: ['skills'], queryFn: getSkills });
  const { data: apiCerts = [] } = useQuery({ queryKey: ['certifications'], queryFn: getCertifications });

  const skills = (apiSkills.length > 0 ? apiSkills : FALLBACK_SKILLS) as any[];
  const certs = (apiCerts.length > 0 ? apiCerts : FALLBACK_CERTIFICATIONS) as any[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Group skills by category
  const grouped: Record<string, any[]> = {};
  skills.forEach((s: any) => {
    const cat = s.category || "Other";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(s);
  });
  const categories = Object.keys(grouped);

  const colorMap: Record<string, string> = {
    "AI / ML": "hsl(262 83% 68%)",
    "Frontend": "hsl(168 84% 50%)",
    "Backend": "hsl(197 90% 60%)",
    "IoT": "hsl(330 86% 65%)",
    "Other": "hsl(262 83% 68%)",
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(330 86% 65% / 0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 scroll-reveal">
          <span className="eyebrow mb-4 block">04 — Expertise</span>
          <h2 className="section-heading text-white">
            Skills & <span className="text-gradient-warm">Stack</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills with progress bars */}
          <div className="lg:col-span-2 space-y-8 scroll-reveal">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <div key={cat} className="glow-card p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full" style={{ background: colorMap[cat] || colorMap.Other }} />
                    <h3 className="text-sm font-semibold text-white/70 uppercase tracking-widest font-mono-custom">{cat}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {grouped[cat].map((skill: any, i: number) => (
                      <div key={skill._id || i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-white/80">{skill.name}</span>
                          <span className="text-xs font-mono-custom" style={{ color: colorMap[cat] || colorMap.Other }}>
                            {skill.proficiency || skill.level || 80}%
                          </span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-bar-fill"
                            style={{
                              width: isVisible ? `${skill.proficiency || skill.level || 80}%` : '0%',
                              transitionDelay: `${i * 80}ms`,
                              background: `linear-gradient(90deg, ${colorMap[cat] || colorMap.Other}, ${colorMap[cat] || colorMap.Other}88)`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Fallback — just show all as pills
              <div className="glow-card p-8">
                <h3 className="eyebrow mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((s: any, i: number) => (
                    <span key={i} className="skill-pill">{s.name}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — Certifications */}
          <div className="scroll-reveal">
            <div className="glow-card p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award size={18} style={{ color: "hsl(330 86% 65%)" }} />
                <h3 className="text-sm font-semibold text-white/70 uppercase tracking-widest font-mono-custom">Certifications</h3>
              </div>
              {certs.length > 0 ? (
                <div className="space-y-4">
                  {certs.map((cert: any, i: number) => (
                    <div key={cert._id || i} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "hsl(168 84% 50%)" }} />
                      <div>
                        <p className="text-sm text-white/80 font-medium">{cert.title || cert.name || cert}</p>
                        {cert.issuer && <p className="text-xs text-white/40 mt-0.5">{cert.issuer}</p>}
                        {cert.year && <p className="text-xs font-mono-custom mt-1" style={{ color: "hsl(168 84% 50%)" }}>{cert.year}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "IoT", "Python", "TensorFlow"].map(c => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skill pills cloud */}
        <div className="mt-12 scroll-reveal">
          <div className="glow-card p-8 text-center">
            <p className="eyebrow justify-center mb-6">All Technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((s: any, i: number) => (
                <span key={i} className="skill-pill cursor-default">{s.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
