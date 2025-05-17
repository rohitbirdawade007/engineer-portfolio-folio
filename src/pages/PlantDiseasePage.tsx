
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, Code, Image, Cpu, FlaskConical, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const PlantDiseasePage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // Simulate prediction (in real app, this would call the ML model)
        simulatePrediction();
      };
      reader.readAsDataURL(file);
    }
  };
  
  const simulatePrediction = () => {
    // Simulating a prediction result after a short delay
    setTimeout(() => {
      const diseases = [
        "Healthy",
        "Early Blight",
        "Late Blight",
        "Bacterial Spot",
        "Leaf Mold",
        "Septoria Leaf Spot",
        "Target Spot",
        "Mosaic Virus",
        "Yellow Leaf Curl Virus",
        "Powdery Mildew"
      ];
      const randomIndex = Math.floor(Math.random() * diseases.length);
      setPrediction(diseases[randomIndex]);
    }, 1500);
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Plant Disease Classification using DenseNet</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">Deep Learning</Badge>
            <Badge variant="secondary">Keras</Badge>
            <Badge variant="secondary">TensorFlow</Badge>
            <Badge variant="secondary">Image Classification</Badge>
            <Badge variant="secondary">DenseNet201</Badge>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            A deep learning application that uses DenseNet201 architecture to classify plant diseases 
            from leaf images with high accuracy, providing farmers with a tool for early disease detection.
          </p>
        </div>
      </div>
      
      {/* Project Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <ul className="list-disc list-inside space-y-3 text-card-foreground">
            <li>DenseNet-based model trained on a comprehensive plant leaf disease dataset</li>
            <li>Achieved 94% accuracy across 10 different plant disease classes</li>
            <li>Trained using Keras and TensorFlow with data augmentation techniques</li>
            <li>Optimized for both accuracy and inference speed to support real-time applications</li>
            <li>Implemented transfer learning to leverage pre-trained weights on ImageNet</li>
          </ul>
        </div>
      </div>
      
      {/* Classification Report */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Classification Report</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <div className="mb-8">
            <img 
              src="/placeholder.svg" 
              alt="Classification Report" 
              className="mx-auto max-w-full h-auto rounded-md border border-border"
              style={{ maxHeight: "500px" }}
            />
            <p className="text-center text-sm text-gray-500 mt-2">Classification Report Visualization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-primary/5 rounded-lg p-4 text-center">
              <h3 className="font-medium text-gray-600 mb-2">Accuracy</h3>
              <p className="text-3xl font-bold text-primary">94%</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-4 text-center">
              <h3 className="font-medium text-gray-600 mb-2">Macro F1-Score</h3>
              <p className="text-3xl font-bold text-primary">88%</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-4 text-center">
              <h3 className="font-medium text-gray-600 mb-2">Weighted F1-Score</h3>
              <p className="text-3xl font-bold text-primary">94%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Testing Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Live Testing</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <p className="text-gray-600 mb-8">
            Upload a plant leaf image to test the model's prediction capabilities.
            The model will classify the image and display the predicted disease.
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
                    alt="Uploaded leaf" 
                    className="max-w-full max-h-full object-contain rounded"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600">Upload a plant leaf image</p>
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
                    Confidence: {Math.floor(85 + Math.random() * 15)}%
                  </p>
                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Note: This is a simulated prediction. In a production environment, 
                      this would use the actual trained DenseNet model to analyze the image.
                    </p>
                  </div>
                </div>
              ) : selectedImage ? (
                <div className="text-center">
                  <div className="animate-pulse mb-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>
                  <p className="text-gray-600">Analyzing image...</p>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <BarChart2 className="mx-auto h-16 w-16 opacity-30 mb-3" />
                  <p>Upload an image to see predictions</p>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">TensorFlow</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Keras</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Image className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">OpenCV</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <BarChart2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">NumPy</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">DenseNet201</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Tkinter</h3>
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

export default PlantDiseasePage;
