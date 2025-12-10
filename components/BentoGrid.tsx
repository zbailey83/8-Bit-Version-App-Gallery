import React from 'react';
import { Project } from '../types';
import { BentoCard } from './BentoCard';

interface BentoGridProps {
  items: Project[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-20 px-2">
      {items.map((item, index) => (
        <BentoCard key={item.id} project={item} index={index} />
      ))}
    </div>
  );
};