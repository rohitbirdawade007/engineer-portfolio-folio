/**
 * seed.js — Run ONCE to populate MongoDB with hardcoded portfolio data.
 * Uses the same MONGO_URI from .env → no connection changes needed.
 *
 * Usage: node backend/seed.js
 */

require('dotenv').config({ path: './backend/.env' });
const mongoose = require('mongoose');
const Achievement = require('./models/Achievement');
const Experience  = require('./models/Experience');
const Research    = require('./models/Research');
const Project     = require('./models/Project');
const Skill       = require('./models/Skill');
const Education   = require('./models/Education');
const Profile     = require('./models/Profile');

// ─── Data ──────────────────────────────────────────────────────────────────

const profileData = {
  name: "Rohit Sandip Birdawade",
  title: "AI & IoT Engineer",
  bio: "Aspiring AI & ML Engineer with a passion for building intelligent systems and solving real-world challenges through technology. Specialized in integrating hardware with smart software solutions.",
  about: "I am an enthusiastic engineering student dedicated to Artificial Intelligence and Internet of Things. I constantly seek out new challenges and actively participate in hackathons. My goal is to create impactful products that drive automation and efficiency.",
  email: "rohitbirdawade2875@gmail.com",
  location: "Pune, India",
  profileImage: "/profile.png",
  resumeLink: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/rohitbirdawade007",
    linkedin: "https://linkedin.com/in/rohit-birdawade-299b6b278",
    twitter: "https://twitter.com/rohitsb"
  }
};

const achievementsData = [
  {
    title: 'Excellence of the Year Award',
    organization: "Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering",
    date: 'Academic Year 2024–25',
    type: 'award',
    category: 'achievements',
    description: 'This prestigious award was conferred in recognition of outstanding contributions to technical and non-technical activities at University, State, and National levels.',
    image: "/lovable-uploads/ce935f5a-f5f3-4a0b-bae5-f403b99e1b88.png",
    images: [
      "/lovable-uploads/ce935f5a-f5f3-4a0b-bae5-f403b99e1b88.png",
      "/lovable-uploads/9e121016-b764-4662-9f3d-7a8d954cd754.png"
    ],
    highlights: [
      "Outstanding contributions to technical activities",
      "National and State level recognition",
      "Active involvement in institutional leadership",
      "Consistency in academic and project excellence"
    ],
    slug: 'excellence-of-the-year',
    hasDetailPage: true
  },
  {
    title: 'Student of the Computer Department',
    organization: "Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering",
    date: 'Academic Year 2024–25',
    type: 'award',
    category: 'achievements',
    description: 'This prestigious award was presented to recognize outstanding performance and achievements in both curricular and extracurricular activities throughout the graduation period.',
    image: "/lovable-uploads/859560b4-157c-4dc1-a07c-9c8ccbdb9c8d.png",
    images: [
      "/lovable-uploads/894da7a4-76d8-4fbd-b7a8-350ad577b1b6.png",
      "/lovable-uploads/b652b495-14ff-43e6-8db5-1a6865a68549.png",
      "/lovable-uploads/1f4a7524-974e-43ee-a52c-0068c3221a0b.png"
    ],
    highlights: [
      "Excellence in academic performance",
      "Leadership qualities and contribution to department",
      "Holistic development throughout graduation",
      "Peer mentoring and community impact"
    ],
    slug: 'student-of-computer-department',
    hasDetailPage: true
  },
  {
    title: '1st Prize at National Level Project Competition (NLPC-2025)',
    organization: 'IETE Pune Centre and MMCOE Pune',
    date: 'April 2025',
    type: 'competition',
    category: 'achievements',
    description: '🥇 First place winner at the prestigious National Level Project Competition for the project "AI and IoT Integration for Sustainable Agriculture".',
    image: "/lovable-uploads/7ab3b6a9-aa17-49fe-a240-7b9b8a2c9a68.png",
    images: [
      "/lovable-uploads/c2d55d26-227c-46bf-8a51-ea3877bc1083.png",
      "/lovable-uploads/99c9a67a-b0ae-42f3-97c6-0609b27b6eb8.png",
      "/lovable-uploads/7ab3b6a9-aa17-49fe-a240-7b9b8a2c9a68.png"
    ],
    highlights: [
      "National level recognition",
      "Evaluated by industry experts",
      "AI & IoT integration for Agriculture",
      "Innovative and sustainable solution"
    ],
    slug: 'nlpc-2025-first-prize-mmcoe',
    hasDetailPage: true
  },
  {
    title: 'State Level Project Competition - Participant',
    organization: 'Rajgad Dnyanpeeth Technical Campus',
    date: 'April 2025',
    type: 'competition',
    category: 'achievements',
    description: 'Participated in State Level Project Competition under Anant Nirmal Techutsav 2K25.',
    image: "/lovable-uploads/20e20354-9542-4315-a9ce-3976d34a7c89.png",
    slug: 'state-level-techutsav-2k25',
    hasDetailPage: true
  },
  {
    title: '1st Rank in Carrom Championship',
    organization: 'Rajgad Dnyanpeeth Technical Campus',
    date: '2024-25',
    type: 'award',
    category: 'extracurricular',
    description: '🥇 Secured the first rank in Carrom competition during Anantmahotsav 2024–25, demonstrating excellence in sports alongside academic pursuits.',
    image: "/lovable-uploads/b4a3c512-e6a1-42df-95ec-31a58de02a37.png",
    images: [
      "/lovable-uploads/b4a3c512-e6a1-42df-95ec-31a58de02a37.png"
    ],
    highlights: [
      "Secured 1st rank at Anantmahotsav 2024-25",
      "Demonstrated strategic thinking and precision",
      "Active participation in campus sports culture",
      "Balancing academic and athletic excellence"
    ],
    slug: 'carrom-first-rank',
    hasDetailPage: true
  }
];

const projectsData = [
  {
    title: "AI and IoT Integration for Sustainable Agriculture",
    problemStatement: "Farmers need data-driven insights to manage crop health and resources efficiently.",
    description: "An integrated AI & IoT system (Group 30810) that won 1st prize at NLPC-2025. It optimizes resource usage and detects crop anomalies in real-time.",
    tags: ["Python", "IoT Sensors", "FastAPI", "TensorFlow"],
    category: "AI & IoT",
    featured: true,
    image: "/lovable-uploads/336b76fb-a773-44ae-9862-2668262245b7.png",
    slug: 'sustainable-agriculture-ai-iot'
  },

  {
    title: "AI-Based Personalized Diet System",
    problemStatement: "Providing personalized nutrition advice based on health data is a complex task for traditional software.",
    description: "A machine learning application built with Python and Streamlit that predicts personalized diet categories based on health parameters like BMI and activity level.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "Machine Learning"],
    category: "Machine Learning",
    featured: true,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/rohitbirdawade007/Diet-Prediction-App",
    demoLink: "https://share.streamlit.io/",
    slug: 'ai-personalized-diet-system'
  }
];

const researchData = [
  {
    title: "A Review on AI and IoT Integration in Sustainable Agriculture",
    authors: "Rohit Birdawade, et al.",
    journal: "NCIRST-2025",
    year: "2025",
    status: "Published",
    description: "Comprehensive review of modern optimization techniques for sustainable farming using sensor networks and ML.",
    image: "/lovable-uploads/247ab65a-b250-4b85-bf9a-0417ac01dbfc.png",
    slug: 'ai-iot-sustainable-agriculture'
  }
];

const skillsData = [
  { name: "Python", category: "Languages", proficiency: 95, description: "Advanced scripting and ML modeling." },
  { name: "IoT & Embedded Systems", category: "Hardware", proficiency: 90, description: "Arduino and Raspberry Pi integration." },
  { name: "React & Next.js", category: "Frontend", proficiency: 85, description: "Modern web UI development." },
  { name: "Machine Learning (CNN/RNN)", category: "AI/ML", proficiency: 88, description: "Deep learning and neural networks." },
  { name: "FastAPI / Node.js", category: "Backend", proficiency: 82, description: "Scalable API development." },
  { name: "Computer Vision (OpenCV)", category: "AI/ML", proficiency: 85, description: "Image processing and face recognition." }
];

const educationData = [
  {
    institution: "Shri Chhatrapati Shivajiraje College of Engineering",
    degree: "BE - Computer Engineering",
    location: "Pune, India",
    startDate: "2021",
    endDate: "2025",
    description: "Focusing on AI, Machine Learning, and IoT. Excellence of the Year award winner (2024-25).",
    grade: "8.7 CGPA"
  }
];

const experienceData = [
  {
    company: 'UshaiTechLabs',
    role: 'Full Stack Developer',
    duration: '2024 – Present',
    techStack: ['React', 'Node.js', 'MongoDB'],
    description: 'Leading technical developments for internal dashboarding and lead management systems.',
    slug: 'ushai-tech-labs-fullstack'
  }
];

// ─── Seed Function ────────────────────────────────────────────────────────────

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB Atlas');

    // Profile
    await Profile.findOneAndUpdate({}, profileData, { upsert: true });
    console.log('✅ Seeded Profile');

    // Achievements
    for (const item of achievementsData) {
      await Achievement.findOneAndUpdate({ slug: item.slug }, item, { upsert: true });
    }
    console.log(`✅ Seeded ${achievementsData.length} achievements`);

    // Projects
    for (const item of projectsData) {
      await Project.findOneAndUpdate({ slug: item.slug }, item, { upsert: true });
    }
    console.log(`✅ Seeded ${projectsData.length} projects`);

    // Research
    for (const item of researchData) {
      await Research.findOneAndUpdate({ slug: item.slug }, item, { upsert: true });
    }
    console.log(`✅ Seeded ${researchData.length} research entries`);

    // Skills
    for (const item of skillsData) {
      await Skill.findOneAndUpdate({ name: item.name }, item, { upsert: true });
    }
    console.log(`✅ Seeded ${skillsData.length} skills`);

    // Education (just clear and re-add for simplicity as it has no unique slug usually)
    await Education.deleteMany({});
    await Education.insertMany(educationData);
    console.log(`✅ Seeded ${educationData.length} education entries`);

    // Experience
    for (const item of experienceData) {
      await Experience.findOneAndUpdate({ slug: item.slug }, item, { upsert: true });
    }
    console.log(`✅ Seeded ${experienceData.length} experience entries`);

    console.log('\n🎉 Database seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
}

seed();
