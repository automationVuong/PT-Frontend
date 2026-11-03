"use client";

import { CanvasDropDown } from "@/components/ui/CanvasDropDown";

export default function Header() {
  return (
    <header className="relative z-40 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[180px_minmax(0,1fr)_180px] items-center gap-4 px-4 py-3 lg:px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-[7px] border border-[#22b5b0] bg-white text-[18px] font-black text-[#1f2b32] shadow-sm">
            <span className="translate-y-[-1px]">⌂</span>
          </div>

          <div className="text-[15px] font-black tracking-[-0.04em] text-slate-900">
            rightmove
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-7 text-[13px] font-medium text-slate-700">
          <CanvasDropDown
            label="Mua"
            groups={[
              ["Bất động sản để bán", "Nhà mới để bán", "Vay mua nhà"],
              ["Định giá tài sản", "Nhà đầu tư"],
            ]}
          />

          <CanvasDropDown
            label="Thuê"
            groups={[["Nhà cho thuê", "Căn hộ cho thuê", "Biểu mẫu thuê"],["Hướng dẫn thuê", "Địa điểm nổi bật"]]}
          />

          <CanvasDropDown
            label="Giá nhà"
            groups={[["Chỉ số giá nhà", "Giá nhà gần đây", "Biểu đồ giá"],["Khu vực hot", "So sánh giá"]]}
          />

          <CanvasDropDown
            label="Vay mua nhà"
            groups={[["Lãi suất vay", "Tính khoản vay", "Hồ sơ vay"],["Tư vấn tài chính", "Lựa chọn ngân hàng"]]}
          />

          <CanvasDropDown
            label="Môi giới"
            groups={[["Tìm môi giới", "Đại lý uy tín", "Dịch vụ chuyên nghiệp"],["Đánh giá nhà", "Hỗ trợ khách hàng"]]}
          />

          <CanvasDropDown
            label="Thương mại"
            groups={[["Bất động sản thương mại", "Tìm văn phòng", "Tìm mặt bằng"],["Hỗ trợ đầu tư", "Đăng tin"]]}
          />

          <CanvasDropDown
            label="Khám phá"
            groups={[["Tin tức bất động sản", "Cộng đồng", "Xu hướng thị trường"],["Video review", "Khuyến nghị"]]}
          />

          <CanvasDropDown
            label="Quốc tế"
            groups={[["Bất động sản quốc tế", "Nhà ở nước ngoài", "Đầu tư quốc tế"],["Địa điểm nổi tiếng", "Tư vấn pháp lý"]]}
          />
        </nav>

        {/* Account */}
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-[8px] border border-[#0f6b73] bg-white px-3.5 py-2 text-[13px] font-medium text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,107,115,0.06)] transition hover:bg-slate-50"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0f6b73] text-[10px] font-bold text-white">
              ●
            </span>

            Tài khoản của tôi
          </button>
        </div>
      </div>
    </header>
  );
}
