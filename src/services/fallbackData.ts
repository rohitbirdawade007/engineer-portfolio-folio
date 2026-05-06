
export const FALLBACK_PROJECTS = [
  {
    id: "plant-disease",
    title: "Plant Disease Classification using DenseNet",
    description: "A deep learning application that uses DenseNet201 architecture to classify plant diseases from leaf images with high accuracy.",
    image: "/lovable-uploads/b0553c44-91c8-4afd-ab90-bcf2be286fa9.png",
    technologies: ["Deep Learning", "Keras", "TensorFlow", "DenseNet201"],
    internalLink: "/projects/plant-disease",
    githubUrl: "https://github.com/rohitbirdawade007"
  },
  {
    id: "retinopathy",
    title: "Diabetic Retinopathy Detection",
    description: "Early detection of diabetic retinopathy using EfficientNet-B3 architecture with CBAM attention mechanism for improved accuracy.",
    image: "/lovable-uploads/d7658700-6644-411a-965a-07447605d39d.png",
    technologies: ["Deep Learning", "Medical AI", "EfficientNet", "CBAM"],
    internalLink: "/projects/retinopathy",
    githubUrl: "https://github.com/rohitbirdawade007"
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture & Irrigation System",
    description: "An automated irrigation system using Arduino and various sensors to optimize water usage in farming based on soil moisture.",
    image: "/lovable-uploads/c7c94389-983e-469b-8e2b-f8180702d091.png",
    technologies: ["IoT", "Arduino", "Sensors", "Automation"],
    internalLink: "/projects/smart-agriculture",
    githubUrl: "https://github.com/rohitbirdawade007"
  }
];

export const FALLBACK_SKILLS = [
  { name: "Python", proficiency: 90 },
  { name: "Machine Learning", proficiency: 85 },
  { name: "Deep Learning", proficiency: 82 },
  { name: "Data Science", proficiency: 80 },
  { name: "IoT & Embedded Systems", proficiency: 75 },
  { name: "C/C++", proficiency: 70 },
  { name: "Data Analytics", proficiency: 85 }
];

export const FALLBACK_ACHIEVEMENTS = [
  {
    id: "student-award",
    category: "achievements",
    type: "award",
    title: "Student of the Year",
    organization: "Computer Department",
    date: "2024",
    description: "Awarded Student of the Year for outstanding academic performance and contribution to the department.",
    slug: "student-of-computer-department",
    hasDetailPage: true
  },
  {
    id: "excellence-award",
    category: "achievements",
    type: "award",
    title: "Excellence of the Year",
    organization: "College of Engineering",
    date: "2023",
    description: "Recognized for excellence in technical projects and academic achievements throughout the year.",
    slug: "excellence-of-the-year",
    hasDetailPage: true
  },
  {
    id: "nlpc-first",
    category: "achievements",
    type: "competition",
    title: "NLPC 1st Prize",
    organization: "National Level Project Competition",
    date: "2024",
    description: "Won first prize in the National Level Project Competition for innovative AI solution.",
    slug: "nlpc-first-prize",
    hasDetailPage: true
  },
  {
    id: "nlpc-second",
    category: "achievements",
    type: "achievements",
    title: "NLPC 2nd Prize",
    organization: "National Level Project Competition",
    date: "2023",
    description: "Secured second place in the NLPC for deep learning based medical application.",
    slug: "nlpc-second-prize",
    hasDetailPage: true
  },
  {
    id: "carrom-first",
    category: "extracurricular",
    type: "award",
    title: "Carrom 1st Rank",
    organization: "District Sports Meet",
    date: "2022",
    description: "Achieved first rank in Carrom at the district level inter-college sports competition.",
    slug: "carrom-first-rank",
    hasDetailPage: true
  },
  {
    id: "ncrist-paper",
    category: "achievements",
    type: "paper",
    title: "NCRIST Research Paper",
    organization: "NCRIST Conference",
    date: "2024",
    description: "Published and presented a research paper on AI applications in modern agriculture.",
    slug: "ncrist-research-paper",
    hasDetailPage: true
  },
  {
    id: "project-xpo",
    category: "achievements",
    type: "competition",
    title: "Project Xpo 3rd Prize",
    organization: "Inter-College Project Expo",
    date: "2023",
    description: "Received 3rd prize for the Smart Irrigation System project in the regional expo.",
    slug: "project-xpo-third-prize",
    hasDetailPage: true
  }
];

export const FALLBACK_EXPERIENCE = [
  {
    id: "intern-1",
    period: "June 2023 - July 2023",
    title: "Data Analytics Intern",
    company: "Smart Bridge",
    description: "Worked on various data processing tasks, created visualizations, and assisted in building predictive models using Python.",
    skills: ["Python", "Pandas", "Matplotlib", "Data Visualization"]
  }
];

export const FALLBACK_RESEARCH = [
  {
    id: "res-1",
    title: "Implementation of Deep Learning for Plant Disease Detection",
    authors: "Rohit Birdawade, S. S. Patil",
    journal: "International Journal of Innovative Research",
    year: "2024",
    volume: "Vol. 13, Issue 4",
    url: "#"
  }
];

export const FALLBACK_CERTIFICATIONS = [
  "Deep Learning Specialization - Coursera",
  "Machine Learning with Python - IBM",
  "Data Analytics Professional - Google",
  "Internet of Things Graduate - Cisco",
  "Python for Data Science - NPTEL"
];

export const FALLBACK_PROFILE = {
  name: "Rohit Sandip Birdawade",
  title: "Aspiring AI & ML Engineer",
  tagline: "Computer Science Engineer with a passion for AI and ML",
  bio: "Highly motivated and results-driven Computer Science Engineer with a strong foundation in software development, data analytics, and deep learning models. Proficient in designing and implementing advanced algorithms, with practical experience in hydroponic farming projects integrating aquaponics and poultry systems.\n\nDemonstrated ability to work collaboratively on interdisciplinary projects and deliver innovative solutions. Proven internship experience in Data Analytics, showcasing strong analytical and problem-solving skills. Committed to continuous learning and applying cutting-edge technologies to solve real-world problems.",
  photo: "/lovable-uploads/859560b4-157c-4dc1-a07c-9c8ccbdb9c8d.png",
  skillsSnippet: "AI & ML",
  heroDescription: "I'm an aspiring AI & ML engineer with a background in Computer Science Engineering from Baramati, Pune. Passionate about creating intelligent solutions that solve real-world problems.",
  linkedin: "https://www.linkedin.com/in/rohit-birdawade-0b4865238/",
  github: "https://github.com/rohitbirdawade007",
  email: "Rohitbirdawade2875@gmail.com",
  phone: "+91 7038119511",
  location: "Baramati, Pune, Maharashtra, India"
};

export const FALLBACK_EDUCATION = [
  {
    _id: "edu-1",
    degree: "Bachelor of Computer Science Engineering",
    school: "Rajgad Dnyanpeeth's Shree Chhatrapati Shivajiraje College of Engineering, Bhor, Pune",
    period: "Expected Graduation: May 2025",
    description: "Focusing on AI, Machine Learning, and Data Science."
  },
  {
    _id: "edu-2",
    degree: "H.S.C",
    school: "Vidya Pratishthan's Arts, Science and Commerce College, Baramati, Pune, India",
    period: "June 2021",
    description: "Science Stream"
  }
];

