
import { ArrowLeft, Trophy, Calendar, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectXpoThirdPrizePage = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Rohit Birdawade",
      email: "rohitbirdawade2875@gmail.com",
      photo: "/lovable-uploads/3d4df8d1-165e-47d2-99a4-6368519d90a6.png"
    },
    {
      name: "Shreya Bhosale",
      email: "shreyabhosale450@gmail.com",
      photo: "/lovable-uploads/597be9e4-d89a-4aec-a43b-a7d52b436188.png"
    },
    {
      name: "Shivanjali Dhumal",
      email: "shivanjalidhumal0707@gmail.com",
      photo: "/lovable-uploads/169a5acf-d027-473e-b93d-3a47ebb17d24.png"
    },
    {
      name: "Deepak Khaladkar",
      email: "deepakkhaladkar5412@gmail.com",
      photo: "/lovable-uploads/24710846-8465-4d94-bd52-012410ec4cde.png"
    },
    {
      name: "Eshwar Abhay Gopad",
      email: "eshwargopad@gmail.com",
      photo: "/lovable-uploads/5bc67c5b-d081-4a51-95a0-808aacaa6201.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-8 hover:bg-gray-100">
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-6">
              <Trophy size={40} className="text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              3rd Prize at ProjectXpo
            </h1>
            <p className="text-xl text-gray-600 mb-6">BharatiYugam 2025</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Bharati Vidyapeeth College of Engineering for Women, Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>2025</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Project Achievement</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              🥉 Secured the third prize at ProjectXpo during BharatiYugam 2025, hosted by Bharati Vidyapeeth College of Engineering for Women, Pune. Our innovative project showcased technical excellence and creative problem-solving capabilities.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Competition Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Part of the prestigious BharatiYugam 2025 technical festival</li>
              <li>Rigorous evaluation process by industry experts and faculty</li>
              <li>Focus on innovative solutions and project implementation</li>
              <li>Organized by Bharati Vidyapeeth College of Engineering for Women</li>
              <li>Competitive environment with participants from various institutions</li>
              <li>Recognition for technical innovation and presentation skills</li>
            </ul>
          </div>

          {/* Team Members Section */}
          <div className="bg-amber-50 rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users size={28} className="text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900">Team Members</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{member.name}</h4>
                      <p className="text-gray-600 text-sm">{member.email}</p>
                      <p className="text-amber-600 text-sm font-medium">Team Member</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competition Images */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Competition Moments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/90c89518-00da-4a4c-a77b-4bec32cffe86.png" 
                  alt="Certificate of Merit - ProjectXpo Third Prize" 
                  className="w-full rounded-lg shadow-md" 
                />
                <p className="text-center text-gray-600 text-sm">Certificate of Merit - ProjectXpo Third Prize</p>
              </div>
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/aa11def7-b7bc-499a-b755-3bf90ca84901.png" 
                  alt="Award Ceremony Moment" 
                  className="w-full rounded-lg shadow-md object-cover" 
                />
                <p className="text-center text-gray-600 text-sm">Award Ceremony Moment</p>
              </div>
            </div>
            
            <div className="mt-6">
              <img 
                src="/lovable-uploads/24eedcb9-55c7-4c6d-b69e-84ea08631558.png" 
                alt="Team at BharatiYugam 2025" 
                className="w-full rounded-lg shadow-md" 
              />
              <p className="text-center text-gray-600 text-sm mt-2">Team at BharatiYugam 2025</p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Recognition Details</h3>
            <p className="text-gray-700 text-lg">
              This third prize recognition at ProjectXpo during BharatiYugam 2025 demonstrates our team's technical competency, innovative thinking, and collaborative skills. The achievement reflects our commitment to excellence in project development and presentation at prestigious technical competitions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectXpoThirdPrizePage;
