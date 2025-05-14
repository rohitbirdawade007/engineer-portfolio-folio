
import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Database, Terminal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image Column */}
          <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=500" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold">Rohit Sandip Birdawade</h3>
                <p className="text-white/90 text-sm">Aspiring AI & ML Engineer</p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4">Computer Science Engineer with a passion for AI and ML</h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Highly motivated and results-driven Computer Science Engineer with a strong foundation in software development, data analytics, and deep learning models. Proficient in designing and implementing advanced algorithms, with practical experience in hydroponic farming projects integrating aquaponics and poultry systems.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Demonstrated ability to work collaboratively on interdisciplinary projects and deliver innovative solutions. Proven internship experience in Data Analytics, showcasing strong analytical and problem-solving skills. Committed to continuous learning and applying cutting-edge technologies to solve real-world problems.
            </p>
            
            {/* Education */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary" /> Education
              </h4>
              <div className="space-y-4 ml-7">
                <div>
                  <h5 className="font-medium">Bachelor of Computer Science Engineering</h5>
                  <p className="text-gray-600">Rajgad Dnyanpeeth's Shree Chhatrapati Shivajiraje College of Engineering, Bhor, Pune</p>
                  <p className="text-gray-500 text-sm">Expected Graduation: May 2025</p>
                  <p className="text-gray-600 text-sm">Related Coursework: Machine Learning, Python, Artificial Intelligence, Data Science</p>
                </div>
                <div>
                  <h5 className="font-medium">H.S.C</h5>
                  <p className="text-gray-600">Vidya Pratishthan's Arts, Science and Commerce College, Baramati, Pune, India</p>
                  <p className="text-gray-500 text-sm">June 2021</p>
                  <p className="text-gray-600 text-sm">Related Coursework: IT, Science</p>
                </div>
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
                onClick={() => window.open("https://www.linkedin.com/in/rohit-birdawade-0b4865238/", "_blank")}
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
