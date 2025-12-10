import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Ban } from 'lucide-react';

interface BentoCardProps {
  project: Project;
  index: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({ project, index }) => {
  const Icon = project.icon;

  const handleCardClick = () => {
    if (project.url && project.url !== '#') {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  const isPlaceholder = project.url === '#';
  const displayIndex = (index + 1).toString().padStart(2, '0');

  // Determine rotation based on index to create "messy" look without randomness during render
  const rotationClass = index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : 'rotate-0';
  const hoverRotationClass = index % 2 === 0 ? 'group-hover:-rotate-1' : 'group-hover:rotate-1';
  
  // Map category to specific sticker colors
  const getCategoryColor = (cat: string) => {
      switch(cat) {
          case 'Audio': return 'bg-max-pink';
          case 'Lifestyle': return 'bg-max-green';
          case 'Education': return 'bg-max-blue';
          case 'Agents': return 'bg-max-purple';
          case 'Marketing': return 'bg-max-yellow';
          case 'Finance': return 'bg-max-orange';
          case 'Design': return 'bg-fuchsia-400';
          default: return 'bg-max-red';
      }
  }
  const categoryBg = getCategoryColor(project.category);

  return (
    <div
      className={`
        group relative flex flex-col
        min-h-[420px]
        bg-max-cream
        border-[6px] border-white
        shadow-hard rounded-lg
        transform ${rotationClass}
        transition-all duration-300 ease-out
        hover:scale-[1.03] hover:shadow-hard-lg hover:z-20
        ${hoverRotationClass}
        cursor-pointer
      `}
      onClick={handleCardClick}
    >
      {/* Tape Effect at top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border-l border-r border-white/60 transform -rotate-1 z-20 shadow-sm opacity-80" />

      {/* Preview Section - Polaroid Style */}
      <div className="p-3 pb-0 flex-grow relative">
        <div className="w-full h-48 bg-gray-100 border-2 border-gray-200 overflow-hidden relative rounded-sm group-hover:border-black transition-colors duration-300">
            {!isPlaceholder ? (
            <>
                <iframe
                src={project.url}
                title={`Preview of ${project.title}`}
                className="w-[200%] h-[200%] origin-top-left transform scale-50 border-none pointer-events-none grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                tabIndex={-1}
                loading="lazy"
                />
                <div className="absolute inset-0 bg-transparent z-10" />
            </>
            ) : (
             <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 pattern-grid-lg">
                 <Ban size={48} className="opacity-20" />
             </div>
            )}
            
            {/* ID Sticker */}
            <div className="absolute top-2 left-2 bg-black text-white font-mono text-xs px-2 py-1 rotate-[-4deg]">
                #{displayIndex}
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 pt-4 flex flex-col justify-between h-full">
        <div>
            {/* Category Sticker */}
            <div className={`
                inline-block px-3 py-1 mb-3
                ${categoryBg} border-2 border-black shadow-sticker
                text-xs font-bold uppercase tracking-wider
                transform rotate-[-2deg] group-hover:rotate-0 transition-transform
            `}>
                {project.category}
            </div>

            <h3 className="text-2xl font-display font-black text-black leading-none mb-3 uppercase group-hover:text-max-blue transition-colors">
                {project.title}
            </h3>
            
            <p className="text-sm font-sans font-medium text-gray-700 leading-snug line-clamp-3 mb-4">
                {project.description}
            </p>
        </div>

        {/* Footer/Action */}
        <div className="mt-auto flex justify-between items-end border-t-2 border-dashed border-gray-300 pt-4">
            <div className="bg-gray-100 p-2 rounded-full border border-black group-hover:bg-max-yellow transition-colors">
                <Icon size={20} className="text-black stroke-[2.5]" />
            </div>

            <button className={`
                flex items-center gap-1 px-4 py-2 
                font-display text-sm uppercase tracking-wider
                ${isPlaceholder ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-black text-white group-hover:bg-max-pink group-hover:text-black'}
                border-2 border-transparent group-hover:border-black
                rounded-full shadow-md
                transition-all duration-300
                transform group-hover:-translate-y-1 group-hover:rotate-2
            `}>
                {isPlaceholder ? 'WIP' : 'VISIT'}
                {!isPlaceholder && <ArrowUpRight size={16} strokeWidth={3} />}
            </button>
        </div>
      </div>
      
    </div>
  );
};