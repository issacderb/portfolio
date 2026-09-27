import React from 'react';
import { authorData } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 lg:py-36 pl-6 sm:pl-10 md:pl-16 pr-6 sm:pr-10 lg:pr-0 bg-[#F5F2EB] text-[#1C1917] border-t border-[#E7E2DA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Masthead */}
        <div className="mb-14 sm:mb-20 max-w-3xl space-y-4">
          <span className="font-mono text-xs tracking-widest uppercase text-[#78716C] block">
            01 / VỀ TÔI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12]">
            Kể chuyện bằng hình ảnh, video & thiết kế.
          </h2>
        </div>

        {/* Editorial Composition: Text 38% | Bleeding Image 62% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Block (~38% width) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pr-0 lg:pr-6">
            <div className="space-y-6 text-base sm:text-lg text-[#44403C] leading-relaxed font-sans font-light">
              <p>{authorData.aboutP1}</p>
              <p>{authorData.aboutP2}</p>
            </div>

            {/* University & GPA details */}
            <div className="pt-8 border-t border-[#E7E2DA] space-y-1.5">
              <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#1C1917] uppercase">
                {authorData.university}
              </div>
              <div className="font-mono text-xs tracking-wider text-[#78716C]">
                Chuyên ngành Truyền thông đa phương tiện · GPA {authorData.gpa}
              </div>
            </div>
          </div>

          {/* Right: LARGE BLEEDING IMAGE (Extends beyond the normal grid to the viewport edge) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full lg:w-[115%] lg:-mr-32 xl:-mr-48 h-[55vh] sm:h-[68vh] lg:h-[80vh] overflow-hidden rounded-2xl lg:rounded-l-3xl shadow-xl bg-[#EFE9DF]">
              <img
                src="/assets/visuals/02-about-moodboard.jpg"
                alt="Storyboarding, creative moodboard wall and sunset desk - Vương Thành Trung"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 sm:left-6 px-4 py-2 rounded-full bg-[#1C1917]/85 backdrop-blur-md text-white font-mono text-[11px] tracking-wider pointer-events-none">
                Không gian nghiên cứu & Phát triển ý tưởng · Học viện Báo chí
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
