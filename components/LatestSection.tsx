
import React from 'react';
import { Project } from '../types';
import { Play, ExternalLink, ArrowUpRight, Zap } from 'lucide-react';

interface LatestSectionProps {
  items: Project[];
}

export const LatestSection: React.FC<LatestSectionProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-16 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Brutalist Hero Header */}
      <div className="flex flex-col items-start text-left gap-6 border-[6px] border-black bg-[#FDF9F2] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-4xl self-center">
        <div className="flex items-center gap-3 bg-retro-yellow border-4 border-black px-4 py-1">
           <Zap className="text-black fill-black" size={24} />
           <h2 className="font-pixel text-2xl text-black uppercase tracking-tighter italic">LATEST_BUILDS.SH</h2>
        </div>
        <h1 className="font-pixel text-4xl md:text-6xl text-black leading-none uppercase">
          RAW. BOLD. <br/><span className="bg-black text-white px-2">UNFILTERED.</span>
        </h1>
        <p className="font-mono text-2xl text-black/80 max-w-2xl border-l-8 border-black pl-4">
          A zero-tolerance showcase of production-ready AI agents. No fluff, just architecture.
        </p>
      </div>

      {/* Brutalist Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="group relative flex flex-col bg-[#FDF9F2] border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Header / ID */}
            <div className="bg-black text-white p-3 flex justify-between items-center border-b-[6px] border-black">
                <span className="font-pixel text-xs tracking-widest">ID: 00{index + 1}</span>
                <span className="font-pixel text-[10px] uppercase opacity-50">{item.category}</span>
            </div>
            
            {/* Preview Window */}
            <div className="relative h-72 overflow-hidden border-b-[6px] border-black bg-white">
               <iframe
                  src={item.url}
                  title={`Preview of ${item.title}`}
                  className="w-[300%] h-[300%] origin-top-left transform scale-[0.334] border-none pointer-events-none grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  tabIndex={-1}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 z-20 bg-retro-green text-black font-pixel text-[10px] px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                   ACTIVE_STREAM
                </div>
            </div>

            {/* Brutalist Content Block */}
            <div className="p-8 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                    <h3 className="font-pixel text-3xl text-black uppercase leading-none group-hover:underline decoration-[6px] underline-offset-8">
                        {item.title}
                    </h3>
                    <div className="p-3 bg-black text-white border-4 border-black group-hover:bg-[#FDF9F2] group-hover:text-black transition-colors">
                        <item.icon size={28} />
                    </div>
                </div>

                <p className="font-mono text-2xl text-black leading-tight">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {['BUILD_STABLE', 'AI_ENGINE', 'v0.5'].map(tag => (
                        <span key={tag} className="font-mono text-sm bg-black text-[#FDF9F2] px-2 py-0.5 border-2 border-black">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <button 
                        onClick={() => window.open(item.url, '_blank')}
                        className="
                          bg-retro-yellow border-[4px] border-black p-4 
                          font-pixel text-sm text-black uppercase 
                          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                          hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                          active:bg-black active:text-white transition-all
                          flex items-center justify-center gap-2
                        "
                    >
                        LAUNCH <Play size={14} fill="black" />
                    </button>
                    <button 
                        onClick={() => window.open(item.url, '_blank')}
                        className="
                          bg-white border-[4px] border-black p-4 
                          font-pixel text-sm text-black uppercase 
                          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                          hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                          transition-all flex items-center justify-center gap-2
                        "
                    >
                        EXT <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brutalist Footer Decoration */}
      <div className="mt-20 flex flex-col items-center gap-8 py-12 border-y-[6px] border-black bg-black text-white overflow-hidden relative">
          <div className="whitespace-nowrap font-pixel text-6xl opacity-10 absolute animate-marquee select-none">
            NEO BRUTALISM NEO BRUTALISM NEO BRUTALISM NEO BRUTALISM
          </div>
          <p className="font-mono text-3xl uppercase tracking-[0.4em] z-10 animate-pulse">
            AUTHENTICITY IS THE NEW LUXURY
          </p>
          <div className="flex gap-12 z-10">
            <div className="w-12 h-12 bg-retro-red border-4 border-white rotate-45"></div>
            <div className="w-12 h-12 bg-retro-yellow border-4 border-white -rotate-12"></div>
            <div className="w-12 h-12 bg-retro-blue border-4 border-white rotate-12"></div>
          </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
