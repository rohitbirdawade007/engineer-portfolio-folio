
import { CalendarIcon, BriefcaseIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Data Analytics Intern",
    company: "Navodita Infotech",
    period: "2023",
    description: "Worked on customer segmentation analysis using data analysis, data cleaning and preprocessing, machine learning models, reporting and visualization, collaboration, and teamwork.",
    skills: ["Google Colab", "Kaggle", "Data Analysis"]
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "InnoByte Services",
    period: "2023",
    description: "Analyzed sales transactions on Amazon, including details such as order ID, date, status, fulfillment method, sales channel, product category, size, quantity, amount, shipping details, and more to extract actionable insights.",
    skills: ["Google Colab", "Kaggle Dataset", "Keras", "Matplotlib", "NumPy", "Python"]
  },
  {
    id: 3,
    title: "Machine Learning and Deep Learning Intern",
    company: "Learnalytics Tech Academy Pvt. Ltd. Pune",
    period: "2022",
    description: "Worked on different projects and algorithms of deep learning and machine learning, including data analysis, data cleaning and preprocessing, machine learning models, reporting, and visualization.",
    skills: ["CNN", "CNN-SVM Hybrid", "Densenet201", "Resnet101", "Jupiter notebook", "TensorFlow", "Scikit-learn"]
  },
  {
    id: 4,
    title: "Machine Learning with Data Science Intern",
    company: "PHN Technology Pvt Ltd, Pune",
    period: "2022",
    description: "Demonstrated exceptional skills, commitment, and a strong work ethic during the internship. Made notable contributions to Machine Learning and Data Science projects.",
    skills: ["Google Colab", "Kaggle", "Python", "Machine Learning"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-12">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index !== experiences.length - 1 ? "pb-12 border-b border-gray-200" : ""
                }`}
              >
                {/* Timeline element */}
                <div className="hidden md:block absolute top-0 bottom-0 left-[7.5rem] w-0.5 bg-gray-200 -z-10"></div>
                
                {/* Date */}
                <div className="md:w-32 flex items-start">
                  <div className="flex items-center gap-2 bg-white md:pr-4">
                    <CalendarIcon size={18} className="text-primary shrink-0" />
                    <span className="text-gray-600 font-medium">{experience.period}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BriefcaseIcon size={18} className="text-primary shrink-0" />
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                  </div>
                  <p className="text-gray-700 font-medium mb-3">{experience.company}</p>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
