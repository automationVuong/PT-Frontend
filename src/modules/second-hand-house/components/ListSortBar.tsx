type ListSortBarProps = {
  viewMode: "grid" | "list";
  onViewChange: (mode: "grid" | "list") => void;
};

const tabs = [
  "Newest",
  "Price",
  "Price/sqft",
  "Area",
];

export function ListSortBar({ viewMode, onViewChange }: ListSortBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 rounded-[18px] border border-slate-200 bg-white px-3 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.03)]">
        <div className="flex flex-wrap items-center gap-2 text-[15px] text-slate-600">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`rounded-full px-3.5 py-1.5 text-sm transition sm:text-[14px] ${
                index === 0
                  ? "bg-[#0d1b2a] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg transition ${
              viewMode === "grid"
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
            }`}
            aria-label="Grid view"
          >
            ▦
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg transition ${
              viewMode === "list"
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
            }`}
            aria-label="List view"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}
