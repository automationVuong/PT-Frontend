import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  Camera,
  Clock3,
  Eye,
  Heart,
  MapPin,
  MessageSquareText,
  Play,
  Send,
  ShieldCheck,
  Star,
  Users,
  Video,
} from "lucide-react";

const listing = {
  title: "The Sapphire Residences",
  location: "Quận 9, TP. Hồ Chí Minh",
  price: "4,9 tỷ",
  tag: "Tài sản nổi bật",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  broker: "Khang Trần",
  viewers: "2,4k đang xem",
  duration: "18 phút đang phát sóng",
};

const chatMessages = [
  { user: "Lan N.", text: "Căn hộ này có tầm nhìn đẹp. Bạn có thể cho tôi xem thêm khu ban công không?", tone: "bg-blue-50 text-blue-700" },
  { user: "Huy P.", text: "Đặt cọc và lịch thanh toán như thế nào?", tone: "bg-emerald-50 text-emerald-700" },
  { user: "Trâm A.", text: "Có nhà ga metro và trường học gần đó không?", tone: "bg-amber-50 text-amber-700" },
  { user: "Duy T.", text: "Tôi muốn xem giấy tờ pháp lý trước khi quyết định.", tone: "bg-violet-50 text-violet-700" },
  { user: "Mai C.", text: "Có bao gồm chỗ đậu xe và tiện nghi phòng gym không?", tone: "bg-rose-50 text-rose-700" },
];

const features = [
  "4 phòng ngủ, 3 phòng tắm, 187 m²",
  "View thành phố panorama và vườn trên sân thượng",
  "Hệ thống nhà thông minh và chỗ đậu xe có mái che",
  "Tiếp cận trung tâm thương mại chỉ 2 phút",
  "Sở hữu hợp pháp và hồ sơ pháp lý đã xác minh",
];

const schedule = [
  "21:00 — Chào mừng và giới thiệu tổng quan dự án",
  "21:06 — Tour từng phòng và mặt bằng",
  "21:15 — Kiểm tra pháp lý và định giá",
  "21:22 — Hỏi đáp trực tiếp với môi giới",
];

const streams = [
  {
    title: "Căn hộ thượng lưu bên hồ",
    time: "Hôm nay • 20:30",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Biệt thự gia đình gần công viên",
    time: "Ngày mai • 19:15",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Chung cư đầu tư sinh lời cao",
    time: "Thứ bảy • 18:45",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
  },
];

export function StreamDetailPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <Link href="/live" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white shadow-lg shadow-blue-600/20">
                Q
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Q-Broker</div>
                <div className="text-lg font-black tracking-tight text-slate-900">Live bất động sản</div>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="/" className="hover:text-slate-900">Trang chủ</a>
            <a href="/live" className="hover:text-slate-900">Phát sóng</a>
            <a href="/mua-nha" className="hover:text-slate-900">Tài sản</a>
            <a href="/tin-tuc" className="hover:text-slate-900">Sự kiện</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition hover:border-slate-300">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
              Theo dõi stream
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
        <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/live" className="inline-flex items-center gap-2 font-medium text-slate-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4" />
            Quay lại trung tâm live
          </Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
          <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <div className="relative">
              <div className="relative h-[620px] overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.72))]" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 backdrop-blur-sm">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-100">Live</span>
                </div>

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-white backdrop-blur-sm">
                  <Eye className="h-4 w-4 text-cyan-300" />
                  {listing.viewers}
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-xl rounded-[28px] border border-white/10 bg-slate-950/30 p-4 backdrop-blur-sm">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-200">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {listing.tag}
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{listing.title}</h1>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-200">
                      <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> {listing.location}</span>
                      <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-300" /> {listing.duration}</span>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-slate-950/35 px-4 py-3 text-white backdrop-blur-sm">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">Giá</div>
                    <div className="mt-1 text-2xl font-black text-cyan-300">{listing.price}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-4 py-5">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Môi giới</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">{listing.broker}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Loại tài sản</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">Căn hộ cao cấp</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Tình trạng</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">Sẵn sàng ở</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Đánh giá</div>
                  <div className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-slate-900">
                    <Star className="h-4 w-4 fill-current text-amber-400" />
                    4.9/5
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <MessageSquareText className="h-4 w-4 text-blue-600" />
                Chat live
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
                324 mới
              </div>
            </div>

            <div className="space-y-3">
              {chatMessages.map((message) => (
                <div key={message.user} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-900">{message.user}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${message.tone}`}>
                      mới
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{message.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
              <input
                type="text"
                defaultValue="Hỏi môi giới"
                className="w-full bg-transparent py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <Send className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 rounded-[22px] border border-emerald-200 bg-emerald-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
                Tài sản đã xác minh
              </div>
              <p className="text-sm leading-6 text-emerald-800">
                Giấy tờ pháp lý, hồ sơ sở hữu và điều kiện giao dịch được xác minh trước khi phát sóng bắt đầu.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                <Camera className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Tổng quan tài sản</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
                <Clock3 className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Lịch trình stream</h2>
            </div>

            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600">Phát sóng tiếp theo</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Môi giới đáng theo dõi</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {streams.map((stream) => (
              <div key={stream.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <div className="relative">
                  <img src={stream.image} alt={stream.title} className="h-56 w-full object-cover" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    <span className="inline-flex h-2 w-2 rounded-full bg-red-500" />
                    LIVE
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {stream.time}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{stream.title}</h3>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15">
                    Tham gia ngay
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
