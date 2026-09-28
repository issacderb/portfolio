import React, { useState, useEffect } from 'react';
import { authorData } from '../../data/portfolioData';

interface NavbarProps {
  onDownloadCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadCv }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7E2DA] py-4 shadow-sm'
          : 'bg-gradient-to-b from-black/40 via-black/15 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
        {/* Name / Brand */}
        <a
          href="#hero"
          className="group flex items-center space-x-2 hover:opacity-85 transition-opacity"
        >
          <span className={`text-xs sm:text-sm tracking-wider uppercase font-bold transition-colors ${
            scrolled ? 'text-[#1C1917]' : 'text-[#FFF7E8]'
          }`}>
            {authorData.name}
          </span>
        </a>

        {/* Minimal Navigation: VỀ TÔI / DỰ ÁN / TÔI LÀM GÌ / LIÊN HỆ */}
        <nav className={`hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase transition-colors ${
          scrolled ? 'text-[#57534E]' : 'text-[#FFF7E8]/85'
        }`}>
          <a href="#about" className={scrolled ? "hover:text-[#1C1917] transition-colors" : "hover:text-[#FFF7E8] transition-colors"}>
            VỀ TÔI
          </a>
          <a href="#projects" className={scrolled ? "hover:text-[#1C1917] transition-colors" : "hover:text-[#FFF7E8] transition-colors"}>
            DỰ ÁN
          </a>
          <a href="#skills" className={scrolled ? "hover:text-[#1C1917] transition-colors" : "hover:text-[#FFF7E8] transition-colors"}>
            TÔI LÀM GÌ
          </a>
          <a href="#contact" className={scrolled ? "hover:text-[#1C1917] transition-colors" : "hover:text-[#FFF7E8] transition-colors"}>
            LIÊN HỆ
          </a>
        </nav>

        {/* CTA */}
        <div>
          <button
            onClick={onDownloadCv}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs ${
              scrolled
                ? 'border border-[#1C1917]/30 hover:border-[#1C1917] bg-[#FAF7F2]/80 hover:bg-[#1C1917] text-[#1C1917] hover:text-white'
                : 'border border-[#FFF7E8]/40 hover:border-[#FFF7E8] bg-black/25 hover:bg-[#FFF7E8]/10 text-[#FFF7E8]'
            }`}
          >
            TẢI CV
          </button>
        </div>
      </div>
    </header>
  );
};
