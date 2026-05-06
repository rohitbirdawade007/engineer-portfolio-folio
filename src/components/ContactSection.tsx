import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile, sendMessage } from "@/services/api";
import { FALLBACK_PROFILE } from "@/services/fallbackData";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: apiProfile, isLoading: loadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  });

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
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600">
            Have a question, a project idea, or just want to say hi? I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between transition-all hover:shadow-md">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-primary/10 p-3.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Mail size={22} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                      {loadingProfile ? (
                        <div className="h-5 w-32 bg-slate-200 animate-pulse rounded"></div>
                      ) : (
                        <a href={`mailto:${profile.email}`} className="text-slate-600 hover:text-primary transition-colors">
                          {profile.email}
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-primary/10 p-3.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <MapPin size={22} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Location</h4>
                      {loadingProfile ? (
                        <div className="h-5 w-40 bg-slate-200 animate-pulse rounded"></div>
                      ) : (
                        <p className="text-slate-600">{profile.location}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-primary/10 p-3.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Phone size={22} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                      {loadingProfile ? (
                        <div className="h-5 w-28 bg-slate-200 animate-pulse rounded"></div>
                      ) : (
                        <a href={`tel:${profile.phone}`} className="text-slate-600 hover:text-primary transition-colors">
                          {profile.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-10 mt-10 border-t border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {loadingProfile ? (
                    <>
                      <div className="h-12 w-12 bg-slate-200 animate-pulse rounded-full"></div>
                      <div className="h-12 w-12 bg-slate-200 animate-pulse rounded-full"></div>
                    </>
                  ) : (
                    <>
                      <a 
                        href={profile.github || "https://github.com/"} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-slate-100 text-slate-700 p-3.5 rounded-full hover:bg-slate-800 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                        aria-label="GitHub Profile"
                      >
                        <Github size={22} />
                      </a>
                      <a 
                        href={profile.linkedin || "https://linkedin.com/"} 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-slate-100 text-slate-700 p-3.5 rounded-full hover:bg-[#0077B5] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin size={22} />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold mb-8 text-slate-800">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 block">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 block">Your Email</label>
                    <input 
                      id="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 block">Your Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
