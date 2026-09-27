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
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-6 sm:px-10 md:px-16 bg-[#0E121B] text-[#FFF7E8] overflow-hidden"
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

        {/* Z-10: Very subtle localized dark atmospheric gradient strictly on the left */}
        <div
          className="absolute inset-y-0 left-0 w-[52%] xl:w-[44%] pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(10, 13, 20, 0.60) 0%, rgba(10, 13, 20, 0.35) 45%, rgba(10, 13, 20, 0.10) 75%, rgba(10, 13, 20, 0) 100%)',
          }}
        />
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
        {/* Left Column: Typography & CTAs (Occupies quieter left side, max-width ~540px) */}
        <div className="lg:col-span-6 xl:col-span-6 max-w-[540px] flex flex-col items-start space-y-5 lg:pl-2 xl:pl-4">
          {/* Greeting */}
          <div className="text-xs sm:text-sm font-sans text-[#FFF7E8]/75 tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            {authorData.greeting}
          </div>

          {/* Large Editorial Name */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.0rem] xl:text-[4.6rem] font-bold tracking-tight text-[#FFF7E8] leading-[1.02] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            VƯƠNG <br />
            THÀNH TRUNG
          </h1>

          {/* Subtitle & Positioning */}
          <div className="space-y-1.5 pt-1">
            <p className="font-pixel text-xs sm:text-sm font-semibold tracking-wider text-[#E87642] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {authorData.major}
            </p>
            <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#FFF7E8]/95 font-normal leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
              "{authorData.positioning}"
            </p>
          </div>

          {/* Short description */}
          <p className="text-sm sm:text-base text-[#FFF7E8]/85 max-w-md leading-relaxed font-sans font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            {authorData.intro}
          </p>

          {/* Z-40: CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 z-40">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#10182B] hover:bg-[#E87642] text-[#FFF7E8] border border-[#FFF7E8]/20 font-pixel text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-md hover:border-transparent"
            >
              <span>XEM DỰ ÁN</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <button
              onClick={onDownloadCv}
              className="px-7 py-3 rounded-full bg-black/30 hover:bg-[#FFF7E8]/10 text-[#FFF7E8] border border-[#FFF7E8]/40 hover:border-[#FFF7E8] font-pixel text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-xs"
            >
              <span>TẢI CV</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right column on desktop remains open to showcase the video */}
        <div className="hidden lg:block lg:col-span-6 xl:col-span-6" aria-hidden="true" />

        {/* Mobile View: Preserve complete 16:9 framing without cropping */}
        <div className="block lg:hidden mt-6 w-full">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black aspect-video">
            <video
              src="/assets/videos/hero-0927.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* BOTTOM METADATA BAR (Small ivory text, thin divider)           */}
      {/* ============================================================== */}
      <div className="relative z-40 max-w-7xl mx-auto w-full pt-4 border-t border-[#FFF7E8]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-pixel text-[#FFF7E8]/75 gap-3">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          <span>{authorData.university.toUpperCase()} · GPA {authorData.gpa}</span>
          <span className="hidden sm:inline text-[#FFF7E8]/30">|</span>
          <span className="tracking-wider uppercase">TRUYỀN THÔNG ĐA PHƯƠNG TIỆN · 2026</span>
        </div>

        {/* Extremely small, unobtrusive ambient audio toggle */}
        <button
          onClick={toggleAudio}
          className="px-3 py-1 rounded-full bg-[#10182B]/80 hover:bg-[#10182B] text-[#FFF7E8]/90 hover:text-[#FFF7E8] font-pixel text-[11px] tracking-wider transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs border border-[#FFF7E8]/20"
          title={isMuted ? "Bật âm thanh nền (8% âm lượng)" : "Tắt tiếng"}
        >
          <span>{isMuted ? "🔇 SOUND: OFF" : "🔊 SOUND: 8%"}</span>
        </button>
      </div>
    </section>
  );
};
