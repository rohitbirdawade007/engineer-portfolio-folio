import { useState, useEffect } from "react";
import { Loader2, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile, getAssetUrl } from "@/services/api";
import { FALLBACK_PROFILE } from "@/services/fallbackData";

const HeroSection = () => {
  const { data: apiProfile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  });

  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const roles = ["AI & ML Engineer", "IoT Systems Architect", "Deep Learning Researcher", "Full-Stack Developer"];

  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const typeChar = () => {
      if (i <= role.length) {
        setTyped(role.slice(0, i));
        i++;
        timeout = setTimeout(typeChar, 60);
      } else {
        timeout = setTimeout(() => {
          let j = role.length;
          const eraseChar = () => {
            if (j >= 0) {
              setTyped(role.slice(0, j));
              j--;
              timeout = setTimeout(eraseChar, 35);
            } else {
              setRoleIdx((prev) => (prev + 1) % roles.length);
            }
          };
          eraseChar();
        }, 2000);
      }
    };
    typeChar();
    return () => clearTimeout(timeout);
  }, [roleIdx]);

  const profile = apiProfile || FALLBACK_PROFILE;
  const photoUrl = profile?.profileImage || profile?.photo || "/lovable-uploads/859560b4-157c-4dc1-a07c-9c8ccbdb9c8d.png";
  const name = profile?.name || "Rohit Sandip Birdawade";
  const [first, ...rest] = name.split(" ");
  const last = rest.pop() || "";
  const middle = rest.join(" ");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "8.7", label: "CGPA" },
    { value: "3+", label: "Projects" },
    { value: "1st", label: "NLPC Prize" },
    { value: "2025", label: "Graduate" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "hsl(262 83% 68% / 0.12)" }} />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "hsl(168 84% 50% / 0.1)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "hsl(262 83% 68% / 0.04)" }} />

      <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Content ── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="animate-fadeUp mb-6">
              <span className="eyebrow">
                <span className="neon-dot" />
                Available for hire — 2025
              </span>
            </div>

            {/* Name */}
            <h1 className="animate-fadeUp animate-delay-100 font-display text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              <span className="text-white/90">{first}</span>
              {middle && <span className="text-white/90"> {middle}</span>}
              <br />
              <span className="text-gradient">{last}.</span>
            </h1>

            {/* Typed role */}
            <div className="animate-fadeUp animate-delay-200 mb-6 h-10 flex items-center">
              <span className="font-mono-custom text-base sm:text-lg text-white/40 mr-2">~/</span>
              <span className="font-mono-custom text-base sm:text-lg font-medium cursor-blink"
                style={{ color: "hsl(168 84% 50%)" }}>
                {typed}
              </span>
            </div>

            {/* Bio */}
            <p className="animate-fadeUp animate-delay-300 text-base md:text-lg text-white/55 leading-relaxed max-w-lg mb-10">
              {profile?.bio || "Engineering intelligent solutions through data. Bridging the gap between complex algorithms and real-world impact through AI & ML innovation."}
            </p>

            {/* CTAs */}
            <div className="animate-fadeUp animate-delay-400 flex flex-wrap gap-4 mb-14">
              <button onClick={() => scrollTo("projects")} className="btn-primary">
                View My Work
                <ArrowDown size={16} />
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-outline">
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="animate-fadeUp animate-delay-500 flex items-center gap-6">
              {profile?.socialLinks?.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noreferrer"
                  className="text-white/30 hover:text-white/80 transition-colors duration-200">
                  <Github size={20} />
                </a>
              )}
              {profile?.socialLinks?.linkedin && (
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer"
                  className="text-white/30 hover:text-white/80 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
              )}
              {profile?.email && (
                <a href={`mailto:${profile.email}`}
                  className="text-white/30 hover:text-white/80 transition-colors duration-200">
                  <Mail size={20} />
                </a>
              )}
              <div className="w-px h-6 bg-white/10" />
              <span className="text-white/25 text-xs font-mono-custom tracking-widest uppercase">Connect</span>
            </div>
          </div>

          {/* ── Right — Photo ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeUp animate-delay-200">
            <div className="relative">
              {/* Rotating glow ring */}
              <div className="absolute inset-[-16px] rounded-full border border-purple-500/20 animate-spin-slow" />
              <div className="absolute inset-[-32px] rounded-full border border-teal-400/10 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "20s" }} />

              {/* Outer glow */}
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 pointer-events-none"
                style={{ background: "linear-gradient(135deg, hsl(262 83% 68% / 0.6), hsl(168 84% 50% / 0.4))" }} />

              {/* Photo frame */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid hsl(262 83% 68% / 0.3)",
                  boxShadow: "0 0 80px hsl(262 83% 68% / 0.2), inset 0 0 30px hsl(0 0% 0% / 0.3)"
                }}>
                <img
                  src={getAssetUrl(photoUrl)}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/lovable-uploads/859560b4-157c-4dc1-a07c-9c8ccbdb9c8d.png';
                  }}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, hsl(220 20% 6% / 0.8), transparent)" }} />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 border border-white/10">
                <p className="text-xs text-white/50 font-mono-custom">CGPA</p>
                <p className="text-xl font-bold text-gradient">8.7</p>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 border border-white/10">
                <p className="text-xs font-mono-custom" style={{ color: "hsl(168 84% 50%)" }}>🏆 NLPC-2025</p>
                <p className="text-sm font-semibold text-white">1st Prize</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="animate-fadeUp" style={{ animationDelay: `${0.1 * i + 0.6}s` }}>
              <p className="text-3xl font-display font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-xs text-white/40 uppercase tracking-widest font-mono-custom">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
