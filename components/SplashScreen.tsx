
import React from 'react';
import { Gamepad2, Grid, Star, ExternalLink } from 'lucide-react';

interface SplashScreenProps {
  onShowGallery: () => void;
  onShowLatest: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onShowGallery, onShowLatest }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 relative bg-retro-dark">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-retro-red/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-retro-blue/10 blur-3xl rounded-full animate-pulse delay-700"></div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl">
        
        {/* Hero Portrait Section */}
        <div className="relative mb-12 group">
            {/* The "Brutalist" Frame */}
            <div className="absolute inset-0 bg-white border-4 border-black translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-300"></div>
            <div className="relative bg-retro-grey border-4 border-black overflow-hidden w-48 h-48 md:w-64 md:h-64 shadow-block">
                <img 
                    src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=620,height=620/editor-attachments/clz1iixm7003msh01j62c5yks/b7f6311e-289b-433b-871d-f8ec0d879f97.png" 
                    alt="Zach Bailey Pixel Art" 
                    className="w-full h-full object-cover pixelated hover:scale-110 transition-transform duration-500"
                />
            </div>
            {/* Floating Tag */}
            <div className="absolute -bottom-4 -right-8 bg-retro-yellow text-black font-pixel text-[10px] px-3 py-2 border-4 border-black rotate-3 shadow-block-sm animate-bounce">
                CREATOR_ID: ZB
            </div>
        </div>

        <div className="flex flex-col items-center mb-12">
            <h1 className="text-6xl md:text-9xl font-pixel text-retro-yellow leading-none drop-shadow-[8px_8px_0_rgba(0,0,0,1)] tracking-tighter mb-2">
                WHATDOT<span className="text-white">.FUN</span>
            </h1>
            <div className="h-1 w-full max-w-md bg-white border-b-4 border-black shadow-block"></div>
        </div>

        <p className="font-mono text-2xl md:text-3xl text-retro-green mb-16 uppercase tracking-[0.2em] italic">
          {">"} BOOTING SYSTEM EXPERIENCE...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-2xl">
          <button 
            onClick={onShowLatest}
            className="
              relative group
              bg-retro-blue border-[6px] border-black p-8
              shadow-[10px_10px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2
              transition-all duration-150 flex flex-col items-center gap-4
            "
          >
            <div className="absolute -top-6 -right-6 bg-retro-red text-white font-pixel text-[12px] px-3 py-1 border-4 border-black -rotate-12 animate-pulse">
              HOT!
            </div>
            <Star size={40} className="text-retro-yellow fill-retro-yellow group-hover:rotate-45 transition-transform" />
            <span className="font-pixel text-xl text-white">LATEST BUILDS</span>
            <span className="font-mono text-lg text-retro-light/70">Premium Neo-Brutalist View</span>
          </button>

          <button 
            onClick={onShowGallery}
            className="
              group
              bg-retro-grey border-[6px] border-black p-8
              shadow-[10px_10px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2
              transition-all duration-150 flex flex-col items-center gap-4
            "
          >
            <Grid size={40} className="text-black group-hover:scale-110 transition-transform" />
            <span className="font-pixel text-xl text-black uppercase">Archive</span>
            <span className="font-mono text-lg text-black/60">Full Component Gallery</span>
          </button>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 opacity-60">
            <p className="font-mono text-xl text-retro-grey uppercase tracking-widest">Build Version: 0.5.2-Alpha</p>
            <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/zbailey83" target="_blank" rel="noreferrer" className="text-retro-blue font-pixel text-[10px] hover:text-white transition-all flex items-center gap-2">
                    [ LINKEDIN ]
                </a>
                <span className="text-white/20">|</span>
                <span className="text-retro-red font-pixel text-[10px] animate-blink">PRESS START</span>
            </div>
        </div>
      </div>
      
      <style>{`
        .pixelated {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
};
