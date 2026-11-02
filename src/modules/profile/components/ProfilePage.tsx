import {
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronRight,
  CreditCard,
  Home,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";

const stats = [
  { label: "Nhà đã lưu", value: "18" },
  { label: "Tour đã đặt", value: "12" },
  { label: "Giao dịch", value: "04" },
  { label: "Điểm đánh giá", value: "4.9" },
];

const savedProperties = [
  {
    name: "The Sapphire Residences",
    location: "Quận 9, TP.HCM",
    price: "₫ 4,9 tỷ",
    status: "Đã xác minh",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Green Valley Villas",
    location: "Bình Dương",
    price: "₫ 7,2 tỷ",
    status: "Nổi bật",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Harborview Apartments",
    location: "Quận 7, TP.HCM",
    price: "₫ 3,8 tỷ",
    status: "Hot",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

const recentActivities = [
  "Đã đặt tour riêng cho Green Valley Villas",
  "Đã lưu Sapphire Residences vào danh sách yêu thích",
  "Đã cập nhật phương thức thanh toán cho kế hoạch mua nhà",
  "Đã liên hệ với Khang Tran để xem xét hợp đồng pháp lý",
];

const settings = [
  "Thông tin cá nhân",
  "Nhà đã lưu",
  "Thông báo",
  "Phương thức thanh toán",
  "Bảo mật",
  "Quyền riêng tư",
];

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f3f6fb] text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-base font-black text-white shadow-lg shadow-blue-600/20">
              Q
            </div>
            <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-600">Q-Broker</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#" className="transition hover:text-slate-900">Tổng quan</a>
            <a href="#" className="transition hover:text-slate-900">Đã lưu</a>
            <a href="#" className="transition hover:text-slate-900">Tour</a>
            <a href="#" className="transition hover:text-slate-900">Cài đặt</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition hover:border-slate-300 hover:bg-slate-200">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
              Chỉnh sửa
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 py-6 lg:px-6">
        <section className="rounded-[28px] border border-sky-100 bg-[linear-gradient(135deg,#eaf4ff_0%,#dfeeff_22%,#f9fbff_58%,#eef7ff_100%)] p-5 shadow-[0_18px_45px_rgba(59,130,246,0.08)]">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">Trang cá nhân</div>
              <h1 className="mt-2 text-3xl font-black tracking-[-0.06em] text-slate-900">Nguyễn Thị Lan</h1>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-700">
              VERIFIED
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 shadow-sm ring-1 ring-sky-100">
              <MapPin className="h-4 w-4 text-blue-600" />
              TP. Hồ Chí Minh
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 shadow-sm ring-1 ring-sky-100">
              <BriefcaseBusiness className="h-4 w-4 text-violet-600" />
              Nhà đầu tư
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <div className="text-3xl font-black tracking-[-0.06em] text-slate-900">{stat.value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-[28px] border border-sky-100 bg-white/75 p-4 shadow-[0_14px_32px_rgba(59,130,246,0.08)] backdrop-blur-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
                    alt="Profile"
                    className="h-18 w-18 rounded-[24px] object-cover shadow-lg"
                  />
                  <button className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Mức độ tin cậy</div>
                  <div className="mt-1 text-2xl font-black text-slate-900">98%</div>
                </div>
              </div>

              <div className="min-w-[220px] flex-1 md:max-w-[360px]">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                  <span>Rất kém</span>
                  <span>Bình thường</span>
                  <span>Tin cậy</span>
                  <span>Uy tín cao</span>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 overflow-hidden rounded-full bg-slate-200 p-1.5">
                  <span className="h-3 rounded-full bg-red-500" />
                  <span className="h-3 rounded-full bg-amber-400" />
                  <span className="h-3 rounded-full bg-blue-500" />
                  <span className="h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold text-red-600">0–25%</span>
                  <span className="text-[10px] font-bold text-amber-600">26–50%</span>
                  <span className="text-[10px] font-bold text-blue-600">51–75%</span>
                  <span className="text-[10px] font-bold text-emerald-600">76–100%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-black tracking-[-0.05em] text-slate-900">Cài đặt tài khoản</h3>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>

              <div className="space-y-2.5">
                {settings.map((item) => (
                  <button
                    key={item}
                    className="flex w-full items-center justify-between rounded-[18px] border border-slate-200 bg-slate-50 px-3.5 py-3 text-left text-[15px] font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">Tài khoản</div>
                  <div className="mt-2 text-3xl font-black text-slate-900">₫ 2,48M</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Wallet className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 rounded-[18px] border border-sky-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Khả dụng</span>
                  <span className="font-semibold text-slate-900">Sẵn sàng</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Tổng quan</div>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-900">Bất động sản đã lưu</h2>
                </div>
                <button className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                  Xem chi tiết
                </button>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-4">
                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
                      <Home className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-600">+18%</span>
                  </div>
                  <div className="mt-4 text-2xl font-black text-slate-900">18</div>
                  <div className="mt-1 text-sm text-slate-600">Nhà đã lưu</div>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-blue-600">4</span>
                  </div>
                  <div className="mt-4 text-2xl font-black text-slate-900">04</div>
                  <div className="mt-1 text-sm text-slate-600">Đang mở</div>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-violet-100 p-2 text-violet-600">
                      <Wallet className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-violet-50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-violet-600">R</span>
                  </div>
                  <div className="mt-4 text-xl font-black text-slate-900">₫ 2,48M</div>
                  <div className="mt-1 text-sm text-slate-600">Số dư</div>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-amber-100 p-2 text-amber-600">
                      <Star className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-amber-600">4.9</span>
                  </div>
                  <div className="mt-4 text-2xl font-black text-slate-900">4.9</div>
                  <div className="mt-1 text-sm text-slate-600">Đánh giá</div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Bất động sản</div>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-900">Săn tìm</h2>
                </div>
                <button className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                  Quản lý
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {savedProperties.map((property) => (
                  <div key={property.name} className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
                    <img src={property.image} alt={property.name} className="h-36 w-full object-cover" />
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-base font-black text-slate-900">{property.name}</div>
                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                          {property.status}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        {property.location}
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="text-lg font-black text-slate-900">{property.price}</div>
                        <button className="rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white">Xem</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Hoạt động</div>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-900">Gần đây</h2>
                </div>
                <button className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                  Tất cả
                </button>
              </div>

              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={activity} className="flex items-center gap-3 rounded-[18px] border border-slate-200 bg-slate-50 p-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">
                      {index % 2 === 0 ? <Check className="h-4 w-4" /> : <Star className="h-4 w-4" />}
                    </div>
                    <div className="text-sm leading-6 text-slate-700">{activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
