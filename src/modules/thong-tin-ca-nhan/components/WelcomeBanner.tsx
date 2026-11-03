"use client";

import React from "react";
import Link from "next/link";
import { Smile, ChevronRight } from "lucide-react";

interface WelcomeBannerProps {
  userName?: string;
}

export function WelcomeBanner({ userName = "Vuong" }: WelcomeBannerProps) {
  return (
    <div className="w-full bg-[#00b69b] py-8 text-white shadow-inner">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Xin chào {userName}</h1>
          <p className="text-sm font-medium opacity-90 mt-1">
            Mọi thứ bạn cần để quản lý giao dịch bất động sản của mình, tập trung tại một nơi.
          </p>
        </div>

        {/* Hộp trạng thái động */}
        <div className="bg-white text-slate-900 p-4 rounded-xl shadow-md flex items-center justify-between gap-6 min-w-[300px]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-50 rounded-lg text-teal-700">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase">MỤC TIÊU CỦA TÔI</div>
              <div className="text-sm font-bold text-slate-800">Đang tìm mua nhà để ở</div>
              <div className="text-xs text-slate-500">Tôi hiện đang tích cực tìm kiếm nhà.</div>
            </div>
          </div>
          <Link href="/account-settings" className="text-teal-700 hover:bg-slate-50 p-2 rounded-lg transition">
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}