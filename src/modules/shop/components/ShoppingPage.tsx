import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const featuredProjects = [
  {
    logo: "MB",
    name: "MB Realty",
    location: "Hà Nội",
    specialty: ["Căn hộ", "Biệt thự", "Văn phòng"],
    featured: true,
    rating: 4.9,
    listings: 23,
    accent: "from-blue-600 to-blue-500",
  },
  {
    logo: "D",
    name: "DatVietVAC",
    location: "Đà Nẵng",
    specialty: ["Khu đô thị", "Căn hộ", "Mua bán"],
    featured: false,
    rating: 4.8,
    listings: 19,
    accent: "from-red-500 to-pink-600",
  },
  {
    logo: "L",
    name: "LG Capital",
    location: "Hồ Chí Minh",
    specialty: ["Khách sạn", "Đất nền", "Nhà phố"],
    featured: false,
    rating: 4.7,
    listings: 12,
    accent: "from-slate-800 to-slate-700",
  },
  {
    logo: "N",
    name: "Naver Homes",
    location: "Hải Phòng",
    specialty: ["Nhà ở", "Căn hộ", "Thiết kế"],
    featured: false,
    rating: 4.9,
    listings: 21,
    accent: "from-emerald-500 to-green-600",
  },
  {
    logo: "T",
    name: "Toshiba Land",
    location: "Huế",
    specialty: ["BĐS thương mại", "Khách sạn", "Mua bán"],
    featured: false,
    rating: 4.6,
    listings: 8,
    accent: "from-amber-500 to-orange-500",
  },
  {
    logo: "D",
    name: "Densen Group",
    location: "Cần Thơ",
    specialty: ["Đất nền", "Villa", "Khu nghỉ dưỡng"],
    featured: false,
    rating: 4.8,
    listings: 15,
    accent: "from-violet-500 to-purple-600",
  },
];

const filters = [
  "Tất cả",
  "Căn hộ",
  "Nhà phố",
  "Villa",
  "Đất nền",
  "Cho thuê",
  "Đang mở bán",
  "Mới nhất",
];

const articles = [
  {
    tag: "Sàn giao dịch",
    title: "Mua nhà ở Hà Nội: 5 yếu tố quyết định giá trị dài hạn",
    meta: "Đọc 8 phút",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Mẹo đầu tư",
    title: "Nên đầu tư căn hộ hay đất nền trong giai đoạn 2026?",
    meta: "Đọc 6 phút",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Thiết kế",
    title: "Phối cảnh nội thất căn hộ tối giản theo phong cách hiện đại",
    meta: "Đọc 5 phút",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Địa phương",
    title: "Top 10 khu dân cư có tỷ suất tăng giá tốt nhất năm nay",
    meta: "Đọc 7 phút",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
];

const expertise = [
  "Phân tích vị trí và tiềm năng tăng giá",
  "Ước tính giá thuê và đầu tư bất động sản",
  "Tư vấn pháp lý và hồ sơ mua bán",
  "Kiểm tra tiện ích, hạ tầng và cộng đồng",
  "Đánh giá sản phẩm căn hộ mới và dự án",
  "Hỗ trợ giải ngân và sắp xếp tài chính",
  "Theo dõi tiến độ xây dựng và thanh toán",
  "Nâng cấp nội thất và chuyển nhượng tài sản",
];

export function ShoppingPage() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-800">
      <header className="bg-[#0b1220] text-white">
        <div className="border-b border-white/10 bg-[#0d1729]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-300">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-white">PropertyHub</span>
              <span>IT Jobs</span>
              <span>Companies</span>
            </div>
            <div className="flex items-center gap-5">
              <span>Career advice</span>
              <span>Employer sign in</span>
              <button className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-medium text-white">
                Post a job
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-yellow-400 font-black text-white shadow-lg shadow-blue-500/30">
                P
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-white">Property</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Market</div>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3 lg:max-w-2xl">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  defaultValue="Luxury residences in Hanoi"
                  className="w-full rounded-xl border border-white/10 bg-slate-800/80 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <button className="rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-slate-200 bg-[#f9fafb]">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="mb-4 flex items-center justify-between gap-4 text-sm text-slate-500">
            <p className="font-medium text-slate-700">637 properties for “Luxury living”</p>
            <div className="text-xs text-slate-400">Updated 2 hours ago</div>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  filter === "Tất cả"
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} text-lg font-black text-white`}>
                  {project.logo}
                </div>

                {project.featured && (
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-orange-700">
                    Featured
                  </span>
                )}
              </div>

              <div className="mb-3">
                <h3 className="text-2xl font-bold text-slate-900">{project.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  {project.location}
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.specialty.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
                  {project.rating} rating
                </div>
                <div className="flex items-center justify-end gap-2 text-right">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  {project.listings} listings
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Featured articles</h2>
            <Link href="/tin-tuc" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {articles.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
              >
                <img src={article.image} alt={article.title} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <div className="mb-3 inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
                    {article.tag}
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{article.title}</h3>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>{article.meta}</span>
                    <button className="inline-flex items-center gap-1 font-semibold text-blue-600">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Property expertise summary
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {expertise.slice(0, 4).map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                      {index + 1}
                    </span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {expertise.slice(4).map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                      {index + 5}
                    </span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-[#090f1d] text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-yellow-400 font-black text-white">
                  P
                </div>
                <div>
                  <div className="text-xl font-black text-white">Property</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Market</div>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Kết nối nhà ở, địa điểm và tương lai tốt đẹp cho mọi gia đình.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>About us</li>
                <li>Partner network</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Market reports</li>
                <li>Investment guide</li>
                <li>Home buying</li>
                <li>Mortgage</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hello@propertymarket.vn</li>
                <li>+84 28 9999 8888</li>
                <li>Hanoi, Vietnam</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-500">
            Copyright © 2026 PropertyMarket. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
