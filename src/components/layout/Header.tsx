'use client';
import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { CanvasDropDown } from '../ui/CanvasDropDown';
import { AuthModal } from './AuthModal';

export const Header: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 px-10 py-3 flex items-center justify-between text-sm font-medium text-gray-700">
        {/* Left section: Logo & Nav Links */}
        <div className="flex items-center space-x-6 ml-60">
          <a href="#" className="flex items-center gap-1 text-red-600 font-bold text-xl tracking-tight">
            <Home className="w-6 h-6 fill-red-600 stroke-white" />
            <span>realtor<span className="text-gray-900">.com</span></span>
          </a>

          {/* Navigation Bar */}
          <nav className="hidden md:flex items-center space-x-3 text-gray-800">
            {/* Dropdown Items (Mua nhà, Bán nhà, Cho thuê) */}
            <CanvasDropDown 
              label="Mua nhà"
              groups={[
                ["Nhà đất bán", "Lịch mở bán (Open Houses)", "Mới giao dịch"],
                ["Nhà phát mại", "Dự án mới"]
              ]}
              hrefs={[
                ["/buy/homes", "/buy/open-houses", "/buy/sold"],
                ["/buy/foreclosures", "/buy/new-construction"]
              ]}
            />
            <CanvasDropDown 
              label="Bán nhà"
              groups={[
                ["Tìm môi giới", "Định giá nhà", "Cẩm nang người bán"],
                ["Giá trị tài sản", "Dịch vụ chuyển nhà"]
              ]}
              hrefs={[
                ["/sell/agents", "/sell/value", "/sell/guide"],
                ["/sell/equity", "/sell/moving"]
              ]}
            />
            <CanvasDropDown 
              label="Cho thuê"
              groups={[
                ["Tất cả bĐS cho thuê", "Căn hộ cho thuê", "Nhà nguyên căn cho thuê"],
                ["Đăng tin cho thuê", "Quản lý BĐS cho thuê"]
              ]}
              hrefs={[
                ["/rent", "/rent/apartments", "/rent/houses"],
                ["/rent/post", "/rent/manage"]
              ]}
            />

            {/* Standard Navigation Items without Dropdown */}
            <a 
              href="#" 
              className="group relative inline-flex rounded-[8px] px-2 py-2 text-[13px] font-black text-slate-700 hover:text-slate-900 transition"
            >
              Vay mua nhà
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a 
              href="#" 
              className="group relative inline-flex rounded-[8px] px-2 py-2 text-[13px] font-black text-slate-700 hover:text-slate-900 transition"
            >
              Tìm môi giới
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a 
              href="#" 
              className="group relative inline-flex rounded-[8px] px-2 py-2 text-[13px] font-black text-slate-700 hover:text-slate-900 transition"
            >
              Nhà của tôi
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a 
              href="#" 
              className="group relative inline-flex rounded-[8px] px-2 py-2 text-[13px] font-black text-slate-700 hover:text-slate-900 transition"
            >
              Tin tức & Phân tích
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </nav>
        </div>

        {/* Right section: User Actions */}
        <div className="flex items-center space-x-5 mr-4">
          <a 
            href="#" 
            className="group relative hidden sm:block text-slate-700 hover:text-black transition py-1 text-[13px] font-black"
          >
            Quản lý BĐS cho thuê
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>

          {/* Log in Button */}
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="group relative text-slate-700 hover:text-black transition py-1 text-[13px] font-black"
          >
            Đăng nhập
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>

          {/* Sign up Button */}
          <button 
            onClick={() => setIsAuthOpen(true)}
            className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition"
          >
            Đăng ký
          </button>
        </div>
      </header>

      {/* Auth Modal Overlay */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};