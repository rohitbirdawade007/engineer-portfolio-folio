import { ArrowLeft, Trophy, Calendar, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const NLPCSecondPrizePage = () => {
  const navigate = useNavigate();
  const teamMembers = [{
    name: "Rohit Birdawade",
    email: "rohitbirdawade2875@gmail.com",
    photo: "/lovable-uploads/0add4ee8-c5f3-4d3b-ad72-1a48807ce2ee.png"
  }, {
    name: "Shreya Bhosale",
    email: "shreyabhosale450@gmail.com",
    photo: "/lovable-uploads/0add4ee8-c5f3-4d3b-ad72-1a48807ce2ee.png"
  }, {
    name: "Shivanjali Dhumal",
    email: "shivanjalidhumal0707@gmail.com",
    photo: "/lovable-uploads/0add4ee8-c5f3-4d3b-ad72-1a48807ce2ee.png"
  }, {
    name: "Deepak Khaladkar",
    email: "deepakkhaladkar5412@gmail.com",
    photo: "/lovable-uploads/0add4ee8-c5f3-4d3b-ad72-1a48807ce2ee.png"
  }, {
    name: "Eshwar Abhay Gopad",
    email: "eshwargopad@gmail.com",
    photo: "/lovable-uploads/0add4ee8-c5f3-4d3b-ad72-1a48807ce2ee.png"
  }];
  return <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-8 hover:bg-gray-100">
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
              <Trophy size={40} className="text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              2nd Prize at National Level Project Competition
            </h1>
            <p className="text-xl text-gray-600 mb-6">NLPC-2025</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Institution of Electronics & Telecommunication Engineers (IETE) Pune Centre and Sinhgad College of Engineering Vadgaon Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>April 16, 2025</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Project: IoT in Sustainable Agriculture</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              🥈 Secured the second prize at the prestigious National Level Project Competition (NLPC-2025) hosted by the Institution of Electronics & Telecommunication Engineers (IETE) Pune Centre in collaboration with Sinhgad College of Engineering Vadgaon Pune. Our project focused on implementing IoT solutions for sustainable agriculture practices.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Competition Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>National level competition with participants from across India</li>
              <li>Rigorous evaluation process by industry experts and academics</li>
              <li>Focus on innovative solutions and technical excellence</li>
              <li>Organized by IETE Pune Centre, a prestigious technical institution</li>
              <li>Collaboration with Sinhgad College of Engineering for enhanced technical standards</li>
              <li>Final competition held on Wednesday, April 16, 2025</li>
            </ul>
          </div>

          {/* Team Members Section */}
          <div className="bg-orange-50 rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users size={28} className="text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">Team Members</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                      
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{member.name}</h4>
                      <p className="text-gray-600 text-sm">{member.email}</p>
                      <p className="text-orange-600 text-sm font-medium">Team Member</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Competition Images */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Competition Moments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img src="/lovable-uploads/0add4ee8-c5f3-4d3b-ad72-1a48807ce2ee.png" alt="Team at Sinhgad College of Engineering" className="w-full rounded-lg shadow-md" />
                <p className="text-center text-gray-600 text-sm">Team at Sinhgad College of Engineering</p>
              </div>
              <div className="space-y-4">
                <img src="/lovable-uploads/336b76fb-a773-44ae-9862-2668262245b7.png" alt="Project Demonstration" className="w-full rounded-lg shadow-md object-cover" />
                <p className="text-center text-gray-600 text-sm">Project Demonstration</p>
              </div>
            </div>
            
            <div className="mt-6">
              <img src="/lovable-uploads/18376493-2dcf-4260-9361-b185bb1f76d6.png" alt="Official Competition Results" className="w-full rounded-lg shadow-md" />
              <p className="text-center text-gray-600 text-sm mt-2">Official Competition Results Document</p>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Recognition Details</h3>
            <p className="text-gray-700 text-lg">
              This second prize recognition at NLPC-2025 demonstrates exceptional teamwork, technical skills, innovative thinking, and the ability to develop solutions that meet national standards. Our project on "IoT in Sustainable Agriculture" showcases our commitment to leveraging technology for agricultural advancement and sustainability.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default NLPCSecondPrizePage;