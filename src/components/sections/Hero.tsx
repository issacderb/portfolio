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
      className="relative w-full min-h-[100svh] min-h-[640px] lg:min-h-0 lg:h-screen flex flex-col justify-between pt-16 sm:pt-20 lg:pt-28 pb-4 sm:pb-6 lg:pb-10 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0E121B] text-[#FFF7E8] overflow-hidden"
    >
      {/* ============================================================== */}
      {/* Z-0: HERO VIDEO VISUAL (Single coherent background layer)      */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <video
          ref={videoRef}
          src="/assets/videos/hero-0927.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[46%_bottom] lg:object-center"
        />

        {/* Desktop Gradient: Localized on the left, keeping workspace & sunset 100% visible */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-[52%] xl:w-[44%] pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(10, 13, 20, 0.60) 0%, rgba(10, 13, 20, 0.35) 45%, rgba(10, 13, 20, 0.10) 75%, rgba(10, 13, 20, 0) 100%)',
          }}
        />

        {/* Mobile / Tablet Gradient: Vertical dark atmosphere over top text, smoothly dissolving to reveal the cinematic workspace */}
        <div
          className="block lg:hidden absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10, 13, 20, 0.94) 0%, rgba(10, 13, 20, 0.88) 30%, rgba(10, 13, 20, 0.40) 50%, rgba(10, 13, 20, 0.05) 68%, rgba(10, 13, 20, 0.70) 100%)',
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
        className="relative z-30 max-w-7xl mx-auto w-full mt-2 sm:mt-4 lg:my-auto py-1 sm:py-4 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Column: Typography & CTAs (Occupies quieter left side, max-width ~540px) */}
        <div className="lg:col-span-6 xl:col-span-6 max-w-[540px] flex flex-col items-start space-y-2.5 sm:space-y-3.5 lg:space-y-5 lg:pl-2 xl:pl-4">
          {/* Greeting */}
          <div className="text-xs sm:text-sm font-sans text-[#FFF7E8]/80 tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {authorData.greeting}
          </div>

          {/* Large Editorial Name with fluid clamp to avoid overflow on 320px while staying bold and dramatic */}
          <h1 className="text-[clamp(2.1rem,8.2vw,4.6rem)] font-extrabold tracking-tight text-[#FFF7E8] leading-[1.02] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            VƯƠNG <br />
            THÀNH TRUNG
          </h1>

          {/* Subtitle & Positioning */}
          <div className="space-y-1 sm:space-y-1.5 pt-0.5 sm:pt-1">
            <p className="font-pixel text-xs sm:text-sm tracking-widest text-[#E87642] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              {authorData.major}
            </p>
            <p className="font-serif italic font-medium text-base sm:text-xl lg:text-2xl text-[#FFF7E8]/95 leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
              "{authorData.positioning}"
            </p>
          </div>

          {/* Short description */}
          <p className="text-xs sm:text-sm lg:text-base text-[#FFF7E8]/85 max-w-md leading-relaxed font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {authorData.intro}
          </p>

          {/* Z-40: CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 z-40">
            <a
              href="#projects"
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#10182B] hover:bg-[#E87642] text-[#FFF7E8] border border-[#FFF7E8]/20 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-md hover:border-transparent active:scale-95"
            >
              <span>XEM DỰ ÁN</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <button
              onClick={onDownloadCv}
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-[#FFF7E8]/10 text-[#FFF7E8] border border-[#FFF7E8]/40 hover:border-[#FFF7E8] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-xs active:scale-95"
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
      </motion.div>

      {/* ============================================================== */}
      {/* BOTTOM AREA: Scroll Indicator + Metadata Bar                   */}
      {/* ============================================================== */}
      <div className="relative z-40 max-w-7xl mx-auto w-full pt-2 sm:pt-4 flex flex-col items-center gap-2 sm:gap-3">
        {/* Subtle, elegant scroll indicator near the bottom (mobile/tablet) */}
        <a
          href="#about"
          className="block lg:hidden flex flex-col items-center justify-center text-[#FFF7E8]/70 hover:text-[#FFF7E8] transition-colors py-0.5 group cursor-pointer"
          aria-label="Cuộn xuống xem nội dung"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <span className="font-pixel text-[10px] tracking-widest uppercase opacity-80 group-hover:opacity-100 mb-0.5">
              Cuộn xuống
            </span>
            <svg className="w-3.5 h-3.5 text-[#FFF7E8]/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>

        {/* Metadata + Audio toggle */}
        <div className="w-full pt-2.5 sm:pt-3 border-t border-[#FFF7E8]/15 flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-[#FFF7E8]/75 tracking-wider uppercase gap-2.5 sm:gap-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] text-[11px] sm:text-xs text-center sm:text-left">
            <span>{authorData.university.toUpperCase()} · GPA {authorData.gpa}</span>
            <span className="hidden sm:inline text-[#FFF7E8]/30">|</span>
            <span className="tracking-wider uppercase">TRUYỀN THÔNG ĐA PHƯƠNG TIỆN · 2026</span>
          </div>

          {/* Audio toggle */}
          <button
            onClick={toggleAudio}
            className="px-3 py-1 rounded-full bg-[#10182B]/80 hover:bg-[#10182B] text-[#FFF7E8]/90 hover:text-[#FFF7E8] text-[10px] font-pixel tracking-wider uppercase transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs border border-[#FFF7E8]/20"
            title={isMuted ? "Bật âm thanh nền (8% âm lượng)" : "Tắt tiếng"}
          >
            <span>{isMuted ? "🔇 SOUND: OFF" : "🔊 SOUND: 8%"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
