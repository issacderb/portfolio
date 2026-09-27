import React from 'react';
import { softwareTools } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Dựng video',
      desc: 'Tổ chức nhịp cắt gãy gọn, chuyển cảnh mượt mà, kiểm soát tiết tấu và nhịp điệu người xem qua từng khung hình.'
    },
    {
      num: '02',
      title: 'Hậu kỳ & xử lý âm thanh',
      desc: 'Làm sạch tạp âm, đồng bộ hiệu ứng SFX, cân bằng âm lượng và hòa âm đa kênh trực diện.'
    },
    {
      num: '03',
      title: 'Color Grading',
      desc: 'Hiệu chỉnh màu sắc, cân bằng ánh sáng và thiết lập tone màu điện ảnh chuyên sâu trên DaVinci Resolve.'
    },
    {
      num: '04',
      title: 'Thiết kế biên tập',
      desc: 'Tư duy layout báo chí hiện đại, dàn trang ấn phẩm số, E-Magazine và nghệ thuật sắp đặt chữ (Typography).'
    },
    {
      num: '05',
      title: 'Kể chuyện bằng hình ảnh',
      desc: 'Chuyển hóa thông điệp phức tạp thành chuỗi trải nghiệm thị giác có chiều sâu, cảm xúc và thông điệp rõ ràng.'
    },
    {
      num: '06',
      title: 'Trực quan hóa dữ liệu',
      desc: 'Thiết kế Infographic báo chí, sơ đồ số liệu đa chiều, hệ thống hóa thông tin giúp người đọc tiếp nhận trực quan.'
    }
  ];

  return (
    <section
      id="skills"
      className="py-28 lg:py-36 px-6 sm:px-10 md:px-16 bg-[#F5F2EB] text-[#1C1917] border-t border-[#E7E2DA]"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Masthead */}
        <div className="border-b border-[#E7E2DA] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest uppercase text-[#78716C] block">
              03 / KỸ NĂNG & CÔNG CỤ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917]">
              Năng lực & Công cụ
            </h2>
          </div>
          <p className="font-serif italic text-base sm:text-lg text-[#57534E] max-w-md">
            "Kết hợp tư duy báo chí truyền thông với kỹ năng thực chiến về video, hậu kỳ và thiết kế trực quan."
          </p>
        </div>

        {/* Pure Typographic Editorial Architecture (No Redundant Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: 6 Core Capabilities in Open Editorial Grid */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C85A32] font-semibold block">
              CÁC MẢNG NĂNG LỰC CHUYÊN MÔN
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-2">
              {capabilities.map((cap) => (
                <div key={cap.num} className="space-y-2 border-t border-[#E7E2DA] pt-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#78716C]">
                    <span className="text-[#C85A32] font-semibold">{cap.num}</span>
                    <span>/</span>
                    <span className="uppercase tracking-wider">LĨNH VỰC</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed font-sans font-light">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Software Tools with Real Official SVGs */}
          <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-[#E7E2DA] lg:pl-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C85A32] font-semibold block">
              CÔNG CỤ THỰC CHIẾN
            </span>

            <div className="space-y-6 pt-2">
              {softwareTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#EFE9DF] transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-white border border-[#E7E2DA] flex items-center justify-center shrink-0 shadow-xs">
                    <img
                      src={tool.iconSrc}
                      alt={tool.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                      {tool.name}
                    </h4>
                    <p className="text-xs font-sans text-[#78716C] leading-snug">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Note */}
            <div className="pt-6 border-t border-[#E7E2DA] text-xs font-mono text-[#78716C] leading-relaxed">
              * Sử dụng thành thạo quy trình làm việc kết hợp giữa phần mềm dựng phim DaVinci Resolve, xử lý hình ảnh Photoshop và thiết kế ấn phẩm số trên Canva.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
