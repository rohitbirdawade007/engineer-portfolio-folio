import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumSliderProps {
  images: string[];
  title?: string;
  location?: string;
}

const PremiumSlider: React.FC<PremiumSliderProps> = ({ images, title, location }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      skipSnaps: false,
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="relative group max-w-6xl mx-auto px-4">
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 scale-110 overflow-hidden rounded-[3rem]">
        {images[selectedIndex] && (
          <img 
            src={images[selectedIndex]} 
            className="w-full h-full object-cover" 
            alt="background blur"
          />
        )}
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 py-10">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={cn(
                "flex-[0_0_90%] md:flex-[0_0_85%] min-w-0 pl-4 transition-all duration-700 ease-out",
                selectedIndex === index ? "scale-110 z-10 opacity-100" : "scale-95 opacity-30 blur-[2px]"
              )}
            >
              <div className="relative aspect-[16/12] md:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/30 border border-white/30">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Text like in the reference image */}
                {selectedIndex === index && (
                  <div className="absolute bottom-8 left-8 text-white z-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={16} className="text-primary-foreground fill-primary" />
                      <span className="text-xs font-black uppercase tracking-[0.3em] drop-shadow-md">
                        {location || "Official Record"}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase drop-shadow-xl">
                      {title || "Certification Moment"}
                    </h3>
                  </div>
                )}

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all z-30 opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all z-30 opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              selectedIndex === index 
                ? "bg-primary w-8" 
                : "bg-slate-300 hover:bg-slate-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PremiumSlider;
