import { BarChart3, Building2, TrendingUp } from "lucide-react";

const marketStats = [
  { label: "Average price growth", value: "+8.6%" },
  { label: "Rental yield", value: "5.2%" },
  { label: "New launches", value: "24" },
  { label: "Investor demand", value: "High" },
];

const quickTopics = [
  "Residential market outlook",
  "Commercial property trends",
  "Mortgage strategy updates",
  "Legal and contract guidance",
  "Neighborhood investment guide",
  "Luxury property demand",
];

export function NewsSidebar() {
  return (
    <aside className="space-y-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
            <BarChart3 className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Market snapshot</h3>
        </div>

        <div className="grid gap-3">
          {marketStats.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <span className="text-sm text-slate-600">{item.label}</span>
              <span className="text-sm font-bold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
            <Building2 className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Popular topics</h3>
        </div>

        <div className="space-y-2">
          {quickTopics.map((topic) => (
            <button key={topic} className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-3 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-100">
              <span>{topic}</span>
              <TrendingUp className="h-4 w-4 text-slate-400" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
