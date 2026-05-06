import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Download, Eye, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FALLBACK_RESEARCH } from '@/services/fallbackData';

const ResearchSection = () => {
  const navigate = useNavigate();
  const research = FALLBACK_RESEARCH[0];

  return (
    <section id="research" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mx-auto mb-4">Research & Thesis</h2>
            <p className="text-slate-500 font-medium text-lg uppercase tracking-widest italic">
              Academic Contributions & Final Year Project
            </p>
          </div>

          <Card className="border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Side: Info */}
              <div className="lg:col-span-7 p-10 md:p-14 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest">
                  <Award size={14} /> Final Year Thesis
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
                    {research.title}
                  </h3>
                  <p className="text-slate-500 font-bold flex items-center gap-2">
                    <FileText size={18} className="text-primary" /> {research.journal} | {research.year}
                  </p>
                </div>

                <div className="prose prose-slate font-medium text-slate-600">
                  <p>
                    This research work represents the culmination of my engineering studies, focusing on leveraging 
                    advanced Deep Learning architectures to solve critical challenges in modern agriculture. 
                    The thesis details the implementation, methodology, and experimental results of 
                    using DenseNet and EfficientNet for real-time disease detection.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    onClick={() => navigate('/thesis')}
                    className="h-16 px-10 bg-slate-900 hover:bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all flex items-center gap-3"
                  >
                    <BookOpen size={20} />
                    Read Thesis
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('/docs/thesis.pdf', '_blank')}
                    className="h-16 px-8 border-slate-200 rounded-2xl font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-3"
                  >
                    <Download size={20} />
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* Right Side: Visual Preview */}
              <div className="lg:col-span-5 bg-slate-50 p-10 flex items-center justify-center relative overflow-hidden border-l border-slate-100">
                <div 
                  className="relative cursor-pointer transition-transform duration-500 hover:scale-105"
                  onClick={() => navigate('/thesis')}
                >
                  {/* Book Mockup Appearance */}
                  <div className="w-56 h-80 bg-white shadow-[20px_20px_60px_rgba(0,0,0,0.1)] rounded-r-lg border border-slate-200 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-100 border-r border-slate-200 shadow-inner"></div>
                    <div className="p-8 pt-16 flex flex-col h-full">
                      <div className="w-12 h-1 text-primary bg-primary mb-6"></div>
                      <h4 className="text-lg font-black text-slate-900 leading-tight mb-4 uppercase">
                        Plant Disease Detection Thesis
                      </h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-auto">
                        Rohit Birdawade <br /> A.Y. 2024-25
                      </p>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                    <Eye size={24} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
