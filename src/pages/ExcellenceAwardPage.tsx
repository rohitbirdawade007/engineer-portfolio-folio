
import { ArrowLeft, Trophy, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ExcellenceAwardPage = () => {
  const navigate = useNavigate();

  const awardImages = [
    {
      src: "/lovable-uploads/ce935f5a-f5f3-4a0b-bae5-f403b99e1b88.png",
      alt: "Excellence Award ceremony photo",
      caption: "Excellence of the Year Award ceremony at Rajgad Dnyanpeeth's Technical Campus"
    },
    {
      src: "/lovable-uploads/9e121016-b764-4662-9f3d-7a8d954cd754.png",
      alt: "Award certificate and recognition",
      caption: "Official recognition certificate for Excellence of the Year"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Button>

          {/* Award Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Trophy size={40} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Excellence of the Year Award
            </h1>
            <p className="text-xl text-gray-600 mb-6">Academic Year 2024–25</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>A.Y. 2024-25</span>
              </div>
            </div>
          </div>

          {/* Award Description */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Award</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              This prestigious award was conferred upon me in recognition of outstanding contributions to technical and non-technical activities at University, State, and National levels during A.Y. 2024–25. This milestone is a reflection of consistent efforts, innovation, and active involvement across diverse platforms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Technical Contributions
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Delivering impactful AI/ML solutions and projects at University, State, and National levels</li>
                  <li>Active participation and leadership in technical hackathons, conferences, and workshops</li>
                  <li>Publishing innovative research in AI and data science</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Non-Technical Contributions
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Driving cultural and leadership initiatives within student bodies and communities</li>
                  <li>Mentoring peers and organizing knowledge-sharing sessions</li>
                  <li>Representing the institution in inter-collegiate and national forums</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Award Images Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Award Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awardImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <blockquote className="text-2xl font-bold mb-4 text-gray-900 italic">
              "This award motivates me to push boundaries and continue contributing towards innovation and excellence."
            </blockquote>
            <p className="text-gray-600">
              This recognition reflects the dedication to excellence and the commitment to making a meaningful impact in both technical and non-technical domains.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExcellenceAwardPage;
