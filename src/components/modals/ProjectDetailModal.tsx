import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectDetail } from '../../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveImageIndex(0);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1C1917]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#FAF7F2] border border-[#E7E2DA] rounded-3xl overflow-hidden shadow-2xl flex flex-col text-[#1C1917]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E2DA] bg-[#F5F2EB]">
            <div className="flex items-center space-x-3">
              <span className="font-pixel px-2.5 py-1 rounded-md bg-[#1C1917] text-xs font-bold text-[#FAF7F2]">
                {project.number}
              </span>
              <div>
                <span className="font-pixel text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block">
                  {project.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#E7E2DA] hover:bg-[#D6CEBF] text-[#1C1917] transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Visual Preview: Video or Image Gallery */}
            <div className="rounded-2xl overflow-hidden bg-[#1C1917] border border-[#E7E2DA] flex flex-col items-center justify-center">
              {project.videoUrl ? (
                <div className="w-full flex justify-center bg-black">
                  <video
                    src={project.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[60vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                  />
                </div>
              ) : project.galleryImages && project.galleryImages.length > 0 ? (
                <div className="w-full flex flex-col items-center p-4">
                  <div className="w-full flex justify-center">
                    <img
                      src={project.galleryImages[activeImageIndex].url}
                      alt={project.galleryImages[activeImageIndex].caption}
                      className="max-h-[62vh] object-contain rounded-xl shadow-2xl border border-white/10"
                    />
                  </div>
                  <p className="mt-3 text-xs font-medium text-[#FAF7F2]">
                    {project.galleryImages[activeImageIndex].caption}
                  </p>

                  {/* Thumbnail Tabs */}
                  {project.galleryImages.length > 1 && (
                    <div className="mt-4 flex gap-2">
                      {project.galleryImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                            activeImageIndex === idx
                              ? 'bg-[#C85A32] text-white font-bold shadow'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          Trang {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full flex justify-center p-4">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="max-h-[62vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  />
                </div>
              )}
            </div>

            {/* Description & Technical Meta */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
              <div className="md:col-span-8 space-y-4">
                <h4 className="font-serif text-lg font-bold tracking-tight text-[#1C1917]">Tổng quan dự án</h4>
                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-normal">
                  {project.fullDesc}
                </p>

                {project.externalUrl && (
                  <div className="pt-2">
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <span>{project.actionLabel || 'TRUY CẬP TRỰC TIẾP'}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}

                {project.caseStudyDetails && (
                  <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#E7E2DA] space-y-3 mt-4">
                    <div className="font-pixel text-xs text-[#C85A32] uppercase font-bold tracking-wider">
                      Điểm nhấn chiến lược (PESO Model)
                    </div>
                    <p className="text-sm text-[#44403C] leading-relaxed">
                      {project.caseStudyDetails.framework}
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#57534E] list-disc list-inside">
                      {project.caseStudyDetails.results.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="md:col-span-4 space-y-5 p-5 rounded-2xl bg-[#F5F2EB] border border-[#E7E2DA]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Phần mềm / Công cụ
                  </span>
                  <span className="text-sm font-semibold text-[#C85A32]">{project.software}</span>
                </div>

                {project.duration && (
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                      Thời lượng
                    </span>
                    <span className="text-sm font-semibold text-[#1C1917]">{project.duration}</span>
                  </div>
                )}

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-2">
                    Kỹ thuật & Trọng tâm
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(project.focus || []).map((pt: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E7E2DA] text-[11px] font-medium text-[#44403C]"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 border-t border-[#E7E2DA] bg-[#F5F2EB] flex items-center justify-between text-xs text-[#78716C] font-medium">
            <span>Bấm ESC hoặc nhấp ra ngoài để đóng</span>
            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded-full bg-[#1C1917] text-[#FAF7F2] hover:bg-[#C85A32] font-semibold transition-colors cursor-pointer"
            >
              ĐÓNG
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
