"use client";

import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ListSortBar } from "./ListSortBar";
import { ResultList } from "./ResultList";

export function SecondHandHousePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <div className="min-h-screen bg-[#e7e8e5] text-slate-900">
      <header className="border-b border-slate-200 bg-[#f3f1ee]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1830] text-sm font-black text-white">
              H
            </div>
            <div className="leading-none">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                Rightmove
              </div>
              <div className="mt-1 text-sm font-bold text-slate-800">Premium</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[12px] font-medium text-slate-700 lg:flex">
            <a href="#" className="transition hover:text-slate-900">Buy</a>
            <a href="#" className="transition hover:text-slate-900">Rent</a>
            <a href="#" className="transition hover:text-slate-900">House Prices</a>
            <a href="#" className="transition hover:text-slate-900">Mortgages</a>
            <a href="#" className="transition hover:text-slate-900">Find Agent</a>
            <a href="#" className="transition hover:text-slate-900">Commercial</a>
            <a href="#" className="transition hover:text-slate-900">Insure</a>
            <a href="#" className="transition hover:text-slate-900">Overseas</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 md:inline-flex">
              Sign in
            </button>
            <button type="button" className="rounded-full bg-[#0b1830] px-4 py-2 text-sm font-semibold text-white shadow-sm">
              Contact
            </button>
          </div>
        </div>
      </header>

      <SearchBar />

      <div className="mx-auto max-w-[1280px] px-4 pt-4 lg:px-6">
        <div className="flex flex-col gap-5">
          <ListSortBar viewMode={viewMode} onViewChange={setViewMode} />
          <ResultList viewMode={viewMode} />
        </div>
      </div>
    </div>
  );
}
