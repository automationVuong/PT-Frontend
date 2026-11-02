import { 
  Building, 
  Building2, 
  Cpu, 
  Factory, 
  Landmark, 
  Radio, 
  Waves 
} from "lucide-react";
import { HeroSearch, HouseGallery, ListingGrid } from "@/modules/home";

// Brand Icon Mapping with fallback
const brandIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Vietcombank: Landmark,
  FPT: Cpu,
  Vingroup: Building2,
  SunGroup: Building2,
  Novaland: Building2,
  "Hòa Phát": Factory,
  Mikazuki: Waves,
  Becamex: Building2,
  Viettel: Radio,
  "Hoa Binh": Building2,
};

const featuredHomes = [
  {
    title: "Căn hộ Ngọc Sáng",
    subtitle: "4 phòng ngủ · 187 m² · 3 phòng tắm",
    price: "₫ 4,9 tỷ",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    badge: "Mới",
    badgeColor: "red" as const,
  },
  {
    title: "Biệt thự Thung Lũng Xanh",
    subtitle: "3 phòng ngủ · 210 m² · vườn riêng",
    price: "₫ 7,2 tỷ",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    badge: "Nóng",
    badgeColor: "blue" as const,
  },
  {
    title: "Chung cư Bến Biển",
    subtitle: "2 phòng ngủ · 118 m² · view thành phố",
    price: "₫ 3,8 tỷ",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    badge: "Nổi bật",
    badgeColor: "yellow" as const,
  },
  {
    title: "Căn hộ Nụ Hoàng",
    subtitle: "3 phòng ngủ · 170 m² · sân thượng",
    price: "₫ 5,6 tỷ",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    badge: "Phổ biến",
    badgeColor: "blue" as const,
  },
  {
    title: "Biệt thự Đỉnh Mây",
    subtitle: "4 phòng ngủ · 230 m² · hồ bơi",
    price: "₫ 8,1 tỷ",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    badge: "Cao cấp",
    badgeColor: "red" as const,
  },
  {
    title: "Căn hộ Vành Dâu",
    subtitle: "2 phòng ngủ · 96 m² · trung tâm thành phố",
    price: "₫ 2,9 tỷ",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    badge: "Giá tốt",
    badgeColor: "yellow" as const,
  },
];

const selectedCommunities = [
  {
    title: "Khu đô thị Hồ Sông",
    subtitle: "2024 · gia đình thoải mái",
    price: "Từ ₫ 2,4 tỷ",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Khu căn hộ Skyline",
    subtitle: "2021 · trung tâm quận",
    price: "Từ ₫ 3,1 tỷ",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Khu nghỉ dưỡng Biển Xanh",
    subtitle: "2023 · sống ven biển",
    price: "Từ ₫ 2,9 tỷ",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Khu dân cư Hoàng Hôn",
    subtitle: "2022 · khu dân cư xanh",
    price: "Từ ₫ 2,7 tỷ",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Căn hộ Tây Hồ",
    subtitle: "2020 · tiện ích cao cấp",
    price: "Từ ₫ 3,6 tỷ",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Làng Hồ Đá",
    subtitle: "2024 · sống yên bình",
    price: "Từ ₫ 2,2 tỷ",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
];

const preferredHomes = [
  {
    title: "Dãy nhà Đông Quý",
    subtitle: "Căn hộ sân thượng cao cấp với tiện ích câu lạc bộ",
    price: "Từ ₫ 5,5 tỷ",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    accent: "bg-[#dfeafc]",
  },
  {
    title: "Căn hộ Vịnh Ánh Sáng",
    subtitle: "Thiết kế ven biển hiện đại với phòng chờ riêng",
    price: "Từ ₫ 4,8 tỷ",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    accent: "bg-[#dceaf6]",
  },
  {
    title: "Căn hộ Ivory Park",
    subtitle: "Căn hộ thông minh gần tuyến metro",
    price: "Từ ₫ 3,2 tỷ",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
    accent: "bg-[#e7ecff]",
  },
  {
    title: "Nhà phố Đỉnh Cao",
    subtitle: "Không gian gia đình rộng rãi với khu vườn trên mái",
    price: "Từ ₫ 6,4 tỷ",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    accent: "bg-[#dfeae4]",
  },
];

const rentals = [
  {
    title: "Căn hộ hiện đại gần trung tâm thành phố",
    subtitle: "2 phòng ngủ · 1.100 sqft · nội thất đầy đủ",
    price: "₫ 18 triệu / tháng",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nhà phố gia đình có sân thượng",
    subtitle: "3 phòng ngủ · 1.500 sqft · có chỗ đậu xe",
    price: "₫ 27 triệu / tháng",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Studio cho người trẻ chuyên nghiệp",
    subtitle: "1 phòng ngủ · 650 sqft · sống thông minh",
    price: "₫ 12 triệu / tháng",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Căn hộ cao cấp view thành phố",
    subtitle: "2 phòng ngủ · 1.200 sqft · dịch vụ lễ tân",
    price: "₫ 24 triệu / tháng",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Nhà song lập với vườn xanh",
    subtitle: "3 phòng ngủ · 1.650 sqft · sân sau",
    price: "₫ 29 triệu / tháng",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Căn loft tối giản",
    subtitle: "1 phòng ngủ · 720 sqft · gần trung tâm văn phòng",
    price: "₫ 15 triệu / tháng",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Penthouse với sân thượng",
    subtitle: "3 phòng ngủ · 2.100 sqft · hồ bơi & phòng gym",
    price: "₫ 36 triệu / tháng",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Căn hộ giá hợp lý cho cặp đôi",
    subtitle: "1 phòng ngủ · 550 sqft · tòa nhà an ninh",
    price: "₫ 10 triệu / tháng",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
];

const platformHighlights = [
  {
    title: "Tour nhà trực tiếp",
    description: "Xem video tham quan nhà ở theo thời gian thực, đặt câu hỏi trực tiếp và trải nghiệm không gian trước khi đi xem thực tế.",
    meta: "Phiên trực tiếp",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    href: "/live",
  },
  {
    title: "Tìm kiếm theo bản đồ",
    description: "Khám phá các khu vực theo góc nhìn trực quan và so sánh môi trường sống, kết nối, tiện ích và tiềm năng phát triển.",
    meta: "Bản đồ tương tác",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    href: "/bat-dong-san-ban-do",
  },
  {
    title: "Thị trường bất động sản",
    description: "Duyệt danh sách căn nhà và cổ phần đã xác minh cho mục đích mua, thuê và đầu tư với thông tin rõ ràng và minh bạch.",
    meta: "Danh mục bất động sản",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    href: "/mua-nha",
  },
  {
    title: "Tin tức",
    description: "Theo dõi thị trường bất động sản với cập nhật chính sách, phân tích khu vực và tin tức đầu tư mới nhất.",
    meta: "Cập nhật mới nhất",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    href: "/tin-tuc",
  },
  {
    title: "Giáo dục",
    description: "Học kiến thức căn bản về mua nhà, pháp lý, đầu tư và kỹ năng đàm phán từ các chuyên gia trong ngành.",
    meta: "Khóa học & hướng dẫn",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    href: "/khoa-hoc",
  },
  {
    title: "Phát sóng trực tiếp",
    description: "Theo dõi môi giới giới thiệu nhà ở, trả lời câu hỏi và chia sẻ giá cả thật thời gian trong buổi livestream.",
    meta: "Phòng phát sóng",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    href: "/live",
  },
  {
    title: "Ví & hồ sơ",
    description: "Theo dõi khoản tiết kiệm, đầu tư và căn nhà yêu thích trong bảng điều khiển hiện đại dành cho kế hoạch dài hạn.",
    meta: "Công cụ tài khoản",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    href: "/wallet",
  },
];

export default function HomePage() {
  const brandList = [
    "Vietcombank", "FPT", "Vingroup", "SunGroup", "Novaland", 
    "Hòa Phát", "Mikazuki", "Becamex", "Viettel", "Hoa Binh", 
    "FPT", "Vietcombank", "Vingroup", "Novaland", "Mikazuki"
  ];

  return (
    <main className="bg-[#f5f7fb] pb-20 text-slate-900">
      <HeroSearch />

      <section className="mx-auto max-w-6xl px-4 py-10 reveal-up">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Tổng quan nền tảng</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-900">Một nền tảng để khám phá bất động sản.</h2>
          </div>
          <a href="/mua-nha" className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
            Khám phá toàn bộ tính năng
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platformHighlights.map((feature, index) => (
            <article
              key={feature.title}
              className="group reveal-up overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <a href={feature.href} className="block h-full">
                <div className="relative shimmer">
                  <img src={feature.image} alt={feature.title} className="image-zoom h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.2),rgba(15,23,42,0.55))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    {feature.meta}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>

                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition group-hover:bg-blue-100">
                    Xem tính năng
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
      
      <section className="relative -mt-2 pb-4 reveal-up">
        <div className="mx-auto max-w-6xl px-4">
          <div className="glow-card rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_26px_60px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Nhà nổi bật</p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">Danh sách nhà được yêu thích</h2>
              </div>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
                Xem tất cả
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
              {featuredHomes.map((item, index) => (
                <a key={item.title} href="/mua-nha" className="group reveal-up block overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="image-zoom h-48 w-full object-cover transition duration-300"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-md">
                      {item.badge}
                    </span>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.subtitle}</p>
                    <div className="text-xl font-black text-blue-700">{item.price}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="mx-auto max-w-6xl px-4 py-8 reveal-up">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Lựa chọn mới</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">Những ngôi nhà tinh tế cho cuộc sống dài hạn.</h2>
          </div>
          <a href="/mua-nha" className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
            Xem thêm nhà cao cấp
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {preferredHomes.map((item, index) => (
            <a key={item.title} href="/mua-nha" className="group reveal-up block overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:border-blue-200" style={{ animationDelay: `${index * 110}ms` }}>
              <div className={`relative p-2 ${item.accent}`}>
                <img src={item.image} alt={item.title} className="image-zoom h-56 w-full rounded-[20px] object-cover" />
              </div>

              <div className="flex items-start justify-between gap-3 p-4 pt-3">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.subtitle}</p>
                </div>
                <div className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
                  Mới
                </div>
              </div>

              <div className="px-4 pb-4 pt-0 text-sm font-semibold text-blue-700">{item.price}</div>
            </a>
          ))}
        </div>
      </section>
      
      <div className="reveal-up">
        <ListingGrid
          title="Cộng đồng nổi bật"
          subtitle="Các khu dân cư được tuyển chọn với tiềm năng tăng trưởng, tiện ích và giá trị cuộc sống tốt hơn."
          actionText="Khám phá tất cả cộng đồng"
          items={selectedCommunities}
          columns={3}
        />
      </div>

      <div className="reveal-up">
        <ListingGrid
          title="Lựa chọn cho thuê hàng đầu"
          subtitle="Nhà ở cho thuê linh hoạt dành cho người mua, nhà đầu tư và người làm việc chuyên nghiệp."
          actionText="Xem tất cả căn cho thuê"
          items={rentals}
          columns={4}
        />
      </div>
      
      <section className="mx-auto max-w-6xl px-4 py-6 reveal-up">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="grid items-center gap-6 bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_35%,#ffffff_100%)] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[28px] border border-sky-100 bg-white p-3 shadow-[0_24px_50px_rgba(59,130,246,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                  alt="Tour nhà trực tiếp"
                  className="image-zoom h-[360px] w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur-sm">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Xem nhà ngay</div>
                <div className="mt-1 text-lg font-black text-slate-900">Khám phá không gian thật</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Trực tiếp & trải nghiệm</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 md:text-5xl">
                Xem ngôi nhà mơ ước của bạn trực tiếp từ bất cứ đâu.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Với tour nhà trực tiếp, bạn có thể khám phá không gian sống thật, quan sát chi tiết kiến trúc, vị trí, ánh sáng và tiện ích theo thời gian thực.
                Khách hàng có thể đặt câu hỏi ngay trong buổi xem nhà và ra quyết định nhanh hơn với góc nhìn rõ ràng nhất.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">Live</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Tour trực tiếp</div>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">24/7</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Luôn mở</div>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">1:1</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Tư vấn riêng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 reveal-up">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="grid items-center gap-6 bg-[linear-gradient(135deg,#fffaf0_0%,#fff3d6_35%,#ffffff_100%)] p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Giáo dục & khóa học</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 md:text-5xl">
                Học để trở thành môi giới bất động sản giỏi hơn mỗi ngày.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Khóa học và chuyên đề giúp bạn hiểu sâu hơn về thị trường, pháp lý, kỹ năng đàm phán và cách tư vấn phù hợp với từng nhóm khách hàng.
                Từ người mới bắt đầu đến chuyên gia, bạn đều có thể xây dựng nền tảng kiến thức vững chắc và ứng dụng ngay vào công việc thực tế.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-amber-100 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">120+</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Chuyên đề</div>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">24/7</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Học mọi lúc</div>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">95%</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Hài lòng</div>
                </div>
              </div>
            </div>

            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[28px] border border-indigo-100 bg-white p-3 shadow-[0_24px_50px_rgba(79,70,229,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Tin tức bất động sản"
                  className="image-zoom h-[360px] w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur-sm">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Tin tức đáng tin cậy</div>
                <div className="mt-1 text-lg font-black text-slate-900">Thông tin thị trường mới nhất</div>
              </div>
              <div className="absolute -right-3 top-8 rounded-2xl border border-indigo-100 bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Đánh giá</div>
                    <div className="mt-1 text-lg font-black text-slate-900">12.4k+</div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-xl text-white">★</div>
                </div>
                <div className="mt-3 flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Khách hàng 1" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" alt="Khách hàng 2" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Khách hàng 3" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 reveal-up">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <div className="grid items-center gap-6 bg-[linear-gradient(135deg,#eef2ff_0%,#e0e7ff_30%,#f8fafc_100%)] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[28px] border border-indigo-100 bg-white p-3 shadow-[0_24px_50px_rgba(79,70,229,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Tin tức bất động sản"
                  className="image-zoom h-[360px] w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur-sm">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Tin tức đáng tin cậy</div>
                <div className="mt-1 text-lg font-black text-slate-900">Thông tin thị trường mới nhất</div>
              </div>
              <div className="absolute -right-3 top-8 rounded-2xl border border-indigo-100 bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Đánh giá</div>
                    <div className="mt-1 text-lg font-black text-slate-900">12.4k+</div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-xl text-white">★</div>
                </div>
                <div className="mt-3 flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Khách hàng 1" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" alt="Khách hàng 2" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Khách hàng 3" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">Tin tức & thị trường</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 md:text-5xl">
                Cập nhật tin tức thị trường bất động sản đáng tin cậy mỗi ngày.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Từ biến động giá nhà, chính sách mới, dự án ra mắt đến xu hướng đầu tư và lựa chọn khu vực, chúng tôi tổng hợp những thông tin quan trọng nhất để bạn luôn nắm bắt đúng thời cơ.
                Đọc đúng tin, ra quyết định đúng lúc, và tối ưu hóa cơ hội mua bán, thuê, đầu tư của mình.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-indigo-100 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">1.8K+</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Bài viết</div>
                </div>
                <div className="rounded-2xl border border-indigo-100 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">Daily</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Cập nhật</div>
                </div>
                <div className="rounded-2xl border border-indigo-100 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-2xl font-black tracking-[-0.05em] text-slate-900">8+</div>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Khu vực</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee with Lucide Icons */}
      <div className="relative left-1/2 z-50 my-6 w-[min(92vw,1200px)] -translate-x-1/2">
        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white/85 px-4 py-3 shadow-[0_20px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="marquee-track flex min-w-max items-center gap-4 whitespace-nowrap text-slate-500">
            {brandList.map((brand, index) => {
              const Icon = brandIcons[brand] || Building;
              return (
                <span
                  key={`${brand}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {brand}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}