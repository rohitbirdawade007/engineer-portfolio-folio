
import { ArrowLeft, Trophy, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StudentAwardPage = () => {
  const navigate = useNavigate();

  const awardImages = [
    {
      src: "/lovable-uploads/894da7a4-76d8-4fbd-b7a8-350ad577b1b6.png",
      alt: "Award distribution stage photo",
      caption: "Award ceremony at Rajgad Dnyanpeeth's Technical Campus"
    },
    {
      src: "/lovable-uploads/b652b495-14ff-43e6-8db5-1a6865a68549.png",
      alt: "Close-up award acceptance",
      caption: "Receiving the award certificate on stage"
    },
    {
      src: "/lovable-uploads/1f4a7524-974e-43ee-a52c-0068c3221a0b.png",
      alt: "Award certificate",
      caption: "Official certificate - Student of the Computer Department"
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
              Student of the Computer Department
            </h1>
            <p className="text-xl text-gray-600 mb-6">Academic Year 2024–25</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>2024-25</span>
              </div>
            </div>
          </div>

          {/* Award Description */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Award</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              This prestigious award was presented to recognize outstanding performance and achievements in both curricular and extracurricular activities throughout the graduation period at Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Selection Criteria</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Excellence in academic performance throughout the academic year</li>
              <li>Active participation in extracurricular activities</li>
              <li>Leadership qualities and contribution to the department</li>
              <li>Overall dedication and commitment to personal and academic growth</li>
              <li>Positive impact on the college community and peers</li>
            </ul>
          </div>

          {/* Award Images Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Award Ceremony & Certificate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Recognition Details */}
          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Recognition Details</h3>
            <p className="text-gray-700 text-lg">
              This award represents the culmination of hard work, dedication, and excellence in the field of Computer Engineering. 
              It acknowledges not just academic achievement, but also the holistic development and contribution to the academic community 
              at Rajgad Dnyanpeeth's Shri Chhatrapati Shivajiraje College of Engineering.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentAwardPage;
