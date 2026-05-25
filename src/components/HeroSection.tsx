import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile, getAssetUrl } from "@/services/api";
import { FALLBACK_PROFILE } from "@/services/fallbackData";

const HeroSection = () => {
  const { data: apiProfile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  });

  const profile = apiProfile || FALLBACK_PROFILE;
  const photoUrl = profile?.profileImage || profile?.photo || "/lovable-uploads/859560b4-157c-4dc1-a07c-9c8ccbdb9c8d.png";
  const name = profile?.name || "Rohit Sandip Birdawade";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [first, ...rest] = name.split(" ");
  const last = rest.pop() || "";
  const middle = rest.join(" ");

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-32 pb-20 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          {/* Hero content */}
          <div className="md:col-span-8 animate-fadeUp">
            <span className="eyebrow mb-8 block">
              Artificial Intelligence &amp; Machine Learning
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 font-bold break-words">
              {first} {middle && <span>{middle}</span>}
              <br />
              <span className="text-gradient">{last}.</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-foreground/75 leading-relaxed font-light mb-12">
              {profile?.heroDescription || "Engineering intelligent solutions through data. I bridge the gap between"}{" "}
              <span className="font-medium text-foreground">complex algorithms</span>{" "}
              and real-world impact with a focus on {profile?.skillsSnippet || "AI &amp; ML"} architecture.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => scrollTo("projects")} className="btn-editorial">
                Explore Projects
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-editorial-outline">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-4 flex justify-center md:justify-end animate-fadeUp animate-delay-200">
            <div className="relative p-3 border border-foreground/10 bg-card max-w-sm w-full">
              <div className="aspect-[4/5] overflow-hidden bg-foreground/5 flex items-center justify-center">
                {isLoading ? (
                  <Loader2 className="animate-spin text-secondary" />
                ) : (
                  <img
                    src={getAssetUrl(photoUrl)}
                    alt={name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-secondary pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-12 h-12 border-l border-t border-accent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom metadata strip */}
        <div className="mt-24 pt-8 border-t border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] uppercase tracking-[0.25em] font-semibold text-muted-foreground">
          <div>
            <p className="text-secondary mb-2">Based In</p>
            <p>{profile?.location || "Pune, India"}</p>
          </div>
          <div>
            <p className="text-secondary mb-2">Discipline</p>
            <p>AI / ML Engineering</p>
          </div>
          <div>
            <p className="text-secondary mb-2">Issue</p>
            <p>Vol. 01 — 2025</p>
          </div>
          <div>
            <p className="text-secondary mb-2">Status</p>
            <p>Available for hire</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
