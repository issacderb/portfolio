import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { authorData } from '../../data/portfolioData';

interface HeroProps {
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCv }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.08; // 8% low volume target (approx 5-10%)
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-6 sm:px-10 md:px-16 bg-[#FAF7F2] text-[#1C1917] overflow-hidden"
    >
      {/* ============================================================== */}
      {/* Z-0: HERO VIDEO VISUAL (0927.mp4 Loop - Desktop Full-Bleed)    */}
      {/* ============================================================== */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <video
          ref={videoRef}
          src="/assets/videos/hero-0927.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        {/* Z-10: Subtle localized readability overlay strictly behind text on the left */}
        <div className="absolute inset-y-0 left-0 w-[42%] lg:w-[38%] xl:w-[34%] bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 via-[40%] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none z-10" />
      </div>

      {/* ============================================================== */}
      {/* Z-30: HERO TEXT & CONTENT (Subtle HTML reveal)                 */}
      {/* ============================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Column: Typography & CTAs (Bounded so monitor & creator stay 100% visible) */}
        <div className="lg:col-span-5 xl:col-span-5 max-w-md lg:max-w-[420px] flex flex-col items-start space-y-5">
          {/* Greeting */}
          <div className="text-xs sm:text-sm font-sans text-[#78716C] tracking-wide">
            {authorData.greeting}
          </div>

          {/* Large Editorial Name */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem] font-bold tracking-tight text-[#1C1917] leading-[1.02]">
            VƯƠNG <br />
            THÀNH TRUNG
          </h1>

          {/* Subtitle & Positioning with Pixel Font Accent */}
          <div className="space-y-1.5 pt-1">
            <p className="font-pixel text-xs sm:text-sm font-semibold tracking-wider text-[#C85A32] uppercase">
              {authorData.major}
            </p>
            <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#292524] font-normal leading-snug">
              "{authorData.positioning}"
            </p>
          </div>

          {/* Short description */}
          <p className="text-sm sm:text-base text-[#57534E] max-w-md leading-relaxed font-sans font-light">
            {authorData.intro}
          </p>

          {/* Z-40: CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 z-40">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white font-pixel text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-sm"
            >
              <span>XEM DỰ ÁN</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <button
              onClick={onDownloadCv}
              className="px-7 py-3 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md hover:bg-[#1C1917] text-[#1C1917] hover:text-white border border-[#1C1917]/30 hover:border-[#1C1917] font-pixel text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-xs"
            >
              <span>TẢI CV</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right column on desktop remains open to showcase the video */}
        <div className="hidden lg:block lg:col-span-7 xl:col-span-7" aria-hidden="true" />

        {/* Mobile View: Preserve complete 16:9 framing without cropping */}
        <div className="block lg:hidden mt-6 w-full">
          <div className="relative rounded-2xl overflow-hidden border border-[#E7E2DA] shadow-lg bg-[#FAF7F2] aspect-video">
            <video
              src="/assets/videos/hero-0927.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain bg-black/90"
            />
          </div>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* BOTTOM METADATA BAR (Pixel font accents + Audio toggle)       */}
      {/* ============================================================== */}
      <div className="relative z-40 max-w-7xl mx-auto w-full pt-4 border-t border-[#E7E2DA]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-pixel text-[#78716C] gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#E7E2DA]/60">
            <span>{authorData.university.toUpperCase()} · GPA {authorData.gpa}</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#E7E2DA]/60">
            <span className="tracking-wider uppercase">TRUYỀN THÔNG ĐA PHƯƠNG TIỆN · 2026</span>
          </div>
        </div>

        {/* Extremely small, unobtrusive ambient audio toggle */}
        <button
          onClick={toggleAudio}
          className="px-3 py-1 rounded-full bg-[#1C1917]/80 hover:bg-[#1C1917] text-white/90 hover:text-white font-pixel text-[11px] tracking-wider transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs border border-white/10"
          title={isMuted ? "Bật âm thanh nền (8% âm lượng)" : "Tắt tiếng"}
        >
          <span>{isMuted ? "🔇 SOUND: OFF" : "🔊 SOUND: 8%"}</span>
        </button>
      </div>
    </section>
  );
};
