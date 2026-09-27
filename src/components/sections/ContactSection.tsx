import React, { useState } from 'react';
import { authorData } from '../../data/portfolioData';

interface ContactSectionProps {
  onDownloadCv: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onDownloadCv }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(authorData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 sm:px-10 md:px-16 bg-[#FAF7F2] text-[#1C1917] border-t border-[#E7E2DA]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Contact Information (~45-50% desktop width) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <span className="font-mono text-xs tracking-widest uppercase text-[#78716C] block">
              04 / LIÊN HỆ
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-tight">
              Cùng kết nối nhé!
            </h2>

            <p className="text-base sm:text-lg text-[#57534E] font-sans font-light max-w-lg leading-relaxed">
              Mình luôn sẵn sàng trao đổi về cơ hội thực tập, hợp tác hoặc những dự án truyền thông thú vị.
            </p>

            {/* Direct Editorial Contact Info */}
            <div className="space-y-5 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block font-semibold">
                  Email
                </span>
                <a
                  href={`mailto:${authorData.email}`}
                  className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1C1917] hover:text-[#C85A32] transition-colors break-all block"
                >
                  {authorData.email}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E7E2DA]">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block font-semibold">
                    Số điện thoại / Zalo
                  </span>
                  <a
                    href={`tel:${authorData.phone}`}
                    className="font-mono text-sm sm:text-base font-semibold text-[#1C1917] hover:text-[#C85A32] transition-colors"
                  >
                    {authorData.phone}
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block font-semibold">
                    Học vấn
                  </span>
                  <span className="text-xs sm:text-sm font-sans text-[#57534E] block">
                    {authorData.university}
                  </span>
                  <span className="text-xs font-mono text-[#78716C] block">
                    GPA {authorData.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons: GỬI EMAIL, TẢI CV, SAO CHÉP EMAIL */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={`mailto:${authorData.email}`}
              className="px-8 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center space-x-2"
            >
              <span>GỬI EMAIL</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <button
              onClick={onDownloadCv}
              className="px-8 py-3.5 rounded-full bg-transparent hover:bg-[#1C1917] text-[#1C1917] hover:text-white border border-[#1C1917]/30 hover:border-[#1C1917] font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2"
            >
              <span>TẢI CV</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3.5 rounded-full text-xs font-mono text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
            >
              {copied ? '✓ Đã sao chép' : 'Sao chép email'}
            </button>
          </div>
        </div>

        {/* Right Column: LARGE CONTACT VISUAL (04-contact-sunset.jpg) (~50% width, 70-75vh height) */}
        <div className="lg:col-span-6">
          <div className="relative rounded-lg overflow-hidden border border-[#E7E2DA] bg-[#EFE9DF]">
            <img
              src="/assets/visuals/04-contact-sunset.jpg"
              alt="Editorial magazine and camera at sunset desk - Vương Thành Trung"
              className="w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
