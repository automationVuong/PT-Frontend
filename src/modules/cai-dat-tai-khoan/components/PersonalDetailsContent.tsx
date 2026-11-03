"use client";

import React, { useState } from "react";
import { Edit, Plus, Check } from "lucide-react";

export function PersonalDetailsContent() {
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState("Vuong Truong");

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState("vuong*****5@gmail.com");

  return (
    <div className="flex-1 space-y-6">
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Thông tin cá nhân</h2>

        <div className="space-y-4">
          {/* Mục Họ và tên */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Họ và tên</span>
              {isEditingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-sm font-bold text-slate-900 bg-white border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              ) : (
                <span className="text-sm font-bold text-slate-900">{name}</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsEditingName(!isEditingName)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 transition"
            >
              {isEditingName ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-700" /> Lưu
                </>
              ) : (
                <>
                  <Edit className="w-3.5 h-3.5 text-teal-700" /> Chỉnh sửa
                </>
              )}
            </button>
          </div>

          {/* Mục Email */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Địa chỉ Email</span>
              {isEditingEmail ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm font-bold text-slate-900 bg-white border border-slate-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              ) : (
                <span className="text-sm font-bold text-slate-900">{email}</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsEditingEmail(!isEditingEmail)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 transition"
            >
              {isEditingEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-700" /> Lưu
                </>
              ) : (
                <>
                  <Edit className="w-3.5 h-3.5 text-teal-700" /> Chỉnh sửa
                </>
              )}
            </button>
          </div>

          {/* Mục Địa chỉ (Chưa có -> Thêm) */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Địa chỉ</span>
              <span className="text-sm text-slate-400 italic">Nhập địa chỉ của bạn</span>
            </div>
            <button
              type="button"
              onClick={() => alert("Mở form thêm địa chỉ")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-teal-700 text-xs font-semibold text-teal-700 bg-white hover:bg-teal-50 transition"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm
            </button>
          </div>

          {/* Mục Số điện thoại */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Số điện thoại</span>
              <span className="text-sm text-slate-400 italic">Nhập số điện thoại liên hệ</span>
            </div>
            <button
              type="button"
              onClick={() => alert("Mở form thêm số điện thoại")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-teal-700 text-xs font-semibold text-teal-700 bg-white hover:bg-teal-50 transition"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm
            </button>
          </div>
        </div>

        {/* Thông báo bảo mật quyền riêng tư */}
        <div className="mt-6 p-4 rounded-xl bg-teal-50 border border-teal-100 text-xs text-teal-900">
          <span className="font-bold">Ai sẽ nhìn thấy thông tin của bạn?</span> Thông tin chi tiết của bạn sẽ chỉ được nhìn thấy bởi chính bạn và các đơn vị môi giới khi bạn gửi yêu cầu tư vấn.
        </div>
      </div>
    </div>
  );
}