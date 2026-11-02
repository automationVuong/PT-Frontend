"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Bath, BedDouble, Building2, MapPin, Search } from "lucide-react";

const TABS = ["Nhà bán", "Nhà mới", "Cho thuê", "Cộng đồng"];
const SEARCH_EXAMPLES = [
  "Hà Nội",
  "Căn hộ cao cấp",
  "Biệt thự ven hồ",
  "Chung cư trung tâm",
];

export const HeroSearch = () => {
  const [activeTab, setActiveTab] = useState("Nhà bán");
  const [query, setQuery] = useState("");
  const [typedExample, setTypedExample] = useState("");
  const [exampleIndex, setExampleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentExample = SEARCH_EXAMPLES[exampleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentExample.slice(0, typedExample.length + 1);
        setTypedExample(nextText);

        if (nextText === currentExample) {
          setIsDeleting(true);
        }
      } else {
        const nextText = currentExample.slice(0, typedExample.length - 1);
        setTypedExample(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setExampleIndex((prev) => (prev + 1) % SEARCH_EXAMPLES.length);
        }
      }
    }, isDeleting ? 55 : 90);

    return () => clearTimeout(timeout);
  }, [typedExample, isDeleting, exampleIndex]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}&type=${encodeURIComponent(activeTab)}`);
  };

  return (
    <section className="bg-[#f5f7fb] px-4 pb-12 pt-10 text-slate-900 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Thị trường bất động sản cao cấp
          </div>

          <h1 className="text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
            Bất động sản phù hợp với cuộc sống hiện đại.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
            Khám phá nhà ở được tuyển chọn, khu vực đẳng cấp và góc nhìn chuyên gia trong một nền tảng hiện đại.
          </p>
        </div>

        <div className="mt-10 rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
          <div className="relative overflow-hidden rounded-[24px] bg-slate-100 px-4 py-4 md:px-6 md:py-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.10),_transparent_24%),linear-gradient(135deg,#f8fafc_0%,#edf4ff_50%,#f5f7fb_100%)]" />

            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-3 py-2 text-[11px] font-semibold transition ${
                      activeTab === tab
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-[24px] border border-slate-200 bg-white p-3 md:p-4">
                  <div className="relative overflow-hidden rounded-[20px]">
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80"
                      alt="Căn nhà nổi bật"
                      className="h-[420px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.68))]" />

                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Tin nổi bật
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/10 bg-slate-950/30 p-4 backdrop-blur-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium text-slate-200">The Sapphire Residences</div>
                          <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-200">
                            <span className="inline-flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> 4 phòng ngủ</span>
                            <span className="inline-flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> 3 phòng tắm</span>
                            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Quận 9</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase tracking-[0.14em] text-slate-300">Từ</div>
                          <div className="text-xl font-black text-cyan-300">₫ 4,9 tỷ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-4 md:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Tìm kiếm</div>
                    <div className="rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                      {activeTab}
                    </div>
                  </div>

                  <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-slate-500">
                    <span>Ví dụ:</span>
                    <span className="min-h-[16px] rounded-full bg-blue-50 px-2 py-1 text-blue-700">
                      {typedExample}
                      <span className="ml-0.5 inline-block h-4 w-[1px] translate-y-0.5 bg-blue-600 align-middle" />
                    </span>
                  </div>

                  <form onSubmit={handleSearch} className="space-y-3">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={typedExample || "Tìm kiếm theo khu vực hoặc dự án"}
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:brightness-105"
                    >
                      Tìm nhà
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>

                  <div className="mt-5 space-y-2">
                    {[
                      "Căn hộ cao cấp",
                      "Chung cư trung tâm",
                      "Biệt thự gia đình",
                      "Đất đầu tư tiềm năng",
                    ].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600">
                        <span>{item}</span>
                        <span className="text-slate-400">{item.length}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-semibold text-slate-900">Hỗ trợ môi giới</span>
                      <Building2 className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-slate-500">Tư vấn 24/7, xem xét pháp lý và hỗ trợ vay mua nhà.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
