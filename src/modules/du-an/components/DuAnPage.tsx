"use client";

import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ListSortBar } from "./ListSortBar";
import { ResultList } from "./ResultList";

export function DuAnPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <div className="min-h-screen bg-[#e7e8e5] text-slate-900">
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
