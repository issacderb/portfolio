import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle?: string;
  badge?: string;
  externalUrl?: string;
  actionLabel?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  badge,
  externalUrl,
  actionLabel
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1C1917]/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#FAF7F2] border border-[#E7E2DA] rounded-2xl overflow-hidden shadow-2xl flex flex-col text-[#1C1917]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E2DA] bg-[#F5F2EB] shrink-0">
            <div className="flex items-center space-x-3">
              {badge && (
                <span className="font-pixel px-2.5 py-1 rounded bg-[#1C1917] text-[11px] font-bold text-white uppercase tracking-wider">
                  {badge}
                </span>
              )}
              <div>
                <h3 className="font-serif text-lg font-bold tracking-tight text-[#1C1917] leading-tight">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-xs text-[#78716C] leading-snug font-normal">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {externalUrl && (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5"
                >
                  <span>{actionLabel || 'MỞ LIÊN KẾT'}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
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
          </div>

          {/* Image Container with Scroll for Tall Artworks */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#EFE9DF] flex items-center justify-center">
            <img
              src={imageUrl}
              alt={title}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-lg border border-[#E7E2DA]"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
