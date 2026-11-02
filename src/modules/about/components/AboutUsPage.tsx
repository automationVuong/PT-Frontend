import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  HeartHandshake,
  Landmark,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  { value: "12K+", label: "tài sản đã bán" },
  { value: "4.9/5", label: "hài lòng của khách hàng" },
  { value: "28 thành phố", label: "phạm vi thị trường" },
  { value: "1,200+", label: "tư vấn viên chuyên gia" },
];

const valuePillars = [
  {
    icon: Landmark,
    title: "Tư vấn đáng tin cậy",
    description:
      "Chúng tôi kết hợp dữ liệu thị trường, chuyên môn địa phương và lời khuyên minh bạch để giúp mọi khách hàng đưa ra quyết định tài sản đúng đắn.",
  },
  {
    icon: Compass,
    title: "Nhà ở phù hợp",
    description:
      "Từ biệt thự gia đình đến căn hộ thành thị và tài sản đầu tư, chúng tôi kết nối khách mua với cơ hội phù hợp với mục tiêu và lối sống của họ.",
  },
  {
    icon: ShieldCheck,
    title: "Giao dịch an toàn",
    description:
      "Mọi bước đều được hỗ trợ bởi kiểm tra pháp lý chuyên nghiệp, hỗ trợ vay và quản lý giao dịch theo hướng an toàn và minh bạch.",
  },
  {
    icon: TrendingUp,
    title: "Tư duy tăng trưởng",
    description:
      "Chúng tôi không ngừng khám phá các khu vực mới nổi, dự án mới và chiến lược đô thị để tạo ra giá trị dài hạn.",
  },
];

const strengths = [
  "Tư vấn bất động sản trọn gói từ tìm hiểu đến ký kết",
  "Hiểu biết thị trường địa phương qua các quận mới và khu vực phát triển",
  "Tổng hợp căn hộ cao cấp, thương mại và danh mục đầu tư",
  "Hướng dẫn tài chính, đầu tư và di chuyển cá nhân hóa",
  "Trải nghiệm số hóa tiên tiến cùng chuyên môn trực tiếp",
];

const milestones = [
  {
    year: "2016",
    title: "Bắt đầu từ mô hình tư vấn boutique",
    text: "Ra đời để mang đến sự rõ ràng, niềm tin và góc nhìn chiến lược cho người mua và nhà phát triển ở thành phố.",
  },
  {
    year: "2019",
    title: "Mở rộng mạng lưới bất động sản khu vực",
    text: "Xây dựng mạng lưới mạnh hơn ở nhiều tỉnh thành với quyền tiếp cận dự án cao cấp và tăng trưởng nhanh.",
  },
  {
    year: "2023",
    title: "Mở rộng trải nghiệm bất động sản số hóa",
    text: "Giới thiệu danh sách trực quan, tour trực tiếp, khám phá khu vực và bảng điều khiển đầu tư cho nhà đầu tư.",
  },
];

const partners = [
  "Nhà phát triển căn hộ cao cấp",
  "Nhóm bất động sản thương mại",
  "Đối tác vay vốn và pháp lý",
  "Chuyên gia thiết kế và nội thất",
  "Cố vấn quy hoạch và đầu tư đô thị",
];

export function AboutUsPage() {
  return (
    <main className="bg-[#f5f7fb] text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_18%),linear-gradient(135deg,#f8fbff_0%,#edf5ff_35%,#f5f7fb_100%)] px-4 pb-20 pt-10 md:px-6 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Về chúng tôi
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Hệ sinh thái bất động sản
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
                Chúng tôi giúp bạn tìm đúng nơi chạm tới tương lai.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Chúng tôi là nền tảng bất động sản hiện đại, kết nối người mua, nhà đầu tư, người thuê và nhà phát triển thông qua tư vấn đáng tin cậy, khám phá dựa trên dữ liệu và hành trình mua sắm mượt mà.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/mua-nha"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700"
                >
                  Khám phá tài sản
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/live"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  Xem tour trực tiếp
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
                  alt="Cộng đồng bất động sản hiện đại"
                  className="h-[500px] w-full rounded-[24px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 rounded-[24px] border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Phạm vi thị trường
                    </div>
                    <div className="text-xl font-black text-slate-900">28 thành phố</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Tác động</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
            Xây dựng trên nền tảng niềm tin, tiếp cận và giá trị dài hạn.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_16px_34px_rgba(15,23,42,0.04)]"
            >
              <div className="text-4xl font-black tracking-[-0.05em] text-slate-900">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Giá trị cốt lõi</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
              Những nguyên tắc định hướng từng quyết định bất động sản.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {valuePillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-[28px] border border-slate-200 bg-[#f8fafc] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.03)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-900">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Đầu tư bất động sản và tăng trưởng đô thị"
              className="h-[430px] w-full rounded-[24px] object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Tại sao chọn chúng tôi</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
              Đối tác bất động sản hoàn chỉnh cho mọi giai đoạn.
            </h2>

            <div className="mt-8 space-y-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ecf4ff] py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Hành trình</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
              Từ mô hình tư vấn địa phương đến nền tảng bất động sản khu vực.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {milestones.map((item) => (
              <div key={item.year} className="rounded-[28px] border border-blue-200 bg-white p-6 shadow-[0_18px_35px_rgba(59,130,246,0.08)]">
                <div className="mb-5 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  {item.year}
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Mạng lưới</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
                Mối quan hệ chiến lược mở ra nhiều cơ hội tốt hơn.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {partners.map((partner) => (
                <div key={partner} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Star className="h-4 w-4" />
                  </span>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_50%,#f8fafc_100%)] p-8 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Hãy cùng xây dựng</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-4xl">
                  Tìm chiến lược bất động sản phù hợp cho hành trình tiếp theo của bạn.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/dang-ky"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700"
                >
                  Đặt lịch tư vấn
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/mua-nha"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  Duyệt danh sách
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
