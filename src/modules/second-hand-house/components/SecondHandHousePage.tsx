"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ListSortBar } from "./ListSortBar";
import { ResultList } from "./ResultList";
import { HeroBanner } from "./HeroBanner";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    title: "Căn hộ cao tầng ở khu Đông của Xi...",
    location: "Khu Đông Xinjing",
    price: "$1,8 triệu",
    priceLabel: "tổng giá",
    tags: ["Gần trạm metro", "View", "Biệt thự", "Bãi đậu xe riêng"],
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    title: "Xinghai Jiayuan Xingyuan là căn nhà 5 năm tuổi...",
    location: "Xinghai Jiayuan Xingyuan",
    price: "$2,8 triệu",
    priceLabel: "tổng giá",
    tags: ["Gần trạm metro", "View", "Biệt thự", "Bãi đậu xe riêng"],
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    title: "Căn hộ 2 phòng ngủ ở phía đông nam...",
    location: "Lecheng",
    price: "$558K",
    priceLabel: "tổng giá",
    tags: ["Gần trạm metro", "View", "Biệt thự"],
  },
];

export function SecondHandHousePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const brokers = [
    {
      name: "Nguyễn Minh Anh",
      role: "Chuyên gia nhà phố",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Lê Hoàng Nam",
      role: "Môi giới căn hộ",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Trần Khánh Vy",
      role: "Tư vấn đầu tư",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroBanner />

      <section className="mx-auto max-w-[1400px] px-4 pt-8 lg:px-6">
        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-blue-50 via-white to-sky-50 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.05)] md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">Tư vấn miễn phí</div>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-slate-900 md:text-4xl">
                Không biết mua gì <span className="text-blue-600">→</span> nhận tư vấn ngay
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)] transition hover:bg-blue-700"
              >
                Nhận tư vấn
              </Link>
              <Link
                href="/live"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Gọi ngay
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {brokers.map((broker) => (
              <Link
                key={broker.name}
                href="/chat"
                className="flex items-center justify-between gap-3 rounded-[20px] border border-slate-200 bg-white/80 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={broker.image}
                    alt={broker.name}
                    className="h-12 w-12 rounded-2xl object-cover ring-2 ring-white"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{broker.name}</div>
                    <div className="text-xs text-slate-500">{broker.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                  ★ {broker.rating}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SearchBar />

      <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-6">
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="min-w-0 flex-1">
            <ListSortBar viewMode={viewMode} onViewChange={setViewMode} />
            <ResultList viewMode={viewMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
