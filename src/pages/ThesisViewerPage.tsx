import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThesisFlipbook from '@/components/ThesisFlipbook';

const ThesisViewerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Immersive Header */}
      <header className="p-6 md:px-12 flex items-center justify-between z-20 bg-slate-900/50 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 rounded-xl gap-2 font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Button>
          <div className="hidden md:block w-px h-6 bg-white/10"></div>
          <div className="hidden md:block">
            <h1 className="text-sm font-black uppercase tracking-tighter italic">Thesis Review Module</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Interactive 3D Viewport V2.0</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-white hover:bg-white/10 rounded-xl hidden sm:flex">
            <Share2 size={18} />
          </Button>
          <Button 
            onClick={() => window.open('/docs/thesis.pdf', '_blank')}
            className="bg-primary hover:bg-primary/90 text-white rounded-xl font-bold uppercase tracking-widest text-xs px-6 h-11 flex items-center gap-2"
          >
            <Download size={18} />
            Get PDF
          </Button>
        </div>
      </header>

      {/* Immersive Viewport */}
      <main className="flex-1 relative flex flex-col items-center justify-center p-4 md:p-10 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* The Book */}
        <div className="w-full max-w-6xl flex-1 flex items-center justify-center relative z-10">
          <ThesisFlipbook />
        </div>

        {/* Footer Guidance */}
        <div className="mt-8 flex flex-col items-center gap-4 text-slate-400">
           <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
             <span className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
               Drag edges to flip
             </span>
             <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
             <span>Click to turn</span>
             <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
             <span>Use Arrow Keys</span>
           </div>
           
           <div className="px-6 py-2 bg-white/5 rounded-full border border-white/5 flex items-center gap-2">
             <Info size={14} className="text-primary" />
             <p className="text-[10px] font-medium text-slate-300">Optimized for Desktop & Tablet Viewport</p>
           </div>
        </div>
      </main>

      {/* Decorative side numbers like in the user image */}
      <div className="fixed left-12 bottom-12 opacity-5 pointer-events-none hidden lg:block">
        <span className="text-[200px] font-black leading-none select-none">01</span>
      </div>
      <div className="fixed right-12 top-12 opacity-5 pointer-events-none hidden lg:block">
        <span className="text-[200px] font-black leading-none select-none">04</span>
      </div>
    </div>
  );
};

export default ThesisViewerPage;
