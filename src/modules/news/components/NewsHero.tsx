import { ArrowRight, Newspaper, TrendingUp } from "lucide-react";

export function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-sky-950 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.25),_transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              <Newspaper className="h-3.5 w-3.5" />
              Tin tức bất động sản
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              Góc nhìn bất động sản cho người mua, nhà đầu tư và nhà phát triển.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-200">
              Cập nhật xu hướng giá, thay đổi pháp lý, tăng trưởng khu vực, chiến lược tài chính và dự án mới nhất trên thị trường.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Đọc cập nhật mới nhất
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100">
                <TrendingUp className="h-4 w-4 text-cyan-300" />
                Theo dõi thị trường
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[22px] bg-slate-950/35">
              <img
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80"
                alt="Báo cáo thị trường bất động sản"
                className="h-[320px] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Báo cáo nổi bật</p>
                <h2 className="mt-2 text-2xl font-bold">Nhu cầu nhà ở vẫn mạnh ở các tuyến ngoại thành</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Chuyên gia cho rằng người mua đang dịch chuyển sang khu vực có trường học, giao thông và tiện ích hỗn hợp tốt hơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
