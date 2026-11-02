type ProductVirtualTourProps = {
  title: string;
  image: string;
};

export function ProductVirtualTour({ title, image }: ProductVirtualTourProps) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-2 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
              VR 360°
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Tour 360° cho {title}</h2>
            <p className="mt-3 text-slate-600">
              Khám phá không gian sống, phòng khách, phòng ngủ và khu vực ngoài trời như
              đang đứng trực tiếp tại căn nhà.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Bắt đầu tour
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Xem hướng dẫn
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[620px] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
            <div
              className="relative h-[340px] w-full overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(15,23,42,0.10), rgba(15,23,42,0.12)), url(${image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.12)_100%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02),rgba(15,23,42,0.14))]" />

              <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-slate-900/35 px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white backdrop-blur-sm">
                360°
              </div>

              <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-white/25 bg-slate-900/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] backdrop-blur-[1px]" />

              <div className="absolute inset-x-8 bottom-8 top-16">
                <div className="absolute left-[8%] top-[34%] h-20 w-24 rounded-xl border border-white/40 bg-white/15" />
                <div className="absolute right-[12%] top-[28%] h-24 w-28 rounded-xl border border-white/40 bg-white/10" />
                <div className="absolute bottom-[14%] left-[18%] h-16 w-[28%] rounded-xl border border-white/40 bg-white/12" />
                <div className="absolute bottom-[12%] right-[18%] h-16 w-[24%] rounded-xl border border-white/40 bg-white/12" />
                <div className="absolute bottom-[8%] left-1/2 h-20 w-24 -translate-x-1/2 rounded-xl border border-white/40 bg-white/15" />
              </div>

              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-between px-5 text-white/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-slate-900/30 text-xl backdrop-blur-sm">
                  ←
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-slate-900/30 text-xl backdrop-blur-sm">
                  →
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-5 flex justify-center">
                <div className="rounded-full border border-white/40 bg-slate-900/35 px-4 py-2 text-[10px] font-medium tracking-[0.18em] text-white backdrop-blur-sm">
                  PANORAMA VIEW
                </div>
              </div>

              <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-slate-900/30 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
                Phòng khách
              </div>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-slate-900/30 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
                Phòng ngủ
              </div>
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-slate-900/30 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
                Sân vườn
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
