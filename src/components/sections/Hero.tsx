import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { authorData } from '../../data/portfolioData';
import { LivingMonitor } from '../hero/LivingMonitor';

interface HeroProps {
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCv }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  // Smooth springs for mouse parallax
  const springConfig = { damping: 45, stiffness: 80 };
  const smoothX = useSpring(mousePos.x, springConfig);
  const smoothY = useSpring(mousePos.y, springConfig);

  // Parallax layer offsets
  const bgX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const filmX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const filmY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  const photosX = useTransform(smoothX, [-0.5, 0.5], [-32, 32]);
  const photosY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  // Scroll parallax interaction (cinematic camera pullback)
  const { scrollY } = useScroll();
  const sceneScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const sceneBackdropY = useTransform(scrollY, [0, 600], [0, 45]);
  const textScrollY = useTransform(scrollY, [0, 600], [0, -60]);
  const filmScrollY = useTransform(scrollY, [0, 600], [0, -110]);
  const photosScrollY = useTransform(scrollY, [0, 600], [0, -90]);

  // Combined mouse parallax + scroll offsets
  const combinedFilmY = useTransform([filmY, filmScrollY], ([my, sy]: number[]) => my + sy);
  const combinedPhotosY = useTransform([photosY, photosScrollY], ([my, sy]: number[]) => my + sy);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-6 sm:px-10 md:px-16 bg-[#FAF7F2] text-[#1C1917] overflow-hidden"
    >
      {/* ============================================================== */}
      {/* 2.5D INTERACTIVE CINEMATIC WORKSPACE SCENE (DESKTOP)           */}
      {/* ============================================================== */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Master Camera Container with Scroll Pullback & Mouse Parallax */}
        <motion.div
          style={{
            scale: sceneScale,
            y: sceneBackdropY,
          }}
          className="relative w-full h-full"
        >
          {/* LAYER 1: BASE WORKSPACE (Sky, Windows, Desk, Camera, Monitor Bezel) */}
          <motion.div
            style={{
              x: bgX,
              y: bgY,
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="/assets/visuals/01-hero-workspace.png"
              alt="3D Cinematic Creative Workspace - Vương Thành Trung"
              className="w-full h-full object-cover object-[65%_center]"
            />

            {/* LIVING MONITOR: Superimposed directly on the DaVinci Resolve editing screen */}
            <div className="absolute top-[31.0%] left-[71.2%] w-[17.5%] h-[35.0%] z-10 pointer-events-none">
              <LivingMonitor />
            </div>
          </motion.div>

          {/* LAYER 2: SUSPENDED FILM STRIP (Stronger Parallax + Subtle Floating Breathing Motion) */}
          <motion.div
            style={{
              x: filmX,
              y: combinedFilmY,
            }}
            className="absolute top-0 right-[28.0%] w-[23%] h-[42%] z-20 pointer-events-none"
          >
            <motion.div
              animate={{
                y: [-3, 3, -3],
                rotate: [-0.4, 0.4, -0.4],
              }}
              transition={{
                duration: 7,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              className="w-full h-full"
            >
              <img
                src="/assets/visuals/hero-film-arch.png"
                alt="Floating 35mm film strip"
                className="w-full h-auto object-contain opacity-95 drop-shadow-md"
              />
            </motion.div>
          </motion.div>

          {/* LAYER 3: FLOATING PHOTOGRAPHS & PAPER NOTES (Highest Parallax + Pendulum Sway) */}
          <motion.div
            style={{
              x: photosX,
              y: combinedPhotosY,
            }}
            className="absolute inset-0 z-30 pointer-events-none"
          >
            {/* Center Polaroid Photo (City sunset street) */}
            <motion.div
              animate={{
                y: [-2, 2.5, -2],
                rotate: [-0.6, 0.6, -0.6],
              }}
              transition={{
                duration: 5.8,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              className="absolute top-[42.0%] left-[51.5%] w-[8.2%] drop-shadow-lg"
            >
              <img
                src="/assets/visuals/hero-photo-center.png"
                alt="Hanging polaroid photography"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Top Paper Note (Idea sketches) */}
            <motion.div
              animate={{
                y: [-2.5, 2, -2.5],
                rotate: [0.5, -0.5, 0.5],
              }}
              transition={{
                duration: 6.4,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.5,
              }}
              className="absolute top-[18.0%] left-[48.0%] w-[8.8%] drop-shadow-md"
            >
              <img
                src="/assets/visuals/hero-note-sketch.png"
                alt="Pinned paper sketch note"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Left Paper Note (Text checklist) */}
            <motion.div
              animate={{
                y: [-1.8, 2.2, -1.8],
                rotate: [-0.5, 0.5, -0.5],
              }}
              transition={{
                duration: 6.0,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 1.2,
              }}
              className="absolute top-[36.0%] left-[44.5%] w-[7.8%] drop-shadow-md"
            >
              <img
                src="/assets/visuals/hero-note-text.png"
                alt="Editorial checklist note"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Localized contrast gradient strictly behind typography on the left.
            Stops cleanly at 42% so the center monitor, camera, notes & skyline have ZERO haze or washout! */}
        <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 via-[32%] to-transparent pointer-events-none z-35" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none z-35" />
      </div>

      {/* ============================================================== */}
      {/* TEXT LAYER: EDITORIAL TYPOGRAPHY                               */}
      {/* ============================================================== */}
      <motion.div
        style={{ y: textScrollY }}
        className="relative z-40 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left: Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          {/* Greeting */}
          <div className="text-xs sm:text-sm font-sans text-[#78716C] tracking-wide">
            {authorData.greeting}
          </div>

          {/* Large Editorial Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold tracking-tight text-[#1C1917] leading-[1.02]">
            VƯƠNG <br />
            THÀNH TRUNG
          </h1>

          {/* Subtitle & Positioning */}
          <div className="space-y-1.5 pt-1">
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#C85A32] uppercase">
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

          {/* Actions: XEM DỰ ÁN & TẢI CV */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-sm"
            >
              <span>XEM DỰ ÁN</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <button
              onClick={onDownloadCv}
              className="px-7 py-3 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md hover:bg-[#1C1917] text-[#1C1917] hover:text-white border border-[#1C1917]/30 hover:border-[#1C1917] font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 shadow-xs"
            >
              <span>TẢI CV</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right column on desktop is deliberately transparent to let the full-scale workspace image breathe */}
        <div className="hidden lg:block lg:col-span-6" aria-hidden="true" />

        {/* Mobile View: Large visual presentation */}
        <div className="block lg:hidden mt-6 w-full">
          <div className="relative rounded-xl overflow-hidden border border-[#E7E2DA] shadow-md bg-[#F5F2EB]">
            <img
              src="/assets/visuals/01-hero-workspace.png"
              alt="Creative Workspace"
              className="w-full aspect-[4/3] object-cover object-[65%_center]"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-40 max-w-7xl mx-auto w-full pt-4 border-t border-[#E7E2DA]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#78716C] gap-3">
        <div className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#E7E2DA]/60">
          <span>{authorData.university.toUpperCase()} · GPA {authorData.gpa}</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#E7E2DA]/60">
          <span className="tracking-widest uppercase">TRUYỀN THÔNG ĐA PHƯƠNG TIỆN · 2026</span>
        </div>
      </div>
    </section>
  );
};
