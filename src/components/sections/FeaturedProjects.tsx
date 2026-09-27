import React, { useState } from 'react';
import { projectsList, posterDesigns } from '../../data/portfolioData';
import type { ProjectDetail, PosterItem } from '../../data/portfolioData';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';
import { LightboxModal } from '../modals/LightboxModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    subtitle?: string;
    badge?: string;
    externalUrl?: string;
    actionLabel?: string;
  } | null>(null);

  const p1 = projectsList[0]; // 01 — VIDEO TALKING HEAD 01 (9:16)
  const p2 = projectsList[1]; // 02 — VIDEO TALKING HEAD 02 (9:16)
  const p3 = projectsList[2]; // 03 — E-MAGAZINE (Uncropped Spread)
  const p4 = projectsList[3]; // 04 — INFOGRAPHIC (Uncropped Full Artwork)
  const p5 = projectsList[4]; // 05 — CLEAR PATH (Desktop Browser Mockup)

  const handleOpenPoster = (poster: PosterItem) => {
    setLightboxState({
      isOpen: true,
      imageUrl: poster.image,
      title: poster.title,
      subtitle: poster.category,
      badge: poster.software
    });
  };

  const handleOpenInfographic = () => {
    setLightboxState({
      isOpen: true,
      imageUrl: p4.thumbnail,
      title: p4.title,
      subtitle: p4.shortDesc,
      badge: 'BẢN ĐẦY ĐỦ · 100%'
    });
  };

  return (
    <section
      id="projects"
      className="py-24 lg:py-36 px-6 sm:px-10 md:px-16 bg-[#FAF7F2] text-[#1C1917] border-t border-[#E7E2DA]"
    >
      <div className="max-w-7xl mx-auto space-y-28 sm:space-y-40">
        {/* Section Masthead */}
        <div className="border-b border-[#E7E2DA] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest uppercase text-[#78716C] block">
              02 / DỰ ÁN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917]">
              Sản phẩm chọn lọc
            </h2>
          </div>
          <span className="font-mono text-xs text-[#78716C] uppercase tracking-wider">
            VIDEO 9:16 · BIÊN TẬP · INFOGRAPHIC · WEB INTERACTIVE · POSTER
          </span>
        </div>

        {/* ============================================================== */}
        {/* 01 & 02 — PAIRED VERTICAL 9:16 VIDEOS (OPEN EDITORIAL SPREAD)   */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E7E2DA]/80 pb-4">
            <div className="flex items-center space-x-3 text-xs font-mono text-[#78716C]">
              <span className="font-bold text-[#1C1917] text-base">01 & 02</span>
              <span>/</span>
              <span className="uppercase tracking-widest text-[#C85A32] font-semibold">
                VIDEO / TALKING HEAD (9:16 DỌC)
              </span>
            </div>
            <span className="text-xs font-mono text-[#78716C]">
              ĐỊNH DẠNG DỌC TỐI ƯU NỀN TẢNG SỐ
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* 01 — VIDEO TALKING HEAD 01 (Open Composition) */}
            <div className="space-y-6">
              {/* Large 9:16 Player */}
              <div className="relative w-full max-w-[360px] sm:max-w-[380px] aspect-[9/16] mx-auto rounded-2xl overflow-hidden bg-black shadow-xl border border-[#E7E2DA]">
                <video
                  src={p1.videoUrl}
                  controls
                  playsInline
                  poster={p1.thumbnail}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-white flex items-center space-x-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>9:16 DỌC</span>
                </div>
              </div>

              {/* Minimal Text Presentation */}
              <div className="max-w-[360px] sm:max-w-[380px] mx-auto space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
                  <span className="text-[#C85A32] font-semibold tracking-wider uppercase">
                    {p1.category}
                  </span>
                  <span>{p1.duration}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917] leading-snug">
                  {p1.title}
                </h3>

                <p className="text-sm text-[#44403C] leading-relaxed font-sans font-light">
                  {p1.shortDesc}
                </p>

                <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono text-[#78716C]">
                  {p1.focus.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-[#EBE6DC] text-[#44403C]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 02 — VIDEO TALKING HEAD 02 (Open Composition) */}
            <div className="space-y-6">
              {/* Large 9:16 Player */}
              <div className="relative w-full max-w-[360px] sm:max-w-[380px] aspect-[9/16] mx-auto rounded-2xl overflow-hidden bg-black shadow-xl border border-[#E7E2DA]">
                <video
                  src={p2.videoUrl}
                  controls
                  playsInline
                  poster={p2.thumbnail}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-white flex items-center space-x-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>9:16 DỌC</span>
                </div>
              </div>

              {/* Minimal Text Presentation */}
              <div className="max-w-[360px] sm:max-w-[380px] mx-auto space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
                  <span className="text-[#C85A32] font-semibold tracking-wider uppercase">
                    {p2.category}
                  </span>
                  <span>{p2.duration}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917] leading-snug">
                  {p2.title}
                </h3>

                <p className="text-sm text-[#44403C] leading-relaxed font-sans font-light">
                  {p2.shortDesc}
                </p>

                <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono text-[#78716C]">
                  {p2.focus.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-[#EBE6DC] text-[#44403C]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 03 — E-MAGAZINE (ONE STRONG UNCROPPED EDITORIAL PREVIEW)        */}
        {/* ============================================================== */}
        <div className="space-y-8 border-t border-[#E7E2DA] pt-24 sm:pt-32">
          {/* Header Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#78716C]">
                <span className="font-bold text-[#1C1917] text-base">{p3.number}</span>
                <span>/</span>
                <span className="uppercase tracking-widest text-[#C85A32] font-semibold">
                  THIẾT KẾ BIÊN TẬP
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
                {p3.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#292524]">
                "{p3.shortDesc}"
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={p3.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
              >
                <span>{p3.actionLabel || 'XEM TOÀN BỘ ẤN PHẨM'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* ONE STRONG UNCROPPED SPREAD PREVIEW (Open Editorial Layout) */}
          <a
            href={p3.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group my-4"
          >
            <img
              src={p3.thumbnail}
              alt="E-Magazine spread: Bỏ bàn phím, gắp hạt nhựa"
              className="w-full max-h-[82vh] object-contain mx-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span>KẾT Workshop · Canva Digital Publication</span>
              <span className="text-[#1C1917] font-semibold underline underline-offset-4">
                Mở ấn phẩm trên Canva ↗
              </span>
            </div>
          </a>

          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-3xl font-sans font-light">
            {p3.fullDesc}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 04 — INFOGRAPHIC (FULL ARTWORK UNCROPPED, OPEN COMPOSITION)     */}
        {/* ============================================================== */}
        <div className="space-y-8 border-t border-[#E7E2DA] pt-24 sm:pt-32">
          {/* Header Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#78716C]">
                <span className="font-bold text-[#1C1917] text-base">{p4.number}</span>
                <span>/</span>
                <span className="uppercase tracking-widest text-[#C85A32] font-semibold">
                  THIẾT KẾ THÔNG TIN
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
                {p4.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#292524]">
                "{p4.shortDesc}"
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={handleOpenInfographic}
                className="px-7 py-3 rounded-full bg-[#1C1917] text-white hover:bg-[#C85A32] font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer shadow-sm flex items-center space-x-2"
              >
                <span>{p4.actionLabel || 'XEM BẢN ĐẦY ĐỦ'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </button>
            </div>
          </div>

          {/* WHOLE ARTWORK UNCROPPED (Open Composition, Full High-Res) */}
          <div
            onClick={handleOpenInfographic}
            className="relative cursor-pointer group my-4 flex flex-col items-center"
          >
            <img
              src={p4.thumbnail}
              alt="Infographic Báo chí dữ liệu - Vương Thành Trung"
              className="w-full max-w-4xl max-h-[88vh] object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="mt-3 w-full max-w-4xl flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span>Báo cáo dòng vốn FDI Việt Nam 2026 · Đồ họa thông tin báo chí</span>
              <span className="text-[#1C1917] font-semibold underline underline-offset-4 flex items-center space-x-1">
                <span>Xem bản đầy đủ 100%</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-3xl font-sans font-light">
            {p4.fullDesc}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 05 — CLEAR PATH (ONE LARGE DESKTOP BROWSER SHOWCASE)            */}
        {/* ============================================================== */}
        <div className="space-y-8 border-t border-[#E7E2DA] pt-24 sm:pt-32">
          {/* Header Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#78716C]">
                <span className="font-bold text-[#1C1917] text-base">{p5.number}</span>
                <span>/</span>
                <span className="uppercase tracking-widest text-[#C85A32] font-semibold">
                  WEB / INTERACTIVE
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
                {p5.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#292524]">
                "{p5.shortDesc}"
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={p5.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
              >
                <span>{p5.actionLabel || 'XEM TRẢI NGHIỆM'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* LARGE DESKTOP BROWSER MOCKUP */}
          <div className="rounded-2xl overflow-hidden border border-[#DCD5C8] bg-white shadow-2xl">
            {/* Minimal Browser Top Bar */}
            <div className="px-5 py-3 bg-[#F0ECE1] border-b border-[#E0D9CB] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#E07A5F]" />
                <span className="w-3 h-3 rounded-full bg-[#F4A261]" />
                <span className="w-3 h-3 rounded-full bg-[#81B29A]" />
              </div>

              <div className="px-6 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E0D9CB] text-xs font-mono text-[#57534E] w-80 text-center truncate">
                clearpath-beta-six.vercel.app
              </div>

              <div className="w-12" />
            </div>

            {/* Browser Content Image */}
            <a
              href={p5.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative cursor-pointer group"
            >
              <img
                src={p5.thumbnail}
                alt="Clear Path Web Interactive Showcase"
                className="w-full max-h-[80vh] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 right-5 px-4 py-2 rounded-full bg-[#1C1917]/90 backdrop-blur-md text-white font-mono text-xs shadow-md">
                Mở website trực tiếp ↗
              </div>
            </a>
          </div>

          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-3xl font-sans font-light">
            {p5.fullDesc}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 06 — POSTER DESIGN (COMPACT EDITORIAL GRID OF PHOTOSHOP WORKS)  */}
        {/* ============================================================== */}
        <div className="space-y-8 border-t border-[#E7E2DA] pt-24 sm:pt-32">
          {/* Header Info */}
          <div className="border-b border-[#E7E2DA]/80 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#78716C]">
                <span className="font-bold text-[#1C1917] text-base">06</span>
                <span>/</span>
                <span className="uppercase tracking-widest text-[#C85A32] font-semibold">
                  THIẾT KẾ ĐỒ HỌA & POSTER
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
                Thiết kế Poster & Ấn phẩm
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#292524]">
                "Poster thương mại, sự kiện và ấn phẩm nhận diện thị giác thực hiện bằng Photoshop."
              </p>
            </div>
            <span className="font-mono text-xs text-[#78716C] uppercase tracking-wider">
              6 TÁC PHẨM CHỌN LỌC · PHOTOSHOP
            </span>
          </div>

          {/* Open Curated Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {posterDesigns.map((poster) => (
              <div
                key={poster.id}
                onClick={() => handleOpenPoster(poster)}
                className="group relative flex flex-col cursor-pointer"
              >
                {/* Poster Artwork Container (Open, No Thick Outer Card) */}
                <div className="relative w-full aspect-[3/4] bg-[#EFE9DF] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 p-2">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#1C1917]/80 backdrop-blur-md text-[10px] font-mono text-white">
                    {poster.software}
                  </div>
                </div>

                {/* Minimal Poster Caption */}
                <div className="pt-3 pb-1 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#C85A32] transition-colors">
                      {poster.title}
                    </h4>
                    <p className="font-sans text-xs text-[#78716C] pt-0.5">
                      {poster.category}
                    </p>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-[#EBE6DC] flex items-center justify-center text-[#1C1917] group-hover:bg-[#1C1917] group-hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Lightbox Modal for Full Artworks & Posters */}
      {lightboxState && (
        <LightboxModal
          isOpen={lightboxState.isOpen}
          onClose={() => setLightboxState(null)}
          imageUrl={lightboxState.imageUrl}
          title={lightboxState.title}
          subtitle={lightboxState.subtitle}
          badge={lightboxState.badge}
          externalUrl={lightboxState.externalUrl}
          actionLabel={lightboxState.actionLabel}
        />
      )}
    </section>
  );
};
