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
      className="py-24 lg:py-32 px-6 sm:px-10 md:px-16 bg-[#F5F2EB] text-[#1C1917] border-t border-[#E7E2DA]"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
        {/* Section Masthead */}
        <div className="border-b border-[#E7E2DA] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-pixel text-xs tracking-widest text-[#C85A32] uppercase block">
              [ 02 / KỸ NĂNG & CÔNG CỤ ]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917]">
              Năng lực & Công cụ
            </h2>
          </div>
          <p className="font-serif italic font-medium text-base sm:text-lg text-[#57534E] max-w-md">
            "Kết hợp tư duy báo chí truyền thông với kỹ năng thực chiến về video, hậu kỳ và thiết kế trực quan."
          </p>
        </div>

        {/* Editorial Architecture: Capabilities & Tools (Left) | Asset 003 (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start font-sans">
          {/* Left Column: 6 Capabilities & 4 Tools */}
          <div className="lg:col-span-6 space-y-10">
            {/* 6 Capabilities */}
            <div className="space-y-6">
              <span className="font-pixel text-xs uppercase tracking-widest text-[#C85A32] font-semibold block">
                CÁC MẢNG NĂNG LỰC CHUYÊN MÔN
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 pt-2">
                {capabilities.map((cap) => (
                  <div key={cap.num} className="space-y-1.5 border-t border-[#E7E2DA] pt-3.5">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-[#78716C]">
                      <span className="font-pixel text-[#C85A32] font-bold text-sm">{cap.num}</span>
                      <span>/</span>
                      <span className="font-pixel text-[10px] tracking-wider uppercase text-[#78716C]">LĨNH VỰC</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1917]">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Software Tools */}
            <div className="pt-4 border-t border-[#E7E2DA] space-y-4">
              <span className="font-pixel text-xs uppercase tracking-widest text-[#C85A32] font-semibold block">
                CÔNG CỤ THỰC CHIẾN
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {softwareTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center space-x-3.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E7E2DA]/80 shadow-2xs hover:border-[#C85A32]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E7E2DA] flex items-center justify-center shrink-0 shadow-2xs">
                      <img
                        src={tool.iconSrc}
                        alt={tool.name}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C1917] leading-tight">
                        {tool.name}
                      </h4>
                      <p className="text-[11px] text-[#78716C] font-normal">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Asset 003 displayed at large editorial scale (100% intact, no crop) */}
          <div className="lg:col-span-6 w-full lg:sticky lg:top-28">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E7E2DA] bg-[#EFE9DF] group">
              <img
                src="/assets/visuals/003.png"
                alt="Quy trình sản xuất đa phương tiện 7 bước - Vương Thành Trung"
                className="w-full h-auto object-contain block"
              />
              <div className="absolute bottom-4 left-4 sm:left-6 px-3.5 py-1.5 rounded-full bg-[#1C1917]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-pixel tracking-wider uppercase pointer-events-none border border-white/10">
                Quy trình: IDEA → SCRIPT → SHOOT → EDIT → COLOR → SOUND → PUBLISH
              </div>
            </div>

            <p className="mt-4 text-xs font-normal text-[#78716C] tracking-normal leading-relaxed">
              * Quy trình làm việc thực chiến kết hợp liên hoàn giữa kịch bản, quay chụp, dựng DaVinci Resolve, xử lý hình ảnh Photoshop và hoàn thiện xuất bản trên Canva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
