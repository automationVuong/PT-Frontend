'use client';
import React, { useState } from 'react';
import { Search, Globe, Share2, MessageCircle, Video } from 'lucide-react';
import { Dropdown } from '@/components/ui/Dropdown';

// Interface cho Bài viết
interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author?: string;
  date?: string;
  imageUrl: string;
}

// Dữ liệu bài viết phổ biến nhất
const POPULAR_ARTICLES: Article[] = [
  {
    id: 'p1',
    category: 'MUA NHÀ',
    title: 'Giá nhà trung bình tăng kỷ lục: Những khu vực nào vẫn còn rẻ?',
    excerpt: 'Phân tích dữ liệu mới nhất cho thấy người mua vẫn có thể tìm thấy cơ hội đầu tư tốt tại các khu vực đang phát triển.',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p2',
    category: 'MUA NHÀ',
    title: '5 sai lầm tài chính khiến bạn mất cọc khi mua căn hộ lần đầu',
    excerpt: 'Các chuyên gia khuyến cáo người mua cần chuẩn bị kỹ lưỡng về dòng tiền và kiểm tra pháp lý trước khi ký hợp đồng.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p3',
    category: 'MUA NHÀ',
    title: 'Lãi suất vay mua nhà giảm nhẹ: Thời điểm vàng để xuống tiền?',
    excerpt: 'Ngân hàng đồng loạt hạ lãi suất gói ưu đãi, mở ra cơ hội sở hữu nhà ở thực cho người dân.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p4',
    category: 'MUA NHÀ',
    title: 'Kinh nghiệm thương lượng giá nhà bớt hàng trăm triệu đồng',
    author: 'Trần Văn A',
    excerpt: 'Bí quyết đánh giá chất lượng công trình và nắm bắt tâm lý chủ nhà để đạt được thỏa thuận tốt nhất.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
];

// Dữ liệu danh sách tất cả bài viết
const ALL_ARTICLES: Article[] = [
  ...POPULAR_ARTICLES,
  {
    id: 'a5',
    category: 'MUA NHÀ',
    title: 'Nên mua nhà chung cư hay nhà đất trong hẻm cùng tầm giá 3 tỷ?',
    excerpt: 'So sánh ưu nhược điểm về tiện ích, tính thanh khoản và chất lượng sống giữa 2 loại hình phổ biến.',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'a6',
    category: 'MUA NHÀ',
    title: 'Quy trình kiểm tra sổ đỏ/sổ hồng giả khi giao dịch bất động sản',
    excerpt: 'Những dấu hiệu nhận biết pháp lý có rủi ro giúp bạn tránh bẫy lừa đảo mua bán nhà đất.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'a7',
    category: 'MUA NHÀ',
    title: 'Đánh giá tiềm năng các dự án hạ tầng giao thông trọng điểm năm 2026',
    excerpt: 'Các tuyến đường và cầu mới sắp khởi công hứa hẹn sẽ kích sóng bất động sản quanh khu vực.',
    imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'a8',
    category: 'MUA NHÀ',
    title: 'Làm sao để mua được nhà khi thu nhập trung bình 20 triệu/tháng?',
    excerpt: 'Lập kế hoạch tích lũy tài chính và chiến lược lựa chọn gói vay mua nhà trả góp phù hợp.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'a9',
    category: 'MUA NHÀ',
    title: 'Chi phí ẩn khi mua nhà mà người lần đầu làm chuyện ấy hay bỏ qua',
    excerpt: 'Thuế, phí môi giới, phí bảo trì, phí quản lý chung cư... những khoản chi bạn cần tính trước.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
  },
];

export const BuyCategoryPage: React.FC = () => {
  const [sortOption, setSortOption] = useState('Mới nhất');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      {/* 1. Header Navigation Bar */}
      <div className="border-b border-slate-200 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-black text-slate-900">
              Tin tức & Phân tích (News & Insights)
            </h1>
          </div>

          {/* Reusable Dropdowns Navigation */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold">
            <Dropdown
              label="Tin tức & Xu hướng"
              items={[
                { name: 'Tin thị trường', href: '#' },
                { name: 'Pháp lý', href: '#' },
              ]}
            />
            <Dropdown
              label="Mua nhà"
              items={[
                { name: 'Cẩm nang mua nhà', href: '#' },
                { name: 'Kinh nghiệm vay', href: '#' },
              ]}
            />
            <Dropdown
              label="Bán nhà"
              items={[
                { name: 'Định giá nhà', href: '#' },
                { name: 'Đăng tin hiệu quả', href: '#' },
              ]}
            />
            <Dropdown
              label="Cho thuê"
              items={[
                { name: "Tìm nhà thuê", href: '#' },
                { name: 'Đăng tin cho thuê', href: '#' },
              ]}
            />
            <Dropdown
              label="Nhà sao & Tỷ phú"
              items={[
                { name: 'Nhà người nổi tiếng', href: '#' },
              ]}
            />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Page Title & Intro */}
        <div className="mb-10">
          <h2 className="text-4xl font-black text-slate-900 mb-2">Mua nhà (Buy)</h2>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Cho dù bạn đang tìm kiếm căn nhà đầu tiên, muốn đổi không gian sống rộng hơn hay đầu tư bất động sản, hãy tham khảo các thông tin hướng dẫn, xu hướng thị trường và lời khuyên từ chuyên gia dưới đây.
          </p>
        </div>

        {/* 2. Most Popular Buy Articles Section */}
        <section className="mb-14">
          <h3 className="text-lg font-black text-slate-900 border-b border-slate-900 pb-2 mb-6">
            Bài viết phổ biến nhất về Mua nhà
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_ARTICLES.map((article) => (
              <div key={article.id} className="group cursor-pointer space-y-3">
                <div className="w-full h-44 rounded-xl overflow-hidden relative bg-slate-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${article.imageUrl}')` }}
                  />
                </div>
                <span className="text-[10px] font-bold text-red-600 tracking-wider">
                  {article.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition leading-snug line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Main Content: Filter Sidebar + All Articles List */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Sidebar Filters (3 Columns) */}
          <div className="lg:col-span-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-6">
            <h4 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">
              Bộ lọc bài viết
            </h4>

            {/* Sort Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Sắp xếp theo</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-800 outline-none focus:border-black"
              >
                <option value="Mới nhất">Mới nhất</option>
                <option value="Xem nhiều nhất">Xem nhiều nhất</option>
                <option value="Cũ nhất">Cũ nhất</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Tìm kiếm bài viết</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập từ khóa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg pl-3 pr-8 py-2 text-xs font-medium text-slate-800 outline-none focus:border-black"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Category Checkboxes */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-800 block">Chuyên mục nhỏ</span>
              <div className="space-y-1.5 text-xs text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-black focus:ring-black" defaultChecked />
                  <span>Cẩm nang mua nhà (124)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-black focus:ring-black" defaultChecked />
                  <span>Tài chính & Vay ngân hàng (85)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-black focus:ring-black" />
                  <span>Pháp lý & Thủ tục (42)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-black focus:ring-black" />
                  <span>Định giá & Thị trường (67)</span>
                </label>
              </div>
            </div>

            {/* Filter Reset Button */}
            <button className="w-full bg-white border border-slate-300 hover:border-black text-slate-800 py-2 rounded-lg text-xs font-bold transition">
              Xóa bộ lọc
            </button>
          </div>

          {/* Article List Area (9 Columns) */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="text-lg font-black text-slate-900">Tất cả bài viết về Mua nhà</h3>
              <span className="text-xs text-slate-500 font-semibold">Hiển thị {ALL_ARTICLES.length} kết quả</span>
            </div>

            {/* Article Cards - Horizontal Layout */}
            <div className="space-y-6">
              {ALL_ARTICLES.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col sm:flex-row gap-5 items-start bg-white p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-md transition group cursor-pointer"
                >
                  <div className="w-full sm:w-56 h-36 flex-shrink-0 rounded-xl overflow-hidden relative bg-slate-100">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${article.imageUrl}')` }}
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <span className="text-[10px] font-bold text-red-600 tracking-wider uppercase">
                      {article.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="text-[11px] text-slate-400 font-medium pt-1">
                      Cập nhật mới nhất • Đọc trong 4 phút
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Pagination */}
            <div className="flex justify-center items-center gap-2 pt-8">
              <button className="w-8 h-8 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-100 transition">
                &lt;
              </button>
              <button className="w-8 h-8 rounded-lg bg-black text-white text-xs font-bold">
                1
              </button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-100 transition">
                2
              </button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-100 transition">
                3
              </button>
              <span className="text-xs text-slate-400">...</span>
              <button className="w-8 h-8 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-100 transition">
                10
              </button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-100 transition">
                &gt;
              </button>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default BuyCategoryPage;