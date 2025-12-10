import React from 'react';
import { BentoGrid } from './components/BentoGrid';
import { Header } from './components/Header';
import { PROJECTS } from './constants';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-dots" />

      {/* Memphis Decorative Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left Circle */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-max-yellow rounded-full border-4 border-black mix-blend-multiply opacity-80" />
        
        {/* Bottom Right Triangle (Using CSS borders for triangle is tricky, using rotated box) */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-max-green rotate-45 border-4 border-black mix-blend-multiply opacity-80" />
        
        {/* Floating Squiggle (Approximated with CSS) */}
        <div className="absolute top-1/4 right-[-5%] w-48 h-12 bg-max-purple rounded-full rotate-[-15deg] border-4 border-black opacity-60" />
        
        {/* Floating Dots */}
        <div className="absolute bottom-1/3 left-[-2%] w-24 h-24 bg-max-blue rounded-full border-4 border-black opacity-70" />
      </div>

      <div className="w-full max-w-[1400px] z-10 flex flex-col gap-12 p-4 sm:p-8 md:p-12">
        <Header />
        <main className="min-h-[60vh]">
          <BentoGrid items={PROJECTS} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;