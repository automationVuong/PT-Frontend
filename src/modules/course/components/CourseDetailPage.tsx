import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock3,
  PlayCircle,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const curriculum = [
  {
    title: "Mở đầu: Tâm lý và chiến lược đầu tư BĐS",
    lessons: ["Hiểu thị trường và chu kỳ giá trị", "Đánh giá năng lực tài chính cá nhân", "Xác định mục tiêu đầu tư rõ ràng"],
  },
  {
    title: "Phân tích địa điểm và tiềm năng tăng giá",
    lessons: ["Đọc bản đồ quy hoạch và hạ tầng", "Đánh giá tiện ích và rủi ro khu vực", "Nhận diện điểm nóng giá trị"],
  },
  {
    title: "Khả năng tài chính và cấu trúc hợp đồng",
    lessons: ["Lập kế hoạch vốn và dòng tiền", "Hiểu lãi suất và đòn bẩy", "Đàm phán hợp đồng mua bán"],
  },
  {
    title: "Thực chiến: Mua bán, quản lý và tối ưu lợi nhuận",
    lessons: ["Xây dựng danh mục bất động sản", "Giải pháp quản lý tài sản hiệu quả", "Chốt giao dịch và tối ưu thu nhập"],
  },
];

const benefits = [
  "Xem video 40+ bài học chuyên sâu",
  "Bài tập thực tế và case study từng dự án",
  "Tài liệu, mẫu hợp đồng, checklist mua nhà",
  "Hỗ trợ Q&A trực tiếp với giảng viên trong 8 tuần",
];

const outcomes = [
  "Biết cách phân tích giá trị căn nhà và tiềm năng tăng trưởng",
  "Nắm rõ quy trình mua, thuê, chuyển nhượng và tài chính",
  "Xây dựng kế hoạch đầu tư phù hợp với nguồn vốn và mục tiêu",
  "Tự tin thương lượng, kiểm tra hồ sơ và quản lý rủi ro",
];

export function CourseDetailPage({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <Link
          href="/khoa-hoc"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại khóa học
        </Link>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700">
              <BadgeCheck className="h-3.5 w-3.5" />
              Khóa học bất động sản
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Khóa học BĐS đầu tư chuyên nghiệp
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
                4.9/5 từ 2.4k học viên
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-blue-600" />
                8 tuần học
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-blue-600" />
                Mới bắt đầu
              </div>
            </div>

            <div className="mt-7 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                  alt="Khóa học BĐS"
                  className="h-[420px] w-full object-cover"
                />
                <button className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg backdrop-blur-sm">
                  <PlayCircle className="h-5 w-5 text-blue-600" />
                  Xem trailer
                </button>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Bạn sẽ học được gì?</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="text-4xl font-black text-blue-700">2.990.000đ</div>
              <p className="mt-1 text-sm text-slate-500">Giá khóa học hiện tại</p>

              <div className="mt-5 space-y-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200">
                  Đăng ký học ngay
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                  Nhắn tin tư vấn
                </button>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Chương trình học</h2>
            <div className="mt-6 space-y-5">
              {curriculum.map((module, index) => (
                <div key={module.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{module.title}</h3>
                  </div>

                  <ul className="space-y-2 pl-11 text-sm text-slate-600">
                    {module.lessons.map((lesson) => (
                      <li key={lesson} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Giảng viên</h2>
              <div className="mt-5 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
                  alt="Giảng viên"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <div className="text-xl font-bold text-slate-900">Nguyễn Văn Minh</div>
                  <div className="text-sm text-slate-500">Chuyên gia BĐS & Tư vấn đầu tư</div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Với hơn 10 năm kinh nghiệm trong thị trường bất động sản, giảng viên đã đồng hành với hàng trăm nhà đầu tư cá nhân và doanh nghiệp trong việc định vị dự án, xây dựng danh mục và tối ưu lợi nhuận.
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-900 to-blue-900 p-6 text-white shadow-sm">
              <h2 className="text-2xl font-bold">Học phí ưu đãi</h2>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-black text-white">2.990.000đ</span>
                <span className="mb-1 text-sm text-slate-300 line-through">3.490.000đ</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">Ưu đãi còn 3 ngày nữa. Bao gồm video, tài liệu, bài tập và hỗ trợ Q&A.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
