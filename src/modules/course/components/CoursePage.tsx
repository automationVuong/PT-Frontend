import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  PlayCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const categories = [
  "Tất cả",
  "Đầu tư BĐS",
  "Tài chính",
  "Kinh doanh",
  "Marketing",
  "Thiết kế",
  "Quản lý dự án",
];

const courses = [
  {
    title: "Khóa học BĐS đầu tư chuyên nghiệp",
    level: "Mới bắt đầu",
    duration: "8 tuần",
    students: "2.4k học viên",
    rating: 4.9,
    price: "2.990.000đ",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    slug: "khoa-hoc-bat-dong-san-dau-tu-chuyen-nghiep",
  },
  {
    title: "Phân tích thị trường và định giá căn nhà",
    level: "Trung cấp",
    duration: "6 tuần",
    students: "1.8k học viên",
    rating: 4.8,
    price: "2.490.000đ",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    slug: "phan-tich-thi-truong-va-dinh-gia-can-nha",
  },
  {
    title: "Tối ưu tài chính cho người mua nhà lần đầu",
    level: "Mọi trình độ",
    duration: "4 tuần",
    students: "3.1k học viên",
    rating: 4.9,
    price: "1.690.000đ",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    slug: "toi-uu-tai-chinh-cho-nguoi-mua-nha-lan-dau",
  },
  {
    title: "Quản lý dự án và hợp đồng bất động sản",
    level: "Nâng cao",
    duration: "10 tuần",
    students: "980 học viên",
    rating: 4.7,
    price: "3.490.000đ",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    slug: "quan-ly-du-an-va-hop-dong-bat-dong-san",
  },
];

const features = [
  {
    title: "Lộ trình rõ ràng",
    text: "Từ căn bản đến thực chiến, từng buổi học có mục tiêu cụ thể.",
    icon: BookOpen,
  },
  {
    title: "Giảng viên thực chiến",
    text: "Được hướng dẫn bởi chuyên gia đã làm việc trong thị trường BĐS.",
    icon: Users,
  },
  {
    title: "Chứng chỉ hoàn thành",
    text: "Nhận chứng nhận sau khi hoàn thành bài tập và dự án thực tế.",
    icon: ShieldCheck,
  },
];

const stats = [
  { label: "Khóa học", value: "120+" },
  { label: "Học viên", value: "40k+" },
  { label: "Tỷ lệ hài lòng", value: "96%" },
  { label: "Chuyên gia", value: "35+" },
];

export function CoursePage() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-800">
      <header className="bg-white text-slate-800 shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-yellow-400 text-lg font-black text-white">
                P
              </div>
              <div>
                <div className="text-xl font-black tracking-tight text-slate-900">Property Academy</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Learn & Grow</div>
              </div>
            </div>

            <div className="flex max-w-xl flex-1 items-center gap-3">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  defaultValue="Tìm khóa học bất động sản"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <button className="rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),transparent_35%),linear-gradient(135deg,#ffffff_0%,#f8fbff_38%,#edf5ff_100%)] py-20 text-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.14),transparent_30%)]" />

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Khóa học thực chiến
                </div>

                <h1 className="max-w-xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                  Nâng tầm kỹ năng và đầu tư bất động sản hiệu quả.
                </h1>

                <p className="mt-5 max-w-xl text-base text-slate-600">
                  Từ người mới bắt đầu đến nhà đầu tư đã có kinh nghiệm, bạn sẽ học cách tìm kiếm, định giá, tài chính và xây dựng danh mục BĐS bền vững.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110">
                    Xem khóa học
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                    Tư vấn miễn phí
                  </button>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="Course preview"
                  className="h-[420px] w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <div className="text-3xl font-black text-blue-700">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Danh mục</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Khóa học nổi bật</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    category === "Tất cả"
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courses.map((course) => (
              <article key={course.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(37,99,235,0.08)]">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 backdrop-blur-sm">
                    {course.level}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{course.title}</h3>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <div className="inline-flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" />
                      {course.duration}
                    </div>
                    <div className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {course.students}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-semibold text-slate-700">{course.rating}</span>
                    </div>
                    <div className="text-lg font-black text-blue-700">{course.price}</div>
                  </div>

                  <Link
                    href={`/khoa-hoc/${course.slug}`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Xem chi tiết
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Vì sao chọn chúng tôi</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Học đúng, áp dụng nhanh</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-[28px] bg-gradient-to-r from-blue-700 to-slate-900 p-8 text-white shadow-[0_25px_60px_rgba(37,99,235,0.25)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-100">Khuyến mãi</p>
                <h2 className="mt-2 text-3xl font-black">Đăng ký học ngay hôm nay</h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Email của bạn"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:border-yellow-300 focus:outline-none"
                />
                <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-3 text-sm font-bold text-slate-900">
                  Nhận ưu đãi
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-8 bg-[#0b1220] text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-yellow-400 text-lg font-black text-white">
                  P
                </div>
                <div>
                  <div className="text-lg font-black text-white">Property Academy</div>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Chia sẻ kiến thức giúp bạn đầu tư thông minh và xây dựng tương lai vững chắc.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Khóa học</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Đầu tư BĐS</li>
                <li>Tài chính</li>
                <li>Marketing</li>
                <li>Quản lý dự án</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Hỏi đáp</li>
                <li>Phản hồi</li>
                <li>Chính sách</li>
                <li>Liên hệ</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Liên hệ</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hello@propertyacademy.vn</li>
                <li>+84 28 9999 8888</li>
                <li>Hà Nội, Việt Nam</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-500">
            Copyright © 2026 Property Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
