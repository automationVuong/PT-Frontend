type ProductInfoProps = {
  description: string;
  type: string;
  status: string;
};

const featureHighlights = [
  "View đẹp, thoáng",
  "Không gian sống mở",
  "Nội thất cao cấp",
  "An ninh 24/7",
  "Đường vào rộng",
  "Giao thông kết nối tốt",
];

const trustedBrokers = [
  {
    name: "Nguyễn Minh Anh",
    role: "Senior Broker",
    experience: "8 năm",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Investment Advisor",
    experience: "6 năm",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Trần Khánh Vy",
    role: "Luxury Properties",
    experience: "10 năm",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
  },
];

export function ProductInfo({ description, type, status }: ProductInfoProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.5fr_0.82fr]">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          <h2 className="text-2xl font-black tracking-[-0.05em] text-slate-900">Mô tả chi tiết</h2>
        </div>

        <p className="leading-8 text-base text-slate-600">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {featureHighlights.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Loại hình</div>
            <div className="mt-2 text-lg font-bold text-slate-900">{type}</div>
          </div>
          <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Tình trạng</div>
            <div className="mt-2 text-lg font-bold text-slate-900">{status}</div>
          </div>
          <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Nội khu</div>
            <div className="mt-2 text-lg font-bold text-slate-900">Tiện ích đầy đủ</div>
          </div>
          <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Mức độ</div>
            <div className="mt-2 text-lg font-bold text-slate-900">Premium</div>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Trusted partner</div>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-900">
                Nhóm môi giới đáng tin cậy
              </h3>
            </div>
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              Xem tất cả
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {trustedBrokers.map((broker) => (
              <div
                key={broker.name}
                className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={broker.image}
                    alt={broker.name}
                    className="h-14 w-14 rounded-[16px] object-cover ring-2 ring-white shadow-sm"
                  />
                  <div>
                    <div className="text-base font-black text-slate-900">{broker.name}</div>
                    <div className="text-sm text-slate-500">{broker.role}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">Kinh nghiệm</div>
                    <div className="mt-1 text-sm font-bold text-slate-900">{broker.experience}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">Đánh giá</div>
                    <div className="mt-1 text-sm font-bold text-blue-700">{broker.rating}</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                    Đã xác minh
                  </span>
                  <button
                    type="button"
                    className="rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                  >
                    Liên hệ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)]">
        <h2 className="text-2xl font-black tracking-[-0.05em] text-slate-900">Liên hệ</h2>

        <div className="mt-5 space-y-4 text-slate-600">
          <div className="rounded-[18px] border border-slate-200 bg-slate-50 p-3.5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Người liên hệ</div>
            <div className="mt-2 text-base font-bold text-slate-900">Nguyễn Minh Anh</div>
          </div>
          <div className="rounded-[18px] border border-slate-200 bg-slate-50 p-3.5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Điện thoại</div>
            <div className="mt-2 text-base font-bold text-slate-900">+84 912 345 678</div>
          </div>
          <div className="rounded-[18px] border border-slate-200 bg-slate-50 p-3.5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Email</div>
            <div className="mt-2 text-base font-bold text-slate-900">minh.anh@broker.vn</div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[22px] border border-slate-200 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.12),transparent_22%),linear-gradient(135deg,#eff6ff,#f8fafc)] p-4">
          <div className="flex h-40 items-end justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Vị trí</div>
              <div className="mt-2 text-base font-bold text-slate-900">{type}</div>
            </div>
            <div className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-blue-700 shadow-sm">
              5 phút
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
