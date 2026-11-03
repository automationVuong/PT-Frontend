"use client";

import React from "react";
import Link from "next/link";
import { 
  X, 
  Heart, 
  Send, 
  MapPin, 
  Home, 
  Bell, 
  Settings, 
  LogOut 
} from "lucide-react";

interface UserDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

export function UserDrawer({ isOpen, onClose, userName = "Vuong" }: UserDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Lớp nền mờ phía sau (Backdrop) */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel trượt từ bên phải */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Phần đầu: Logo và nút đóng (X) */}
          <div>
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <div className="text-lg font-black tracking-tight text-slate-900">
                Q-broker
              </div>
              <button 
                type="button" 
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition"
                aria-label="Đóng"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Thông tin User */}
            <div className="px-6 py-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0f6b73] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                {userName.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{userName}</h3>
                <Link 
                  href="/thong-tin-ca-nhan" 
                  onClick={onClose}
                  className="text-sm font-semibold text-[#0f6b73] hover:underline"
                >
                  Xem tài khoản Q-Broker của tôi
                </Link>
              </div>
            </div>

            {/* Danh sách các tùy chọn menu */}
            <div className="px-4 py-4 space-y-1">
              <Link 
                href="#" 
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                <Heart className="w-5 h-5 text-slate-700" />
                <span>Bất động sản đã lưu</span>
              </Link>

              <Link 
                href="/nhan-tin" 
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                <Send className="w-5 h-5 text-slate-700" />
                <span>Yêu cầu tư vấn / Nhắn tin với chuyên gia</span>
              </Link>

              <Link 
                href="/drawn-areas" 
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                <MapPin className="w-5 h-5 text-slate-700" />
                <span>Khu vực đã khoanh vùng</span>
              </Link>

              <Link 
                href="/tracked-properties" 
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                <Home className="w-5 h-5 text-slate-700" />
                <span>Bất động sản theo dõi</span>
              </Link>

              <Link 
                href="/searches-alerts" 
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                <Bell className="w-5 h-5 text-slate-700" />
                <span>Tìm kiếm & Thông báo</span>
              </Link>
            </div>
          </div>

          {/* Phần chân panel: Cài đặt và Đăng xuất */}
          <div className="p-4 border-t border-slate-200 space-y-2">
            <Link 
              href="/cai-dat-tai-khoan" 
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 transition"
            >
              <Settings className="w-5 h-5 text-slate-700" />
              <span>Cài đặt tài khoản</span>
            </Link>

            <button 
              type="button"
              onClick={() => {
                alert("Đã đăng xuất thành công!");
                onClose();
              }}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition text-left cursor-pointer"
            >
              <LogOut className="w-5 h-5 text-slate-700" />
              <span>Đăng xuất</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}