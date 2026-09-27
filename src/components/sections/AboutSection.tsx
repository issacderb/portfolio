import React from 'react';
import { authorData } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 px-6 sm:px-10 md:px-16 bg-[#F5F2EB] text-[#1C1917] border-t border-[#E7E2DA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        {/* Section Masthead */}
        <div className="max-w-3xl space-y-3">
          <span className="font-pixel text-xs tracking-wider uppercase text-[#78716C] block">
            01 / VỀ TÔI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12]">
            Kể chuyện bằng hình ảnh, video & thiết kế.
          </h2>
        </div>

        {/* Editorial Composition: Text 40% | Large Editorial Artwork 60% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Text Block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-base sm:text-lg text-[#44403C] leading-relaxed font-sans font-light">
              <p>{authorData.aboutP1}</p>
              <p>{authorData.aboutP2}</p>
            </div>

            {/* University & GPA details */}
            <div className="pt-6 border-t border-[#E7E2DA] space-y-1.5 font-pixel">
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1C1917] uppercase">
                {authorData.university}
              </div>
              <div className="text-xs tracking-wider text-[#78716C]">
                Chuyên ngành Truyền thông đa phương tiện · GPA {authorData.gpa}
              </div>
            </div>
          </div>

          {/* Right: Asset 002 displayed at large editorial scale (100% intact, no crop) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E7E2DA] bg-[#EFE9DF] group">
              <img
                src="/assets/visuals/002.png"
                alt="Không gian nghiên cứu & Phát triển ý tưởng - Vương Thành Trung"
                className="w-full h-auto object-contain block"
              />
              <div className="absolute bottom-4 left-4 sm:left-6 px-3.5 py-1.5 rounded-full bg-[#1C1917]/85 backdrop-blur-md text-white font-pixel text-[11px] tracking-wider pointer-events-none border border-white/10">
                Không gian nghiên cứu & Phát triển ý tưởng · Học viện Báo chí
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
