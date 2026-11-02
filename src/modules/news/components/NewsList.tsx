import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

const articles = [
  {
    category: "Thị trường",
    title: "Giá nhà tiếp tục tăng ở các khu vực ven đô",
    summary: "Các nhà phát triển đang chứng kiến nhu cầu mạnh cho nhà trung cấp gần các trục di chuyển và khu mua sắm.",
    date: "01/11/2026",
    readTime: "5 phút đọc",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Tài chính",
    title: "Lãi suất vay chậm lại nhưng cơ hội tái cấp vốn vẫn còn tốt",
    summary: "Người vay đang xem xét sản phẩm lãi suất cố định và hỗn hợp khi ngân hàng điều chỉnh giá và điều kiện đóng gói.",
    date: "29/10/2026",
    readTime: "7 phút đọc",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Chính sách",
    title: "Quy định mới nhằm tăng minh bạch trong giao dịch căn hộ chưa hoàn thành",
    summary: "Các nhóm ngành cho rằng quy tắc công khai rõ ràng hơn có thể giảm rủi ro cho người mua và nâng niềm tin thị trường.",
    date: "24/10/2026",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Đầu tư",
    title: "Nhà đầu tư tập trung vào lợi suất cho thuê và tăng trưởng hạ tầng khu vực",
    summary: "Một số lượng lớn nhà đầu tư ưu tiên tiếp cận trường học, giao thông và tiện ích mua sắm hơn là diện tích thuần túy.",
    date: "20/10/2026",
    readTime: "8 phút đọc",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Lối sống",
    title: "Người mua nhà ưu tiên không gian linh hoạt cho làm việc từ xa và gia đình",
    summary: "Các tính năng như phòng làm việc, kho lưu trữ và khu vực ngoài trời riêng tư đang trở thành yếu tố quyết định quan trọng.",
    date: "18/10/2026",
    readTime: "4 phút đọc",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Phát triển",
    title: "Dự án hỗn hợp định hình nhu cầu xung quanh trung tâm giao thông",
    summary: "Các nhà phát triển đang kết hợp các thành phần nhà ở và thương mại để thu hút người mua hiện đại tìm kiếm sự tiện lợi.",
    date: "12/10/2026",
    readTime: "9 phút đọc",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
];

export function NewsList() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Tin tức mới nhất</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Tin bất động sản và cập nhật thị trường</h2>
        </div>
        <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 sm:inline-flex">
          Xem tất cả bài viết
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(37,99,235,0.08)]">
            <img src={article.image} alt={article.title} className="h-52 w-full object-cover" />

            <div className="p-5">
              <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                {article.category}
              </span>

              <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{article.summary}</p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="h-3.5 w-3.5" />
                  {article.readTime}
                </div>
              </div>

              <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                Đọc thêm
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
