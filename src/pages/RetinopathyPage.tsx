
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, FileChartLine, FileText, Eye, BarChart2, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const RetinopathyPage = () => {
  const [selectedModel, setSelectedModel] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleModelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedModel(file);
    }
  };
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handlePrediction = () => {
    if (!selectedModel || !selectedImage) return;
    
    setIsAnalyzing(true);
    // Simulate a prediction result after a short delay
    setTimeout(() => {
      const conditions = [
        "Diabetic Retinopathy",
        "Cataract",
        "Glaucoma",
        "Normal"
      ];
      // Weight towards Diabetic Retinopathy to match project description
      const weights = [0.4, 0.2, 0.2, 0.2];
      let random = Math.random();
      let condition = "";
      let sum = 0;
      for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (random <= sum) {
          condition = conditions[i];
          break;
        }
      }
      setPrediction(condition);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-10 bg-background border-b border-border shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </div>
      
      {/* Project Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">🧿 Diabetic Retinopathy Detection – Upload Your Own Model</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">TensorFlow</Badge>
            <Badge variant="secondary">Keras</Badge>
            <Badge variant="secondary">Flask/FastAPI</Badge>
            <Badge variant="secondary">CNN</Badge>
            <Badge variant="secondary">Python</Badge>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Build. Upload. Diagnose. Take control of the AI pipeline by uploading your own trained model! 
            This interface allows you to test your custom CNN models on retinal fundus images.
          </p>
        </div>
      </div>
      
      {/* Project Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <p className="mb-6">
            This setup empowers researchers and developers to validate and showcase their models with real input data.
            Upload your trained model and test it against retinal images to detect various conditions.
          </p>
          
          <h3 className="text-xl font-bold mb-4">🧠 How it works:</h3>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Upload your trained model file (.h5 or .pkl)</li>
            <li>Upload a retinal image (JPEG or PNG)</li>
            <li>The system will use your model in the backend to analyze the image</li>
            <li>Get instant predictions with class probabilities</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-4">🔧 Features:</h3>
          <ul className="list-disc list-inside space-y-3 text-card-foreground mb-6">
            <li>Plug-and-play for any compatible CNN model</li>
            <li>Backend inference with uploaded model</li>
            <li>Visual output + class label</li>
            <li>Logs prediction confidence scores</li>
          </ul>
          
          <p className="text-primary font-medium">
            🩺 Empower ophthalmic AI research with customizable model testing.
          </p>
        </div>
      </div>
      
      {/* Live Testing Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Model Testing Interface</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <p className="text-gray-600 mb-8">
            Upload your trained model and a retinal fundus image to test your model's prediction capabilities.
            The system will classify the image into one of four categories: Diabetic Retinopathy, Cataract, Glaucoma, or Normal.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              {/* Model Upload */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Step 1: Upload Your Model</h3>
                <div 
                  className={`w-full border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 mb-4 
                  ${selectedModel ? 'border-primary/50 bg-primary/5' : 'border-gray-300 bg-gray-50'}`}
                >
                  <div className="text-center p-4">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600">
                      {selectedModel ? `Model selected: ${selectedModel.name}` : 'Upload your trained model'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">.h5 or .pkl format</p>
                  </div>
                </div>
                
                <label className="w-full">
                  <input 
                    type="file"
                    accept=".h5,.pkl"
                    className="hidden"
                    onChange={handleModelUpload}
                  />
                  <Button variant="outline" className="w-full">
                    <Upload size={16} className="mr-2" />
                    Select Model
                  </Button>
                </label>
              </div>
              
              {/* Image Upload */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Step 2: Upload Test Image</h3>
                <div 
                  className={`w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 mb-4 
                  ${selectedImage ? 'border-primary/50 bg-primary/5' : 'border-gray-300 bg-gray-50'}`}
                >
                  {selectedImage ? (
                    <img 
                      src={selectedImage} 
                      alt="Uploaded retinal image" 
                      className="max-w-full max-h-full object-contain rounded"
                    />
                  ) : (
                    <div className="text-center">
                      <Eye className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                      <p className="text-sm text-gray-600">Upload a retinal fundus image</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG or JPEG</p>
                    </div>
                  )}
                </div>
                
                <label className="w-full">
                  <input 
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <Button variant="outline" className="w-full">
                    <Upload size={16} className="mr-2" />
                    Select Image
                  </Button>
                </label>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Step 3: Get Prediction</h3>
              <div className="bg-gray-50 rounded-lg p-6 flex flex-col flex-grow">
                <div className="mb-6 flex-grow">
                  <h4 className="text-xl font-semibold mb-4 text-center">Prediction Result</h4>
                  {prediction ? (
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2 text-primary">{prediction}</div>
                      <p className="text-gray-600 mb-4">
                        Confidence: {prediction === "Diabetic Retinopathy" ? "93%" : 
                                   prediction === "Cataract" ? "89%" : 
                                   prediction === "Glaucoma" ? "85%" : "91%"}
                      </p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Diabetic Retinopathy:</span>
                          <span className="font-medium">{prediction === "Diabetic Retinopathy" ? "93%" : "2%"}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Cataract:</span>
                          <span className="font-medium">{prediction === "Cataract" ? "89%" : "3%"}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Glaucoma:</span>
                          <span className="font-medium">{prediction === "Glaucoma" ? "85%" : "4%"}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Normal:</span>
                          <span className="font-medium">{prediction === "Normal" ? "91%" : "1%"}</span>
                        </div>
                      </div>
                    </div>
                  ) : isAnalyzing ? (
                    <div className="text-center">
                      <div className="animate-pulse mb-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                      </div>
                      <p className="text-gray-600">Analyzing image with your model...</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 flex flex-col items-center justify-center h-48">
                      <FileChartLine className="h-16 w-16 opacity-30 mb-3" />
                      <p>Upload your model and an image to get a prediction</p>
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={handlePrediction} 
                  disabled={!selectedModel || !selectedImage || isAnalyzing}
                  className="w-full"
                >
                  {isAnalyzing ? "Analyzing..." : "Run Prediction"}
                </Button>
                
                <div className="mt-4 p-4 bg-secondary/10 rounded-lg text-sm text-gray-600">
                  <p>
                    Note: This is a simulated prediction. In a production environment, 
                    this would use your actual uploaded model to analyze the image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech Stack */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Python</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">TensorFlow</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Keras</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">CNN</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <FileChartLine className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Flask/FastAPI</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Portfolio */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default RetinopathyPage;
