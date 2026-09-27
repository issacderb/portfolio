export interface AuthorProfile {
  name: string;
  greeting: string;
  major: string;
  positioning: string;
  university: string;
  gpa: string;
  intro: string;
  aboutP1: string;
  aboutP2: string;
  email: string;
  phone: string;
  cvUrl: string;
}

export interface SoftwareTool {
  name: string;
  iconSrc: string;
  category: string;
}

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  focus: string[];
  software?: string;
  duration?: string;
  thumbnail: string;
  videoUrl?: string;
  externalUrl?: string;
  actionLabel?: string;
  galleryImages?: {
    url: string;
    caption: string;
  }[];
  caseStudyDetails?: {
    framework: string;
    strategy?: string;
    results: string[];
  };
}

export interface PosterItem {
  id: string;
  title: string;
  category: string;
  image: string;
  software: string;
}

export const authorData: AuthorProfile = {
  name: 'VƯƠNG THÀNH TRUNG',
  greeting: 'Xin chào, mình là',
  major: 'TRUYỀN THÔNG ĐA PHƯƠNG TIỆN',
  positioning: 'Kể chuyện bằng hình ảnh, video và thiết kế.',
  university: 'Học viện Báo chí và Tuyên truyền',
  gpa: '3.4 / 4.0',
  intro: 'Mình quan tâm đến video, hậu kỳ, thiết kế biên tập và cách biến những câu chuyện thành trải nghiệm hình ảnh.',
  aboutP1: 'Mình là sinh viên Truyền thông đa phương tiện tại Học viện Báo chí và Tuyên truyền, quan tâm đến cách kể chuyện bằng hình ảnh, video và thiết kế.',
  aboutP2: 'Mình thích biến những ý tưởng và thông tin phức tạp thành những sản phẩm trực quan, dễ tiếp cận và có cảm xúc.',
  email: 'vuongthanhtrung0710@gmail.com',
  phone: '0388747155',
  cvUrl: '/cv/Vuong-Thanh-Trung-CV.pdf'
};

export const softwareTools: SoftwareTool[] = [
  {
    name: 'Canva',
    iconSrc: '/assets/icons/canva.svg',
    category: 'Thiết kế trực quan & Trình bày'
  },
  {
    name: 'Photoshop',
    iconSrc: '/assets/icons/photoshop.svg',
    category: 'Xử lý hình ảnh & Dàn trang'
  },
  {
    name: 'DaVinci Resolve',
    iconSrc: '/assets/icons/davinci-resolve.svg',
    category: 'Dựng phim, Color Grading & Âm thanh'
  },
  {
    name: 'CapCut',
    iconSrc: '/assets/icons/capcut.svg',
    category: 'Hậu kỳ video ngắn đa nền tảng'
  }
];

export const projectsList: ProjectDetail[] = [
  {
    id: 'talking-head-01',
    number: '01',
    title: 'VIDEO TALKING HEAD 01',
    category: '01 / VIDEO / TALKING HEAD',
    shortDesc: 'Video định dạng dọc 9:16 tối ưu cho nền tảng số, tập trung vào nhịp cắt jump-cut, SFX, phụ đề động và motion graphics.',
    fullDesc: 'Video ngắn định dạng dọc 9:16 tối ưu cho mạng xã hội. Kỹ thuật cắt jump-cut gãy gọn kết hợp hiệu ứng âm thanh SFX đồng bộ và hệ thống phụ đề động giúp truyền đạt thông điệp trực diện, giữ chân người xem qua từng giây.',
    focus: ['Jump-cut', 'SFX', 'Motion Graphics', 'Phụ đề', 'Nhịp dựng'],
    duration: '1 phút (9:16)',
    thumbnail: '/assets/projects/thumb-talking-head.jpg',
    videoUrl: '/assets/videos/talking-head.mp4'
  },
  {
    id: 'talking-head-02',
    number: '02',
    title: 'VIDEO TALKING HEAD 02',
    category: '02 / VIDEO / TALKING HEAD',
    shortDesc: 'Video định dạng dọc 9:16 với nhịp dựng gãy gọn, chuyển cảnh mượt mà và cân chỉnh màu sắc chuyên nghiệp.',
    fullDesc: 'Tác phẩm video ngắn định dạng dọc 9:16 khai thác nhịp dựng mượt mà, chuyển cảnh trực quan và cân chỉnh màu sắc tỉ mỉ trên DaVinci Resolve. Âm thanh hiện trường và nhạc nền được làm sạch và hòa âm cân bằng.',
    focus: ['Dựng hình', 'Color Grading', 'Xử lý âm thanh', 'Nhịp dựng'],
    software: 'DaVinci Resolve',
    duration: '30 giây (9:16)',
    thumbnail: '/assets/projects/thumb-phim-tai-lieu.jpg',
    videoUrl: '/assets/videos/phim-tai-lieu.mp4'
  },
  {
    id: 'emagazine',
    number: '03',
    title: 'E-MAGAZINE',
    category: '03 / THIẾT KẾ BIÊN TẬP',
    shortDesc: 'Bỏ bàn phím, gắp hạt nhựa — KẾT workshop',
    fullDesc: 'Ấn phẩm E-Magazine kỹ thuật số được xây dựng với tư duy thiết kế biên tập báo chí hiện đại. Bài viết kết hợp hài hòa giữa ảnh chụp tư liệu workshop, nghệ thuật sắp đặt chữ (Typography) phóng khoáng và lưới bố cục mở, mang đến trải nghiệm đọc thư thái và giàu cảm xúc.',
    focus: ['Typography', 'Visual Hierarchy', 'Editorial Layout', 'Digital Storytelling'],
    thumbnail: '/assets/projects/emagazine-cover.png',
    externalUrl: 'https://emagazinet.my.canva.site/',
    actionLabel: 'XEM TOÀN BỘ ẤN PHẨM'
  },
  {
    id: 'infographic',
    number: '04',
    title: 'INFOGRAPHIC',
    category: '04 / THIẾT KẾ THÔNG TIN',
    shortDesc: 'Trực quan hóa dữ liệu báo chí đa chiều',
    fullDesc: 'Dự án đồ họa thông tin báo chí chuyển hóa dữ liệu kinh tế — xã hội phức tạp thành hệ thống trực quan hóa trực diện, mạch lạc. Từng biểu đồ, số liệu và điểm mốc thời gian được tổ chức chặt chẽ theo nguyên tắc thiết kế thông tin, giúp người đọc nắm bắt thông điệp nhanh chóng mà không bị choáng ngợp.',
    focus: ['Data Visualization', 'Information Design', 'Typography', 'Layout'],
    thumbnail: '/assets/projects/infographic-full.png',
    actionLabel: 'XEM BẢN ĐẦY ĐỦ'
  },
  {
    id: 'clear-path',
    number: '05',
    title: 'CLEAR PATH | PURE TRUTH. PURE LIFE.',
    category: '05 / WEB / INTERACTIVE',
    shortDesc: 'Trải nghiệm web tương tác kết hợp visual storytelling, thông tin nhân đạo và bản đồ dữ liệu thực địa.',
    fullDesc: 'Trải nghiệm web tương tác kết hợp visual storytelling, thông tin nhân đạo, bản đồ thực địa tương tác và hệ thống dữ liệu xác thực theo thời gian thực (Field Signals). Thiết kế giao diện báo chí số trực quan, đưa người xem vào không gian phản ánh chân thực về các vùng xung đột.',
    focus: ['Web Interactive', 'Storytelling', 'Information Design', 'Interactive Map'],
    thumbnail: '/assets/projects/clearpath-desktop.png',
    externalUrl: 'https://clearpath-beta-six.vercel.app/',
    actionLabel: 'XEM TRẢI NGHIỆM'
  }
];

export const posterDesigns: PosterItem[] = [
  {
    id: 'poster-chuk',
    title: 'Chuk Tea & Coffee',
    category: 'Poster F&B / Quảng cáo sản phẩm',
    image: '/assets/posters/poster-chuk-tea.png',
    software: 'Photoshop'
  },
  {
    id: 'poster-tham-my',
    title: 'Thẩm mỹ viện — Brand Visual',
    category: 'Bộ nhận diện thương hiệu / Quảng cáo',
    image: '/assets/posters/poster-tham-my.png',
    software: 'Photoshop'
  },
  {
    id: 'poster-day7',
    title: 'Editorial Poster 01',
    category: 'Poster Nghệ thuật & Typography',
    image: '/assets/posters/poster-day7.png',
    software: 'Photoshop'
  },
  {
    id: 'poster-day8',
    title: 'Creative Layout Poster 02',
    category: 'Thiết kế Truyền thông số',
    image: '/assets/posters/poster-day8.png',
    software: 'Photoshop'
  },
  {
    id: 'poster-dayv2',
    title: 'Campaign Poster 03',
    category: 'Poster Sự kiện & Nội dung số',
    image: '/assets/posters/poster-dayv2.png',
    software: 'Photoshop'
  },
  {
    id: 'banner-day4',
    title: 'Nâng Tầm Nhan Sắc',
    category: 'Banner Thương mại / Khuyến mãi',
    image: '/assets/posters/banner-day4.png',
    software: 'Photoshop'
  }
];
