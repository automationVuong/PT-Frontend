import { Search } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="w-full bg-[#f4f1ef] pb-5">
      <div className="mx-auto max-w-[1280px] px-4 pt-0 lg:px-6">
        <div className="relative overflow-hidden rounded-[12px] border border-slate-200 bg-[#0b1830] shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
            alt="Property banner"
            className="h-[430px] w-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,24,48,0.08),rgba(11,24,48,0.62))]" />

          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-center px-4 pt-6">
            <div className="flex w-full max-w-[700px] items-center gap-2 rounded-[12px] border border-white/15 bg-[#0a1d35]/80 p-2 backdrop-blur-sm">
              <div className="flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-[12px] text-white/80">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[12px]">
                  ⌕
                </span>
                <span>Cổ điển</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 rounded-[10px] bg-white/8 px-3 py-2 text-[14px] text-slate-200">
                  <Search className="h-4 w-4 text-white/70" />
                  <span className="text-white/75">Nhập mã bưu điện, thành phố hoặc khu vực</span>
                </div>
              </div>

              <button type="button" className="rounded-[10px] bg-[#1dd4d3] px-4 py-2 text-[13px] font-semibold text-[#08243a] shadow-sm">
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-5">
            <div className="mx-auto max-w-[700px] text-center text-white">
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">Bất động sản tại Việt Nam</div>
              <h1 className="mt-2 text-4xl font-black tracking-[-0.06em] text-white md:text-[44px]">
                Tìm kiếm hàng ngàn ngôi nhà phù hợp với bạn
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
