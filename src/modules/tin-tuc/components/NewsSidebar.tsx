"use client";

import React, { useState } from "react";
import { TrendingUp, Mail, CheckCircle2 } from "lucide-react";

const TRENDING_TOPICS = [
  "Chỉ số giá nhà Q4/2026",
  "Lãi suất vay mua nhà",
  "Thị trường căn hộ Hampstead",
  "Kinh nghiệm cải tạo nhà cổ",
  "BĐS thương mại London",
];

export function NewsSidebar() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="space-y-6">
      {/* Dang ky nhan tin */}
      <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50/30 p-6 shadow-sm">
        <div className="w-10 h-10 rounded-full bg-[#0f6b73] text-white flex items-center justify-center mb-4">
          <Mail className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Bản tin Thị trường Q-Broker</h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          Nhận phân tích chuyên sâu về chỉ số giá nhà và tin tức BĐS mới nhất hàng tuần.
        </p>

        {subscribed ? (
          <div className="mt-4 p-3 rounded-xl bg-teal-100/80 text-teal-800 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-700" /> Cảm ơn bạn đã đăng ký!
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-4 space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn..."
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f6b73]"
              required
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0f6b73] px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-800 transition shadow-sm cursor-pointer"
            >
              Đăng ký ngay
            </button>
          </form>
        )}
      </div>

      {/* Xu huong tim kiếm */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#0f6b73]" />
          <h3 className="text-base font-bold text-slate-900">Chủ đề quan tâm</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {TRENDING_TOPICS.map((topic) => (
            <button
              key={topic}
              type="button"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-[#0f6b73] hover:text-[#0f6b73] transition cursor-pointer"
            >
              #{topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}