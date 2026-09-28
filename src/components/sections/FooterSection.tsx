import React from 'react';
import { authorData } from '../../data/portfolioData';

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-10 px-6 sm:px-10 md:px-16 bg-[#FAF7F2] border-t border-[#E7E2DA] text-[#78716C] text-xs font-normal">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <span className="font-bold tracking-wider text-[#1C1917] uppercase">{authorData.name}</span>
          <span>·</span>
          <span>{authorData.major}</span>
        </div>

        <div className="flex items-center space-x-3">
          <span>{authorData.university}</span>
          <span>·</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
};
