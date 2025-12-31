
import React from 'react';
import { Gamepad2, Power, ArrowLeft, Grid, Star } from 'lucide-react';
import { PROJECTS } from '../constants';

interface HeaderProps {
  currentView: 'gallery' | 'latest';
  onBackToSplash: () => void;
  onToggleView: (view: 'gallery' | 'latest') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onBackToSplash, onToggleView }) => {
  return (
    <header className="relative py-8 mb-8 border-b-4 border-white border-double bg-retro-dark">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        
        {/* Title Block */}
        <div className="flex items-center gap-4">
            <button 
              onClick={onBackToSplash}
              className="bg-retro-red p-2 border-2 border-white shadow-block-sm hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
            >
                <Power size={32} className="text-white" />
            </button>
            <div>
                <h1 className="text-2xl md:text-4xl font-pixel text-retro-yellow leading-tight drop-shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase">
                    WhatDot<span className="text-white">.Fun</span>
                </h1>
                <div className="flex items-center gap-2 mt-2">
                    <span className="w-3 h-3 bg-retro-green animate-blink"></span>
                    <p className="font-mono text-lg text-retro-green uppercase tracking-widest hidden sm:block">
                        Gallery by Zach Bailey
                    </p>
                </div>
            </div>
        </div>

        {/* View Selection Toggle */}
        <div className="flex gap-4">
            <button 
              onClick={() => onToggleView('latest')}
              className={`
                px-4 py-2 font-pixel text-[10px] uppercase flex items-center gap-2 border-4 border-black transition-all
                ${currentView === 'latest' ? 'bg-retro-yellow text-black shadow-none translate-y-1' : 'bg-retro-grey text-black shadow-block-sm hover:-translate-y-0.5'}
              `}
            >
              <Star size={14} fill={currentView === 'latest' ? 'black' : 'none'} />
              Latest
            </button>
            <button 
              onClick={() => onToggleView('gallery')}
              className={`
                px-4 py-2 font-pixel text-[10px] uppercase flex items-center gap-2 border-4 border-black transition-all
                ${currentView === 'gallery' ? 'bg-retro-yellow text-black shadow-none translate-y-1' : 'bg-retro-grey text-black shadow-block-sm hover:-translate-y-0.5'}
              `}
            >
              <Grid size={14} />
              Gallery
            </button>
        </div>

        {/* Stats / Info Block */}
        <div className="bg-retro-grey border-2 border-black p-1 shadow-block hidden lg:block">
            <div className="bg-retro-dark border-2 border-black p-3 flex flex-col items-start min-w-[200px]">
                <div className="flex justify-between w-full font-mono text-retro-light text-sm mb-1">
                    <span>MODE</span>
                    <span className="text-retro-yellow uppercase">{currentView}</span>
                </div>
                <div className="flex justify-between w-full font-mono text-retro-light text-sm mb-1">
                    <span>APPS</span>
                    <span className="text-retro-red">{PROJECTS.length}</span>
                </div>
                 <div className="flex justify-between w-full font-mono text-retro-light text-sm">
                    <span>STATUS</span>
                    <span className="text-retro-green animate-pulse">ONLINE</span>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};
