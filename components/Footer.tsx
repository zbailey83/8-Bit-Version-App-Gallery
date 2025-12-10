import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 mt-12 relative z-10 flex justify-center">
      <div className="bg-white border-4 border-black p-6 shadow-hard rotate-1 max-w-md text-center transform hover:rotate-0 transition-transform">
        <p className="font-hand text-xl text-black mb-2">
          Made with <span className="text-max-red">♥</span> & Chaos
        </p>
        <p className="text-xs font-mono bg-black text-white inline-block px-2 py-1">
          © {new Date().getFullYear()} DESIGN SYSTEM V.2
        </p>
      </div>
    </footer>
  );
};