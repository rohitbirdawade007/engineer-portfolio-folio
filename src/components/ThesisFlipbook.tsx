import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Award, Book, ShieldCheck, Microscope, Cpu, Droplets, Wind, Layout } from 'lucide-react';

interface PageProps {
  number: number;
  children: React.ReactNode;
  header?: string;
  isCover?: boolean;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={`bg-white border border-slate-200 shadow-inner overflow-hidden flex flex-col ${props.isCover ? 'bg-slate-900 text-white' : ''}`} ref={ref}>
      <div className="relative flex-1 flex flex-col overflow-hidden">
        {/* Page Content */}
        <div className="p-10 md:p-14 flex-1 flex flex-col">
          {props.header && !props.isCover && (
            <div className="mb-8 border-b border-slate-100 pb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">
                {props.header}
              </span>
            </div>
          )}
          <div className="flex-1 flex flex-col leading-relaxed">
            {props.children}
          </div>
        </div>

        {/* Decorative Spine Shadow */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
      </div>

      {/* Footer */}
      {!props.isCover && (
        <div className="h-12 bg-white border-t border-slate-50 flex items-center justify-between px-10 z-10">
          <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Sustainable Agriculture Node • R. Birdawade</span>
          <span className="text-[10px] font-black text-slate-400 italic">{props.number}</span>
        </div>
      )}
    </div>
  );
});

Page.displayName = 'Page';

const ThesisFlipbook = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative group">
        {/* @ts-ignore */}
        <HTMLFlipBook 
          width={450} 
          height={600} 
          size="stretch"
          minWidth={300}
          maxWidth={800}
          minHeight={400}
          maxHeight={1000}
          maxShadowOpacity={0.3}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden"
          style={{ margin: '0 auto' }}
          usePortrait={false}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          autoSize={true}
        >
          {/* COVER PAGE */}
          <div className="bg-slate-900 text-white p-16 flex flex-col items-center justify-center text-center relative overflow-hidden" data-density="hard">
            <div className="absolute top-0 left-0 bottom-0 w-10 bg-black/40 border-r border-white/5 shadow-2xl" />
            <div className="w-16 h-1 bg-primary mb-12" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Final Year Project Report</span>
            <h1 className="text-3xl md:text-4xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
              AI and IoT Integration in Sustainable Agriculture
            </h1>
            <div className="space-y-4 mb-16 opacity-80">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Submitted to Savitribai Phule Pune University</p>
              <p className="text-[10px] font-medium italic">Academic Year 2024 - 2025</p>
            </div>
            <div className="mt-auto border-t border-white/10 pt-10 w-full">
              <p className="text-lg font-black uppercase tracking-widest italic text-primary">Rohit Sandip Birdawade</p>
              <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-black">Bachelor of Engineering • Computer Science</p>
            </div>
          </div>

          {/* PAGE 1: ACKNOWLEDGMENT */}
          <Page number={1} header="Acknowledgment">
            <div className="flex justify-center mb-8">
              <Award className="text-primary w-12 h-12" />
            </div>
            <h2 className="text-2xl font-black mb-8 text-slate-900 uppercase tracking-tighter italic border-b-2 border-primary w-fit pb-2">Acknowledgment</h2>
            <div className="space-y-6 text-sm text-slate-600 font-medium leading-relaxed italic">
              <p>
                "It gives us great pleasure to present the project report on <strong className="text-slate-900 uppercase tracking-tight">'AI and IoT Integration in Sustainable Agriculture'</strong>."
              </p>
              <p>
                We would like to take this opportunity to thank our internal guide <strong className="text-slate-900">Prof. Dr. S. B. Patil</strong> for providing us with guidance and support. We are grateful for their kind assistance and valuable suggestions.
              </p>
              <p>
                We also extend our thanks to all staff members and our project coordinator <strong className="text-slate-900">Prof. A. C. Jadhav</strong> for his valuable guidance.
              </p>
            </div>
          </Page>

          {/* PAGE 2: ABSTRACT */}
          <Page number={2} header="Thesis Abstract">
            <div className="flex justify-center mb-8 text-primary">
              <Microscope size={48} />
            </div>
            <h2 className="text-2xl font-black mb-6 text-slate-900 uppercase tracking-tighter italic border-b-2 border-primary w-fit pb-2">Abstract</h2>
            <div className="space-y-4 text-[13px] text-slate-600 font-medium leading-relaxed">
              <p>
                Agriculture is undergoing a digital transformation driven by <strong className="text-slate-900 italic">Artificial Intelligence (AI) and the Internet of Things (IoT)</strong>. This project presents a unified monitoring system for sustainable farming, integrating IoT sensors to track soil moisture, pH, and atmospheric conditions.
              </p>
              <p>
                The system utilizes <strong className="text-primary uppercase">YOLOv5 Deep Learning</strong> models to identify nutrient deficiencies in plant leaves from real-time images. By combining these technologies, we enable precise resource management and early disease detection.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Key Research Nodes:</p>
                <div className="flex flex-wrap gap-2">
                  {['Real-time Monitoring', 'Smart Agriculture', 'YOLOv5', 'IoT Sensors', 'Sustainability'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Page>

          {/* PAGE 3: INTRODUCTION */}
          <Page number={3} header="Chapter 01: Introduction">
            <h2 className="text-2xl font-black mb-8 text-slate-900 uppercase tracking-tighter italic border-b-2 border-primary w-fit pb-2">I. Overview</h2>
            <div className="space-y-6 text-[13px] text-slate-600 font-medium leading-relaxed">
              <p>
                As the global population continues to rise, the demand for food is increasing at an unprecedented rate. Traditional farming methods often need help to meet this demand due to limitations such as dwindling arable land, water scarcity, and environmental degradation.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
                  <Cpu className="text-primary mb-2" size={24} />
                  <span className="text-[9px] font-black uppercase text-slate-900">Neural Node</span>
                  <span className="text-[8px] text-slate-400">Pattern Recognition</span>
                </div>
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
                  <Droplets className="text-primary mb-2" size={24} />
                  <span className="text-[9px] font-black uppercase text-slate-900">IoT Fluidics</span>
                  <span className="text-[8px] text-slate-400">Precision Irrigation</span>
                </div>
              </div>
              <p>
                AI enables machines to mimic human intelligence—processing data and identifying patterns—while IoT connects sensors to the internet for real-time remote monitoring.
              </p>
            </div>
          </Page>

          {/* PAGE 4: METHODOLOGY */}
          <Page number={4} header="Chapter 03: Methodology">
            <h2 className="text-2xl font-black mb-8 text-slate-900 uppercase tracking-tighter italic border-b-2 border-primary w-fit pb-2">III. Architecture</h2>
            <div className="space-y-6">
              <div className="p-6 bg-slate-900 text-white rounded-[2rem] relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 p-4 opacity-20"><Layout size={64} /></div>
                 <h3 className="text-primary font-black uppercase tracking-widest text-[10px] mb-4">Core Processing Pipeline</h3>
                 <ul className="space-y-3">
                   <li className="flex items-start gap-3 text-[11px]">
                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" />
                     <span><strong>Node 01:</strong> Real-time Environmental Sensing (DHT11, pH, Turbidity)</span>
                   </li>
                   <li className="flex items-start gap-3 text-[11px]">
                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" />
                     <span><strong>Node 02:</strong> YOLOv5 Image Inference on Raspberry Pi 3B+</span>
                   </li>
                   <li className="flex items-start gap-3 text-[11px]">
                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" />
                     <span><strong>Node 03:</strong> Cloud Integration (ThingSpeak & Blynk Cloud)</span>
                   </li>
                 </ul>
              </div>
              <p className="text-[12px] text-slate-500 font-medium italic">
                "The objective is to create a low-cost, user-friendly solution that enhances farm productivity while promoting sustainability."
              </p>
            </div>
          </Page>

          {/* BACK COVER */}
          <div className="bg-slate-900 text-white p-16 flex flex-col items-center justify-center text-center relative overflow-hidden" data-density="hard">
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-black/40 border-l border-white/5 shadow-2xl" />
            <div className="mb-10 w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border-2 border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                <span className="text-primary font-black text-3xl italic tracking-tighter">RB</span>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase italic tracking-tighter">Technical Archive</h3>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12">End of Documentation</p>
            <div className="space-y-2 opacity-40">
              <p className="text-[9px] font-bold uppercase tracking-widest">Rajgad Dnyanpeeth’s SCSCOE</p>
              <p className="text-[8px] font-medium">Department of Computer Engineering</p>
            </div>
            <div className="mt-16 text-[8px] font-black uppercase tracking-[0.4em] text-slate-700">
              © 2024-25 SAVITRIBAI PHULE PUNE UNIVERSITY
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default ThesisFlipbook;
