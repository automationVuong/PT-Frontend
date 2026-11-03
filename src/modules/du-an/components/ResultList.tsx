"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type ResultListProps = {
  viewMode: "grid" | "list";
};

const featured = {
  title: "Kidderpore Avenue, Hampstead, NW3",
  price: "₫1,3 tỷ",
  location: "Một căn hộ rộng 3 phòng ngủ đặc biệt tại Hampstead",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  secondaryImage:
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
};

const listings = [
  {
    title: "Greenaway Gardens, Hampstead, London, NW3",
    price: "₫1,9 tỷ",
    location: "A detached family home with gardens and a lovely outlook.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    tags: ["Detached", "7", "8"],
  },
  {
    title: "Brixton Road, London, SW9",
    price: "₫1,3 tỷ",
    location: "Two-bedroom apartment with modern kitchen and large terrace.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    tags: ["Apartment", "2", "2"],
  },
  {
    title: "Crescent Road, Primrose Hill, NW1",
    price: "₫2,3 tỷ",
    location: "Spacious period home with sunny garden and bright interiors.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    tags: ["House", "4", "3"],
  },
];

const recentlySold = [
  {
    id: "s1",
    title: "Netherhall Gardens, Hampstead...",
    price: "₫900 triệu",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
    status: "ĐÃ BÁN (STC)",
  },
  {
    id: "s2",
    title: "Parsifal Road, West Hampstead...",
    price: "₫600 triệu",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    status: "ĐÃ BÁN (STC)",
  },
  {
    id: "s3",
    title: "Oak Grove, London, NW2",
    price: "₫400 triệu",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    status: "ĐÃ BÁN (STC)",
  },
  {
    id: "s4",
    title: "Birchington Road, London, NW6",
    price: "₫700 triệu",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    status: "ĐÃ BÁN (STC)",
  },
];

export function ResultList({ viewMode }: ResultListProps) {
  return (
    <section className="w-full pb-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Bộ đếm kết quả và thanh công cụ trên */}
        <div className="flex items-center justify-between px-2 pb-3 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-medium text-slate-500">775 kết quả</span>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700">
              Ưu tiên tài sản với...
            </button>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700">
              Thêm từ khóa
            </button>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-[12px] text-slate-500">Sắp xếp:</span>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-700">
              Giá cao nhất
            </button>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-700">
              Xem bản đồ
            </button>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_300px]">
          {/* Cột danh sách kết quả chính */}
          <div className="space-y-5">
            {/* Mục nổi bật đầu tiên */}
            <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <div className="flex items-center gap-2 bg-[#1b8c9a] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                <span className="inline-flex items-center justify-center rounded-[4px] border border-white/50 bg-white/10 px-1.5 py-0.5 text-[10px]">
                  1/1/4
                </span>
                <span>BẤT ĐỘNG SẢN NỔI BẬT</span>
              </div>

              <div className="grid gap-0 md:grid-cols-[1.4fr_1.05fr_0.95fr]">
                <div className="relative h-[330px] overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
                  <div className="absolute bottom-0 left-0 bg-[#1b8c9a]/90 px-4 py-3 text-[32px] font-bold text-white">
                    {featured.price}
                  </div>
                </div>

                <div className="grid grid-rows-[1fr_auto] border-l border-slate-200 bg-white">
                  <div className="h-[200px] overflow-hidden border-b border-slate-200">
                    <img src={featured.secondaryImage} alt={featured.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="h-[130px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" alt="Interior detail" className="h-full w-full object-cover" />
                  </div>
                </div>

                <div className="bg-white p-4">
                  <div className="space-y-3">
                    <h3 className="text-[18px] font-bold text-slate-800">{featured.title}</h3>

                    <div className="flex items-center gap-3 text-[12px] font-medium text-slate-600">
                      <span className="flex items-center gap-1">🏠 Căn hộ</span>
                      <span className="flex items-center gap-1">🛏 3</span>
                      <span className="flex items-center gap-1">🛁 2</span>
                    </div>

                    <p className="text-[14px] leading-6 text-slate-600">
                      {featured.location}
                    </p>

                    <div className="rounded-[10px] border border-slate-200 bg-slate-50 p-3 text-[13px] text-slate-600">
                      Được thêm vào 10/08/2026 bởi Beauchamp Estates Ltd, St John’s...
                    </div>

                    <div className="mt-4 flex items-center gap-3 border-t border-slate-200 pt-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-slate-200 bg-slate-100 text-[18px]">
                        ☎
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-slate-800">020 3907 3637</div>
                        <div className="text-[11px] text-slate-500">Giá gọi nội hạt</div>
                      </div>

                      <button type="button" className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-medium text-slate-700">
                        ♡ Lưu
                      </button>
                    </div>

                    <div className="pt-2">
                      <Link href={`/du-an/${slugify(featured.title)}`} className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-medium text-slate-700 hover:bg-slate-100">
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vòng lặp các danh sách tiếp theo */}
            {listings.map((item) => {
              const href = `/vi/home/second-hand-house/${slugify(item.title)}`;

              return (
                <div key={item.title} className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                  <div className="flex items-center gap-2 bg-[#1b8c9a] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    <span className="inline-flex items-center justify-center rounded-[4px] border border-white/50 bg-white/10 px-1.5 py-0.5 text-[10px]">
                      1/1/4
                    </span>
                    <span>BẤT ĐỘNG SẢN NỔI BẬT</span>
                  </div>

                  <div className="grid gap-0 md:grid-cols-[1.4fr_1.05fr_0.95fr]">
                    <div className="relative h-[330px] overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                      <div className="absolute bottom-0 left-0 bg-[#1b8c9a]/90 px-4 py-3 text-[32px] font-bold text-white">
                        {item.price}
                      </div>
                    </div>

                    <div className="grid grid-rows-[1fr_auto] border-l border-slate-200 bg-white">
                      <div className="h-[200px] overflow-hidden border-b border-slate-200">
                        <img src={item.secondaryImage ?? item.image} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="h-[130px] overflow-hidden">
                        <img src={item.image} alt="Interior detail" className="h-full w-full object-cover" />
                      </div>
                    </div>

                    <div className="bg-white p-4">
                      <div className="space-y-3">
                        <h3 className="text-[18px] font-bold text-slate-800">{item.title}</h3>

                        <div className="flex items-center gap-3 text-[12px] font-medium text-slate-600">
                          <span className="flex items-center gap-1">🏠 {item.tags[0] === "Detached" ? "Nhà riêng" : item.tags[0] === "Apartment" ? "Căn hộ" : "Nhà"}</span>
                          <span className="flex items-center gap-1">🛏 {item.tags[1]}</span>
                          <span className="flex items-center gap-1">🛁 {item.tags[2]}</span>
                        </div>

                        <p className="text-[14px] leading-6 text-slate-600">
                          {item.location}
                        </p>

                        <div className="rounded-[10px] border border-slate-200 bg-slate-50 p-3 text-[13px] text-slate-600">
                          Được thêm vào 10/08/2026 bởi Beauchamp Estates Ltd, St John’s...
                        </div>

                        <div className="mt-4 flex items-center gap-3 border-t border-slate-200 pt-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-slate-200 bg-slate-100 text-[18px]">
                            ☎
                          </div>
                          <div>
                            <div className="text-[12px] font-bold text-slate-800">020 3907 3637</div>
                            <div className="text-[11px] text-slate-500">Giá gọi nội hạt</div>
                          </div>

                          <button type="button" className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-medium text-slate-700">
                            ♡ Lưu
                          </button>
                        </div>

                        <div className="pt-2">
                          <Link href={href} className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-medium text-slate-700 hover:bg-slate-100">
                            Xem chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Phần Recently Sold Near (Đã bán gần đây) */}
            <div className="rounded-[12px] border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Recently Sold Near
                </span>
                <h3 className="text-base font-bold text-slate-900">NW3 by Martyn Gerrard</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recentlySold.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-slate-50">
                    <div className="relative h-40">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                      <div className="absolute top-2 left-2 rounded bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                        {item.status}
                      </div>
                      <div className="absolute top-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
                        1/4
                      </div>
                      <div className="absolute bottom-2 left-2 rounded bg-slate-900/90 px-2 py-1 text-xs font-bold text-white">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="truncate text-xs font-semibold text-slate-800">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-16 items-center justify-center rounded border border-blue-200 bg-blue-50 font-bold text-blue-800">
                    MG
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Martyn Gerrard</div>
                    <div className="text-slate-500">Hampstead</div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 text-right">
                  <span className="text-slate-600">We're selling properties in your area </span>
                  <a href="#" className="font-semibold text-[#1b8c9a] hover:underline">
                    Click here to get help with selling yours ›
                  </a>
                </div>
              </div>
            </div>

            {/* Thanh phân trang (Pagination) chuẩn Rightmove */}
            <div className="flex items-center justify-between rounded-[12px] border border-slate-200 bg-white px-6 py-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-400 hover:text-slate-700 disabled:opacity-50"
                disabled
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>

              <div className="flex items-center gap-3 text-sm">
                <div className="relative">
                  <select className="appearance-none rounded-lg border border-slate-300 bg-white px-4 py-1.5 pr-8 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1b8c9a]">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-slate-500" />
                </div>
                <span className="text-slate-600 font-medium">of 33</span>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-[#1b8c9a]"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Cột bên phải (Sidebar) */}
          <aside className="hidden xl:block space-y-5">
            <div className="rounded-[12px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <div className="h-[260px] overflow-hidden rounded-[10px] border border-slate-200 bg-[radial-gradient(circle_at_30%_20%,#d3e9d4,#b7d5c0_30%,#a8becd_50%,#dfe7e8_100%)]">
                <div className="flex h-full items-center justify-center text-[12px] text-slate-600">
                  Vị trí ước tính
                </div>
              </div>

              <button type="button" className="mt-4 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
                Xem nhà cho thuê ở NW3
              </button>
            </div>

            <div className="rounded-[12px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
              <h3 className="text-[20px] font-bold text-slate-800">Sẵn sàng với khoản vay theo nguyên tắc</h3>
              <div className="mt-4 flex h-28 items-center justify-center rounded-[12px] border border-dashed border-slate-200 bg-slate-50 text-4xl">
                🏠
              </div>

              <div className="mt-4 space-y-3 text-[14px] leading-6 text-slate-600">
                <p className="font-semibold text-slate-800">Kết quả cá nhân hóa chỉ trong 20 phút</p>
                <p>Tìm hiểu bạn có thể vay bao nhiêu</p>
                <p>Nhận xem nhà nhanh hơn với các đại lý</p>
                <p>Không ảnh hưởng đến điểm tín dụng của bạn</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}