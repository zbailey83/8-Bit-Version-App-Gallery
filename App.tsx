import React from 'react';
import { BentoGrid } from './components/BentoGrid';
import { Header } from './components/Header';
import { PROJECTS } from './constants';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-retro-dark font-mono text-retro-light selection:bg-retro-green selection:text-black">
      
      {/* CRT Overlay Effects */}
      <div className="scanlines" />
      <div className="vignette" />

      {/* Main Content Container */}
      <div className="w-full max-w-[1400px] z-10 flex flex-col gap-8 p-4 sm:p-6 md:p-8">
        <Header />
        
        <main className="min-h-[60vh] relative z-10">
          <BentoGrid items={PROJECTS} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;