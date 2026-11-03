"use client";

import { useState } from "react";

const filters = [
  "NW3",
  "This area only",
  "Min Price",
  "Max Price",
  "Min Beds",
  "Max Beds",
  "Property Type",
  "Filters",
];

export function SearchBar() {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  return (
    <div className="w-full bg-[#0d1f35]">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-6">
        <div className="flex flex-wrap items-center gap-2 py-3 text-[12px] text-slate-200">
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            NW3
          </div>
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            This area only
          </div>
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            Min Price
          </div>
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            Max Price
          </div>
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            Min Beds
          </div>
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            Max Beds
          </div>
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            Property Type
          </div>
          <div className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-slate-100 shadow-sm">
            Filters
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#f4f1ee]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 text-[12px] text-slate-700 lg:px-6">
          <div className="flex items-center gap-3">
            <span className="text-slate-500">Properties For Sale in NW3</span>
            <span className="text-slate-400">•</span>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700">
              Save Search
            </button>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700">
              Create Alert
            </button>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-slate-600">Sort:</span>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700">
              Highest Price
            </button>
            <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700">
              Map view
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
