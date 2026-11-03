"use client";

import React, { useState } from "react";
import { Search, X, ChevronDown, SlidersHorizontal } from "lucide-react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("NW3");

  return (
    <div className="w-full bg-[#0d232a] py-3.5 shadow-md">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#081a20] p-2 border border-slate-700">
          
          {/* 1. Ô nhập khu vực tìm kiếm */}
          <div className="flex flex-1 items-center bg-white rounded-lg px-3 py-2 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Nhập khu vực, mã bưu điện..."
              className="w-full text-sm font-semibold text-slate-900 focus:outline-none bg-transparent"
            />
            {searchTerm && (
              <button 
                type="button" 
                onClick={() => setSearchTerm("")}
                className="text-slate-400 hover:text-slate-600 ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 2. Dropdown bán kính (Chỉ khu vực này) */}
          <div className="relative hidden md:block">
            <button
              type="button"
              className="flex items-center justify-between gap-3 bg-white px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              <span>Chỉ khu vực này</span>
              <ChevronDown className="w-4 h-4 text-teal-700" />
            </button>
          </div>

          {/* Đường ngăn cách */}
          <div className="hidden lg:block h-6 w-[1px] bg-slate-700 mx-1" />

          {/* 3. Giá (Giá tối thiểu đến Giá tối đa) */}
          <div className="flex items-center gap-1 bg-transparent text-white px-2">
            <button type="button" className="flex items-center gap-2 text-sm font-medium hover:text-teal-400 transition py-2 px-2">
              <span>Giá tối thiểu</span>
              <ChevronDown className="w-4 h-4 text-teal-400" />
            </button>
            <span className="text-xs text-slate-400">đến</span>
            <button type="button" className="flex items-center gap-2 text-sm font-medium hover:text-teal-400 transition py-2 px-2">
              <span>Giá tối đa</span>
              <ChevronDown className="w-4 h-4 text-teal-400" />
            </button>
          </div>

          {/* Đường ngăn cách */}
          <div className="hidden lg:block h-6 w-[1px] bg-slate-700 mx-1" />

          {/* 4. Số phòng ngủ (Phòng ngủ tối thiểu đến tối đa) */}
          <div className="flex items-center gap-1 bg-transparent text-white px-2">
            <button type="button" className="flex items-center gap-2 text-sm font-medium hover:text-teal-400 transition py-2 px-2">
              <span>PN tối thiểu</span>
              <ChevronDown className="w-4 h-4 text-teal-400" />
            </button>
            <span className="text-xs text-slate-400">đến</span>
            <button type="button" className="flex items-center gap-2 text-sm font-medium hover:text-teal-400 transition py-2 px-2">
              <span>PN tối đa</span>
              <ChevronDown className="w-4 h-4 text-teal-400" />
            </button>
          </div>

          {/* Đường ngăn cách */}
          <div className="hidden lg:block h-6 w-[1px] bg-slate-700 mx-1" />

          {/* 5. Loại bất động sản (Property Type) */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-teal-400 transition px-3 py-2"
            >
              <span>Loại nhà đất</span>
              <ChevronDown className="w-4 h-4 text-teal-400" />
            </button>
          </div>

          {/* Đường ngăn cách */}
          <div className="hidden lg:block h-6 w-[1px] bg-slate-700 mx-1" />

          {/* 6. Bộ lọc nâng cao (Filters) */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-teal-400 transition px-3 py-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-teal-400" />
              <span>Bộ lọc</span>
              <ChevronDown className="w-4 h-4 text-teal-400" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

