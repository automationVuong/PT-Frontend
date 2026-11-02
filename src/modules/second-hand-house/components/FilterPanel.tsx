const locations = [
  "Quận Đông Thành",
  "Quận Tây Thành",
  "Quận Cánh Đồng",
  "Quận Hai Điền",
  "Quận Phùng Tài",
  "Quận Thạch Tân",
  "Quận Đồng Châu",
  "Quận Thường Bình",
  "Quận Đại Xuyên",
  "Quận Mến Tướng",
  "Quận Thuỷ Ngu",
  "Quận Phương Sơn",
];

const roomOptions = [
  "1 phòng",
  "2 phòng",
  "3 phòng",
  "4 phòng",
  "5 phòng",
  "Hơn 5 phòng",
];

const priceOptions = [
  "Dưới 1 triệu",
  "1 triệu - 2 triệu",
  "2 triệu - 3 triệu",
  "3 triệu - 5 triệu",
  "5 triệu - 10 triệu",
  "Trên 10 triệu",
];

export function FilterPanel() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-0 py-0 lg:mx-0">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="space-y-4">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
              Khu vực
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[13px] text-slate-600 hover:border-blue-200 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
              Phòng ngủ
            </div>
            <div className="flex flex-wrap gap-2">
              {roomOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[13px] text-slate-600 hover:border-blue-200 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
              Mức giá
            </div>
            <div className="flex flex-wrap gap-2">
              {priceOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[13px] text-slate-600 hover:border-blue-200 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
