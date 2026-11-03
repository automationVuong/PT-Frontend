"use client";

import React from "react";
import Link from "next/link";
import { Bell, Search } from "lucide-react";

export function SearchesAndAlertsSidebar() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-slate-700" />
        <h2 className="text-lg font-bold text-slate-900">Tìm kiếm & Thông báo</h2>
      </div>

      <div className="text-center py-6 border-2 border-dashed border-slate-100 rounded-xl bg-slate-50 mb-6">
        <div className="w-10 h-10 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-2">
          <Bell className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-slate-800 text-xs">Bạn chưa lưu tìm kiếm nào</h3>
        <p className="text-[11px] text-slate-500 mt-1 px-4">
          Bật thông báo để nhận tin tức về bất động sản mới ngay lập tức.
        </p>
        <Link
          href="/du-an"
          className="mt-3 inline-block px-4 py-1.5 bg-white border border-teal-700 text-teal-700 font-bold text-[11px] rounded-lg hover:bg-teal-50 transition shadow-sm"
        >
          Bắt đầu tìm kiếm
        </Link>
      </div>

      {/* Tìm kiếm gần đây */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Tìm kiếm gần đây
        </h3>
        <div className="space-y-2">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-slate-800">NW3, for sale</span>
              <span className="block text-[10px] text-slate-500">#PropertySale</span>
            </div>
            <Search className="w-4 h-4 text-slate-400" />
          </div>
        </div>
        <Link href="#" className="block text-xs font-semibold text-teal-700 hover:underline mt-3 text-right">
          Xem tất cả tìm kiếm gần đây &rarr;
        </Link>
      </div>
    </div>
  );
}