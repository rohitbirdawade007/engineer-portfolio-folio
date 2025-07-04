
import { ArrowLeft, BookOpen, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NCRISTResearchPaperPage = () => {
  const navigate = useNavigate();

  const images = [
    {
      src: "/lovable-uploads/247ab65a-b250-4b85-bf9a-0417ac01dbfc.png",
      alt: "NCRIST-2025 Certificate",
      caption: "Certificate of Appreciation for Research Paper Presentation at NCRIST-2025"
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
              <BookOpen size={40} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              A Review on AI and IoT Integration in Sustainable Agriculture
            </h1>
            <p className="text-xl text-gray-600 mb-6">NCRIST-2025 Research Paper Presentation</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Rajgad Dnyanpeeth Technical Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>2025</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Research Paper Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              📜 Presented a comprehensive research paper titled "A Review on AI and IoT Integration in Sustainable Agriculture" at the National Conference on Innovation & Research in Science & Technology (NCRIST-2025). This research explores the convergence of artificial intelligence and Internet of Things technologies in revolutionizing agricultural practices for sustainability.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Research Focus Areas</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Integration of AI algorithms in precision agriculture</li>
              <li>IoT sensor networks for real-time crop monitoring</li>
              <li>Sustainable farming practices through technology</li>
              <li>Data analytics for optimized resource utilization</li>
              <li>Smart irrigation and pest management systems</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">Conference Details</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>National Conference on Innovation & Research in Science & Technology (NCRIST-2025)</li>
              <li>Organized by Rajgad Dnyanpeeth Technical Campus</li>
              <li>Platform for sharing cutting-edge research in technology</li>
              <li>Peer-reviewed paper presentation</li>
              <li>Recognition for contribution to sustainable technology research</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Research Certificate</h2>
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
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Research Impact</h3>
            <p className="text-gray-700 text-lg">
              This research contributes to the growing body of knowledge in sustainable agriculture technology. The integration of AI and IoT represents the future of farming, addressing global challenges in food security and environmental sustainability.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NCRISTResearchPaperPage;
