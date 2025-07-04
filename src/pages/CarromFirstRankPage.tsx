
import { ArrowLeft, Trophy, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CarromFirstRankPage = () => {
  const navigate = useNavigate();

  const images = [
    {
      src: "/lovable-uploads/b4a3c512-e6a1-42df-95ec-31a58de02a37.png",
      alt: "Carrom Championship Certificate",
      caption: "Certificate of Excellence for 1st Rank in Carrom - Anantmahotsav 2024-25"
    }
  ];

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
              1st Rank in Carrom Championship
            </h1>
            <p className="text-xl text-gray-600 mb-6">Anantmahotsav 2024–25</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Rajgad Dnyanpeeth Technical Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>2024-25</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Achievement</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              🥇 Secured the first rank in Carrom competition during Anantmahotsav 2024–25, the annual sports festival of Rajgad Dnyanpeeth Technical Campus. This achievement demonstrates excellence in sports alongside academic pursuits, showcasing a well-rounded personality and competitive spirit.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Competition Details</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Part of the annual Anantmahotsav sports festival</li>
              <li>Competitive tournament with participants from various departments</li>
              <li>Demonstrates strategic thinking and precision in gameplay</li>
              <li>Recognition for excellence in extracurricular activities</li>
              <li>Contribution to overall sports culture at the institution</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Championship Certificate</h2>
            <div className="grid grid-cols-1 gap-6">
              {images.map((image, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 object-contain bg-gray-50"
                  />
                  <div className="p-4">
                    <p className="text-gray-600 text-sm text-center">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Sports Excellence</h3>
            <p className="text-gray-700 text-lg">
              This championship reflects the importance of maintaining a balance between academic excellence and sports participation. It demonstrates strategic thinking, competitive spirit, and the ability to excel in diverse fields beyond academics.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarromFirstRankPage;
