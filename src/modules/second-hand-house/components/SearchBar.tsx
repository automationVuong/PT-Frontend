"use client";

import { useState } from "react";

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

type SearchBarProps = {
  title?: string;
  subtitle?: string;
};

export function SearchBar({
  title = "",
  subtitle = "",
}: SearchBarProps) {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-4">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 px-4 py-3">
            <div>
              <div className="text-lg font-bold text-slate-800 sm:text-xl">{title}</div>
              <div className="text-[11px] text-slate-500 sm:text-xs">{subtitle}</div>
            </div>
          </div>

          <div className="px-4 pb-4 pt-2">
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
              <span className="text-lg text-slate-400">⌕</span>

              <input
                type="text"
                placeholder="Tìm theo tên dự án, chủ đầu tư, vị trí..."
                className="min-w-0 flex-1 border-0 bg-transparent text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none sm:text-base"
              />

              <button
                type="button"
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Tất cả
              </button>

              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-200 hover:text-blue-600"
              >
                Đang mở bán
              </button>

              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-200 hover:text-blue-600"
              >
                Sắp mở bán
              </button>

              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-200 hover:text-blue-600"
              >
                Đã bán giao
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-200 hover:text-blue-600"
              >
                Toàn quốc
                <span className="text-[10px]">⌄</span>
              </button>
            </div>
          </div>

          {!showMoreFilters && (
            <div className="flex justify-center px-4 pb-4">
              <button
                type="button"
                onClick={() => setShowMoreFilters(true)}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100"
              >
                Thêm tùy chọn
                <span className="text-[11px]">⌄</span>
              </button>
            </div>
          )}

          {showMoreFilters && (
            <div className="space-y-4 px-4 pb-4">
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

              <div className="flex justify-center pt-1">
                <button
                  type="button"
                  onClick={() => setShowMoreFilters(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
                >
                  Ẩn tùy chọn
                  <span className="text-[11px]">⌃</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
