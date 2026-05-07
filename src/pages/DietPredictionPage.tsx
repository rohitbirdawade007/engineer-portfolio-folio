import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Code, Database, BrainCircuit, BarChart3, Activity, HeartPulse, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { API_URL, predictDiet } from '@/services/api';

const DietPredictionPage = () => {
  const [formData, setFormData] = useState({
    age: "25",
    gender: "Male",
    height: "170",
    weight: "70",
    activity: "Medium"
  });
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);

    try {
      const result = await predictDiet({
        age: parseInt(formData.age),
        gender: formData.gender === 'Male' ? 1 : 0,
        height: parseFloat(formData.height),
        weight: parseFloat(formData.weight),
        bmi: parseFloat(formData.weight) / ((parseFloat(formData.height) / 100) ** 2),
        activity: formData.activity === 'Low' ? 0 : formData.activity === 'Medium' ? 1 : 2
      });

      if (result.success) {
        setPrediction(result.prediction);
        toast.success("Diet Recommendation Generated!");
      } else {
        toast.error(result.error || "ML Processing Error");
      }
    } catch (error) {
      toast.error("Network error. Is the ML backend online?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <a 
            href="https://github.com/rohitbirdawade007/Diet-Prediction-App" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            <Code size={16} />
            View Source
          </a>
        </div>
      </div>
      
      {/* Project Header */}
      <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-background py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center md:text-left">
          <Badge className="mb-4 bg-emerald-500 hover:bg-emerald-600">Machine Learning</Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            AI-Based Personalized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Diet Recommendation System
            </span>
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            <Badge variant="outline" className="border-emerald-200">Python</Badge>
            <Badge variant="outline" className="border-emerald-200">Scikit-Learn</Badge>
            <Badge variant="outline" className="border-emerald-200">Streamlit</Badge>
            <Badge variant="outline" className="border-emerald-200">Random Forest</Badge>
            <Badge variant="outline" className="border-emerald-200">EDA</Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 leading-relaxed">
            An intelligent healthcare application that leverages Machine Learning to predict suitable 
            diet categories based on individual health parameters, BMI, and physical activity levels.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Card */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BrainCircuit className="text-emerald-500" />
                Project Overview
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                <p>
                  Nutrition is the cornerstone of health, yet personalizing a diet is complex. This project 
                  bridges the gap between data science and nutrition by creating a robust predictive model 
                  that simplifies dietary choices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                    <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">The Problem</h4>
                    <p className="text-sm">Traditional diet apps often use static calculations. We needed a system that learns from multi-dimensional health data.</p>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-100 dark:border-teal-900/30">
                    <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">The Solution</h4>
                    <p className="text-sm">A Random Forest Classifier trained on diverse health datasets to categorize users into 5 specialized diet types.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Methodology */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Activity className="text-emerald-500" />
                Workflow & Methodology
              </h2>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Exploratory Data Analysis (EDA)", desc: "Analyzing correlations between BMI, age, and dietary requirements using Seaborn." },
                  { step: "02", title: "Feature Engineering", desc: "Preprocessing inputs and scaling numerical values using StandardScaler for model stability." },
                  { step: "03", title: "Model Training", desc: "Implementing a Random Forest algorithm with cross-validation to achieve 90%+ accuracy." },
                  { step: "04", title: "Deployment", desc: "Converting the Python logic into a real-world web app using Streamlit and Joblib." }
                ].map((m, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                    <span className="text-2xl font-black text-emerald-500/20">{m.step}</span>
                    <div>
                      <h4 className="font-bold">{m.title}</h4>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Live Demo Simulator */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
                <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
                  <span className="font-bold text-sm uppercase tracking-widest">Live Simulator</span>
                  <Activity size={16} />
                </div>
                <div className="p-6">
                  <form onSubmit={handlePredict} className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs">Age</Label>
                      <Input 
                        type="number" 
                        value={formData.age} 
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="bg-muted/50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs">Activity Level</Label>
                      <Select 
                        value={formData.activity} 
                        onValueChange={(val) => setFormData({...formData, activity: val})}
                      >
                        <SelectTrigger className="bg-muted/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low (Sedentary)</SelectItem>
                          <SelectItem value="Medium">Medium (Active)</SelectItem>
                          <SelectItem value="High">High (Athlete)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-xs">Weight (kg)</Label>
                        <Input 
                          type="number" 
                          value={formData.weight} 
                          onChange={(e) => setFormData({...formData, weight: e.target.value})}
                          className="bg-muted/50" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs">Height (cm)</Label>
                        <Input 
                          type="number" 
                          value={formData.height} 
                          onChange={(e) => setFormData({...formData, height: e.target.value})}
                          className="bg-muted/50" 
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 rounded-xl mt-4"
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="animate-spin" /> : "Generate Diet Recommendation"}
                    </Button>
                  </form>

                  {prediction && (
                    <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-500 text-center">
                      <p className="text-xs font-bold text-emerald-600 uppercase mb-1">Recommended Plan:</p>
                      <h3 className="text-xl font-black text-emerald-700">{prediction}</h3>
                      <p className="text-[10px] text-muted-foreground mt-2">Based on simulated inference</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 border border-dashed border-border text-center">
                <p className="text-xs text-muted-foreground mb-4">Want to see the real app live on Streamlit Cloud?</p>
                <Button variant="outline" className="w-full rounded-xl gap-2" asChild>
                  <a href="https://share.streamlit.io/" target="_blank" rel="noreferrer">
                    <ExternalLink size={14} />
                    Launch Real App
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="container mx-auto px-4 py-16 border-t border-border">
        <h2 className="text-2xl font-bold mb-10 text-center">Development Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Code className="text-emerald-500" />, name: "Python", desc: "Core Logic" },
            { icon: <Database className="text-emerald-500" />, name: "Pandas", desc: "Data Handling" },
            { icon: <BrainCircuit className="text-emerald-500" />, name: "Scikit-Learn", desc: "ML Engine" },
            { icon: <BarChart3 className="text-emerald-500" />, name: "Streamlit", desc: "Web UI" }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-card rounded-2xl border border-border flex flex-col items-center text-center group hover:border-emerald-500/50 transition-all shadow-sm">
              <div className="mb-4 p-3 bg-muted rounded-xl group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
                {s.icon}
              </div>
              <h4 className="font-bold mb-1">{s.name}</h4>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Loader2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-loader-2 ${className}`}
  >
    <path d="M12 2v4" />
    <path d="m16.2 7.8 2.9-2.9" />
    <path d="M18 12h4" />
    <path d="m16.2 16.2 2.9 2.9" />
    <path d="M12 18v4" />
    <path d="m4.9 19.1 2.9-2.9" />
    <path d="M2 12h4" />
    <path d="m4.9 4.9 2.9 2.9" />
  </svg>
);

export default DietPredictionPage;
