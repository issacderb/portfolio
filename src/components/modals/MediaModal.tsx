import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  imageSrc?: string;
  note?: string;
  placeholderText?: string;
}

export const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  imageSrc,
  note,
  placeholderText
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0E1A]/90 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#111827] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#162036]/60">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#F0B7D8] block">
                  {category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  {title}
                </h3>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Đóng cửa sổ"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body / Image View */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-[#090D16]">
              {placeholderText && (
                <div className="mb-4 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-mono text-[#F0B7D8]">
                  {placeholderText}
                </div>
              )}

              {imageSrc ? (
                <div className="w-full flex justify-center">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-lg border border-white/10"
                  />
                </div>
              ) : (
                <div className="py-20 text-center text-white/60 font-sans text-sm">
                  Đang chuẩn bị nội dung hiển thị chi tiết...
                </div>
              )}

              {note && (
                <p className="mt-4 text-xs font-mono text-white/50 text-center italic">
                  {note}
                </p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-white/10 bg-[#162036]/60 flex items-center justify-between text-xs text-white/60 font-sans">
              <span>Nhấn phím ESC hoặc bấm ra ngoài để đóng</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#0E1526] font-medium transition-colors"
              >
                ĐÓNG
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
