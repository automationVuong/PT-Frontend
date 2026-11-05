'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Dropdown, DropdownNavItem } from '@/components/ui/Dropdown';

interface NewsArticle {
  category: string;
  title: string;
  author: string;
  date?: string;
  image?: string;
}

interface CategoryNav {
  label: string;
  items: DropdownNavItem[];
}

const CATEGORY_NAVS: CategoryNav[] = [
  {
    label: "Tin tức & Xu hướng",
    items: [
      { name: "Tin thị trường chung", href: "#" },
      { name: "Chính sách & Pháp lý", href: "#" },
      { name: "Xu hướng thiết kế", href: "#" },
      { name: "Bất động sản công nghệ", href: "#" }
    ]
  },
  {
    label: "Mua nhà",
    items: [
      { name: "Cẩm nang người mua", href: "#" },
      { name: "Tư vấn tài chính", href: "#" },
      { name: "Kinh nghiệm xem nhà", href: "#" }
    ]
  },
  {
    label: "Bán nhà",
    items: [
      { name: "Mẹo định giá nhà", href: "#" },
      { name: "Kinh nghiệm đăng tin", href: "#" },
      { name: "Chuẩn bị pháp lý bán", href: "#" }
    ]
  },
  {
    label: "Cho thuê",
    items: [
      { name: "Kinh nghiệm thuê nhà", href: "#" },
      { name: "Dành cho chủ nhà", href: "#" },
      { name: "Hợp đồng cho thuê", href: "#" }
    ]
  },
  {
    label: "Nhà người nổi tiếng",
    items: [
      { name: "Biệt thự sao Hollywood", href: "#" },
      { name: "Dinh thự giới tỷ phú", href: "#" }
    ]
  },
  {
    label: "Tư vấn & Cẩm nang",
    items: [
      { name: "Mẹo dọn dẹp & Decor", href: "#" },
      { name: "Cải tạo không gian", href: "#" },
      { name: "Phong thủy nhà ở", href: "#" }
    ]
  }
];

const LATEST_NEWS: NewsArticle[] = [
  {
    category: "TIN BẤT ĐỘNG SẢN",
    title: "Chính sách mới về dữ liệu quy hoạch và tác động đến thị trường nhà đất",
    author: "Tristan Navera"
  },
  {
    category: "BẤT ĐỘNG SẢN NGƯỜI NỔI TIẾNG",
    title: "Kylie Kelce tiết lộ bí quyết để trở thành một vị khách trọ hoàn hảo",
    author: "Kristi Karruit"
  },
  {
    category: "XU HƯỚNG",
    title: "Thành phố cắt giảm thủ tục rườm rà nhằm thúc đẩy xây dựng nhà ở xã hội",
    author: "Allaire Conte"
  },
  {
    category: "TIN BẤT ĐỘNG SẢN",
    title: "Cảnh báo các quỹ đầu tư gom đất nền và ảnh hưởng tới người mua ở thực",
    author: "Allaire Conte"
  }
];

const EDITOR_PICKS: NewsArticle[] = [
  {
    category: "BẤT ĐỘNG SẢN NGƯỜI NỔI TIẾNG",
    title: "Ca sĩ Meghan Trainor rao bán căn hộ 18 triệu USD tại Encino từng thuộc sở hữu của Joe Jonas",
    author: "Hannah Chambers",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "TIN BẤT ĐỘNG SẢN",
    title: "Thị trưởng mới cam kết phát triển 72.000 căn hộ nhà ở giá rẻ mới",
    author: "Snejana Farberov",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
  }
];

const HOME_IMPROVEMENT: NewsArticle[] = [
  {
    category: "CẢI TẠO NHÀ CỬA",
    title: "Xu hướng cải tạo nhà đang chững lại, nhưng đừng bỏ lỡ các sửa chữa quan trọng này",
    author: "Anna Baluch",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  {
    category: "MẸO HAY",
    title: "Cẩm nang dọn dẹp: Đồ nào nên bán, đồ nào nên quyên góp theo chuyên gia",
    author: "Sarah Lyon",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
  }
];

export const NewsInsightsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Tin tức & Phân tích (News & Insights)
          </h2>

          {/* Navigation Bar using Dropdown components */}
          <div className="border-b border-slate-200 pb-3 flex flex-wrap justify-center gap-4 md:gap-8">
            {CATEGORY_NAVS.map((nav) => (
              <Dropdown 
                key={nav.label} 
                label={nav.label} 
                items={nav.items} 
              />
            ))}
          </div>
        </div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Latest News Sidebar (3 Cols) */}
          <div className="lg:col-span-3 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-6">
            <div className="text-xs font-bold text-slate-400">THỨ NĂM, 5 THÁNG 11, 2026</div>
            <h3 className="text-lg font-black tracking-tight border-b border-slate-900 pb-2">
              Tin mới nhất
            </h3>

            <div className="space-y-6">
              {LATEST_NEWS.map((item, index) => (
                <div key={index} className="space-y-1 group cursor-pointer">
                  <span className="text-[10px] font-bold text-red-600 tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Bởi {item.author}
                  </p>
                </div>
              ))}
            </div>

            {/* Expert Quote Callout Card */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2 mt-6">
              <p className="text-xs font-semibold text-slate-800 italic leading-relaxed">
                "Điểm mấu chốt cần theo dõi tối nay là kết quả bầu cử ảnh hưởng thế nào đến các vấn đề chi phí nhà ở."
              </p>
              <div className="text-[10px] text-slate-500 font-bold">
                — Jake Krimmel / Chuyên gia kinh tế cao cấp
              </div>
            </div>
          </div>

          {/* Column 2: Featured Hero Story & Editor's Picks (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Top Featured Article */}
            <div className="space-y-4 group cursor-pointer">
              <div className="w-full h-[320px] rounded-2xl overflow-hidden relative shadow-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                    Tin nổi bật
                  </span>
                  <h3 className="text-xl md:text-2xl font-black leading-tight group-hover:underline">
                    Thị trường biến động mạnh sau khi giá năng lượng và lãi suất vay mua nhà có nhiều thay đổi
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    "Mọi người đều hiểu vì sao thị trường thay đổi. Bất kỳ cuộc thảo luận trung thực nào cũng phải bắt đầu từ đây," chuyên gia chia sẻ.
                  </p>
                  <div className="text-[11px] text-slate-300 font-medium">
                    Bởi Tristan Navera
                  </div>
                </div>
              </div>
            </div>

            {/* Editor's Picks Grid */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-black tracking-tight border-b border-slate-900 pb-2">
                Đề xuất từ Biên tập viên
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {EDITOR_PICKS.map((item, index) => (
                  <div key={index} className="space-y-3 group cursor-pointer">
                    <div className="w-full h-40 rounded-xl overflow-hidden relative bg-slate-100">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-red-600 tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-medium block">
                      Bởi {item.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Improvement & Pro Tips Row */}
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {HOME_IMPROVEMENT.map((item, index) => (
                  <div key={index} className="space-y-3 group cursor-pointer">
                    <div className="w-full h-40 rounded-xl overflow-hidden relative bg-slate-100">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-medium block">
                      Bởi {item.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 3: Market Research & Newsletter Signup (3 Cols) */}
          <div className="lg:col-span-3 space-y-6 bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div>
              <h3 className="text-lg font-black tracking-tight mb-4">
                Nghiên cứu thị trường
              </h3>
              <div className="space-y-4 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                    alt="Analyst" 
                    className="w-12 h-12 rounded-full object-cover border border-slate-300"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition">
                      Cập nhật thị trường nhà ở hàng tuần
                    </h4>
                    <p className="text-[10px] text-slate-500">Jake Krimmel • Chuyên gia kinh tế</p>
                  </div>
                </div>

                <div className="w-full h-36 rounded-xl overflow-hidden relative shadow-inner">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80')` }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                    <span className="text-white text-xs font-bold text-center">
                      Đâu là nơi bạn muốn chuyển đến?
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  Dữ liệu tháng 10/2026 cho thấy thị trường gần như chững lại khi cả người mua và người bán đều chờ đợi động thái tiếp theo từ lãi suất.
                </p>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:underline">
                  Đọc toàn bộ bài viết <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Newsletter / Follow Card */}
            <div className="text-center space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900">
                Theo dõi Tin tức & Phân tích
              </h4>
              <p className="text-xs text-slate-500">
                Nhận thông tin cập nhật mới nhất về thị trường bất động sản ngay vào hộp thư đến của bạn.
              </p>
              <button className="w-full bg-slate-900 hover:bg-black text-white py-2.5 rounded-full text-xs font-bold transition shadow-md">
                Đăng ký ngay
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsInsightsSection;