import React from 'react';
import { Project } from '../types';
import { ArrowRight, Ban, Play } from 'lucide-react';

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

  // Map category to retro colors
  const getCategoryColor = (cat: string) => {
      switch(cat) {
          case 'Audio': return 'text-retro-red';
          case 'Lifestyle': return 'text-retro-green';
          case 'Education': return 'text-retro-blue';
          case 'Agents': return 'text-retro-yellow';
          case 'Marketing': return 'text-fuchsia-400';
          case 'Finance': return 'text-emerald-400';
          case 'Design': return 'text-purple-400';
          case 'Web3': return 'text-orange-400';
          default: return 'text-white';
      }
  }
  const categoryColor = getCategoryColor(project.category);

  return (
    <div
      className="
        group relative flex flex-col
        h-[450px]
        bg-retro-grey
        border-4 border-black
        shadow-block
        transition-all duration-150
        hover:-translate-y-1 hover:shadow-block-lg
        cursor-pointer
      "
      onClick={handleCardClick}
    >
        {/* Window Header Bar */}
        <div className="bg-retro-blue border-b-4 border-black px-2 py-1 flex justify-between items-center select-none">
            <span className="font-pixel text-[10px] text-white uppercase tracking-wider truncate max-w-[70%]">
                {project.title}.EXE
            </span>
            <div className="flex gap-1">
                <div className="w-3 h-3 bg-white border border-black shadow-[1px_1px_0_black]"></div>
                <div className="w-3 h-3 bg-white border border-black shadow-[1px_1px_0_black] group-hover:bg-retro-red transition-colors"></div>
            </div>
        </div>

        {/* Inner Content Padding */}
        <div className="p-4 flex-grow flex flex-col gap-4">
            
            {/* Screen Container */}
            <div className="relative w-full h-48 bg-retro-dark border-4 border-black shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
                {!isPlaceholder ? (
                    <>
                        <iframe
                            src={project.url}
                            title={`Preview of ${project.title}`}
                            className="w-[200%] h-[200%] origin-top-left transform scale-50 border-none pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
                            tabIndex={-1}
                            loading="lazy"
                        />
                        {/* Scanline overlay for preview only */}
                        <div className="absolute inset-0 bg-transparent pointer-events-none z-10 bg-pixel-pattern opacity-30" />
                    </>
                ) : (
                     <div className="w-full h-full flex items-center justify-center text-retro-grey/20">
                         <Ban size={48} />
                     </div>
                )}
                
                {/* Level Tag */}
                <div className="absolute bottom-0 right-0 bg-black text-retro-green font-pixel text-[10px] px-2 py-1 border-tl-2 border-white">
                    LVL {displayIndex}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Icon size={16} className="text-black" />
                        <span className={`font-pixel text-[10px] uppercase ${categoryColor} bg-black px-1`}>
                            {project.category}
                        </span>
                    </div>

                    <h3 className="font-pixel text-sm text-black leading-tight mb-2 uppercase break-words">
                        {project.title}
                    </h3>
                    
                    <p className="font-mono text-lg text-black/80 leading-5 line-clamp-3">
                        {">"} {project.description}
                    </p>
                </div>

                {/* Retro Button */}
                <div className={`
                    mt-auto w-full text-center py-2 px-4
                    font-pixel text-[10px] uppercase tracking-widest
                    border-4 border-black
                    bg-white text-black
                    shadow-block-sm
                    group-hover:bg-retro-yellow group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1
                    transition-all duration-75
                    flex items-center justify-center gap-2
                `}>
                    {isPlaceholder ? 'LOCKED' : 'START'}
                    {!isPlaceholder && <Play size={10} fill="currentColor" />}
                </div>
            </div>
        </div>
    </div>
  );
};