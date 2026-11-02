"use client";

import { useMemo, useState } from "react";
import {
  BedDouble,
  Building2,
  ChevronRight,
  MapPin,
  Search,
  SlidersHorizontal,
  Square,
  Star,
} from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Căn hộ 3 phòng ngủ, P. Hòa Long",
    location: "Vinhomes Grand Park, Q.9",
    price: "4,2 tỷ",
    area: "86 m²",
    beds: 3,
    baths: 2,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    marker: { x: 32, y: 36 },
  },
  {
    id: 2,
    title: "Biệt thự 2 tầng, khu trung tâm",
    location: "Phú Mỹ Hưng, Q.7",
    price: "12,5 tỷ",
    area: "220 m²",
    beds: 4,
    baths: 3,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    marker: { x: 54, y: 54 },
  },
  {
    id: 3,
    title: "Căn hộ cao cấp 2 phòng ngủ",
    location: "Sông Đà, Thủ Đức",
    price: "3,2 tỷ",
    area: "72 m²",
    beds: 2,
    baths: 2,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    marker: { x: 47, y: 66 },
  },
  {
    id: 4,
    title: "Nhà phố cuối hẻm gần công viên",
    location: "Bình Thạnh, TP.HCM",
    price: "7,8 tỷ",
    area: "130 m²",
    beds: 3,
    baths: 3,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    marker: { x: 26, y: 58 },
  },
  {
    id: 5,
    title: "Shophouse 3 tầng mặt tiền",
    location: "Hà Đông, Hà Nội",
    price: "18,9 tỷ",
    area: "330 m²",
    beds: 5,
    baths: 4,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80",
    marker: { x: 72, y: 30 },
  },
  {
    id: 6,
    title: "Villa 1 trệt 2 lầu view hồ",
    location: "Đan Phượng, Hà Nội",
    price: "5,6 tỷ",
    area: "190 m²",
    beds: 4,
    baths: 3,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
    marker: { x: 66, y: 44 },
  },
];

export function MapPage() {
  const [selectedId, setSelectedId] = useState<number>(1);

  const selectedProperty = useMemo(
    () => listings.find((item) => item.id === selectedId) ?? listings[0],
    [selectedId]
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
              Q
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Q-Broker</div>
              <div className="text-lg font-black tracking-tight text-slate-800">Bất động sản</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a className="font-medium text-slate-800" href="#">Trang chủ</a>
            <a href="#">Dự án</a>
            <a href="#">Mua bán</a>
            <a href="#">Cho thuê</a>
            <a href="#">Tin tức</a>
            <a href="#">Liên hệ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Đăng nhập
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-600">Bán đồ</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Tìm bất động sản trên bản đồ</h1>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_12px_35px_rgba(15,23,42,0.06)] lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              defaultValue="Tìm kiếm dự án, địa điểm hoặc căn hộ"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-3 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
              <SlidersHorizontal className="h-4 w-4" />
              Tìm kiếm
            </button>
            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
              Mở rộng
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
          <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            <div className="mb-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Vị trí: Thành phố Hồ Chí Minh</span>
              </div>
              <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">16 bất động sản</div>
            </div>

            <div className="relative h-[760px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#edf6fb,#f3faf9_35%,#e8f3ef)]">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
                <path
                  d="M20 20 L44 12 L55 10 L72 18 L83 25 L86 38 L78 50 L86 60 L82 70 L70 82 L58 90 L45 85 L28 76 L18 58 L12 45 L20 20 Z"
                  fill="#b9f2d1"
                  stroke="#38b76a"
                  strokeWidth="1.5"
                />
                <path d="M24 30 L43 25 L54 27 L70 34 L62 50 L53 46 L45 52 L29 48 Z" fill="#b8efc9" opacity="0.8" />
                <path d="M24 58 L40 61 L51 73 L39 87 L29 80 Z" fill="#b8efc9" opacity="0.8" />
              </svg>

              {listings.map((property) => {
                const isSelected = property.id === selectedId;
                return (
                  <button
                    key={property.id}
                    type="button"
                    onClick={() => setSelectedId(property.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition"
                    style={{ left: `${property.marker.x}%`, top: `${property.marker.y}%` }}
                    aria-label={property.title}
                  >
                    <div
                      className={`relative flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[10px] font-bold shadow-lg ${
                        isSelected
                          ? "border-blue-500 bg-blue-600 text-white"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <span>{property.price}</span>
                    </div>
                    <div
                      className={`mt-1 h-4 w-4 rounded-full border-2 ${
                        isSelected ? "border-blue-600 bg-blue-500" : "border-white bg-emerald-500"
                      }`}
                    />
                  </button>
                );
              })}

              <div className="absolute left-4 top-5 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <Building2 className="h-3.5 w-3.5" />
                  Chú thích
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Bán</div>
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Đã chọn</div>
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Cho thuê</div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">Kết quả</div>
                <div className="mt-1 text-2xl font-black text-slate-900">16 tin</div>
              </div>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                Nổi bật
              </button>
            </div>

            <div className="space-y-3">
              {listings.map((property) => {
                const isSelected = property.id === selectedId;
                return (
                  <button
                    key={property.id}
                    type="button"
                    onClick={() => setSelectedId(property.id)}
                    className={`flex w-full items-start gap-3 rounded-[22px] border p-2 text-left transition ${
                      isSelected
                        ? "border-blue-200 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <img src={property.image} alt={property.title} className="h-20 w-20 rounded-[16px] object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-rose-700">
                          {property.price}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-500">
                          <Star className="h-3 w-3 fill-current" />
                          {property.rating}
                        </span>
                      </div>

                      <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-5 text-slate-800">{property.title}</h3>

                      <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-600">
                        <span className="inline-flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> {property.beds} PN</span>
                        <span className="inline-flex items-center gap-1"><Square className="h-3.5 w-3.5" /> {property.area}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-[20px] border border-slate-200 bg-slate-50 p-3">
              <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
                <span>Đã chọn</span>
                <span className="text-blue-600">{selectedProperty.price}</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={selectedProperty.image} alt={selectedProperty.title} className="h-14 w-14 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <h4 className="line-clamp-2 text-sm font-bold text-slate-800">{selectedProperty.title}</h4>
                  <p className="mt-1 text-xs text-slate-500">{selectedProperty.location}</p>
                </div>
              </div>
              <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-2.5 text-sm font-semibold text-white">
                Xem chi tiết
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
