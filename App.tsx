
import React, { useState } from 'react';
import { BentoGrid } from './components/BentoGrid';
import { Header } from './components/Header';
import { PROJECTS, LATEST_PROJECTS } from './constants';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { LatestSection } from './components/LatestSection';

type View = 'splash' | 'gallery' | 'latest';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('splash');

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-retro-dark font-mono text-retro-light selection:bg-retro-green selection:text-black">
      
      {/* CRT Overlay Effects */}
      <div className="scanlines" />
      <div className="vignette" />

      {currentView === 'splash' ? (
        <SplashScreen 
          onShowGallery={() => setCurrentView('gallery')} 
          onShowLatest={() => setCurrentView('latest')} 
        />
      ) : (
        <div className="w-full max-w-[1400px] z-10 flex flex-col gap-8 p-4 sm:p-6 md:p-8">
          <Header 
            currentView={currentView} 
            onBackToSplash={() => setCurrentView('splash')}
            onToggleView={(view) => setCurrentView(view)}
          />
          
          <main className="min-h-[60vh] relative z-10">
            {currentView === 'gallery' ? (
              <BentoGrid items={PROJECTS} />
            ) : (
              <LatestSection items={LATEST_PROJECTS} />
            )}
          </main>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
