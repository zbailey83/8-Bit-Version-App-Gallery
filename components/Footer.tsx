import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-8 border-t-4 border-white/20 relative z-10 flex flex-col items-center justify-center text-center gap-2">
      <p className="font-pixel text-xs text-retro-grey uppercase">
        INSERT COIN TO CONTINUE
      </p>
      <p className="font-mono text-sm text-retro-green">
        © {new Date().getFullYear()} ZACH.STACK | ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};