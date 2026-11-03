export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#071a2d] bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.28),transparent_24%),linear-gradient(90deg,#081c31_0%,#06162d_30%,#0d1e33_70%,#1d2733_100%)]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-12 md:px-10 lg:px-16">
        <div className="max-w-[760px] py-8 md:py-12">
          <button
            type="button"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white/10 text-xs">
              ☰
            </span>
            Kho dự án Q-Broker
          </button>

          <h1 className="max-w-[700px] text-4xl font-light leading-[1.1] tracking-[-0.04em] text-white md:text-6xl">
            Dự án bất động sản — giới hàng & chính sách trực tiếp từ chủ đầu tư
          </h1>

          <p className="mt-8 max-w-[720px] text-lg leading-relaxed text-slate-200 md:text-2xl">
            Tra cứu bảng giá, phần khu, tiện ích và giới hàng cần theo thời gian thực.
            <br />
            Cập nhật trạng thái căn hộ, chứng chỉ, dự án và nền tảng liên kết.
          </p>
        </div>

        <div className="hidden flex-1 items-end justify-end lg:flex">
          <div className="relative h-[420px] w-[540px] overflow-hidden rounded-l-[32px] border-l border-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(11,18,28,0.25))]" />
            <div className="absolute inset-y-0 right-0 w-[72%] bg-[radial-gradient(circle_at_40%_15%,rgba(255,255,255,0.20),transparent_18%),linear-gradient(90deg,#364250_0%,#303d4d_30%,#172a3b_100%)] shadow-[-40px_0_80px_rgba(4,11,20,0.7)]" />
            <div className="absolute inset-y-0 right-[18%] w-5 bg-slate-800/60" />
            <div className="absolute inset-y-0 right-[10%] w-5 bg-slate-800/50" />
            <div className="absolute inset-y-0 right-[2%] w-4 bg-slate-800/40" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.4))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
