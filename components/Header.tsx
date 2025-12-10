import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative py-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Title Section */}
      <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
        {/* Decorative background blob */}
        <div className="absolute -inset-4 bg-max-yellow skew-x-[-10deg] border-4 border-black shadow-hard rounded-sm -z-10" />
        
        <h1 className="text-6xl md:text-8xl font-display font-black text-black uppercase tracking-tighter leading-[0.85] drop-shadow-sm">
          Zach<span className="text-white text-stroke">.Stack</span>
        </h1>
        
        <div className="absolute -top-6 -right-8 animate-bounce">
            <div className="bg-max-green text-black border-2 border-black px-3 py-1 rounded-full font-hand text-sm transform rotate-12 shadow-sticker">
                V.2.0 NEW!
            </div>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="relative max-w-lg">
        <div className="bg-white border-4 border-black p-6 shadow-hard rotate-1">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-max-red text-white px-4 py-1 font-display uppercase text-xs tracking-widest border-2 border-black -rotate-2">
                Manifesto
            </div>
            <p className="font-sans font-bold text-lg leading-tight text-max-dark">
                A <span className="bg-max-blue px-1">curated chaos</span> of AI-powered applications. 
                Designed for the <span className="font-hand text-xl text-max-purple">future</span>, 
                built for the <span className="italic underline decoration-4 decoration-max-pink">now</span>.
            </p>
        </div>
        
        {/* Floating Icons */}
        <Star className="absolute -bottom-6 -left-6 text-max-yellow w-12 h-12 fill-current stroke-black stroke-2 animate-spin-slow" />
        <Sparkles className="absolute -top-8 -right-4 text-max-pink w-8 h-8 fill-current stroke-black stroke-2" />
      </div>
    </header>
  );
};