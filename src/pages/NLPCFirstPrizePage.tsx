
import { ArrowLeft, Trophy, Calendar, MapPin, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NLPCFirstPrizePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Trophy size={40} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              1st Prize at National Level Project Competition
            </h1>
            <p className="text-xl text-gray-600 mb-6">NLPC-2025</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Institution of Electronics & Telecommunication Engineers (IETE) Pune Centre and MMCOE Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>2025</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Achievement</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              🥇 Secured the first prize at the prestigious National Level Project Competition (NLPC-2025) hosted by the Institution of Electronics & Telecommunication Engineers (IETE) Pune Centre in collaboration with MMCOE Pune. This achievement represents excellence in technical innovation and project development at the national level.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Competition Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>National level competition with participants from across India</li>
              <li>Rigorous evaluation process by industry experts and academics</li>
              <li>Focus on innovative solutions and technical excellence</li>
              <li>Organized by IETE Pune Centre, a prestigious technical institution</li>
              <li>Collaboration with MMCOE Pune for enhanced technical standards</li>
            </ul>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Recognition Details</h3>
            <p className="text-gray-700 text-lg">
              This first prize recognition at NLPC-2025 demonstrates exceptional technical skills, innovative thinking, and the ability to develop solutions that meet national standards. It reflects dedication to excellence in engineering and technology.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NLPCFirstPrizePage;
