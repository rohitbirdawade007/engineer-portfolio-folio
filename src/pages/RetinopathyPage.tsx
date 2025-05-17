
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, FileChartLine, FileText, Eye, BarChart2, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const RetinopathyPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // Simulate prediction
        simulatePrediction();
      };
      reader.readAsDataURL(file);
    }
  };
  
  const simulatePrediction = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">🧿 Diabetic Retinopathy Detection Using Deep Learning</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">TensorFlow</Badge>
            <Badge variant="secondary">Keras</Badge>
            <Badge variant="secondary">CNN</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Matplotlib</Badge>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Can AI help protect your vision? This project answers with a resounding yes. We built a Convolutional Neural Network that classifies retinal fundus images into Diabetic Retinopathy, Cataract, Glaucoma, or Normal with remarkable precision.
          </p>
        </div>
      </div>
      
      {/* Project Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <p className="mb-6">
            Trained over 100 epochs, the model reaches 88% accuracy and 99% precision for Diabetic Retinopathy — making it a powerful tool to assist early diagnosis in ophthalmology.
          </p>
          
          <h3 className="text-xl font-bold mb-4">🔬 Why it matters:</h3>
          <p className="mb-6">
            Early detection of eye diseases can prevent irreversible vision loss. This system can help doctors prioritize patients and improve clinical efficiency, especially in underserved areas.
          </p>
          
          <h3 className="text-xl font-bold mb-4">📈 Key Metrics:</h3>
          <ul className="list-disc list-inside space-y-3 text-card-foreground mb-6">
            <li><span className="font-medium">✅ Accuracy:</span> 88%</li>
            <li><span className="font-medium">🎯 F1-Score (Macro):</span> 0.88</li>
            <li><span className="font-medium">🧠 Precision for Diabetic Retinopathy:</span> 0.99</li>
            <li><span className="font-medium">📉 Training:</span> Smooth and consistent with no overfitting</li>
          </ul>
        </div>
      </div>
      
      {/* Training Performance */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Training Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-xl font-bold mb-4 text-center">Model Accuracy</h3>
            <img 
              src="/lovable-uploads/f237fe79-8fe6-4989-b226-f0fb36f774e0.png" 
              alt="Model Accuracy Graph" 
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Training and validation accuracy over 100 epochs
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-xl font-bold mb-4 text-center">Model Loss</h3>
            <img 
              src="/lovable-uploads/7e33ad08-b144-4e93-8cc8-49929b7c8a04.png" 
              alt="Model Loss Graph" 
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Training and validation loss over 100 epochs
            </p>
          </div>
        </div>
      </div>
      
      {/* Classification Report */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Classification Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-xl font-bold mb-4 text-center">Classification Metrics</h3>
            <img 
              src="/lovable-uploads/ef55f781-b0f4-4aa6-96f3-17ceb6aef075.png" 
              alt="Classification Report" 
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Precision, Recall, and F1-score for each class
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-xl font-bold mb-4 text-center">Confusion Matrix</h3>
            <img 
              src="/lovable-uploads/2c56ba24-45aa-4cbc-9fda-6e5847bc3ebc.png" 
              alt="Confusion Matrix" 
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Confusion matrix showing model predictions vs actual classes
            </p>
          </div>
        </div>
      </div>
      
      {/* Live Testing Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Live Testing</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <p className="text-gray-600 mb-8">
            Upload a retinal fundus image to test the model's prediction capabilities.
            The model will classify the image into one of four categories: Diabetic Retinopathy, Cataract, Glaucoma, or Normal.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
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
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
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
                <div className="btn-primary w-full text-center cursor-pointer py-2">
                  Choose Image
                </div>
              </label>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Prediction Result</h3>
              {prediction ? (
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-gradient">{prediction}</div>
                  <p className="text-gray-600">
                    Confidence: {prediction === "Diabetic Retinopathy" ? "99%" : 
                               prediction === "Cataract" ? "92%" : 
                               prediction === "Glaucoma" ? "81%" : "79%"}
                  </p>
                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Note: This is a simulated prediction. In a production environment, 
                      this would use the actual trained CNN model to analyze the image.
                    </p>
                  </div>
                </div>
              ) : isAnalyzing ? (
                <div className="text-center">
                  <div className="animate-pulse mb-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>
                  <p className="text-gray-600">Analyzing image...</p>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Eye className="mx-auto h-16 w-16 opacity-30 mb-3" />
                  <p>Upload an image to see the diagnosis</p>
                </div>
              )}
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
                <BarChart2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Matplotlib</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Portfolio */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default RetinopathyPage;
