import React from 'react';
import { Gamepad2, Power } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative py-8 mb-8 border-b-4 border-white border-double bg-retro-dark">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        
        {/* Title Block */}
        <div className="flex items-center gap-4">
            <div className="bg-retro-red p-2 border-2 border-white shadow-block-sm">
                <Gamepad2 size={40} className="text-white" />
            </div>
            <div>
                <h1 className="text-3xl md:text-5xl font-pixel text-retro-yellow leading-tight drop-shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase">
                    WhatDot<span className="text-white">.Fun</span>
                </h1>
                <div className="flex items-center gap-2 mt-2">
                    <span className="w-3 h-3 bg-retro-green animate-blink"></span>
                    <p className="font-mono text-lg text-retro-green uppercase tracking-widest">
                        App Gallery by: Zach Bailey
                    </p>
                </div>
            </div>
        </div>

        {/* Stats / Info Block */}
        <div className="bg-retro-grey border-2 border-black p-1 shadow-block">
            <div className="bg-retro-dark border-2 border-black p-3 flex flex-col items-start min-w-[200px]">
                <div className="flex justify-between w-full font-mono text-retro-light text-sm mb-1">
                    <span>WORLD</span>
                    <span className="text-retro-yellow">1-1</span>
                </div>
                <div className="flex justify-between w-full font-mono text-retro-light text-sm mb-1">
                    <span>APPS</span>
                    <span className="text-retro-red">11</span>
                </div>
                 <div className="flex justify-between w-full font-mono text-retro-light text-sm">
                    <span>TIME</span>
                    <span className="text-retro-blue">{new Date().getFullYear()}</span>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};