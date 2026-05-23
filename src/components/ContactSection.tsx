import { useState } from "react";
import { Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile, sendMessage } from "@/services/api";
import { FALLBACK_PROFILE } from "@/services/fallbackData";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: apiProfile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });
  const profile = apiProfile || FALLBACK_PROFILE;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await sendMessage(formData);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Left: editorial connect */}
        <div className="md:col-span-6">
          <span className="eyebrow mb-8 block">Section 06 — Contact</span>
          <h2 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight mb-10">
            Let's <span className="italic text-muted-foreground">Connect.</span>
          </h2>
          <p className="text-foreground/70 mb-12 max-w-sm text-lg font-light leading-relaxed">
            Currently open to collaborative opportunities and research roles in the AI landscape.
          </p>
          <div className="space-y-1">
            <a
              href={`mailto:${profile.email}`}
              className="block font-serif italic text-2xl md:text-3xl border-b border-foreground/10 pb-4 hover:border-secondary hover:text-secondary transition-colors"
            >
              {profile.email}
            </a>
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-muted-foreground pt-6">
              {profile.location} &nbsp;·&nbsp; {profile.phone}
            </p>
            <div className="flex gap-8 pt-10 text-[10px] uppercase tracking-[0.3em] font-bold">
              <a href={profile.linkedin || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={profile.github || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="md:col-span-6">
          <div className="border border-foreground/10 p-8 md:p-12 bg-card/50">
            <form onSubmit={handleSubmit} className="space-y-12 pt-4">
              <div className="relative">
                <label htmlFor="name" className="text-[9px] uppercase tracking-[0.3em] text-secondary font-bold absolute -top-4">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 font-serif italic text-lg focus:outline-none focus:border-primary placeholder:text-foreground/20 placeholder:not-italic placeholder:font-sans placeholder:text-base"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-[9px] uppercase tracking-[0.3em] text-secondary font-bold absolute -top-4">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 font-serif italic text-lg focus:outline-none focus:border-primary placeholder:text-foreground/20 placeholder:not-italic placeholder:font-sans placeholder:text-base"
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="text-[9px] uppercase tracking-[0.3em] text-secondary font-bold absolute -top-4">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief overview of your inquiry"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 font-serif italic text-lg focus:outline-none focus:border-primary resize-none placeholder:text-foreground/20 placeholder:not-italic placeholder:font-sans placeholder:text-base"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-foreground/80 transition-all flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending</>
                ) : (
                  <>Send Inquiry <Send size={14} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
