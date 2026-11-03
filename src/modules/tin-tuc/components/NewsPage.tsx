"use client";

import React, { useState, useMemo } from "react";
import { Search, Sparkles } from "lucide-react";
import { FeaturedNewsCard, Article } from "./FeaturedNewsCard";
import { NewsCard } from "./NewsCard";
import { NewsSidebar } from "./NewsSidebar";

const CATEGORIES = ["Tất cả", "Thị trường", "Hướng dẫn mua nhà", "Xu hướng thiết kế", "Tài chính & Vay", "Pháp lý BĐS"];

const FEATURED_ARTICLE: Article = {
  id: "f-1",
  slug: "bao-cao-chi-so-gia-nha-q4-2026",
  title: "Báo cáo thị trường BĐS Q4/2026: Nhu cầu nhà ở phân khúc cao cấp tăng trưởng trở lại",
  excerpt:
    "Dữ liệu mới nhất từ Q-Broker cho thấy chỉ số giá nhà tại các khu vực trung tâm tiếp tục giữ đà tăng ổn định, nhờ sự quay trở lại của lực lượng người mua nhà thứ hai và dòng vốn ngoại.",
  category: "Thị trường",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "03/11/2026",
  readTime: "5 phút đọc",
};

const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "huong-dan-vay-mua-nha-cho-nguoi-mua-lan-dau",
    title: "5 điều người mua nhà lần đầu cần lưu ý trước khi đăng ký khoản vay thế chấp",
    excerpt: "Chuẩn bị hồ sơ tài chính, hiểu rõ lãi suất ưu đãi và tính toán cẩn thận hạn mức trả hàng tháng.",
    category: "Tài chính & Vay",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    publishedAt: "01/11/2026",
    readTime: "4 phút đọc",
  },
  {
    id: "2",
    slug: "xu-huong-thiet-ke-noi-that-2027",
    title: "Xu hướng kiến trúc & nội thất xanh lên ngôi trong các căn hộ cao cấp",
    excerpt: "Không gian sống kết nối thiên nhiên và tối ưu ánh sáng tự nhiên trở thành tiêu chuẩn mới của cư dân đô thị.",
    category: "Xu hướng thiết kế",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    publishedAt: "28/10/2026",
    readTime: "3 phút đọc",
  },
  {
    id: "3",
    slug: "dinh-gia-tai-san-chinh-xac",
    title: "Làm thế nào để định giá chính xác căn hộ của bạn trước khi niêm yết bán?",
    excerpt: "So sánh dữ liệu các giao dịch thực tế gần đây trong cùng khu vực là chìa khóa để chốt giao dịch nhanh chóng.",
    category: "Hướng dẫn mua nhà",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    publishedAt: "25/10/2026",
    readTime: "6 phút đọc",
  },
  {
    id: "4",
    slug: "luat-dat-dai-moi-anh-huong-den-nha-dau-tu",
    title: "Những quy định pháp lý mới về cấp sổ đỏ ảnh hưởng ra sao đến nhà đầu tư?",
    excerpt: "Giải mã các điều khoản sửa đổi mới nhất giúp minh bạch hóa dòng tiền và bảo vệ quyền lợi người mua BĐS.",
    category: "Pháp lý BĐS",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    publishedAt: "22/10/2026",
    readTime: "5 phút đọc",
  },
  {
    id: "5",
    slug: "chinh-sach-lai-suat-vay-ngan-hang-cuoi-nam",
    title: "So sánh gói vay mua nhà của 8 ngân hàng uy tín nhất thời điểm hiện tại",
    excerpt: "Tổng hợp bảng lãi suất thả nổi, biên độ sau ưu đãi và các gói ân hạn nợ gốc tốt nhất dành cho khách hàng.",
    category: "Tài chính & Vay",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    publishedAt: "18/10/2026",
    readTime: "7 phút đọc",
  },
  {
    id: "6",
    slug: "kinh-nghiem-cai-tao-nha-tap-the-cu",
    title: "Bí quyết biến căn hộ tập thể cũ thành không gian sống hiện đại tối giản",
    excerpt: "Chi tiết lộ trình cải tạo từ xử lý chống thấm, bố trí lại mặt bằng đến tối ưu chi phí thi công.",
    category: "Xu hướng thiết kế",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    publishedAt: "15/10/2026",
    readTime: "4 phút đọc",
  },
  {
    id: "7",
    slug: "thi-truong-bat-dong-san-ven-bien",
    title: "Bất động sản nghỉ dưỡng ven biển ghi nhận tín hiệu thanh khoản tích cực",
    excerpt: "Các thị trường du lịch trọng điểm bắt đầu đón nhận làn sóng đầu tư dài hạn nhờ hạ tầng giao thông kết nối đồng bộ.",
    category: "Thị trường",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    publishedAt: "10/10/2026",
    readTime: "5 phút đọc",
  },
  {
    id: "8",
    slug: "checklist-kiem-tra-nha-truoc-khi-nhan-ban-giao",
    title: "Checklist 30 điểm quan trọng cần kiểm tra kỹ trước khi ký biên bản nhận bàn giao nhà",
    excerpt: "Tránh các rủi ro phát sinh về hệ thống điện nước, kết cấu tường và chất lượng hoàn thiện của chủ đầu tư.",
    category: "Hướng dẫn mua nhà",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    publishedAt: "05/10/2026",
    readTime: "6 phút đọc",
  },
];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  // Lọc bài viết theo Danh mục & Từ khóa tìm kiếm
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "Tất cả" || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-900 pb-16">
      {/* Header Banner */}
      <div className="w-full bg-[#0d232a] py-12 text-white">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00b69b] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Q-Broker News & Insights
            </span>
            <h1 className="text-3xl lg:text-4xl font-black tracking-tight mt-2">
              Tin tức & Phân tích Bất động sản
            </h1>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Cập nhật chỉ số giá nhà, xu hướng thị trường và những lời khuyên hữu ích từ chuyên gia.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-6 flex max-w-md items-center bg-white rounded-xl px-3.5 py-2.5 text-slate-800 shadow-lg border border-slate-200">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết, chủ đề, tư vấn..."
              className="w-full text-xs font-medium focus:outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-[1280px] px-4 pt-8 lg:px-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = cat === selectedCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  isActive
                    ? "bg-[#0f6b73] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          {/* Main Feed */}
          <div className="space-y-8">
            {/* Featured Article (chỉ hiện khi ở tab Tất cả & không tìm kiếm) */}
            {selectedCategory === "Tất cả" && !searchQuery && (
              <FeaturedNewsCard article={FEATURED_ARTICLE} />
            )}

            {/* Grid list articles */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">
                  {searchQuery ? `Kết quả tìm kiếm (${filteredArticles.length})` : "Bài viết mới nhất"}
                </h2>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                  <p className="text-sm font-semibold text-slate-700">Không tìm thấy bài viết phù hợp</p>
                  <p className="text-xs text-slate-500 mt-1">Thử thay đổi từ khóa hoặc chọn danh mục khác.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("Tất cả");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 bg-[#0f6b73] text-white font-bold text-xs rounded-xl hover:bg-teal-800 transition"
                  >
                    Xem tất cả bài viết
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <NewsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;