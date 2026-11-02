type ListSortBarProps = {
  viewMode: "grid" | "list";
  onViewChange: (mode: "grid" | "list") => void;
};

const tabs = [
  "Mới nhất",
  "Tổng giá",
  "Giá nhà trên đơn vị",
  "Diện tích",
];

export function ListSortBar({ viewMode, onViewChange }: ListSortBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 border border-slate-200 bg-white px-3 py-3 text-slate-700 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-[15px] text-slate-600">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`rounded-md px-3.5 py-1.5 text-sm transition sm:text-[15px] ${
                index === 0
                  ? "bg-blue-600 text-white shadow-sm"
                  : "hover:bg-slate-100 hover:text-blue-600"
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
            className={`flex h-9 w-9 items-center justify-center rounded-md border text-lg transition ${
              viewMode === "grid"
                ? "border-blue-600 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-200 hover:text-blue-600"
            }`}
            aria-label="Grid view"
          >
            ▦
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            className={`flex h-9 w-9 items-center justify-center rounded-md border text-lg transition ${
              viewMode === "list"
                ? "border-blue-600 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-200 hover:text-blue-600"
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
